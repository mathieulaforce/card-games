import { SkulkingSuit } from "../builders/skullKingDeckBuilder";
import Trick, { PlayedCard } from "../cardset/trick";
import { TrickResolver, TrickResult } from "./trickResolver";

type SkullkingPlayedCard = PlayedCard<SkulkingSuit>;
type SkullkingTrick = Trick<SkulkingSuit>;

export class SkullKingTrickResolver implements TrickResolver<SkulkingSuit> {
    constructor() {
    }

    private getLeadingSuit(playedCards: readonly SkullkingPlayedCard[]): SkulkingSuit {
        playedCards.filter(playingCard => !playingCard.card.isSpecial).map(playingCard => playingCard.card.suit);
        if (playedCards.length === 0) {
            return "none";
        }
        return playedCards[0].card.suit;
    }

    resolveTrick(trick: SkullkingTrick): readonly TrickResult[] {

        const playedCards = trick.getPlayedCards();
        const trickSuit = this.getLeadingSuit(playedCards);

        let isMermaidPlayed: boolean | SkullkingPlayedCard = false;
        let isPiratePlayed: boolean | SkullkingPlayedCard = false;
        let isSkullKingPlayed: boolean | SkullkingPlayedCard = false;
        let isEscapeCardPlayed: boolean | SkullkingPlayedCard = false;
        let winningSuitCard: boolean | SkullkingPlayedCard = false;

        trick.getPlayedCards().forEach(playedCard => {
            if (playedCard.card.isSpecial()) {
                switch (playedCard.card.special) {
                    case "pirate":
                        isPiratePlayed = playedCard;
                        break;
                    case "mermaid":
                        isMermaidPlayed = playedCard;
                        break;
                    case "skull-king":
                        isSkullKingPlayed = playedCard;
                        break;
                    case "escape":
                        isEscapeCardPlayed = playedCard;
                        break;                    
                }
            } else {
                // suit card played                
                if (playedCard.card.suit === trickSuit || playedCard.card.suit === "black") {
                    if (!winningSuitCard || typeof winningSuitCard === "boolean") {
                        winningSuitCard = playedCard;
                    } else {
                        // black always wins from other suits
                        const newCardValue = playedCard.card.suit === "black" ? playedCard.card.value * 100 : playedCard.card.value;
                        const currentWinningCardValue = winningSuitCard.card.suit === "black" ? winningSuitCard.card.value * 100 : winningSuitCard.card.value;
                        if (newCardValue > currentWinningCardValue) {
                            winningSuitCard = playedCard;
                        }
                    }
                }
            }
        });

        let winnerFound = false;
        if(isSkullKingPlayed && isMermaidPlayed) {
                return playedCards.map((playedCard) => {
                    if (playedCard.card.special === "mermaid" && !winnerFound) {
                        winnerFound = true;
                        return { isWinner: true, points: 0, userId: playedCard.userId };
                    }
                    else {
                        return { isWinner: false, points: 0, userId: playedCard.userId };
                    }
                });
        }

        if (isSkullKingPlayed ) {
            return playedCards.map((playedCard) => {
                if (playedCard.card.special === "skull-king" && !winnerFound) {
                    winnerFound = true;
                    return { isWinner: true, points: 0, userId: playedCard.userId };
                }
                else {
                    return { isWinner: false, points: 0, userId: playedCard.userId };
                }
            });
        }

        if (isPiratePlayed) {
            return playedCards.map((playedCard) => {
                if (playedCard.card.special === "pirate" && !winnerFound) {
                    winnerFound = true;
                    return { isWinner: true, points: 0, userId: playedCard.userId };
                }
                else {
                    return { isWinner: false, points: 0, userId: playedCard.userId };
                }
            });
        }

        if (isMermaidPlayed) {
            return playedCards.map((playedCard) => {
                if (playedCard.card.special === "mermaid" && !winnerFound) {
                    winnerFound = true;
                    return { isWinner: true, points: 0, userId: playedCard.userId };
                }
                else {
                    return { isWinner: false, points: 0, userId: playedCard.userId };
                }
            });
        }

        if(isEscapeCardPlayed) {
            const escapeCards = playedCards.filter(playedCard => playedCard.card.special === "escape");
            if(playedCards.length === escapeCards.length) {
                return playedCards.map((playedCard, index) => {
                    return { isWinner: index === 0, points: 0, userId: playedCard.userId };
                });
            }
        }

        return playedCards.map((playedCard) => {
            if (playedCard === winningSuitCard ) {
                winnerFound = true;
                return { isWinner: true, points: 0, userId: playedCard.userId };
            }
            else {
                return { isWinner: false, points: 0, userId: playedCard.userId };
            }
        });
    }
}
