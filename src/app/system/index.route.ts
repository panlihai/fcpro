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
import { SysmessagedetailComponent } from './components/core/sysmessagedetail.component';
import { SysversionComponent } from './components/core/sysversion.component';
import { SysannouncementComponent } from './components/core/sysannouncement.component';
import { SyscompanyComponent } from './components/core/syscompany.component';
import { SysprofileComponent } from './components/core/sysprofile.component';
import { SysquotalistComponent } from './components/core/sysquotalist.component';
import { SysquotaEditComponent } from './components/core/sysquotaedit.component';
import { SyslogComponent } from './components/core/syslog.component';
import { SysassignmentComponent } from './components/core/sysassignment.component';
import { SysusereditComponent } from './components/core/sysuseredit.component';
import { SysemployeeComponent } from './components/core/sysemployee.component';
import { SysemployeeeditComponent } from './components/core/sysemployeeedit.component';
import { SysuserComponent } from './components/core/sysuser.component';
import { SysbizcoderuleComponent } from './components/core/sysbizcoderule.component';
import { SyscompanydimComponent } from './components/core/syscompanydim.component';
import { SysbizcoderuleeditComponent } from './components/core/sysbizcoderuleedit.component';
import { SysdepartmentdimComponent } from './components/core/sysdepartmentdim.component';
import { SyscompanymodifyComponent } from './components/core/syscompanymodify.component';
import { SyscompanyaddComponent } from './components/core/syscompanyadd.component';
import { SysparamComponent } from './components/core/sysparam.component';
import { SyscompanychangeauditComponent } from './components/core/syscompanychangeaudit.component';
import { SysdepartmentlistComponent } from './components/core/sysdepartmentlist.component';
import { SysdepartmenteditComponent } from './components/core/sysdepartmentedit.component';
import { SysicondialogComponent } from './components/core/dialog/sysicondialog.component';
import { SysproducteditComponent } from './components/core/sysproductedit.component';
import { SyswizardComponent } from './components/core/syswizard.component';
import { SysdatasourceeditComponent } from './components/core/sysdatasourceedit.component';
import { SysappmodifyComponent } from './components/core/sysappmodify.component';
import { SysappeditComponent } from './components/core/sysappedit.component';
import { SysmenuComponent } from './components/core/sysmenu.component';
import { SysmenueditComponent } from './components/core/sysmenuedit.component';
import { SysserviceeditComponent } from './components/core/sysserviceedit.component';
import { SysinterfaceeditComponent } from './components/core/sysinterfaceedit.component';
import { SysvieweditComponent } from './components/core/sysviewedit.component';
import { SysviewelementeditComponent } from './components/core/sysviewelementedit.component';
import { SysserviceComponent } from './components/core/sysservice.component';

export const Routers: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: { keep: false }
    }, {
        path: '',//
        loadChildren: '../feature/fcbudget/index.module#BudgetModule',
        data: { module: 'fcbudget' }
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
        path: 'sysdatasourceEdit',//数据源-新增
        component: SysdatasourceeditComponent,
        data: { keep: false }
    }, {
        path: 'sysappList',//元数据
        component: SysappComponent,
        data: { keep: false }
    }, {
        path: 'sysappModify',//元数据修改
        component: SysappmodifyComponent,
        data: { keep: false }
    }, {
        path: 'sysappEdit',//元数据编辑
        component: SysappeditComponent,
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
        path: 'sysproductEdit',//软件产品
        component: SysproducteditComponent,
        data: { keep: false }
    }, {
        path: 'sysbizcoderuleList',//编码规则
        component: SysbizcoderuleComponent,
        data: { keep: false }
    }, {
        path: 'sysbizcoderuleEdit',//编码工具栏修改模态框
        component: SysbizcoderuleeditComponent,
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
        path: 'sysiconList',//编码规则
        component: SysicondialogComponent,
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
        path: 'sysdepartmentdimList',//部门维度
        component: SysdepartmentdimComponent,
        data: { keep: false }
    }, {
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
    }, {
        path: 'syscompanyList',//单位列表
        component: SyscompanyComponent,
        data: { keep: false }
    }, {
        path: 'sysquotavalue',//指标编辑
        component: SysquotaEditComponent,
        data: { keep: false }
    }, {
        path: 'syscompanyAdd',//单位设立
        component: SyscompanyaddComponent,
    }, {
        path: 'syscompanychangeauditList',//单位变更审批
        component: SyscompanychangeauditComponent,
        data: { keep: false }
    }, {
        path: 'sysquotaList',//指标列表
        component: SysquotalistComponent,
        data: { keep: false }
    }, {
        path: 'syscompanyModify',//单位调整
        component: SyscompanymodifyComponent,
        data: { keep: false }
    }, {
        path: 'sysprofileList',//个人信息维护
        component: SysprofileComponent,
        data: { keep: false }
    }, {
        path: 'syslogList',//访问日志
        component: SyslogComponent,
        data: { keep: false }
    }, {
        path: 'sysparamList',//系统参数
        component: SysparamComponent,
        data: { keep: false }
    }, {
        path: 'sysdepartmentList',//部门管理
        component: SysdepartmentlistComponent,
        data: { keep: false }
    }, {
        path: 'sysdepartmentEdit',//设立部门
        component: SysdepartmenteditComponent,
        data: { keep: false }
    }, {
        path: 'sysserviceEdit',//设立部门
        component: SysserviceeditComponent,
        data: { keep: false },
    }, {
        path: 'sysserviceList',//服务
        component: SysserviceComponent,
        data: { keep: false },
    }, {
        path: 'sysuserList',//用户管理
        component: SysuserComponent,
        data: { keep: false }
    }, {
        path: 'sysuserEdit',//修改用户
        component: SysusereditComponent,
        data: { keep: false }
    }, {
        path: 'sysemployeeList',//员工管理
        component: SysemployeeComponent,
        data: { keep: false }
    }, {
        path: 'sysemployeeEdit',//编辑员工
        component: SysemployeeeditComponent,
        data: { keep: false }
    }, {
        path: 'syswizardList',//开发向导-卡片
        component: SyswizardComponent,
        data: { keep: false }
    }, {
        path: 'sysmenuList',//导航栏列表
        component: SysmenuComponent,
        data: { keep: false }
    }, {
        path: 'sysmenuEdit',//编辑导航栏
        component: SysmenueditComponent,
        data: { keep: false }
    }, {
        path: 'sysinterfaceEdit',//编辑接口
        component: SysinterfaceeditComponent,
        data: { keep: false }
    }, {
        path: 'sysviewEdit',//开发向导-卡片
        component: SysvieweditComponent,
        data: { keep: false }
    }, {
        path: 'sysviewelementEdit',//开发向导-卡片
        component: SysviewelementeditComponent,
        data: { keep: false }
    }, {
        path: '**',
        redirectTo: 'main',
        pathMatch: 'full'
    }];