import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { MainAppComponent } from './main-app.component';
import 'hammerjs';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        FlexLayoutModule
    ],
    declarations: [
        MainAppComponent
    ],
    bootstrap: [MainAppComponent]
})
export class MainAppModule { }
