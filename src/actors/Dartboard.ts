import { Actor } from "./Actor";
import { Point } from "../types/Point";
import image from "../assets/dartboard.png";
("../assets/dartboardPIM.png");
import image2 from "../assets/dartboardPIM.png";
import { NumberLiteralType } from "typescript";
const audioUrl = new URL(
  "../assets/dartboardAccelerating.mp3",
  import.meta.url
);

export class Dartboard extends Actor {
  pimpam: boolean;
  dartBoardRadius: number;
  widthandheight: number;
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
  dartboardImage2: HTMLImageElement;
  //dartboardAudio: HTMLAudioElement;
  constructor(
    initialPos: Point = {
      x: Math.floor(Math.random() * 1800 + 100),
      y: Math.floor(Math.random() * 1100 + 100),
    },
    maxSpeed = Math.floor(Math.random() * 40 + 5),
    widthandheight = Math.floor(Math.random() * 100 + 130),
    size = { w: widthandheight, h: widthandheight }
  ) {
    super(initialPos);
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.maxSpeed = maxSpeed;
    this.dartboardSpeed = { x: maxSpeed, y: maxSpeed };
    this.dartboardSize = size;
    this.dartboardImage = new Image();
    this.dartboardImage2 = new Image();
    this.dartboardImage.src = image;
    this.dartboardImage2.src = image2;
    this.dartboardTimer = 0;
    this.xFrame = 0;
    this.yFrame = 5;
    this.widthandheight = widthandheight;
    this.dartBoardRadius = 50;
    this.pimpam = false;
    // this.newPosX = this.origin.x;
    // this.newPosY = this.origin.y;
  }

  update(delta: number): void {
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

    if (Math.floor(Math.random() * 900) < 10) {
      this.dartboardSpeed.x = this.dartboardSpeed.x * -1;
    }
    if (Math.floor(Math.random() * 900) < 10) {
      this.dartboardSpeed.y = this.dartboardSpeed.y * -1;
    }
    if (this.pimpam === true) {
      this.dartboardSpeed.x = 0;
      this.dartboardSpeed.y = 0;
    }
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
    if (this.pimpam === true) {
      ctx.drawImage(
        this.dartboardImage2,
        -this.dartboardSize.h / 2,
        -this.dartboardSize.w / 2,
        this.dartboardSize.h,
        this.dartboardSize.w
      );
    }
  }
}
