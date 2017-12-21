import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminPageComponent } from './admin-page.component';

@NgModule({
    imports: [
        FormsModule,
        FlexLayoutModule
    ],
    declarations: [AdminPageComponent],
    exports: [AdminPageComponent]
})
export class AdminPageModule { }
