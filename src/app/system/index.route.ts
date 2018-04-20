import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ErrorComponent } from './components/error/error.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { SysdatasourceComponent } from './components/core/sysdatasource.component';
import { SysappComponent } from './components/core/sysapp.component';
import { SysdicComponent } from './components/core/sysdic.component';
import { SysproductComponent } from './components/core/sysproduct.component';
import { SysroleauthComponent } from './components/core/sysroleauth.component';
import { SysmessageComponent } from './components/core/sysmessage.component';
import { SysbackcodeComponent } from './components/core/sysbackcode.component';
import { SyscomponentComponent } from './components/core/syscomponent.component';
import { SysroleComponent } from './components/core/sysrole.component';
import { HomeComponent } from './components/home/home.component';
import { SysappdetailComponent } from './components/core/sysappdetail.component';
import { SysmessagebackComponent } from './components/core/sysmessageback.component';
export const Routers: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo:'home',
        pathMatch:'full'
        
    },
    {
        path: 'error',//错误
        component: ErrorComponent
    },
    {
        path: 'forgot',//忘记密码
        component: ForgotComponent,
    }, {
        path: 'lockscreen',//锁屏
        component: LockscreenComponent
    }, {
        path: 'main',//main
        component: MainComponent
    }, {
        path: 'notfound',//找不到
        component: NotfoundComponent
    },
    {
        path: 'sysdatasourceList',//数据源
        component: SysdatasourceComponent
    },
    {
        path: 'sysappList',//元数据
        component: SysappComponent
    },
    {
        path: 'sysappDetail',//元数据详情
        component: SysappdetailComponent
    },
    {
        path: 'sysdicList',//数据字典
        component: SysdicComponent
    },
    {
        path: 'sysproductList',//软件产品
        component: SysproductComponent
    },
    {
        path: 'sysroleauthList',//系统参数
        component: SysroleauthComponent
    },
    
    {
        path: 'sysroleList',//系统参数
        component: SysroleComponent
    },
    {
        path: 'sysmessageList',//消息列表
        component: SysmessageComponent
    },

    {
        path: 'sysbackcodeList',//全局返回码
        component: SysbackcodeComponent
    },
    {
        path: 'syscomponentList',//平台组件
        component: SyscomponentComponent
    },
    {
        path: 'sysmessagebackList',//消息反馈详情
        component: SysmessagebackComponent
    },
    {
        path: '**',
        redirectTo: 'main',
        pathMatch: 'full'
    }
];
