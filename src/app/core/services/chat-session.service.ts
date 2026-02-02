import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ChatAction {
  type: 'new-chat' | 'topic';
  topicPrompt?: string;
}

@Injectable({ providedIn: 'root' })
export class ChatSessionService {
  private action$ = new Subject<ChatAction>();
  actionStream$ = this.action$.asObservable();

  private hasMessages = false;

  markConversationStarted() {
    this.hasMessages = true;
  }

  clearConversation() {
    this.hasMessages = false;
  }

  hasActiveConversation(): boolean {
    return this.hasMessages;
  }

  requestNewChat() {
    this.action$.next({ type: 'new-chat' });
  }

  startWithTopic(prompt: string) {
    this.markConversationStarted();
    this.action$.next({ type: 'topic', topicPrompt: prompt });
  }
}
