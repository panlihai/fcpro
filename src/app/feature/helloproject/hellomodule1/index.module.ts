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
import { SpreadComponent } from './components/spread.component';
import { Hellofc1Component } from './components/hellofc1.component';
import { Hellofc2Component } from './components/hellofc2.component';
import { Hellofc3Component } from './components/hellofc3.component';
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
    Hellofc1Component,
    Hellofc2Component,
    Hellofc3Component,
    SpreadComponent
  ],
  providers: [
    
  ]
})
export class Hellomodule1Module { }
