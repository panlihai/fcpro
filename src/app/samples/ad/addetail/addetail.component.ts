import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
@Component({
  selector: 'addetail',
  templateUrl: './addetail.component.html',
  styles: [``]
})
export class AddetailComponent extends ComponentParent {
  constructor(public mainService:ComponentService){
    super('FCADDETAIL',mainService);
  }
}
