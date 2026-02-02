import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TOPICS } from '../../core/data/topics';
import { Topic } from '../../core/models/topic.model';
import { ChatSessionService } from '../../core/services/chat-session.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  topics: Topic[] = TOPICS;
  collapsed = false;

  constructor(private session: ChatSessionService) {}

  toggle() {
    this.collapsed = !this.collapsed;
  }

  newChat() {
    this.session.requestNewChat();
    this.collapsed = true;
  }

  selectTopic(prompt: string) {
    this.session.startWithTopic(prompt);
    this.collapsed = true;
  }
}
