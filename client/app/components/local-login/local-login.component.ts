import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ISubscription } from "rxjs/Subscription";
import { NGXLogger } from 'ngx-logger';
import { Store } from '@ngrx/store';
import { SET_ACTIVE_LOGIN_PAGE_COMPONENT } from '../../redux/login-page/actions';
import { SET_CURRENT_USER } from '../../redux/current-user/actions';
import { CurrentUserModel } from '../../../../common/models/current-user';
import { LoginPageStateModel } from '../../../../common/models/login-page-state';
import { LoginPageComponentType } from '../../../../common/enums/login-page-component-type';
import { AuthService } from '../../services/auth';

@Component({
    selector: 'local-login',
    template: `<div fxFlex fxLayoutAlign="center center">
    <mat-card fxLayout="column" fxLayoutGap="10px" fxFlex.sm="50%" fxFlex.xs="90%" fxFlex="30%">
        <h3>Login</h3>
        <mat-form-field class="full-width">
            <input matInput placeholder="Username" [(ngModel)]="name"/>
        </mat-form-field>
        <mat-form-field class="full-width">
            <input matInput placeholder="Password" type="password" [(ngModel)]="password">
        </mat-form-field>
        <mat-card-actions fxLayout="row" fxLayoutAlign="center center">
            <button color="primary" mat-raised-button (click)="login()">Login</button>
            <button mat-raised-button (click)="newUserClick()">New user?</button>
        </mat-card-actions>
    </mat-card>
</div>`,
    providers: [NGXLogger, AuthService]
})
export class LocalLoginComponent implements OnDestroy {

    private _loginSubscription: ISubscription;

    private static _invalidCredentialsMessage = 'Invalid credentials!';

    public name: string;
    public password: string;

    constructor(private _logger: NGXLogger,
        private _router: Router,
        private _authService: AuthService,
        private _currentUserStore: Store<CurrentUserModel>,
        private _loginPageStateStore: Store<LoginPageStateModel>) {
        this._logger.debug('LocalLogin Component is ready!', new Date());
    }

    public login(): void {

        if (!this.name || !this.name.trim().length ||
            !this.password || !this.password.trim().length) {
            // todo: change to alert component
            alert('Please, fill both fields!');
            return;
        }

        this._loginSubscription = this._authService
            .login(this.name, this.password)
            .subscribe(this._onLoginSuccess.bind(this),
                this._onLoginFail.bind(this));
    }

    public newUserClick(): void {
        this._loginPageStateStore.dispatch({ type: SET_ACTIVE_LOGIN_PAGE_COMPONENT, payload: LoginPageComponentType.Registration });
    }

    public ngOnDestroy() {
        if (this._loginSubscription) {
            this._loginSubscription.unsubscribe();
        }
    }

    private _onLoginSuccess(user: CurrentUserModel) {
        this._currentUserStore.dispatch({ type: SET_CURRENT_USER, payload: user });
        this._router.navigateByUrl('');
        this._logger.debug('_onLoginSuccess', user);
    }

    private _onLoginFail(errorMessage: String) {
        this._currentUserStore.dispatch({ type: SET_CURRENT_USER });
        // todo: change to alert component
        alert(LocalLoginComponent._invalidCredentialsMessage)
        this._logger.debug('_onLoginFail', errorMessage);
    }
}
