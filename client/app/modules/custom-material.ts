import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    exports: [
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
        MatGridListModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        FlexLayoutModule
    ]
})
export class CustomMaterialModule { }
