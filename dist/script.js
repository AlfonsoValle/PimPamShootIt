import { Background } from "./actors/Background";
import { FPSViewer } from "./actors/FPSViewer";
import { DartBoardTeam, } from "./state/DartBoardManager";
//import { MAP_A, MAP_B } from "./utils/KeyboardMap";
window.onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    // function clickDartboard(Xmouse: number, Ymouse: number) {
    //
    let dartboards = [
        ...DartBoardTeam.dartboards,
    ];
    // let dartboard2 = new Dartboard();
    // let dartboard3 = new Dartboard();
    // let dartboard4 = new Dartboard();
    // let dartboard5 = new Dartboard();
    // let dartboard6 = new Dartboard();
    // let dartboard7 = new Dartboard();
    // let dartboard8 = new Dartboard();
    // let dartboard9 = new Dartboard();
    // let dartboard10 = new Dartboard();
    // let dartboard: Dartboard[] = [
    //   dartboard1,
    //   dartboard2,
    //   dartboard3,
    //   dartboard4,
    //   dartboard5,
    //   dartboard6,
    //   dartboard7,
    //   dartboard8,
    //   dartboard9,
    //   dartboard10,
    // ];
    //console.log(xrandom, yrandom);
    let actors = [
        new Background({ x: 0, y: 0 }),
        new FPSViewer({ x: 5, y: 100 }),
        ...dartboards,
        DartBoardTeam,
        //new Dartboard(),
    ];
    let lastFrame = 0;
    const render = (time) => {
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
        let dartboardOrigin = dartboards.forEach((e) => e.origin);
        console.log(dartboardOrigin);
        // console.log(Xmouse, Ymouse); //esto x 2 .
        //console.log(dartboardOrigin.x, dartboardOrigin.y);
        // const distance = Math.sqrt(
        //   Math.pow(Xmouse - dartboardOrigin.x, 2) +
        //     Math.pow(Ymouse - dartboardOrigin.y, 2)
        // );
        // if (distance < dartboard.widthandheight / 2) {
        //   dartboards.forEach((e) => (e.pimpam = true));
        //   console.log(dartboards.pimpam);
        //   console.log(distance);
    }
    //}//);
    );
}; //};
