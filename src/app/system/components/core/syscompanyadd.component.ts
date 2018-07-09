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
  //父级编码
  parentCode: string;
  //维度编码
  dimCode: string;
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
    //上级单位代码
    this.parentCode = this.routerParam.parentCode;
    //维度代码
    this.dimCode = this.routerParam.dimcode;
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  event(eventName: string, param: any): void {

  }
  ngOnChange() {

    this.logService.debug(this.mainObj.SBEGIN_DATE)
  }
  cardSaveBack() {
    this.mainService.saveOrUpdateCompany(this.mainObj, this.syscompanyrelationObj, this.dimCode, this.parentCode)
      .subscribe(result => {
        if (result[0].CODE === '0' && result[1].CODE === '0') {
          this.messageService.message('保存成功');
          this.router.navigate(['/' + environment.pid.toLocaleLowerCase() + '/syscompanyList']);
        } else {
          this.messageService.error("保存失败");
          this.messageService.error(result[0].MSG + ',' + result[1].MSG);
        }
      })
  }
  cardBack() {
    this._providers.commonService.event('selectedMenu', {
      refresh: 'N', MENUID: 'SYSCOMPANY', ROUTER: 'syscompanyList',
      PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '单位调整', MENUICON: 'fc-icon-bgefficiency'
    });
  }
}
