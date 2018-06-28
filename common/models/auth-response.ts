import { CurrentUserModel } from './current-user';

export class AuthResponse {

    constructor(public isValid: boolean, public user: CurrentUserModel) { }
}
