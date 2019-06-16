// Redux
import {
    applyMiddleware,
    combineReducers,
    createStore,
    Store,
 }                          from "redux";
 // Saga
import createSagaMiddleware     from "redux-saga";
import { all }                  from "redux-saga/effects";
import { StateType }            from "typesafe-actions";
import {
    composeWithDevTools,
    EnhancerOptions
}                               from "redux-devtools-extension";
// Reducers and Sagas
import appReducer                from './reducer';
import {
    reducer as usersReducer,
    sagas as usersSagas,
} from '../../common/users';
// Action Types
import {Action as appActions}    from './actions';
import {Action as usersActions} from '../../common/users/functional/actions';
import {Action as mainPanelActions} from '../../modules/MainPanel/functional/actions';


const rootReducer = combineReducers({
    app   : appReducer,
    user : usersReducer
});

export type RootState = StateType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

let store: Store<RootState>;

export type AllActions =
    | appActions
    | usersActions
    | mainPanelActions
;


function* sagas() {
    yield all([
        ...usersSagas,
    ]);
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