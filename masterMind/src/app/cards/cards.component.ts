import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  lastCardsFlipped: Card[] = [];
  cardsArray = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
  counterTurned = 0;
  card1: number | null = null;
  card2: number | null = null;

  found = 0;
  missing = 6;
  attempts = 0;
  time: number = 0;
  intervalTimer: any;
  cards: Card[] = [];

  ngOnInit() {
    console.log('Cards Inicializated');
    this.loadCards();
    this.timer();
  }

  timer() {
    console.log('Temporizador iniciado');
    this.intervalTimer = setInterval(() => {
      this.time++;
    }, 1000);
  }

  unorderArrays(arrayX: number[]) {
    return arrayX.sort(() => Math.random() - 0.5);
  }

  loadCards() {
    const cardsTemporary = this.unorderArrays(this.cardsArray);
    let modifier = 10;
    for (let i = 0; i < 12; i++) {
      if (i == 4 || i == 8) {
        modifier = 10;
      }
      let y = 10;
      if (i > 3 && i < 8) {
        y = 130;
      }
      if (i > 7) {
        y = 250;
      }
      const cardTemporary = new Card(modifier, y, 100, 100, `assets/img/${cardsTemporary[i]}.png`, false, false);
      this.cards.push(cardTemporary);
      modifier = modifier + 120;
    }
  }

  flip(card: Card) {
    if (!card.turned){

      console.log('Voltear carta:', card);
      if (!card.turned && this.counterTurned < 2) {
        card.turned = true;
        this.lastCardsFlipped.push(card);
      }
      console.log(this.lastCardsFlipped);

      this.counterTurned++;

      if (this.counterTurned === 2) {
        this.card1 = this.lastCardsFlipped[0]?.valor;
        this.card2 = this.lastCardsFlipped[1]?.valor;
        this.attempts++;

        if (this.card1 === this.card2) {

          this.lastCardsFlipped[0].equal = true;
          this.lastCardsFlipped[1].equal = true;

          this.found += 1;
          this.missing -= 1;
          this.lastCardsFlipped = [];
          if (this.found === 6) {
            clearInterval(this.intervalTimer);
            const ganasteElement = document.getElementById('win');
            if (ganasteElement) {
              ganasteElement.style.display = 'block';
            }
          }
        } else {
          setTimeout(() => {
            this.lastCardsFlipped.forEach(carta => {
              carta.turned = false;
            });
            this.lastCardsFlipped = [];
          }, 1000);
        }

        this.counterTurned = 0;
      }
    }
  }
}

  class Card {
  constructor(
    public x: number,
    public y: number,
    public w: number,
    public h: number,
    public imageBack: string,
    public turned: boolean,
    public equal: boolean
  ) {}

  get valor(): number {
    const match = this.imageBack.match(/(\d+)\.png$/);
    return match ? parseInt(match[1]) : 0;
  }
}
