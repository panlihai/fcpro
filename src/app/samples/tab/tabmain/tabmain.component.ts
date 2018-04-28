import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'tabmain',
  templateUrl: './tabmain.component.html',
  styles: [`
  :host ::ng-deep .tabmain .fc-full{
     height:auto;
   }
  `]
})
export class TabmainComponent extends ComponentParent {
  //父选项卡
  tabmain = [
    { name: '父选项卡1', disabled: false },
    { name: '父选项卡2', disabled: false },
    { name: '父选项卡3', disabled: false }
  ];
  tabIndex=0;
  constructor(public mainService: ComponentService) {
    super('FCTABMAIN', mainService);
  }
}