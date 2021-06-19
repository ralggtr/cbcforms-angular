import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { RecoverPasswordFormComponent } from './recover-password-form/recover-password-form.component';
import { SurveyOverviewFormComponent } from './survey-overview-form/survey-overview-form.component';
import { PersonalInfoFormComponent } from './personal-info-form/personal-info-form.component';
import { SurveyInstructionsComponent } from './survey-instructions/survey-instructions.component';

const routes: Routes = [
  { path: '', redirectTo: 'UserLoginFormComponent', pathMatch: 'full' },
  { path: 'login', component: UserLoginFormComponent },
  { path: 'recover', component: RecoverPasswordFormComponent },
  { path: 'overview', component: SurveyOverviewFormComponent },
  { path: 'personal-info', component: PersonalInfoFormComponent, },
  { path: 'instructions', component: SurveyInstructionsComponent, }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
