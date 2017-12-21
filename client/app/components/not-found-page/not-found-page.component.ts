import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
    selector: 'not-found-page',
    template: `<div class="not-found-page-container">
        <em>NotFound page here</em>
    </div>`,
    providers: [NGXLogger]
})
export class NotFoundPageComponent {
    constructor(private _logger: NGXLogger) {
        this._logger.debug('NotFoundPage Component is ready!', new Date());
    }
}
