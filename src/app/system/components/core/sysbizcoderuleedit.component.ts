import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentEditComponent, FclistdataComponent } from 'fccomponent';
import { SysbizcoderuleService } from '../../services/sysbizcoderule.service';
import { NzModalService, NzModalSubject } from 'ng-zorro-antd';
import { LayoutService } from '../../services/layout.service';
import { Sysappbuttons } from 'fccore/services/sysappbuttons.service';
import { FCEVENT } from 'fccomponent/fc';
import { environment } from '../../../../environments/environment';
import { element } from 'protractor';
import { SysbizcoderuledialogComponent } from './dialog/sysbizcoderuledialog.component';
@Component({
  selector: 'sysbizcoderule',
  template: `  
  <fc-layoutpanel>
  <fc-tlbform fccontent [fcAppid]="appId" (fcEvent)="tlbformEvent($event)" fctoolbar></fc-tlbform>
  <fc-title fccontent fcLabel="基本信息" fcBorder="bottom" ></fc-title>
  <fc-layoutcol fcSpans="1,1" fccontent>
      <fc-text fccontent1 style="flex:1" [(ngModel)]="mainObj.SBIZCODE_RULE_CODE" [fcReadonly] = "read"   fcLabel="编码规则代码" name="PUBLISHUSER" ></fc-text>
      <fc-text fccontent2 style="flex:1" [(ngModel)]="mainObj.SBIZCODE_RULE_NAME"  fcLabel="编码规则名称" name="PUBLISHUSER" ></fc-text>
      <fc-text fccontent1 style="flex:1" [fcLabel]="'所属应用'" [(ngModel)]="mainObj.SBIZCODE_RULE_APPNAME" (click)="modalMullist1.showModal()" [fcAddonAfter]="'fc-icon-bgsearch'" name="SBIZCODE_RULE_APPNAME" fcMode="icon"></fc-text>
      <fc-modallist #modalMullist1 fcTitle="所属应用" [fcAppid]="'SYSAPP'" [fcType]="'multiple'" (fcEvent)="modallistEvent($event)"
      [fcCondition]="mainService.userCondition"></fc-modallist>
      <fc-radio  fccontent2 [fcLabel]="'状态'" [(ngModel)]="mainObj.SSTATE" [fcAppid]="appId" fcFieldCode="SSTATE" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio>
      <fc-radio  fccontent1  [fcLabel]="'向下可用'" [(ngModel)]="mainObj.SSTATE" [fcAppid]="appId"fcFieldCode="SSTATE" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio>
      <fc-text fccontent2 style="flex:1" [(ngModel)]="mainObj.SCRATOR"  fcLabel="启用单位" name="CATAGORY" ></fc-text>
  </fc-layoutcol>
  <fc-textarea fccontent fcCol="1" fcRows="2" [(ngModel)]="mainObj.SDESCRIPTION" fcLabel="描述" name="SDESCRIPTION"></fc-textarea>
  <fc-title fccontent fcLabel="编码规则设置" fcBorder="bottom" ></fc-title>
  <div fccontent>
      <fc-layoutcol fcSpans="7,3" fccontent>
          <fc-text fccontent1  fcLabel="编码规则" [(ngModel)]="content" name="CATAGORY"></fc-text>
      </fc-layoutcol>
      <div style="height:215px;">
        <fc-listdata #bizcoderuledifinelist  fccontent [fcAppid]="'SYSBIZCODEDEFINE'"  [fcCondition]="sendCondition" (fcEvent)="event($event.eventName,$event)"></fc-listdata>
      </div>
  </div>
</fc-layoutpanel>
    `,
  styles: [`
  `]
})
export class SysbizcoderuleeditComponent extends ParentEditComponent {
  // a:any;
  //是否是只读状态
  read : boolean;
  //过滤定义属性
  sendCondition: string;
  //编码规则定义雷音
  content: string='';
  @ViewChild('bizcoderuledifinelist')
  bizcoderuledifinelist: FclistdataComponent;
  constructor(public mainService: SysbizcoderuleService, private modal: NzModalSubject,
    public router: Router,
    public layoutService: LayoutService,
    public activeRoute: ActivatedRoute,
    public modalService: NzModalService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    if (this.mainObj.ID) {
      this.read = true;
      //SBIZCODE_RULE_ID  = this.mainObj.SBIZCODE_RULE_CODE   那么列表开始过滤
      //子表根据主表this.mainObj.SBIZCODE_RULE_CODE字段过滤子表SBIZCODE_RULE_ID这段，子表出现过滤出的数据
      this.sendCondition = '{"ORDER":"NSERIAL_NUM","SBIZCODE_RULE_ID":"' + this.mainObj.SBIZCODE_RULE_CODE + '"}';
      this.mainService.bizcoderuleFun(this.mainObj).subscribe(res=>{
        if(res.CODE === '0'){
          this.removebizname(res);
        }else{
          this.messageService.error("请求失败");
        }
      })
    } else {
      this.sendCondition = '{"WHERE":"and 1!=1"}';
      this.read = false;
    }

  }
  addNew(mainObj: any): boolean {
    return true;
  }
  event(eventName: string, param: any): void {
    switch (eventName) {
      //新增规则点击出现模态框事件并且为空
      case 'ruleAdd':
        this.ruleAdd(param);
        break;
      //编码规则修改页面子表修改弹窗
      case 'listEdit':
        this.listEdit(param);
        break;
    //编码规则修改页面子表上移
      case 'listUp':
        this.listUp(param.param);
        break;
    //编码规则修改页面子表下移
      case 'listDown':
        this.listDown(param.param);
        break;
      //编码规则修改页面子表置頂
      case 'listTop':
        this.listTop(param.param);
        break;
      //编码规则修改页面子表置底
      case 'listBottom':
        this.listBottom(param.param);
        break;  
    }
  }
    /**
*  新增规则点击出现模态框事件并且为空方法
* @param event 
*/
  ruleAdd(envet){
  this.mainService.ruleAddmodal(SysbizcoderuledialogComponent, this.mainObj.SBIZCODE_RULE_CODE)
  .subscribe(obj => {
        if(obj.SPARAM_NAME !== undefined){
          this.content +=   obj.SPARAM_NAME + '-'
        }
        // 重新初始化子表列表
        if (this.sendCondition) {
          if (this.sendCondition.substring(this.sendCondition.length - 1) === ' ') {
            this.sendCondition = this.sendCondition.replace(/(\s*$)/g, "");
          } else {
            this.sendCondition = this.sendCondition + " ";
          }
        }
      });
  }
   /**
*   编码规则修改页面子表修改弹窗方法
* @param event 
*/
  listEdit(ev: FCEVENT) {
    this.messageService.success("触发修改事件")
    this.modalService.open({
      title: '新增规则',
      content: SysbizcoderuledialogComponent,
      width: "76%",
      onOk() { },
      onCancel() { },
      footer: false,
      // 传到模态框的值
      componentParams: {
        options: {
          SSEGMENT_TYPE: ev.param.SSEGMENT_TYPE,
          SSEGMENT_NAME: ev.param.SSEGMENT_NAME,
          SPARAM_NAME: ev.param.SPARAM_NAME,
          SDEFAULT_VALUE: ev.param.SDEFAULT_VALUE,
          SDESCRIPTION: ev.param.SDESCRIPTION,
          SENUMERATE_TERM_CODE: ev.param.SENUMERATE_TERM_CODE,
          NFIXED_NUM: ev.param.NFIXED_NUM,
          NSERIALTYPE_START_VALUE: ev.param.NSERIALTYPE_START_VALUE,
          NSERIALTYPE_FULL_CODE: ev.param.NSERIALTYPE_FULL_CODE,
          SDATE_FORMAT_CODE: ev.param.SDATE_FORMAT_CODE,
          NSERIALTYPE_STEP_VALUE: ev.param.NSERIALTYPE_STEP_VALUE,
          ID: ev.param.ID
        }
      }
    }).subscribe(obj => {
    });
  }
  /**
*  子表向上移动调用方法
* @param event 
*/
 listUp(ev: FCEVENT){
    this.messageService.success("向上移动事件触发成功")
    this.mainService.listUpfun(this.bizcoderuledifinelist,this.sendCondition,ev,this.content)
    this.content = "";
    this.mainService.bizcoderuleFun(this.mainObj).subscribe(res=>{
      if(res.CODE === '0'){
        this.removebizname(res);
      }else{
        this.messageService.error("请求失败");
      }
    })
  }
 /**
*  子表向下移动调用方法
* @param event 
*/
  listDown(ev: FCEVENT){
    this.messageService.success("向下移动事件触发成功")
    this.mainService.listDownfun(this.bizcoderuledifinelist,this.sendCondition,ev)
    this.content = "";
    this.mainService.bizcoderuleFun(this.mainObj).subscribe(res=>{
      if(res.CODE === '0'){
        this.removebizname(res);
      }else{
        this.messageService.error("请求失败");
      }
    })
 }
 /**
*  子表置顶调用方法
* @param event 
*/
  listTop(ev: FCEVENT){
    this.messageService.success("置頂事件触发成功")
    this.mainService.listTopfun(this.bizcoderuledifinelist,this.sendCondition,ev)
    this.content = "";
    this.mainService.bizcoderuleFun(this.mainObj).subscribe(res=>{
      if(res.CODE === '0'){
        this.removebizname(res);
      }else{
        this.messageService.error("请求失败");
      }
    })
 }
 /**
*  子表置底调用方法
* @param event 
*/
 listBottom(ev: FCEVENT){
  this.messageService.success("置底事件触发成功")
  this.mainService.listBottomfun(this.bizcoderuledifinelist,this.sendCondition,ev)
  this.content = "";
  this.mainService.bizcoderuleFun(this.mainObj).subscribe(res=>{
    if(res.CODE === '0'){
      this.removebizname(res);
    }else{
      this.messageService.error("请求失败");
    }
  })
}
 /**
* 所属应用fcmodallist方法调用
* @param event 模态框列表事件句柄
*/
modallistEvent(event: FCEVENT) {
  switch (event.eventName) {
    case 'success':
      this.mainObj.SBIZCODE_RULE_APPNAME = event.param[0].APPNAME;
      break;
    case 'cacle':
      break;
  }
}
 /**
* 根据列表移懂编码规则sparname移动
* @param event 模态框列表事件句柄
*/
  removebizname(res){
    let a:any;
    a = res.DATA.sort(this.mainService.compare("NSERIAL_NUM"))
    a.forEach(ele=>{
      this.content +=ele.SPARAM_NAME+"-"
    })
  }
}