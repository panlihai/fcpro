import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [`
  :host ::ng-deep .list .fc-full{
       height:auto;
  }
  `]
})
export class ListComponent extends ComponentParent {
   
  constructor(public mainService: ComponentService) {
    super('FCLIST', mainService);
  }

    /**
   * 
   */
  listEvent(event: FCEVENT) {
    switch (event.eventName) {
      case "select":
        this.mainService.messageService.message(event.param);
        break;
    }
  }
}