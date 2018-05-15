import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';
import { eventNames } from 'cluster';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles: [`
      :host ::ng-deep .templatenavbar .fc-full{
        height:auto;
      }
      .all{
        margin-bottom:10px;
      }
  `]
})
export class NavbarComponent extends ComponentParent {
  //基础js
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrl:'./navbar.component.css'
  })
  export class NavbarComponent{
  
  }
  `
  //navjs
  navjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrl:'./navbar.component.css'
  })
  export class NavbarComponent{
    navbarEvent(event: FCEVENT) {  
      switch (event.eventName) {
        //登出事件
        case 'logout':
        this.mainService.providers.msgService.message("这是登出事件")
        break;
        //切换菜单数据
        case 'selectMenu':
        this.mainService.providers.msgService.message("切换菜单数据")
        break;
        //菜单栏事件
        case 'selectToolbar':
        this.mainService.providers.msgService.message("菜单栏事件")
        break;
        //弹出侧边栏事件
        case 'toggle' : 
        this.mainService.providers.msgService.message("弹出侧边栏事件")
        break;
      }
   }
  }
  `
  fcStatus: string;
  _navbarStatus = "closed";
    /**
   * 导航栏事件
   * @param event 
   */
  navbarEvent(event: FCEVENT) {  
     switch (event.eventName) {
       //登出事件
       case 'logout':
       this.mainService.providers.msgService.message("这是登出事件")
       break;
       //切换菜单数据
       case 'selectMenu':
       this.mainService.providers.msgService.message("切换菜单数据")
       break;
       //菜单栏事件
       case 'selectToolbar':
       this.mainService.providers.msgService.message("菜单栏事件")
       break;
       //弹出侧边栏事件
       case 'toggle' : 
       this.mainService.providers.msgService.message("弹出侧边栏事件")
       break;
     }
  }
   
  constructor(public mainService: ComponentService) {
    super('FCNAVBAR', mainService);
    this.fcStatus = 'closed';
  }
}