export class Actor {
    position;
    constructor(position) {
        this.position = position;
    }
    update(delta) { }
    keyboard_event_down(key) { }
    keyboard_event_up(key) { }
    draw(delta, ctx) { }
}
