import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routers } from './index.route';
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
import { SysbackcodeService } from './services/sysbackcode.service';
import { SyscomponentService } from './services/syscomponent.service';
import { SysparamService } from './services/sysparam.service';
import { SysroleService } from './services/sysrole.service';
import { SysroleComponent } from './components/core/sysrole.component';
import { HomeComponent } from './components/home/home.component';
import { SysappdetailComponent } from './components/core/sysappdetail.component';
import {
  FclistModule, FctlbModule, FclayoutModule, FcbasicModule,
  FcadModule, FcmodalModule, FcsearchModule, FctabModule, FcchartModule
} from 'fccomponent';
import { SysappeditComponent } from './components/core/sysappedit.component';
import { LayoutService } from './services/layout.service';
import { SysmessagedetailComponent } from './components/core/sysmessagedetail.component';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';
import { SysmessageService } from './services/sysmessage.service';
import { SysversionService } from './services/sysversion.service';
import { SysversionComponent } from './components/core/sysversion.component';
import { SyshomeService } from './services/syshome.service';
import { SysannouncementService } from './services/sysannouncement.service';
import { SysannouncementComponent } from './components/core/sysannouncement.component';
import { SyscompanyService } from './services/syscompany.service';
import { SyscompanyComponent } from './components/core/syscompany.component';
import { SyscompanyeditComponent } from './components/core/syscompanyedit.component';
import { SysnavlinkService } from './services/sysnavlink.service';
import { SysprofileService } from './services/sysprofile.service';
import { SysprofileComponent } from './components/core/sysprofile.component';
import { BasicpersoneldialogComponent } from './components/core/dialog/basicpersoneldialog.component';
import { SysroleDialogEditComponent } from './components/core/dialog/sysroleeditdialog.component';
import { SysroleauthService } from './services/sysroleauth.service';
import { SysroleuserService } from './services/sysroleuser.service';
import { SysquotaService } from './services/sysquota.service';
import { SysquotaEditComponent } from './components/core/sysquotaedit.component';
import { SysquotalistComponent } from './components/core/sysquotalist.component';
import { SyslogComponent } from './components/core/syslog.component';
import { SyslogService } from './services/syslog.service';
import { SyssessionService } from './services/syssession.service';
import { SysemployService } from './services/sysemploy.service';
import { SysassignmentService } from './services/sysassignment.service';
import { SysassignmentComponent } from './components/core/sysassignment.component';
@NgModule({
  entryComponents: [
    BasicpersoneldialogComponent,
    SysroleDialogEditComponent,
    SysquotalistComponent,
    SysquotaEditComponent,
    SysroleDialogEditComponent,
    SysquotalistComponent,
    SysquotaEditComponent
  ],
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
    FcchartModule,
    SpreadSheetsModule
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
    SysmessagedetailComponent,
    SysbackcodeComponent,
    SyscomponentComponent,
    HomeComponent,
    SysversionComponent,
    SysroleDialogEditComponent,
    SysannouncementComponent,
    SyscompanyComponent,
    SyscompanyeditComponent,
    SysprofileComponent,
    BasicpersoneldialogComponent,
    SysquotalistComponent,
    SysquotaEditComponent,
    SyslogComponent,
    SysassignmentComponent
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
    SysroleuserService,
    SyshomeService,
    SysversionService,
    SysannouncementService,
    SyscompanyService,
    SysnavlinkService,
    SysprofileService,
    SysquotaService,
    SyslogService,
    SyssessionService,
    SysemployService,
    SysquotaService,
    SysassignmentService
  ]
})
export class SystemModule {

}
