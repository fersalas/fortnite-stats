export type UIDApiResponse = {
    uid: string,
    username: string,
}

export type PlayerControlTypes = 'gamepad' | 'keyboardmouse' | 'touch';

export type PlayerControlStats = {
    gamepad: Array<GameModeStats>,
    keyboardmouse: Array<GameModeStats>,
    touch: Array<GameModeStats>,
}

export type PlayerStatsData = {
    accountId: string,
    username: string,
    stats: PlayerControlStats,
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

export type PlayersMap = {
    [username: string]: PlayerEntity,
}

export interface PlayerEntity {
    uid: string,
    username: string,
    stats?: GameModeStats,
}