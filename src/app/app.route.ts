import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
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
                path: 'home',
                component: HomeComponent,
            }, {
                path: '',//高级组件
                loadChildren: './samples/index.module#SamplesModule'
            }
            , {
                path: 'system',//系统
                loadChildren: './system/index.module#SystemModule'
            } , {
                path: 'hello',//业务组件
                loadChildren: './feature/helloproject/index.module#HelloModule'
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