export enum CarKeys {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

export interface KeyboardMap {
  [key: string]: CarKeys;
}

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
