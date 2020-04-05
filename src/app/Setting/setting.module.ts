import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';

import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ControllpanelsettingsComponent } from './controllpanelsettings/controllpanelsettings.component';
import { PrivacysettingsComponent } from './privacysettings/privacysettings.component';
@NgModule({
  declarations: [
    ChangepasswordComponent,
    ControllpanelsettingsComponent,
    PrivacysettingsComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
