import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './system/signin/signin.component';
import { SignupComponent } from './system/signup/signup.component';
import { UserService } from 'fccore';
export const AppRouters: Routes = [
    {
        path: 'layout',
        component: LayoutComponent,
        canActivate:[UserService],
        children: [
            {
                path: '',//首页
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent,
            }, {
                path: '',//高级组件
                loadChildren: './samples/index.module#SamplesModule'
            }
        ]
    }, {
        path: 'signin',//登录
        component: SigninComponent
    }, {
        path: 'signup',//注册
        component: SignupComponent
    }, {
        path: '',//登录
        redirectTo:'signin',
        pathMatch:'full'
    }
];