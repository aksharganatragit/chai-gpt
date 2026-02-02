import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';
import { SpiceService } from '../../core/services/spice.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() menuClick = new EventEmitter<void>();

  constructor(
    public theme: ThemeService,
    public spice: SpiceService
  ) {}

  setSpice(level: string) {
    this.spice.setLevel(level as any);
  }
}
