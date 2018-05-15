import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'parentdetailcls',
  templateUrl: './parentdetailcls.component.html',
  styles: [`
  
  `]
})
export class ParentdetailclsComponent extends ComponentParent {
  //代码
  code:string=`
  import { Router, ActivatedRoute } from "@angular/router";
  import { ParentService, Sysappfields, Sysappbuttons } from "fccore";
  import { FCEVENT } from "./fc";
  import { GrandComponent } from "./grand.component";
  export declare abstract class ParentDetailComponent extends GrandComponent {
      mainService: ParentService;
      router: Router;
      activetedRoute: ActivatedRoute;
      selectedIndex: number;
      hasNext: boolean;
      hasPrev: boolean;
      mainObjs: any[];
      mainObj: any;
      mainFields: Sysappfields[];
      mainButtons: Sysappbuttons[];
      objStatus: number;
      constructor(mainService: ParentService, router: Router, activetedRoute: ActivatedRoute);
      /**
       * 子类初始化
       */
      abstract init(): void;
      /**
       * 初始化当前对象内容,
       */
      _init(): void;
      /**
       * 校验是否存在上一条下一条
       */
      checkHasOne(): void;
      /**
        * 上一条
        * @param action
        */
      prev(): void;
      /**
        * 下一条
        * @param action
        */
      next(): void;
      /** 表单返回
      * @param action 事件名称
      */
      cardBack(action: string): void;
      /**
      * 表单工具栏事件
      * @param event 事件
      */
      tlbformEvent(event: FCEVENT): void;
      /**
       * 根据列表处理事件
       * @param action 事件名称
       */
      adformEvent(event: FCEVENT): void;
      /**
       * 跳转至新增页面
       */
      navAdd(): void;
      /**
       * 跳转至详情页面
       */
      navEdit(): void;
      /**
      * 跳转至列表页面
      */
      navList(reflash?: boolean): void;
}

  `;
  constructor(public mainService: ComponentService) {
    super('', mainService);
  }
}