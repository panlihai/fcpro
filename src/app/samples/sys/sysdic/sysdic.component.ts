import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'sysdic',
  templateUrl: './sysdic.component.html',
  styles: [``]
})
export class SysdicComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSYSDIC', mainService);
  }
}