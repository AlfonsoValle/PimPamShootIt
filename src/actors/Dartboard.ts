import { Actor } from "./Actor";
import { Point } from "../types/Point";
import { converAngleToRad } from "../utils/angleToRad";
import { checkLimits } from "../utils/checkLimits";
import image from "../assets/dartboard.png";
import { NumberLiteralType } from "typescript";
const audioUrl = new URL(
  "../assets/dartboardAccelerating.mp3",
  import.meta.url
);

//interface Size {
// w: number;
// h: number;
//}

export class Dartboard extends Actor {
  dartboardX: any;
  dartboardY: any;
  dartboardmapX: any;
  dartboardmapY: any;
  dartboardTimer: number;
  dartboardSpeed: Point;
  maxSpeed: number;
  origin: Point;
  xFrame: number;
  yFrame: number;
  //dartboardheight: number;
  // dartboardwidth: number;
  dartboarderratic: any;
  dartboardtick: any;
  dartboardchangeAt: any;
  //correctXY(): any;
  dartboardmove: any;
  dartboardSize: any;
  //dartboardDirection: number;
  //dartboardAcceleration: number;
  dartboardImage: HTMLImageElement;
  //dartboardAudio: HTMLAudioElement;
  constructor(
    initialPos: Point = {
      x: Math.floor(Math.random() * 1800 + 100),
      y: Math.floor(Math.random() * 1100 + 100),
    },
    maxSpeed = Math.floor(Math.random() * 400 + 500),
    size = { w: 150, h: 150 }
  ) {
    super(initialPos);
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.maxSpeed = maxSpeed;
    this.dartboardSpeed = { x: maxSpeed, y: maxSpeed };
    this.dartboardSize = size;
    this.dartboardImage = new Image();
    this.dartboardImage.src = image;
    this.dartboardTimer = 0;
    this.xFrame = 0;
    this.yFrame = 5;
  }

  update(delta: number) {
    let newPosX =
      this.origin.x + this.dartboardSpeed.x * delta;
    if (
      newPosX <= 2050 - this.dartboardSize.w &&
      newPosX >= this.dartboardSize.w
    ) {
      this.origin.x = newPosX;
    }
    let newPosY =
      this.origin.y + this.dartboardSpeed.y * delta;
    if (
      newPosY <= 1350 - this.dartboardSize.h &&
      newPosY >= this.dartboardSize.h
    ) {
      this.origin.y = newPosY;
    }
    //this.dartboardTimer += delta;
    //   let newPosY =
    //     this.origin.y + this.dartboardSpeed.y * delta;
    //   if (
    //     newPosY <= 1350 - this.dartboardSize.y &&
    //     newPosY >= this.dartboardSize.y
    //   ) {
    //     this.origin.y = newPosY;
    //   }
    //   this.dartboardTimer += delta;

    //  if (Math.floor(Math.random() * 300) < 30) {
    //     this.dartboardSpeed.x & this.dartboardSpeed.x;
    //      (this.dartboardSpeed.x * -1) &
    //       (this.dartboardSpeed.y * -1);

    if (Math.floor(Math.random() * 900) < 10) {
      this.dartboardSpeed.x = this.dartboardSpeed.x * -1;
    }
    if (Math.floor(Math.random() * 900) < 10) {
      this.dartboardSpeed.y = this.dartboardSpeed.y * -1;
    }

    // let newPosY =
    //   this.origin.y + this.dartboardSpeed.y * delta;
    // if (
    //   newPosY <= 1350 - this.dartboardSize.y &&
    //   newPosY >= this.dartboardSize.y
    // ) {
    //   this.origin.y = newPosY;
    // }

    // if (this.dartboardTimer >= 0.1) {
    //   this.xFrame = (this.xFrame + 1) % 6;
    //   this.yFrame = (this.yFrame + 1) % 6;
    //   this.dartboardTimer = 0;
    // }
  }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    let origin = this.origin;

    ctx.translate(origin.x, origin.y);
    ctx.drawImage(
      this.dartboardImage,
      -this.dartboardSize.h / 2,
      -this.dartboardSize.w / 2,
      this.dartboardSize.h,
      this.dartboardSize.w
    );
  }
}
