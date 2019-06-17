import { createStandardAction, ActionType } from "typesafe-actions";
import { PlayersMap } from "./types";

const LOAD_PLAYER_STATS = "PLAYERS:LOAD_PLAYER_STATS";
// Load player id
const LOAD_PLAYER_UID_START = "PLAYERS:LOAD_PLAYER_UID_START";
const LOAD_PLAYER_UID_SUCCESS = "PLAYERS:LOAD_PLAYER_UID_SUCCESS";
const LOAD_PLAYER_UID_ERROR = "PLAYERS:LOAD_PLAYER_UID_ERROR";
// Load player stats
const LOAD_PLAYER_STATS_START = "PLAYERS:LOAD_PLAYER_STATS_START";
const LOAD_PLAYER_STATS_SUCCESS = "PLAYERS:LOAD_PLAYER_STATS_SUCCESS";
const LOAD_PLAYER_STATS_ERROR = "PLAYERS:LOAD_PLAYER_STATS_ERROR";

// Redux Action Creators
// ---------------------
// These functions create redux action objects. They should strive to be side-effect free.
// the action object format is defined by Flux Standard Action. https://github.com/acdlite/flux-standard-action
export const actions = {
    
    // LOAD PLAYER UID Actions
    loadPlayerUidStart: createStandardAction(LOAD_PLAYER_UID_START)(),
    loadPlayerUidSuccess: createStandardAction(LOAD_PLAYER_UID_SUCCESS)<PlayersMap>(),
    loadPlayerUidError: createStandardAction(LOAD_PLAYER_UID_ERROR)<Error>(),
    // LOAD PLAYER STATS Actions
    loadPlayerStats: createStandardAction(LOAD_PLAYER_STATS)<string>(),
    loadPlayerStatsStart: createStandardAction(LOAD_PLAYER_STATS_START)(),
    loadPlayerStatsSuccess: createStandardAction(LOAD_PLAYER_STATS_SUCCESS)<PlayersMap>(),
    loadPlayerStatsError: createStandardAction(LOAD_PLAYER_STATS_ERROR)<Error>(),
};

export type Action = ActionType<typeof actions>;
