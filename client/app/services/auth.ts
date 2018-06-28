import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from "rxjs/Subscription";
import { PassportUrls } from '../../../common/auth/passport/common';
import { UserModel } from '../../../common/models/user';
import { HttpHelper } from '../helpers/http';

@Injectable()
export class AuthService {

    public constructor(private _http: Http) { }

    public login(name: String, password: String): Observable<UserModel> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http
            .post(PassportUrls.LocalLogin, {
                username: name,
                password: password
            }, options)
            .map(HttpHelper.extractObjectData)
            .catch(HttpHelper.handleError);
    }

    public logout(): Observable<boolean> {
        return this._http
            .get(PassportUrls.LocalLogout)
            .map(HttpHelper.extractObjectData)
            .catch(HttpHelper.handleError);
    }

    public getCurrentUser(): Observable<UserModel> {
        return this._http
            .get(PassportUrls.LocalGetCurrentUser)
            .map(HttpHelper.extractObjectData)
            .catch(HttpHelper.handleError)
            .take(1);
    }
}
