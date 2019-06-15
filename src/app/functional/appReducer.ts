export {getType} from 'typesafe-actions';
export interface State {
    foo?: Boolean,
}

const initialState: State = {}

const reducer = (state: State = initialState, action: any) => {
    switch (action.type) {
        case 'SAMPLE_ACTION':
            return { ...state, foo: action.payload };
        default:
            return state;
    }
};

export default reducer;