import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';

/**
 * Converts the model's Markdown reply (**bold**, *bullets*, etc.) into HTML
 * so the chat bubble shows real formatting instead of literal asterisks.
 *
 * The output string is bound via [innerHTML], so Angular's built-in sanitizer
 * still strips anything dangerous (scripts, etc.) for us.
 */
@Pipe({ name: 'markdown', standalone: true })
export class MarkdownPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';
    return marked.parse(value, { async: false, gfm: true, breaks: true }) as string;
  }
}
