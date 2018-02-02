import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-sysauth',
  templateUrl: './sysauth.component.html',
  styleUrls: ['./sysauth.component.css']
})
export class SysauthComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSYSAUTH', mainService);
  }
}
