import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styles: [`
  :host ::ng-deep .list .fc-full{
       height:auto;
  }
  `]
})
export class ListComponent extends ComponentParent {
  //basicview
  basicview : string = `
  <fc-list [fcAppid]="'SYSCOMPONENT'" fccontent fcFieldCode="APPNAME"></fc-list>
  ` 
  //listview
  listview : string =  `
  <fc-list [fcAppid]="'SYSCOMPONENT'" fccontent fcFieldCode="APPNAME"  (fcEvent)="listEvent($event)"></fc-list>
  `
  //基础js
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrl:'./list.component.css'
  })
  export class ListComponent{
    }
  `
  //基础listjs
  listjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrl:'./list.component.css'
  })
  export class ListComponent{
    listEvent(event: FCEVENT) {
      switch (event.eventName) {
        case "select":
          this.mainService.messageService.message("点击列表");
          break;
      }
    }
  }
  `
  constructor(public mainService: ComponentService) {
    super('FCLIST', mainService);
  }

    /**
   * 
   */
  listEvent(event: FCEVENT) {
    switch (event.eventName) {
      case "select":
        this.mainService.messageService.message("点击列表");
        break;
    }
  }
}