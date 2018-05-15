import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';
import { TimelineOptions } from 'fccomponent';
import { Router } from '@angular/router';

@Component({
  selector: 'tlbform',
  templateUrl: './tlbform.component.html',
  styles: [`
  :host ::ng-deep .tlbform .fc-full{
    height:auto;
  }
  `]
})
export class TlbformComponent extends ComponentParent {
  //basicview
  basicview : string = `
  <fc-tlbform [fcAppid]="'SYSCOMPONENT'" (fcEvent)="ourtlbform($event)"></fc-tlbform>
  <form fccontent>
      <fc-text [fcLabel]="'文本框'" name="textname"></fc-text>
      <fc-combo [fcLabel]="'下拉单选'" [(ngModel)]="comboValue" [fcOption]="comboOptions" name="comboname"></fc-combo>
      <fc-date [fcLabel]="'日期'" name="datename"></fc-date>
      <fc-double [fcLabel]="'数值'" [(ngModel)]="doubleValue" name="doublename"></fc-double>
      <fc-text [fcLabel]="'内部前缀'" [(ngModel)]="addonbefore" [fcPrefix]="'fc-icon-revocation'" name="textinner"></fc-text>
      <fc-text [fcLabel]="'内部后缀'" [(ngModel)]="addonbefore" [fcSuffix]="'fc-icon-revocation'" name="textout"></fc-text>
      <fc-text [fcLabel]="'后置标签'" [(ngModel)]="addonbefore" [fcAddonAfter]="'fc-icon-line'" name="textoutright"></fc-text>
      <fc-long [fcLabel]="'整数'" [(ngModel)]="longValue" name="longname"></fc-long>
  </form>
  `
  //basicjs
  basicjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'tlbform',
    templateUrl: './tlbform.component.html',
    styleUrl:'./tlbform.component.css'
  })
  export class TlbformComponent{
    //自定义下拉单选
    anyValue: any = { "label": "A", "value": "a", "disabled": false };
    anyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
    disableds = '{"BTNCARDSAVEBACK":true,"BTNCARDADD":true}';
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
    ourtlbform(event: FCEVENT) {
      switch (event.eventName) {
        case 'me':
        this.mainService.providers.msgService.message("自定义工具栏事件");
        break;
      }
    }
  }
  `
  //自定义下拉单选
  anyValue: any = { "label": "A", "value": "a", "disabled": false };
  anyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  disableds = '{"BTNCARDSAVEBACK":true,"BTNCARDADD":true}';
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
        // console.log("自定义工具栏事件");
        this.mainService.providers.msgService.message("自定义工具栏事件");
        break;
    }
  }
}