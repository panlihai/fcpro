import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentEditComponent } from 'fccomponent';
import { SysinterfaceService } from '../../services/sysinterface.service';
import { SysservicemodaldialogComponent } from './dialog/sysservicemodaldialog.component';
import { SysservicebackdialogComponent } from './dialog/sysservicebackdialog.component';
@Component({
    selector: 'sysinterfaceedit',
    templateUrl: 'sysinterfaceedit.component.html',
    styles: [`
    .sys-card-btn {
        width:50%;
      }
      :host ::ng-deep .fc-layoutpanel {
          padding:10px;
      }
      .sys-card-pannel .fc-content .sys-card-pannel-edit .noBottomLine .fc-layoutcol {
        padding: 0px;
        border-bottom:none;
      }
      .sys-card-pannel .fc-content .sys-card-pannel-edit .noPadding .fc-layoutcol {
        padding: 0px;
      }
      :host ::ng-deep .sys-card-pannel .fc-content .sys-card-pannel-edit .noPadding .fc-layoutcol {
        padding: 0px;
      }
      :host ::ng-deep .basicTlb .fc-tlbform{
        margin-top:20px;
      }
      .instructionsOther{
        margin-left: 140px;
      }
      .instructions {
        margin-left: 210px;
    }
    .information{
        background-color:#fff;
        padding-bottom:10px;
    }
`]
})
export class SysinterfaceeditComponent extends ParentEditComponent {
    //产品
    pidOption;
    //参数数据
    requestParams: any;
    responseParams: any;
    staticMainObj: any = {};
    fromName: any;
    btnlistOnes: any;
    btnlistMores: any;
    constructor(public mainService: SysinterfaceService,
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
        // this.initDefaultMainObj();
        //初始化产品名称的自定义下拉选项内容
        this.initPidOption();
        this.handleRouterParam();
        this.getCardListBtn();
        //获取参数配置数据
        /* this.getParameters(); */
    }
    /** YM
    * 处理路由传参的情况
    * @param pid 
    */
    handleRouterParam() {
        if (this.routerParam.ID) {
            if (this.routerParam.from) {
                this.initEditObj(this.routerParam);
            } else {
                this.messageService.error("缺少必要路由参数");
            }
        }
    }
    /**
     * 初始化卡片按钮
     */
    getCardListBtn() {
        //每个卡片的操作按钮,取列表工具栏的明细按钮,默认显示前两个,超出的显示到更多操作里
        this.btnlistOnes = this.mainService.appButtons.filter(btn =>
            btn.BTNTYPE === 'LISTONE'
        );
        //更多的按钮
        this.btnlistMores = this.btnlistOnes.splice(3);
        //截取前两个按钮
        this.btnlistOnes = this.btnlistOnes.splice(0, 2);
    }
    /** YM
     * 初始化编辑数据
     * @param param 
     */
    initEditObj(param: any) {
        switch (param.from) {
            case 'SYSSERVICE':
                this.mainService.getServiceById(param.ID).subscribe(res => {
                    if (res.CODE === '0' && res.DATA.length !== 0) {
                        for (let attr in res.DATA[0]) {
                            if (attr === 'PID') {
                                this.mainObj[attr] = res.DATA[0][attr];
                            }
                            if (attr === 'SERVICENAME') {
                                this.mainObj['FROMNAME'] = res.DATA[0][attr];
                                this.fromName = '服务名称'
                            }
                            if (attr === 'SERVICEID') {
                                this.mainObj['APPID'] = res.DATA[0][attr];
                            }
                        }
                        this.mainObj.FROMNAME = `${this.mainObj.APPID}-${this.mainObj.FROMNAME}`;
                        for (let attr in this.mainObj) {
                            this.staticMainObj[attr] = this.mainObj[attr];
                        }
                    } else {
                        this.messageService.error('从服务获取基本信息失败');
                    }
                })
                if (param.interfaceId) {
                    this.mainService.findWithQuery({ ID: param.interfaceId }).subscribe(res => {
                        if (res.CODE === '0' && res.DATA.length !== 0) {
                            for (let attr in res.DATA[0]) {
                                this.mainObj[attr] = res.DATA[0][attr];
                            }
                            for (let attr in this.mainObj) {
                                this.staticMainObj[attr] = this.mainObj[attr];
                            }
                            this.initInterfaceParam();
                        } else {
                            this.messageService.error('从接口获取基本信息失败');
                        }
                    })
                }
                break;
            case 'SYSAPP':
                // this.mainService.getAppById(param.ID);
                break;
        }

    }
    /** YM
     * html事件收集及派发函数
     * @param eventName 
     * @param context 
     */
    event(eventName: string, context?: any): void {
        switch (eventName) {
            case 'editRequestParam':
                this.editRequestParam(context);
                event.stopPropagation();
                event.preventDefault();
                break;
            case 'editResponseParam':
                this.editResponseParam(context);
                event.stopPropagation();
                event.preventDefault();
                break;
            case 'deleteRequestParam':
                // this.editRequestParam();
                event.stopPropagation();
                event.preventDefault();
                break;
            case 'deleteResponseParam':
                // this.deleteRequestParam();
                event.stopPropagation();
                event.preventDefault();
                break;
            case 'backTo':
                this.cardBack();
                break;
        }
    }
    cardBack() {
        switch (this.fromName) {
            case '服务名称':
                this.navRouter(this.mainService.getRouteUrl(this.mainService.moduleId, 'SYSSERVICE', 'Edit'), { ID: this.routerParam.ID });
                break;
            case '模型编码':

                break;
        }
    }
    /**YM
     * 初始化参数列表数据
     */
    initInterfaceParam() {
        this.mainService.getInterfaceReqParams(this.mainObj.IMPLID, this.mainObj.PID).subscribe(res => {
            if (res.CODE === '0') {
                this.requestParams = res.DATA;
            }
        });
        this.mainService.getInterfaceResParams(this.mainObj.IMPLID, this.mainObj.PID).subscribe(res => {
            if (res.CODE === '0') {
                this.responseParams = res.DATA;
            }
        });
    }
    /** YM
     * 初始化mainObj的默认值
     */
    initDefaultMainObj() {
        this.mainObj = this.mainService.getDefaultObj();
    }
    /** YM
     * 初始化产品名称的自定义下拉选项内容
     */
    initPidOption() {
        this.pidOption = [];
        this.mainService.getAllProduct().subscribe(res => {
            if (res.P_LISTVALUE)
                res.P_LISTVALUE.forEach(el => {
                    let option = { label: `${el.PID}+${el.PNAME}`, value: el.PID, disabled: false };
                    this.pidOption.push(option);
                });
            else this.messageService.error("在取出产品名称相关数据时出错");
        })
    }

