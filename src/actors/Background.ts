import { Actor } from "./Actor";
import { Point } from "../types/Point";
import image from "../assets/background.png";

interface Size {
  w: number;
  h: number;
}

export class Background extends Actor {
  backgroundImage: HTMLImageElement;
  backgroundSize: Size;

  constructor(
    initialPos: Point,
    size: Size = { w: 1300, h: 2000 }
  ) {
    super(initialPos);
    this.backgroundSize = size;
    this.backgroundImage = new Image();
    this.backgroundImage.src = image;
  }

  draw(delta: number, ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(
      this.backgroundImage,
      0,
      0,
      this.backgroundSize.h,
      this.backgroundSize.w
    );
  }
}
