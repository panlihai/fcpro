import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'parentlistcls',
  templateUrl: './parentlistcls.component.html',
  styles: [`
  
  `]
})
export class ParentlistclsComponent extends ComponentParent {
    //代码
    code:string=`
    import { Router, ActivatedRoute } from "@angular/router";
    import { ParentService, Sysappfields, Sysappbuttons } from "fccore";
    import { FclistdataComponent } from "./fclist";
    import { FCEVENT } from "./fc";
    import { GrandComponent } from "./grand.component";
    export declare abstract class ParentlistComponent extends GrandComponent {
        mainService: ParentService;
        router: Router;
        activetedRoute: ActivatedRoute;
        modifyObjs: any;
        condition: string;
        searchObj: any;
        selectedObject: any;
        selectedObjects: any[];
        orderBy: string;
        mainFields: Sysappfields[];
        mainToolbar: Sysappbuttons[];
        mainListButtons: Sysappbuttons[];
        listWnd: FclistdataComponent;
        constructor(mainService: ParentService, router: Router, activetedRoute: ActivatedRoute);
        /**
         * 初始化条件
         */
        private _initCondition();
        /**
         * 初始化当前对象内容
         */
        _init(): void;
        /**
         * 子类初始化
         */
        abstract init(): void;
        /**
         * 子类默认调用对象
         */
        query(): void;
        /**
        * 获取默认的查询条件
        */
        abstract getDefaultQuery(): any;
        /**
         * 查询重置
         **/
        reset(): void;
        /**
         * 获取查询条件内容
         */
        search(): any;
        /**
         * 删除之前的操作
         */
        beforeDelete(mainObj: any): boolean;
        /**
         * 删除之后的操作
         */
        afterDelete(): void;
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
         * 编辑之前的操作
         */
        beforeEdit(): boolean;
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
        import(action: string): void;
        /**
         * 列表导出
         * @param action
         */
        export(action: string): void;
        /**
         * 列表工具栏处理事件
         * @param event 事件名称
         */
        tlblistEvent(event: FCEVENT): void;
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
         * 跳转至新增页面
         */
        navAdd(): void;
        /**
         * 跳转至修改页面
         */
        navModify(): void;
        /**
         * 跳转至详情页面
         */
        navDetail(): void;
        /**
        * 根据列表处理事件
        * @param action 事件名称
        */
        listdataEvent(event: FCEVENT): void;
    }    
    `;
  constructor(public mainService: ComponentService) {
    super('', mainService);
  }
}