import { Component, OnDestroy } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
    selector: 'home-page',
    template: `<div class="home-page-container">
        <em>Home page here</em>
    </div>`,
    providers: [NGXLogger]
})
export class HomePageComponent {
    constructor(private _logger: NGXLogger) {
        this._logger.debug('HomePage Component is ready!', new Date());
    }
}
