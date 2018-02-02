import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-tlblistitem',
  templateUrl: './tlblistitem.component.html',
  styleUrls: ['./tlblistitem.component.css']
})
export class TlblistitemComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCTLBLISTITEM', mainService);
  }
}