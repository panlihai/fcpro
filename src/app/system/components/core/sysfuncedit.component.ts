import { Component, ComponentRef, ElementRef, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { ParentEditComponent, FctextComponent } from 'fccomponent';
import { SysserviceService } from '../../services/sysservice.service';
import { DialogCardListComponent, DialogCardListArgs } from './dialog/dialogcardlist.component';
import { Renderer3, ProceduralRenderer3 } from '@angular/core/src/render3/renderer';
import { SysfuncService } from '../../services/sysfunc.service';
@Component({
    selector: 'sysfuncedit',
    templateUrl: 'sysfuncedit.component.html',
    styles: [`
    .sys-card-btn{
        width:50%;
      }
      :host ::ng-deep .fc-layoutpanel {
          padding:10px;
      }
      .place-div{
          height:42px;
      }
      .last-btn{
        position: relative;
        right: 95%;
        padding: 3%;
      }
            `],
})
export class SysfunceditComponent extends ParentEditComponent {
    productName: any;
    pidOption: any;
    sysViews: any;
    sysBtns: any;
    staticMainObj: any = {};
    mainObj: any = {};
    constructor(public mainService: SysfuncService,
        public router: Router,
        public activeRoute: ActivatedRoute,
    ) {
        super(mainService, router, activeRoute);
    }

    /**
     * 新增之前执行的函数
     * @param mainObj 
     */
    addNew(mainObj: any): boolean {
        return true;
    }
    /**
     * 组件初始化执行函数
     */
    init(): void {
        this.getPidOption();
        this.handleRouterParam();
    }
    getDefaultObj() {
        this.mainObj = this.mainService.getDefaultObj();
    }
    /**
     * html事件收集及派发函数
     * @param eventName 
     * @param param 
     */
    event(eventName: string, param?: any): void {
        event.stopPropagation();
        let dialogCardListArgs: DialogCardListArgs = { appId: null, configInterface: { title: null } };
        dialogCardListArgs.methodIndex = eventName;
        if (param instanceof FctextComponent) dialogCardListArgs.textComponent = param;
        switch (eventName) {
            case 'DEFAULTAPPID':
                this.showModal(dialogCardListArgs);
                break;
            case 'editView':
                this.editView(param);
                break;
            case 'editBtn':
                this.editBtn(param);
                break;
        }
    }
    /**
     * 初始化产品名称的自定义下拉选项内容
     */
    getPidOption() {
        this.mainService.getAllProduct().subscribe(res => {
            if (res.P_LISTVALUE) {
                this.pidOption = [];
                res.P_LISTVALUE.forEach(el => {
                    let option = { label: el.PNAME, value: el.PID, disabled: false };
                    this.pidOption.push(option);
                });
            }
            else this.messageService.error("在取出产品名称相关数据时出错");
        })
    }
    /** YM
     * 处理路由传参的情况
     * @param pid 
     */
    handleRouterParam() {
        if (this.routerParam.ID) {
            this.mainService.findWithQuery({ WHERE: `ID = '${this.routerParam.ID}'` }).subscribe(res => {
                if (res.CODE === '0' && res.DATA.length !== 0) {
                    for (let attr in res.DATA[0]) {
                        this.mainObj[attr] = res.DATA[0][attr];
                    }
                    for (let attr in this.mainObj) {
                        this.staticMainObj[attr] = this.mainObj[attr];
                    }
                    this.getSysViews(this.mainObj.SERVICEID);
                    this.getsysBtns(this.mainObj.SERVICEID);
                } else {
                    this.messageService.error('基本信息获取失败');
                }
            })
        }
    }
    /**
     * 获取服务-视图数据
     * @param serviceId 
     */
    getSysViews(id) {
        this.mainService.getSysViews(id).subscribe(res => {
            if (res.CODE === '0') {
                this.sysViews = res.DATA;
            } else {
                this.messageService.error('视图数据获取失败');
            }
        });
    }
    /**
     * 获取功能-按钮事件数据
     * @param serviceId 
     */
    getsysBtns(id) {
        this.mainService.getsysBtns(id).subscribe(res => {
            if (res.CODE === '0') {
                this.sysBtns = res.DATA;
            } else {
                this.messageService.error('按钮事件数据获取失败');
            }
        });
    }
    /**
     * 实现继承与父类的beforeSave函数，对cardSave函数进行功能扩展;
     */
    beforeSave() {
        // this.mainObj = this.mainService.beforeSave(this.mainObj);
        return true;
    }
    /**
     * 实现继承与父类的afterSave函数，对cardSave函数进行功能扩展;
     */
    afterSave() {
        this.mainService.findWithQuery({ WHERE: `FUNCID = '${this.mainObj.FUNCID}'` }).subscribe(res => {
            if (res.CODE === '0') {
                this.navRouter(this.getRouteUrl('Edit'), { ID: res.DATA[0].ID });
            }
        });
    }
    /** YM
    * 新增产品,跳转到新增产品页面
    */
    editView(param?: any) {
        this.navRouter(this.mainService.getRouteUrl(this.mainService.moduleId, 'SYSVIEW', 'Edit'), { ID: param.ID });
    }
    /** YM
    * 新增接口,跳转到新增接口页面
    */
    editBtn(param?: any) {
        this.navRouter(this.mainService.getRouteUrl(this.mainService.moduleId, 'SYSAPPBUTTONS', 'Edit'), { ID: param.ID });
    }
    /** YM
      * 显示窗口前的判断
      * @param dialogCardListArgs  
      */
    showModal(dialogCardListArgs: DialogCardListArgs) {
        if (dialogCardListArgs.textComponent ? dialogCardListArgs.textComponent.fcDisabled : true) {
            dialogCardListArgs = this.builddialogCardListArgs(dialogCardListArgs);
            dialogCardListArgs.configInterface.width = "80%";
            this.mainService.openDialog(dialogCardListArgs).subscribe(dialogCardListArgs => {
                if (dialogCardListArgs.hasOwnProperty('methodIndex'))
                    this.afterFuctionForDialog(dialogCardListArgs);
            });
        }
    }
    /** YM
    * 弹窗的必要参数构建函数派发
    * @param dialogCardListArgs 
    */
    builddialogCardListArgs(dialogCardListArgs: DialogCardListArgs) {
        switch (dialogCardListArgs.methodIndex) {
            case 'DEFAULTAPPID':
                dialogCardListArgs.configInterface.title = '选择默认模型';
                dialogCardListArgs.configInterface.content = DialogCardListComponent;
                dialogCardListArgs.condition = {};
                dialogCardListArgs.appId = 'SYSAPP';
                break;
        }
        return dialogCardListArgs;
    }
    /** YM
    * 弹窗确认后的处理函数派发
    * @param dialogCardListArgs 
    */
    afterFuctionForDialog(dialogCardListArgs: DialogCardListArgs) {
        switch (dialogCardListArgs.methodIndex) {
            case 'DEFAULTAPPID':
                if (dialogCardListArgs.data)
                    this.mainObj.DEFAULTAPPID = dialogCardListArgs.data.APPID;
                break;
        }
    }
    /**
     *  返回列表方法
     */
    backToList() {
        this.navRouter(this.getRouteUrl('List'));
    }
}
