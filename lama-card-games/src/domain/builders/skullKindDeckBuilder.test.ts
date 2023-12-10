import { describe, expect, test } from 'vitest';
import skullKingDeckBuilder, {
  ALL_SKULLKING_SUITS,
} from './skullKingDeckBuilder';

describe('test skull king deck builder', () => {
  test('generate deck should return a deck of 66 cards', () => {
    const deck = skullKingDeckBuilder.generateDeck();
    expect(deck).toBeDefined();
    let numberOfCards = 0;
    while (deck.takeCard()) {
      numberOfCards++;
    }
    expect(numberOfCards).toBe(66);
  });

  test('generate deck should return a deck with 5 pirates', () => {
    const deck = skullKingDeckBuilder.generateDeck();
    let numberOfPirates = 0;
    let card = deck.takeCard();
    while (card) {
      if (card.special === 'pirate') {
        numberOfPirates++;
      }
      card = deck.takeCard();
    }
    expect(numberOfPirates).toBe(5);
  });

  test('generate deck should return a deck with 2 mermaids', () => {
    const deck = skullKingDeckBuilder.generateDeck();
    let numberOfMermaids = 0;
    let card = deck.takeCard();
    while (card) {
      if (card.special === 'mermaid') {
        numberOfMermaids++;
      }
      card = deck.takeCard();
    }
    expect(numberOfMermaids).toBe(2);
  });

  test('generate deck should return a deck with 5 escape cards', () => {
    const deck = skullKingDeckBuilder.generateDeck();
    let numberOfEscapeCards = 0;
    let card = deck.takeCard();
    while (card) {
      if (card.special === 'escape') {
        numberOfEscapeCards++;
      }
      card = deck.takeCard();
    }
    expect(numberOfEscapeCards).toBe(5);
  });

  test('generate deck should return a deck with 1 skull king', () => {
    const deck = skullKingDeckBuilder.generateDeck();
    let numberOfSkullKings = 0;
    let card = deck.takeCard();
    while (card) {
      if (card.special === 'skull-king') {
        numberOfSkullKings++;
      }
      card = deck.takeCard();
    }
    expect(numberOfSkullKings).toBe(1);
  });

  test('generate deck should return a deck with 1 scarry marry', () => {
    const deck = skullKingDeckBuilder.generateDeck();
    let numberOfScarryMarrys = 0;
    let card = deck.takeCard();
    while (card) {
      if (card.special === 'scarry-marry') {
        numberOfScarryMarrys++;
      }
      card = deck.takeCard();
    }
    expect(numberOfScarryMarrys).toBe(1);
  });

  test('generate deck should return a deck with 13 cards of each suit', () => {
    const deck = skullKingDeckBuilder.generateDeck();
    const suits: { [id:  string]: number } = {};
    ALL_SKULLKING_SUITS.forEach((suit) => {
      suits[suit] = 0;
    });

    let card = deck.takeCard();
    while (card) {
      suits[card.suit]++;
      card = deck.takeCard();
    }
    expect(suits['red']).toBe(13);
    expect(suits['yellow']).toBe(13);
    expect(suits['blue']).toBe(13);
    expect(suits['black']).toBe(13);
    expect(suits['none']).toBe(66-4*13);
  });
});
