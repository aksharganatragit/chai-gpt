import { Injectable } from '@angular/core';
import { SpiceLevel } from '../models/spice.type';

@Injectable({ providedIn: 'root' })
export class SpiceService {
  private readonly STORAGE_KEY = 'chai-spice';
  private level: SpiceLevel = 'medium';

  constructor() {
    const saved = localStorage.getItem(this.STORAGE_KEY) as SpiceLevel | null;
    if (saved) {
      this.level = saved;
    }
  }

  setLevel(level: SpiceLevel) {
    this.level = level;
    localStorage.setItem(this.STORAGE_KEY, level);
  }

  getLevel(): SpiceLevel {
    return this.level;
  }
}
