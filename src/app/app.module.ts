import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { RecoverPasswordFormComponent } from './recover-password-form/recover-password-form.component'

@NgModule({
  declarations: [
    AppComponent,
    UserLoginFormComponent,
    RecoverPasswordFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
