import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { sysRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FclistModule } from 'fccomponent';
import { QaComponent } from './qa/qa.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(sysRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,
    FclistModule
  ],
  exports: [

  ],
  declarations: [
   QaComponent
  ],
  providers: [

  ]
})
export class SysModule { }
