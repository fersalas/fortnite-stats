import { put, call, takeLatest } from "redux-saga/effects";
import { actions } from "./actions";
import { getType, ActionType } from "typesafe-actions";
//import * as selectors from "./selectors";
import { bookListApi } from "./api";

export function* loadBookList(action: ActionType<typeof actions.loadBookList>) {
    try {
        yield put(actions.loadBookListStart());

        const params: api.Parameters = {
            id: '67444266',
        };

        const data = yield call(bookListApi, params);
        yield put(actions.loadBookListSuccess(data));
    } catch (e) {
        yield put(actions.loadBookListError(e));
    }
}

export const sagas = [
    takeLatest(getType(actions.loadBookList), loadBookList)
];
