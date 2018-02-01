import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-adform',
  templateUrl: './adform.component.html',
  styleUrls: ['./adform.component.css']
})
export class AdformComponent extends ComponentParent {
  constructor(public mainService:ComponentService){
    super('FCADFORM',mainService);
  }
}