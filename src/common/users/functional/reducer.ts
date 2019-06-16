import {
    Action,
    actions
}                  from './actions';
import { getType } from 'typesafe-actions';
import { GameStats, UserEntity } from './types';
export interface State {
    error?: Error,
    isLoading: boolean,
    uid?: string,

    username?: string,
    stats?: GameStats,
    users: UserEntity[]
}

const initialState: State = {
    isLoading: false,
    users: []
}

const reducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        // User ID
        case getType(actions.loadUserUidSuccess):
            return {
                ...state,
                error: void 0,
                isLoading: false,
                username: action.payload.username,
                uid: action.payload.uid,
            };
        // User Stats
        case getType(actions.loadUserStatsStart):
            return {...state, isLoading: true}
        case getType(actions.loadUserStatsSuccess):
            return {
                ...state,
                error: void 0,
                isLoading: false,
                stats: action.payload
            };
        case getType(actions.loadUserStatsError):
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