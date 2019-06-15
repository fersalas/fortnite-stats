import {
    Action,
    actions
}  from './actions';
import { getType } from 'typesafe-actions';
export interface State {
    foo: boolean,
    bar: number,
}

const initialState: State = {
    foo: false,
    bar: 1,
}

const reducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case getType(actions.sampleActionWithPayload):
            return { ...state, bar: action.payload};
        case getType(actions.sampleAction):
            return {...state, foo: !state.foo}
        default:
            return state;
    }
};

export default reducer;