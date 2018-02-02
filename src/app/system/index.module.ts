import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routers } from './index.route';
import {
  FcnavModule,
    FcbasicModule,
    FcadModule,
    FctabModule,
    FctlbModule,
    FcsearchModule,
    FcalertModule,
    FclayoutModule,
    FclistModule,
    FcmodalModule
} from 'fccomponent';
import { FccoreModule } from 'fccore';
import { MainComponent } from './components/main/main.component';
@NgModule({
  imports: [
    RouterModule.forChild(Routers),
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
    FcmodalModule
  ],
  exports: [

  ],
  declarations: [
    MainComponent
  ],
  providers: [
  ]
})
export class SystemModule { }
