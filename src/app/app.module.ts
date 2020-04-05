/*****************************************************
# Company Name          :
# Author                :
# Created Date          : 10-01-2019
# Module                : AppModule
# Object name           : AppModule
# Functionality         : set up application structure
# Purpose               :
*******************************************************/
import { BrowserModule, Title  } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule,} from '@angular/forms';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {GlobalModule} from './global/global.module';
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderService } from './loader/loader.service';
import { LoaderInterceptor } from './loader/loader.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ShareButtonModule } from '@ngx-share/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProfileviewComponent } from './profile/profileview/profileview.component';


// All Component
import { AccessdenyComponent } from './accessdeny/accessdeny.component';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './layout/default/header/header.component';
import { FooterComponent } from './layout/default/footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HederafterloginComponent } from './layout/afterlogin/hederafterlogin/hederafterlogin.component';
import { FooterafterloginComponent } from './layout/afterlogin/footerafterlogin/footerafterlogin.component';
import { CmspageComponent } from './home/cmspage/cmspage.component';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layout/default/default.component';
import { AfterloginComponent } from './layout/afterlogin/afterlogin.component';
import { LevelStepsComponent } from './levels/level-steps/level-steps.component';
import { LevelStepsHeaderComponent } from './levels/level-steps-header/level-steps-header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SidebarComponent } from './layout/afterlogin/sidebar/sidebar.component';
import {LanguageComponent} from './global/language/language.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
    declarations: [
        AppComponent,
        DefaultComponent,
        AfterloginComponent,
        HeaderComponent,
        FooterComponent,
        PagenotfoundComponent,
        HederafterloginComponent,
        FooterafterloginComponent,
        AccessdenyComponent,
        CmspageComponent,
        CmspageComponent,
        LoaderComponent,
        LevelStepsComponent,
        LevelStepsHeaderComponent,
        SidebarComponent,
        LanguageComponent,
        ProfileviewComponent
    ],
    imports: [
        CommonModule,
        GlobalModule,
        BrowserAnimationsModule,
        BrowserModule,
        ShowHidePasswordModule,
        AppRoutingModule,
        HttpClientModule,
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
        SlickCarouselModule,
        BsDatepickerModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ],

    providers: [
        FormsModule,
        Title,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        },
        LoaderService,
        {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}

    ],
    exports: [
        SidebarComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
