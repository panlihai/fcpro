import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routers } from './index.route';
import { SysdicService, SysmessageService, MessageService } from 'fccore';
import { MainComponent } from './components/main/main.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ErrorComponent } from './components/error/error.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { MainService } from './services/main.service';
import { SysdatasourceService } from './services/sysdatasource.service';
import { SysdatasourceComponent } from './components/core/sysdatasource.component';
import { SysappComponent } from './components/core/sysapp.component';
import { SysdicComponent } from './components/core/sysdic.component';
import { SyscomponentComponent } from './components/core/syscomponent.component';
import { SysbackcodeComponent } from './components/core/sysbackcode.component';
import { SysmessageComponent } from './components/core/sysmessage.component';
import { SysparamComponent } from './components/core/sysparam.component';
import { SysroleauthComponent } from './components/core/sysroleauth.component';
import { SysproductComponent } from './components/core/sysproduct.component';
import { SysappService } from './services/sysapp.service';
import { SysproductService } from './services/sysproduct.service';
import { SysroleuserService } from './services/sysroleauth.service';
import { SysbackcodeService } from './services/sysbackcode.service';
import { SyscomponentService } from './services/syscomponent.service';
import { SysparamService } from './services/sysparam.service';
import { SysroleService } from './services/sysrole.service';
import { SysroleComponent } from './components/core/sysrole.component';
import { HomeComponent } from './components/home/home.component';
import { SysappdetailComponent } from './components/core/sysappdetail.component';
import { FclistModule, FctlbModule, FclayoutModule, FcbasicModule, 
  FcadModule, FcmodalModule, FcsearchModule, FctabModule, FcchartModule } from 'fccomponent';
import { SysappeditComponent } from './components/core/sysappedit.component';
import { SysroleauthService } from './services/sysroleuser.service';
import { LayoutService } from './services/layout.service';
import { SysmessagebackComponent } from './components/core/sysmessageback.component';
import { SysmessagedetailComponent } from './components/core/sysmessagedetail.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(Routers),
    FclistModule,
    FctlbModule,
    FclayoutModule,
    FcbasicModule,
    FctlbModule,
    FcadModule,
    FcmodalModule,
    FcsearchModule,
    FctabModule,
    FcchartModule
  ],
  exports: [

  ],
  declarations: [
    MainComponent,
    NotfoundComponent,
    ErrorComponent,
    LockscreenComponent,
    ForgotComponent,
    SysdatasourceComponent,
    SysappComponent,
    SysappdetailComponent,
    SysappeditComponent,
    SysdicComponent,
    SysproductComponent,
    SysroleauthComponent,
    SysroleComponent,
    SysparamComponent,
    SysmessageComponent,
    SysbackcodeComponent,
    SyscomponentComponent,
    SysmessagebackComponent,
    SysmessagedetailComponent,
    HomeComponent
  ],
  providers: [
    LayoutService,
    MainService,
    SysdatasourceService,
    SysappService,
    SysproductService,
    SysroleauthService,
    SysroleService,
    SysparamService,
    SysmessageService,
    SysbackcodeService,
    SyscomponentService,
    SysroleuserService
  ]
})
export class SystemModule { 
 
}
