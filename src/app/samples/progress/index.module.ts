import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { progressRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, 
  FclistModule, FcprogressModule } from 'fccomponent';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ProgresscircleComponent } from './progresscircle/progresscircle.component';
import { ProgresspercentComponent } from './progresspercent/progresspercent.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(progressRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule, 
    FclistModule,
    FcprogressModule
  ],
  exports: [

  ],
  declarations: [
    ProgressbarComponent,
    ProgresscircleComponent,
    ProgresspercentComponent
  ],
  providers: [

  ]
})
export class ProgressModule { }
