import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ErrorComponent } from './components/error/error.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
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
import { SysappeditComponent } from './components/core/sysappedit.component';
import { SysmessagedetailComponent } from './components/core/sysmessagedetail.component';
import { SysversionComponent } from './components/core/sysversion.component';
import { SysannouncementComponent } from './components/core/sysannouncement.component';
import { SysquotaEditComponent } from './components/core/sysquotaedit.component';
import { SysassignmentComponent } from './components/core/sysassignment.component';
import { SysbizcoderuleComponent } from './components/core/sysbizcoderule.component';
import { SyscompanydimComponent } from './components/core/syscompanydim.component';
import { SysbizcoderuleaddComponent } from './components/core/sysbizcoderuleadd.component';
import { SysbizcoderuleeditComponent } from './components/core/sysbizcoderuleedit.component';
import { SysdepartmentdimComponent } from './components/core/sysdepartmentdim.component';
export const Routers: Routes = [{
    path: 'home',
    component: HomeComponent,
    data: { keep: false }
}, {
    path: 'error',//错误
    component: ErrorComponent,
    data: { keep: false }
}, {
    path: 'forgot',//忘记密码
    component: ForgotComponent,
    data: { keep: false }
}, {
    path: 'lockscreen',//锁屏
    component: LockscreenComponent,
    data: { keep: false }
}, {
    path: 'main',//main
    component: MainComponent,
    data: { keep: false }
}, {
    path: 'notfound',//找不到
    component: NotfoundComponent,
    data: { keep: false }
}, {
    path: 'sysdatasourceList',//数据源
    component: SysdatasourceComponent,
    data: { keep: false }
}, {
    path: 'sysappList',//元数据
    component: SysappComponent,
    data: { keep: false }
}, {
    path: 'sysappEdit',//元数据编辑
    component: SysappeditComponent,
    data: { keep: false }
}, {
    path: 'sysappDetail',//元数据详情
    component: SysappdetailComponent,
    data: { keep: false }
}, {
    path: 'sysdicList',//数据字典
    component: SysdicComponent,
    data: { keep: false }
}, {
    path: 'sysproductList',//软件产品
    component: SysproductComponent,
    data: { keep: false }
}, {
    path: 'sysroleauthList',//系统参数
    component: SysroleauthComponent,
    data: { keep: false }
}, {
    path: 'sysroleList',//系统参数
    component: SysroleComponent,
    data: { keep: false }
}, {
    path: 'sysmessageList',//消息列表
    component: SysmessageComponent,
    data: { keep: false }
}, {
    path: 'sysmessageDetail',//消息查看
    component: SysmessagedetailComponent,
    data: { keep: false }
}, {
    path: 'sysversionDetail',//版本查看
    component: SysversionComponent,
    data: { keep: false }
}, {
    path: 'sysannouncementDetail',//消息公告
    component: SysannouncementComponent,
    data: { keep: false }
}, {
    path: 'sysbizcoderuleList',//编码规则
    component: SysbizcoderuleComponent,
    data: { keep: false }
}
, {
    path: 'sysbizcoderuleEdit',//编码工具栏修改模态框
    component: SysbizcoderuleeditComponent,
    data: { keep: false }
}
, {
    path: 'sysbizcoderuleAdd',//编码工具栏新增模态框
    component: SysbizcoderuleaddComponent,
    data: { keep: false }
}
, {
    path: 'sysdepartmentdimList',//部门维度
    component: SysdepartmentdimComponent,
    data: { keep: false }
}
, {
    path: 'syscompanydimList',//维度规则
    component: SyscompanydimComponent,
    data: { keep: false }
}, {
    path: 'sysassignmentDetail',//消息公告
    component: SysassignmentComponent,
    data: { keep: false }
}, {
    path: 'sysbackcodeList',//全局返回码
    component: SysbackcodeComponent,
    data: { keep: false }
}, {
    path: 'syscomponentList',//平台组件
    component: SyscomponentComponent,
    data: { keep: false }
},{
  path: 'sysquotaEdit',//指标编辑
  component: SysquotaEditComponent,
  data: { keep: false }
}, {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
}];
