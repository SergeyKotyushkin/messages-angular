import { Application } from 'express';
import { IAuthStrategy } from '../../common/auth/common/i-auth-strategy';

export class AuthRoute {
    public static initialize(authStrategy: IAuthStrategy, app: Application) {
        authStrategy.initialize(app);
    }
}
