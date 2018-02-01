import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { listRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule } from 'fccomponent';
import { FccoreModule } from 'fccore';
import { ListdataComponent } from './listdata/listdata.component';
import { ListdefineComponent } from './listdefine/listdefine.component';
import { ListdefinedtreeComponent } from './listdefinedtree/listdefinedtree.component';
import { ListeditComponent } from './listedit/listedit.component';
import { ListedittreeComponent } from './listedittree/listedittree.component';
import { ListinfoComponent } from './listinfo/listinfo.component';
import { ListtreeComponent } from './listtree/listtree.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(listRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule, FccoreModule
  ],
  exports: [

  ],
  declarations: [
    ListdataComponent,
    ListdefineComponent,
    ListdefinedtreeComponent,
    ListeditComponent,
    ListedittreeComponent,
    ListinfoComponent,
    ListtreeComponent,
  ],
  providers: [

  ]
})
export class ListModule { }
