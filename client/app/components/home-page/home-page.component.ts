import { Component, OnDestroy } from '@angular/core';
import { ISubscription } from "rxjs/Subscription";
import { Observable } from 'rxjs/Rx';
import { NGXLogger } from 'ngx-logger';
import { Store } from '@ngrx/store';
import { SET_CURRENT_USER } from '../../redux/current-user/actions';
import { CurrentUser } from '../../models/current-user';

@Component({
    selector: 'home-page',
    template: `<div class="home-page-container">
        <em>Home page here</em>
    </div>
    <div>
        <span>IsLoggedIn: {{currentUserIsLoggedIn}}</span>
        <div *ngIf="currentUserIsLoggedIn">
            <span>User ID: {{currentUserId}}</span>
            <span>User Name: {{currentUserName}}</span>
        </div>
    <div>`,
    providers: [NGXLogger]
})
export class HomePageComponent implements OnDestroy {

    private _currentUserSubscription: ISubscription;

    private _currentUser: Observable<CurrentUser>;

    public currentUserIsLoggedIn: boolean;
    public currentUserId: String;
    public currentUserName: String;

    constructor(private _logger: NGXLogger, private _currentUserStore: Store<CurrentUser>) {
        let self = this;
        this._currentUser = this._currentUserStore.select('currentUser');
        this._currentUserSubscription = this._currentUser
            .subscribe(this._onCurrentUserUpdation.bind(self));

        this._logger.debug('HomePage Component is ready!', new Date());
    }

    public ngOnDestroy() {
        this._currentUserSubscription.unsubscribe();
    }

    private _onCurrentUserUpdation(user: CurrentUser) {
        this._logger.debug('CurrentUser updated: ', user);
        this.currentUserIsLoggedIn = !!user;
        this.currentUserId = !user ? null : user.id;
        this.currentUserName = !user ? null : user.name;
    }
}
