import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { SysannouncementService } from '../../services/sysannouncement.service';
import { FCEVENT } from 'fccomponent/fc';
import { SysmessageService, Sysmessage } from '../../services/sysmessage.service';
@Component({
    selector: 'sysannouncement',
    template: `
    <fc-layoutpanel fcFull="true" >
    <fc-layoutrow fcSpan="65"  fccontent>
    <fc-title fcLabel="详情查看" fccontent1 fcBorder="bottom"></fc-title>
    <div fccontent2>
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
    versionSearchObj: any;
    saveObj: any = {};
    init(): void {
       //initObjDefaultValue 获取数据默认的数据值
          this.saveObj = this.mainService.initObjDefaultValue(this.mainApp);
          // 点击数据，通过appId、routerParam,去动态传ID
          this.mainService.announcementRouter(this.appId,this.routerParam).subscribe(res => {
            if (res.CODE === '0')
                this.saveObj = res.DATA[0]
                // 把事件转成2018-12-15
                this.saveObj.PUBLISHTIME = this.mainService.providers.commonService.timestampFormat(Number.parseInt(this.saveObj.PUBLISHTIME) ,
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
}