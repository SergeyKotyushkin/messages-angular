import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomePageComponent } from './home-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule
    ],
    declarations: [HomePageComponent],
    exports: [HomePageComponent]
})
export class HomePageModule { }
