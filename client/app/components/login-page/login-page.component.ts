import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
    selector: 'login-page',
    template: `<div class="login-page-container">
        <local-login></local-login>
    </div>`,
    providers: [NGXLogger]
})
export class LoginPageComponent {
    constructor(private _logger: NGXLogger) {
        this._logger.debug('LoginPage Component is ready!', new Date());
    }
}
