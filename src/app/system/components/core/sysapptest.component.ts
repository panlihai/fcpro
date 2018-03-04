import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { ParentComponent } from 'fccomponent';
import { ParentComponent } from '../parent.component';
import { SysappService } from '../../services/sysapp.service';
import { SysapptestService } from '../../services/sysapptest.service';
import { TreeOptions, FclistdataComponent, FcformConfig } from 'fccomponent';
import { FCEVENT } from 'fccomponent/fc';
@Component({
    selector: 'sysapptest',
    templateUrl: './sysapptest.component.html',
    styles: [`
  
  `]
})
export class SysapptestComponent extends ParentComponent {
    @ViewChild("listdata")
    listdata:FclistdataComponent;
    condition:string;
    testAppid:string="SYSAPPTEST";
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
    formConfig: FcformConfig = { fcTitle: "元数据编辑" };
    constructor(public mainService: SysapptestService,
        public router: Router,
        public activeRoute: ActivatedRoute) {
        super(mainService, router, activeRoute);
    }
    init(): void {
    }
    addNew(mainObj: any) {
    }
    getDefaultQuery() {
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
    event(eventName: string, context: any): void {
        switch (eventName) {
            case 'modifyFields':
                this.mainService.modifyAppFieldsName();
        }
    }

    treeEvent(e: FCEVENT): void {
        switch (e.eventName) {
            case 'check':
            // this.condition="parent='"+e.param.APPID+"'";
            this.testAppid ="SYSMENU";
            //this.mainService.doRefresh(this.listdata);
            break;
            default:
                this.logService.debug(e);

        }
    }

}
