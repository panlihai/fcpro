import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-syssignin',
  templateUrl: './syssignin.component.html',
  styleUrls: ['./syssignin.component.css']
})
export class SyssigninComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSYSSIGNIN', mainService);
  }
}