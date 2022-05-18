import { Actor } from "../actors/Actor";
import { Dartboard } from "../actors/Dartboard";
export class DartBoardManager extends Actor {
    dartboards;
    currentDartboard;
    currentAccuracy;
    constructor(actor) {
        super(actor.position);
        this.currentDartboard = 0;
        this.dartboards = [];
        this.currentAccuracy = 0;
        let num = 10;
        for (let i = 0; i < num; i++) {
            this.dartboards.push(new Dartboard());
        }
    }
}
export let DartBoardTeam;
export const createDartBoardTeam = (actor) => {
    DartBoardTeam = new DartBoardManager(actor);
};
