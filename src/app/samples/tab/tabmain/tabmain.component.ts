import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-tabmain',
  templateUrl: './tabmain.component.html',
  styleUrls: ['./tabmain.component.css']
})
export class TabmainComponent extends ComponentParent {
  //父选项卡
  tabmain = [
    { name: '父选项卡1' },
    { name: '父选项卡2' },
    { name: '父选项卡3' }
  ]
  constructor(public mainService: ComponentService) {
    super('FCTABMAIN', mainService);
  }
}