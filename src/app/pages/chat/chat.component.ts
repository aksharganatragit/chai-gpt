import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Message } from '../../core/models/message.model';
import { ChaiEngineService } from '../../core/services/chai-engine.service';
import { ChatSessionService } from '../../core/services/chat-session.service';
import { LlmService } from '../../core/services/llm.service';
import { SpiceService } from '../../core/services/spice.service';
import { MarkdownPipe } from '../../shared/pipes/markdown.pipe';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, MarkdownPipe],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bottomAnchor') bottomAnchor!: ElementRef<HTMLDivElement>;

  messages: Message[] = [];
  inputText = '';
  isTyping = false;
  isGenerating = false;        // true while waiting for / streaming a reply
  copiedId: string | null = null;
  showConfirm = false;

  private viewport?: VisualViewport;
  private viewportHandler?: () => void;
  private streamTimer?: number;
  private abortController?: AbortController;

  constructor(
    private chaiEngine: ChaiEngineService,
    private session: ChatSessionService,
    private llm: LlmService,
    private spice: SpiceService
  ) {
    this.session.actionStream$.subscribe(action => {
      if (action.type === 'new-chat') {
        this.session.hasActiveConversation()
          ? (this.showConfirm = true)
          : this.resetChat();
      }

      if (action.type === 'topic' && action.topicPrompt) {
        this.resetChat();
        this.inputText = action.topicPrompt;
        this.sendMessage();
      }
    });
  }

  /* ===============================
     KEYBOARD HANDLING (STABLE)
     =============================== */
  ngAfterViewInit() {
    const vv = window.visualViewport;
    if (!vv) return;

    const update = () => {
      const offset =
        window.innerHeight - vv.height - vv.offsetTop;

      document.documentElement.style.setProperty(
        '--keyboard-offset',
        `${Math.max(offset, 0)}px`
      );
    };

    vv.addEventListener('resize', update);
    vv.addEventListener('scroll', update);
    update();

    this.viewport = vv;
    this.viewportHandler = update;
  }

  ngOnDestroy() {
    if (this.streamTimer) clearInterval(this.streamTimer);
    if (this.viewport && this.viewportHandler) {
      this.viewport.removeEventListener('resize', this.viewportHandler);
      this.viewport.removeEventListener('scroll', this.viewportHandler);
    }
  }

  /* ===============================
     CHAT FLOW
     =============================== */
  async sendMessage() {
    if (this.isGenerating) return;       // ignore new sends while busy
    if (!this.inputText.trim()) return;

    this.session.markConversationStarted();

    const userText = this.inputText;
    this.inputText = '';

    this.messages.push({
      id: crypto.randomUUID(),
      sender: 'user',
      text: userText,
      timestamp: new Date(),
    });

    this.scrollToBottom();

    // Build the FULL history (memory) from every message so far, in the
    // shape the LLM expects: our 'chai' sender maps to the model's 'assistant'.
    const history = this.messages.map(m => ({
      role: (m.sender === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
      content: m.text,
    }));

    this.isGenerating = true;
    this.isTyping = true;
    this.abortController = new AbortController();

    try {
      const reply = await this.llm.getReply(
        history,
        this.spice.getLevel(),
        this.abortController.signal
      );
      this.streamReply(reply);
    } catch (err: any) {
      this.isTyping = false;
      if (err?.name === 'AbortError') {
        // user pressed Stop before the reply arrived — just bail quietly
        this.isGenerating = false;
        return;
      }
      this.streamReply('Arre yaar, kuch gadbad ho gayi ☕ — thodi der baad try karna.');
    }
  }

  /** Stop button: cancel the request AND halt the streaming animation. */
  stopGenerating() {
    this.abortController?.abort();              // cancel in-flight request (if any)
    if (this.streamTimer) clearInterval(this.streamTimer); // stop word streaming
    this.isTyping = false;
    this.isGenerating = false;
  }

  /** Copy a reply to the clipboard, with a brief "Copied" confirmation. */
  async copyMessage(msg: Message) {
    try {
      await navigator.clipboard.writeText(msg.text);
      this.copiedId = msg.id;
      window.setTimeout(() => {
        if (this.copiedId === msg.id) this.copiedId = null;
      }, 1500);
    } catch {
      /* clipboard not available — ignore */
    }
  }

  /** Share a reply via the native share sheet (mobile), else fall back to copy. */
  async shareMessage(msg: Message) {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'ChaiGPT', text: msg.text });
      } catch {
        /* user dismissed the share sheet — ignore */
      }
    } else {
      await this.copyMessage(msg);
    }
  }

  private streamReply(text: string) {
    const msg: Message = {
      id: crypto.randomUUID(),
      sender: 'chai',
      text: '',
      timestamp: new Date(),
      allowReadMore: true,
    };

    this.messages.push(msg);
    this.isTyping = true;

    const words = text.split(' ');
    let i = 0;

    this.streamTimer = window.setInterval(() => {
      if (i >= words.length) {
        clearInterval(this.streamTimer);
        this.isTyping = false;
        this.isGenerating = false;
        return;
      }

      msg.text += (i === 0 ? '' : ' ') + words[i++];
      this.scrollToBottom();
    }, 70);
  }

  /* ===============================
     UI HELPERS
     =============================== */
  handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      this.sendMessage();
    }
  }

  autoResize(e: Event) {
    const ta = e.target as HTMLTextAreaElement;
    ta.style.height = 'auto';
    ta.style.height = ta.scrollHeight + 'px';
  }

  private scrollToBottom() {
    requestAnimationFrame(() =>
      this.bottomAnchor?.nativeElement.scrollIntoView({ behavior: 'smooth' })
    );
  }

  confirmNewChat() {
    this.resetChat();
    this.showConfirm = false;
  }

  cancelNewChat() {
    this.showConfirm = false;
  }

  private resetChat() {
    this.messages = [];
    this.inputText = '';
    this.session.clearConversation();
  }

  openInChatGPT(text: string) {
    const q = encodeURIComponent(`Continue this thought:\n\n${text}`);
    window.open(`https://chat.openai.com/?q=${q}`, '_blank');
  }
}
