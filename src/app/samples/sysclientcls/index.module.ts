import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { tlbRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FclistModule, FctlbModule } from 'fccomponent';
import { ParentclsComponent } from './parentcls/parentcls.component';
import { ParentdetailclsComponent } from './parentdetailcls/parentdetailcls.component';
import { ParentlistclsComponent } from './parentlistcls/parentlistcls.component';
import { ParentserviceclientclsComponent } from './parentserviceclientcls/parentserviceclientcls.component';
import { ParentviewclsComponent } from './parentviewcls/parentviewcls.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(tlbRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,
    FclistModule,
    FctlbModule
  ],
  exports: [

  ],
  declarations: [
    ParentclsComponent,
    ParentdetailclsComponent,
    ParentlistclsComponent,
    ParentserviceclientclsComponent,
    ParentviewclsComponent
  ],
  providers: [

  ]
})
export class SysclientclsModule { }
