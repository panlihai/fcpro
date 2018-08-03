import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';
import { forEach } from '@angular/router/src/utils/collection';
import { ParentEditComponent, FctextComponent, FccomboComponent } from 'fccomponent';
import { Router, ActivatedRoute } from '@angular/router';
import { SysintfreqparamService } from '../../../services/sysintfreqparam.service';
import { SysattributeService } from '../../../services/sysattribute.service';
import { DialogCardListArgs, DialogCardListComponent } from './dialogcardlist.component';
@Component({
  selector: 'sysattributeEditdialogComponent',
  template: `
  <fc-layoutpanel class="sys-card-pannel">
    <div fcheader class="sys-card-pannel-header">
        <P class="sys-card-pannel-smarks">
            编辑：编辑元素功能，配置视图元素：包含字段信息、模型信息、样式信息
        </P>
    </div>
    <div fccontent class="sys-card-pannel-edit">
        <div class="sys-title-container">
            <fc-title class="sys-flex-title" fcLabel="基本信息" [fcHasLine]="false"></fc-title>
        </div>
        <fc-layoutcol>
            <fc-layoutcol fccontent1 fcSpans="9,1" class="noBottom">
                <fc-text fccontent1 fcLabel="模型名称" [(ngModel)]="mainObj.APPID" [fcAppid]="appId" fcFieldCode="APPID" name="SERVICEID" [fcDisabled]="true"></fc-text>
                <fc-text fccontent1 fcLabel="属性名称" [(ngModel)]="mainObj.FIELDNAME" [fcAppid]="appId" fcFieldCode="FIELDNAME" name="ELEMENTID"></fc-text>
                <fc-radio fccontent1 fcLabel="主键" [(ngModel)]="mainObj.KEYSEQ" [fcAppid]="appId" fcFieldCode="KEYSEQ" fcLabelCode="DICDESC" fcValueCode="DICVALUE" name="KEYSEQ"></fc-radio>
                <fc-text fccontent1 fcLabel="长度" [(ngModel)]="mainObj.LENGTH" [fcAppid]="appId" fcFieldCode="LENGTH" name="LENGTH"></fc-text>
                <div class="place-div" fccontent2></div>
                <div class="place-div" fccontent2></div>
            </fc-layoutcol>
            <fc-layoutcol fccontent2 fcSpans="9,1" class="noBottom">
                <fc-text fccontent1 fcLabel="属性编码" [(ngModel)]="mainObj.FIELDCODE" [fcAppid]="appId" fcFieldCode="FIELDCODE" name="VIEWID"></fc-text>
                <fc-combo #fieldCombo fccontent1 fcLabel="数据类型" [(ngModel)]="mainObj.DBTYPE" [fcAppid]="appId"  fcFieldCode="DBTYPE" name="FIELDCODE" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-combo>
                <fc-radio fccontent1 fcLabel="是否启用" [(ngModel)]="mainObj.ENABLE" [fcAppid]="appId" fcFieldCode="ENABLE" fcLabelCode="DICDESC" fcValueCode="DICVALUE" name="CATAGORY"></fc-radio>
                <fc-radio fccontent1 fcLabel="可为空" [(ngModel)]="mainObj.ISNULL" [fcAppid]="appId" fcFieldCode="ISNULL" fcLabelCode="DICDESC" fcValueCode="DICVALUE" name="CATAGORY"></fc-radio>
                <fc-text fccontent1 fcLabel="小数点位数" [(ngModel)]="mainObj.SCALE" [fcAppid]="appId" fcFieldCode="SCALE" name="SCALE"></fc-text>
            </fc-layoutcol>
        </fc-layoutcol>
        <div class="sys-title-container">
            <fc-title class="sys-flex-title" fcLabel="输入配置" [fcHasLine]="false"></fc-title>
            <i class="sys-title-arrow" (click)="event('inputCloseChange')" *ngIf="inputClose">∧</i>
            <i class="sys-title-arrow" (click)="event('inputCloseChange')" *ngIf="!inputClose">∨</i>
        </div>
        <fc-layoutcol *ngIf="inputClose">
            <fc-layoutcol fccontent1 fcSpans="9,1" class="noBottom">
                <fc-combo fccontent1 fcLabel="数据字典" [fcShowSearch]="true" [(ngModel)]="mainObj.DICCODE" [fcAppid]="appId" fcFieldCode="DICCODE" fcLabelCode="DICNAME" fcValueCode="DICID" name="DICCODE"></fc-combo>
                <fc-text fccontent1 fcLabel="默认值" [(ngModel)]="mainObj.FIELDDEFAULT" [fcAppid]="appId" fcFieldCode="FIELDDEFAULT" name="FIELDDEFAULT"></fc-text>
                <fc-text fccontent1 fcLabel="输入规则" [(ngModel)]="mainObj.INPUTLIMIT" [fcAppid]="appId" fcFieldCode="INPUTLIMIT" name="INPUTLIMIT"></fc-text>
            </fc-layoutcol>
            <fc-layoutcol fccontent2 fcSpans="9,1" class="noBottom">
                <fc-combo fccontent1 fcLabel="编码规则" [fcShowSearch]="true" [(ngModel)]="mainObj.AUTOCODE" [fcAppid]="appId" fcFieldCode="AUTOCODE" fcLabelCode="DICDESC" fcValueCode="DICVALUE" name="AUTOCODE"></fc-combo>
                <fc-combo fccontent1 fcLabel="输入组件" [fcShowSearch]="true" [(ngModel)]="mainObj.INPUTTYPE" [fcAppid]="appId" fcFieldCode="INPUTTYPE" fcLabelCode="DICDESC" fcValueCode="DICVALUE" name="INPUTTYPE"></fc-combo>
                <fc-radio fccontent1 fcLabel="可编辑" [(ngModel)]="mainObj.ENABLEWRITE" [fcAppid]="appId" fcFieldCode="ENABLEWRITE" fcLabelCode="DICDESC" fcValueCode="DICVALUE" name="ENABLEWRITE"></fc-radio>
            </fc-layoutcol>
        </fc-layoutcol>
        <div class="sys-title-container">
            <fc-title class="sys-flex-title" fcLabel="输出配置" [fcHasLine]="false"></fc-title>
            <i class="sys-title-arrow" (click)="event('outputCloseChange')" *ngIf="outputClose">∧</i>
            <i class="sys-title-arrow" (click)="event('outputCloseChange')" *ngIf="!outputClose">∨</i>
        </div>
        <fc-layoutcol *ngIf="outputClose">
            <fc-layoutcol fccontent1 fcSpans="9,1" class="noBottom">
                <fc-text fccontent1 fcLabel="排序" [(ngModel)]="mainObj.SORT" [fcAppid]="appId" fcFieldCode="SORT" name="SERVICENAME"></fc-text>
                <fc-text fccontent1 fcLabel="样式" [(ngModel)]="mainObj.TCLASS" [fcAppid]="appId" fcFieldCode="TCLASS" name="TCLASS"></fc-text>
                <fc-text fccontent1 fcLabel="行内样式" [(ngModel)]="mainObj.STYLE" [fcAppid]="appId" fcFieldCode="STYLE" name="STYLE"></fc-text>
                <fc-radio fccontent1 fcLabel="列锁定" [(ngModel)]="mainObj.ENABLELOCK" [fcAppid]="appId" fcFieldCode="ENABLELOCK" fcLabelCode="DICDESC" fcValueCode="DICVALUE" name="ENABLELOCK"></fc-radio>
                <fc-text fccontent1 fcLabel="列最长显示" [(ngModel)]="mainObj.LISTMAXLEN" [fcAppid]="appId" fcFieldCode="LISTMAXLEN" name="LISTMAXLEN"></fc-text>
            </fc-layoutcol>
            <fc-layoutcol fccontent2 fcSpans="9,1" class="noBottom">
                <fc-text fccontent1 fcLabel="显示前缀" [(ngModel)]="mainObj.VIEWPREFIX" [fcAppid]="appId" fcFieldCode="VIEWPREFIX" name="VIEWPREFIX"></fc-text>         
                <fc-text fccontent1 fcLabel="显示格式" [(ngModel)]="mainObj.VIEWFORMAT" [fcAppid]="appId" fcFieldCode="VIEWFORMAT" name="VIEWFORMAT"></fc-text>       
                <fc-text fccontent1 fcLabel="显示后缀" [(ngModel)]="mainObj.VIEWSUFFIX" [fcAppid]="appId" fcFieldCode="VIEWSUFFIX" name="VIEWSUFFIX"></fc-text>    
                <fc-text fccontent1 fcLabel="文本提示" [(ngModel)]="mainObj.PLACEHOLDER" [fcAppid]="appId" fcFieldCode="PLACEHOLDER" name="PLACEHOLDER"></fc-text>              
                <fc-combo fccontent1 fcLabel="分组" [(ngModel)]="mainObj.GRPCODE" [fcAppid]="'SYSAPPFLDGROUP'" name="GRPCODE" [fcOption]="groupOption"></fc-combo>
                <div class="place-div" fccontent2></div>
                <div class="place-div" fccontent2></div>
                <div class="place-div" fccontent2></div>
                <div class="place-div" fccontent2></div>
                <div class="last-btn" fccontent2>
                    <fc-button fccontent2 fcLabel="+" (click)="event('addGroupCode')"></fc-button>
                </div>
            </fc-layoutcol>
        </fc-layoutcol>
        <div class="sys-title-container">
            <fc-title class="sys-flex-title" fcLabel="其他信息" [fcHasLine]="false"></fc-title>
            <i class="sys-title-arrow" (click)="event('otherCloseChange')" *ngIf="otherClose">∧</i>
            <i class="sys-title-arrow" (click)="event('otherCloseChange')" *ngIf="!otherClose">∨</i>
        </div>
        <fc-layoutcol *ngIf="otherClose">
            <fc-layoutcol fccontent1 fcSpans="9,1" class="noBottom">
                <fc-textarea fccontent1 fcLabel="帮助" [fcAppid]="appId" fcFieldCode='HELP' [(ngModel)]="mainObj.HELP" name="HELP" fcPlaceHolder="请输入帮助信息，详细描述该属性具有什么特性"></fc-textarea>
            </fc-layoutcol>
        </fc-layoutcol>
        <div class="saveButton">
          <fc-button fcLabel="保存" fcType="primary" (click)="save()"></fc-button>
        </div>
    </div>
</fc-layoutpanel>
    `,
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
  :host ::ng-deep .sys-card-pannel .fc-content .sys-card-pannel-edit .noBottom .fc-layoutcol {
    padding: 0px;
    border-bottom:none;
  }
  :host ::ng-deep .sys-card-pannel .fc-content .sys-card-pannel-edit .noPadding .fc-layoutcol {
    padding: 0px;
  }
  .saveButton{
    width:100%;
    text-align:center;
  }
  `]
})
export class SysattributeEditdialogComponent extends ParentEditComponent {
  productName: any;
  pidOption: any;
  mainObj: any;
  fieldOption: any;
  //收起显示
  inputClose: boolean = false;
  outputClose: boolean = false;
  otherClose: boolean = false;
  //分组配置
  groupOption: any;
  @Input()
  set options(option: any) {
    if (option) {
      this.mainObj = option
    }
  }
  constructor(private modal: NzModalSubject,
    public mainService: SysattributeService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  /**
  * 组件初始化执行函数
  */
  init(): void {
    //初始化分组配置
    this.groupOption = this.mainService.getGroup().subscribe(res => {
      if (res.CODE === '0') {
        this.groupOption = [];
        res.DATA.forEach(element => {
          this.groupOption.push({ icon: '', label: element.GRPNAME, value: element.GRPCODE });
        });
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
      /* case 'DEFAULTAPPID':
        this.showModal(dialogCardListArgs, context);
        break;
      case 'updateFieldOption':
        this.initFieldOption(this.mainObj.APPID);
        break;
      case 'addGroupCode':
        this.showModal(dialogCardListArgs);
        break; */
      case 'inputCloseChange':
        this.inputClose = !this.inputClose;
        break;
      case 'outputCloseChange':
        this.outputClose = !this.outputClose;
        break;
      case 'otherCloseChange':
        this.otherClose = !this.otherClose;
        break;
    }
  }
  /**
    * 初始化mainObj的默认值
    */
  /* initDefaultMainObj() {
    this.mainObj = this.mainService.getDefaultObj();
  } */
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
  /* showModal(dialogCardListArgs: DialogCardListArgs, context?: any) {
    if (dialogCardListArgs.textComponent ? dialogCardListArgs.textComponent.fcDisabled : true) {
      dialogCardListArgs = this.builddialogCardListArgs(dialogCardListArgs);
      dialogCardListArgs.configInterface.width = "80%";
      this.mainService.openDialog(dialogCardListArgs).subscribe(dialogCardListArgs => {
        if (dialogCardListArgs.hasOwnProperty('methodIndex'))
          this.afterFuctionForDialog(dialogCardListArgs, context);
      });
    }
  } */
  /** YM
* 弹窗的必要参数构建函数派发
* @param dialogCardListArgs 
*/
  /* builddialogCardListArgs(dialogCardListArgs: DialogCardListArgs) {
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
  } */
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
  /**
   * 保存 
   */
  save(){

  }
}