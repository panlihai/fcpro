import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';

@Component({
  selector: 'app-chosen',
  templateUrl: './chosen.component.html',
  styles: [``]
})
export class ChosenComponent extends ComponentParent {
  chosenValue: string = 'a';
  chosenOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  chosenOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  constructor(public mainService: ComponentService) {
    super('FCCHOSEN', mainService);
  }
  choseEvent(event:FCEVENT){
    switch(event.eventName){
      case 'clear':
      this.mainService.messageService.warm("已经清除了内容");
      break;
    }

  }
}

