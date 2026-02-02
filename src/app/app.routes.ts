import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { ChatComponent } from './pages/chat/chat.component';
import { LanguageSelectComponent } from './pages/language-select/language-select.component';

export const routes: Routes = [
  { path: '', component: LanguageSelectComponent },
  {
    path: 'chat',
    component: LayoutComponent,
    children: [{ path: '', component: ChatComponent }],
  },
];
