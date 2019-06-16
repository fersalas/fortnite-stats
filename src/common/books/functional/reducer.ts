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
        case getType(actions.loadBookListStart):
            return { ...state, isLoading: true};
        case getType(actions.loadBookListSuccess):
            return {
                ...state,
                error: void 0,
                isLoading: false,
                list: action.payload
            };
        case getType(actions.loadBookListError):
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