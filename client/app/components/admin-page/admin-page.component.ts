import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
    selector: 'admin-page',
    template: `<div class="adimn-page-container">
        <em>Admin page here</em>
    </div>`,
    providers: [NGXLogger]
})
export class AdminPageComponent {
    constructor(private _logger: NGXLogger) {
        this._logger.debug('AdminPage Component is ready!', new Date());
    }
}
