import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'chai-theme';
  
  // Signal for reactive theme state
  currentTheme = signal<Theme>('light');

  constructor() {
    this.initTheme();
  }

  private initTheme() {
    const saved = this.getSavedTheme();
    this.setTheme(saved);
  }

  private getSavedTheme(): Theme {
    try {
      const saved = localStorage.getItem(this.storageKey) as Theme | null;
      return saved === 'dark' || saved === 'light' ? saved : 'light';
    } catch {
      return 'light';
    }
  }

  setTheme(theme: Theme) {
    this.currentTheme.set(theme);
    
    // Apply to BOTH html and body for maximum compatibility
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    
    // Also add class for easier targeting
    document.documentElement.className = `${theme}-theme`;
    
    try {
      localStorage.setItem(this.storageKey, theme);
    } catch (e) {
      console.warn('Could not save theme preference', e);
    }
  }

  toggleTheme() {
    const newTheme: Theme = this.currentTheme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  getTheme(): Theme {
    return this.currentTheme();
  }

  isDark(): boolean {
    return this.currentTheme() === 'dark';
  }
}