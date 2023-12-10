import { describe, expect, test } from "vitest";
import { Deck } from "./deck";
import Card from "./card";

describe("test deck", () => {
  test("takeCard should return the last card in the deck", () => {
    const firstCard = new Card("a", "a", 0, "a");
    const lastCard = new Card("b", "b", 0, "b");
    const deck = new Deck([firstCard, lastCard]);

    const card = deck.takeCard();

    expect(card).toEqual(lastCard);
    expect(card).not.toEqual(firstCard);
  });

  test("takeCard should remove the last card in the deck", () => {
    const firstCard = new Card("a", "a", 0, "a");
    const lastCard = new Card("b", "b", 0, "b");
    const deck = new Deck([firstCard, lastCard]);

    deck.takeCard();
    expect(deck.cards.length).toEqual(1);
  });

  test("takeCard should return undefined if there are no cards in the deck", () => {
    const deck = new Deck([]);
    const card = deck.takeCard();
    expect(card).toBeUndefined();
  });

  test("shuffle should shuffle the cards in the deck", () => {
    const originalCards = [];
    for (let index = 0; index < 100; index++) {
      originalCards.push(
        new Card(index.toString(), index.toString(), index, null)
      );
    }

    const deck = new Deck([...originalCards]);

    // decreasing the chance that the cards will be in the same order after shuffling
    for (let index = 0; index < 5; index++) {
      deck.shuffle();
    }

    // check that original cards equals the spread operator of original cards (passed in with deck)
    expect(originalCards).toEqual([...originalCards]);
    expect(deck.cards).not.toEqual(originalCards);
  });
});
