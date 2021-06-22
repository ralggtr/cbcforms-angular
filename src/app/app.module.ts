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
import { Household2InfoFormComponent } from './household2-info-form/household2-info-form.component';
import { MinorsHealthFormComponent } from './minors-health-form/minors-health-form.component';
import { FamilyHealthFormComponent } from './family-health-form/family-health-form.component';
import { EmotionalHealthFormComponent } from './emotional-health-form/emotional-health-form.component';
import { WomensHealthFormComponent } from './womens-health-form/womens-health-form.component';
import { NutritionInfoFormComponent } from './nutrition-info-form/nutrition-info-form.component';
import { ExpectationsInfoFormComponent } from './expectations-info-form/expectations-info-form.component';
import { FamilyInfoFormComponent } from './family-info-form/family-info-form.component';
import { FamilyMemberInfoFormComponent } from './family-member-info-form/family-member-info-form.component'

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
    Household2InfoFormComponent,
    MinorsHealthFormComponent,
    FamilyHealthFormComponent,
    EmotionalHealthFormComponent,
    WomensHealthFormComponent,
    NutritionInfoFormComponent,
    ExpectationsInfoFormComponent,
    FamilyInfoFormComponent,
    FamilyMemberInfoFormComponent
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
