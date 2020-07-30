import { GameTypes } from './types'

export function toggleAlive(x, y) {
  return {
    type: GameTypes.TOGGLE_ALIVE,
    x,
    y
  };
}

export function makeRandomGrid() {
  return {
    type: GameTypes.MAKE_RANDOM
  };
}

export function tick() {
  return {
    type: GameTypes.TICK
  };
}

export function startPlaying(timerId) {
  return {
    type: GameTypes.PLAY,
    timerId
  };
}

export function stopPlaying(timerId) {
  return {
    type: GameTypes.STOP,
    timerId
  };
}

export function clear() {
  return {
    type: GameTypes.CLEAR,
  };
}