// 编制设置
import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { FCEVENT } from 'fccomponent/fc';
import { ParentlistComponent } from 'fccomponent';
import { NzModalService } from 'ng-zorro-antd';
import { AddrowattrvaluedialogComponent } from './dialog/addrowattrvaluedialog.component';
import { AddcolattrvaluedialogComponent } from './dialog/addcolattrvaluedialog.component';
import { BgsettingupService } from '../services/bgsettingup.service';
@Component({
  selector: 'bgsettingup',
  templateUrl: './bgsettingup.component.html',
  styles: [`
  :host ::ng-deep .col-1-full .ant-form-item-label{
    width:12.5%;
  }
  :host ::ng-deep .col-1-full .ant-form-item-control-wrapper{
    width:83.666667%;
  }
  :host ::ng-deep .col-1-full>div>div> .ant-form-item-control-wrapper{
    width:100%;
  }
  .start-setting-list{
    flex:1;
  }
  .start-setting .spacer{
    width:100%;
    padding-top: 20px;
    border-top: 1px solid #ebedf0;
    box-sizing: border-box;
  }
  :host ::ng-deep .start-setting-col>.fc-layoutcol{
    height:100%;
  }
  :host ::ng-deep .start-setting-col>.fc-layoutcol>.fc-content1,
  :host ::ng-deep .start-setting-col>.fc-layoutcol>.fc-content2{
    height:100%;
  }
  :host ::ng-deep .tree-wrap>.fc-layoutrow{
    border:1px solid #ebedf0;
  }
  .start-setting-list{
    padding-left:20px;
    height:300px;
  }
  :host ::ng-deep .ant-pagination{
    white-space:nowrap;
  }
  :host ::ng-deep .ant-select{
    width:auto;
  }
  :host ::ng-deep .start-setting-wrap .template-tab-full>nz-tabset>.ant-tabs>.ant-tabs-content{
    overflow:hidden;
  }
  .start-setting {
    height: 100%;
    overflow-y: auto;
  }
  :host ::ng-deep .tree-wrap>div>.fc-layoutrowcell2{
    overflow:auto;
  }
  `]
})
export class BgsettingupComponent extends ParentlistComponent {
  //选项卡
  tabmain = [
    { name: '编制设置', icon: '', disabled: false },
    { name: '编制明细', icon: '', disabled: true },
  ];
  //选项卡索引
  selectedIndex: string;
  //左侧树下拉选择  
  anyValue: any = { "label": "A", "value": "a", "disabled": false };
  anyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  //树选择对象
  treeSelectObj: any = {};
  //列表数据
  listData: any[];
  constructor(public mainService: BgsettingupService,
    public router: Router,
    public activeRoute: ActivatedRoute, private modal: NzModalService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    this.selectedIndex = '0';
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
    switch (eventName) {
      case 'listOneMoveup'://上移
        this.mainService.listOneMoveup(event.param, this.listData);
        break;
      case 'listOneMovedown'://下移
        this.mainService.listOneMovedown(event.param, this.listData);
        break;
    }
  }
  /**
  * 添加行属性值
  */
  addRowAttrValueDialog() {
    this.modal.open({
      title: '添加行属性值',
      content: AddrowattrvaluedialogComponent,
      width: '90%',
      wrapClassName: 'dialog1',
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
      width: '90%',
      wrapClassName: 'dialog1',
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
   * 开始编制
   */
  startSetting(index: string) {
    this.selectedIndex = index;
  }
  //调用
}
class Pen {
  div: any ;
  constructor() {
    document.onmousedown = this.down.bind(this);
  }
  down() {
    document.onmousemove = this.move.bind(this);
    document.onmouseup = this.up.bind(this);
  }
  move(e) {
    let ev = e || event;
    this.div=document.getElementsByClassName(".dialog1");
    if (this.div.length !== 0) {
      if (this.div[0]) {
        this.div[0].style.position = "absolute";
        this.div[0].style.left = e.clientX + "px";
        this.div[0].style.right = e.clientY + "px";
      }
    }
    console.log(1);
  }
  up() {
    document.onmousemove = null;
    document.onmouseup = null;
  }
}

new Pen();
