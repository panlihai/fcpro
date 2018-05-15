import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'sysuser',
  templateUrl: './sysuser.component.html',
  styles: [``]
})
export class SysuserComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSYSUSER', mainService);
  }
}