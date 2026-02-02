import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-language-select',
  standalone: true,
  templateUrl: './language-select.component.html',
  styleUrl: './language-select.component.scss',
})
export class LanguageSelectComponent {
  constructor(
    private language: LanguageService,
    private router: Router
  ) {}

  choose(lang: 'english' | 'hinglish') {
    this.language.setLanguage(lang);
    this.router.navigate(['/chat']);
  }
}
