import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { layoutRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FclistModule } from 'fccomponent';
import { LayoutcolComponent } from './layoutcol/layoutcol.component';
import { LayoutgroupComponent } from './layoutgroup/layoutgroup.component';
import { LayoutpanelComponent } from './layoutpanel/layoutpanel.component';
import { LayoutportalComponent } from './layoutportal/layoutportal.component';
import { LayoutrowComponent } from './layoutrow/layoutrow.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(layoutRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule, 
    FclistModule
  ],
  exports: [

  ],
  declarations: [
    LayoutcolComponent,
    LayoutgroupComponent,
    LayoutpanelComponent,
    LayoutportalComponent,
    LayoutrowComponent,
  ],
  providers: [

  ]
})
export class LayoutModule { }
