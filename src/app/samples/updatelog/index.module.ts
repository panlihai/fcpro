import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { updatelogRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FclistModule } from 'fccomponent';
import { UpdatelogComponent } from './updatelog.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(updatelogRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,
    FclistModule
  ],
  exports: [

  ],
  declarations: [
    UpdatelogComponent
  ],
  providers: [

  ]
})
export class UpdatelogModule { }
