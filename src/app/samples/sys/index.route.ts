import { Routes } from '@angular/router';
import { SysappComponent } from './sysapp/sysapp.component';
import { SysappdicComponent } from './sysappdic/sysappdic.component';
import { SysdicComponent } from './sysdic/sysdic.component';
import { SysforgetComponent } from './sysforget/sysforget.component';
import { SysmessageComponent } from './sysmessage/sysmessage.component';
import { SysproductComponent } from './sysproduct/sysproduct.component';
import { SyssigninComponent } from './syssignin/syssignin.component';
import { SyssignupComponent } from './syssignup/syssignup.component';
import { SysuserComponent } from './sysuser/sysuser.component';
export const sysRouters: Routes = [
    {
        path:'system/fcsysappList',//元数据
        component: SysappComponent
    }, {
        path:'system/fcsysappdicList',//参照字典
        component: SysappdicComponent
    }, {
        path:'system/fcsysdicList',//数据字典
        component: SysdicComponent
    }, {
        path:'system/fcsysforgetList',//忘记密码
        component: SysforgetComponent
    }, {
        path:'system/fcsysmessageList',//消息组件
        component: SysmessageComponent
    }, {
        path:'system/fcsysproductList',//软件产品
        component: SysproductComponent
    }, {
        path:'system/fcsyssigninList',//登录
        component: SyssigninComponent
    }, {
        path:'system/fcsyssignupList',//注册
        component: SyssignupComponent
    }, {
        path:'system/fcsysuserList',//用户
        component: SysuserComponent
    }
];
