import {
    Action,
    actions
}                  from './actions';
import { getType } from 'typesafe-actions';
import { GameStats, PlayersMap } from './types';
export interface State {
    error?: Error,
    isLoading: boolean,
    uid?: string,

    username?: string,
    stats?: GameStats,
    players: PlayersMap,
}

const initialState: State = {
    isLoading: false,
    players: {},
}

const reducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        // Player UID
        case getType(actions.loadPlayerUidSuccess):
            return {
                ...state,
                error: void 0,
                isLoading: false,
                players: action.payload,
            };
        // Player Stats
        case getType(actions.loadPlayerStatsStart):
            return {...state, isLoading: true}
        case getType(actions.loadPlayerStatsSuccess):
            return {
                ...state,
                error: void 0,
                isLoading: false,
                players: action.payload
            };
        case getType(actions.loadPlayerStatsError):
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default reducer;