export var CarKeys;
(function (CarKeys) {
    CarKeys[CarKeys["UP"] = 0] = "UP";
    CarKeys[CarKeys["DOWN"] = 1] = "DOWN";
    CarKeys[CarKeys["LEFT"] = 2] = "LEFT";
    CarKeys[CarKeys["RIGHT"] = 3] = "RIGHT";
})(CarKeys || (CarKeys = {}));
export const MAP_A = {
    ArrowUp: CarKeys.UP,
    ArrowDown: CarKeys.DOWN,
    ArrowLeft: CarKeys.LEFT,
    ArrowRight: CarKeys.RIGHT,
};
export const MAP_B = {
    w: CarKeys.UP,
    s: CarKeys.DOWN,
    a: CarKeys.LEFT,
    d: CarKeys.RIGHT,
};
