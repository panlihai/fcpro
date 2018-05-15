import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';
import { ComponentParent } from '../../componentparent';
@Component({
  selector: 'labelss',
  templateUrl: './label.component.html',
  styles: [``]
})
export class LabelComponent extends ComponentParent {
  constructor(public mainService:ComponentService){
    super('FCLABEL',mainService);
  }
}
