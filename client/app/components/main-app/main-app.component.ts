import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
    selector: 'main-app',
    template: `<div>
        <em>Hello</em>
        <span>messages</span>
        <em>!</em>
    </div>
    <router-outlet></router-outlet>
    <hr/>`,
    providers: [NGXLogger]
})
export class MainAppComponent {
    constructor(private _logger: NGXLogger) {
        this._logger.debug('MainAppComponent is ready!', new Date());
    }
}
