import Card from "./card";

export interface PlayedCard<TSuit> {
    card: Card<TSuit>;
    userId: string;
}

class Trick<TSuit> {
    private playedCards: PlayedCard<TSuit>[] = [];
    
    addCard(card: Card<TSuit>, userId: string) {
        this.playedCards.push({
            card,
            userId
        });
    }

    getPlayedCards() {
        return Object.freeze(this.playedCards);
    }
}

export default Trick;