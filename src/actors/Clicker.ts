import { Actor } from "./Actor";

export class Clicker extends Actor {
	clicks: number;
	hits: number;
	accuracy: number;
	gameover: boolean;
	constructor() {
		super({ x: 600, y: 80 });
		this.clicks = 0;
		this.hits = 0;
		this.accuracy = 0;
		this.gameover = false;
	}
	draw(delta: number, ctx: CanvasRenderingContext2D) {
		this.accuracy = (this.hits / this.clicks) * 100;
		if (this.clicks === 0) this.accuracy = 100;

		ctx.beginPath();
		ctx.fillStyle = "#C24E00";
		ctx.fillRect(600, 45, 1000, 50);
		ctx.stroke();
		ctx.closePath();
		ctx.font = "bold 30px Montserrat ";
		ctx.fillStyle = "WHITE";
		ctx.fillText(
			` 🎯 TOTAL DE TIROS: ${
				this.clicks
			}  🔥🔥🔥🔥  TU PUNTERIA ES: ${this.accuracy.toFixed(
				1
			)} % 👌`,
			this.position.x,
			this.position.y
		);
		if (this.hits === 10) {
			this.gameover = true;
		}
	}

	increment(o: any) {
		o.addEventListener("mousedown", (e: any) => {
			this.clicks++;
		});
	}
}
