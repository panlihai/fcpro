import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentEditComponent } from 'fccomponent';
import { SysinterfaceService } from '../../services/sysinterface.service';
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
`]
})
export class SysinterfaceeditComponent extends ParentEditComponent {
    productName: any;
    pidOption: any;
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
        this.initPidOption();
        this.checkPid();
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
  * 新增产品,跳转到新增产品页面
  */
    addView() {
        this.navRouter('sysviewEdit');
    }
    addInterface() {
        this.navRouter('sysinterfaceEdit');
    }
}
