import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  ParentEditComponent } from 'fccomponent';
import { SysbizcoderuleService } from '../../services/sysbizcoderule.service';
import { NzModalService, NzModalSubject } from 'ng-zorro-antd';
import { LayoutService } from '../../services/layout.service';
import { Sysappbuttons } from 'fccore/services/sysappbuttons.service';
import { FCEVENT } from 'fccomponent/fc';
import { environment } from '../../../../environments/environment';
@Component({
    selector: 'sysbizcoderule',
    template: `  
  <fc-layoutpanel fcFull="true">
  <fc-tlbform fccontent [fcAppid]="appId" (fcEvent)="tlbformEvent($event)" fctoolbar></fc-tlbform>
  <fc-title fccontent fcLabel="基本信息" fcBorder="bottom" ></fc-title>
  <fc-layoutcol fcSpans="1,1" fccontent>
      <fc-text fccontent1 style="flex:1" [(ngModel)]="mainObj.SBIZCODE_RULE_NAME"  fcLabel="编码规则名称" name="PUBLISHUSER" ></fc-text>
      <fc-text fccontent2 style="flex:1" [fcLabel]="'所属应用'" [(ngModel)]="mainObj.SBIZCODE_RULE_APPNAME" (click)="modalMullist1.showModal()" [fcAddonAfter]="'fc-icon-bgsearch'" name="SBIZCODE_RULE_APPNAME" fcMode="icon"></fc-text>
      <fc-modallist #modalMullist1 fcTitle="所属应用" [fcAppid]="'SYSAPP'" [fcType]="'multiple'" (fcEvent)="modallistEvent($event)"
      [fcCondition]="mainService.userCondition"></fc-modallist>
      <fc-radio  fccontent1 [fcLabel]="'状态'" [(ngModel)]="mainObj.SSTATE" [fcAppid]="appId" fcFieldCode="SSTATE" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio>
      <fc-radio  fccontent2  [fcLabel]="'向下可用'" [(ngModel)]="mainObj.SSTATE" [fcAppid]="appId"fcFieldCode="SSTATE" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio>
      <fc-text fccontent1 style="flex:1" [(ngModel)]="mainObj.SCRATOR"  fcLabel="启用单位" name="CATAGORY" ></fc-text>
  </fc-layoutcol>
  <fc-textarea fccontent fcCol="1" fcRows="2" [(ngModel)]="mainObj.SDESCRIPTION" fcLabel="描述" name="SDESCRIPTION"></fc-textarea>
  <fc-title fccontent fcLabel="编码规则设置" fcBorder="bottom" ></fc-title>
  <div fccontent>
      <fc-layoutcol fcSpans="7,3" fccontent>
          <fc-text fccontent1  fcLabel="编码规则" [(ngModel)]="content"  name="CATAGORY"></fc-text>
          <div style="margin-left:-17%;" fccontent2>
          <fc-button fccontent fcLabel="新增" fcType="default"  (click)="bizcodeaddrouter()"></fc-button>
          </div>
      </fc-layoutcol>
      <div style="height:215px;">
        <fc-listdata  fccontent [fcAppid]="'SYSBIZCODEDEFINE'"  [fcCondition]="sendCondition" (fcEvent)="componentEvents('delet',$event)"></fc-listdata>
      </div>
  </div>
</fc-layoutpanel>
<ng-template #fixedvaluetitle style="z-index:999;">
    <span>{{rulemodalObj.SSEGMENT_TYPE}}</span>
</ng-template>
<ng-template #fixedvalue  style="z-index:999;">
    <div fccontent class="wateraccountcheck">
      <fc-text fccontent style="flex:1" [(ngModel)]="rulemodalObj.SSEGMENT_NAME"  fcLabel="名称" name="SSEGMENT_NAME" ></fc-text>
      <fc-text fccontent style="flex:1" [(ngModel)]="rulemodalObj.SPARAM_NAME"  fcLabel="参数名称" name="SPARAM_NAME" ></fc-text>
      <fc-text fccontent style="flex:1" [(ngModel)]="rulemodalObj.SDEFAULT_VALUE"  fcLabel="值" name="SDEFAULT_VALUE" ></fc-text>
      <fc-textarea fccontent [fcAppid]="'SYSBIZCODERULE'"  [(ngModel)]="rulemodalObj.SDESCRIPTION" fcLabel="描述" name="SDESCRIPTION"></fc-textarea> 
    </div>
    <div fccontent style="text-align:right">
      <fc-button fcLabel="取消" fcType="default"  (click)="backEvent()"></fc-button>
      <fc-button fcLabel="保存" fcType="primary" (click)="updateEvent($event)"></fc-button>
    </div>
</ng-template>
<ng-template #enumeration  style="z-index:999;">
    <fc-layoutcol fcSpans="1,1" fccontent class="wateraccountcheck">
      <fc-text fccontent1 style="flex:1" [(ngModel)]="rulemodalObj.SSEGMENT_NAME"  fcLabel="名称" name="SSEGMENT_NAME" ></fc-text>
      <fc-text fccontent2 style="flex:1" [(ngModel)]="rulemodalObj.SPARAM_NAME"  fcLabel="参数名称" name="SPARAM_NAME" ></fc-text>
      <fc-text fccontent1 style="flex:1" [(ngModel)]="rulemodalObj.SDEFAULT_VALUE"  fcLabel="默认值" name="SDEFAULT_VALUE" ></fc-text>
      <fc-text fccontent2 style="flex:1" [fcLabel]="'枚举字典'" [(ngModel)]="rulemodalObj.SENUMERATE_TERM_CODE" [fcAddonAfter]="'fc-icon-bgsearch'" (click)="modalscrator1.showModal()" name="SCRATOR" fcMode="icon" ></fc-text>
      <fc-modallist #modalscrator1 fcTitle="枚举字典" [fcAppid]="'SYSBIZCODEDEFINE'" [fcType]="'multiple'" (fcEvent)="modalscratorEvent($event)"
      [fcCondition]="mainService.userCondition"></fc-modallist> 
    </fc-layoutcol>
    <div style="height:215px;">
     <fc-listdata  fccontent #waterList [fcAppid]="'SYSBIZCODEDEFINE'" [fcOption]="mainService.listOptions" (fcEvent)="componentEvents('delet',$event)"></fc-listdata>
    </div>
    <div fccontent style="text-align:right">
      <fc-button fcLabel="取消" fcType="default"  (click)="backEvent()"></fc-button>
      <fc-button fcLabel="保存" fcType="primary" (click)="updateEvent()"></fc-button>
    </div>
</ng-template>
<ng-template #business  style="z-index:999;">
    <div fccontent class="wateraccountcheck">
      <fc-text fccontent style="flex:1" [(ngModel)]="rulemodalObj.SSEGMENT_NAME"  fcLabel="名称" name="SSEGMENT_NAME" ></fc-text>
      <fc-text fccontent style="flex:1" [(ngModel)]="rulemodalObj.SPARAM_NAME"  fcLabel="参数名称" name="SPARAM_NAME" ></fc-text>
      <fc-text fccontent style="flex:1" [(ngModel)]="rulemodalObj.NFIXED_NUM"  fcLabel="限制长度" name="NFIXED_NUM" ></fc-text>
      <fc-text fccontent style="flex:1" [(ngModel)]="rulemodalObj.NSERIALTYPE_START_VALUE"  fcLabel="截取起始位置" name="NSERIALTYPE_START_VALUE" ></fc-text>
      <fc-text fccontent style="flex:1" [(ngModel)]="rulemodalObj.NSERIALTYPE_FULL_CODE"  fcLabel="填充码" name="NSERIALTYPE_FULL_CODE" ></fc-text>
    </div>
    <div fccontent style="text-align:right">
      <fc-button fcLabel="取消" fcType="default"  (click)="backEvent()"></fc-button>
      <fc-button fcLabel="保存" fcType="primary" (click)="updateEvent()"></fc-button>
    </div>
</ng-template>
<ng-template #date  style="z-index:999;">
    <div fccontent class="wateraccountcheck">
      <fc-text fccontent style="flex:1" [(ngModel)]="rulemodalObj.SSEGMENT_NAME"  fcLabel="显示名称" name="SSEGMENT_NAME" ></fc-text>
      <fc-text fccontent style="flex:1" [(ngModel)]="rulemodalObj.SPARAM_NAME"  fcLabel="参数名称" name="SPARAM_NAME" ></fc-text>
      <fc-text fccontent style="flex:1" [(ngModel)]="rulemodalObj.SDATE_FORMAT_CODE"  fcLabel="日期格式" name="SDATE_FORMAT_CODE" ></fc-text>
      <fc-textarea fccontent  fcLabel="描述" name="SDESCRIPTION"  [(ngModel)]="rulemodalObj.SDESCRIPTION" ></fc-textarea>
    </div>
    <div fccontent style="text-align:right">
      <fc-button fcLabel="取消" fcType="default"  (click)="backEvent()"></fc-button>
      <fc-button fcLabel="保存" fcType="primary" (click)="updateEvent()"></fc-button>
    </div>
</ng-template>
<ng-template #smallwarter  style="z-index:999;">
    <div fccontent class="wateraccountcheck">
        <fc-text fccontent style="flex:1" [(ngModel)]="rulemodalObj.SSEGMENT_NAME"  fcLabel="名称" name="SSEGMENT_NAME" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="rulemodalObj.NFIXED_NUM"  fcLabel="限制长度" name="NFIXED_NUM" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="rulemodalObj.NSERIALTYPE_FULL_CODE"  fcLabel="填充码" name="NSERIALTYPE_FULL_CODE" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="rulemodalObj.NSERIALTYPE_START_VALUE"  fcLabel="起始值" name="NSERIALTYPE_START_VALUE" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="rulemodalObj.NSERIALTYPE_STEP_VALUE"  fcLabel="增量值" name="NSERIALTYPE_STEP_VALUE" ></fc-text>
    </div>
    <div fccontent style="text-align:right">
      <fc-button fcLabel="取消" fcType="default"  (click)="backEvent()"></fc-button>
      <fc-button fcLabel="保存" fcType="primary" (click)="updateEvent()"></fc-button>
    </div>
</ng-template>
<ng-template #bizcoderuleaddtitle style="z-index:999;">
    <span>编码类型新增</span>
</ng-template>
<ng-template #bizcoderuleadd  style="z-index:999;">
  <fc-radio fccontent [(ngModel)]="rulemodaladdObj.SSEGMENT_TYPE" [fcAppid]="'SYSBIZCODEDEFINE'" fcFieldCode="SSEGMENT_TYPE" fcLabelCode="DICDESC" fcValueCode="DICVALUE"
  (ngModelChange)="componentEvents('select2Events',$event)"></fc-radio>
  <div fccontent *ngIf="this.rulemodaladdObj.SSEGMENT_TYPE == '固定值参数'">
        <fc-text fccontent style="flex:1" [(ngModel)]="rulemodaladdObj.SSEGMENT_NAME"  fcLabel="名称" name="SSEGMENT_NAME" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="rulemodaladdObj.SPARAM_NAME"  fcLabel="参数名称" name="SPARAM_NAME" ></fc-text>
        <fc-text fccontent style="flex:1" [(ngModel)]="rulemodaladdObj.SDEFAULT_VALUE"  fcLabel="值" name="SDEFAULT_VALUE" ></fc-text>
        <fc-textarea fccontent [fcAppid]="'SYSBIZCODERULE'"  [(ngModel)]="rulemodaladdObj.SDESCRIPTION" fcLabel="描述" name="SDESCRIPTION"></fc-textarea> 
  </div>
  <div fccontent *ngIf="this.rulemodaladdObj.SSEGMENT_TYPE == '枚举代码参数'">
    <fc-layoutcol fcSpans="1,1" fccontent>
        <fc-text fccontent1 style="flex:1" [(ngModel)]="rulemodaladdObj.SSEGMENT_NAME"  fcLabel="名称" name="SSEGMENT_NAME" ></fc-text>
        <fc-text fccontent2 style="flex:1" [(ngModel)]="rulemodaladdObj.SPARAM_NAME"  fcLabel="参数名称" name="SPARAM_NAME" ></fc-text>
        <fc-text fccontent1 style="flex:1" [(ngModel)]="rulemodaladdObj.SDEFAULT_VALUE"  fcLabel="默认值" name="SDEFAULT_VALUE" ></fc-text>
        <fc-text fccontent2 style="flex:1" [fcLabel]="'枚举字典'" [(ngModel)]="rulemodaladdObj.SENUMERATE_TERM_CODE" [fcAddonAfter]="'fc-icon-bgsearch'" (click)="modalscrator1.showModal()" name="SCRATOR" fcMode="icon" ></fc-text>
        <fc-modallist #modalscrator1 fcTitle="枚举字典" [fcAppid]="appId" [fcType]="'multiple'" (fcEvent)="modalscratorEvent($event)"
        [fcCondition]="mainService.userCondition"></fc-modallist> 
    </fc-layoutcol>
    <div style="height:215px;">
        <fc-listdata  fccontent #waterList [fcAppid]="appId" [fcOption]="mainService.listOptions" (fcEvent)="componentEvents('delet',$event)"></fc-listdata>
    </div>
    </div>
    <div fccontent *ngIf="this.rulemodaladdObj.SSEGMENT_TYPE == '业务字段参数'">
          <fc-text fccontent style="flex:1" [(ngModel)]="rulemodaladdObj.SSEGMENT_NAME"  fcLabel="名称" name="SSEGMENT_NAME" ></fc-text>
          <fc-text fccontent style="flex:1" [(ngModel)]="rulemodaladdObj.SPARAM_NAME"  fcLabel="参数名称" name="SPARAM_NAME" ></fc-text>
          <fc-text fccontent style="flex:1" [(ngModel)]="rulemodaladdObj.NFIXED_NUM"  fcLabel="限制长度" name="NFIXED_NUM" ></fc-text>
          <fc-text fccontent style="flex:1" [(ngModel)]="rulemodaladdObj.NSERIALTYPE_START_VALUE"  fcLabel="截取起始位置" name="NSERIALTYPE_START_VALUE" ></fc-text>
          <fc-text fccontent style="flex:1" [(ngModel)]="rulemodaladdObj.NSERIALTYPE_FULL_CODE"  fcLabel="填充码" name="NSERIALTYPE_FULL_CODE" ></fc-text>
    </div>
    <div fccontent *ngIf="this.rulemodaladdObj.SSEGMENT_TYPE == '日期参数'">
          <fc-text fccontent style="flex:1" [(ngModel)]="rulemodaladdObj.SSEGMENT_NAME"  fcLabel="显示名称" name="SSEGMENT_NAME" ></fc-text>
          <fc-text fccontent style="flex:1" [(ngModel)]="rulemodaladdObj.SPARAM_NAME"  fcLabel="参数名称" name="SPARAM_NAME" ></fc-text>
          <fc-text fccontent style="flex:1" [(ngModel)]="rulemodaladdObj.SDATE_FORMAT_CODE"  fcLabel="日期格式" name="SDATE_FORMAT_CODE" ></fc-text>
          <fc-textarea fccontent [fcAppid]="'SYSBIZCODERULE'" fcLabel="描述" name="SDESCRIPTION"  [(ngModel)]="mainObj.SDESCRIPTION" ></fc-textarea>
    </div>
    <div fccontent *ngIf="this.rulemodaladdObj.SSEGMENT_TYPE == '流水号参数'">
          <fc-text fccontent style="flex:1" [(ngModel)]="rulemodaladdObj.SSEGMENT_NAME"  fcLabel="名称" name="SSEGMENT_NAME" ></fc-text>
          <fc-text fccontent style="flex:1" [(ngModel)]="rulemodaladdObj.NFIXED_NUM"  fcLabel="限制长度" name="NFIXED_NUM" ></fc-text>
          <fc-text fccontent style="flex:1" [(ngModel)]="rulemodaladdObj.NSERIALTYPE_FULL_CODE"  fcLabel="填充码" name="NSERIALTYPE_FULL_CODE" ></fc-text>
          <fc-text fccontent style="flex:1" [(ngModel)]="rulemodaladdObj.NSERIALTYPE_START_VALUE"  fcLabel="起始值" name="NSERIALTYPE_START_VALUE" ></fc-text>
          <fc-text fccontent style="flex:1" [(ngModel)]="rulemodaladdObj.NSERIALTYPE_STEP_VALUE"  fcLabel="增量值" name="NSERIALTYPE_STEP_VALUE" ></fc-text>
    </div>
    <div fccontent style="text-align:right">
      <fc-button fcLabel="取消" fcType="default"  (click)="backEvent()"></fc-button>
      <fc-button fcLabel="保存" fcType="primary" (click)="saveEvent()"></fc-button>
    </div>
</ng-template>
    `,
    styles: [`
  `]
})
export class SysbizcoderuleeditComponent extends ParentEditComponent {
  tlbBtns:Sysappbuttons[];
  rulemodalObj: any;
  rulemodaladdObj:any;
  allObj:any;
  currentModal: any;
  content: any = [];
  // 固定值模态框层级关系和宽
  fixedvalueWidth : string = "45"
  fixedvalueZindex : string = "999"
  //固定值模态框开始  
  // 新增模态框层级关系和宽
  bizcoderuleaddWidth : string = "67"
  //固定值模态框开始  
  @ViewChild('fixedvaluetitle')
  fixedvaluetitle: TemplateRef<HTMLElement>;
  @ViewChild('fixedvalue')
  fixedvalue: TemplateRef<HTMLElement>;
  //固定值模态框结束  
  //枚举字典模态框开始  
  @ViewChild('enumeration')
  enumeration: TemplateRef<HTMLElement>;
  //枚举字典模态框结束 
  //业务模态框开始  
  @ViewChild('business')
  business: TemplateRef<HTMLElement>;
  //业务模态框结束 
   //日期模态框开始  
   @ViewChild('date')
   date: TemplateRef<HTMLElement>;
   //日期模态框结束 
   //日期模态框开始  
   @ViewChild('smallwarter')
   smallwarter: TemplateRef<HTMLElement>;
   //日期模态框结束 
  @ViewChild('bizcoderule')
  bizcoderule: TemplateRef<HTMLElement>;
  //固定值模态框开始  
  @ViewChild('bizcoderuleaddtitle')
  bizcoderuleaddtitle: TemplateRef<HTMLElement>;
  @ViewChild('bizcoderuleadd')
  bizcoderuleadd: TemplateRef<HTMLElement>;
  //固定值模态框结束  
  arr : any = {};
  fcRowData: any[];
  // sendCondition:string='{"ID":null}';
  sendCondition:string;
  constructor(public mainService: SysbizcoderuleService,private modal: NzModalSubject,
    public router: Router,
    public layoutService : LayoutService,
    public activeRoute: ActivatedRoute,
    public modalService: NzModalService) {
    super(mainService, router, activeRoute);
  } 
  // 初始化编码负责对象内容
  addNew(mainObj: any): boolean {
    this.mainObj = {
      SBIZCODE_RULE_CODE:'',
      SBIZCODE_RULE_NAME:'',
      SBIZCODE_RULE_APPNAME:'',
      SSTATE:'',
      SCRATOR:'',
      SDESCRIPTION:'',
    };
    return true;
  }
  beforeSave():boolean{
    return true;
  }
  init(): void {
    if(this.mainObj.ID){
      //SBIZCODE_RULE_ID  = this.mainObj.SBIZCODE_RULE_CODE   那么列表开始过滤
      this.sendCondition='{"SBIZCODE_RULE_ID":"'+this.mainObj.SBIZCODE_RULE_CODE+'"}';
    }else{
      this.content = '';
      this.sendCondition='{"WHERE":"and 1!=1"}';
    }
  }
  event(eventName: string, param: any): void {
  }
  //******* /  弹窗相关方法实现
  showModal(titleTpl,contentTpl,widthTpl,zindexTpl) {
    let ago = this;
    this.currentModal = this.modalService.open({
    title: titleTpl,
    content: contentTpl,
    width: widthTpl+"%",
    wrapClassName: "vertical-center-modal",
    maskClosable: false,
    zIndex: zindexTpl,
    footer:false,
    onOk: function () {
    },
    onCancel: function () {
    }
    });
    }
       /**
   * 组件事件收集
   * @param type 字符串命名
   * @param ev 事件传过来的参数
   */
  componentEvents(type: string, ev: any) {
    switch (type) {
        case 'delet':
          // sysbizcodedefine修改事件
          if (ev.eventName == "listEdit") {
            this.rulemodalObj = ev.param;
            // 修改事件  选中列表中某条数据，让修改弹窗中字段为选中列表字段内容
                if(this.rulemodalObj.SSEGMENT_TYPE === "固定值参数"){
                  this.showModal(this.fixedvaluetitle,this.fixedvalue,this.fixedvalueWidth,this.fixedvalueZindex);
                }
                if(this.rulemodalObj.SSEGMENT_TYPE === "枚举代码参数"){
                  this.showModal(this.fixedvaluetitle,this.enumeration,this.fixedvalueWidth,this.fixedvalueZindex);
                }
                if(this.rulemodalObj.SSEGMENT_TYPE === "业务字段参数"){
                  this.showModal(this.fixedvaluetitle,this.business,this.fixedvalueWidth,this.fixedvalueZindex);
                }
                if(this.rulemodalObj.SSEGMENT_TYPE === "日期参数"){
                  this.showModal(this.fixedvaluetitle,this.date,this.fixedvalueWidth,this.fixedvalueZindex);
                }
                if(this.rulemodalObj.SSEGMENT_TYPE === "流水号参数"){
                  this.showModal(this.fixedvaluetitle,this.smallwarter,this.fixedvalueWidth,this.fixedvalueZindex);
                }
          }
          // 向上移动
          if (ev.eventName == "listUp") {
            this.rulemodalObj = ev.param;
          }
          // 向下移动
          if (ev.eventName == "listDown") {
            this.rulemodalObj = ev.param;
            this.rulemodalObj.ID = parseInt(this.rulemodalObj.ID) + 1
          }
          // 置顶
          if (ev.eventName == "listTop") {
            this.rulemodalObj = ev.param;
            this.rulemodalObj.ID = 1 
          }
          // 置底
          if (ev.eventName == "listBottom") {
            this.rulemodalObj = ev.param;
            this.rulemodalObj.ID = 5
          }
        break;
        case 'select2Events':
        this.messageService.success('触发单选框按钮')
        this.rulemodaladdObj.SSEGMENT_TYPE = ev
        break; 
    }   
  }

