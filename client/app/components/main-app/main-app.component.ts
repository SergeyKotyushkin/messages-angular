import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ISubscription } from "rxjs/Subscription";
import { Observable } from 'rxjs/Rx';
import { NGXLogger } from 'ngx-logger';
import { Store } from '@ngrx/store';
import { SET_CURRENT_USER } from '../../redux/current-user/actions';
import { CurrentUserModel } from '../../../../common/models/current-user';
import { AuthResponse } from '../../../../common/models/auth-response';
import { AuthService } from '../../services/auth';

@Component({
    selector: 'main-app',
    template: `
<mat-toolbar layout="row" color="primary">
    <a mat-button routerLink="">
        <mat-icon>home</mat-icon>
        <span>Home</span>
    </a>
    <a mat-button routerLink="/admin" *ngIf="currentUserIsLoggedIn">
        <mat-icon>security</mat-icon>
        <span>Admin</span>
    </a>
    <span class="flex-filler"></span>
    <a mat-button routerLink="/login" *ngIf="!currentUserIsLoggedIn">
        <mat-icon>exit_to_app</mat-icon>
        <span>Login</span>
    </a>
    <button mat-button [matMenuTriggerFor]="logoutMenu" *ngIf="currentUserIsLoggedIn">
        <span>{{currentUserName}}</span>
    </button>
    <mat-menu #logoutMenu="matMenu">
        <button mat-menu-item>
            <mat-icon>account_circle</mat-icon>
            <span>Profile</span>
        </button>
        <button mat-menu-item (click)="logout()">
            <mat-icon>power_settings_new</mat-icon>
            <span>Log out</span>
        </button>
    </mat-menu>
</mat-toolbar>
<div class="main-content">
    <router-outlet></router-outlet>
</div>
<hr/>
`,
    providers: [NGXLogger, AuthService]
})
export class MainAppComponent implements OnDestroy {
    private _currentUserSubscription: ISubscription;
    private _logoutSubscription: ISubscription;
    private _getCurrentUserSubscription: ISubscription;

    private _currentUser: Observable<CurrentUserModel>;

    public currentUserIsLoggedIn: boolean;
    public currentUserId: String;
    public currentUserName: String;

    constructor(private _logger: NGXLogger,
        private _router: Router,
        private _authService: AuthService,
        private _currentUserStore: Store<CurrentUserModel>) {

        this._logger.debug('MainAppComponent is ready!', new Date());
    }

    public logout() {
        if (this._logoutSubscription) {
            this._logoutSubscription.unsubscribe();
        }

        this._logoutSubscription = this._authService
            .logout()
            .subscribe(this._onLogoutSuccess.bind(this),
            this._onLogoutFail.bind(this));
    }

    public ngOnInit() {
        this._currentUser = this._currentUserStore.select('currentUser');
        this._currentUserSubscription = this._currentUser
            .subscribe(this._onCurrentUserUpdation.bind(this));

        if (this._getCurrentUserSubscription) {
            this._getCurrentUserSubscription.unsubscribe();
        }

        this._getCurrentUserSubscription = this._authService
            .getCurrentUser()
            .subscribe(this._onGetCurrentUserSuccess.bind(this),
            this._onGetCurrentUserFail.bind(this));
    }

    public ngOnDestroy() {
        if (this._getCurrentUserSubscription) {
            this._getCurrentUserSubscription.unsubscribe();
        }

        if (this._currentUserSubscription) {
            this._currentUserSubscription.unsubscribe();
        }

        if (this._logoutSubscription) {
            this._logoutSubscription.unsubscribe();
        }
    }

    private _onGetCurrentUserSuccess(authResponse: AuthResponse) {
        this._logger.debug('CurrentUser Has Got with success: ', authResponse);
        this._currentUserStore.dispatch({ type: SET_CURRENT_USER, payload: authResponse.user });
    }

    private _onGetCurrentUserFail(errorMessage: String) {
        this._logger.error('CurrentUser Has Got with error: ', errorMessage);
    }

    private _onCurrentUserUpdation(user: CurrentUserModel) {
        this._logger.debug('CurrentUserModel updated: ', user);
        this.currentUserIsLoggedIn = !!user;
        this.currentUserId = !user ? null : user.id;
        this.currentUserName = !user ? null : user.name;
    }

    private _onLogoutSuccess(result: boolean) {
        if (result) {
            this._currentUserStore.dispatch({ type: SET_CURRENT_USER });
            this._logger.debug('Logout success');
            this._router.navigateByUrl('/');
        } else {
            this._logger.error('Logout error');
        }
    }

    private _onLogoutFail(errorMessage: String) {
        this._logger.error('Logout error: ', errorMessage);
    }
}
