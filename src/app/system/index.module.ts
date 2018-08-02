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
import {
  FclistModule, FctlbModule, FclayoutModule, FcbasicModule,
  FcadModule, FcmodalModule, FcsearchModule, FctabModule, FcchartModule
} from 'fccomponent';
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
import { SyscompanyaddComponent } from './components/core/syscompanyadd.component';
import { SysnavlinkService } from './services/sysnavlink.service';
import { SysprofileService } from './services/sysprofile.service';
import { SysprofileComponent } from './components/core/sysprofile.component';
import { BasicpersoneldialogComponent } from './components/core/dialog/basicpersoneldialog.component';
import { SysroleauthService } from './services/sysroleauth.service';
import { SysroleuserService } from './services/sysroleuser.service';
import { SysquotaService } from './services/sysquota.service';
import { SysquotaEditComponent } from './components/core/sysquotaedit.component';
import { SysquotavalueService } from './services/sysquotavalue.service';
import { SysquotalistComponent } from './components/core/sysquotalist.component';
import { SyscontactService } from './services/syscontact.service';
import { SyslogComponent } from './components/core/syslog.component';
import { SyslogService } from './services/syslog.service';
import { SyssessionService } from './services/syssession.service';
import { SysemployService } from './services/sysemploy.service';
import { SysassignmentService } from './services/sysassignment.service';
import { SysassignmentComponent } from './components/core/sysassignment.component';
import { SysemployeeService } from './services/sysemployee.service';
import { SysemployeeComponent } from './components/core/sysemployee.component';
import { SysemployeeeditComponent } from './components/core/sysemployeeedit.component';
import { SysuserComponent } from './components/core/sysuser.component';
import { SysusereditComponent } from './components/core/sysuseredit.component';
import { SysbizcoderuleService } from './services/sysbizcoderule.service';
import { SysbizcoderuleComponent } from './components/core/sysbizcoderule.component';
import { SyscompanydimComponent } from './components/core/syscompanydim.component';
import { SyscompanydimService } from './services/syscompanydim.service';
import { SysbizcoderulemodalComponent } from './components/core/sysbizcoderulemodal.component';
import { SysbizcodedefineService } from './services/sysbizcodedefine.service';
import { SysbizcoderuleeditComponent } from './components/core/sysbizcoderuleedit.component';
import { SysdepartmentdimComponent } from './components/core/sysdepartmentdim.component';
import { SysdepartmentdimService } from './services/sysdepartmentdim.service';
import { UploadavatardialogComponent } from './components/core/dialog/uploadavatardialog.component';
import { companytransferdialogComponent } from './components/core/dialog/companytransferdialog.component';
import { SyscompanymodifyComponent } from './components/core/syscompanymodify.component';
import { SyscompanychangeauditComponent } from './components/core/syscompanychangeaudit.component';
import { SyscompanyrelationService } from './services/syscompanyrelation.service';
import { SystbvorgcurorgService } from './services/systbvorgcurorg.service';
import { SysdepartmentService } from './services/sysdepartment.service';
import { SysdepartmentlistComponent } from './components/core/sysdepartmentlist.component';
import { SysdepartmentrelationService } from './services/sysdepartmentrelation.service';
import { SystbvdeptcurorgService } from './services/systbvdeptcurorg.service';
import { DialogListComponent } from './components/core/dialog/dialogList.component';
import { SysdepartmenteditComponent } from './components/core/sysdepartmentedit.component';
import { SysserviceService } from './services/sysservice.service';
import { SysroleeditdialogComponent } from './components/core/dialog/sysroleeditdialog.component';
import { SysbizcoderuledialogComponent } from './components/core/dialog/sysbizcoderuledialog.component';
import { SysiconService } from './services/sysicon.service';
import { SysicondialogComponent } from './components/core/dialog/sysicondialog.component';
import { SysproducteditComponent } from './components/core/sysproductedit.component';
import { SyswizardComponent } from './components/core/syswizard.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { chooseicondialogComponent } from './components/core/dialog/chooseicondialog.component';
import { SyswizardService } from './services/syswizard.service';
import { ChartsModule } from 'ng2-charts';
import { SysappmodifyComponent } from './components/core/sysappmodify.component';
import { SysdatasourceeditComponent } from './components/core/sysdatasourceedit.component';
import { SysmenueditComponent } from './components/core/sysmenuedit.component';
import { SysmenuComponent } from './components/core/sysmenu.component';
import { SysmenuService } from './services/sysmenu.service';
import { SysappeditComponent } from './components/core/sysappedit.component';
import { SysserviceeditComponent } from './components/core/sysserviceedit.component';
import { SysinterfaceeditComponent } from './components/core/sysinterfaceedit.component';
import { SysinterfaceService } from './services/sysinterface.service';
import { DialogCardListComponent } from './components/core/dialog/dialogcardlist.component';
import { SysvieweditComponent } from './components/core/sysviewedit.component';
import { SysviewelementeditComponent } from './components/core/sysviewelementedit.component';
import { SysviewService } from './services/sysview.service';
import { SysviewelementService } from './services/sysviewelement.service';
import { SysserviceComponent } from './components/core/sysservice.component';
// 拖拽指令
import { fcDragDirective } from '../directive/drag.directive';
import { SysappmodaleventdialogComponent } from './components/core/dialog/sysappmodaleventdialog.component';
import { MenueditdialogComponent } from './components/core/dialog/menueditdialog.component';
import { SysappmodalrelationdialogComponent } from './components/core/dialog/sysappmodalrelationdialog.component';
import { SysappbuttonsService } from './services/sysappbuttons.service';
import { SysapplinksService } from './services/sysapplinks.service';
import { SysservicemodaldialogComponent } from './components/core/dialog/sysservicemodaldialog.component';
import { SysintfreqparamService } from './services/sysintfreqparam.service';
import { SysservicebackdialogComponent } from './components/core/dialog/sysservicebackdialog.component';
import { SysattributeEditdialogComponent } from './components/core/dialog/sysattributeEditdialog.component';
import { SysattributeService } from './services/sysattribute.service';

