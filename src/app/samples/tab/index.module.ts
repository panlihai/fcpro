import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { tabRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FclistModule, FctabModule } from 'fccomponent';
import { FccoreModule } from 'fccore';
import { TabmainComponent } from './tabmain/tabmain.component';
import { TabsubComponent } from './tabsub/tabsub.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(tabRouters),
    FccoreModule,
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule, 
    FclistModule,
    FctabModule
  ],
  exports: [

  ],
  declarations: [
    TabmainComponent,
    TabsubComponent
  ],
  providers: [

  ]
})
export class TabModule { }
