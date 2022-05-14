import { Pacman } from "./actors/Pacman";
import { FPSViewer } from "./actors/FPSViewer";
import { Car } from "./actors/Car";
import { MAP_A } from "./utils/KeyboardMap";
import { Circuit, createCircuit, } from "./state/CircuitManager";
window.onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let carA = new Car({ x: 200, y: 200 }, MAP_A);
    //let carB = new Car({ x: 300, y: 200 }, MAP_B);
    createCircuit(carA);
    let barriers = [...Circuit.barriers];
    let cars = [carA]; //, carB];
    let actors = [
        new FPSViewer({ x: 5, y: 100 }),
        ...cars,
        ...barriers,
        Circuit,
        new Pacman({ x: 100, y: 100 }),
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
    document.body.addEventListener("keydown", (e) => {
        // console.log('Keydown', e);
        actors.forEach((actor) => {
            actor.keyboard_event_down(e.key);
        });
    });
    document.body.addEventListener("keyup", (e) => {
        // console.log('keyUp', e);
        actors.forEach((actor) => {
            actor.keyboard_event_up(e.key);
        });
    });
};
