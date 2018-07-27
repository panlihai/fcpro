import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, RouterEvent } from '@angular/router';
import { ParentEditComponent, FctextComponent } from 'fccomponent';
import { SysserviceService } from '../../services/sysservice.service';
import { DialogCardListComponent, DialogCardListArgs } from './dialog/dialogcardlist.component';
@Component({
    selector: 'sysserviceedit',
    templateUrl: 'sysserviceedit.component.html',
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
          height:42px;
          position:relative;
          right:95%;
      }
            `]
})
export class SysserviceeditComponent extends ParentEditComponent {
    productName: any;
    pidOption: any;
    sysLookUp: any[];
    sysViews: any;
    sysInterfaces: any;
    staticMainObj: any;
    constructor(public mainService: SysserviceService,
        public router: Router,
        public activeRoute: ActivatedRoute) {
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
        this.getDefaultMainObj();
        this.getPidOption();
        this.handleRouterParam();
        this.preventUnsaved();
    }
    /**
     * html事件收集及派发函数
     * @param eventName 
     * @param context 
     */
    event(eventName: string, context: any): void {
        let dialogCardListArgs: DialogCardListArgs = { appId: null, configInterface: { title: null } };
        dialogCardListArgs.methodIndex = eventName;
        if (context instanceof FctextComponent) dialogCardListArgs.textComponent = context;
        switch (eventName) {
            case 'PID':
                this.getServiceId(context)
                break;
            case 'DEFAULTAPPID':
                this.showModal(dialogCardListArgs);
                break;
        }
    }
    /**
     * 初始化mainObj的默认值
     */
    getDefaultMainObj() {
        this.mainObj = this.mainService.getDefaultObj();
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
                if (res.CODE === '0') {
                    this.staticMainObj = res.DATA[0];
                    this.mainObj = res.DATA[0];
                } else {
                    this.messageService.error('基本信息获取失败');
                }
            })
            this.getSysViews(this.mainObj.SERVICEID);
            this.getSysInterfaces(this.mainObj.SERVICEID);
        }
    }
    /**
     * 获取服务-视图数据
     * @param serviceId 
     */
    getSysViews(serviceId) {
        this.mainService.getSysViews(serviceId).subscribe(res => {
            if (res.CODE === '0') {
                this.sysViews = res.DATA;
            } else {
                this.messageService.error('视图数据获取失败');
            }
        });
    }
    /**
     * 获取服务-接口数据
     * @param serviceId 
     */
    getSysInterfaces(serviceId) {
        this.mainService.getSysInterfaces(serviceId).subscribe(res => {
            if (res.CODE === '0') {
                this.sysInterfaces = res.DATA;
            } else {
                this.messageService.error('接口数据获取失败');
            }
        });
    }
    /** YM
     * 根据PID获取服务编码并赋值.
     * @param pid 
     */
    getServiceId(pid: string) {
        this.mainService.getBizCodeByAid(pid).subscribe(res => {
            if (res.CODE === '0') {
                this.mainObj.SERVICEID = res.DATA[0];
            }
        });
    }
    /**
     * 实现继承与父类的beforeSave函数，对cardSave函数进行功能扩展;
     */
    beforeSave() {
        this.router;
        // this.mainObj = this.mainService.beforeSave(this.mainObj);
        return true;
    }
    /**
     * 实现继承与父类的afterSave函数，对cardSave函数进行功能扩展;
     */
    afterSave() {
        this.mainService.findWithQuery({ WHERE: `SERVICEID = '${this.mainObj.SERVICEID}'` }).subscribe(res => {
            if (res.CODE === '0') {
                this.navRouter(this.getRouteUrl('Edit'), { ID: res.DATA[0].ID });
            }
        });
    }
    /**
    * 新增产品,跳转到新增产品页面
    */
    addView() {
        this.router
        this.navRouter(this.mainService.getRouteUrl(this.mainService.moduleId, 'SYSVIEW', 'Edit'));
        if (this.staticMainObj === this.mainObj) {
        } else {
            this.messageService.warm('检测到表单信息有更改，请先保存好再进行新增操作');
        }
    }
    /**
    * 新增接口,跳转到新增接口页面
    */
    addInterface() {
        this.navRouter(this.mainService.getRouteUrl(this.mainService.moduleId, 'SYSINTERFACE', 'Edit'));
        if (this.staticMainObj === this.mainObj) {
        } else {
            this.messageService.warm('检测到表单信息有更改，请先保存好再进行新增操作');
        }
    }
    preventUnsaved() {
        this.router.events.filter(el => el instanceof NavigationStart).subscribe(ev => {
            //TODO remark: route.config.deActive;
        })
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
}
