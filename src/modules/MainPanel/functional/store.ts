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
import {Action as appActions}           from './actions';

const rootReducer = combineReducers({
    app : appReducer,
});

export type RootState = StateType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

let store: Store<RootState>;

export type AllActions =
    | appActions;


function* sagas() {
    yield all([]);
}

export function configureStore(initialState?: RootState) {
    // configure middlewares
    const middlewares = [sagaMiddleware];
    // enhancers
    const enhancer = composeWithDevTools({} as EnhancerOptions);
    // create store
    const newStore = createStore(rootReducer, initialState!, enhancer(applyMiddleware(...middlewares)));

    sagaMiddleware.run(sagas);

    store = newStore;
}

export const getStore = () => store;

export default getStore;