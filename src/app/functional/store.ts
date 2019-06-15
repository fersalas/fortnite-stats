import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import { composeWithDevTools, EnhancerOptions } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { StateType } from "typesafe-actions";
import { all } from "redux-saga/effects";

import appReducer from './appReducer';

const rootReducer = combineReducers({
    app : appReducer,
});

export type State = StateType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

let store: Store<State>;

function* sagas() {
    yield all([]);
}

export function configureStore(initialState?: State) {
    // configure middlewares
    const middlewares = [sagaMiddleware];
    // enhancers
    const enhancer = composeWithDevTools(<EnhancerOptions>{});
    // create store
    const newStore = createStore(rootReducer, initialState!, enhancer(applyMiddleware(...middlewares)));

    sagaMiddleware.run(sagas);

    store = newStore;
}

export const getStore = () => store;

export default getStore;