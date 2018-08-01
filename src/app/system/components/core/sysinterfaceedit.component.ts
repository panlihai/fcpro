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
    parameters: any;
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
        this.initDefaultMainObj();
        //初始化产品名称的自定义下拉选项内容
        this.initPidOption();
        this.checkPid();
        //获取参数配置数据
        /* this.getParameters(); */
    }
    /**
     * html事件收集及派发函数
     * @param eventName 
     * @param context 
     */
    event(eventName: string, context: any): void {
        switch (eventName) {
            case '':
                break;
        }
    }
    /**
     * 初始化mainObj的默认值
     */
    initDefaultMainObj() {
        this.mainObj = this.mainService.getDefaultObj();
    }
    /**
     * 初始化产品名称的自定义下拉选项内容
     */
    initPidOption() {
        this.pidOption = [];
        this.mainService.getAllProduct().subscribe(res => {
            if (res.P_LISTVALUE)
                res.P_LISTVALUE.forEach(el => {
                    let option = { label: el.PNAME, value: el.PID, disabled: false };
                    this.pidOption.push(option);
                });
            else this.messageService.error("在取出产品名称相关数据时出错");
        })
    }
    /** YM
     * 检测是否存在PID信息，如果存在则赋值
     * @param pid 
     */
    checkPid() {
        if (this.routerParam.PID) {
            this.mainObj.PID = this.routerParam.PID;
        }
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
    * 新增参数配置
    */
    addParameter() {
        this.mainService.addWindow('参数配置-编辑', SysservicemodaldialogComponent);
    }
    /**
   * 新增返回值
   */
    addReturnValue() {
        this.mainService.addWindow('返回值配置-编辑', SysservicebackdialogComponent);
    }
}
