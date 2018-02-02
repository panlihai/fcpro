import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-sysapp',
  templateUrl: './sysapp.component.html',
  styleUrls: ['./sysapp.component.css']
})
export class SysappComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSYSAPP', mainService);
  }
}
