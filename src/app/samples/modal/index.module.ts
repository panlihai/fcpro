import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { modalRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule,
   FclistModule, FcmodalModule } from 'fccomponent';
import { ModalcardComponent } from './modalcard/modalcard.component';
import { ModalconfirmComponent } from './modalconfirm/modalconfirm.component';
import { ModaldangerComponent } from './modaldanger/modaldanger.component';
import { ModalinfoComponent } from './modalinfo/modalinfo.component';
import { ModallistComponent } from './modallist/modallist.component';
import { ModalsuccessComponent } from './modalsuccess/modalsuccess.component';
import { ModaltreelistComponent } from './modaltreelist/modaltreelist.component';
import { ModalwarnComponent } from './modalwarn/modalwarn.component';
import {
  AppService, DaoService, CacheService, CommonService, MenuService, MessageService,
  SysappbuttonsService, SysappfieldsService, SysappfldgroupService, SysapplinksService, SysdicappdetailService, SysdicappService,
  SysdicdetailService, SysdicService, SysmessageService, SysinterfaceparamService,
  SysinterfaceService, SysmenuService, SysstyleService
} from 'fccore';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(modalRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,
    FclistModule,
    FcmodalModule
  ],
  exports: [

  ],
  declarations: [
    ModalcardComponent,
    ModalconfirmComponent,
    ModaldangerComponent,
    ModalinfoComponent,
    ModallistComponent,
    ModalsuccessComponent,
    ModaltreelistComponent,
    ModalwarnComponent,
  ],
  providers: [
    AppService, DaoService, CacheService, CommonService, MenuService, MessageService,
    SysappbuttonsService, SysappfieldsService, SysappfldgroupService, SysapplinksService, SysdicappdetailService, SysdicappService,
    SysdicdetailService, SysdicService, SysmessageService, SysinterfaceparamService, SysinterfaceService, SysmenuService, SysstyleService
  ]
})
export class ModalModule { }
