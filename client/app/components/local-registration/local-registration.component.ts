import { Component, OnDestroy } from '@angular/core';
import { ISubscription } from "rxjs/Subscription";
import { NGXLogger } from 'ngx-logger';
import { Store } from '@ngrx/store';
import { SET_ACTIVE_LOGIN_PAGE_COMPONENT } from '../../redux/login-page/actions';
import { LoginPageStateModel } from '../../../../common/models/login-page-state';
import { LoginPageComponentType } from '../../../../common/enums/login-page-component-type';

@Component({
    selector: 'local-registration',
    template: `<div fxFlex fxLayoutAlign="center center">
    <mat-card fxLayout="column" fxLayoutGap="10px" fxFlex.sm="50%" fxFlex.xs="90%" fxFlex="30%">
        <h3>Registration</h3>
        <mat-form-field class="full-width">
            <input matInput placeholder="Username" [(ngModel)]="name"/>
        </mat-form-field>
        <mat-form-field class="full-width">
            <input matInput placeholder="Password" type="password" [(ngModel)]="password">
        </mat-form-field>
        <mat-form-field class="full-width">
            <input matInput placeholder="Repeat Password" type="password" [(ngModel)]="repeatedPassword">
        </mat-form-field>
        <mat-card-actions fxLayout="row" fxLayoutAlign="center center">
            <button color="primary" mat-raised-button (click)="register()">Register</button>
            <button mat-raised-button (click)="cancel()">Cancel</button>
        </mat-card-actions>
    </mat-card>
</div>`,
    providers: [NGXLogger]
})
export class LocalRegistrationComponent implements OnDestroy {

    private _registrationSubscription: ISubscription;

    public name: string;
    public password: string;
    public repeatedPassword: string;

    constructor(private _logger: NGXLogger,
        private _loginPageStateStore: Store<LoginPageStateModel>) {
        this._logger.debug('LocalRegistration Component is ready!', new Date());
    }

    public register(): void {

    }

    public cancel(): void {
        this._loginPageStateStore.dispatch({ type: SET_ACTIVE_LOGIN_PAGE_COMPONENT, payload: LoginPageComponentType.Login });
    }

    public ngOnDestroy() {
        if (this._registrationSubscription) {
            this._registrationSubscription.unsubscribe();
        }
    }
}