   // 修改sysbizcodedefine数据
   updateEvent(){
    //修改事件放发
    this.mainService.childrensave(this.rulemodalObj);
    }
    saveEvent(){
      //新增sysbizcodedefine数据
      let obj={
        SSEGMENT_TYPE:this.rulemodalObj.SSEGMENT_TYPE,
        SSEGMENT_NAME:this.rulemodalObj.SSEGMENT_NAME,
        SPARAM_NAME:this.rulemodalObj.SPARAM_NAME,
        SDEFAULT_VALUE:this.rulemodalObj.SDEFAULT_VALUE,
        SDESCRIPTION:this.rulemodalObj.SDESCRIPTION,
        SENUMERATE_TERM_CODE:this.rulemodalObj.SENUMERATE_TERM_CODE,
        NFIXED_NUM:this.rulemodalObj.NFIXED_NUM,
        NSERIALTYPE_START_VALUE:this.rulemodalObj.NSERIALTYPE_START_VALUE,
        NSERIALTYPE_FULL_CODE:this.rulemodalObj.NSERIALTYPE_FULL_CODE,
        SDATE_FORMAT_CODE:this.rulemodalObj.SDATE_FORMAT_CODE,
        NSERIALTYPE_STEP_VALUE:this.rulemodalObj.NSERIALTYPE_STEP_VALUE
      }
    this.mainService.rulemodalObjsave(obj);
    }
  // 模态框取消按钮事件
  backEvent(){
    this.currentModal.destroy();
  }
  ngOnInit(): void {
  //   // 查询SYSBIZCODEDEFINE所有的元数据
    this.mainService.rulemodal().subscribe(result => {
     if (result.CODE === '0') {
       this.rulemodalObj = result.DATA;
       this.rulemodaladdObj = result.DATA;
       this.rulemodalObj.forEach(el => {
        // this.rulemodalObj.SBIZCODE_RULE_ID = this.mainObj.SBIZCODE_RULE_CODE;
        // el.SBIZCODE_RULE_ID = this.mainObj.SBIZCODE_RULE_CODE;
        // console.log(el)
        this.content.push(el.SPARAM_NAME)
     })
     // 把数组转成字符串
     this.content =  this.content.join("-")
     }
   })
 }
 bizcodeaddrouter(){
   this.showModal(this.bizcoderuleaddtitle,this.bizcoderuleadd,this.bizcoderuleaddWidth,this.fixedvalueZindex);
 }
         /**
  * 选中用户追加到当前选中的角色中，并保存到服务器
  * @param event 模态框列表事件句柄
  */
 modallistEvent(event: FCEVENT) {
  switch (event.eventName) {
    case 'success':
      this.mainObj.SBIZCODE_RULE_APPNAME = event.param[0].APPNAME;
      // this.mainObj.SBIZCODE_RULE_CODE = event.param[0].APPID;
    break;
    case 'cacle':
    break;
  }
}
}