import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentEditComponent, FclistdataComponent, FcdateComponent } from 'fccomponent';
import { SysdepartmentService, Args_Dept, EmployList_State } from '../../services/sysdepartment.service';
import { FCEVENT } from 'fccomponent/fc';
import { environment } from '../../../../environments/environment';
import { ProvidersService } from 'fccore';
import { GridApi, ColumnApi } from 'ag-grid';
import * as differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
@Component({
  selector: 'sysdepartmentadd',
  templateUrl: './sysdepartmentadd.component.html',
  styles: [`

  `]
})
export class SysdepartmentaddComponent extends ParentEditComponent {
  employeeList_state: any;
  //单位隶属关系
  sysdepartmentrelationObj: any = {};
  employeeDept_listcond: any;
  employee_listcond: any;
  @ViewChild('employeeList') employeeList: FclistdataComponent;
  @ViewChild('employeeList_dept') employeeList_dept: FclistdataComponent;
  @ViewChild('deptRelationList') deptRelationList: FclistdataComponent;
  @ViewChild('contentTplEmployee') contentTplEmployee: FclistdataComponent;
  @ViewChild('footerEmployee') footerEmployee: FclistdataComponent;
  @ViewChild('beginDate') beginDate: FcdateComponent;
  constructor(public mainService: SysdepartmentService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    private _providers: ProvidersService,
  ) {
    super(mainService, router, activeRoute);
  }
  init() {
    //初始化单位隶属关系字段
    this.sysdepartmentrelationObj = this.mainService.getSysdepartmentrelationField();
    this.initComponent();
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
        this.mainService.createDepartment(this.mainObj, this.sysdepartmentrelationObj).subscribe(result => {
          if (result.CODE === '0') {
            this.messageService.message('保存成功');
            this.router.navigate(['/' + environment.pid.toLocaleLowerCase() + '/sysdepartmentList']);
          } else {
            this.messageService.error("保存失败");
          }
        })
        break;
      case 'cardBack'://返回
        this._providers.commonService.event('selectedMenu', {
          refresh: 'N', MENUID: 'SYSDEPARTMENT', ROUTER: 'sysdepartmentList',
          PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '单位调整', MENUICON: 'fc-icon-bgefficiency'
        });
        break;
    }
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    setTimeout(() => {
      let columnApi: ColumnApi = this.employeeList_dept._gridColumnApi
      columnApi.setColumnVisible('ROWNUM', false);
    });
  }
  initComponent() {
    this.employeeDept_listcond = { where: `SDEPT_CODE = '${this.mainObj.SDEPT_CODE}` };
    this.employee_listcond = { where: `SDEPT_CODE is null or SDEPT_CODE = ''` };
    this.employeeList_state = EmployList_State.noValue;
  }
  employee_add(args: Args_Dept) {
    if (this.mainObj.SDEPT_CODE) {
      args = { titleTpl: '新增部门职员', contentTpl: this.contentTplEmployee, footerTpl: this.footerEmployee };
      this.employee_listcond = this.mainService.beforeEmployee_add(this.employeeList_dept);
      this.mainService.open(args);
    } else {
      this.messageService.warm("部门编码不存在！")
    }
  }
  employee_del() {
    this.mainService.employee_del(this.employeeList_dept);
    this.checkEmployeeList();
  }
  employeeDialog_cancel() {
    this.mainService.dialogCancel();
  }
  employeeDialog_ok() {
    this.mainService.dialogOk(this.employeeList, this.employeeList_dept, { key: 'SDEPT_CODE', value: this.mainObj.SDEPT_CODE });
    this.checkEmployeeList();
  }
  checkEmployeeList() {
    this.employeeList_state = this.mainService.checkEmployeeList(this.employeeList_dept)
  }
  dateChanged(ev) {
    this.mainObj.SBEGIN_DATE = '';
    this.beginDate._disabledDate = (current) => {
      return differenceInCalendarDays(ev, current) > 0
    }
  }
}
