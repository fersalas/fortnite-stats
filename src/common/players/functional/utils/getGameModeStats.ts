import {
    GameModeType,
    GameStats,
    PlayerControlTypes,
} from "../types";

export const getGameModeStats = (response: any, gameMode: string, playerControl: PlayerControlTypes = 'gamepad') => {
    const playerControlStats = response.data.data.stats[playerControl];

    const gameModeIndex = playerControlStats.findIndex((mode: GameModeType) => mode.id === gameMode)

    if(gameModeIndex !== -1) {
        return playerControlStats[gameModeIndex].entries[0].stats as GameStats;
    } else {
        throw new Error('Game Mode Not Found!')
    }
};