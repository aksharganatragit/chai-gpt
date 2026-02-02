import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private topicPrompt$ = new Subject<string>();

  topicPromptStream$ = this.topicPrompt$.asObservable();

  startWithPrompt(prompt: string) {
    this.topicPrompt$.next(prompt);
  }
}
