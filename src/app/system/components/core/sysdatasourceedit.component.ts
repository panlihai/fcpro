import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, ParentlistComponent, ParentEditComponent } from 'fccomponent';
import { SysdatasourceService } from '../../services/sysdatasource.service';
import { NzModalService } from 'ng-zorro-antd';
import { chooseicondialogComponent } from './dialog/chooseicondialog.component';
@Component({
  selector: 'sysdatasource',
  templateUrl: './sysdatasourceedit.component.html',
  styles: [`
  .sys-card-btn{
    width:25%;
  }
  .edit-footer-btn{
    text-align:center;
  }
  .choose-icon{
    display:flex;
    justify-content:flex-start;
  }
  .choose-icon .fc-icon{
    widt:25%;
    display:block;
  }
  `]
})
export class SysdatasourceeditComponent extends ParentEditComponent {
  //数据源图标
  dataSourceIcon: string;
  constructor(public mainService: SysdatasourceService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    public modal: NzModalService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
  }
  /**
   * 主对象的事件
   * @param eventName 事件名 
   * @param context 返回参数
   */
  event(eventName: string, context: any): void {
    switch (eventName) {

    }
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  /**
   * 选择图标
   */
  chooseIcon() {
    this.modal.open({
      title: '选择图标',
      content: chooseicondialogComponent,
      onOk() { },
      onCancel() { },
      footer: false,
      componentParams: {
        options: {}
      }
    }).subscribe(obj => {

    });
  }
  /**
   * 新增模型
   */
  addModel() {

  }
  /**
   * 保存返回
   */
  cardSaveBack() {

  }
}
