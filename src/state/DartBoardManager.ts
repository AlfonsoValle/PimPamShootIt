import { Actor } from "../actors/Actor";
//import { Barrier } from "../actors/Barrier";
import { Point } from "../types/Point";
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

  //   draw(delta: number, ctx: CanvasRenderingContext2D): void {
  //     ctx.font = "50px Arial";
  //     ctx.fillStyle = "black";
  //     ctx.fillText(
  //       `LAPS ${this.currentLap}/3`,
  //       this.position.x,
  //       this.position.y
  //     );
  //   }

  //   addLap() {
  //     console.log("Lap");
  //     this.currentLap++;
  //     this.currentBarrier = 0;

  //     this.barriers.forEach(
  //       (barrier) => (barrier.touched = false)
  //     );

  //     if (this.currentLap > 2) {
  //       alert("You won");
  //     }
  //   }

  //   touchingBarrier(idx: number): boolean {
  //     if (this.currentBarrier === idx) {
  //       this.currentBarrier++;

  //       if (this.currentBarrier === this.barriers.length) {
  //         this.addLap();
  //         return false;
  //       }
  //       return true;
  //     }
  //     return false;
  //   }
}

export let DartBoardTeam: DartBoardManager;

export const createDartBoardTeam = (actor: Actor) => {
  DartBoardTeam = new DartBoardManager(actor);
};
