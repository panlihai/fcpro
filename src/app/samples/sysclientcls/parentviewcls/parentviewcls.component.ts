import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'parentviewcls',
  templateUrl: './parentviewcls.component.html',
  styles: [`
  
  `]
})
export class ParentviewclsComponent extends ComponentParent {
    //代码
    code:string=`
    import { Router, ActivatedRoute } from "@angular/router";
    import { ParentService, Sysappfields, Sysappbuttons } from "fccore";
    import { FCEVENT } from "./fc";
    import { GrandComponent } from "./grand.component";
    export declare abstract class ParentEditComponent extends GrandComponent {
        mainService: ParentService;
        router: Router;
        activetedRoute: ActivatedRoute;
        selectedIndex: number;
        hasNext: boolean;
        hasPrev: boolean;
        mainObjs: any[];
        getMainObjWay: number;
        mainObj: any;
        mainFields: Sysappfields[];
        mainButtons: Sysappbuttons[];
        objStatus: number;
        mainValid: any;
        constructor(mainService: ParentService, router: Router, activetedRoute: ActivatedRoute);
        /**
         * 初始化当前对象内容,
         */
        _init(): void;
        /**
         * 初始化校验规则
         */
        initValid(): void;
        /**
         * 子类初始化
         */
        abstract init(): void;
        /**
         * 子类初始化对象
         */
        abstract addNew(mainObj: any): boolean;
        /**
         * 保存之前的操作
         */
        beforeSave(): boolean;
        /**
         * 保存之后的操作
         */
        afterSave(): void;
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
        /**
         * 保存新建
         * @param action
         */
        saveNew(action: string): void;
        /**
         * 保存复制
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
         * 表单返回
         * @param action 事件名称
         */
        cardBack(action: string): void;
        /**
         * 表单工具栏事件
         * @param event 事件
         */
        tlbformEvent(event: FCEVENT): void;
        /**
         * 验证
         */
        validator(): boolean;
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
        navDetail(): void;
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