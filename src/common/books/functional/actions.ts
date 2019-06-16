import { createStandardAction, ActionType } from "typesafe-actions";

const LOAD_BOOK_LIST = "BOOKS:LOAD_BOOK_LIST";
const LOAD_BOOK_START = "BOOKS:LOAD_BOOK_LIST_START";
const LOAD_BOOK_SUCCESS = "BOOKS:LOAD_BOOK_LIST_SUCCESS";
const LOAD_BOOK_ERROR = "BOOKS:LOAD_BOOK_LIST_ERROR";

// Redux Action Creators
// ---------------------
// These functions create redux action objects. They should strive to be side-effect free.
// the action object format is defined by Flux Standard Action. https://github.com/acdlite/flux-standard-action
export const actions = {
    loadBookList: createStandardAction(LOAD_BOOK_LIST)(),
    loadBookListStart: createStandardAction(LOAD_BOOK_START)(),
    loadBookListSuccess: createStandardAction(LOAD_BOOK_SUCCESS)<Array<any>>(),
    loadBookListError: createStandardAction(LOAD_BOOK_ERROR)<Error>(),
};

export type Action = ActionType<typeof actions>;
