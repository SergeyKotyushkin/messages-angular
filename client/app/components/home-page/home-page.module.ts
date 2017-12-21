import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomePageComponent } from './home-page.component';

@NgModule({
    imports: [
        FormsModule,
        FlexLayoutModule
    ],
    declarations: [HomePageComponent],
    exports: [HomePageComponent]
})
export class HomePageModule { }
