import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';
import { forEach } from '@angular/router/src/utils/collection';
import { ParentEditComponent } from 'fccomponent';
import { Router, ActivatedRoute } from '@angular/router';
import { SysintfreqparamService } from '../../../services/sysintfreqparam.service';
@Component({
  selector: 'sysservicemodaldialog',
  template: `
  <div>
    <div class="bg-dialog-content">
         <div>编辑：指定返回值及其类型等</div>
         <div class="sys-topclose">关闭</div>
         <form fccontent>
         <fc-layoutpanel fccontent id="id0">
             <fc-title fcLabel="基本信息" fcWidth="96%" fcheader  [fcHasLine]="false"></fc-title>
             <fc-layoutcol fcSpans="1,0" fccontent>
                 <div fccontent1>
                     <fc-text [fcLabel]="'服务名称'" fcReadonly="true" [(ngModel)]="content" name="PID"></fc-text>
                     <fc-text [fcLabel]="'接口名称'" fcReadonly="true"  [(ngModel)]="IMPLID"  name="IMPLID"></fc-text>
                     <fc-text [fcLabel]="'参数编码'" fcPlaceHolder="请选择默认模型" [(ngModel)]="mainObj.PARAMNAME" name="PARAMNAME"></fc-text>
                     <div fccontent1 class="sys-tab">默认模型</div>
                     <fc-radio [(ngModel)]="mainObj.VALUETYPE" fcLabel="值类型" [fcAppid]="appId" fcFieldCode="VALUETYPE" fcLabelCode="DICDESC"
                     fcValueCode="DICVALUE" name="VALUETYPE" (ngModelChange)="componentEvents('valuetypeEvent',$event)"></fc-radio>
                     <div fccontent1 class="sys-tab">默认为启用</div>
                 </div>
                 <fc-textarea fccontent1 fcLabel="备注"  [(ngModel)]="mainObj.REMARK"  fcPlaceHolder="填写帮助内容" name="REMARK"></fc-textarea>
                 <div fccontent1 class="sys-tab">描述参数的含义</div>
             </fc-layoutcol>
         </fc-layoutpanel>
     </form>
    </div>
    <div class="customize-footer">
        <fc-button  [fcType]="'primary'" fcLabel="保存" (click)="emitDataOutside($event)">
        </fc-button>
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
export class SysservicebackdialogComponent extends ParentEditComponent   {
  IMPLID:any;
  content:any;
  constructor(private modal: NzModalSubject,
    public mainService: SysintfreqparamService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
   super(mainService, router, activeRoute);
 }
  mainObj:any = {
    PID:'',
    IMPLID:'',
    PARAMNAME:'',
    VALUETYPE:'',
    REMARK:''
  }
 @Input()
 set options(option: any) {
    this.mainObj=option;
    //CONTENT值换成子要显示出来的英文-中文字段
    // this.content = option.PID + option.APPNAME;
    // this.mainObj.PID = this.options.PID;
    // //接口名称英文-中文
    // this.IMPLID = option.PID + option.APPNAME;
    // this.mainObj.IMPLID = this.options.IMPLID;
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
   this.mainObj.VALUETYPE = ev
   break;
  }
}
  //确定按钮
  emitDataOutside(ev){
    if(this.mainObj.ID === undefined){
      //新增模态框数据新增到子表中  
      this.mainService.childrensave(this.mainObj)   
    }else{
      //修改子表数据
      this.mainService.childrenupdate(this.mainObj)
    }
  }
}