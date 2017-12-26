import { ActionReducer, Action } from '@ngrx/store';
import { SET_CURRENT_USER } from './actions';
import { CurrentUserModel } from '../../../../common/models/current-user';


export function currentUserReducer(state: CurrentUserModel = null, action: Action) {
    let user: CurrentUserModel = action.payload;
    switch (action.type) {
        case SET_CURRENT_USER:
            if (!user) {
                return null;
            }

            return new CurrentUserModel(user.id, user.name);

        default:
            return state;
    }
}
