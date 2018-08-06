import { Component, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import { ParentEditComponent } from 'fccomponent';
import { Router, ActivatedRoute } from '@angular/router';
import { SysintfresparamService } from '../../../services/sysintfresparam.service';
@Component({
  selector: 'sysservicemodaldialog',
  template: `
  <div>
    <div class="bg-dialog-content">
         <div>编辑：指定返回值及其类型等</div>
           <div class="sys-card-fast">
             <ul class="sys-fast-list">
                 <li class="sys-icon-btn"  (click)="event('close')">
                     <fc-icon fcIcon="fc-icon-close" fcColor="#009DFF"></fc-icon>关闭
                 </li>
             </ul>
           </div>
         <form fccontent>
         <fc-layoutpanel fccontent id="id0">
             <fc-title fcLabel="基本信息" fcWidth="96%" fcheader  [fcHasLine]="false"></fc-title>
             <fc-layoutcol fcSpans="1,0" fccontent>
                 <div fccontent1>
                     <fc-text [fcLabel]="'服务名称'" fcReadonly="true" [(ngModel)]="serviceName" [fcAppid]="appId" fcFieldCode="PID" name="PID"></fc-text>
                     <fc-text [fcLabel]="'接口名称'" fcReadonly="true"  [(ngModel)]="interfaceName"[fcAppid]="appId" fcFieldCode="IMPLID"  name="IMPLID"></fc-text>
                     <fc-text [fcLabel]="'参数编码'" fcPlaceHolder="请选择默认模型" [(ngModel)]="mainObj.PARAMNAME" [fcAppid]="appId" fcFieldCode="PARAMNAME" name="PARAMNAME"></fc-text>
                     <div fccontent1 class="sys-tab">默认模型</div>
                     <fc-radio [(ngModel)]="mainObj.VALUETYPE" fcLabel="值类型" [fcAppid]="appId" fcFieldCode="VALUETYPE" fcLabelCode="DICDESC"
                     fcValueCode="DICVALUE" name="VALUETYPE" (ngModelChange)="componentEvents('valuetypeEvent',$event)"></fc-radio>
                     <div fccontent1 class="sys-tab">默认为启用</div>
                 </div>
                 <fc-textarea fccontent1 fcLabel="备注"  [(ngModel)]="mainObj.REMARK" [fcAppid]="appId" fcFieldCode="REMARK"  fcPlaceHolder="填写帮助内容" name="REMARK"></fc-textarea>
                 <div fccontent1 class="sys-tab">描述参数的含义</div>
             </fc-layoutcol>
         </fc-layoutpanel>
     </form>
    </div>
    <div class="customize-footer">
         <fc-tlbform fccontent1 fcType="primary" [fcAppid]="appId" fcLayout="center" (fcEvent)="tlbformEvent($event)" class="basicTlb"></fc-tlbform>
    </div>
  </div>
    `,
  styles: [`
  .bg-dialog-content{
      height:450px;
      overflow: scroll;
  }
   .customize-footer{
     text-align:center;
   }
  .sys-deleticon{
    background: #108ee9;
    width: 14px;
    text-align: center;
    position: absolute;
    top: 3%;
    left: 37.7%;
    z-index: 999;
    cursor: pointer;
  }
  .sys-choose-icon{
    position:relative;
    height:100px;
  }
  .sys-choose-icon .sys-choose-icon-box{
    width: 100px;
    height: 100px;
    line-height: 90px;
    padding: 10px;
    border-radius: 4px;
    background-color: #ffffff;
    border: 1px dashed #ebedf0;
    position: absolute;
    left: 26%;
    top: 2px;
    text-align: center;
  }
  .sys-topclose{
    color: #108ee9;
    margin-top: 8px;
    margin-left: 19px;
  }
  .sys-tab{
      margin-left:26%;
  }
  `]
})
export class SysservicebackdialogComponent extends ParentEditComponent {
  interfaceName: any;
  serviceName: any;
  constructor(private modal: NzModalSubject,
    public mainService: SysintfresparamService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  @Input()
  set param(param: any) {
    this.mainObj = this.mainService.initObjDefaultValue(this.mainApp);
    for (let attr in param) {
      this.mainObj[attr] = param[attr];
    }
    this.serviceName = param.FROMNAME;
    this.interfaceName = param.INTERFACENAME;
  }
  init(): void {
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  event(eventName: string, param: any): void {
  }
  /**
  * 组件事件收集
  * @param type 字符串命名
  * @param ev 事件传过来的参数
  */
  componentEvents(type: string, ev: any) {
    switch (type) {
      //值类型
      case 'valuetypeEvent':
        this.mainObj.VALUETYPE = ev;
        break;
    }
  }
  //确定按钮
  emitDataOutside(ev) {
    if (this.mainObj.ID === undefined) {
      //新增模态框数据新增到子表中  
      this.mainService.childrensave(this.mainObj);
    } else {
      //修改子表数据
      this.mainService.childrenupdate(this.mainObj);
    }
  }
}