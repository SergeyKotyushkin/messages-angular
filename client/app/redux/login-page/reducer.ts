import { ActionReducer, Action } from '@ngrx/store';
import { SET_ACTIVE_LOGIN_PAGE_COMPONENT } from './actions';
import { LoginPageStateModel } from '../../../../common/models/login-page-state';
import { LoginPageComponentType } from '../../../../common/enums/login-page-component-type';


export function loginPageStateReducer(state: LoginPageStateModel = null, action: Action) {
    switch (action.type) {
        case SET_ACTIVE_LOGIN_PAGE_COMPONENT: {
            let currentState: LoginPageStateModel = state;
            if (currentState == null) {
                currentState = new LoginPageStateModel();
            }

            let loginPageComponentType = <LoginPageComponentType>action.payload;
            if (loginPageComponentType == null) {
                return currentState;
            }

            let newState: LoginPageStateModel = currentState.clone();
            newState.activeComponent = loginPageComponentType;
            return newState;
        }
        default: {
            return state;
        }
    }
}
