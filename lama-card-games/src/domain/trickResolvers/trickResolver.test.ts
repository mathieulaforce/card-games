/* eslint-disable no-unused-vars */
import { describe, expect, test } from 'vitest';
import Trick from '../cardset/trick';
import Card from '../cardset/card';
import { SkulkingSuit } from '../builders/skullKingDeckBuilder';
import { SkullKingTrickResolver } from './skullKingTrickResolver';

describe('trickresolver skullking', () => {
  const red1 = new Card<SkulkingSuit>('red', '1', 1, null);
  const red2 = new Card<SkulkingSuit>('red', '2', 2, null);
  const red3 = new Card<SkulkingSuit>('red', '3', 3, null);
  const red4 = new Card<SkulkingSuit>('red', '4', 4, null);

  const blue1 = new Card<SkulkingSuit>('blue', '1', 1, null);
  const blue2 = new Card<SkulkingSuit>('blue', '2', 2, null);
  const blue3 = new Card<SkulkingSuit>('blue', '3', 3, null);
  const blue4 = new Card<SkulkingSuit>('blue', '4', 4, null);

  const yellow1 = new Card<SkulkingSuit>('yellow', '1', 1, null);
  const yellow2 = new Card<SkulkingSuit>('yellow', '2', 2, null);
  const yellow3 = new Card<SkulkingSuit>('yellow', '3', 3, null);
  const yellow4 = new Card<SkulkingSuit>('yellow', '4', 4, null);

  const black1 = new Card<SkulkingSuit>('black', '1', 1, null);
  const black2 = new Card<SkulkingSuit>('black', '2', 2, null);
  const black3 = new Card<SkulkingSuit>('black', '3', 3, null);
  const black4 = new Card<SkulkingSuit>('black', '4', 4, null);

  const skullKing = new Card<SkulkingSuit>(
    'none',
    'Skull King',
    16,
    'skull-king',
  );
  const pirate = new Card<SkulkingSuit>('none', 'Cortuga Jack', 15, 'pirate');
  const mermaid = new Card<SkulkingSuit>('none', 'Mermaid', 14, 'mermaid');
  const escape = new Card<SkulkingSuit>('none', 'Escape', 0, 'escape');
  const scarryMary = new Card<SkulkingSuit>(
    'none',
    'Scarry Mary',
    16,
    'scarry-marry',
  );

  function createTrick(...args: Card<SkulkingSuit>[]) {
    const trick = new Trick<SkulkingSuit>();
    args.forEach((card, index) => {
      trick.addCard(card, `player${index + 1}`);
    });
    return trick;
  }

  test('when given only suit cards, highest suit wins', () => {
    const trickResolver = new SkullKingTrickResolver();
    const trick = createTrick(red1, blue4, red3, red2);

    const result = trickResolver.resolveTrick(trick);
    expect(result.find((res) => res.isWinner)?.userId).toBe('player3');
  });

  test('when given only suit cards with a low black suit card then black wins', () => {
    const trickResolver = new SkullKingTrickResolver();
    const trick = createTrick(red1, blue4, red3, black2);

    const result = trickResolver.resolveTrick(trick);
    expect(result.find((res) => res.isWinner)?.userId).toBe('player4');
  });

  test('when given suit cards with a black and a pirate, pirate wins', () => {
    const trickResolver = new SkullKingTrickResolver();
    const trick = createTrick(red1, blue4, red3, pirate);

    const result = trickResolver.resolveTrick(trick);
    expect(result.find((res) => res.isWinner)?.userId).toBe('player4');
  });

  test('when given suit cards with a black and a mermaid, mermaid wins', () => {
    const trickResolver = new SkullKingTrickResolver();
    const trick = createTrick(red1, blue4,mermaid, red3);

    const result = trickResolver.resolveTrick(trick);
    expect(result.find((res) => res.isWinner)?.userId).toBe('player3');
  });

  test('when given suit cards with a black and a skull king, skull king wins', () => {
    const trickResolver = new SkullKingTrickResolver();
    const trick = createTrick(red1, blue4,skullKing, red3);

    const result = trickResolver.resolveTrick(trick);
    expect(result.find((res) => res.isWinner)?.userId).toBe('player3');
  });
  
  test('when given suit cards with a black and a pirate and a mermaid, pirate wins', () => {
    const trickResolver = new SkullKingTrickResolver();
    const trick = createTrick(red1, blue4,pirate, mermaid);

    const result = trickResolver.resolveTrick(trick);
    expect(result.find((res) => res.isWinner)?.userId).toBe('player3');
  });

  test('when given suit cards with a black and a pirate and a skull king, skull king wins', () => {
    const trickResolver = new SkullKingTrickResolver();
    const trick = createTrick(red1, blue4,pirate, skullKing);

    const result = trickResolver.resolveTrick(trick);
    expect(result.find((res) => res.isWinner)?.userId).toBe('player4');
  });

  test('when given a black suit card, mermaid, pirate and skullking, mermaid wins', () => {
    const trickResolver = new SkullKingTrickResolver();
    const trick = createTrick(black4, mermaid, pirate, skullKing);

    const result = trickResolver.resolveTrick(trick);
    expect(result.find((res) => res.isWinner)?.userId).toBe('player2');
  });

  test('when only pirates are played, the first pirate wins', () => {
    const trickResolver = new SkullKingTrickResolver();
    const trick = createTrick(pirate, pirate, pirate, pirate);

    const result = trickResolver.resolveTrick(trick);
    expect(result.find((res) => res.isWinner)?.userId).toBe('player1');
  });

});
