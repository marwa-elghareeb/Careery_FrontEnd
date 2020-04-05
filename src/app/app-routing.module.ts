/*****************************************************
 # Company Name          :
 # Author                :
 # Created Date          : 10-01-2019
 # Module                : AppRoutingModule
 # Object name           : AppRoutingModule
 # Functionality         : all route of the application
 # Purpose               :
 *******************************************************/
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DefaultComponent} from './layout/default/default.component';
import {AfterloginComponent} from './layout/afterlogin/afterlogin.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {AccessdenyComponent} from './accessdeny/accessdeny.component';
import {CmspageComponent} from './home/cmspage/cmspage.component';
import {ResetpasswordComponent} from './Auth/resetpassword/resetpassword.component';
import {UserlevelComponent} from './home/userlevel/userlevel.component';
import {SetupprofileComponent} from './home/setupprofile/setupprofile.component';
import {PreviewcvComponent} from './profile/previewcv/previewcv.component';
import {LevelStepsComponent} from './levels/level-steps/level-steps.component';

const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: '', loadChildren: () => import('./Auth/auth.module').then(m => m.AuthModule)
            },

            {
                path: 'levelsteps',
                component: LevelStepsComponent
            },

        ]
    },
    {
        path: 'connections',
        loadChildren: () => import('./Connections/connections.module').then(m => m.ConnectionsModule)
    },
    {
        path: 'setting',
        loadChildren: () => import('./Setting/setting.module').then(m => m.SettingModule)
    },

    {
        path: '',
        component: AfterloginComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./cvbuilder/cvbuilder.module').then(m => m.CvbuilderModule)
            },
            {path: 'page-not-found', component: PagenotfoundComponent},
            {path: 'access-deny', component: AccessdenyComponent},

            {
                path: 'level',
                component: UserlevelComponent
            },
            {
                path: 'setup-profile',
                component: SetupprofileComponent
            },
            {
                path: 'reset-password/:token',
                component: ResetpasswordComponent
            },
            {
                path: 'page/:slug',
                component: CmspageComponent
            },
        ]
    },
    {
        path: 'preview-cv',
        component: PreviewcvComponent
    },
    {
        path: '',
        component: AfterloginComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
            }
        ]
    },

    {path: '**', redirectTo: 'page-not-found'},
    {path: 'accessdeny', redirectTo: 'access-deny'},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
