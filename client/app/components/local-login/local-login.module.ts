import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../../modules/custom-material';
import { LocalLoginComponent } from './local-login.component';

@NgModule({
    imports: [
        CustomMaterialModule,
        FormsModule
    ],
    declarations: [LocalLoginComponent],
    exports: [LocalLoginComponent]
})
export class LocalLoginModule { }
