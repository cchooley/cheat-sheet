import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { LandComponent } from './components/land/land.component';
import { RegisterButtonComponent } from './components/register-button/register-button.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LandComponent,
    RegisterButtonComponent,
    LoginButtonComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
