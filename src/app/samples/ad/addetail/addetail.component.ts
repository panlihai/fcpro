import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
@Component({
  selector: 'app-addetail',
  templateUrl: './addetail.component.html',
  styleUrls: ['./addetail.component.css']
})
export class AddetailComponent extends ComponentParent {
  constructor(public mainService:ComponentService){
    super('FCADDETAIL',mainService);
  }
}
