import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routers } from './index.route';
import {
  FclistModule, FctlbModule, FclayoutModule, FcbasicModule,
  FcadModule, FcmodalModule, FcsearchModule, FctabModule, FcchartModule
} from 'fccomponent';
import { BgattributeComponent } from './components/bgattribute.component';
import { BgformulaComponent } from './components/bgformula.component';
import { BgsettingupComponent } from './components/bgsettingup.component';
import { BgattributeService } from './services/bgattribute.service';
import { BgformulaService } from './services/bgformula.service';
import { BgprojectattributeService } from './services/bgprojectattribute.service';
import { BgsettingupService } from './services/bgsettingup.service';
import { ChooseattrdialogComponent } from './components/dialog/chooseattrdialog.component';
import { BgprojectattributeComponent } from './components/bgprojectattribute.component';
import { AddcolattrvaluedialogComponent } from './components/dialog/addcolattrvaluedialog.component';
import { BgtransfordialogComponent } from './components/dialog/bgtransfordialog.component';
import { AddrowattrvaluedialogComponent } from './components/dialog/addrowattrvaluedialog.component';
import { AddaffiliationdialogComponent } from './components/dialog/addaffiliationdialog.component';
@NgModule({
  // 弹窗记得在这里引入
  entryComponents: [
    BgtransfordialogComponent,
    ChooseattrdialogComponent,
    AddcolattrvaluedialogComponent,
    AddrowattrvaluedialogComponent,
    AddaffiliationdialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(Routers),
    FclistModule,
    FctlbModule,
    FclayoutModule,
    FcbasicModule,
    FctlbModule,
    FcadModule,
    FcmodalModule,
    FcsearchModule,
    FctabModule,
    FcchartModule,
  ],
  exports: [
  ],
  declarations: [
    BgattributeComponent,
    BgformulaComponent,
    BgsettingupComponent,
    BgprojectattributeComponent,
    ChooseattrdialogComponent,
    BgtransfordialogComponent,
    AddcolattrvaluedialogComponent,
    AddrowattrvaluedialogComponent,
    AddaffiliationdialogComponent
  ],
  providers: [
    BgattributeService,
    BgformulaService,
    BgprojectattributeService,
    BgsettingupService
  ]
})
export class BudgetModule {

}