@NgModule({
  entryComponents: [
    BasicpersoneldialogComponent,
    SysquotalistComponent,
    SysquotaEditComponent,
    DialogListComponent,
    SysquotalistComponent,
    SysquotaEditComponent,
    DialogListComponent,
    UploadavatardialogComponent,
    SyslogComponent,
    SysassignmentComponent,
    companytransferdialogComponent,
    SyscompanymodifyComponent,
    SyscompanychangeauditComponent,
    chooseicondialogComponent,
    SysbizcoderuledialogComponent,
    SysroleeditdialogComponent,
    SysproducteditComponent,
    SysroleeditdialogComponent,
    SysproducteditComponent,
    SysbizcoderuledialogComponent,
    DialogCardListComponent,
    SysappmodaleventdialogComponent,
    MenueditdialogComponent,
    SysappmodalrelationdialogComponent,
    SysservicemodaldialogComponent,
    SysservicebackdialogComponent,
    SysattributeEditdialogComponent
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
    SpreadSheetsModule,
    NgZorroAntdModule,
    ChartsModule
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
    SysappmodifyComponent,
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
    SysannouncementComponent,
    SyscompanyComponent,
    SysprofileComponent,
    BasicpersoneldialogComponent,
    SysquotalistComponent,
    SysquotaEditComponent,
    SysassignmentComponent,
    SysbizcoderuleComponent,
    SyscompanydimComponent,
    SysbizcoderulemodalComponent,
    SysbizcoderuleeditComponent,
    SysdepartmentdimComponent,
    SyscompanyaddComponent,
    SyscompanychangeauditComponent,
    SyscompanymodifyComponent,
    SyslogComponent,
    SysassignmentComponent,
    SysuserComponent,
    SysusereditComponent,
    SysemployeeComponent,
    SysemployeeeditComponent,
    UploadavatardialogComponent,
    companytransferdialogComponent,
    SyswizardComponent,
    SysdatasourceeditComponent,
    chooseicondialogComponent, 
    chooseicondialogComponent,
    SysbizcoderuledialogComponent,
    SysroleeditdialogComponent,
    SysicondialogComponent,
    SysproducteditComponent,
    SyswizardComponent,
    SysdepartmentlistComponent,
    SysdepartmenteditComponent,
    DialogListComponent,
    SysserviceeditComponent,
    SysmenuComponent,
    SysmenueditComponent,
    SysinterfaceeditComponent,
    DialogCardListComponent,
    SysvieweditComponent,
    SysviewelementeditComponent,
    SysserviceComponent,
    fcDragDirective,
    SysappmodaleventdialogComponent,
    MenueditdialogComponent,
    SysappmodalrelationdialogComponent,
    SysservicemodaldialogComponent,
    SysservicebackdialogComponent,
    SysattributeEditdialogComponent
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
    SyscontactService,
    SyscompanyService,
    SysnavlinkService,
    SysprofileService,
    SyslogService,
    SyssessionService,
    SysemployService,
    SysquotavalueService,
    SysassignmentService,
    SysquotaService,
    SysassignmentService,
    SysemployeeService,
    SysmenuService,
    SysbizcoderuleService,
    SyscompanydimService,
    SysbizcodedefineService,
    SysdepartmentdimService,
    SyscompanyrelationService,
    SystbvorgcurorgService,
    SyscompanydimService,
    SysdepartmentService,
    SyswizardService,
    SysdepartmentrelationService,
    SystbvdeptcurorgService,
    SysserviceService,
    SysiconService,
    SysdepartmentService,
    SyswizardService,
    SysdepartmentrelationService,
    SystbvdeptcurorgService,
    SysserviceService,
    SysiconService,
    SysinterfaceService,
    SysviewService,
    SysviewelementService,
    SysappbuttonsService,
    SysapplinksService,
    SysintfreqparamService,
    SysattributeService,
  ]
})
export class SystemModule {

}
