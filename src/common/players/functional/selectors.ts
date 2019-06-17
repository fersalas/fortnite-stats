import { createSelector } from 'reselect';
import { RootState } from '../../../app';

export const getPlayersState =  (state: RootState) => state.players;

export const getPlayersEntities = createSelector(
    getPlayersState,
    playersState => playersState.players
);

export const getPlayersArray = createSelector(
    getPlayersEntities,
    players => Object.keys(players).map(key => players[key])
)