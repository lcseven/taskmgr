import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module'; // 重要

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    CoreModule,
    AppRoutingModule,
    LoginModule // 重要
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
