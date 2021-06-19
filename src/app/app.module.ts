import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { RecoverPasswordFormComponent } from './recover-password-form/recover-password-form.component';
import { SurveyOverviewFormComponent } from './survey-overview-form/survey-overview-form.component';
import { PersonalInfoFormComponent } from './personal-info-form/personal-info-form.component';
import { SurveyInstructionsComponent } from './survey-instructions/survey-instructions.component';
import { ScholarshipLevelFormComponent } from './scholarship-level-form/scholarship-level-form.component'

@NgModule({
  declarations: [
    AppComponent,
    UserLoginFormComponent,
    RecoverPasswordFormComponent,
    SurveyOverviewFormComponent,
    PersonalInfoFormComponent,
    SurveyInstructionsComponent,
    ScholarshipLevelFormComponent
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
