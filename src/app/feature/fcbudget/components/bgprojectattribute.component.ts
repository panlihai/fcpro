import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TreeOptions, ParentlistComponent } from 'fccomponent';
import { BgtransfordialogComponent } from './dialog/bgtransfordialog.component';
import { FCEVENT } from 'fccomponent/fc';
import { BgprojectattributeService } from '../services/bgprojectattribute.service';
import { ChooseattrdialogComponent } from './dialog/chooseattrdialog.component';
import { NzModalService } from 'ng-zorro-antd';
import { CopyprojectattrComponent } from './dialog/copyprojectattr.component';
import { AddaffiliationdialogComponent } from './dialog/addaffiliationdialog.component';
@Component({
  selector: 'bgprojectattribute',
  templateUrl: './bgprojectattribute.component.html',
  styles: [`
  .bgattab{
    text-align: center; 
  }
  :host ::ng-deep .bgattab .ant-btn {
    margin-right: 2%;
    margin-top:5px;
}
  `]
})
export class BgprojectattributeComponent extends ParentlistComponent {
  mainObj: any = {};
  treeOptions: TreeOptions;
  treeSelectObj: any = {};
  _selectedIndex: number;
  pageTabs = [
    { name: '项目属性', icon: '', disabled: false },
    { name: '属性从属关系', icon: '', disabled: false },
    { name: '属性值从属关系', icon: '', disabled: false }
  ];
  treeSelectOptions: any[] = [];
  fcOption1: { fcClass: string; fcEnableSearch: boolean; fcEnableSorting: boolean; fcEnableFilter: boolean; fcEnableColResize: boolean; fcShowToolPanel: boolean; fcPagination: boolean; fcRowGroupPanelShow: string; fcEnableStatusBar: boolean; fcEnableRangeSelection: boolean; fcRowSelection: string; fcEnableAction: boolean; fcCheckboxSelection: boolean; fcEnableEdit: boolean; fcAutoSave: boolean; };
  constructor(public mainService: BgprojectattributeService,
    public router: Router,
    public activeRoute: ActivatedRoute, private modal: NzModalService) {
    super(mainService, router, activeRoute);
    this.fcOption1 = this.mainService.fcOption1;
    this.treeOptions = this.mainService.treeOptions;
  }
  init(): void {
    this.getTreeSelectData();
  }
  getDefaultQuery() {
    return {

    }
  }
  /**
   * @params eventName 事件名称
   * @params context 事件返回参数
   */
  event(eventName: string, event: FCEVENT): void {
    let params: { [key: string]: any } = {};
    switch (eventName) {
      case 'copyProjectAttr':
        params.title = '复制项目属性';
        params.content = CopyprojectattrComponent;
        params.componentparamss = { params: { appId1: this.appId, appId2: this.appId } };
        this.showModal(params);
        break;
      case 'addAttr':
        params.title = '新增项目属性';
        params.content = BgtransfordialogComponent;
        params.componentparamss = { params: { appId1: this.appId, appId2: this.appId } };
        this.showModal(params);
        break;
      case 'selectAttr':
        params.title = '选择属性';
        params.content = ChooseattrdialogComponent;
        params.componentparamss = { param: { appId1: this.appId, appId2: this.appId } };
        this.showModal(params);
        break;
      case 'addRelation':
        params.title = '添加从属关系';
        params.content = AddaffiliationdialogComponent;
        params.componentparamss = { param: { appId1: this.appId, appId2: this.appId } };
        this.showModal(params);
        break;
    }
  }
  /**
 * 页面加载的时候就见下拉选框的数据加载出来
 */
  getTreeSelectData(): void {
    // 获取预算分类下拉框的数据
    this.mainService.getDataSource("BGCLASS", { BUSE: 'Y', BLAST: 'Y', ORDER: "SORDER" }).subscribe(result => {
      if (result.CODE === '0' && result.DATA.length !== 0) {
        this.treeSelectOptions = result.DATA.filter(item => item.SPARENTCLASS !== "" && item.SPARENTCLASS !== null);
      }
    })
  }
  /**
   * 窗口打开函数
   */
  showModal(param: any) {
    this.modal.open({
      title: param.title,
      content: param.content,
      onOk() { },
      onCancel() { },
      width: '60%',
      footer: false,
      componentParams: param.componentParams
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
  }/* 
 *   属性值从属关系返回
 */
  back() {
    this._selectedIndex = 0
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  beforeSave(): boolean {
    return true;
  }
  afterSave(): void {
  }
  beforeDelete(mainObj: any): boolean {
    return true;
  }
  afterDelete(): void {
  }
  beforeEdit(): boolean {
    return true;
  }
  afterEdit(mainObj: any): void {
  }
}
