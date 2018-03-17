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
    { name: '父选项卡1', disabled: false },
    { name: '父选项卡2', disabled: false },
    { name: '父选项卡3', disabled: false }
  ]
  constructor(public mainService: ComponentService) {
    super('FCTABMAIN', mainService);
  }
}