import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent, TreeOptions, FctreeComponent } from 'fccomponent';
import { SyscompanyService } from '../../services/syscompany.service';
import { FCEVENT } from 'fccomponent/fc';
import { ProvidersService } from 'fccore';
import { environment } from '../../../../environments/environment';
import { companysortdialogComponent } from './dialog/companysortdialog.component';
import { companytransferdialogComponent } from './dialog/companytransferdialog.component';
import { NzModalService } from 'ng-zorro-antd';
import { stringify } from '@angular/core/src/util';
@Component({
    selector: 'syscompany',
    template: `
    <fc-layoutpanel class="templatetreelists" [fcFull]="true">
        <fc-layoutrow fcSpan="50" fccontent>
            <fc-tlblist [fcAppid]="appId" (fcEvent)="tlblistEvent($event)" fccontent1></fc-tlblist>
            <fc-layoutcol fcSpans="2,7" fccontent2 class="tree-style">
                <fc-layoutrow fcSpan="60" fccontent1>
                    <fc-date fcLabel="失效日期" [fcShowLabel]="false" fcFormat="YYYYMMDD"
                        [(ngModel)]="sendDate" (ngModelChange)="changeSendDate($event)" name="SEND_DATE" fccontent1 class="treesearch-width"></fc-date>
                    <fc-any fcLabel="维度" [fcShowLabel]="false" fcAppid="SYSCOMPANYDIM" fcFieldCode="SDIM_NAME" 
                        [(ngModel)]="companydimAny" (ngModelChange)="changeCompanydim($event)" fcLabelCode="SDIM_NAME" fcValueCode="SDIM_CODE" name="SDIM_NAME" fccontent1 class="treesearch-width"></fc-any>
                    <fc-tree fccontent2 #tree [fcOption]="mainService.companyTreeOptions" (fcEvent)="treeEvent($event);"></fc-tree>
                </fc-layoutrow>
                <fc-layoutrow fccontent2 fcSpan="0">
                    <fc-listdata fccontent2 fcAppid="SYSTBVORGCURORG" (fcEvent)="listdataEvent($event)" [fcOption]="mainService.fclistdataOption" [fcCondition]="condition"></fc-listdata>
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
    //失效时间
    sendDate: any;
    //数据库存的失效时间格式
    senDateToString: string;
    @ViewChild('tree')
    tree: FctreeComponent;
    selectedCompanyId: string;
    // 所有节点数据
    fcNodes: any[] = [{ id: '', name: '正在加载中...' }];
    //树条件
    treeCondition: string;
    //树选中节点
    selectedTreeId: string;
    constructor(public mainService: SyscompanyService,
        public router: Router,
        public activeRoute: ActivatedRoute,
        private _providers: ProvidersService,
        private modal: NzModalService) {
        super(mainService, router, activeRoute);
    }
    init(): void {
        //失效日期 
        this.sendDate = this.commonService.getDateByTimetamp(this.commonService.getTimestamp());
        this.senDateToString = this.commonService.dateFormat(this.sendDate, 'yyyyMMdd');
        this.treeCondition = '';
        this.mainService.getOrgData().subscribe(result => {
            if (result.CODE === '0') {
                result.DATA.forEach(item => {
                    //默认维度
                    if (item.BISDEFAULT === 'Y') {
                        this.companydimAny = item.SDIM_CODE;
                        this.mainService.cloneTreeObj(this.companydimAny, this.senDateToString);
                    }
                });
            }
        })
    }
    getDefaultQuery() {

    }

    /**
     * 选择不同的维度切换树结构
     * @param event 
     */
    changeCompanydim(event: any) {
        this.companydimAny = event.SDIM_CODE;
        this.mainService.cloneTreeObj(this.companydimAny, this.senDateToString);
        this.tree.fcNodes = undefined;
    }
    /**
     * 选择时间切换树结构
     */
    changeSendDate(event: any) {
        this.senDateToString = this.commonService.dateFormat(this.sendDate, 'yyyyMMdd');
        this.mainService.cloneTreeObj(this.companydimAny, this.senDateToString);
        this.tree.fcNodes = undefined;
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
                if (this.selectedObject && this.selectedObject !== null) {
                    if (this.selectedObject.ID !== undefined && this.selectedObject.ID !== '') {
                        this._providers.commonService.event('selectedMenu', {
                            ID: this.selectedObject.ID, MENUID: 'SYSCOMPANYTEST', ROUTER: 'syscompanyModify',
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
                this.modal.open({
                    title: '转移单位',
                    content: companytransferdialogComponent,
                    onOk() { },
                    onCancel() { },
                    footer: false,
                    componentParams: {
                        options: {}
                    }
                }).subscribe(obj => {

                });
                break;
            case 'listSort'://排序下级
                this.modal.open({
                    title: '单位排序',
                    content: companysortdialogComponent,
                    onOk() { },
                    onCancel() { },
                    footer: false,
                    componentParams: {
                        options: {}
                    }
                }).subscribe(obj => {

                });
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
                let data = event.param.node.data;
                this.condition = '{"ID":' + data.id + '}';
                this.listWnd.fcReflesh();
                break;
            case 'select'://选中节点
                this.selectedTreeId = event.param;
                break;
            case 'initialized'://初始化
                break;

        }
    }
}
