import { Routes } from '@angular/router';
import { SysappComponent } from './sysapp/sysapp.component';
import { SysappdicComponent } from './sysappdic/sysappdic.component';
import { SysauthComponent } from './sysauth/sysauth.component';
import { SysdicComponent } from './sysdic/sysdic.component';
import { SysforgetComponent } from './sysforget/sysforget.component';
import { SysmessageComponent } from './sysmessage/sysmessage.component';
import { SysproductComponent } from './sysproduct/sysproduct.component';
import { SysroleComponent } from './sysrole/sysrole.component';
import { SyssigninComponent } from './syssignin/syssignin.component';
import { SyssignupComponent } from './syssignup/syssignup.component';
import { SysuserComponent } from './sysuser/sysuser.component';
export const sysRouters: Routes = [
    {
        path: 'fcsysappList/:menuId',//元数据
        component: SysappComponent
    }, {
        path: 'fcsysappdicList/:menuId',//参照字典
        component: SysappdicComponent
    }, {
        path: 'fcsysauthList/:menuId',//授权
        component: SysauthComponent
    }, {
        path: 'fcsysdicList/:menuId',//数据字典
        component: SysdicComponent
    }, {
        path: 'fcsysforgetList/:menuId',//忘记密码
        component: SysforgetComponent
    }, {
        path: 'fcsysmessageList/:menuId',//消息组件
        component: SysmessageComponent
    }, {
        path: 'fcsysproductList/:menuId',//软件产品
        component: SysproductComponent
    }, {
        path: 'fcsysroleList/:menuId',//角色
        component: SysroleComponent
    }, {
        path: 'fcsyssigninList/:menuId',//登录
        component: SyssigninComponent
    }, {
        path: 'fcsyssignupList/:menuId',//注册
        component: SyssignupComponent
    }, {
        path: 'fcsysuserList/:menuId',//用户
        component: SysuserComponent
    }
];
