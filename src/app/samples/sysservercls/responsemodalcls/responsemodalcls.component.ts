import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'responsemodalcls',
  templateUrl: './responsemodalcls.component.html',
  styles: [`
  
  `]
})
export class ResponsemodalclsComponent extends ComponentParent {
    //代码
    code:string=`
  
    `;
  constructor(public mainService: ComponentService) {
    super('', mainService);
  }
}