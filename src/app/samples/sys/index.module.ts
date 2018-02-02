import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { sysRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FclistModule } from 'fccomponent';
import { FccoreModule } from 'fccore';
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
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(sysRouters),
    FccoreModule,
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
    SysauthComponent,
    SysdicComponent,
    SysforgetComponent,
    SysmessageComponent,
    SysproductComponent,
    SysroleComponent,
    SyssigninComponent,
    SyssignupComponent,
    SysuserComponent
  ],
  providers: [

  ]
})
export class SysModule { }
