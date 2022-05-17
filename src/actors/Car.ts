// import { Actor } from "./Actor";
// import { Point } from "../types/Point";
// import { converAngleToRad } from "../utils/angleToRad";
// import { checkLimits } from "../utils/checkLimits";
// import { CarKeys, KeyboardMap } from "../utils/KeyboardMap";
// import image from "../assets/ferrari.png";
// const audioUrl = new URL(
//   "../assets/carAccelerating.mp3",
//   import.meta.url
// );

// interface Size {
//   w: number;
//   h: number;
// }

// export class Car extends Actor {
//   carSize: Size;
//   carColor: string;
//   angle: number;
//   angleSpeed: number;
//   carSpeed: number;
//   carAcceleration: number;
//   carImage: HTMLImageElement;
//   keyboardMap: KeyboardMap;
//   carAudio: HTMLAudioElement;
//   constructor(
//     initialPos: Point,
//     keyboardMap: KeyboardMap,
//     size: Size = { w: 50, h: 100 }
//   ) {
//     super(initialPos);
//     this.carSize = size;
//     this.carColor = "red";
//     this.angle = 0;
//     this.angleSpeed = 0;
//     this.carSpeed = 0;
//     this.carAcceleration = 0;
//     this.carImage = new Image();
//     this.carImage.src = image;
//     this.keyboardMap = keyboardMap;
//     this.carAudio = new Audio(audioUrl.toString());

//     // configuration
//     this.carAudio.volume = 0.5;
//   }

//   update(delta: number): void {
//     // console.log(this.angle);
//     this.angle += this.angleSpeed;
//     this.angleSpeed *= 0.9;
//     this.carSpeed =
//       this.carSpeed * 0.9 + this.carAcceleration;
//     let newPos: Point = {
//       x:
//         this.position.x +
//         Math.cos(converAngleToRad(this.angle)) *
//           this.carSpeed,
//       y:
//         this.position.y +
//         Math.sin(converAngleToRad(this.angle)) *
//           this.carSpeed,
//     };

//     if (checkLimits(newPos)) {
//       this.position = newPos;
//     }

//     if (this.carAcceleration > 0 && checkLimits(newPos)) {
//       this.carAudio.volume = 1;
//       this.carAudio.play();
//     } else {
//       this.carAudio.volume = 0;
//     }
//   }
//   draw(delta: number, ctx: CanvasRenderingContext2D): void {
//     ctx.translate(this.position.x, this.position.y);
//     ctx.rotate(converAngleToRad(this.angle));
//     ctx.fillStyle = this.carColor;
//     ctx.rotate(converAngleToRad(180));
//     ctx.drawImage(
//       this.carImage,
//       -this.carSize.h / 2,
//       -this.carSize.w / 2,
//       this.carSize.h,
//       this.carSize.w
//     );
//     // ctx.fillRect(
//     //   -this.carSize.h / 2,
//     //   -this.carSize.w / 2,
//     //   this.carSize.h,
//     //   this.carSize.w
//     // );
//   }
//   keyboard_event_down(key: string): void {
//     let keyMapped = this.keyboardMap[key];
//     if (keyMapped === CarKeys.LEFT) {
//       this.angleSpeed -= 4;
//     } else if (keyMapped === CarKeys.RIGHT) {
//       this.angleSpeed += 4;
//     } else if (keyMapped === CarKeys.UP) {
//       this.carAcceleration = 2;
//     } else if (keyMapped === CarKeys.DOWN) {
//       this.carAcceleration = -2;
//     }
//   }

//   keyboard_event_up(key: string): void {
//     let keyMapped = this.keyboardMap[key];
//     if (keyMapped === CarKeys.UP) {
//       this.carAcceleration = 0;
//     } else if (keyMapped === CarKeys.DOWN) {
//       this.carAcceleration = 0;
//     }
//   }
// }
