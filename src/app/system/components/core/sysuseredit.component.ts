import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
import { ParentEditComponent } from 'fccomponent/parentedit.component';
import { environment } from '../../../../environments/environment';
import { SysuserService } from '../../services/sysuser.service';
@Component({
  selector: 'sysuseredit',
  template: `
  <fc-layoutpanel fccontent class="edituser">
    <fc-tlbform [fcAppid]="appId" (fcEvent)="tlbformEvent($event)" fctoolbar></fc-tlbform>
    <fc-title fcLabel="基本信息" fccontent fcBorder="bottom"></fc-title>
    <fc-layoutcol fccontent fcSpans="1,1">
        <fc-text fcLabel="用户编码" fccontent1 [(ngModel)]="mainObj.USERCODE"></fc-text>
        <fc-text  fcLabel="所属单位" fccontent1 [(ngModel)]="mainObj.COMPANYCODE" [fcAddonAfter]="'fc-icon-bgsearch'" fcMode="icon" (click)="modalMullist1.showModal()"  fcPlaceHolder="请选择所属单位">
        </fc-text>
        <fc-modallist #modalMullist1 fcTitle="请选择单位" [fcAppid]="'SYSCOMPANY'" [fcType]="'multiple'" (fcEvent)="companyEvent($event)">
        </fc-modallist>
        <fc-date fccontent1 fcFormat="YYYY/MM/DD"  [fcLabel]="'生效日期'" [(ngModel)]="mainObj.AVAILABLEDATE" ></fc-date>
        <fc-text fcLabel="描述" fccontent1 [(ngModel)]="mainObj.REMARK"></fc-text>
        <fc-text fcLabel="用户名称" fccontent2 [(ngModel)]="mainObj.NAME"></fc-text>
        <fc-text  fcLabel="所属部门" fccontent2 [(ngModel)]="mainObj.DEPTCODE" [fcAddonAfter]="'fc-icon-bgsearch'" fcMode="icon" (click)="modalMullist2.showModal()"  fcPlaceHolder="请选择所属部门">
         </fc-text>
        <fc-modallist #modalMullist2 fcTitle="请选择部门" [fcAppid]="'SYSDEPARTMENT'" [fcType]="'multiple'" (fcEvent)="departmentEvent($event)">
        </fc-modallist>
        <fc-date fccontent2 [fcLabel]="'失效日期'" fcFormat="YYYY/MM/DD" [(ngModel)]="mainObj.DISABLEDATE" ></fc-date>        
        <fc-radio [fcLabel]="'是否启用'" [(ngModel)]="mainObj.STOPFLAG" [fcAppid]="appId" fccontent2 fcFieldCode="STOPFLAG" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio>    
    </fc-layoutcol>
    <fc-title fcLabel="设置角色" fccontent fcBorder="bottom"></fc-title>  s
    <fc-check [fcLabel]="'待选角色'" [fcAppid]="'SYSROLE'" fccontent [(ngModel)]="userroleValue" fcFieldCode="ROLEID" fcLabelCode="ROLENAME" fcValueCode="ROLEID" (ngModelChange)="checkeditrole($event)"></fc-check>        
</fc-layoutpanel>
  `,
  styles: [`
  :host ::ng-deep .edituser>.fc-layoutpanel{
    height: 100%;
    overflow: auto;
    padding: 5px;
  }
  :host ::ng-deep .select-role,.selected-role{
    height:300px;
    border:1px solid #8C8C8C;
  }
  :host ::ng-deep .select-role{
    margin:0px 20px 0px 90px;
  }
  .select-roleheader{
    background-color:#ECF6FD;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-bottom: 1px solid #8C8C8C;
  }
  .selected-role {
    margin-right: 80px;
  }
  :host ::ng-deep .operat-buttons .fc-content{
    padding-top:70px;
    padding-left: 5px;
  }
  :host ::ng-deep .operat-buttons button {
    width: 60px;
    margin-bottom: 15px;
  }
  `]
})
export class SysusereditComponent extends ParentEditComponent {
  //待选角色
  userroleValue: string = '';
  //修改之后的用户角色
  newroleArr: any[] = [];
  constructor(public mainService: SysuserService,
    public router: Router,
    public activeRoute: ActivatedRoute, private modal: NzModalService) {
    super(mainService, router, activeRoute);  
  }
  init(): void {
    //初始化用户的角色信息
    if (this.mainObj.USERCODE !== '') {
      this.getuserRole(this.mainObj.USERCODE);
    }
  }
  event(eventName: string, context: any): void {
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  beforeSave(): boolean {
    //保存之前需要先把生效日期和失效日期转化为字符串来进行存储
    this.mainObj.AVAILABLEDATE = this.mainService.providers.commonService.dateFormat(this.mainObj.AVAILABLEDATE, 'yyyy/MM/dd');
    this.mainObj.DISABLEDATE = this.mainService.providers.commonService.dateFormat(this.mainObj.DISABLEDATE, 'yyyy/MM/dd');
    return true;
  };
  afterSave() {
    //将用户的角色信息存储到数据库里面
    if (this.newroleArr.length !== 0) {
      //获取该用户曾经的角色，从数据库里面删除,
      this.mainService.getuserRole(this.mainObj.USERCODE).subscribe(res => {
        if (res.CODE === '0') {
          res.DATA.forEach(element => {
            this.mainService.alldelete(element.ID);
          })
        } else if (res.CODE === '1') {
          this.mainService.providers.msgService.error('获取该员工角色信息失败')
        }
        //将修改后的用户角色添加到数据库  
        this.mainService.editUserrole(this.newroleArr);
      })
    }
  }
  /*
 * 选择单位事件
  */
  companyEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'success':
        this.mainObj.COMPANYCODE = event.param[0].SCOMPANY_CODE;
        break;
      case 'cacle':
        break;
    }
  }
  /*
  * 选择部门事件
  */
  departmentEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'success':
        this.mainObj.DEPTCODE = event.param[0].SDEPT_CODE;
        break;
      case 'cacle':
        break;
    }
  }
 /**
   * 关联该用户的角色
   * @param uerid 
   */
  getuserRole(uerid) {
    this.mainService.getuserRole(uerid).subscribe(result => {
      if (result.CODE = '0') {
        result.DATA.forEach(element => {
          this.userroleValue += element.ROLEID;
        })
      }
    })
  }
  /**
   * 用户角色的修改
   * @param event 
   */
  checkeditrole(event) {
    //获取修改用户的所有角色
    let newRole: any[] = [];
    if (event.indexOf(',') !== -1) {
      event.split(',').forEach(element => {
        newRole.push({
          PID: environment.pid,
          ROLEID: element,
          USERID: this.mainObj.USERCODE,
          REMARK: '修改用户角色'
        });
      })
    } else if (event.indexOf(',') === -1 && event !== '') {
      newRole = [{
        PID: environment.pid,
        ROLEID: event,
        USERID: this.mainObj.USERCODE,
        REMARK: '修改用户角色'
      }]
    }
    this.newroleArr = newRole;
  }
}