import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';
import { ParentEditComponent, FctextComponent, FccomboComponent } from 'fccomponent';
import { Router, ActivatedRoute } from '@angular/router';
import { SysaddGroupService } from '../../../services/sysaddGroup.service';
@Component({
  selector: 'sysaddGroupdialogComponent',
  template: `
  <div class="addGroup">
    <div>
      <fc-text fcLabel="元数据ID" [(ngModel)]="mainObj.APPID" [fcAppid]="appId" fcFieldCode="APPID" [fcValid]="mainValid.APPID"  name="APPID"></fc-text>
      <fc-text fcLabel="分组编码" [(ngModel)]="mainObj.GRPCODE" [fcAppid]="appId" fcFieldCode="GRPCODE" [fcValid]="mainValid.GRPCODE" name="GRPCODE"></fc-text>
      <fc-text fcLabel="分组名称" [(ngModel)]="mainObj.GRPNAME" [fcAppid]="appId" fcFieldCode="GRPNAME" [fcValid]="mainValid.GRPNAME" name="GRPNAME"></fc-text>
    </div>
    <fc-tlbform fccontent1 fcType="primary" [fcAppid]="appId" fcLayout="center" (fcEvent)="tlbformEvent($event)" class="basicTlb"></fc-tlbform>
</div>
    `,
  styles: [`
  
  `]
})
export class SysaddGroupdialogComponent extends ParentEditComponent {
  //mainObj
  mainObj;
  @Input()
  set options(option: any) {
    this.mainObj.APPID = option.APPID;
  }
  constructor(private modal: NzModalSubject,
    public mainService: SysaddGroupService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  /**
  * 组件初始化执行函数
  */
  init(): void {
    //初始化mainObj
    this.mainObj={
      APPID:'',
      GRPCODE:'',
      GRPNAME:''
    }
  }
  /**
  * 新增之前执行的函数
  * @param mainObj 
  */
  addNew(mainObj: any): boolean {
    return true;
  }
  /**
  * html事件收集及派发函数
  * @param eventName 
  * @param context 
  */
  event(eventName: string, context: any): void {
    
  }
  afterSave() {
    this.modal.destroy();
  }
}