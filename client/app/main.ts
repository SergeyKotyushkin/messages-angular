import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainAppModule } from './components/main-app/main-app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(MainAppModule);

console.log("Hello");
