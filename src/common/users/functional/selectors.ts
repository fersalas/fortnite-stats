import { createSelector } from 'reselect';
import { RootState } from '../../../app';

export const getUsersState =  (state: RootState) => state.users;

export const getUsersEntities = createSelector(
    getUsersState,
    usersState => usersState.users
);

export const getUsersArray = createSelector(
    getUsersEntities,
    users => Object.keys(users).map(key => users[key])
)