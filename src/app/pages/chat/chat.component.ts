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

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bottomAnchor') bottomAnchor!: ElementRef<HTMLDivElement>;

  messages: Message[] = [];
  inputText = '';
  isTyping = false;
  showConfirm = false;

  private viewport?: VisualViewport;
  private viewportHandler?: () => void;
  private streamTimer?: number;

  constructor(
    private chaiEngine: ChaiEngineService,
    private session: ChatSessionService
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
  sendMessage() {
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
    this.streamReply(this.chaiEngine.getReply(userText));
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
