import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentEditComponent } from 'fccomponent';
import { SyscompanyService } from '../../services/syscompany.service';
import { FCEVENT } from 'fccomponent/fc';
import { environment } from '../../../../environments/environment';
import { ProvidersService } from 'fccore';
@Component({
  selector: 'syscompanyadd',
  templateUrl: './syscompanyadd.component.html',
  styles: [`

  `]
})
export class SyscompanyaddComponent extends ParentEditComponent {
  //单位隶属关系
  syscompanyrelationObj: any = {};
  constructor(public mainService: SyscompanyService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    private _providers: ProvidersService,
  ) {
    super(mainService, router, activeRoute);
  }
  init() {
    //初始化单位隶属关系字段
    this.syscompanyrelationObj = this.mainService.getSyscompanyrelationField();
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  event(eventName: string, param: any): void {

  }
  /**
   * 工具栏事件
   */
  tlbformEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'cardSaveBack'://保存
        //生效日期
        this.mainObj.SBEGIN_DATE = this.commonService.dateFormat(this.mainObj.SBEGIN_DATE, 'yyyyMMdd');
        //注销日期
        this.mainObj.SEND_DATE = this.commonService.dateFormat(this.mainObj.SEND_DATE, 'yyyyMMdd');
        //成立日期
        this.mainObj.SEST_DATE = this.commonService.dateFormat(this.mainObj.SEST_DATE, 'yyyyMMdd');
        this.mainService.createCompany(this.mainObj, this.syscompanyrelationObj).subscribe(result => {
          if (result.CODE === '0') {
            this.messageService.message('保存成功');
            this.router.navigate(['/' + environment.pid.toLocaleLowerCase() + '/syscompanyList']);
          } else {
            this.messageService.error("保存失败");
          }
        })
        break;
      case 'cardBack'://返回
        this._providers.commonService.event('selectedMenu', {
          refresh: 'N', MENUID: 'SYSCOMPANY', ROUTER: 'syscompanyList',
          PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '单位调整', MENUICON: 'fc-icon-bgefficiency'
        });
        break;
    }
  }
}
