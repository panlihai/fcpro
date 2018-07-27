// 项目属性
import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { FCEVENT } from 'fccomponent/fc';
import { ParentlistComponent } from 'fccomponent';
import { NzModalService } from 'ng-zorro-antd';
import { BgattributeService } from '../services/bgattribute.service';
import { BgtransfordialogComponent } from './dialog/Bgtransfordialog.component';
import { ChooseattrdialogComponent } from './dialog/chooseattrdialog.component';
import { AddaffiliationdialogComponent } from './dialog/addaffiliationdialog.component';
@Component({
  selector: 'bgprojectattribute',
  templateUrl: './bgprojectattribute.component.html',
  styles: [`
  `]
})
export class BgprojectattributeComponent extends ParentlistComponent {
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
  * 新增属性关系
  */
  addPropertyrelationDialog() {
    this.modal.open({
      title: '新增属性关系',
      content: BgtransfordialogComponent,
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
  * 选择属性
  */
  chooseAttrDialog() {
    this.modal.open({
      title: '选择属性',
      content: ChooseattrdialogComponent,
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
  * 新增从属关系
  */
 addAffiliationDialog() {
  this.modal.open({
    title: '新增从属关系',
    content: AddaffiliationdialogComponent,
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
