import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../services/component.service';
import { ComponentParent } from '../componentparent';
@Component({
  selector: 'document',
  templateUrl: './document.component.html',
  styles: [`
    
  `]
})
export class DocumentComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('SYSCOMPONENT', mainService);
  }
}