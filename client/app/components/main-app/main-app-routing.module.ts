import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';

const routes: Routes = [
    { path: 'admin', component: AdminPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: '', component: HomePageComponent },
    { path: '**', component: NotFoundPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class MainAppRoutingModule { }
