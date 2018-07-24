import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentEditComponent, FcdateComponent, FctextComponent } from 'fccomponent';
import { SysdepartmentService } from '../../services/sysdepartment.service';
import { startOfDay, differenceInCalendarDays } from 'date-fns';
import { isDate } from 'util';
import { DialogListArgs, DialogListOptions } from './dialog/dialogList.component';
@Component({
  selector: 'sysdepartmentedit',
  templateUrl: './sysdepartmentedit.component.html',
  styles: [`

  `]
})
export class SysdepartmenteditComponent extends ParentEditComponent {
  rangeDate: any;
  dialogAppId: string;
  //单位隶属关系
  relationObj: any = {};
  dialogListCond: any;
  dialogState: any;
  modalStarting: boolean;
  @ViewChild('beginDate') beginDate: FcdateComponent;
  @ViewChild('estDate') estDate: FcdateComponent;
  constructor(public mainService: SysdepartmentService,
    public router: Router,
    public activeRoute: ActivatedRoute,
  ) {
    super(mainService, router, activeRoute);
  }
  /** YM
    * 非父类组件事件触发收集及相关处理函数派发
    * @param eventName 
    * @param param 
    */
  event(eventName: string, param?: any): void {
    let dialogListArgs: DialogListArgs = { appId: null, configInterface: { title: null } };
    dialogListArgs.methodIndex = eventName;
    if (param instanceof FctextComponent) dialogListArgs.textComponent = param;
    switch (eventName) {
      case 'SCOMPANY_CODE':
        this.showModal(dialogListArgs);
        break;
      case 'SPRINCIPALVALUE':
        this.showModal(dialogListArgs);
        break;
      case 'SUPERIOR':
        this.showModal(dialogListArgs);
        break;
      case 'ILEVEL':
        this.checkLevelChange(param);
        break;
      case 'SEST_DATE':
        this.dateChanged(param, eventName);
        break;
      case 'SBEGIN_DATE':
        this.dateChanged(param, eventName);
        break;
    }
  }
  /** YM
    * 初始化函数
    */
  init() {
    this.relationObj = this.mainService.getSysdepartmentrelationField();
  }
  /** YM
    * 新增前执行函数
    */
  addNew(mainObj: any): boolean {
    return true;
  }
  /** YM
    * 保存前执行函数
    */
  beforeSave() {
    this.mainObj = this.mainService.beforeSave(this.mainObj);
    return true;
  }
  /** YM
    * 部门层级值改动后的处理
    * @param ev 
    */
  checkLevelChange(ev) {
    this.mainObj.SCOMPANY_CODE = '';
    this.mainObj.SUPERIOR = '';
    this.mainObj.SEST_DATE = '';
    this.mainObj.SBEGIN_DATE = '';
  }
  /** YM
    * 日期组件的改变值获取后的逻辑处理;
    * @param changedValue 
    * @param dateName 
    */
  dateChanged(changedValue, dateName) {
    if (dateName === 'SEST_DATE') {
      this.mainObj.SBEGIN_DATE = '';
      this.beginDate._disabledDate = (current) => {
        return differenceInCalendarDays(changedValue, current) > 0 || differenceInCalendarDays(this.rangeDate.end, current) < 0;
      }
    }
  }
  /** YM
    * 弹窗的必要参数构建函数派发
    * @param dialogListArgs 
    */
  buildDialogListArgs(dialogListArgs: DialogListArgs) {
    dialogListArgs.listOption = DialogListOptions;
    switch (dialogListArgs.methodIndex) {
      case 'SCOMPANY_CODE':
        dialogListArgs.configInterface.title = '选择部门隶属单位';
        dialogListArgs.appId = 'SYSCOMPANY';
        dialogListArgs.condition = {};
        dialogListArgs.listOption.fcCheckboxSelection = false;
        break;
      case 'SUPERIOR':
        dialogListArgs.configInterface.title = '选择上级部门';
        dialogListArgs.appId = this.appId;
        let ilevel = this.mainService.stringAsNumToMinus(this.mainObj.ILEVEL, 1);
        dialogListArgs.condition = { where: `ILEVEL = '${ilevel}'` };
        dialogListArgs.listOption.fcCheckboxSelection = false;
        break;
      case 'SPRINCIPALVALUE':
        dialogListArgs.configInterface.title = '选择部门负责人';
        dialogListArgs.appId = 'SYSEMPLOYEE';
        dialogListArgs.condition = {};
        dialogListArgs.listOption.fcCheckboxSelection = false;
        break;
    }
    return dialogListArgs;
  }
  /** YM
    * 显示窗口前的判断
    * @param dialogListArgs 
    */
  showModal(dialogListArgs: DialogListArgs) {
    if (dialogListArgs.textComponent ? !dialogListArgs.textComponent.fcDisabled : true) {
      dialogListArgs = this.buildDialogListArgs(dialogListArgs);
      dialogListArgs.configInterface.width = "80%";
      this.mainService.openDialog(dialogListArgs).subscribe(dialogListArgs => {
        if (dialogListArgs.hasOwnProperty('methodIndex'))
          this.afterFuctionForDialog(dialogListArgs);
      });;
    }
  }
  /** YM
    * 弹窗确认后的处理函数派发
    * @param dialogListArgs 
    */
  afterFuctionForDialog(dialogListArgs: DialogListArgs) {
    let obj = this.mainService.dialogOk(dialogListArgs);
    switch (dialogListArgs.methodIndex) {
      case 'SCOMPANY_CODE':
        this.mainObj.SCOMPANY_CODE = obj.SCOMPANY_CODE;
        this.rangeDate = { begin: startOfDay(obj.SBEGIN_DATE), end: startOfDay(obj.SEND_DATE) };
        setTimeout(() => {
          this.mainObj.SEST_DATE = '';
          this.estDate._disabledDate = (current) => {
            if (!current && !this.rangeDate) {
              return false;
            }
            return differenceInCalendarDays(this.rangeDate.begin, current) > 0 || differenceInCalendarDays(this.rangeDate.end, current) < 0;
          }
        });
        break;
      case 'SUPERIOR':
        this.mainService.getCompanyEndDate(obj.SCOMPANY_CODE).subscribe(res => {
          if (res.CODE === '0') {
            this.rangeDate = { begin: startOfDay(obj.SBEGIN_DATE), end: res.DATA[0].SEND_DATE };
            this.mainObj.SUPERIOR = obj.SDEPT_CODE;
            this.mainService.findWithQuery({ where: `SDEPT_CODE = '${obj.SDEPT_CODE}'` }).subscribe(res => {
              if (res.CODE === '0') {
                this.messageService.success('隶属单位编码取数成功');
                this.mainObj.SCOMPANY_CODE = res.DATA[0].SCOMPANY_CODE;
              } else {
                this.messageService.error('隶属单位编码取数失败');
              }
            });
            setTimeout(() => {
              this.mainObj.SEST_DATE = '';
              this.estDate._disabledDate = (current) => {
                if (!current && !this.rangeDate) {
                  return false;
                }
                return differenceInCalendarDays(this.rangeDate.begin, current) > 0 || differenceInCalendarDays(this.rangeDate.end, current) < 0;
              }
            });
          }
        })
        break;
      case 'SPRINCIPALVALUE':
        this.mainObj.SPRINCIPALVALUE = obj.SEMPLOYEE_CODE;
        break;
    }
  }
  carSaveBack(action: string) {
    if (this.beforeSave()) {
      //生效日期
      if (!this.validator()) {
        return;
      }
      if (isDate(this.mainObj.SBEGIN_DATE))
        this.mainObj.SBEGIN_DATE = this.commonService.dateFormat(this.mainObj.SBEGIN_DATE, 'yyyyMMdd');
      //注销日期
      if (isDate(this.mainObj.SEST_DATE))
        this.mainObj.SEST_DATE = this.commonService.dateFormat(this.mainObj.SEST_DATE, 'yyyyMMdd');
      this.appService.saveObject("SYSDEPARTMENT", this.mainObj).subscribe(result => {
        if (result.CODE === '0') {
          this.messageService.message('保存成功');
          this.afterSave()
          this.cardBack(action);
        } else {
          this.messageService.error("保存失败");
        }
      })
    }
  }
}
