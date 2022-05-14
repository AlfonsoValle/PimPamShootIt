import { Actor } from "../actors/Actor";
import { Barrier } from "../actors/Barrier";
import { converAngleToRad } from "../utils/angleToRad";
export class CircuitManager extends Actor {
    barriers;
    currentBarrier;
    currentLap;
    constructor(actor) {
        super({ x: 800, y: 100 });
        this.currentBarrier = 0;
        this.barriers = [];
        this.currentLap = 0;
        let center = { x: 500, y: 500 };
        let radius = 400;
        let num = 4;
        for (let i = 0; i < num; i++) {
            let angle = (360 / num) * i;
            this.barriers.push(new Barrier({
                x: center.x +
                    Math.sin(converAngleToRad(angle)) * radius,
                y: center.y +
                    Math.cos(converAngleToRad(angle)) * radius,
            }, 100, 90 - angle, actor, i));
        }
    }
    draw(delta, ctx) {
        ctx.font = "50px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(`LAPS ${this.currentLap}/3`, this.position.x, this.position.y);
    }
    addLap() {
        console.log("Lap");
        this.currentLap++;
        this.currentBarrier = 0;
        this.barriers.forEach((barrier) => (barrier.touched = false));
        if (this.currentLap > 2) {
            alert("You won");
        }
    }
    touchingBarrier(idx) {
        if (this.currentBarrier === idx) {
            this.currentBarrier++;
            if (this.currentBarrier === this.barriers.length) {
                this.addLap();
                return false;
            }
            return true;
        }
        return false;
    }
}
export let Circuit;
export const createCircuit = (actor) => {
    Circuit = new CircuitManager(actor);
};
