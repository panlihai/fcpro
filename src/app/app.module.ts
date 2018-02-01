import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  FccoreModule,
  AppService,
  DaoService,
  CacheService,
  CommonService,
  MenuService,
  MessageService,
  SysappbuttonsService,
  SysappfieldsService,
  SysappfldgroupService,
  SysapplinksService,
  SysdicappdetailService,
  SysdicappService,
  SysdicdetailService,
  SysdicService,
  SysmessageService,
  SysinterfaceparamService,
  SysinterfaceService,
  SysmenuService,
  SysstyleService
} from 'fccore';
import {
  FcnavModule, 
  FcbasicModule, 
  FcadModule, 
  FcbandModule, 
  FcmodalModule,
  FctabModule, 
  FctlbModule, 
  FcsearchModule, 
  FcalertModule, 
  FclayoutModule, 
  FclistModule
} from 'fccomponent';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { AppRouters } from './app.route';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRouters),
    FccoreModule.forRoot(environment),
    FcnavModule,
    FcbasicModule,
    FcadModule,
    FcbandModule,
    FctabModule,
    FctlbModule,
    FcsearchModule,
    FcalertModule,
    FclayoutModule,
    FclistModule,
    FcmodalModule
  ],
  providers: [
    AppService,
    DaoService,
    CacheService,
    CommonService,
    MenuService,
    MessageService,
    SysappbuttonsService,
    SysappfieldsService,
    SysappfldgroupService,
    SysapplinksService,
    SysdicappdetailService,
    SysdicappService,
    SysdicdetailService,
    SysdicService,
    SysmessageService,
    SysinterfaceparamService,
    SysinterfaceService,
    SysmenuService,
    SysstyleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
