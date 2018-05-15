import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { TreeOptions, FctreeComponent } from 'fccomponent';
import { FCEVENT } from 'fccomponent/fc';
@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styles: [``]
})
export class TreeComponent extends ComponentParent {
  //树事件view
  treeeview: string = `
  <fc-tree [(ngModel)]="treeSelectObj" [fcOption]="treeOptions" (fcEvent)=" treeEvent($event);"></fc-tree>
  `
   // 基本basicjs
   basicjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'tree',
     templateUrl: './tree.component.html',
     styleUrl:'./tree.component.css'
   })
   export class DateComponent{
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
    }
   `
   // 树事件
   treejs : string = `
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
   treeEvent(fc:FCEVENT){
    switch (event.eventName) {
      case 'click':
      this.mainService.providers.msgService.message("这是点击事件");
        break;
    }
   }
   ` 
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
  constructor(public mainService: ComponentService) {
    super('FCTREE', mainService);
  }
  treeFlesh(){

  }
  treeEvent(fc:FCEVENT){
        
  }
}