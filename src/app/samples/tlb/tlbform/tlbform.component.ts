import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';
import { TimelineOptions } from 'fccomponent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tlbform',
  templateUrl: './tlbform.component.html',
  styles: [`
  :host ::ng-deep .tlbform .fc-full{
     height:auto;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
}

.subtitle .subtitle-item label {
    font-weight: 700;
}

.subtitle .subtitle-item span {

}
:host ::ng-deep .fc-left{
  text-align: left;
  position: fixed;
  top: 100px;
  margin-bottom: 10px;
  z-index: 999;
}
:host ::ng-deep .templateform-head{
  margin-top: 30px;
}
  `]
})
export class TlbformComponent extends ComponentParent {
  //自定义下拉单选
  anyValue: any = { "label": "A", "value": "a", "disabled": false };
  anyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  //多选
  checkValue: string = 'a';
  checkOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  //下拉多选
  chosenValue: string = 'a';
  chosenOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
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
    super('FCTLBFORM', mainService);
  }
  /**
   * 自定义工具栏事件
   * @param event 
   */
  ourtlbform(event: FCEVENT) {
    switch (event.eventName) {
      case 'me':
        console.log("自定义工具栏事件");
        break;
    }
  }
}