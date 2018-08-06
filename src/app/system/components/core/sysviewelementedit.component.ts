import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentEditComponent, FctextComponent, FccomboComponent } from 'fccomponent';
import { SysviewelementService } from '../../services/sysviewelement.service';
import { NzModalSubject } from 'ng-zorro-antd';
import { DialogCardListArgs, DialogCardListComponent } from './dialog/dialogcardlist.component';
import { SysappfieldgroupComponent } from './dialog/sysappfieldgroup.component';
@Component({
    selector: 'sysviewelementedit',
    templateUrl: 'sysviewelementedit.component.html',
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
      .sys-title-container{
        display:flex;
        flex-direction:row;
        align-items:center;
      }
      .sys-flex-title{
          flex:0.8;
      }
      .sys-title-arrow{
        font-size: 20px;
        font-style: inherit;
        flex: 0.2;
      }
      .sys-title-arrow:hover{
        cursor:pointer;
      }
      :host ::ng-deep .fc-tlbform {
           padding:20px 0 60px 0;
      }
`]
})
export class SysviewelementeditComponent extends ParentEditComponent {
    productName: any;
    pidOption: any;
    // mainObj: any={};
    fieldOption: any;
    inputClose: boolean = false;
    outputClose: boolean = false;
    @Input()
    set options(option: any) {
        this.mainObj = option
    }
    // set param(mainObj: any) {
    //     if (mainObj)
    //         this.mainObj = mainObj
    // }
    constructor(public mainService: SysviewelementService,
        public router: Router,
        public activeRoute: ActivatedRoute,
        private modal: NzModalSubject) {
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
            case 'closeDialog':
                this.modal.destroy();
                break;
            case 'DEFAULTAPPID':
                this.showModal(dialogCardListArgs, context);
                break;
            case 'updateFieldOption':
                this.initFieldOption(this.mainObj.APPID);
                break;
            case 'addGroupCode':
                this.showModal(dialogCardListArgs);
                break;
            case 'inputCloseChange':
                this.inputClose = !this.inputClose;
                break;
            case 'outputCloseChange':
                this.outputClose = !this.outputClose;
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
     * 根据PID获取服务编码并赋值.
     * @param pid 
     */
    getServiceId() {
    }
    /**
     * 实现继承与父类的afterSave函数，对cardSave函数进行功能扩展;
     */
    afterSave() {
        this.modal.destroy();
    }
    /**
  * 新增产品,跳转到新增产品页面
  */
    addView() {
    }
    addInterface() {
    }
    /** YM
      * 显示窗口前的判断
      * @param dialogCardListArgs  
      */
    showModal(dialogCardListArgs: DialogCardListArgs, context?: any) {
        if (dialogCardListArgs.textComponent ? dialogCardListArgs.textComponent.fcDisabled : true) {
            dialogCardListArgs = this.builddialogCardListArgs(dialogCardListArgs);
            dialogCardListArgs.configInterface.width = "80%";
            this.mainService.openDialog(dialogCardListArgs).subscribe(dialogCardListArgs => {
                if (dialogCardListArgs.hasOwnProperty('methodIndex'))
                    this.afterFuctionForDialog(dialogCardListArgs, context);
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
            case 'addGroupCode':
                dialogCardListArgs.configInterface.title = '新增分组';
                dialogCardListArgs.configInterface.content = SysappfieldgroupComponent;
                dialogCardListArgs.appId = this.mainObj.VIEWID
                break;
        }
        return dialogCardListArgs;
    }
    /** YM
    * 弹窗确认后的处理函数派发
    * @param dialogCardListArgs 
    */
    afterFuctionForDialog(dialogCardListArgs: DialogCardListArgs, context?: any) {
        switch (dialogCardListArgs.methodIndex) {
            case 'DEFAULTAPPID':
                if (dialogCardListArgs.data) {
                    this.mainObj.APPID = dialogCardListArgs.data.APPID;
                    if (context)
                        this.resetComboAsText(context);
                }
                break;
            case 'addGroupCode':
                break;
        }
    }
    /**
     * 根据获取到的模型ID查询得到字段数据作为下拉选项
     * @param appId 
     */
    initFieldOption(appId: string) {
        this.fieldOption = this.mainService.getFieldOptionByAppId(appId);
    }
    /**
     * 强转combo作为text组件跳过根据APPID赋值下拉选的步骤，达到自定义下拉。
     * @param fcCombo 
     */
    resetComboAsText(fcCombo: FccomboComponent) {
        fcCombo._id = 'fc-text'
        fcCombo.innerValue = undefined;
        fcCombo._selectOptions = null;
    }
}
