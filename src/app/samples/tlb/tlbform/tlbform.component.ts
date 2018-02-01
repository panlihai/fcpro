import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-tlbform',
  templateUrl: './tlbform.component.html',
  styleUrls: ['./tlbform.component.css']
})
export class TlbformComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCTLBFORM', mainService);
  }
}