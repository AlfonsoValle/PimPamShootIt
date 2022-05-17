import { Background } from "./actors/Background";
import { FPSViewer } from "./actors/FPSViewer";
import { Actor } from "./actors/Actor";
import { Dartboard } from "./actors/Dartboard";
//import { MAP_A, MAP_B } from "./utils/KeyboardMap";

window.onload = () => {
  const canvas = document.getElementById(
    "canvas"
  ) as HTMLCanvasElement;
  const ctx = canvas.getContext(
    "2d"
  ) as CanvasRenderingContext2D;

  // function clickDartboard(Xmouse: number, Ymouse: number) {
  //
  // }

  let dartboard1 = new Dartboard();
  let dartboard2 = new Dartboard();
  let dartboard3 = new Dartboard();
  let dartboard4 = new Dartboard();
  let dartboard5 = new Dartboard();
  let dartboard6 = new Dartboard();
  let dartboard7 = new Dartboard();
  let dartboard8 = new Dartboard();
  let dartboard9 = new Dartboard();
  let dartboard10 = new Dartboard();
  let dartboard: Dartboard[] = [
    dartboard1,
    dartboard2,
    dartboard3,
    dartboard4,
    dartboard5,
    dartboard6,
    dartboard7,
    dartboard8,
    dartboard9,
    dartboard10,
  ];
  //console.log(xrandom, yrandom);
  let actors: Actor[] = [
    new Background({ x: 0, y: 0 }),
    new FPSViewer({ x: 5, y: 100 }),

    ...dartboard,

    //new Dartboard(),
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

  canvas.addEventListener("mousedown", (e) => {
    let Xmouse = e.offsetX * 2;
    let Ymouse = e.offsetY * 2;
    let dartboardOrigin = dartboard1.origin;
    console.log(Xmouse, Ymouse); //esto x 2 .
    console.log(dartboardOrigin.x, dartboardOrigin.y);
    const distance = Math.sqrt(
      Math.pow(Xmouse - dartboardOrigin.x, 2) +
        Math.pow(Ymouse - dartboardOrigin.y, 2)
    );
    if (distance < dartboard1.widthandheight / 2) {
      dartboard1.pimpam = true;
      console.log(dartboard1.pimpam);
      console.log(distance);
    }
  });
};
//   document.body.addEventListener("keydown", (e) => {
//     // console.log('Keydown', e);
//     actors.forEach((dartboard) => {
//       dartboard.();
//     });
//   });

//   document.body.addEventListener("keyup", (e) => {
//     // console.log('keyUp', e);
//     actors.forEach((actor) => {
//       actor.keyboard_event_up(e.key);
//     });
//   });
// };
