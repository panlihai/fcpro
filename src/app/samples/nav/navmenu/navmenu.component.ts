import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { MenuOptions } from 'fccomponent';
import { FCEVENT } from 'fccomponent/fc';
import { environment } from '../../../../environments/environment';
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
  //基础basicview
  basicview : string = `
  <fc-navmenu fccontent [(ngModel)]="menuSelectObj" [fcOption]="menuOptions" (fcEvent)="navmenuEvent($event);"></fc-navmenu>
  `
  //菜单colorview
  colorview : string = `
  <fc-navmenu fccontent [(ngModel)]="menuSelectObj" [fcOption]="menuOptions" (fcEvent)="navmenuEvent($event);" fcTheme="dark"></fc-navmenu>   
  `
    //基础js
    basicjs: string = `
    import { Component, OnInit } from '@angular/core';
    @Component({
      selector: 'navmenu',
      templateUrl: './navmenu.component.html',
      styleUrl:'./navmenu.component.css'
    })
    export class NavmenuComponent{
      menuSelectObj: any = {};
      //按钮配置
      menuOptions: MenuOptions = {
        //所在产品优先级最高，当有产品时其它条件忽略
        fcPid: environment.pid
      };
      navmenuEvent(event: FCEVENT){
        switch(event.eventName)  {
         case 'toggle' :
        this.mainService.providers.msgService.message("点解按钮进行菜单展开收缩")
         break;
        }
      }
    }
    `
    menuSelectObj: any = {};
    //按钮配置
    menuOptions: MenuOptions = {
      //所在产品优先级最高，当有产品时其它条件忽略
      fcPid: environment.pid
    };
  constructor(public mainService: ComponentService) {
    super('FCNAVMENU', mainService);
  }
  navmenuEvent(event: FCEVENT){
    switch(event.eventName)  {
     case 'toggle' :
    this.mainService.providers.msgService.message("点解按钮进行菜单展开收缩")
     break;
    }
  }
}