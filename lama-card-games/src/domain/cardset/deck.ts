import Card from "./card";

export class Deck<TSuit> {
  private cards: Card<TSuit>[];
  private takenCards: Card<TSuit>[];

  constructor(cards: Card<TSuit>[]) {
    this.cards = cards;
    this.takenCards = [];
  }

  takeCard() {
    const card = this.cards.pop();
    if (card) {
      this.takenCards.push(card);
    }
    return card;
  }

  shuffle() {
    this.shuffleCards(this.cards);
  }

  shuffleTakenCardsBackIntoDeck() {
    this.shuffleCards(this.takenCards);
    this.cards = [...this.cards, ...this.takenCards];
    this.takenCards = [];
  }

  private shuffleCards(cards: Card<TSuit>[]) {
    let currentIndex = cards.length;
    let temporaryValue: Card<TSuit>;
    let randomIndex: number;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
  }


}
