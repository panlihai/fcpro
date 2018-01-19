import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SyscomponentComponent } from './syscomponent/syscomponent.component';
import { SyscomponentService } from './syscomponent/syscomponent.service';
import { RouterModule } from '@angular/router';
import { Routers } from './index.route';
import { FcbasicModule,FclayoutModule,FcadModule,FcnavModule } from 'fccomponent';
import { FccoreModule } from 'fccore';
import { environment } from '../../environments/environment';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(Routers),
    FccoreModule.forRoot(environment),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,
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
