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
import { Hellofc4Component } from './components/hellofc4.component';
import { Hellofc5Component } from './components/hellofc5.component';
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
    Hellofc4Component,
    Hellofc5Component
  ],
  providers: [
    
  ]
})
export class Hellomodule2Module { }
