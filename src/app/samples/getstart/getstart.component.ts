import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../services/component.service';
import { ComponentParent } from '../componentparent';
@Component({
  selector: 'getstart',
  templateUrl: './getstart.component.html',
  styles: [`
    
  `]
})
export class GetstartComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('SYSCOMPONENT', mainService);
  }
}