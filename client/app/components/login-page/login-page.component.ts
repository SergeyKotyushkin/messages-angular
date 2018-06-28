import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from "rxjs/Subscription";
import { Observable } from 'rxjs/Rx';
import { NGXLogger } from 'ngx-logger';
import { Store } from '@ngrx/store';
import { SET_ACTIVE_LOGIN_PAGE_COMPONENT } from '../../redux/login-page/actions';
import { LoginPageStateModel } from '../../../../common/models/login-page-state';
import { LoginPageComponentType } from '../../../../common/enums/login-page-component-type';

@Component({
    selector: 'login-page',
    template: `<div class="login-page-container">
        <local-login *ngIf="_isLoginActive"></local-login>
        <local-registration *ngIf="_isRegistrationActive"></local-registration>
    </div>`,
    providers: [NGXLogger]
})
export class LoginPageComponent {

    public get _isLoginActive() {
        return this._activeComponent === LoginPageComponentType.Login;
    }

    public get _isRegistrationActive() {
        return this._activeComponent === LoginPageComponentType.Registration;
    }

    private _activeComponent: LoginPageComponentType;
    private _loginPageStateSubscription: ISubscription;

    private _loginPageState: Observable<LoginPageStateModel>;

    constructor(private _logger: NGXLogger,
        private _loginPageStateStore: Store<LoginPageStateModel>) {
        this._loginPageStateStore.dispatch({ type: SET_ACTIVE_LOGIN_PAGE_COMPONENT, payload: LoginPageComponentType.Login });
        this._logger.debug('LoginPage Component is ready!', new Date());
    }

    public ngOnInit() {
        this._loginPageState = this._loginPageStateStore.select('loginPageState');
        this._loginPageStateSubscription = this._loginPageState
            .subscribe(this._onLoginPageStateUpdated.bind(this));
    }

    public ngOnDestroy() {
        if (this._loginPageStateSubscription) {
            this._loginPageStateSubscription.unsubscribe();
        }
    }

    private _onLoginPageStateUpdated(state: LoginPageStateModel): void {
        if (!state) {
            return;
        }

        this._activeComponent = state.activeComponent;
    }
}
