import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../services/component.service';
import { ComponentParent } from '../componentparent';
@Component({
  selector: 'updatelog',
  templateUrl: './updatelog.component.html',
  styles: [`
    
  `]
})
export class UpdatelogComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('SYSCOMPONENT', mainService);
  }
}