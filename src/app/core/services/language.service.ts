import { Injectable } from '@angular/core';
import { Language } from '../models/language.type';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly STORAGE_KEY = 'chai-language';
  private currentLanguage: Language = 'hinglish';

  constructor() {
    const saved = localStorage.getItem(this.STORAGE_KEY) as Language | null;
    if (saved) {
      this.currentLanguage = saved;
    }
  }

  setLanguage(lang: Language) {
    this.currentLanguage = lang;
    localStorage.setItem(this.STORAGE_KEY, lang);
  }

  getLanguage(): Language {
    return this.currentLanguage;
  }

  isHinglish(): boolean {
    return this.currentLanguage === 'hinglish';
  }
}
