import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent extends ComponentParent {
  //副标题
  _subtitle = [{ label: '单位', content: '上海' }, { label: '部门', content: '财务科' }, { label: '登记人', content: '王五' }, { label: '登记日期', content: '2017年12月25日' }];
  constructor(public mainService: ComponentService) {
    super('FCTITLE', mainService);
  }
}