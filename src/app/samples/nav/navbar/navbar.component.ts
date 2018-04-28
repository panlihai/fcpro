import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles: [`
      :host ::ng-deep .templatenavbar .fc-full{
        height:auto;
      }
  `]
})
export class NavbarComponent extends ComponentParent {
  _fcEvent: any;
  provider: any;
  _userInfo: any;
  fcStatus: string;
  _router: any;
  _providers: any;
  _menus: any = [];
  //导航栏状态
  _navbarStatus = "closed";
    /**
   * 导航栏事件
   * @param event 
   */
  navbarEvent(event: FCEVENT) {
    switch(event.eventName){
      case 'clear':
      this.mainService.messageService.warm('已经清除了内容');
      break;
    }
  }
   /**
     * 弹出侧边栏消息
     */
    _openMessage(event: any) {
      if (this.fcStatus === 'closed') {
          this.fcStatus = 'opened';
      } else {
          this.fcStatus = 'closed';
      }
  }
  constructor(public mainService: ComponentService) {
    super('FCNAVBAR', mainService);
    this.fcStatus = 'closed';
  }
}