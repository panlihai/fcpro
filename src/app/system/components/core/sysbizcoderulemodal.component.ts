import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { SysbizcoderuleService } from '../../services/sysbizcoderule.service';
import { NzModalService, NzModalSubject } from 'ng-zorro-antd';
@Component({
    selector: 'sysbizcoderulemodal',
    template: `  
  <fc-layoutpanel fcFull="true">
  <div fccontent style="text-align:center">
      <fc-button fcLabel="保存" fcType="primary" (click)="saveEvent()"></fc-button>
      <fc-button fcLabel="返回列表" fcType="default" (click)="backEvent()"></fc-button>
  </div>
  <fc-title fccontent fcLabel="基本信息" fcBorder="bottom" ></fc-title>
  <fc-layoutcol fcSpans="1,1" fccontent>
      <fc-text fccontent1 style="flex:1" [(ngModel)]="saveObj.SBIZCODE_RULE_CODE" fcLabel="编码规则编号" name="TITLE"></fc-text>
      <fc-text fccontent2 style="flex:1" [(ngModel)]="saveObj.SYS_BIZCODE_RULE"  fcLabel="编码规则名称" name="PUBLISHUSER" ></fc-text>
      <fc-text fccontent1 style="flex:1" [fcLabel]="'后置标签'" [(ngModel)]="saveObj.SRULE_DEFAULT" [fcAddonAfter]="'fc-icon-unit'" name="SRULE_DEFAULT" fcMode="icon"></fc-text>
      <fc-radio fccontent2 [fcLabel]="'单选'" [(ngModel)]="saveObj.SSTATE" [fcOption]="radioOptions" name="SSTATE"></fc-radio>
      <fc-text fccontent1 style="flex:1" [(ngModel)]="saveObj.SCRATOR"  fcLabel="启用单位" name="CATAGORY" ></fc-text>
      <fc-radio fccontent2 [fcLabel]="'单选'" [(ngModel)]="saveObj.SSTATE" [fcOption]="radioOptions" name="SSTATE"></fc-radio> 
  </fc-layoutcol>
  <fc-textarea fccontent fcCol="1" fcRows="2" [fcAppid]="appId" fcLabel="描述" name="DESCRIPTION"></fc-textarea>
  <fc-title fccontent fcLabel="编码规则设置" fcBorder="bottom" ></fc-title>
  <div fccontent style="margin-left:20%;width:70%;">
      <div fccontent>
          <fc-button  fcLabel="新建" fccontent fcType="default" ></fc-button>
          <fc-button  fcLabel="前移" fccontent fcType="default" ></fc-button>
          <fc-button  fcLabel="后移" fccontent fcType="default" ></fc-button>
          <fc-button  fcLabel="设置流水号分组" fccontent fcType="default" (click)="wateraccountmodalEvent()"></fc-button>
      </div>
      <div fccontent class="ruletext">
          <fc-text fccontent  fcLabel="编码规则" name="CATAGORY"></fc-text>
      </div>
      <div style="height:215px;">
          <fc-listdata  fccontent [fcAppid]="appId" [fcOption]="mainService.listOptions" (fcEvent)="componentEvents('delet',$event)"></fc-listdata>
      </div>
  </div>            
</fc-layoutpanel>      
    `,
    styles: [`
    :host ::ng-deep .fc-layoutpanel .fc-content{
        height:100%;
      }
    .bizcodebutton{
        text-align:center;
        margin-left: -25%;
    }  
    :host ::ng-deep .ruletext .ant-form-item-label{
      width:8%;
    }
    :host ::ng-deep .ruletext .ant-col-sm-16{
      width: 88%;
    }  
    .wateraccountcheck{
        text-align:center;
    }
    :host ::ng-deep .wateraccountcheck .ant-checkbox-wrapper !importont{
      display: block;
      text-align: left;
      margin-left: 3%;
    }
    :host ::ng-deep .ant-checkbox-wrapper + .ant-checkbox-wrapper{
        margin:0px;
    }
  `]
})
export class SysbizcoderulemodalComponent extends ParentlistComponent {
  init(): void {
    throw new Error("Method not implemented.");
  }
  getDefaultQuery() {
    throw new Error("Method not implemented.");
  }
  event(eventName: string, context: any): void {
    throw new Error("Method not implemented.");
  }
    constructor(public mainService: SysbizcoderuleService,private modal: NzModalSubject,
        public router: Router,
        public activeRoute: ActivatedRoute,
        public modalService: NzModalService) {
        super(mainService, router, activeRoute);
    }
}