import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatGridListModule,
    MatIconRegistry
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    providers: [MatIconRegistry],
    exports: [
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
        MatGridListModule,
        FlexLayoutModule
    ]
})
export class CustomMaterialModule { }
