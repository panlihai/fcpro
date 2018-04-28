import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { tlbRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FclistModule, FctlbModule } from 'fccomponent';
import { TlbdropdownComponent } from './tlbdropdown/tlbdropdown.component';
import { TlbformComponent } from './tlbform/tlbform.component';
import { TlblistComponent } from './tlblist/tlblist.component';
import { TlblistitemComponent } from './tlblistitem/tlblistitem.component';
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
    TlbdropdownComponent,
    TlbformComponent,
    TlblistComponent,
    TlblistitemComponent
  ],
  providers: [

  ]
})
export class TlbModule { }
