import { put, call, takeLatest } from "redux-saga/effects";
import { actions } from "./actions";
import { getType, ActionType } from "typesafe-actions";
import { getGameModeStats } from './utils';
import { 
    getUser,
    getUserStats,
 } from "./api";


export function* initloadUserStats(action: ActionType<typeof actions.loadUserStats>) {
    try {
        yield put(actions.loadUserStatsStart());
        // TODO: Submit form to look for the username you want
        const paramsUid: api.Parameters = {
            username: 'NotReykan',
        };
        const uidResponse = yield call(getUser, paramsUid);
        const user = uidResponse.data.data;
        yield put(actions.loadUserUidSuccess(user));

        const paramsStats: api.Parameters = {
            user_id: user.uid,
        };
        const statsResponse = yield call(getUserStats, paramsStats)

        // Traverse response to get to the juicy data
        const soloStats = getGameModeStats(statsResponse, 'defaultsolo');
        yield put(actions.loadUserStatsSuccess(soloStats))
    } catch (e) {
        yield put(actions.loadUserStatsError(e));
    }
}

export const sagas = [
    takeLatest(getType(actions.loadUserStats), initloadUserStats)
];
