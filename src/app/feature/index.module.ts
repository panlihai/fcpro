import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SyscomponentComponent } from './syscomponent/syscomponent.component';
import { SyscomponentService } from './syscomponent/syscomponent.service';
import { RouterModule } from '@angular/router';
import { Routers } from './index.route';
import { FcbasicModule,FclayoutModule,FcadModule,FcnavModule } from 'fccomponent';
import { FccoreModule } from 'fccore';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(Routers),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,FccoreModule
  ],
  exports: [
    SyscomponentComponent  
  ],
  declarations: [
    SyscomponentComponent
  ],
  providers: [ 
    SyscomponentService
  ]
})
export class FcexampleModule { }
