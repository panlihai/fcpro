import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'sysmessage',
  templateUrl: './sysmessage.component.html',
  styles: [``]
})
export class SysmessageComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCMESSAGE', mainService);
  }
}