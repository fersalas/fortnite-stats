import {
    Action,
    actions
}                  from './actions';
import { getType } from 'typesafe-actions';
export interface State {
    error?: Error,
    isLoading: boolean,
    list: any,
}

const initialState: State = {
    isLoading: false,
    list: [],
}

const reducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case getType(actions.loadUserUidStart):
            return { ...state, isLoading: true};
        case getType(actions.loadUserUidSuccess):
            return {
                ...state,
                error: void 0,
                isLoading: false,
                list: action.payload
            };
        case getType(actions.loadUserUidError):
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