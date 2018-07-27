import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { ParentEditComponent } from 'fccomponent';
import { SysviewService } from '../../services/sysview.service';
@Component({
    selector: 'sysviewedit',
    templateUrl: 'sysviewedit.component.html',
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
      .fctitle-h2{
        margin: 1% 0% 1% 3%;
      }
      .btnAdd-dragable-area{
        width: 10%;
        line-height: 30px;
        text-align: center;
        border: 2px #ddd dashed;
        border-radius: 4px;
      }
      .btnAdd-dragable-area:hover{
       cursor:pointer;
       border-color:dodgerblue;
       transition: 1s;
      }

`]
})
export class SysvieweditComponent extends ParentEditComponent {
    productName: any;
    pidOption: any;
    modelOptions: any;
    fastsearchWords: any[];
    staticMainObj: any;
    constructor(public mainService: SysviewService,
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
        this.handleRouterParam();
        this.preventUnsaved();
    }
    /** YM
    * 处理路由传参的情况
    * @param pid 
    */
    handleRouterParam() {
        if (this.routerParam.ID) {
            this.mainService.findWithQuery({ WHERE: `ID = '${this.routerParam.ID}'` }).subscribe(res => {
                if (res.CODE === '0' && res.DATA.length !== 0) {
                    this.staticMainObj = res.DATA[0];
                    this.mainObj = res.DATA[0];
                } else {
                    this.messageService.error('基本信息获取失败');
                }
            })
        }
    }
    preventUnsaved() {
        this.router.events.filter(el => el instanceof NavigationStart).subscribe(ev => {
            //TODO remark: route.config.deActive;
        })
    }
    /**
     * html事件收集及派发函数
     * @param eventName 
     * @param context 
     */
    event(eventName: string, context: any): void {
        switch (eventName) {
            case 'addViewElement':
                // this.mainService.openDialog();
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
    }
    /** YM
     * 检测是否存在PID信息，如果存在则赋值
     * @param pid 
     */
    checkPid() {
    }
    /** YM
     * 根据PID获取服务编码并赋值.
     * @param pid 
     */
    getServiceId() {
    }
    /**
     * 实现继承与父类的afterSave函数，对cardSave函数进行功能扩展;
     */
    afterSave() {
    }
    /**
  * 新增产品,跳转到新增产品页面
  */
    addView() {
    }
    addInterface() {
    }
}
