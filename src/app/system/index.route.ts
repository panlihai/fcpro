import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ErrorComponent } from './components/error/error.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
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
import { SysappeditComponent } from './components/core/sysappedit.component';
import { SysmessagedetailComponent } from './components/core/sysmessagedetail.component';
import { SysversionComponent } from './components/core/sysversion.component';
import { SysannouncementComponent } from './components/core/sysannouncement.component';
import { SyscompanyComponent } from './components/core/syscompany.component';
import { SysprofileComponent } from './components/core/sysprofile.component';
import { SysquotalistComponent } from './components/core/sysquotalist.component';
import { SysquotaEditComponent } from './components/core/sysquotaedit.component';
import { SyslogComponent } from './components/core/syslog.component';
import { SysassignmentComponent } from './components/core/sysassignment.component';
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
}, {
    path: 'syscompanyList',//公司
    component: SyscompanyComponent,
    data: { keep: false }
}, {
    path: 'sysquotaList',//指标列表
    component: SysquotalistComponent,
    data: { keep: false }
}, {
    path: 'sysquotaEdit',//指标编辑
    component: SysquotaEditComponent,
    data: { keep: false }
}, {
    path: 'sysprofileList',//个人信息维护
    component: SysprofileComponent,
    data: { keep: false }
}, {
    path: 'syslogList',//访问日志
    component: SyslogComponent,
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
