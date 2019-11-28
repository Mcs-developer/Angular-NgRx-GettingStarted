import * as fromRoot from '../../state/app.state';
import { User } from '../user';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    user: UserState;
}

export interface UserState {
    currentUser: User;
    maskUserName: boolean;
}

const initialState: UserState =  {
    currentUser: null,
    maskUserName: true
}

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getCurrentUser = createSelector(getUserFeatureState, state => state.currentUser);
export const getMaskUserName = createSelector(getUserFeatureState, state => state.maskUserName);

export function reducer(state = initialState, action): UserState {
    switch (action.type) {
        case 'MASK_USER_NAME':
            return {
                ...state,
                maskUserName: action.payload
            };
            
    
        default:
            return state;
    }
}