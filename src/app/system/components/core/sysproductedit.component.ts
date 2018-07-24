
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, ParentlistComponent, ParentEditComponent } from 'fccomponent';
import { SysproductService } from '../../services/sysproduct.service';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';
import { SysicondialogComponent } from './dialog/sysicondialog.component';
@Component({
  selector: 'sysproductedit',
  template: `
  <fc-layoutpanel fcFull="true">
    <fc-title fccontent fcLabel="基本信息" fcBorder="bottom" ></fc-title>
    <fc-layoutcol fcSpans="7,3" fccontent>
        <fc-text fccontent1 [(ngModel)]="mainObj.PID"  fcLabel="产品Id:" name="PID" fcPlaceHolder="产品编码，全局唯一" fcRequired = "true"></fc-text>
        <fc-text fccontent1  [(ngModel)]="mainObj.PNAME"  name="PNAME"  fcLabel="产品名称:" fcPlaceHolder="请输入中文"  fcRequired = "true"></fc-text>
        <fc-radio  fccontent1  [(ngModel)]="mainObj.DISPLAYMODE" fcLabel="模式:" [fcAppid]="appId" fcFieldCode="DISPLAYMODE" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio>
        <fc-text fccontent1  [(ngModel)]="mainObj.PARENTPID" fcPlaceHolder="依赖产品输入"  name="PARENTPID"  fcLabel="依赖产品:"></fc-text>
        <fc-text fccontent1  [(ngModel)]="mainObj.SORT"  fcPlaceHolder="请输入整数"  [fcLabel]="'排序:'" name="SORT"  ></fc-text>
        <fc-textarea fccontent1 fcPlaceHolder="请输入备注"  [(ngModel)]="mainObj.DIRECTION" fcLabel="备注（可选）:" name="DIRECTION"></fc-textarea>
    </fc-layoutcol>
    <fc-title fccontent fcLabel="其他信息" fcBorder="bottom" ></fc-title>
    <div fccontent>
        <fc-layoutcol fcSpans="2,8" fccontent>
            <span class="sys-proicon" fccontent1>产品图标:</span>
            <span fccontent2 class="sys-fciconlayout"  (click)="iconEvent($event)">
                <fc-icon [fcIcon]="mainObj.ICON"  [(ngModel)]="mainObj.ICON" fcSize="large"></fc-icon>
                <span *ngIf = "visible == false">选择图片</span>
            </span>
        </fc-layoutcol>
    </div>
    <div fccontent>  
        <fc-layoutcol fcSpans="2,8" fccontent>
            <span class="sys-proicon" fccontent1>产品文档:</span>
            <fc-upload fccontent2 class="upload-content" fcListType="picture-card" (fcEvent)="event('fileEvent',$event)" [fcOption]="fcUploadOption">
            </fc-upload>
        </fc-layoutcol>  
    </div>
    <div fccontent>
        <fc-tlbform fccontent [fcAppid]="appId" (fcEvent)="tlbformEvent($event)" fcLayout = "center"></fc-tlbform>
    </div>
</fc-layoutpanel>
  `,
  styles: [`
  .sys-proicon{
    display: inline-block;
    margin-left: 55%;
  }
  .sys-fciconlayout{
    width: 12%;
    height: 89px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #fbfbfb;
    margin-bottom: 9px;
}
  .sys-productbutton{
    text-align : center;
  }
  `]
})
export class SysproducteditComponent extends ParentEditComponent {
  constructor(public mainService: SysproductService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    private modal: NzModalSubject,
    public modalService: NzModalService
    ) {
    super(mainService, router, activeRoute);
  }
  visible :boolean = false;
  fcUploadOption: { FILETYPE: string; SOURCEID: any; SOURCEAID: string; SOURCEFIELD: string; RESTITLE: string; };
  addNew(mainObj: any): boolean {
    return true;
  }
  init(): void {
    //上传图片资源和地址
    this.fcUploadOption = {
      FILETYPE: "PIC",
      SOURCEID: this.routerParam.ID,
      SOURCEAID: "SYSPRODUCT",
      SOURCEFIELD: "",
      RESTITLE: ""
      };
      // this.content = 'fc-icon-icannul'
      //选择图片如果content为undefined,那没 选择图片span显示否则不显示
      if(this.mainObj.ICON === undefined){
         this.visible = true;
      }else{
         this.visible = false;
      }
      //初始化模式为标签
      this.mainObj.DISPLAYMODE = "TAB"
  }
  getDefaultQuery() {
  }
  event(eventName: string, context: any): void {
    switch (eventName) {
      //fc-upload上传事件
      case 'fileEvent':
      //调用上传方法
      this.fileEvent(context);
      break;
      case 'ruleaddEvent':
      this.mainObj.SSEGMENT_TYPE = context
      break;
    }
  }
  /**
  * 上传图片文档方法
  * @param event  
  */
 fileEvent(event): any {
  switch (event.eventName) {
    case "success":
    this.mainService.providers.msgService.message("上传成功");
      break;
    case "failure":
    this.mainService.providers.msgService.message("上传失败");
      break;
  }
}
/**
  *  点击图标弹出列表
  * @param event  
  */
 iconEvent(envet){
  this.modalService.open({
    title: '字体图标',
    content: SysicondialogComponent,
    width: "76%",
    onOk() {
     },
    onCancel() { },
    footer: false,
    componentParams: {
      options: {
      }
    }
  }).subscribe(obj => {
    if(obj.DICVALUE !== undefined){
      this.mainObj.ICON = obj.DICVALUE
      this.visible = true;
    }
  });
} 
}
