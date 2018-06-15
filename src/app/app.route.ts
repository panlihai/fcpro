import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { UserService } from 'fccore';
import { SigninComponent } from './system/components/signin/signin.component';
import { SignupComponent } from './system/components/signup/signup.component';
import { MainComponent } from './system/components/main/main.component';
export const AppRouters: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [UserService],
        children: [
             {
                path: 'system',//系统
                loadChildren: './system/index.module#SystemModule'
            } 
        ]
    }, {
        path: 'signin',//登录
        component: SigninComponent
    }, {
        path: 'signup',//注册
        component: SignupComponent
    }
];