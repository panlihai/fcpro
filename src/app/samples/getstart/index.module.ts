import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { getstartRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FclistModule } from 'fccomponent';
import { GetstartComponent } from './getstart.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(getstartRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,
    FclistModule
  ],
  exports: [

  ],
  declarations: [
    GetstartComponent
  ],
  providers: [

  ]
})
export class GetstartModule { }
