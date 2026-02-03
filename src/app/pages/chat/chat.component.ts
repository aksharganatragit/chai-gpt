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

  private viewport: VisualViewport | null = null;
  private viewportListener?: () => void;
  private streamingInterval?: number;

  constructor(
    private chaiEngine: ChaiEngineService,
    private session: ChatSessionService
  ) {
    this.session.actionStream$.subscribe(action => {
      if (action.type === 'new-chat') {
        if (this.session.hasActiveConversation()) {
          this.showConfirm = true;
        } else {
          this.resetChat();
        }
      }

      if (action.type === 'topic' && action.topicPrompt) {
        this.resetChat();
        this.inputText = action.topicPrompt;
        this.sendMessage();
      }
    });
  }

  /* ===============================
     KEYBOARD HANDLING (FINAL)
     =============================== */
  ngAfterViewInit() {
    const viewport = window.visualViewport;
    if (!viewport) return;

   const update = () => {
  const keyboardOffset =
    window.innerHeight - viewport.height - viewport.offsetTop;

  const offset = Math.max(keyboardOffset, 0);

  document.documentElement.style.setProperty(
    '--keyboard-offset',
    `${offset}px`
  );
};

    viewport.addEventListener('resize', update);
    viewport.addEventListener('scroll', update);

    update();

    this.viewport = viewport;
    this.viewportListener = update;
  }

  ngOnDestroy() {
    if (this.streamingInterval) {
      clearInterval(this.streamingInterval);
    }

    if (this.viewport && this.viewportListener) {
      this.viewport.removeEventListener('resize', this.viewportListener);
      this.viewport.removeEventListener('scroll', this.viewportListener);
    }

    document.body.style.position = '';
  }

  /* ===============================
     CHAT LOGIC
     =============================== */
  sendMessage() {
    if (!this.inputText.trim()) return;

    this.session.markConversationStarted();

    const userInput = this.inputText;

    this.messages.push({
      id: crypto.randomUUID(),
      sender: 'user',
      text: userInput,
      timestamp: new Date(),
    });

    this.inputText = '';
    this.scrollToBottom();

    const reply = this.chaiEngine.getReply(userInput);
    this.streamReply(reply);
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

    this.streamingInterval = window.setInterval(() => {
      if (i >= words.length) {
        clearInterval(this.streamingInterval);
        this.isTyping = false;
        return;
      }

      msg.text += (i === 0 ? '' : ' ') + words[i++];
      this.scrollToBottom();
    }, 70);
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

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  autoResize(event: Event) {
    const el = event.target as HTMLTextAreaElement;
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  }

  private scrollToBottom() {
    requestAnimationFrame(() => {
      this.bottomAnchor?.nativeElement.scrollIntoView({
        behavior: 'smooth',
      });
    });
  }

  openInChatGPT(text: string) {
    const prompt = `Continue this thought:\n\n${text}`;
    window.open(
      `https://chat.openai.com/?q=${encodeURIComponent(prompt)}`,
      '_blank'
    );
  }
}
