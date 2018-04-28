import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styles: [``]
})
export class ComboComponent extends ComponentParent {
  comboValue: string = 'a';
  comboOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  comboOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  constructor(public mainService: ComponentService) {
    super('FCCOMBO', mainService);
  }

  comboEvent(event:FCEVENT){
    switch(event.eventName){
      case 'clear':
      this.mainService.messageService.warm('已经清除了内容');
      break;
    }
  }
}


