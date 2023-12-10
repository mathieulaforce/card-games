import Card from "../cardset/card";
import { Deck } from "../cardset/deck";
import { DeckBuilder } from "./deckBuilder";

export const ALL_SKULLKING_SUITS = ["blue", "red", "yellow", "black", "none"] as const;
export type SkullkingSuitTuple = typeof ALL_SKULLKING_SUITS;
export type SkulkingSuit = SkullkingSuitTuple[number];

const HIGHEST_NUMBER_CARD_VALUE = 13;
const LOWEST_NUMBER_CARD_VALUE = 1;

const generateNumberCards = (suit: SkulkingSuit): Array<Card<SkulkingSuit>> => {
  const numberCards = [];
  for (let cardValue = LOWEST_NUMBER_CARD_VALUE; cardValue <= HIGHEST_NUMBER_CARD_VALUE; cardValue++) {
    numberCards.push(new Card<SkulkingSuit>(suit, cardValue.toString(), cardValue, null));
  }
  return numberCards;
};

const generateSuitCards = (): Array<Card<SkulkingSuit>> => {
  const suitCards: Array<Card<SkulkingSuit>> = [];
  ALL_SKULLKING_SUITS.forEach((suit) => {
    if(suit !== "none")
    {
      suitCards.push(...generateNumberCards(suit));
    }
  });

  return suitCards;
};

const generateEscapeCards = (): Card<SkulkingSuit>[] => {
  const escapeCards = [];
  for (let i = 0; i < 5; i++) {
    escapeCards.push(new Card<SkulkingSuit>("none", "Escape", 0, "escape"));
  }
  return escapeCards;
};

const generateMermaidCards = ():Card<SkulkingSuit>[] => {
  const mermaidCards:Card<SkulkingSuit>[] = [];
  for (let i = 0; i < 2; i++) {
    mermaidCards.push(new Card("none", "Mermaid", 14, "mermaid"));
  }
  return mermaidCards;
};

const generatePirateCards = (): Card<SkulkingSuit>[] => {
  return [
    new Card<SkulkingSuit>("none", "Cortuga Jack", 15, "pirate"),
    new Card<SkulkingSuit>("none", "Betty Brave", 15, "pirate"),
    new Card<SkulkingSuit>("none", "Badeye Joe", 15, "pirate"),
    new Card<SkulkingSuit>("none", "Harry The Giant", 15, "pirate"),
    new Card<SkulkingSuit>("none", "Evil Emy", 15, "pirate"),
  ];
};

const generateSpecialCards = (): Array<Card<SkulkingSuit>> => {
  return [
    ...generateEscapeCards(),
    ...generateMermaidCards(),
    ...generatePirateCards(),
    new Card<SkulkingSuit>("none", "Scarry Mary", 16,"scarry-marry"),
    new Card<SkulkingSuit>("none", "Skull King", 17, "skull-king"),
  ];
};

const skullKingDeckBuilder : DeckBuilder<SkulkingSuit> =  {
  generateDeck: () => {
    const cards = [...generateSuitCards(), ...generateSpecialCards()];
    return new Deck(cards);
  }
};

export default skullKingDeckBuilder;