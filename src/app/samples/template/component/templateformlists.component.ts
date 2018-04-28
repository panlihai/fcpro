import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { TimelineOptions } from 'fccomponent';
@Component({
  selector: 'templateformlists',
  templateUrl: './templateformlists.component.html',
  styles: [`
  :host ::ng-deep .templateformlists-list .fc-full{
    margin-bottom:20px;
  }
  .templateformlists .list-search-every1 {
    width: 15%;
  }
  .templateformlists .list-search-every2 {
    width: 25%;
  }
  .templateformlists .list-search-every4 {
    width: 25%;
  }
  .templateformlists .list-search-every5 {
    width: 35%;
    line-height:27px;
    text-align:right;
  }
  `]
})
export class TemplateformlistsComponent extends ComponentParent {
  comboValue: string = 'a';
  comboOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  //自定义下拉单选
  anyValue: any = { "label": "A", "value": "a", "disabled": false };
  anyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  //多选
  checkValue: string = 'a';
  checkOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  //下拉多选
  chosenValue: string = 'a';
  chosenOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  //单选
  radioValue: string = 'a';
  radioOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }];
  //数值
  doubleValue: number = 5.5;
  //整数
  longValue: number = 5;
  //评分
  rateValue: number = 5;
  //基本时间轴
  timeline1: TimelineOptions = {
    fcAppid: '',
    fcLabelCode: 'label',
    fcTitleCode: 'title',
    fcSmarkCode: 'smark',
    fcColorCode: 'color'
  };
  //text
  content: string = '文本内容';
  addonbefore: string = '';
  //自定义下拉多选
  manyValue: any[] = [{ "label": "A", "value": "a", "disabled": false }];
  manyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  //选项卡
  tabmain = [
    { name: '基本状态' },
    { name: '只读状态' },
    { name: '禁用状态' }
]
  constructor(public mainService: ComponentService) {
    super('SYSCOMPONENT', mainService);
  }
}
