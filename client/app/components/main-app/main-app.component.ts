import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
    // moduleId: module.id,
    selector: 'main-app',
    template: require("./main-app.template.html"),
    providers: [NGXLogger]
})
export class MainAppComponent {
    constructor(private _logger: NGXLogger) {
        this._logger.debug('MainAppComponent is ready!', new Date());
    }
}
