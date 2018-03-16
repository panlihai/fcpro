import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routers } from './index.route';
import { ComponentService } from './services/component.service';
@NgModule({
  imports: [
    RouterModule.forChild(Routers)
  ],
  exports: [

  ],
  declarations: [
    
  ],
  providers: [
    ComponentService
  ]
})
export class SamplesModule { }
