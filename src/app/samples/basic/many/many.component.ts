import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';

@Component({
  selector: 'app-many',
  templateUrl: './many.component.html',
  styles: [``]
})
export class ManyComponent extends ComponentParent {
  manyValue: any[] = [{ "label": "A", "value": "a", "disabled": false }];
  manyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  manyOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  manynullOptions: any[] = [];
  constructor(public mainService: ComponentService) {
    super('FCMANY', mainService);
  }
  manyEvent(event:FCEVENT){
    switch(event.eventName){
        case 'clear':
        this.mainService.messageService.warm("已经清除了内容");
        break;
    }
  }
}
