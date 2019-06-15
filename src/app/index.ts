import getStore, { RootState, AllActions } from './functional/store';
import App                     from './display/App';

// I'll probably move this somewhere else, this is ugly
export type RootState = RootState;
export type AllActions = AllActions;
export {
    App,
    getStore,
};