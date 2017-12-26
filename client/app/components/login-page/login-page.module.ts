import { NgModule } from '@angular/core';
import { LocalLoginModule } from '../local-login/local-login.module';
import { LoginPageComponent } from './login-page.component';
import { LocalLoginComponent } from '../local-login/local-login.component';

@NgModule({
    imports: [
        LocalLoginModule
    ],
    declarations: [LoginPageComponent],
    exports: [LoginPageComponent]
})
export class LoginPageModule { }
