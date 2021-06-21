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
import { ScholarshipLevelFormComponent } from './scholarship-level-form/scholarship-level-form.component';
import { EducationLevelFormComponent } from './education-level-form/education-level-form.component';
import { OffspringInfoFormComponent } from './offspring-info-form/offspring-info-form.component';
import { HomeFinancesFormComponent } from './home-finances-form/home-finances-form.component';
import { Household1InfoFormComponent } from './household1-info-form/household1-info-form.component';
import { Household2InfoFormComponent } from './household2-info-form/household2-info-form.component'

@NgModule({
  declarations: [
    AppComponent,
    UserLoginFormComponent,
    RecoverPasswordFormComponent,
    SurveyOverviewFormComponent,
    PersonalInfoFormComponent,
    SurveyInstructionsComponent,
    ScholarshipLevelFormComponent,
    EducationLevelFormComponent,
    OffspringInfoFormComponent,
    HomeFinancesFormComponent,
    Household1InfoFormComponent,
    Household2InfoFormComponent
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
