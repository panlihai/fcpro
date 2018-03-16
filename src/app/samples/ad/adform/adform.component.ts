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
  radioValue: string = 'a';
  anyValue: any = { "label": "A", "value": "a", "disabled": false };
  anyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  manyValue: any[] = [{ "label": "A", "value": "a", "disabled": false }];
  checkValue: string = 'a';
  checkOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  chosenValue: string = 'a';
  chosenOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  comboValue: string = 'a';
  comboOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  now = new Date();
  inputNumber: number = 3;
  content:string="这是文本框内容";
  constructor(public mainService: ComponentService) {
    super('FCADFORM', mainService);
  }
}