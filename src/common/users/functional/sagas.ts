import { put, call, takeLatest } from "redux-saga/effects";
import { actions } from "./actions";
import { getType, ActionType } from "typesafe-actions";
//import * as selectors from "./selectors";
import { getUserUid } from "./api";

export function* loadUserUid(action: ActionType<typeof actions.loadUserUid>) {
    try {
        yield put(actions.loadUserUidStart());

        const params: api.Parameters = {
            username: 'NotReykan',
        };

        const response = yield call(getUserUid, params);
        console.log(response.data.data.entries)
        yield put(actions.loadUserUidSuccess(response));
    } catch (e) {
        yield put(actions.loadUserUidError(e));
    }
}

export const sagas = [
    takeLatest(getType(actions.loadUserUid), loadUserUid)
];
