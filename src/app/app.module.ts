import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FccoreModule } from 'fccore';
import { AppComponent } from './app.component';
import { AppRouters } from './app.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FclistModule, FcalertModule, FcbandModule, FcmodalModule, FcprogressModule, FctabModule, FctlbModule } from 'fccomponent';
import { LayoutComponent } from './layouts/layout/layout.component';
import { environment } from '../environments/environment';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRouters),
    FccoreModule.forRoot(environment),
    FcadModule,
    FcalertModule,
    FcbasicModule,
    FcbandModule,
    FclayoutModule,
    FcmodalModule,
    FcnavModule,
    FcprogressModule,
    FclistModule,
    FctabModule,  
    FcnavModule,
    FctlbModule
  ],
  exports: [
    AppComponent,
    LayoutComponent,
    RouterModule
  ],
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
