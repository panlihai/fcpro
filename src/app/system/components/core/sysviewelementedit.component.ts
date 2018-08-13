import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentEditComponent, FctextComponent, FccomboComponent, FcanyComponent } from 'fccomponent';
import { SysviewelementService, Sysviewelement } from '../../services/sysviewelement.service';
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
          right: 70%;
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
    mainObj: any;
    fieldOption: any;
    inputClose: boolean = false;
    outputClose: boolean = false;
    funcName: string;
    viewName: string;
    staticMainObj: {};
    fieldCode: any;
    defaultModelName: string;
    @Input()
    set params(param: any) {
        if (param) {
            this.handleCustomParam(param);
        }
    }
    constructor(public mainService: SysviewelementService,
        public router: Router,
        public activeRoute: ActivatedRoute,
        private modal: NzModalSubject) {
        super(mainService, router, activeRoute);
    }
    handleCustomParam(param) {
        if (param.ID) {
            this.getMainInfo(param.ID);
        } else {
            this.mainObj = this.mainService.getDefaultObj(this.mainApp);
        }
        if (param.funcId) {
            this.getInfoAboutFunc(param.funcId);
        }
        if (param.viewId) {
            this.getInfoAboutView(param.viewId);
        }
    }
    getInfoAboutFunc(id) {
        this.mainService._findWithQuery('SYSFUNC', { ID: id }).subscribe(res => {
            if (res.CODE === '0') {
                this.mainObj.FUNCID = res.DATA[0].FUNCID;
                this.funcName = `${res.DATA[0].FUNCID} - ${res.DATA[0].FUNCNAME}`
            }
        })
    }
    getInfoAboutView(id) {
        this.mainService._findWithQuery('SYSVIEW', { ID: id }).subscribe(res => {
            if (res.CODE === '0') {
                this.mainObj.VIEWID = res.DATA[0].VIEWID;
                this.viewName = `${res.DATA[0].VIEWID} - ${res.DATA[0].VIEWNAME}`
            }
        })
    }
    getMainInfo(id) {
        this.mainService.findWithQuery({ ID: id }).subscribe(res => {
            if (res.CODE === '0') {
                for (let attr in res.DATA[0]) {
                    this.mainObj[attr] = res.DATA[0][attr];
                }
            }
        })
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
            case 'addGroupCode':
                this.showModal(dialogCardListArgs);
                break;
            case 'inputCloseChange':
                this.inputClose = !this.inputClose;
                break;
            case 'outputCloseChange':
                this.outputClose = !this.outputClose;
                break;
            case 'updateFieldCode':
                this.handleUpdateFieldCode(context);
                break;
        }
    }
    handleUpdateFieldCode(param) {
        let beforeChangeObj: any = {};
        for (let attr in this.mainObj) {
            beforeChangeObj[attr] = this.mainObj[attr];
        }
        if (param) {
            this.mainObj.FIELDCODE = param.value.FIELDCODE
            this.handleFieldCodeInfo(this.mainObj.APPID, this.mainObj.FIELDCODE);
        } else {
            this.mainObj = beforeChangeObj;
            this.messageService.success('表单数据已还原');
        }
    }
    handleFieldCodeInfo(appId, fieldCode) {
        let keys = Object.keys(this.mainObj);
        this.mainService.getDetailByFieldCode(appId, fieldCode).subscribe(res => {
            if (res.CODE === '0') {
                for (let attr in res.DATA[0]) {
                    if (attr === 'DBTYPE') {
                        this.mainObj['CATAGORY'] = res.DATA[0][attr];
                    }
                    if (keys.indexOf(attr) === -1) {
                        delete res.DATA[0][attr];
                    } else {
                        if (attr !== 'ID') {
                            this.mainObj[attr] = res.DATA[0][attr] + '';
                        }
                        if (this.mainObj[attr] === null || this.mainObj[attr] === 'null') {
                            this.mainObj[attr] = '';
                        }
                        keys.splice(keys.indexOf(attr), 1);
                    }
                }
                this.messageService.success('匹配默认模型成功');
            } else {
                this.messageService.error('匹配默认模型失败');
            }
        })
    }
    beforeSave() {
        return true;
    }
    autoFormatObj() {
        let keys = Object.keys(this.mainObj);
        this.mainService._findWithQuery('SYSAPPFIELDS', { APPID: this.appId }).subscribe(res => {
            if (res.CODE === '0') {
                res.DATA.forEach(el => {
                    if (keys.indexOf(el.FIELDCODE) > -1)
                        switch (el.DBTYPE) {
                            case 'STR':
                                this.mainObj[el.FIELDCODE].toString();
                                break;
                            case 'NUM':
                                this.mainObj[el.FIELDCODE] = Number.parseInt(this.mainObj[el.FIELDCODE]);
                                break;
                        }
                })
            }
        });
    }
    /**
    * 初始化mainObj的默认值
    */
    initDefaultMainObj() {
        this.mainObj = this.mainService.getDefaultObj(this.mainApp);
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
                dialogCardListArgs.data = this.mainObj;
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
                    this.defaultModelName = `${this.mainObj.APPID} - ${dialogCardListArgs.data.APPNAME}`
                    if (context) {
                        this.resetComboAsText(context);
                        this.initFieldOption(this.mainObj.APPID);
                    }
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
        this.mainService.getFieldOptionByAppId(appId).subscribe(res => {
            if (res.CODE === '0') {
                let fields = res.DATA;
                let arr: Array<{ [key: string]: any }> = [];
                fields.forEach(el => {
                    arr.push({ label: `${el.FIELDCODE} - ${el.FIELDNAME}`, value: el });
                })
                this.fieldOption = arr;
                if (this.fieldOption) {
                    this.messageService.success('根据默认模型匹配模型字段成功');
                } else {
                    this.messageService.success('根据默认模型匹配模型字段失败');
                }
            }
        })
    }
    /**
     * 强转combo假设为text组件跳过根据APPID赋值下拉选的步骤，达到自定义下拉。
     * @param fcAny 
     */
    resetComboAsText(fcAny: FcanyComponent) {
        fcAny._id = 'fc-text'
        fcAny.innerValue = undefined;
        fcAny._selectOptions = null;
    }
}
