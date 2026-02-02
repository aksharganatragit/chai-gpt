import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeService } from '../../core/services/theme.service';
import { SpiceService } from '../../core/services/spice.service';
import { SpiceLevel } from '../../core/models/spice.type';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // 👈 REQUIRED
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  levels: SpiceLevel[] = ['mild', 'medium', 'kadak'];

  constructor(
    public theme: ThemeService,
    public spice: SpiceService
  ) {}

  setSpice(level: SpiceLevel) {
    this.spice.setLevel(level);
  }
}
