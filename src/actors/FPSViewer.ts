import { Actor } from "./Actor";

export class FPSViewer extends Actor {
	draw(delta: number, ctx: CanvasRenderingContext2D) {
		const fps = (1 / delta).toFixed(2);
		ctx.font = "30px Montserrat";
		ctx.fillStyle = "WHITE";
		ctx.fillText(
			`FPS: ${fps}`,
			this.position.x,
			this.position.y
		);
	}
}
