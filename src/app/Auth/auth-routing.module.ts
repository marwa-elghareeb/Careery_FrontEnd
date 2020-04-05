import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SignupComponent } from './signup/signup.component';
import { SignupthankyouComponent } from './signupthankyou/signupthankyou.component';
import { SignupverificationComponent } from './signupverification/signupverification.component';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'signup',
    component : SignupComponent
  },
  {
    path : 'resetpassword',
    component : ResetpasswordComponent
  },
  {
    path : 'newpassword',
    component : NewpasswordComponent
  },
  {
    path : 'verification',
    component : SignupverificationComponent
  },
  {
    path : 'signup-thankyou',
    component : SignupthankyouComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
