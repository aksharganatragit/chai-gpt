import { Injectable } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'chai-theme';
  private currentTheme: Theme = 'light';

  constructor() {
    const saved = localStorage.getItem(this.storageKey) as Theme | null;
    this.setTheme(saved ?? 'light');
  }

  setTheme(theme: Theme) {
    this.currentTheme = theme;
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem(this.storageKey, theme);
  }

  toggleTheme() {
    this.setTheme(this.currentTheme === 'light' ? 'dark' : 'light');
  }

  getTheme(): Theme {
    return this.currentTheme;
  }
}
