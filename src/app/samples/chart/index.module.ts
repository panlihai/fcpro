import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { chartRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FclistModule } from 'fccomponent';
import { FccoreModule } from 'fccore';
import { ChartbarComponent } from './chartbar/chartbar.component';
import { ChartlineComponent } from './chartline/chartline.component';
import { ChartpieComponent } from './chartpie/chartpie.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(chartRouters),
    FccoreModule,
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule, 
    FclistModule
  ],
  exports: [

  ],
  declarations: [
    ChartbarComponent,
    ChartlineComponent,
    ChartpieComponent,
  ],
  providers: [

  ]
})
export class ChartModule { }
