export type UIDApiResponse = {
    uid: string,
    username: string,
}

export type UserControlTypes = 'gamepad' | 'keyboardmouse' | 'touch';

export type UserControlStats = {
    gamepad: Array<GameModeStats>,
    keyboardmouse: Array<GameModeStats>,
    touch: Array<GameModeStats>,
}

export type UserStatsData = {
    accountId: string,
    username: string,
    stats: UserControlStats,
}

export type GameModeType = {
    id: string,
    friendlyName: string,
    entries: Array<GameModeStats>
}

export type GameModeStats = {
    mode: string,
    stats: GameStats,
}

export type GameStats = {
    kills: number,
    lastmodified: number,
    matchesplayed: number,
    minutesplayed: number,
    placetop1: number,
    placetop10: number,
    placetop25: number,
    playersoutlived: number,
    score: number,
}

export interface UserEntity {
    uid: string,
    username: string,
    stats: GameModeStats,
}