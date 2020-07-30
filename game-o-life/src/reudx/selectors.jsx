
export const getCount = (state) => state.game_reducer.count

export const getGameGrid = (state) => { return state.game_reducer.game_grid }

export const getIsRunning = (state) => { return state.game_reducer.isRunning }

export const getTimerId = (state) => { return state.game_reducer.timerId }

