import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'parentcls',
  templateUrl: './parentcls.component.html',
  styles: [`
  
  `]
})
export class ParentclsComponent extends ComponentParent {
  //code代码
  code: string = `
  import { QueryList } from "@angular/core";
  import { Router, ActivatedRoute } from "@angular/router";
  import { ParentService, LogService, AppService, CacheService, MessageService, CommonService, ProductService, UserService, Sysappfields, Sysappbuttons, Sysapplinks } from "fccore";
  import { FclistdataComponent } from "./fclist";
  import { FCEVENT } from "./fc";
  export declare abstract class ParentComponent {
      mainService: ParentService;
      router: Router;
      activetedRoute: ActivatedRoute;
      logService: LogService;
      appService: AppService;
      cacheService: CacheService;
      messageService: MessageService;
      commonService: CommonService;
      productService: ProductService;
      userService: UserService;
      routerParam: any;
      userInfo: any;
      condition: string;
      searchObj: any;
      selectedIndex: number;
      appId: string;
      mainObj: any;
      mainApp: any;
      objStatus: number;
      selectedObjects: any[];
      modifyObjs: any;
      orderBy: string;
      mainFields: Sysappfields[];
      mainButtons: Sysappbuttons[];
      mainLinks: Sysapplinks[];
      mainValid: any;
      listWnd: FclistdataComponent;
      childWindow: QueryList<FclistdataComponent>;
      constructor(mainService: ParentService, router: Router, activetedRoute: ActivatedRoute);
      ngOnInit(): void;
      /**
       * 子类初始化
       */
      abstract init(): void;
      /**
       * 子类初始化对象
       */
      abstract addNew(mainObj: any): boolean;
      /**
       * 子类默认调用对象
       */
      query(): void;
      /**
      * 子类初始化对象
      */
      abstract getDefaultQuery(): any;
      reset(): void;
      /**
       * 子类初始化对象
       */
      search(): any;
      /**
       * 初始化当前对象内容
       */
      private initMainiObj();
      /**
       * 初始化校验规则
       */
      initValid(): void;
      /**
       * 初始化查询条件
       */
      private initCondition();
      /**
      * 选中tab页
      * @param selecedIndex 选项卡的索引
      */
      selectedTab(selecedIndex: any): void;
      /**
       * 保存之前的操作
       */
      abstract beforeSave(): boolean;
      /**
       * 保存之后的操作
       */
      abstract afterSave(): void;
      /**
       * 删除之前的操作
       */
      abstract beforeDelete(mainObj: any): boolean;
      /**
       * 删除之后的操作
       */
      abstract afterDelete(): void;
      /**
       * 列表新增
       * @param action
       */
      listAdd(context: any): void;
      /**
       * 列表编辑
       * @param action
       */
      listEdit(context: FCEVENT): void;
      /**
       * 列表编辑
       * @param action
       */
      listEditView(): void;
      /**
       * 编辑之前的操作
       */
      abstract beforeEdit(): boolean;
      /**
       * 编辑之后的操作
       */
      abstract afterEdit(mainObj: any): void;
      /**
            * 删除一条记录
            * @param action
            */
      listOneDelete(context: any): void;
      /**
           * 列表批量删除
           * @param action
           */
      listDelete(context: any): void;
      /**
       * 列表帮助
       * @param action
       */
      listHelp(action: string): void;
      /**
        * 列表导入
        * @param action
        */
      listPrev(): void;
      /**
       * 列表导入
       * @param action
       */
      listNext(): void;
      /**
       * 列表导入
       * @param action
       */
      import(action: string): void;
      /**
       * 列表导出
       * @param action
       */
      export(action: string): void;
      /**
       * 保存新建
       * @param action
       */
      saveNew(action: string): void;
      /**
       * 保存新建
       * @param action
       */
      cardSaveCopy(action: string): void;
      /**
      * 保存
      * @param action 事件名称
      */
      cardSave(action: string): void;
      /**
       * 保存返回
       * @param action 事件名称
       */
      cardSaveBack(action: string): void;
      /**
           * 修改返回
           * @param action 事件名称
           */
      cardEdit(action: string): void;
      /**
       * 修改返回
       * @param action 事件名称
       */
      cardEditBack(action: string): void;
      /**
       * 表单返回
       * @param action 事件名称
       */
      cardBack(action: string): void;
      /**
       * 根据工具栏处理事件
       * @param action 事件名称
       */
      tlblistEvent(context: FCEVENT): void;
      /**
       * 表单工具栏事件
       * @param context 事件
       */
      tlbformEvent(context: FCEVENT): void;
      /**
       * 根据列表处理事件
       * @param action 事件名称
       */
      listdataEvent(context: any): void;
      /**
       * 验证
       */
      validator(): boolean;
      /**
       * 根据列表处理事件
       * @param action 事件名称
       */
      adformEvent(context: FCEVENT): void;
      /**
       * 查询事件处理
       * @param event 查询事件参数
       */
      searchlistEvent(event: FCEVENT): void;
      /**
       * 自定义事件名称
       * @param eventName 事件名称
       * @param context 上下午环境
       */
      abstract event(eventName: string, context: any): void;
      /**
       * 根据字段名称获取字典
       * @param fieldCode 字段名称
       */
      getDicByFieldcode(fieldCode: string): any[];
      /**
       * 根据字典编码获取字典
       * @param fieldCode 字段名称
       */
      getDicByDiccode(dicCode: string): any[];
      /**
       * 获取是否弹窗
       */
      confirm(content: string, ok: Function, cancel: Function): void;
  }
  `;
  constructor(public mainService: ComponentService) {
    super('', mainService);
  }
}