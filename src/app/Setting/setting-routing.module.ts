import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ControllpanelsettingsComponent } from './controllpanelsettings/controllpanelsettings.component';
import { PrivacysettingsComponent } from './privacysettings/privacysettings.component';
const routes: Routes = [
  {
    path : 'change-password',
    component : ChangepasswordComponent
  },
  {
    path : 'control-panel',
    component : ControllpanelsettingsComponent
  },
  {
    path : 'privacy-settings',
    component : PrivacysettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
