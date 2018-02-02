import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { MenuOptions } from 'fccomponent';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent extends ComponentParent {
  menuSelectObj: any = {};
  menuOptions: MenuOptions = {
    //所在产品优先级最高，当有产品时其它条件忽略
    fcPid: environment.pid
  };
  constructor(public mainService: ComponentService) {
    super('FCNAVMENU', mainService);
  }
}