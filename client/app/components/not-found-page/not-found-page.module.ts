import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotFoundPageComponent } from './not-found-page.component';

@NgModule({
    imports: [
        FormsModule,
        FlexLayoutModule
    ],
    declarations: [NotFoundPageComponent],
    exports: [NotFoundPageComponent]
})
export class NotFoundPageModule { }
