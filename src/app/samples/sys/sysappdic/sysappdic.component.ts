import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'sysappdic',
  templateUrl: './sysappdic.component.html',
  styles: [``]
})
export class SysappdicComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCSYSAPPDIC', mainService);
  }
}
