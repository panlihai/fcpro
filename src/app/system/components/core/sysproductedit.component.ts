
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
    <fc-tlbform fccontent [fcAppid]="appId" (fcEvent)="tlbformEvent($event)" fctoolbar></fc-tlbform>
    <fc-title fccontent fcLabel="基本信息" fcBorder="bottom" ></fc-title>
    <fc-layoutcol fcSpans="7,3" fccontent>
        <fc-text fccontent1 [(ngModel)]="mainObj.PID"  fcLabel="产品Id:" name="PID" ></fc-text>
        <fc-text fccontent1  [(ngModel)]="mainObj.PNAME"  name="PNAME"  fcLabel="产品名称:"></fc-text>
        <fc-radio  fccontent1  [(ngModel)]="mainObj.ENABLE" [fcLabel]="'是否启用:'" [fcAppid]="appId" fcFieldCode="ENABLE" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio>
        <fc-text fccontent1  [(ngModel)]="mainObj.PARENTPID" [fcLabel]="'产品依赖:'" name="PARENTPID"  ></fc-text>
        <fc-text fccontent1  [(ngModel)]="mainObj.SORT"  [fcLabel]="'排序:'" name="SORT"  ></fc-text>
    </fc-layoutcol>
    <fc-textarea fccontent  [(ngModel)]="mainObj.DIRECTION" fcCol="1" fcRows="2" fcLabel="备注（可选）:" name="DIRECTION"></fc-textarea>
    <fc-title fccontent fcLabel="其他信息" fcBorder="bottom" ></fc-title>
    <div fccontent>
        <fc-layoutcol fcSpans="2,8" fccontent>
            <span class="sys-proicon" fccontent1>产品图标:</span>
            <span fccontent2 class="sys-fciconlayout" (click)="iconEvent($event)">
                <fc-icon fcIcon="fc-icon-notice" fcSize="default" fcToolTip="default"></fc-icon>
            </span>
        </fc-layoutcol>
    </div>
    <div fccontent>  
        <fc-layoutcol fcSpans="2,8" fccontent>
            <span class="sys-proicon" fccontent1>产品文档:</span>
            <fc-upload fccontent2 class="upload-content" fcListType="picture-card" (fcEvent)="fileEvent($event)" [fcOption]="fcUploadOption">
            </fc-upload>
        </fc-layoutcol>  
    </div>
    <div fccontent>
        <fc-button fcLabel="保存" fcType="primary" (click)="save()"></fc-button>
        <fc-button fcLabel="+数据源" fcType="default" (click)="reset()"></fc-button>
        <fc-button fcLabel="+服务" fcType="default" (click)="reset()"></fc-button>
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
  fcUploadOption: { FILETYPE: string; SOURCEID: any; SOURCEAID: string; SOURCEFIELD: string; RESTITLE: string; };
  addNew(mainObj: any): boolean {
    return true;
  }
  init(): void {
    this.fcUploadOption = {
      FILETYPE: "PIC",
      SOURCEID: this.routerParam.ID,
      SOURCEAID: "AR10",
      SOURCEFIELD: "",
      RESTITLE: ""
    };
  }
  getDefaultQuery() {
  }
  event(eventName: string, context: any): void {

  }
  /**
  * 上传图片
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
  iconEvent(envet) {
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

    });
  }
}
