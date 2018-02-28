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
import { SpreadSheetsModule } from '../../../../assets/plugin/spread/gc.spread.sheets.angular.11.0.0';
import { BasicspreadComponent } from './components/basicspread.component';
@NgModule({
  imports: [
    RouterModule.forChild(Routers),
    FccoreModule,
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,
    SpreadSheetsModule
  ],
  exports: [

  ],
  declarations: [
    BasicspreadComponent,
  ],
  providers: [
    
  ]
})
export class SpreadModule { }
