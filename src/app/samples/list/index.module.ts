import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { listRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FclistModule } from 'fccomponent';
import { ListdataComponent } from './listdata/listdata.component';
import { ListtreeComponent } from './listtree/listtree.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(listRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,
    FclistModule
  ],
  exports: [

  ],
  declarations: [
    ListdataComponent,
    ListtreeComponent
  ],
  providers: [

  ]
})
export class ListModule { }
