import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FcadformOption } from 'fccomponent';
@Component({
  selector: 'app-adform',
  templateUrl: './adform.component.html',
  styleUrls: ['./adform.component.css']
})
export class AdformComponent extends ComponentParent {
  formConfig: FcadformOption = { fcTitle: "元数据编辑" };
  constructor(public mainService: ComponentService) {
    super('FCADFORM', mainService);
  }
}