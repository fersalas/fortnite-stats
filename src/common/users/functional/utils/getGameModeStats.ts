import {
    GameModeType,
    GameStats,
    UserControlTypes,
} from "../types";

export const getGameModeStats = (response: any, gameMode: string, userControl: UserControlTypes = 'gamepad') => {
    const userControlStats = response.data.data.stats[userControl];

    const gameModeIndex = userControlStats.findIndex((mode: GameModeType) => mode.id === gameMode)

    if(gameModeIndex !== -1) {
        return userControlStats[gameModeIndex].entries[0].stats as GameStats;
    } else {
        throw new Error('Game Mode Not Found!')
    }
};