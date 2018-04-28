import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'sysproduct',
  templateUrl: './sysproduct.component.html',
  styles: [``]
})
export class SysproductComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCPRODUCT', mainService);
  }
}
