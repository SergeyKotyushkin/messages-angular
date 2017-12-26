import { Application, Request, Response } from 'express';
import passport = require('passport');
import local = require('passport-local');
import * as passportLocal from 'passport-local';
import { UserModel } from '../../../models/user';
import { CurrentUserModel } from '../../../models/current-user';
import { MockUsers } from '../../../mocks/users';
import { PassportUrls } from '../common';
import { IAuthStrategy } from '../../common/i-auth-strategy';
import * as debug from 'debug';


export class LocalPassport implements IAuthStrategy {

    public initialize(app: Application) {
        app.use(passport.initialize());
        app.use(passport.session());

        passport.use(
            new local.Strategy((name: string, password: string, done: any) => {
                let user = this._findUser(name, password);
                done(null, user);
            })
        );

        passport.serializeUser((user: CurrentUserModel, done) => {
            done(null, user);
        });

        passport.deserializeUser((id: string, done) => {
            if (id == null) {
                done(null, null);
                return;
            }

            let user = this._findUserById(id);
            done(null, user);
        });

        app.post(PassportUrls.LocalLogin,
            passport.authenticate('local'),
            (req: Request, res: Response) => res.json(req.user)
        );

        app.get(PassportUrls.LocalLogout, (req: Request, res: Response) => {
            req.logout();
            res.json(true);
        });
    }

    private _findUser(name: string, password: string): CurrentUserModel {
        let user = MockUsers.find((user: UserModel) => user.name === name &&
            user.password === password);
        return user ? new CurrentUserModel(user.id, user.name) : null;
    }

    private _findUserById(id: string): CurrentUserModel {
        let user = MockUsers.find((user: UserModel) => user.id === id);
        return user ? new CurrentUserModel(user.id, user.name) : null;
    }
}
