// Redux
import {
    applyMiddleware,
    combineReducers,
    createStore,
    Store,
 }                          from "redux";
 // Saga
import createSagaMiddleware from "redux-saga";
import { all }              from "redux-saga/effects";
import { StateType }        from "typesafe-actions";
import {
    composeWithDevTools,
    EnhancerOptions
}                           from "redux-devtools-extension";
// Reducers
import appReducer           from './reducer';

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