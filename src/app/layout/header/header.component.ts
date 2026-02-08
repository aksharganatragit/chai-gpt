import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';
import { SpiceService } from '../../core/services/spice.service';
import { SpiceLevel } from '../../core/models/spice.type';

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

  setSpice(level: SpiceLevel) {
    this.spice.setLevel(level);
  }

  // helper for template (clean + readable)
  isActive(level: SpiceLevel): boolean {
    return this.spice.getLevel() === level;
  }
}
