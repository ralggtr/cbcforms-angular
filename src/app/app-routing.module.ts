import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { RecoverPasswordFormComponent } from './recover-password-form/recover-password-form.component';
import { SurveyOverviewFormComponent } from './survey-overview-form/survey-overview-form.component';
import { PersonalInfoFormComponent } from './personal-info-form/personal-info-form.component';
import { SurveyInstructionsComponent } from './survey-instructions/survey-instructions.component';
import { EducationLevelFormComponent } from './education-level-form/education-level-form.component';
import { OffspringInfoFormComponent } from './offspring-info-form/offspring-info-form.component';
import { HomeFinancesFormComponent } from './home-finances-form/home-finances-form.component';
import { Household1InfoFormComponent } from './household1-info-form/household1-info-form.component';
import { Household2InfoFormComponent } from './household2-info-form/household2-info-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'UserLoginFormComponent', pathMatch: 'full' },
  { path: 'login', component: UserLoginFormComponent },
  { path: 'recover', component: RecoverPasswordFormComponent },
  { path: 'overview', component: SurveyOverviewFormComponent },
  { path: 'personal-info', component: PersonalInfoFormComponent },
  { path: 'instructions', component: SurveyInstructionsComponent },
  { path: 'education-level', component: EducationLevelFormComponent },
  { path: 'offspring-info', component: OffspringInfoFormComponent },
  { path: 'home-finances', component: HomeFinancesFormComponent },
  { path: 'household1-info', component: Household1InfoFormComponent },
  { path: 'household2-info', component: Household2InfoFormComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
