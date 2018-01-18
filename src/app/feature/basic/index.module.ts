import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { basicRouters } from './index.route';
import { FcbasicModule,FclayoutModule,FcadModule,FcnavModule } from 'fccomponent';
import { FccoreModule } from 'fccore';
import { ButtonComponent } from './button/button.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(basicRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,FccoreModule
  ],
  exports: [
      
  ],
  declarations: [    
    ButtonComponent
  ],
  providers: [ 
    
  ]
})
export class BasicModule { }
