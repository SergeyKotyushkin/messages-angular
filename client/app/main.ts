import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Environment } from './environment';
import { MainAppModule } from './components/main-app/main-app.module';
import * as debug from 'debug'

if (Environment.mode === 'production') {
    enableProdMode();
}

const platform = platformBrowserDynamic();
platform.bootstrapModule(MainAppModule);