    /** YM
     * 根据PID获取服务编码并赋值.
     * @param pid 
     */
    getServiceId() {
        if (!this.mainObj.SERVICEID) {
            this.mainService.getBizCodeByAid('SYSBIZCODERULE').subscribe(res => {
                if (res.CODE === '0') {
                    this.mainObj.SERVICEID = res.DATA[0];
                }
            });
        }
    }

    /**
     * 实现继承与父类的afterSave函数，对cardSave函数进行功能扩展;
     */
    afterSave() {
        this.navRouter(this.getRouteUrl('Edit'), { PID: this.mainObj.PID });
    }
    /**
    * 获取参数配置数据
    */
    getParameters() {
        this.mainService.getParameters().subscribe(res => {
            if (res.CODE === '0') {
                console.log(res.DATA);
            } else {
                this.mainService.providers.msgService.error('获取参数配置失败');
            }
        })
    }
    /**
    * 返回模型页面
    */
    backModel(){
        this.navRouter('/system/sysappEdit', { refresh: 'Y', ID: this.mainObj.ID })
    }
    /**
    * 新增参数配置
    */
    editRequestParam(context?: any) {
        if (context) {
            context.FROMNAME = this.mainObj.FROMNAME;
            context.INTERFACENAME = `${this.mainObj.REQWAY}-${this.mainObj.IMPLNAME}`;
        }
        this.mainService.openWindow('参数配置-编辑', SysservicemodaldialogComponent, context);
    }
    /**
   * 新增返回值
   */
    editResponseParam(context?) {
        if (context) {
            context.FROMNAME = this.mainObj.FROMNAME;
            context.INTERFACENAME = `${this.mainObj.REQWAY}-${this.mainObj.IMPLNAME}`;
        }
        this.mainService.openWindow('返回值配置-编辑', SysservicebackdialogComponent, context);
    }

}
