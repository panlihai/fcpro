import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routers } from './index.route';
import {
  FcbasicModule,
  FclayoutModule,
  FcadModule,
  FcnavModule
} from 'fccomponent';
import { FccoreModule } from 'fccore';
import { HellofcComponent } from './index';
import { HellofcService } from './services/hellofc.service';
@NgModule({
  imports: [
    RouterModule.forChild(Routers),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,
    FccoreModule
  ],
  exports: [

  ],
  declarations: [
    HellofcComponent
  ],
  providers: [
    HellofcService
  ]
})
export class AdModule { }
