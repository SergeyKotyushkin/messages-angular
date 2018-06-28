import { LoginPageComponentType } from '../enums/login-page-component-type'
import { IState } from '../interfaces/i-state'

export class LoginPageStateModel implements IState<LoginPageStateModel> {

    public activeComponent: LoginPageComponentType;

    constructor() {
        this.activeComponent = LoginPageComponentType.Login;
    }

    public clone(): LoginPageStateModel {
        let cloned = new LoginPageStateModel();

        cloned.activeComponent = this.activeComponent;
        return cloned;
    }
}
