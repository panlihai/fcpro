import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent, TreeOptions, FctreeComponent } from 'fccomponent';
import { SyscompanyService } from '../../services/syscompany.service';
import { FCEVENT } from 'fccomponent/fc';
import { ProvidersService } from 'fccore';
import { environment } from '../../../../environments/environment';
@Component({
    selector: 'syscompany',
    template: `
    <fc-layoutpanel class="templatetreelists" [fcFull]="true">
        <fc-layoutrow fcSpan="50" fccontent>
            <fc-tlblist [fcAppid]="appId" (fcEvent)="tlblistEvent($event)" fccontent1></fc-tlblist>
            <fc-layoutcol fcSpans="2,7" fccontent2 class="tree-style">
                <fc-layoutrow fcSpan="35" fccontent1>
                    <fc-any [fcShowLabel]="false" fcAppid="SYSCOMPANYDIM" fcFieldCode="SDIM_NAME" 
                    [(ngModel)]="companydimAny" fcLabelCode="SDIM_NAME" fcValueCode="SDIM_CODE" name="SDIM_NAME" fccontent1 class="treesearch-width"></fc-any>
                    <fc-tree fccontent2 #tree [fcOption]="mainService.companyTreeOptions" [fcNodes]="fcNodes" (fcEvent)="treeEvent($event);"></fc-tree>
                </fc-layoutrow>
                <fc-layoutrow fccontent2 fcSpan="0">
                    <fc-listdata fccontent2 [fcAppid]="appId" [fcOption]="mainService.fclistdataOption" [fcCondition]="condition"></fc-listdata>
                </fc-layoutrow>
            </fc-layoutcol>
        </fc-layoutrow>
    </fc-layoutpanel>
    `,
    styles: [`

  `]
})
export class SyscompanyComponent extends ParentlistComponent {
    //单位维度
    companydimAny: string;
    @ViewChild('tree')
    tree: FctreeComponent;
    selectedCompanyId: string;
    // 所有节点数据
    fcNodes: any[] = [{ id: '0', name: '正在加载中...' }];
    constructor(public mainService: SyscompanyService,
        public router: Router,
        public activeRoute: ActivatedRoute,
        private _providers: ProvidersService) {
        super(mainService, router, activeRoute);
    }
    init(): void {
        // this.fcNodes = this.mainService.getAllMenu();
    }
    getDefaultQuery() {
    }
    event(eventName: string, context: any): void {
        switch (eventName) {
            case 'listSetting'://设立
                this._providers.commonService.event('selectedMenu', {
                    MENUID: 'SYSCOMPANY', ROUTER: 'syscompanyAdd',
                    PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '单位调整', MENUICON: 'fc-icon-bgefficiency'
                });
                break;
            case 'listAdjust'://调整
                this.selectedObject = context.param;
                if (this.selectedObject && this.selectedObject !== null) {
                    if (this.selectedObject.ID !== undefined && this.selectedObject.ID !== '') {
                        this._providers.commonService.event('selectedMenu', {
                            ID: context.param.ID, MENUID: 'SYSCOMPANYTEST', ROUTER: 'syscompanyModify',
                            PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '单位调整', MENUICON: 'fc-icon-bgefficiency'
                        });
                    }
                } else {
                    this.messageService.error("请选择一条数据！");
                }
                break;
            case 'listRefresh'://刷新
                break;
            case 'listCancel'://撤销
                break;
            case 'listTansfer'://转移
                break;
            case 'listSort'://排序下级
                break;
        }
    }
    /**
  * 事件句柄处理
  * @param event 树发生的事件
  */
    treeEvent(event: FCEVENT) {
        switch (event.eventName) {
            case 'check':
                break;
            case 'select':
                break;
        }
    }
}
