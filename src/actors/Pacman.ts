// import { Actor } from "./Actor";
// import { Point } from "../types/Point";
// // import { converAngleToRad } from '../utils/angleToRad';
// import image from "../assets/pacman.png";

// export class Pacman extends Actor {
//   pacmanSize: number;
//   mouthOpen: number;
//   origin: Point;
//   color: string;
//   maxSpeed: number;
//   speed: Point;

//   // IMAGES
//   image: HTMLImageElement;
//   sxParameters: number[];
//   timer: number;
//   xFrame: number;
//   yFrame: number;

//   constructor(
//     initialPos: Point,
//     color = "yellow",
//     maxSpeed = 100
//   ) {
//     super(initialPos);
//     this.pacmanSize = 90;
//     //this.mouthOpen = 30;
//     this.origin = { x: initialPos.x, y: initialPos.y };
//     // this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.speed = { x: maxSpeed, y: 0 };
//     this.image = new Image();
//     this.image.src = image;
//     //this.sxParameters = [7, 6, 5, 4, 5, 6];
//     this.timer = 0;
//     //this.xFrame = 0;
//     // this.yFrame = 5;
//   }

//   // add delta to update
//   update(delta: number) {
//     this.mouthOpen += 0.8;
//     // speed * delta
//     let newPosX = this.origin.x + this.speed.x * delta;
//     if (
//       newPosX <= 1000 - this.pacmanSize &&
//       newPosX >= this.pacmanSize
//     ) {
//       this.origin.x = newPosX;
//     }
//     this.timer += delta;

//     if (this.timer >= 0.1) {
//       this.xFrame = (this.xFrame + 1) % 6;
//       this.timer = 0;
//     }
//   }

//   //add delta to draw
//   draw(delta: number, ctx: CanvasRenderingContext2D) {
//     let origin = this.origin;

//     let direction = 0;
//     if (this.speed.x != 0 && this.speed.x < 0) {
//       direction = 180;
//     }
//     ctx.translate(origin.x, origin.y);
//     // Remember to paint a rectangle behind to configure your image
//     // ctx.fillRect(0, 0, this.pacmanSize, this.pacmanSize);
//     ctx.drawImage(
//       this.image,
//       // 32.5 * this.sxParameters[this.xFrame],
//       // 31 * this.yFrame,
//       // 25,
//       // 25,
//       // 0,
//       // 0,
//       this.pacmanSize,
//       this.pacmanSize
//     );
//   }

//   // keyboard_event_down(key: string) {
//   //   switch (key) {
//   //     case "ArrowRight":
//   //       console.log("right");
//   //       this.speed.x = this.maxSpeed;
//   //       this.yFrame = 5;
//   //       break;
//   //     case "ArrowLeft":
//   //       console.log("left");
//   //       this.speed.x = -this.maxSpeed;
//   //       this.yFrame = 4;
//   //       break;
//   //     case "ArrowUp":
//   //       console.log("up");
//   //       break;
//   //     case "ArrowDown":
//   //       console.log("down");
//   //       break;
//   //     default:
//   //       console.log("not a valid key");
//   //       break;
// }
