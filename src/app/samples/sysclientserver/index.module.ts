import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { tlbRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FclistModule, FctlbModule } from 'fccomponent';
import { AppserviceclsComponent } from './appservicecls/appservicecls.component';
import { CacheserviceclsComponent } from './cacheservicecls/cacheservicecls.component';
import { CommonserviceclsComponent } from './commonservicecls/commonservicecls.component';
import { DaoserviceclsComponent } from './daoservicecls/daoservicecls.component';
import { LayoutserviceclsComponent } from './layoutservicecls/layoutservicecls.component';
import { LogserviceclsComponent } from './logservicecls/logservicecls.component';
import { MenuserviceclsComponent } from './menuservicecls/menuservicecls.component';
import { MessageserviceclsComponent } from './messageservicecls/messageservicecls.component';
import { ProvidersclsComponent } from './providerscls/providerscls.component';
import { UserserviceComponent } from './userservice/userservice.component';
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
    AppserviceclsComponent,
    CacheserviceclsComponent,
    CommonserviceclsComponent,
    DaoserviceclsComponent,
    LayoutserviceclsComponent,
    LogserviceclsComponent,
    MenuserviceclsComponent,
    MessageserviceclsComponent,
    ProvidersclsComponent,
    UserserviceComponent
  ],
  providers: [

  ]
})
export class SysclientserverModule { }
