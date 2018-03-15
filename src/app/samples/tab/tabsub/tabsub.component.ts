import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-tabsub',
  templateUrl: './tabsub.component.html',
  styleUrls: ['./tabsub.component.css']
})
export class TabsubComponent extends ComponentParent {
  //子选项卡
  tabsub = [
    { name: '子选项卡1' },
    { name: '子选项卡2' },
    { name: '子选项卡3' }
  ]
  constructor(public mainService: ComponentService) {
    super('FCTABSUB', mainService);
  }
}