import { createStandardAction, ActionType } from "typesafe-actions";

const LOAD_USER_UID = "USERS:LOAD_USER_UID";
const LOAD_USER_UID_START = "USERS:LOAD_USER_UID_LIST_START";
const LOAD_USER_UID_SUCCESS = "USERS:LOAD_USER_UID_LIST_SUCCESS";
const LOAD_USER_UID_ERROR = "USERS:LOAD_USER_UID_LIST_ERROR";

// Redux Action Creators
// ---------------------
// These functions create redux action objects. They should strive to be side-effect free.
// the action object format is defined by Flux Standard Action. https://github.com/acdlite/flux-standard-action
export const actions = {
    // LOAD USER UID Actions
    loadUserUid: createStandardAction(LOAD_USER_UID)(),
    loadUserUidStart: createStandardAction(LOAD_USER_UID_START)(),
    loadUserUidSuccess: createStandardAction(LOAD_USER_UID_SUCCESS)<Array<any>>(),
    loadUserUidError: createStandardAction(LOAD_USER_UID_ERROR)<Error>(),
};

export type Action = ActionType<typeof actions>;
