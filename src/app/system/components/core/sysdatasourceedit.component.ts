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
  .sys-choose-icon{
    position:relative;
    height:100px;
  }
  .sys-choose-icon .sys-choose-icon-box{
    width: 100px;
    height: 100px;
    line-height: 90px;
    padding: 10px;
    border-radius: 4px;
    background-color: #ffffff;
    border: 1px dashed #ebedf0;
    position: absolute;
    left: 26%;
    top: 2px;
    text-align: center;
  }
  .sys-choose-icon fc-button{
    position:absolute;
    left:35%;
    top:45px;
  }
  .sys-radio{
    margin-left:33% ;
  }
  .sys-num{
    margin-right:9%;
  }
  .sys-proicon{
    display: inline-block;
    margin-left: 62%;
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
  /**
   * 返回列表
   */
  backToList() {
    this.navRouter('sysdatasourceList');
  }
}