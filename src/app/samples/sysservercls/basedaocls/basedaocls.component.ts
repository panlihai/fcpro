import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'basedaocls',
  templateUrl: './basedaocls.component.html',
  styles: [`
  
  `]
})
export class BasedaoclsComponent extends ComponentParent {
    //代码
    code:string=`
  
    `;
  constructor(public mainService: ComponentService) {
    super('', mainService);
  }
}