import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-sysmessage',
  templateUrl: './sysmessage.component.html',
  styleUrls: ['./sysmessage.component.css']
})
export class SysmessageComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCMESSAGE', mainService);
  }
}