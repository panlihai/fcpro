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
                path: '',//例子组件
                loadChildren: './samples/index.module#SamplesModule'
            }, {
                path: '',//平台组件
                loadChildren: './system/index.module#SystemModule'
            }, {
                path: '',//业务组件-模块1
                loadChildren: './feature/helloproject/hellomodule1/index.module#Hellomodule1Module'
            }, {
                path: '',//业务组件-模块2
                loadChildren: './feature/helloproject/hellomodule2/index.module#Hellomodule2Module'
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
        redirectTo: 'signin',
        pathMatch: 'full'
    }
];