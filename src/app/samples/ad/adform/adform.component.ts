import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FcformConfig } from 'fccomponent';
@Component({
  selector: 'app-adform',
  templateUrl: './adform.component.html',
  styleUrls: ['./adform.component.css']
})
export class AdformComponent extends ComponentParent {
  formConfig: FcformConfig = { fcTitle: "元数据编辑" };
  constructor(public mainService: ComponentService) {
    super('FCADFORM', mainService);
  }
}