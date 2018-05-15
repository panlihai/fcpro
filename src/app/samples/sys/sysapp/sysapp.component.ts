import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'sysapp',
  templateUrl: './sysapp.component.html',
  styles: [``]
})
export class SysappComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSYSAPP', mainService);
  }
}
