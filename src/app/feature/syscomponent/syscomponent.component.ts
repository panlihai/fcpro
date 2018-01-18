/* 预算分类 List */
import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { TreeNode, TREE_ACTIONS, KEYS, IActionMapping, TreeModel, TreeComponent } from 'angular-tree-component';
import { Router } from '@angular/router';
import { SyscomponentService } from './syscomponent.service';
import { TreeOptions, FctreeComponent } from 'fccomponent/fcbasic';
import { FcformConfig } from 'fccomponent/fcad';
import { MenuOptions } from 'fccomponent/fcnav';
@Component({
  selector: 'syscomponent',
  templateUrl: './syscomponent.component.html',
  styleUrls: ['./syscomponent.component.css']
})
export class SyscomponentComponent {
  pageList: any[];
  tabs = [
    { name: '基本组件', content: '' },
    { name: '复合组件', content: '' },
    { name: '元数据', content: '' },
    { name: '数据字典', content: '' },
    { name: '参照字典', content: '' }
  ];
  now = new Date();
  content: string = '文本内容';
  long: number = 99999;
  double: number = 99.99;
  radioValue: string = 'a';
  checkValue: string = 'a';
  radioOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  radioOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  checkOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  checkOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  comboValue: string = 'a';
  comboOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  comboOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  chosenValue: string = 'a';
  chosenOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  chosenOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  anyValue: any = { "label": "A", "value": "a", "disabled": false };
  anyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  anyOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  manyValue: any[] = [{ "label": "A", "value": "a", "disabled": false }];
  manyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  manyOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  treeSelectObj: any = {};
  treeOptions: TreeOptions = {
    //元数据id
    fcAppid: "SYSMENU",//元数据id
    //树结构节点显示内容
    fcLabel: ':{MENUNAME}::{MENUID}',//支持:{参数名称}
    // 关联父节点字段名称
    fcParentCode: 'PARENT',
    // 当前节点字段名称
    fcChildCode: 'MENUID',
    // 叶子节点字段名称
    fcLeafCode: 'HASCHILD',
    // 根节点条件
    fcTopWhere: "PARENT is null or PARENT=''",
    // 展开条件
    fcExpWhere: "PARENT=':{MENUID}'",
    // 排序字段
    fcOrderby: "",
    // 模式 false为单选，true为多选
    fcMode: true,
    // 展开子节点
    fcOpenChild: false,
    // 是否显示线条
    fcShowLine: true,
    //是否可拖拽
    fcAllowDrag: true
  };
  treeInited($event: any) {
    alert($event.eventName);
  }
  treeCheck($event: any) {
    alert($event.eventName);
  }
  treeFocus($event: any) {
    alert($event.eventName);
  }
  treeBlur($event: any) {
    alert($event.eventName);
  }
  treeDraged($event: any) {
    alert($event.eventName);
  }
  @ViewChild('tree')
  tree:FctreeComponent;
  treeFlesh(){
    this.tree.ngOnChanges();
  }
  formConfig: FcformConfig = { fcTitle: "元数据编辑" };


  menuSelectObj: any = {};
  menuOptions: MenuOptions = {
    //元数据id
    fcAppid: "SYSMENU",//元数据id
    //树结构节点显示内容
    fcLabelCode: 'MENUNAME',//支持:{参数名称}
    // 关联父节点字段名称
    fcParentCode: 'PARENT',
    // 当前节点字段名称
    fcChildCode: 'MENUID',
    // 根节点条件
    fcParentValue: "",
    // 展开条件
    fcWhere: "PID='SYSTEM'",
    // 排序字段
    fcOrderby: "",    
    // 展开子节点
    fcOpenChild: false
  };
  constructor(public mainService: SyscomponentService, public router: Router) {
    // super(mainService, router);
  }
  init() {
    this.mainService.findWithQuery({})
      .subscribe(result => {
        if (result.CODE === '0') {
          this.pageList = result.DATA;
        }
      });
  }
  doAct() {
  }
}
