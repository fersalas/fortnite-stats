import { createSelector } from 'reselect';
import { RootState } from '../../../app';

export const usersStateSelector =  (state: RootState) => state.users;

export const usersEntitiesSelector = createSelector(
    usersStateSelector,
    usersState => usersState.users
);