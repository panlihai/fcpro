import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { modalRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule } from 'fccomponent';
import { FccoreModule } from 'fccore';
import { ModalcardComponent } from './modalcard/modalcard.component';
import { ModalconfirmComponent } from './modalconfirm/modalconfirm.component';
import { ModaldangerComponent } from './modaldanger/modaldanger.component';
import { ModalinfoComponent } from './modalinfo/modalinfo.component';
import { ModallistComponent } from './modallist/modallist.component';
import { ModalsuccessComponent } from './modalsuccess/modalsuccess.component';
import { ModaltreelistComponent } from './modaltreelist/modaltreelist.component';
import { ModalwarnComponent } from './modalwarn/modalwarn.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(modalRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule, FccoreModule
  ],
  exports: [

  ],
  declarations: [
    ModalcardComponent,
    ModalconfirmComponent,
    ModaldangerComponent,
    ModalinfoComponent,
    ModallistComponent,
    ModalsuccessComponent,
    ModaltreelistComponent,
    ModalwarnComponent,
  ],
  providers: [

  ]
})
export class ModalModule { }
