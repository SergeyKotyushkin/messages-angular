import { ActionReducer, Action } from '@ngrx/store';
import { SET_CURRENT_USER } from './actions';
import { CurrentUser } from '../../models/current-user';


export function currentUserReducer(state: CurrentUser = null, action: Action) {
    let user: CurrentUser = action.payload;
    switch (action.type) {
        case SET_CURRENT_USER:
            if (!user) {
                return null;
            }

            return new CurrentUser(user.id, user.name);

        default:
            return state;
    }
}
