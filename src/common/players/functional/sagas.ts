import { put, call, select, takeLatest } from "redux-saga/effects";
import { getType, ActionType } from "typesafe-actions";
import { getPlayersEntities } from './selectors';
import { actions } from "./actions";
import { getGameModeStats } from './utils';
import { 
    getPlayer,
    getPlayerStats,
 } from "./api";
import { PlayersMap, GameStats } from "./types";


export function* initloadPlayerStats(action: ActionType<typeof actions.loadPlayerStats>) {
    try {
        const username = action.payload;
        let players: PlayersMap = yield select(getPlayersEntities);
        // Check if we don't already have player
        if(players[username] === undefined) {
            yield put(actions.loadPlayerStatsStart());
            // TODO: Submit form to look for the username you want
            const paramsUid: api.Parameters = {
                username,
            };
            const uidResponse = yield call(getPlayer, paramsUid);
            // Traverse the response to get the juicy data
            const player = uidResponse.data.data;

            const statsParams: api.Parameters = {
                user_id: player.uid,
            };
            const statsResponse = yield call(getPlayerStats, statsParams)
            // The API response has a pretty deep tree, so let's move the logic to traverse it somewhere else
            const soloStats: GameStats = getGameModeStats(statsResponse, 'defaultsolo');
            // Send a new player entity
            yield put(actions.loadPlayerStatsSuccess({
                ...players,
                [player.username]: {
                    uid: player.uid,
                    username: player.username,
                    stats: soloStats
                }
            }))
        }
    } catch (e) {
        console.log(e);
        yield put(actions.loadPlayerStatsError(e));
    }
}

export const sagas = [
    takeLatest(getType(actions.loadPlayerStats), initloadPlayerStats)
];
