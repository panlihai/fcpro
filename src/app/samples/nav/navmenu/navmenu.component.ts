import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { MenuOptions } from 'fccomponent';
import { FCEVENT } from 'fccomponent/fc';
@Component({
  selector: 'navmenu',
  templateUrl: './navmenu.component.html',
  styles: [`
  :host ::ng-deep .navmenu .fc-full{
    height:auto;
  }
  `]
})
export class NavmenuComponent extends ComponentParent {
  menuSelectObj: any = {};
  menuOptions: MenuOptions = {
    //所在产品优先级最高，当有产品时其它条件忽略
    fcPid: this.pid
  };
  constructor(public mainService: ComponentService) {
    super('FCNAVMENU', mainService);
  }
  event(fc:FCEVENT){
    
  }
}