import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent}from './login/login/login.component';

const routes: Routes = [
    { path: '', redirectTo: '/login/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent}];
@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
