import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';
import { ComponentParent } from '../../componentparent';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styles: [``]
})
export class ChatComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCCHAT', mainService);
  }
}
