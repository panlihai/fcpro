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
  // 生效日期
  sbeginDate: Date;
  // 成立日期
  sestDate: Date;
  // 注销日期
  sendDate: Date;
  //单位隶属关系过滤
  companyrelationCondition: string;
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
    this.dimCode = this.routerParam.dimCode;
    //单位隶属关系过滤
    let relationCon: any = {
      WHERE: 'SDIM_CODE!=' + "'" + this.dimCode + "'"
    }
    this.companyrelationCondition = JSON.stringify(relationCon);
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  event(eventName: string, param: any): void {
    switch (eventName) {

    }
  }
  ngOnChange() {

  }
  /**
   * 表单工具栏事件
   * @param event 
   */
  tlbformEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'cardSaveBack':
        if (this.beforeSave()) {
          this.cardSaveBack(event.eventName);
        }
        break;
      case 'cardBack':
        this.cardBack(event.eventName);
        break;
    }
  }
  beforeSave(): boolean {
    //成立日期
    this.mainObj.SEST_DATE = this.sestDate;
    //生效日期
    this.mainObj.SBEGIN_DATE = this.sbeginDate;
    //注销日期
    this.mainObj.SEND_DATE = this.sendDate;
    let sbeginDateValid = JSON.parse(this.mainValid.SBEGIN_DATE);
    let sestDateValid = JSON.parse(this.mainValid.SEST_DATE);
    let sendDateValid = JSON.parse(this.mainValid.SEND_DATE);
    if (this.sbeginDate < this.sestDate) {
      sbeginDateValid.validators.customVal = true;
      sbeginDateValid.errorMessages.customVal = '生效日期不能小于成立日期';
      this.mainValid.SBEGIN_DATE = JSON.stringify(sbeginDateValid);
      this.validator();
      if (this.sendDate < this.sbeginDate) {
        sendDateValid.validators.customVal = true;
        sendDateValid.errorMessages.customVal = '注销日期不能小于生效日期';
        this.mainValid.SEND_DATE = JSON.stringify(sendDateValid);
        this.validator();
      } else {
        sendDateValid.validators.customVal = false;
        sendDateValid.show = false;
        sendDateValid.errorMessages.customVal = '注销日期填写正确';
        this.mainValid.SEND_DATE = JSON.stringify(sendDateValid);
        this.validator();
        return true;
      }
      return true;
    } else {
      sbeginDateValid.validators.customVal = false;
      sbeginDateValid.show = false;
      sbeginDateValid.errorMessages.customVal = '生效日期填写正确';
      this.mainValid.SBEGIN_DATE = JSON.stringify(sbeginDateValid);
      this.validator();
      return true;
    }
  }
  /**
   * 保存返回
   * @param action 
   */
  cardSaveBack(action: string) {
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
  /**
   * 返回
   * @param action 
   */
  cardBack(action: string) {
    this._providers.commonService.event('selectedMenu', {
      refresh: 'N', MENUID: 'SYSCOMPANY', ROUTER: 'syscompanyList',
      PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '单位调整', MENUICON: 'fc-icon-bgefficiency'
    });
  }
}
