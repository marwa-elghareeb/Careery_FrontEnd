import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';


// components
import { LoginComponent } from './login/login.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SignupComponent } from './signup/signup.component';
import { SignupthankyouComponent } from './signupthankyou/signupthankyou.component';
import { SignupverificationComponent } from './signupverification/signupverification.component';
import { GlobalModule, HttpLoaderFactory } from '../global/global.module';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ShareButtonModule } from '@ngx-share/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LoginComponent,
    NewpasswordComponent,
    ResetpasswordComponent,
    SignupComponent,
    SignupthankyouComponent,
    SignupverificationComponent
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    GlobalModule,
    ShowHidePasswordModule,
    FormsModule,
    NgbModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    ShareButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    BsDatepickerModule.forRoot(),
    
  ]
})
export class AuthModule { }
