import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { sysRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FclistModule } from 'fccomponent';
import { SysappComponent } from './sysapp/sysapp.component';
import { SysappdicComponent } from './sysappdic/sysappdic.component';
import { SysdicComponent } from './sysdic/sysdic.component';
import { SysforgetComponent } from './sysforget/sysforget.component';
import { SysmessageComponent } from './sysmessage/sysmessage.component';
import { SysproductComponent } from './sysproduct/sysproduct.component';
import { SyssigninComponent } from './syssignin/syssignin.component';
import { SyssignupComponent } from './syssignup/syssignup.component';
import { SysuserComponent } from './sysuser/sysuser.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(sysRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,
    FclistModule
  ],
  exports: [

  ],
  declarations: [
    SysappComponent,
    SysappdicComponent,
    SysdicComponent,
    SysforgetComponent,
    SysmessageComponent,
    SysproductComponent,
    SyssigninComponent,
    SyssignupComponent,
    SysuserComponent
  ],
  providers: [

  ]
})
export class SysModule { }
