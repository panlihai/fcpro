import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './system/signin/signin.component';
import { SignupComponent } from './system/signup/signup.component';
export const AppRouters: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',//首页
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: '',//高级组件
                loadChildren: './samples/ad/index.module#AdModule'
            },
            {
                path: '',//基础组件
                loadChildren: './samples/basic/index.module#BasicModule'
            },
            {
                path: '',//图表组件
                loadChildren: './samples/chart/index.module#ChartModule'
            },
            {
                path: '',//布局组件
                loadChildren: './samples/layout/index.module#LayoutModule'
            },
            {
                path: '',//列表组件
                loadChildren: './samples/list/index.module#ListModule'
            },
            {
                path: '',//模态框组件
                loadChildren: './samples/modal/index.module#ModalModule'
            },
            {
                path: '',//导航组件
                loadChildren: './samples/nav/index.module#NavModule'
            },
            {
                path: '',//加载组件
                loadChildren: './samples/progress/index.module#ProgressModule'
            },
            {
                path: '',//查询组件
                loadChildren: './samples/search/index.module#SearchModule'
            },
            {
                path: '',//平台组件
                loadChildren: './samples/sys/index.module#SysModule'
            },
            {
                path: '',//选项卡组件
                loadChildren: './samples/tab/index.module#TabModule'
            },
            {
                path: '',//工具栏组件
                loadChildren: './samples/tlb/index.module#TlbModule'
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