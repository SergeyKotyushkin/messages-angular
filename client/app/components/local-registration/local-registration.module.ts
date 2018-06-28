import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../../modules/custom-material';
import { LocalRegistrationComponent } from './local-registration.component';

@NgModule({
    imports: [
        CustomMaterialModule,
        FormsModule
    ],
    declarations: [LocalRegistrationComponent],
    exports: [LocalRegistrationComponent]
})
export class LocalRegistrationModule { }
