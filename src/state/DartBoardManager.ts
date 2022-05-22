import { Actor } from "../actors/Actor";
import { Dartboard } from "../actors/Dartboard";

export class DartBoardManager extends Actor {
	dartboards: Dartboard[];
	currentDartboard: number;
	currentAccuracy: number;
	constructor(actor: Actor) {
		super({ x: 0, y: 0 });
		this.currentDartboard = 0;
		this.dartboards = [];
		this.currentAccuracy = 0;
		let num = 10;
		for (let i = 0; i < num; i++) {
			this.dartboards.push(new Dartboard());
		}
	}
}

export let DartBoardTeam: DartBoardManager;

export const createDartBoardTeam = (actor: Actor) => {
	DartBoardTeam = new DartBoardManager(actor);
};
