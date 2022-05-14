import { Actor } from "./Actor";
import { Point } from "../types/Point";

let pacmanMap = `WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
WW............WW............WWW
WW.WWWW.WWWWW.WW.WWWWW.WWWW.WWW
WW*WWWW.WWWWW.WW.WWWWW.WWWW*WWW
WW.WWWW.WWWWW.WW.WWWWW.WWWW.WWW
WW..........................WWW
WW.WWWW.WW.WWWWWWWW.WW.WWWW.WWW
WW.WWWW.WW.WWWWWWWW.WW.WWWW.WWW
WW......WW....WW....WW......WWW
WWWWWWW.WWWWW.WW.WWWWW.WWWWWWWW
WWWWWWW.WWWWW.WW.WWWWW.WWWWWWWW
WWWWWWW.WW..........WW.WWWWWWWW
WWWWWWW.WW.WWW--WWW.WW.WWWWWWWW
WWWWWWW.WW.WooooooW.WW.WWWWWWWW
...........WooooooW............
WWWWWWW.WW.WooooooW.WW.WWWWWWWW
WWWWWWW.WW.WWWWWWWW.WW.WWWWWWWW
WWWWWWW.WW..........WW.WWWWWWWW
WWWWWWW.WW.WWWWWWWW.WW.WWWWWWWW
WWWWWWW.WW.WWWWWWWW.WW.WWWWWWWW
WW............WW............WWW
WW.WWWW.WWWWW.WW.WWWWW.WWWW.WWW
WW*WWWW.WWWWW.WW.WWWWW.WWWW*WWW
WW...WW................WW...WWW
WWWW.WW.WW.WWWWWWWW.WW.WW.WWWWW
WWWW.WW.WW.WWWWWWWW.WW.WW.WWWWW
WW......WW....WW....WW......WWW
WW.WWWWWWWWWW.WW.WWWWWWWWWW.WWW
WW.WWWWWWWWWW.WW.WWWWWWWWWW.WWW
WW..........................WWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW`
  .split("\n")
  .map((f) => f.split(""));

export class Map extends Actor {
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    /* Fill the code */
    const totalRatio = 1024 / pacmanMap.length;
    //ctx.save();
    for (let y = 0; y < pacmanMap.length; y++) {
      // en el caso de querer ajustar la linea horizontal al canvas
      //let horizontalSize = 1024 / pacmanMap[y].length;

      for (let x = 0; x < pacmanMap[y].length; x++) {
        ctx.beginPath();
        const mapCharacter = pacmanMap[y][x];
        if (mapCharacter == "W") {
          ctx.rect(
            x * totalRatio, // x * horizontalSize
            y * totalRatio,
            totalRatio,
            totalRatio
          );
        }
        if (mapCharacter == ".") {
          ctx.arc(
            x * totalRatio + totalRatio / 2, // x * horizontalSize + horizontalSize / 2
            y * totalRatio + totalRatio / 2,
            7,
            0,
            2 * Math.PI
          );
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }
  }
}
