import { Actor } from "./Actor";
import image from "../assets/background.png";
export class Background extends Actor {
    backgroundImage;
    backgroundSize;
    constructor(initialPos, size = { w: 1300, h: 2000 }) {
        super(initialPos);
        this.backgroundSize = size;
        this.backgroundImage = new Image();
        this.backgroundImage.src = image;
    }
    draw(delta, ctx) {
        ctx.drawImage(this.backgroundImage, 0, 0, this.backgroundSize.h, this.backgroundSize.w);
    }
}
