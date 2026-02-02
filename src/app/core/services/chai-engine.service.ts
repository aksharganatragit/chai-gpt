import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';
import { SpiceService } from './spice.service';
import { SpiceLevel } from '../models/spice.type';

@Injectable({ providedIn: 'root' })
export class ChaiEngineService {
  constructor(
    private language: LanguageService,
    private spice: SpiceService
  ) {}

  private usedFacts = new Set<number>();

  // 🔹 ONLY the opening line changes with language
  private hinglishOpeners = [
    'Arre ye chhod na… tu ye sun 😏',
    'Bhai ye sab baad mein… ek baat bataun?',
    'Chhod ye topic… real baat ye hai 👀',
  ];

  private englishOpeners = [
    'Forget that… listen to this ☕',
    'Drop that for a second 👀',
    'Let that go… here’s something better ☕',
  ];

  // 🔥 SPICE-BASED FACT POOLS
  private facts: Record<SpiceLevel, string[]> = {
    mild: [
      'Chai tastes better when someone else is paying.',
      'Indian families gossip the most right after saying “we don’t interfere.”',
    ],
    medium: [
      'India pretends food is sacred, yet most snacks were invented by breaking all diet rules.',
      'Gujarat is officially dry, yet alcohol delivery there is shockingly efficient.',
    ],
    kadak: [
      'Societies that scream “sanskar” the loudest often have the most secret WhatsApp groups.',
      'Victorian England banned public affection while quietly funding entire pleasure districts.',
    ],
  };

  getReply(userInput: string): string {
    const opener = this.language.isHinglish()
      ? this.pickRandom(this.hinglishOpeners)
      : this.pickRandom(this.englishOpeners);

    const fact = this.pickUnusedFact();
    return `${opener}\n\n${fact}`;
  }

  private pickRandom(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  private pickUnusedFact(): string {
    const level = this.spice.getLevel();
    const pool = this.facts[level];

    if (this.usedFacts.size === pool.length) {
      this.usedFacts.clear();
    }

    let index: number;
    do {
      index = Math.floor(Math.random() * pool.length);
    } while (this.usedFacts.has(index));

    this.usedFacts.add(index);
    return pool[index];
  }
}
