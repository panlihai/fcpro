import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent, TreeOptions, FctreeComponent, FclistdataComponent } from 'fccomponent';
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
                    <fc-listdata fccontent2 fcAppid="SYSTBVORGCURORG"  (fcEvent)="listdataEvent($event)" [fcOption]="mainService.fclistdataOption" [fcCondition]="condition"></fc-listdata>
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
    //树选中id
    selectedCompanyId: string;
    // 树选中code
    selectedCompanyCode: string;
    // 所有节点数据
    fcNodes: any[] = [{ id: '', name: '正在加载中...' }];
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
        this.initOrgData();
    }
    getDefaultQuery() {

    }
    event(eventName: string, context: any): void {
        switch (eventName) {
            case 'listSetting'://设立
                this.listSetting();
                break;
            case 'listAdjust'://调整
                this.listAdjust();
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
            case 'export'://导出
                this.export(eventName);
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
            case 'focus'://选中节点
                this.selectedTreeId = event.param;
                let focusData = event.param.node.data.DATA;
                this.checkTree(focusData);
                break;
            case 'initialized'://初始化
                if (this.tree.fcTree.treeModel.roots && this.tree.fcTree.treeModel.roots.length !== 0) {
                    let initData = this.tree.fcTree.treeModel.roots[0].data.DATA;
                    if (initData !== undefined) {
                        this.checkTree(initData);
                    }
                } else {
                    this.checkTree(null);
                }
                break;

        }
    }
    listdataEvent(event: FCEVENT) {
        switch (event.eventName) {
            case 'listOneMoveup'://上移
                this.listOneMoveup(event.param);
                break;
            case 'listOneMovedown'://下移
                this.listOneMovedown(event.param);
                break;
            case 'listOneSettop'://置顶
                this.listOneSettop(event.param);
                break;
            case 'listOneSetDown'://置底
                this.listOneSetDown(event.param);
                break;
        }
    }
    /**
     * 初始化组织机构数据
     */
    initOrgData() {
        this.mainService.getCompanyDim().subscribe(result => {
            if (result.CODE === '0') {
                let dimDefaultIsY: any[] = [];
                result.DATA.forEach(item => {
                    if (item.BISDEFAULT === 'Y') {
                        dimDefaultIsY.push(item);
                    }
                });
                //数据库设置一个默认启用，取数据库的，大于一个或者没有设置取返回数据的第一条
                if (dimDefaultIsY.length === 1) {
                    this.companydimAny = dimDefaultIsY[0].SDIM_CODE;
                } else {
                    this.companydimAny = result.DATA[0].SDIM_CODE;;
                }
            }
            //默认维度
            this.mainService.cloneTreeObj(this.companydimAny, this.senDateToString);
        })
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
    /**
     * 选中树节点
     * @param data 
     */
    checkTree(data: any) {
        if (data !== null) {
            let con: any = {
                WHERE: "SPARENT_CODE =" + "'" + data.SCOMPANY_CODE + "'" + ' ' + "AND SDIM_CODE=" + "'" + this.companydimAny + "'" + ' ' + " and SBEGIN_DATE <= " + this.senDateToString + ' ' + "AND SEND_DATE >=" + this.senDateToString,
                ORDER: 'NDISPLAYNO'
            }
            this.condition = JSON.stringify(con);
            this.selectedCompanyCode = data.SCOMPANY_CODE;
            this.listWnd.fcReflesh();
        } else {
            let con: any = {
                WHERE: "SPARENT_CODE =" + " " + "'" + "-" + "'"
            }
            this.condition = JSON.stringify(con);
            this.listWnd.fcReflesh();
        }
    }
    /**
     * 设立单位
     */
    listSetting() {
        if (this.selectedCompanyCode !== undefined && this.selectedCompanyCode !== '') {
            this.router.navigate(["/" + environment.pid.toLowerCase() + "/syscompanyAdd"], {
                queryParams: {
                    refresh: 'Y', MENUID: 'SYSCOMPANY', MENUNAME: '单位设立', MENUTYPE: 'APP',
                    ROUTER: 'syscompanyAdd', PID: environment.pid, APPID: 'SYSCOMPANY',
                    parentCode: this.selectedCompanyCode, dimCode: this.companydimAny
                }
            })
        } else {
            this.messageService.error("请选择父节点！");
        }
    }
    /**
     * 调整单位
     */
    listAdjust() {
        if (this.selectedObject && this.selectedObject !== null) {
            if (this.selectedObject.ID !== undefined && this.selectedObject.ID !== '') {
                this.router.navigate(["/" + environment.pid.toLowerCase() + "/syscompanyModify"], {
                    queryParams: {
                        refresh: 'Y', MENUID: 'SYSCOMPANY', MENUNAME: '单位调整', MENUTYPE: 'APP',
                        ROUTER: 'syscompanyModify', PID: environment.pid, APPID: 'SYSCOMPANY', ID: this.selectedObject.ID,
                        parentCode: this.selectedCompanyCode, dimCode: this.companydimAny
                    }
                })
            }
        } else {
            this.messageService.error("必须选择一条数据！");
        }
    }
    /**
     * 上移
     */
    listOneMoveup(event: FCEVENT) {
        let obj: any = event;
        if (obj.ID && obj.ID !== '') {
            //选中数据序号
            let thisNum: number = obj.NDISPLAYNO;
            // thisNum = obj.NDISPLAYNO;
            let listData = this.listWnd.fcRowData;
            //选中数据
            let thisData: any = {};
            //上一条数据
            let preData: any = {};
            if (obj.RID === listData[0].RID) {
                this.messageService.error("已到顶部,不能上移！");
            } else if (obj.RID !== listData[0].RID) {
                listData.forEach(item => {
                    if (obj.RID === item.RID) {
                        thisData = item;
                        preData = listData[item.RN - 2];
                        thisData.NDISPLAYNO = preData.NDISPLAYNO;
                        preData.NDISPLAYNO = thisNum;
                        this.mainService.updateOrgRelationData(thisData.RID, preData.RID, preData.NDISPLAYNO, thisData.NDISPLAYNO).subscribe(result => {
                            if (result[0].CODE === '0') {
                                //刷新列表
                                this.listWnd.fcReflesh();
                            } else {
                                this.messageService.error("排序失败");
                            }
                        })
                    }
                });
            }
        }
    }
    /**
     * 下移
     */
    listOneMovedown(event: FCEVENT) {
        let obj: any = event;
        if (obj.ID && obj.ID !== '') {
            //选中数据序号
            let thisNum: number = obj.NDISPLAYNO;
            let listData = this.listWnd.fcRowData;
            //选中数据
            let thisData: any = {};
            //下一条数据
            let nextData: any = {};
            if (obj.RID === listData[listData.length - 1].RID) {
                this.messageService.error("已到底部,不能下移！");
            } else if (obj.RID !== listData[listData.length - 1].RID) {
                listData.forEach(item => {
                    if (obj.RID === item.RID) {
                        thisData = item;
                        nextData = listData[item.RN];
                        thisData.NDISPLAYNO = nextData.NDISPLAYNO;
                        nextData.NDISPLAYNO = thisNum;
                        this.mainService.updateOrgRelationData(thisData.RID, nextData.RID, nextData.NDISPLAYNO, thisData.NDISPLAYNO).subscribe(result => {
                            if (result[0].CODE === '0') {
                                //刷新列表
                                this.listWnd.fcReflesh();
                            } else {
                                this.messageService.error("排序失败");
                            }
                        })
                    }
                });
            }
        }
    }
    /**
     * 置顶
     */
    listOneSettop(event: FCEVENT) {
        let obj: any = event;
        if (obj.ID && obj.ID !== '') {
            //选中数据序号
            let thisNum: number = obj.NDISPLAYNO;
            let listData = this.listWnd.fcRowData;
            //选中数据
            let thisData: any = {};
            //第一条数据
            let firstData: any = {};
            if (obj.RID === listData[0].RID) {
                this.messageService.error("已到顶部,不需要置顶啦！");
            } else if (obj.RID !== listData[0].RID) {
                listData.forEach(item => {
                    if (obj.RID === item.RID) {
                        thisData = item;
                        firstData = listData[0];
                        thisData.NDISPLAYNO = firstData.NDISPLAYNO;
                        firstData.NDISPLAYNO = thisNum;
                        this.mainService.updateOrgRelationData(thisData.RID, firstData.RID, firstData.NDISPLAYNO, thisData.NDISPLAYNO).subscribe(result => {
                            if (result[0].CODE === '0') {
                                //刷新列表
                                this.listWnd.fcReflesh();
                            } else {
                                this.messageService.error("排序失败");
                            }
                        })
                    }
                });
            }
        }
    }
    /**
     * 置底
     */
    listOneSetDown(event: FCEVENT) {
        let obj: any = event;
        if (obj.ID && obj.ID !== '') {
            //选中数据序号
            let thisNum: number = obj.NDISPLAYNO;
            let listData = this.listWnd.fcRowData;
            //选中数据
            let thisData: any = {};
            //最后一条数据
            let lastData: any = {};
            if (obj.RID === listData[listData.length - 1].RID) {
                this.messageService.error("已到底部,不需要置底啦！");
            } else if (obj.RID !== listData[listData.length - 1].RID) {
                listData.forEach(item => {
                    if (obj.RID === item.RID) {
                        thisData = item;
                        lastData = listData[listData.length - 1];
                        thisData.NDISPLAYNO = lastData.NDISPLAYNO;
                        lastData.NDISPLAYNO = thisNum;
                        this.mainService.updateOrgRelationData(thisData.RID, lastData.RID, lastData.NDISPLAYNO, thisData.NDISPLAYNO).subscribe(result => {
                            if (result[0].CODE === '0') {
                                //刷新列表
                                this.listWnd.fcReflesh();
                            } else {
                                this.messageService.error("排序失败");
                            }
                        })
                    }
                });
            }
        }
    }
}
