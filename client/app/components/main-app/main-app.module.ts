import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { Environment } from '../../environment';
import { MainAppComponent } from './main-app.component';
import 'hammerjs';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        FlexLayoutModule,
        LoggerModule.forRoot({
            serverLoggingUrl: '/api/logs',
            level: Environment.mode === 'production'
                ? NgxLoggerLevel.ERROR
                : NgxLoggerLevel.DEBUG,
            serverLogLevel: NgxLoggerLevel.WARN
        })
    ],
    declarations: [
        MainAppComponent
    ],
    bootstrap: [MainAppComponent]
})
export class MainAppModule { }
