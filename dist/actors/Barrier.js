import { Circuit, } from "../state/CircuitManager";
import { converAngleToRad } from "../utils/angleToRad";
import { Actor } from "./Actor";
export class Barrier extends Actor {
    barrierWidth;
    angle;
    actor;
    touched;
    barrierIndex;
    constructor(initalPos, bw = 100, angle, actor, index) {
        super(initalPos);
        this.barrierWidth = bw;
        this.angle = angle;
        this.actor = actor;
        this.touched = false;
        this.barrierIndex = index;
    }
    update(delta) {
        let actorPos = this.actor.position;
        let barrierPos = this.position;
        let distance = Math.sqrt(Math.pow(barrierPos.x - actorPos.x, 2) +
            Math.pow(barrierPos.y - actorPos.y, 2));
        if (distance < 50 &&
            Circuit.touchingBarrier(this.barrierIndex)) {
            this.touched = true;
        }
    }
    draw(delta, ctx) {
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(converAngleToRad(this.angle));
        ctx.strokeStyle = this.touched ? "green" : "red";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-this.barrierWidth / 2, 0);
        ctx.lineTo(this.barrierWidth / 2, 0);
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, 5, 0, converAngleToRad(360));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
}
