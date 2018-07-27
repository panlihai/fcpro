// 选择属性
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import 'rxjs/add/operator/filter';
import { NzModalSubject } from 'ng-zorro-antd';
@Component({
  selector: 'chooseattrdialog',
  template: `
  <fc-layoutpanel>
    <fc-layoutcol fccontent fcSpans="20,2">
      <fc-text fccontent1 [(ngModel)]="seachCode"  fcPlaceHolder="请输入项目代码" fcLabel="项目代码"></fc-text>
      <fc-button fccontent2 fcLabel="查询" (click)="event('search')"></fc-button>
    </fc-layoutcol>
    <div fccontent style="height:400px">
      <fc-listdata #listdata1 [fcAppid]="componentParam.appId1" [fcOption]="fcOption1" (fcEvent)="listdataEvent($event,listdata1)"></fc-listdata>
    </div>
    <div fccontent style="display: flex;justify-content: center;">
    <fc-button fcType="primary" fcLabel="确定" (click)="event('confirm')"></fc-button>
    <fc-button fcLabel="取消" (click)="event('cancel')"></fc-button>
    </div>
  </fc-layoutpanel>
    `,
  styles: [`
   .customize-footer{
     text-align:right;
   }
  `]
})
export class ChooseattrdialogComponent {
  componentParam: any = {};
  seachCode: any = '';
  @Input()
  set options(param: any) {
    this.componentParam = param;
  }
  // 表单验证对象
  mainValid: any = {};
  constructor(private modal: NzModalSubject) {

  }
  emitDataOutside() {
    let params = {};
    this.modal.next(params);
    this.modal.destroy();
  }
  handleCancel() {
    this.modal.destroy();
  }
  event(eventName: string, param?: any) {
    switch (eventName) {
      case 'confirm':
        this.emitDataOutside();
        break;
      case 'cancel':
        this.handleCancel();
        break;
    }
  }
  listdataEvent(ev: any, param?: any) {
    switch (ev.eventName) {
      case 'click':

        break;
    }
  }
}