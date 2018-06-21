import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { SysannouncementService } from '../../services/sysannouncement.service';
import { FCEVENT } from 'fccomponent/fc';
import { SysmessageService, Sysmessage } from '../../services/sysmessage.service';
@Component({
    selector: 'sysversion',
    template: `
    <fc-layoutpanel fcFull="true" >
    <fc-layoutrow fcSpan="180"  fccontent>
    <div fccontent1>
           <fc-layoutcol fcSpans="1,1" fccontent>
              <fc-text fccontent1 style="flex:1" fcPlaceHolder="请输入标题" fcLabel="标题" [(ngModel)]="saveObj.TITLE" name="TITLE" fcReadonly="true"></fc-text>
              <fc-text fccontent2 style="flex:1" fcPlaceHolder="请输入发布人" fcLabel="发布人" [(ngModel)]="saveObj.PUBLISHUSER" name="PUBLISHUSER" fcReadonly="true"></fc-text>
              <fc-text fccontent1 style="flex:1" fcPlaceHolder="请输入发布单位" fcLabel="发布单位" [(ngModel)]="saveObj.PUBLISHDEPT" name="PUBLISHDEPT" fcReadonly="true"></fc-text>
              <fc-text fccontent2 style="flex:1" fcPlaceHolder="请输入公告类型" fcLabel="公告类型" [(ngModel)]="saveObj.CATAGORY" name="CATAGORY" fcReadonly="true"></fc-text>
           </fc-layoutcol> 
           <fc-textarea fccontent fcCol="1" fcRows="2" [fcAppid]="appId" [(ngModel)]="saveObj.CONTENT" fcPlaceHolder="请输入发布内容" fcLabel="发布内容" name="DESCRIPTION" fcReadonly="true"></fc-textarea>
      </div>
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
    contenTp1_back: any;
    nzModal: any;
    init(): void {
        this.mainService.providers.msgService.message("初始化完成");
        //initObjDefaultValue 获取数据默认的数据值
        this.saveObj = this.appService.initObjDefaultValue(this.mainApp);
        this.appService.findWithQuery(this.appId, { WHERE: `ID='${this.routerParam.PARAM}'` }).subscribe(res => {
            if (res.CODE === '0')
                this.saveObj = res.DATA[0]
                this.saveObj.PUBLISHTIME = this.mainService.providers.commonService.timestampFormat(
                    Number.parseInt(this.saveObj.PUBLISHTIME) ,
                    "yyyy-MM-dd" + ""
                  );
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
            case "exportexcel": //导出      
                this.mainService.providers.msgService.message("导出事件触发")
                break;
            case "importexcel": //导入
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
}