import { Background } from "./actors/Background";
import { FPSViewer } from "./actors/FPSViewer";
import { Actor } from "./actors/Actor";
import { Dartboard } from "./actors/Dartboard";
import {
	DartBoardTeam,
	createDartBoardTeam,
} from "./state/DartBoardManager";
import { Clicker } from "./actors/Clicker";

window.onload = () => {
	const canvas = document.getElementById(
		"canvas"
	) as HTMLCanvasElement;
	const ctx = canvas.getContext(
		"2d"
	) as CanvasRenderingContext2D;

	let game = createGame(canvas);
	let actors = game.actors;
	let clicks = game.clicks;
	let dartboards = game.dartboards;
	let lastFrame = 0;
	const render = (time: number) => {
		let delta = (time - lastFrame) / 1000;
		lastFrame = time;
		actors.forEach((e) => {
			e.update(delta);
		});
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		actors.forEach((e) => {
			ctx.save();
			e.draw(delta, ctx);
			ctx.restore();
		});
		if (!clicks.gameover) {
			window.requestAnimationFrame(render);
		} else {
			alert(
				`🎉 ¡Enhorabuena! 🎉 \n 🎯 Tuviste una Puntería del ${clicks.accuracy.toFixed(
					1
				)} % En ${
					clicks.clicks
				} Disparos 🎯 \n  🏆 Pulsa aceptar y supera tu Record 🏆`
			);

			let game = createGame(canvas);
			actors = game.actors;
			clicks = game.clicks;
			dartboards = game.dartboards;
			window.requestAnimationFrame(render);
		}
	};

	window.requestAnimationFrame(render);

	canvas.addEventListener("mousedown", (e) => {
		let Xmouse = e.offsetX * 2;
		let Ymouse = e.offsetY * 2;
		dartboards.forEach((e) => {
			const distance = Math.sqrt(
				Math.pow(Xmouse - e.origin.x, 2) +
					Math.pow(Ymouse - e.origin.y, 2)
			);
			if (distance < e.widthandheight / 2) {
				e.pimpam = true;

				if (e.pimpam && e.notpimpam) {
					clicks.hits++;
					e.notpimpam = false;
				}
			}
		});
	});
};

const createGame = (canvas: HTMLCanvasElement) => {
	let x = new Dartboard();
	createDartBoardTeam(x);
	let dartboards: Dartboard[] = [
		...DartBoardTeam.dartboards,
	];
	let clicks = new Clicker();
	let actors: Actor[] = [
		new Background({ x: 0, y: 0 }),
		new FPSViewer({ x: 30, y: 30 }),

		...dartboards,
		DartBoardTeam,
		clicks,
	];
	clicks.increment(canvas);
	clicks.hits = 0;
	return { actors, clicks, dartboards };
};
