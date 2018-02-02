import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-sysdic',
  templateUrl: './sysdic.component.html',
  styleUrls: ['./sysdic.component.css']
})
export class SysdicComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSYSDIC', mainService);
  }
}