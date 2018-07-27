// 编制设置
import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { FCEVENT } from 'fccomponent/fc';
import { ParentlistComponent } from 'fccomponent';
import { NzModalService } from 'ng-zorro-antd';
import { BgattributeService } from '../services/bgattribute.service';
import { AddrowattrvaluedialogComponent } from './dialog/addrowattrvaluedialog.component';
import { AddcolattrvaluedialogComponent } from './dialog/addcolattrvaluedialog.component';
@Component({
  selector: 'bgsettingup',
  templateUrl: './bgsettingup.component.html',
  styles: [`
  `]
})
export class BgsettingupComponent extends ParentlistComponent {
  constructor(public mainService: BgattributeService,
    public router: Router,
    public activeRoute: ActivatedRoute, private modal: NzModalService) {
    super(mainService, router, activeRoute);
  }
  init(): void {

  }
  getDefaultQuery() {
    return {

    }
  }
  /**
   * @param eventName 事件名称
   * @param context 事件返回参数
   */
  event(eventName: string, event: FCEVENT): void {

  }
  /**
  * 添加行属性值
  */
  addRowAttrValueDialog() {
    this.modal.open({
      title: '添加行属性值',
      content: AddrowattrvaluedialogComponent,
      onOk() { },
      onCancel() { },
      footer: false,
      componentParams: {
        //  把options对象传值给弹窗
        options: {}
      }
    }).subscribe(result => {
      // result为弹窗返回的值
    });
  }
  /**
   * 添加列属性值
   */
  addColAttrValueDialog() {
    this.modal.open({
      title: '添加列属性值',
      content: AddcolattrvaluedialogComponent,
      onOk() { },
      onCancel() { },
      footer: false,
      componentParams: {
        //  把options对象传值给弹窗
        options: {}
      }
    }).subscribe(result => {
      // result为弹窗返回的值
    });
  }
}
