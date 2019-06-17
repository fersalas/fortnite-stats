import { put, call, select, takeLatest } from "redux-saga/effects";
import { getType, ActionType } from "typesafe-actions";
import { getUsersEntities } from './selectors';
import { actions } from "./actions";
import { getGameModeStats } from './utils';
import { 
    getUser,
    getUserStats,
 } from "./api";
import { UsersMap, GameStats } from "./types";


export function* initloadUserStats(action: ActionType<typeof actions.loadUserStats>) {
    try {
        const username = action.payload;
        let users: UsersMap = yield select(getUsersEntities);
        // Check if we don't already have user
        if(users[username] === undefined) {
            yield put(actions.loadUserStatsStart());
            // TODO: Submit form to look for the username you want
            const paramsUid: api.Parameters = {
                username,
            };
            const uidResponse = yield call(getUser, paramsUid);
            // Traverse the response to get the juicy data
            const user = uidResponse.data.data;

            const statsParams: api.Parameters = {
                user_id: user.uid,
            };
            const statsResponse = yield call(getUserStats, statsParams)
            // The API response has a pretty deep tree, so let's move the logic to traverse it somewhere else
            const soloStats: GameStats = getGameModeStats(statsResponse, 'defaultsolo');
            // Send a new user entity
            yield put(actions.loadUserStatsSuccess({
                ...users,
                [user.username]: {
                    uid: user.uid,
                    username: user.username,
                    stats: soloStats
                }
            }))
        }
    } catch (e) {
        yield put(actions.loadUserStatsError(e));
    }
}

export const sagas = [
    takeLatest(getType(actions.loadUserStats), initloadUserStats)
];
