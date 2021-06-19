import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { RecoverPasswordFormComponent } from './recover-password-form/recover-password-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'UserLoginFormComponent', pathMatch: 'full' },
  { path: 'login', component: UserLoginFormComponent },
  { path: 'recover', component: RecoverPasswordFormComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
