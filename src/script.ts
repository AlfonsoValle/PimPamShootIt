import { Background } from "./actors/Background";
import { Pacman } from "./actors/Pacman";
import { Map } from "./actors/Map";
import { FPSViewer } from "./actors/FPSViewer";
import { Actor } from "./actors/Actor";
import { Car } from "./actors/Car";
import { Barrier } from "./actors/Barrier";
import { MAP_A, MAP_B } from "./utils/KeyboardMap";
import {
  Circuit,
  createCircuit,
} from "./state/CircuitManager";

window.onload = () => {
  const canvas = document.getElementById(
    "canvas"
  ) as HTMLCanvasElement;
  const ctx = canvas.getContext(
    "2d"
  ) as CanvasRenderingContext2D;

  let carA = new Car({ x: 200, y: 200 }, MAP_A);
  //let carB = new Car({ x: 300, y: 200 }, MAP_B);

  createCircuit(carA);
  let barriers: Barrier[] = [...Circuit.barriers];
  let cars: Car[] = [carA]; //, carB];

  let actors: Actor[] = [
    new Background({ x: 0, y: 0 }),
    new FPSViewer({ x: 5, y: 100 }),
    ...cars,
    ...barriers,
    Circuit,
    new Pacman({ x: 100, y: 100 }),
  ];

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
    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);

  document.body.addEventListener("keydown", (e) => {
    // console.log('Keydown', e);
    actors.forEach((actor) => {
      actor.keyboard_event_down(e.key);
    });
  });

  document.body.addEventListener("keyup", (e) => {
    // console.log('keyUp', e);
    actors.forEach((actor) => {
      actor.keyboard_event_up(e.key);
    });
  });
};
