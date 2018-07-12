import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  FcnavModule,
  FcbasicModule,
  FcadModule,
  FcmodalModule,
  FctabModule,
  FctlbModule,
  FcsearchModule,
  FcalertModule,
  FclayoutModule,
  FclistModule,
  FcchartModule,
  FcprogressModule
} from 'fccomponent';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { AppRouters } from './app.route';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './system/components/signin/signin.component';
import { SignupComponent } from './system/components/signup/signup.component';
import { LayoutService } from './system/services/layout.service';
import { FcRouteReuseStrategy } from './system/services/routereusestrategy.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NzMessageService, NgZorroAntdModule } from 'ng-zorro-antd';
import { FccoreModule, MessageService } from 'fccore';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ResetpwddialogComponent } from './system/components/core/dialog/resetpwddialog.component';
import { SysuserService } from './system/services/sysuser.service';
@NgModule({
  entryComponents: [
    ResetpwddialogComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(AppRouters),
    FccoreModule,
    FcnavModule,
    FcbasicModule,
    FcadModule,
    FctabModule,
    FctlbModule,
    FcsearchModule,
    FcalertModule,
    FclayoutModule,
    FclistModule,
    FcmodalModule,
    FcchartModule,
    FcprogressModule,
    FcprogressModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    SigninComponent,
    SignupComponent,
    ResetpwddialogComponent
  ],
  providers: [
    LayoutService,
    NzMessageService,
    SysuserService,
    { provide: RouteReuseStrategy, useClass: FcRouteReuseStrategy },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public service: NzMessageService) {
    MessageService.sender = service;
  }
}
