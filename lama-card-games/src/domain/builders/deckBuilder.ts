import { Deck } from "../cardset/deck";


export interface DeckBuilder<TSuit> {
    generateDeck: () => Deck<TSuit>;
}
