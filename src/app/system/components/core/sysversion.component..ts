import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { SysversionService } from '../../services/sysrversion.service';
import { FCEVENT } from 'fccomponent/fc';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'sysversion',
  template: `
  <fc-layoutpanel fcFull="true" >
    <fc-layoutrow fcSpan="220"  fccontent>
    <div fccontent1>
           <fc-tlblist [fcAppid]="appId" (fcEvent)="tlblistEvent($event)"></fc-tlblist>
           <fc-layoutcol fcSpans="1,1" fccontent>
              <fc-combo [(ngModel)]="versionCode" fcLabel="版本类型" fcPlaceHolder="请输入版本" [fcAppid]="appId" fcFieldCode='VERSION' [(ngModel)]="versionCode" fcValueCode='DICVALUE' fcLabelCode='DICDESC' name="textname" [fcReadonly]="!canEdit" ></fc-combo>
              <fc-text fccontent1 style="flex:1" fcPlaceHolder="请输入版本号" fcLabel="版本号" [(ngModel)]="saveObj.VERSION" name="VERSION" [fcReadonly]="!canEdit"></fc-text>
              <fc-text fccontent2 style="flex:1" fcPlaceHolder="请输入上一版本号" fcLabel="上一版本号" [(ngModel)]="saveObj.LASTVERSION" name="LASTVERSION" [fcReadonly]="!canEdit"></fc-text>
              <fc-date fccontent1 fcFormat="YYYY/MM/DD"  [fcLabel]="'发布时间'" name="datename" [(ngModel)]="saveObj.PUBLISHTIME" name="PUBLISHTIME" [fcReadonly]="!canEdit"></fc-date>
              <fc-text fccontent2  style="flex:1" fcPlaceHolder="请输入产品ID" fcLabel="产品ID" [(ngModel)]="saveObj.PID" name="PID" [fcReadonly]="!canEdit"></fc-text>
           </fc-layoutcol> 
           <fc-textarea fccontent fcCol="1" fcRows="2" [fcAppid]="appId" [(ngModel)]="saveObj.DESCRIPTION" fcPlaceHolder="请输入更新内容" fcLabel="更新内容" name="DESCRIPTION" [fcReadonly]="!canEdit"></fc-textarea>
           <div fccontent style="text-align:center;">
              <fc-button fccontent1 [fcLabel]="btn_1_label" fcType="primary" (click)="Btn1_Events(versionCode,btn_1_label)"></fc-button>
              <fc-button fccontent2 [fcLabel]="btn_2_label" fcType="default" (click)="Btn2_Events(btn_2_label)"></fc-button>
           </div>
      </div>
    <fc-listdata  fccontent2 [fcCondition]="versionSearchObj"  [fcAppid]="appId" [fcOption]="mainService.listOptions" (fcEvent)="listdataEvent($event)"></fc-listdata>
    </fc-layoutrow>
  </fc-layoutpanel>
    `,
  styles: [`
  :host ::ng-deep .fc-layoutpanel .fc-content{
    height:100%;
  }
  .list-search {
    width:100%;
  }
  .list-search:after{
    content:'';
    display:block;
    clearfix:both;
  }
  .list-search-every{
    width:24%;
    float:left;
  }
  .listdata{
    height:100%;
  }
  `]
})
export class SysversionComponent extends ParentlistComponent {
  content: string = "";
  versionCode: string = '';
  canEdit: boolean = false;
  btn_1_label: string = "查询";
  btn_2_label: string = "重置";
  versionSearchObj: any;
  saveObj: any = {};
  init(): void {
    this.mainService.providers.msgService.message("初始化完成");
    //initObjDefaultValue 获取数据默认的数据值
    this.saveObj = this.appService.initObjDefaultValue(this.mainApp);
  }
  getDefaultQuery() {
  }

  event(eventName: string, context: any): void {
  }

  constructor(public mainService: SysversionService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    public datePipe: DatePipe) {
    super(mainService, router, activeRoute);
  }

  tlblistEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'listAdd':
        this.saveObj = {};
        this.canEdit = !this.canEdit;
        this.btn_1_label = "保存";
        this.btn_2_label = "取消";
        break;
      case "listDelete": //删除
        this.mainService.providers.msgService.message("删除事件触发")

        break;
      case "export": //导出      
        this.mainService.providers.msgService.message("导出事件触发")
        break;
      case "import": //导入
        this.mainService.providers.msgService.message("导入事件触发")
        break;
    }
  }
  Btn1_Events(versionCode: string, label: string) {
    switch (label) {
      case "查询":
        this.versionSearchObj = versionCode;
        break;
      case "保存":
        if (this.beforeSave())
          this.mainService.save(this.saveObj).subscribe(res => {
            if (res.CODE = '0') {
              this.messageService.success('保存成功');
            } else {
              this.messageService.warm("保存失败");
            }
          });
        break;
    }
  }
  Btn2_Events(label: string) {
    switch (label) {
      case "重置":

        break;
      case "取消":
        this.btn_1_label = "查询";
        this.btn_2_label = "重置";
        this.canEdit = !this.canEdit;
        break;
    }
  }
  beforeSave(): boolean {
    this.saveObjHandle(this.mainApp.P_APPFIELDS, this.saveObj);
    // 保存之前先将saveObj处理一下
    this.saveObj.TS = this.commonService.getTimestamp();
    return true;
  }

  /**
 * 时间与字符串之间的相互转换
 * @param dateTime 时间对象
 * @param str 时间字符串
 */
  convertTime(dateTime: any) {
    if (dateTime !== null) {
      //时间转换成需要的字符串
      return this.commonService.getTimestampFromDate(dateTime)
    }
  }
  /**
 * 新增--对saveObj进行加工
 * @param arr 当前mainapp的字段
 * @param saveObj 
 */
  saveObjHandle(arr: any[], saveObj: any): any {
    arr.forEach(el => {
      //时间的转换
      if (saveObj[el.FIELDCODE] instanceof Date) {
        saveObj[el.FIELDCODE] = this.convertTime(saveObj[el.FIELDCODE]);
        return false;
      }
      //将saveObj中的对象处理掉
      if (saveObj[el.FIELDCODE] instanceof Object) {
        saveObj[el.FIELDCODE] = saveObj[el.FIELDCODE].value;
        return false;
      }

      //处理null值的问题
      if (saveObj[el.FIELDCODE] === null) {
        saveObj[el.FIELDCODE] = "";
        return false;
      }
    })
    return saveObj;
  }
}
