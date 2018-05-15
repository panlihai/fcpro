import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { documentRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FclistModule } from 'fccomponent';
import { DocumentComponent } from './document.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(documentRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,
    FclistModule
  ],
  exports: [

  ],
  declarations: [
    DocumentComponent
  ],
  providers: [

  ]
})
export class DocumentModule { }
