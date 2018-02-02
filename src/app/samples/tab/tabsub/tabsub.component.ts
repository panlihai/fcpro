import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-tabsub',
  templateUrl: './tabsub.component.html',
  styleUrls: ['./tabsub.component.css']
})
export class TabsubComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCTABSUB', mainService);
  }
}