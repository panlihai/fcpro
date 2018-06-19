import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { SysannouncementService } from '../../services/sysannouncement.service';
import { FCEVENT } from 'fccomponent/fc';
@Component({
    selector: 'sysversion',
    template: `
    <fc-layoutpanel fcFull="true" >
    <fc-layoutrow fcSpan="220"  fccontent>
    <div fccontent1>
           <fc-tlblist [fcAppid]="appId" (fcEvent)="tlblistEvent($event)"></fc-tlblist>
           <fc-layoutcol fcSpans="1,1" fccontent>
              <fc-text fccontent1 style="flex:1" fcPlaceHolder="请输入标题" fcLabel="标题" [(ngModel)]="saveObj.TITLE" name="TITLE"></fc-text>
              <fc-text fccontent2 style="flex:1" fcPlaceHolder="请输入发布人" fcLabel="发布人" [(ngModel)]="saveObj.PUBLISHUSER" name="PUBLISHUSER" ></fc-text>
              <fc-text fccontent1 style="flex:1" fcPlaceHolder="请输入发布单位" fcLabel="发布单位" [(ngModel)]="saveObj.PUBLISHDEPT" name="PUBLISHDEPT"></fc-text>
              <fc-text fccontent2 style="flex:1" fcPlaceHolder="请输入公告类型" fcLabel="公告类型" [(ngModel)]="saveObj.CATAGORY" name="CATAGORY" ></fc-text>
           </fc-layoutcol> 
           <fc-textarea fccontent fcCol="1" fcRows="2" [fcAppid]="appId" [(ngModel)]="saveObj.CONTENT" fcPlaceHolder="请输入发布内容" fcLabel="发布内容" name="DESCRIPTION"></fc-textarea>
           <div fccontent style="text-align:center;">
              <fc-button fccontent1 [fcLabel]="btn_1_label" fcType="primary" (click)="Btn1_Events(versionCode,btn_1_label)"></fc-button>
              <fc-button fccontent2 [fcLabel]="btn_2_label" fcType="default" (click)="Btn2_Events(btn_2_label)"></fc-button>
              <fc-button fccontent2 [fcLabel]="btn_3_label" fcType="default" (click)="Btn3_Events(btn_3_label)"></fc-button>
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
export class SysannouncementComponent extends ParentlistComponent {
    content: string = "";
    versionCode: string = '';
    canEdit: boolean = false;
    btn_1_label: string = "返回";
    btn_2_label: string = "重置";
    btn_3_label: string = "发布"
    versionSearchObj: any;
    saveObj: any = {};
    init(): void {
        this.mainService.providers.msgService.message("初始化完成");
        //initObjDefaultValue 获取数据默认的数据值
        this.saveObj = this.appService.initObjDefaultValue(this.mainApp);
        this.appService.findWithQuery(this.appId, { WHERE: `ID='${this.routerParam.PARAM}'` }).subscribe(res => {
            if (res.CODE === '0')
                this.saveObj = res.DATA[0]
        })
    }
    getDefaultQuery() {
    }

    event(eventName: string, context: any): void {
    }

    constructor(public mainService: SysannouncementService,
        public router: Router,
        public activeRoute: ActivatedRoute) {
        super(mainService, router, activeRoute);
    }
    tlblistEvent(event: FCEVENT) {
        switch (event.eventName) {
            case 'listAdd':
                this.saveObj = {};
                this.saveObj.TITLE = '';
                this.saveObj.CONTENT = '';
                this.saveObj.PUBLISHUSER = '';
                this.saveObj.PUBLISHDEPT = '';
                this.saveObj.CATAGORY = '';
                break;
            case "listDelete": //删除
                this.mainService.providers.msgService.confirm('确认删除？', () => {
                    this.selectedObjects.forEach(el => {
                        this.mainService.delete(el).subscribe(res => {
                            if (res.CODE === '0') this.mainService.providers.msgService.success('删除成功')
                            else this.mainService.providers.msgService.warm('删除失败')
                        }
                        )
                    })
                }, () => { })
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
            case "返回":
                this.router.navigate(['/system/home'], {})
                break;
        }
    }
    Btn2_Events(label: string) {
        switch (label) {
            case "重置":
                this.saveObj.TITLE = '';
                this.saveObj.CONTENT = '';
                this.saveObj.PUBLISHUSER = '';
                this.saveObj.PUBLISHDEPT = '';
                this.saveObj.CATAGORY = '';
                break;
        }
    }
    Btn3_Events(label: string) {
        switch (label) {
            case "发布":
                delete this.saveObj['ID'];
                this.mainService.save(this.saveObj).subscribe(res => {
                    if (res.CODE = '0') {
                        this.messageService.success('发布成功');
                    } else {
                        this.messageService.warm("发布失败");
                    }
                });
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

