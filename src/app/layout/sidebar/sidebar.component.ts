import { Component, HostListener } from '@angular/core';
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
  isMobile = false;

  // Fun emoji icons for topics
  private topicIcons = ['🎯', '💡', '🚀', '🎨', '📚', '⚡', '🌟', '🎭', '🔥', '💫'];

  constructor(private session: ChatSessionService) {
    this.checkMobile();
  }

  @HostListener('window:resize')
  checkMobile() {
    this.isMobile = window.innerWidth < 768;

    // On mobile, NEVER allow collapsed rail
    if (this.isMobile) {
      this.collapsed = false;
    }
  }

  toggle() {
    // Desktop only
    if (!this.isMobile) {
      this.collapsed = !this.collapsed;
    }
  }

  newChat() {
    this.session.requestNewChat();
  }

  selectTopic(prompt: string) {
    this.session.startWithTopic(prompt);
  }

  // Get a fun icon for each topic
  getTopicIcon(index: number): string {
    return this.topicIcons[index % this.topicIcons.length];
  }
}