import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LocalLoginModule } from '../local-login/local-login.module';
import { LocalRegistrationModule } from '../local-registration/local-registration.module';
import { LoginPageComponent } from './login-page.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        LocalLoginModule,
        LocalRegistrationModule
    ],
    declarations: [LoginPageComponent],
    exports: [LoginPageComponent]
})
export class LoginPageModule { }
