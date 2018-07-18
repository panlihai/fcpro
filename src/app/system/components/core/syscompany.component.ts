import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent, TreeOptions, FctreeComponent, FclistdataComponent } from 'fccomponent';
import { SyscompanyService } from '../../services/syscompany.service';
import { FCEVENT } from 'fccomponent/fc';
import { ProvidersService } from 'fccore';
import { environment } from '../../../../environments/environment';
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
                <fc-layoutrow fcSpan="70" fccontent1>
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
    :host ::ng-deep .treesearch-width .fc-date-default{
        width:100%;
    }
  `]
})
export class SyscompanyComponent extends ParentlistComponent {
    //单位维度
    companydimAny: string;
    //失效时间
    sendDate: any;
    //数据库存的失效时间格式
    senDateToString: string;
    //树组件
    @ViewChild('tree')
    tree: FctreeComponent;
    //树选中id
    selectedCompanyId: string;
    // 树选中code
    selectedCompanyCode: string;
    // 所有节点数据
    fcNodes: any[] = [{ id: '', name: '正在加载中...' }];
    //树选中节点
    selectedTreeObj: any;
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
        //把日期格式化为字符串
        this.senDateToString = this.commonService.dateFormat(this.sendDate, 'yyyyMMdd');
        //防止列表闪烁,列表初始化时默认为空数据
        let con: any = {
            WHERE: "SPARENT_CODE =" + "'" + "-" + "'"
        }
        this.condition = JSON.stringify(con);
        //初始化树结构和列表
        this.initOrgData();
    }
    getDefaultQuery() {

    }
    event(eventName: string, context: any): void {
        switch (eventName) {
            case 'listSetting':
                //设立单位,把维度,选择树的父节点带入到新增页面中
                this.listSetting();
                break;
            case 'listAdjust':
                //调整,选择树或者列表的单条数据时都能修改，同时选中树和列表时，以列表选中的单条数据优先修改
                this.listAdjust();
                break;
            case 'listRefresh':
                //刷新
                this.listRefresh();
                break;
            case 'listCancel':
                //撤销，把单位的停用标志设置为Y,同时把下级单位的的停用标志也设置为Y
                this.listCancel();
                break;
            case 'listTansfer':
                //转移,可以跨维度的转移，提交转移申请后，需要在单位审批表中审批才能转移
                this.listTansfer();
                break;
            case 'export':
                //导出,选中数据时导出选中的，未选中列表导出全部
                this.export(eventName);
                break;
            case 'listOneMoveup':
                //点击上移，上移一格,如在最顶部，不能继续上移
                this.mainService.listOneMoveup(context.param, this.listWnd.fcRowData);
                this.listWnd.fcReflesh();
                break;
            case 'listOneMovedown':
                //点击下移，下移一格，如在最底部，不能继续下移
                this.mainService.listOneMovedown(context.param, this.listWnd.fcRowData);
                this.listWnd.fcReflesh();
                break;
            case 'listOneSettop':
                //不在最顶部的才置顶
                this.mainService.listOneSettop(context.param, this.listWnd.fcRowData);
                this.listWnd.fcReflesh();
                break;
            case 'listOneSetDown':
                //不在最底部的才能置底
                this.mainService.listOneSetDown(context.param, this.listWnd.fcRowData);
                this.listWnd.fcReflesh();
                break;
        }
    }
    /**
    * 事件处理
    * @param event 树发生的事件
    */
    treeEvent(event: FCEVENT) {
        switch (event.eventName) {
            case 'check':
                //选择多选框时
                break;
            case 'moveNode'://离开节点
            case 'focus':
                //选中树节点的数据
                //选中树节点后关联列表,再次选中置空树节点
                this.selectedTreeObj = event.param.node.data.DATA;
                this.checkTree(this.selectedTreeObj);
                break;
            case 'initialized'://初始化
                if (this.tree.fcTree.treeModel.roots && this.tree.fcTree.treeModel.roots.length !== 0) {
                    //如果树结构不为空时,初始化树结构和列表
                    let initData = this.tree.fcTree.treeModel.roots[0].data.DATA;
                    if (initData !== undefined) {
                        this.checkTree(initData);
                    }
                } else {
                    //如数结构数据为空时，置空列表数据
                    this.checkTree(null);
                }
                break;

        }
    }
    /**
     * 初始化组织机构数据
     */
    initOrgData() {
        //请求单位维度的数据
        this.mainService.getCompanyDim().subscribe(result => {
            if (result.CODE === '0') {
                //默认维度设置为Y的
                let dimDefaultIsY: any[] = [];
                //循环单位维度，设置为Y的添加到数据中
                result.DATA.forEach(item => {
                    if (item.BISDEFAULT === 'Y') {
                        dimDefaultIsY.push(item);
                        //只有一个默认维度的，取设置为Y的维度
                        if (dimDefaultIsY.length === 1) {
                            this.companydimAny = dimDefaultIsY[0].SDIM_CODE;
                        } else {
                            // 维度表里面没有默认维度或者默认维度不只一个的，取维度表的第一条数据作为默认维度
                            this.companydimAny = result.DATA[0].SDIM_CODE;;
                        }
                        //待数据请求成功后，根据默认维度和默认时间加载树和列表
                        this.mainService.cloneTreeObj(this.companydimAny, this.senDateToString);
                    }
                });
            }
        })
    }
    /**
     * 选择不同的维度切换树结构
     * @param event 
     */
    changeCompanydim(event: any) {
        //单位维度
        this.companydimAny = event.SDIM_CODE;
        //克隆树对象
        this.mainService.cloneTreeObj(this.companydimAny, this.senDateToString);
        this.tree.fcNodes = undefined;
        //默认选中第一个树节点
        this.tree.setFirstActive();
    }
    /**
     * 选择时间切换树结构
     */
    changeSendDate(event: any) {
        //截至日期转为字符串
        this.senDateToString = this.commonService.dateFormat(this.sendDate, 'yyyyMMdd');
        //克隆树对象刷新树
        this.mainService.cloneTreeObj(this.companydimAny, this.senDateToString);
        //设置树的fcNodes为undefined数节点才能重新请求数据进行刷新
        this.tree.fcNodes = undefined;
        //刷新数结构后设置第一个节点为激活状态
        this.tree.setFirstActive();
    }
    /**
     * 选中树节点
     * @param data 
     */
    checkTree(data: any) {
        //选中树节点的单位为右侧列表的父节点，父节点、维度、截止时间为右侧列表的限制条件，时间范围在生效日期和截止日期之间
        if (data !== null) {
            let con: any = {
                WHERE: "SPARENT_CODE =" + "'" + data.SCOMPANY_CODE + "'" + ' ' + "AND SDIM_CODE=" + "'" + this.companydimAny + "'" + ' ' + " and SBEGIN_DATE <= " + this.senDateToString + ' ' + "AND SEND_DATE >=" + this.senDateToString,
                ORDER: 'NDISPLAYNO'
            }
            this.condition = JSON.stringify(con);
            //如果新增单位时，需要把选中的单位作为新增页面的父节点
            this.selectedCompanyCode = data.SCOMPANY_CODE;
            this.listWnd.fcReflesh();
        } else {
            //未选中树节点时，列表数据设置为空
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
            //树节点选中的当前单位为新增页面的父节点,新增页面根据带入的父节点、维度进行新增
            let param: any = {
                refresh: 'Y',
                parentCode: this.selectedCompanyCode, dimCode: this.companydimAny
            }
            this.navRouter(this.getRouteUrl('Add'), param);
        } else {
            //未选择数据时，提示用户
            this.messageService.error("请选择父节点！");
        }
    }
    /**
     * 调整单位
     */
    listAdjust() {
        let companyData: any[];
        //请求单位数据
        this.mainService.findWithQuery({}).subscribe(result => {
            if (result.CODE === '0') {
                //单位数据
                companyData = result.DATA;
                //从列表中选中
                if (this.selectedObject && this.selectedObject !== null) {
                    if (this.selectedObject.ID !== undefined && this.selectedObject.ID !== '') {
                        //把列表数据放入缓存
                        this.cacheService.setS(this.appId + "DATA", this.commonService.cloneArray(companyData));
                        //列表选中id传入编辑页面
                        this.navRouter(this.getRouteUrl('Modify'), { ID: this.selectedObject.ID, RID: this.selectedObject.RID, refresh: 'Y', parentCode: this.selectedCompanyCode, dimCode: this.companydimAny });
                    }
                } else if (this.selectedTreeObj && this.selectedTreeObj !== null) {
                    //从树结构中选中
                    if (this.selectedTreeObj.ID !== undefined && this.selectedTreeObj.ID !== '') {
                        //把数据放到缓存,把数据，选中id传到修改页面
                        this.cacheService.setS(this.appId + "DATA", this.commonService.cloneArray(companyData));
                        this.navRouter(this.getRouteUrl('Modify'), { ID: this.selectedTreeObj.ID, RID: this.selectedTreeObj.RID, refresh: 'Y', parentCode: this.selectedCompanyCode, dimCode: this.companydimAny });
                    }
                } else if (this.selectedObjects && this.selectedObjects.length > 1) {
                    // 列表选中不只一条记录时，提示用户
                    this.messageService.error("只能选择一条数据！");
                    // 树结构和列表没有选中数据,提示用户
                } else if (this.selectedObjects === undefined && this.selectedTreeObj === null) {
                    this.messageService.error("必须选择一条数据！");
                }
            }
        })
    }

    /**
     * 刷新
     */
    listRefresh() {

    }
    /**
     * 撤销
     */
    listCancel() {
        this.messageService.confirm('是否确认撤销本单位？', () => {
            if (this.selectedObject && this.selectedObject !== null) {
                this.mainService.cancelCompany(this.selectedObject).subscribe(result => {
                    if (result.CODE === '0') {
                        this.messageService.message("单位撤销成功！");
                    } else {
                        this.messageService.error("单位撤销失败！");
                    }
                })
            } else if (this.selectedObjects.length > 1) {
                this.messageService.error("只能选择一条数据！");
            } else if (this.selectedObjects.length === 0) {
                this.messageService.error("必须选择一条数据！");
            }
        }, () => { });
    }
    /**
     * 转移
     */
    listTansfer() {
        this.modal.open({
            title: '转移单位',
            width: '60%',
            content: companytransferdialogComponent,
            onOk() { },
            onCancel() { },
            footer: false,
            componentParams: {
                options: {}
            }
        }).subscribe(obj => {

        });
    }
}
