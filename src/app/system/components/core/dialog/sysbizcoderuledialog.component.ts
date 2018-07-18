import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';
import { SysbizcodedefineService } from '../../../services/sysbizcodedefine.service';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'bizcoderuledialog',
  template: `
    <div>
      <div *ngIf= "show">
          <fc-radio [(ngModel)]="mainObj.SSEGMENT_TYPE" [fcAppid]="'SYSBIZCODEDEFINE'" fcFieldCode="SSEGMENT_TYPE" fcLabelCode="DICDESC" fcValueCode="DICVALUE"
          (ngModelChange)="componentEvents('ruleaddEvent',$event)"></fc-radio>
      </div>
      <div *ngIf="mainObj.SSEGMENT_TYPE == '固定值参数'">
          <fc-text [(ngModel)]="mainObj.SSEGMENT_NAME"  fcLabel="名称" name="SSEGMENT_NAME" ></fc-text>
          <fc-text [(ngModel)]="mainObj.SPARAM_NAME"  fcLabel="参数名称" name="SPARAM_NAME" ></fc-text>
          <fc-text  [(ngModel)]="mainObj.SDEFAULT_VALUE"  fcLabel="值" name="SDEFAULT_VALUE" ></fc-text>
          <fc-textarea  [(ngModel)]="mainObj.SDESCRIPTION" fcLabel="描述" name="SDESCRIPTION"></fc-textarea> 
      </div>
      <div *ngIf="mainObj.SSEGMENT_TYPE == '枚举代码参数'">
          <fc-text  [(ngModel)]="mainObj.SSEGMENT_NAME"  fcLabel="名称" name="SSEGMENT_NAME" ></fc-text>
          <fc-text [(ngModel)]="mainObj.SPARAM_NAME"  fcLabel="参数名称" name="SPARAM_NAME" ></fc-text>
          <fc-text [(ngModel)]="mainObj.SDEFAULT_VALUE"  fcLabel="默认值" name="SDEFAULT_VALUE" ></fc-text>
          <fc-text [fcLabel]="'枚举字典'" [(ngModel)]="mainObj.SENUMERATE_TERM_CODE"  name="SENUMERATE_TERM_CODE"></fc-text>
      </div>
      <div  *ngIf="mainObj.SSEGMENT_TYPE == '业务字段参数'">
          <fc-text [(ngModel)]="mainObj.SSEGMENT_NAME"  fcLabel="名称" name="SSEGMENT_NAME" ></fc-text>
          <fc-text  [(ngModel)]="mainObj.SPARAM_NAME"  fcLabel="参数名称" name="SPARAM_NAME" ></fc-text>
          <fc-text  [(ngModel)]="mainObj.NFIXED_NUM"  fcLabel="限制长度" name="NFIXED_NUM" ></fc-text>
          <fc-text [(ngModel)]="mainObj.NSERIALTYPE_START_VALUE"  fcLabel="截取起始位置" name="NSERIALTYPE_START_VALUE" ></fc-text>
          <fc-text  [(ngModel)]="mainObj.NSERIALTYPE_FULL_CODE"  fcLabel="填充码" name="NSERIALTYPE_FULL_CODE" ></fc-text>
      </div>
      <div  *ngIf="mainObj.SSEGMENT_TYPE == '日期参数'">
          <fc-text [(ngModel)]="mainObj.SSEGMENT_NAME"  fcLabel="显示名称" name="SSEGMENT_NAME" ></fc-text>
          <fc-text  [(ngModel)]="mainObj.SPARAM_NAME"  fcLabel="参数名称" name="SPARAM_NAME" ></fc-text>
          <fc-text  [(ngModel)]="mainObj.SDATE_FORMAT_CODE"  fcLabel="日期格式" name="SDATE_FORMAT_CODE" ></fc-text>
          <fc-textarea fcLabel="描述"   [(ngModel)]="mainObj.SDESCRIPTION" name="SDESCRIPTION" ></fc-textarea>
      </div>
      <div *ngIf="mainObj.SSEGMENT_TYPE == '流水号参数'">
          <fc-text  [(ngModel)]="mainObj.SSEGMENT_NAME"  fcLabel="名称" name="SSEGMENT_NAME" ></fc-text>
          <fc-text  [(ngModel)]="mainObj.NFIXED_NUM"  fcLabel="限制长度" name="NFIXED_NUM" ></fc-text>
          <fc-text  [(ngModel)]="mainObj.NSERIALTYPE_FULL_CODE"  fcLabel="填充码" name="NSERIALTYPE_FULL_CODE" ></fc-text>
          <fc-text  [(ngModel)]="mainObj.NSERIALTYPE_START_VALUE"  fcLabel="起始值" name="NSERIALTYPE_START_VALUE" ></fc-text>
          <fc-text  [(ngModel)]="mainObj.NSERIALTYPE_STEP_VALUE"  fcLabel="增量值" name="NSERIALTYPE_STEP_VALUE" ></fc-text>
      </div>
      <div class="customize-footer">
          <fc-button  [fcType]="'primary'" fcLabel="确定" (click)="emitDataOutside($event)"></fc-button>
          <fc-button [fcType]="'default'" fcLabel="取消"  (click)="handleCancel($event)"></fc-button>
      </div>
    </div>
    `,
  styles: [`
   .customize-footer{
     text-align:right;
   }
  `]
})
export class SysbizcoderuledialogComponent  {
  SBIZCODE_RULE_CODE:string;
  constructor(private modal: NzModalSubject, public mainService: SysbizcodedefineService) {
  }
  show:boolean = true;
  mainObj={
      SSEGMENT_TYPE :'',
      SSEGMENT_NAME:  '',
      SPARAM_NAME: '',
      SDEFAULT_VALUE:  '',
      SDESCRIPTION:  '',
      SENUMERATE_TERM_CODE: '',
      NFIXED_NUM:  '',
      NSERIALTYPE_START_VALUE:  '',
      NSERIALTYPE_FULL_CODE:  '',
      SDATE_FORMAT_CODE:  '',
      NSERIALTYPE_STEP_VALUE:  '',
      SBIZCODE_RULE_ID:'',
      ID:'',
      NSERIAL_NUM:''
  }
  @Input()
  set options(option: any) {
    this.mainObj.SSEGMENT_TYPE= option.SSEGMENT_TYPE  
    if(this.mainObj.SSEGMENT_TYPE !== undefined){
      // this.SSEGMENT_TYPE = option.SSEGMENT_TYPE
      this.show = !this.show
    }
    this.mainObj.SSEGMENT_NAME= option.SSEGMENT_NAME
    this.mainObj.SPARAM_NAME= option.SPARAM_NAME
    this.mainObj.SDEFAULT_VALUE= option.SDEFAULT_VALUE
    this.mainObj.SDESCRIPTION= option.SDESCRIPTION
    this.mainObj.SENUMERATE_TERM_CODE= option.SENUMERATE_TERM_CODE
    this.mainObj.NFIXED_NUM= option.NFIXED_NUM
    this.mainObj.NSERIALTYPE_START_VALUE= option.NSERIALTYPE_START_VALUE
    this.mainObj.NSERIALTYPE_FULL_CODE= option.NSERIALTYPE_FULL_CODE
    this.mainObj.SDATE_FORMAT_CODE= option.SDATE_FORMAT_CODE
    this.mainObj.NSERIALTYPE_STEP_VALUE= option.NSERIALTYPE_STEP_VALUE
    this.mainObj.ID = option.ID
    this.mainObj.SBIZCODE_RULE_ID = option.SBIZCODE_RULE_CODE
  }
   /**
* 组件事件收集
* @param type 字符串命名
* @param ev 事件传过来的参数
*/
componentEvents(type: string, ev: any) {
  switch (type) {
    case 'ruleaddEvent':
      this.mainObj.SSEGMENT_TYPE = ev
      break;
  }
}
//确定按钮
emitDataOutside(ev){
  if(this.mainObj.ID === undefined){
    let ev : any = {SPARAM_NAME : this.mainObj.SPARAM_NAME,};
    this.modal.next(ev);
    //新增模态框数据新增到子表中
    this.mainService.bizcodedefineAll().subscribe(res =>{
      if(res.CODE === '0'){
        this.mainObj.NSERIAL_NUM =  res.DATA.length+1+'';
        this.mainService.childrensave(this.mainObj)
        this.modal.destroy();
      }  
    })
  }else{
    //修改子表数据
    this.mainService.childrenupdate(this.mainObj)
  }
}
// 取消按钮
handleCancel(e) {
  this.modal.destroy();
}
}