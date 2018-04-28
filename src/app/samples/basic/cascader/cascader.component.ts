import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';
import { ComponentParent } from '../../componentparent';

@Component({
  selector: 'cascader',
  templateUrl: './cascader.component.html',
  styles: [``]
})
export class CascaderComponent extends ComponentParent {
  constructor(public mainService:ComponentService){
    super('FCCASCADER',mainService);
  }
}
