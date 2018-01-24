import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule } from 'fccomponent';
import { FccoreModule } from 'fccore';
import { bandRouters } from './index.route';
import { BandlistComponent } from './bandlist/bandlist.component';
import { BandtreeComponent } from './bandtree/bandtree.component';
import { BandtreelistComponent } from './bandtreelist/bandtreelist.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(bandRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule, FccoreModule
  ],
  exports: [

  ],
  declarations: [
    BandlistComponent,
    BandtreeComponent,
    BandtreelistComponent
  ],
  providers: [

  ]
})
export class BandModule { }
