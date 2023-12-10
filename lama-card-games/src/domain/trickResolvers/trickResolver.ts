import Trick from "../cardset/trick";

export interface TrickResult {
    isWinner: boolean;
    points: number;
    userId: string;
}

export interface TrickResolver<TSuit> {
    // eslint-disable-next-line no-unused-vars
    resolveTrick: (trick: Trick<TSuit>) => readonly TrickResult[];
}

