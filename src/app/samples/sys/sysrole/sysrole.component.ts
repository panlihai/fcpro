import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-sysrole',
  templateUrl: './sysrole.component.html',
  styleUrls: ['./sysrole.component.css']
})
export class SysroleComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSYSROLE', mainService);
  }
}