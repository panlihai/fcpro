import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { tlbRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FclistModule, FctlbModule } from 'fccomponent';
import { BasedaoclsComponent } from './basedaocls/basedaocls.component';
import { BaseserviceclsComponent } from './baseservicecls/baseservicecls.component';
import { CacheutilclsComponent } from './cacheutilcls/cacheutilcls.component';
import { DateutilsComponent } from './dateutils/dateutils.component';
import { DynabeanclsComponent } from './dynabeancls/dynabeancls.component';
import { ParentserviceclsComponent } from './parentservicecls/parentservicecls.component';
import { RequestmoadlclsComponent } from './requestmoadlcls/requestmoadlcls.component';
import { ResponsemodalclsComponent } from './responsemodalcls/responsemodalcls.component';
import { SysserverclsComponent } from './sysservercls/sysservercls.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(tlbRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,
    FclistModule,
    FctlbModule
  ],
  exports: [

  ],
  declarations: [
    BasedaoclsComponent,
    BaseserviceclsComponent,
    CacheutilclsComponent,
    DateutilsComponent,
    DynabeanclsComponent,
    ParentserviceclsComponent,
    RequestmoadlclsComponent,
    ResponsemodalclsComponent,
    SysserverclsComponent
  ],
  providers: [

  ]
})
export class SysserverclsModule { }
