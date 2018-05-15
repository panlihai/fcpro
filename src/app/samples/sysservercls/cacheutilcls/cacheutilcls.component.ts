import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'cacheutilcls',
  templateUrl: './cacheutilcls.component.html',
  styles: [`
  
  `]
})
export class CacheutilclsComponent extends ComponentParent {
    //代码
    code:string=`
  
    `;
  constructor(public mainService: ComponentService) {
    super('', mainService);
  }
}