import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-sysforget',
  templateUrl: './sysforget.component.html',
  styleUrls: ['./sysforget.component.css']
})
export class SysforgetComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSYSFORGET', mainService);
  }
}