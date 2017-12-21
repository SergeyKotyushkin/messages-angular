import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { MainAppRoutingModule } from './main-app-routing.module';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { Environment } from '../../environment';
import { AdminPageModule } from '../admin-page/admin-page.module';
import { HomePageModule } from '../home-page/home-page.module';
import { LoginPageModule } from '../login-page/login-page.module';
import { NotFoundPageModule } from '../not-found-page/not-found-page.module';
import { MainAppComponent } from './main-app.component';
import 'hammerjs';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        FlexLayoutModule,
        MainAppRoutingModule,
        LoggerModule.forRoot({
            serverLoggingUrl: '/api/logs',
            level: Environment.mode === 'production'
                ? NgxLoggerLevel.ERROR
                : NgxLoggerLevel.DEBUG,
            serverLogLevel: NgxLoggerLevel.WARN
        }),
        AdminPageModule,
        HomePageModule,
        LoginPageModule,
        NotFoundPageModule
    ],
    declarations: [
        MainAppComponent
    ],
    bootstrap: [MainAppComponent]
})
export class MainAppModule { }
