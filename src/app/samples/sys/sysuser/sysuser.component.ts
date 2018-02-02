import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-sysuser',
  templateUrl: './sysuser.component.html',
  styleUrls: ['./sysuser.component.css']
})
export class SysuserComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSYSUSER', mainService);
  }
}