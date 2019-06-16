import { createStandardAction, ActionType } from "typesafe-actions";
import { UsersMap } from "./types";

const LOAD_USER_STATS = "USERS:LOAD_USER_STATS";
// Load user id
const LOAD_USER_UID_START = "USERS:LOAD_USER_UID_START";
const LOAD_USER_UID_SUCCESS = "USERS:LOAD_USER_UID_SUCCESS";
const LOAD_USER_UID_ERROR = "USERS:LOAD_USER_UID_ERROR";
// Load user stats
const LOAD_USER_STATS_START = "USERS:LOAD_USER_STATS_START";
const LOAD_USER_STATS_SUCCESS = "USERS:LOAD_USER_STATS_SUCCESS";
const LOAD_USER_STATS_ERROR = "USERS:LOAD_USER_STATS_ERROR";

// Redux Action Creators
// ---------------------
// These functions create redux action objects. They should strive to be side-effect free.
// the action object format is defined by Flux Standard Action. https://github.com/acdlite/flux-standard-action
export const actions = {
    
    // LOAD USER UID Actions
    loadUserUidStart: createStandardAction(LOAD_USER_UID_START)(),
    loadUserUidSuccess: createStandardAction(LOAD_USER_UID_SUCCESS)<UsersMap>(),
    loadUserUidError: createStandardAction(LOAD_USER_UID_ERROR)<Error>(),
    // LOAD USER STATS Actions
    loadUserStats: createStandardAction(LOAD_USER_STATS)<string>(),
    loadUserStatsStart: createStandardAction(LOAD_USER_STATS_START)(),
    loadUserStatsSuccess: createStandardAction(LOAD_USER_STATS_SUCCESS)<UsersMap>(),
    loadUserStatsError: createStandardAction(LOAD_USER_STATS_ERROR)<Error>(),
};

export type Action = ActionType<typeof actions>;
