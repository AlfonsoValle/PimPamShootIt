import { Actor } from "./Actor";
import image from "../assets/background.png";
export class Background extends Actor {
    backgroundImage;
    backgroundSize;
    constructor(initialPos, size = { w: 200, h: 130 }) {
        super(initialPos);
        this.backgroundSize = size;
        this.backgroundImage = new Image();
        this.backgroundImage.src = image;
    }
    draw(delta, ctx) {
        ctx.drawImage(this.backgroundImage, -this.backgroundSize.h / 2, -this.backgroundSize.w / 2, this.backgroundSize.h, this.backgroundSize.w);
    }
}
