import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'tabsub',
  templateUrl: './tabsub.component.html',
  styles: [`
  :host ::ng-deep .tabsub .fc-full{
    height:auto;
  }
    
  `]
})
export class TabsubComponent extends ComponentParent {
  //子选项卡
  tabsub = [
    { name: '子选项卡1' },
    { name: '子选项卡2' },
    { name: '子选项卡3' }
  ];
  tabIndex=0;
  constructor(public mainService: ComponentService) {
    super('FCTABSUB', mainService);
  }
}