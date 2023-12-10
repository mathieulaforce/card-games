import Card from "./card";

class Hand {
    cards: Card[];
    userId: string;
    private constructor(cards: Card[], userId: string) {
        this.cards = cards;
        this.userId = userId;
    }

    static create(userId: string) {
        return new Hand([], userId);
    }

    addCard(card: Card) {
        this.cards.push(card);
    }

    removeCard(card: Card) {
        this.cards = this.cards.filter(c => c !== card);
    }

    sort() {
        this.cards.sort((a, b) => a.value - b.value);
    }
}

export default Hand;