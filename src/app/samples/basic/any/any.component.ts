import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';
import { ComponentParent } from '../../componentparent';
import { FCEVENT } from 'fccomponent/fc';

@Component({
  selector: 'any',
  templateUrl: './any.component.html',
  styles: [``]
})
export class AnyComponent extends ComponentParent {
  
  anyValue: any = { "label": "A", "value": "a", "disabled": false };
  anyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  anyOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  anyOptionsReadonly: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  constructor(public mainService:ComponentService){
    super('FCANY',mainService);
  }

  anyEvent(event:FCEVENT){
    switch(event.eventName){
      case 'clear':
      this.mainService.messageService.warm('已经清除了内容');
      break;
    }
  }
}
