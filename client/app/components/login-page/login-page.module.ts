import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginPageComponent } from './login-page.component';

@NgModule({
    imports: [
        FormsModule,
        FlexLayoutModule
    ],
    declarations: [LoginPageComponent],
    exports: [LoginPageComponent]
})
export class LoginPageModule { }
