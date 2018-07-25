import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SysappService } from '../../services/sysapp.service';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { ParentEditComponent } from 'fccomponent/parentedit.component';
@Component({
  selector: 'sysappedit',
  template: `
  <fc-layoutpanel>
    <div fcheader>
      <fc-title fcLabel="模型&元数据"></fc-title>
      <P>
          说明：FC开发设计平台，快速开发应用模型，此功能实现模型定义，实现数据库表及视图的新增、修改、删除 、同步。
      </P>
      <div class="sys-card-fast">
          <ul class="sys-fast-list">
              <li>
                  <fc-icon fcIcon="fc-icon-everyday" fcColor="#009DFF"></fc-icon>快速开始
              </li>
              <li>
                  <fc-icon fcIcon="fc-icon-definition" fcColor="#009DFF"></fc-icon>产品简介
              </li>
              <li>
                  <fc-icon fcIcon="fc-icon-update" fcColor="#009DFF"></fc-icon>产品文档
              </li>
              <li (click)="backList($event)">
                  <fc-icon fcIcon="fc-icon-update" fcColor="#009DFF"></fc-icon>返回列表
              </li>
          </ul>
      </div>
    </div>
    <fc-title fcLabel="基本信息" fccontent></fc-title>
    <fc-layoutcol fccontent fcSpans="1,1">
        <fc-text  fcLabel="APP名称" fccontent1 [fcAppid]="appId"  [(ngModel)]="mainObj.APPID"></fc-text>
        <fc-text  fcLabel="APP中文名称" fccontent1 [fcAppid]="appId"  [(ngModel)]="mainObj.APPNAME"></fc-text>
        <fc-text  fcLabel="主表" fccontent1 [fcAppid]="appId"  [(ngModel)]="mainObj.MAINTABLE"></fc-text>
        <fc-text  fcLabel="过滤条件" fccontent1 [fcAppid]="appId"  [(ngModel)]="mainObj.APPFILTER"></fc-text>
        <fc-text  fcLabel="来源类型" fccontent1 [fcAppid]="appId"  [(ngModel)]="mainObj.SOURCETYPE"></fc-text>
        <fc-text  fcLabel="分页大小" fccontent1 [fcAppid]="appId"  [(ngModel)]="mainObj.PAGESIZE"></fc-text>
        <fc-text fcLabel="排序" fccontent1 [fcAppid]="appId" [(ngModel)]="mainObj.SORTBY"></fc-text> 
        <fc-text  fcLabel="监听类" fccontent1 [fcAppid]="appId"  [(ngModel)]="mainObj.SERVICECLASS"></fc-text>
        <fc-text fcLabel="帮助" fccontent1 [fcAppid]="appId" [(ngModel)]="mainObj.HELP"></fc-text> 
        <fc-radio  fcLabel="APP类型" fccontent1 [fcAppid]="appId"  [(ngModel)]="mainObj.APPTYPE" fcFieldCode="APPTYPE" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio>
        <fc-radio fcLabel="是否启用" [fcAppid]="appId" fccontent1 fcFieldCode="ENABLE" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio> 
        <fc-radio  fcLabel="模块" fccontent1 [fcAppid]="appId"  [(ngModel)]="mainObj.APPMODEL" fcFieldCode="APPMODEL" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio>
        <fc-radio  fcLabel="数据源" fccontent1 [fcAppid]="appId"  [(ngModel)]="mainObj.DATASOURCE" fcFieldCode="DATASOURCE" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio>
        <fc-radio  fcLabel="表类型" fccontent1 [fcAppid]="appId"  [(ngModel)]="mainObj.TABLETYPE" fcFieldCode="TABLETYPE" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio>
        <fc-tlbform [fcAppid]="appId" (fcEvent)="tlbformEvent($event)" fccontent1 class="sysappeditSave"></fc-tlbform>
    </fc-layoutcol>
    <fc-title fcLabel="元数据属性" fccontent></fc-title>
    <div nz-row [nzGutter]="8" fccontent>
      <!-- 新增卡片操作 -->
      <div nz-col [nzSpan]="6" class="sys-card sys-card-add">
          <nz-card (click)="listAdd($event);">
              <ng-template #body>
                  <fc-icon fcIcon="fc-icon-add" fcFontSize="40" class="sys-card-addicon"></fc-icon>
                  <p class="sys-card-addtext">新增</p>
              </ng-template>
          </nz-card>
      </div>
      <!-- 产品列表循环 -->
      <div nz-col [nzSpan]="6" class="sys-card" *ngFor="let sysappattribute of sysAppattributes">
          <nz-card (click)="listEdit(sysapp);">
              <ng-template #body>
                  <div class="sys-card-content">
                      <fc-tooltip class="sys-card-help" fcTitle="{{sysappattribute.DIRECTION}}">
                            <fc-icon fcIcon="fc-icon-wiki" fcFontSize="22" fccontent></fc-icon>
                      </fc-tooltip>
                      <span class="sys-card-mark">
                          {{sysappattribute.APPID|slice:0:1}}
                      </span>
                      <div class="sys-card-text">
                          <div class="sys-card-title">
                              {{sysappattribute.FIELDCODE}}-{{sysappattribute.FIELDNAME}}
                          </div>
                          <p class="sys-card-smarks">{{sysappattribute.HELP}}</p>
                      </div>
                  </div>
                  <div class="sys-card-footer">
                      <fc-button class="sys-card-btn" fcLabel="属性" (click)="listEdit(sysapp);" [fcBlock]="true">
                      </fc-button>
                      <fc-button class="sys-card-btn" fcLabel="工具" (click)="delectOnesysapp(sysapp);" [fcBlock]="true">
                      </fc-button>
                      <fc-button class="sys-card-btn" fcLabel="接口" (click)="delectOnesysapp(sysapp);" [fcBlock]="true">
                      </fc-button>
                      <fc-button class="sys-card-btn" fcLabel="关系" (click)="delectOnesysapp(sysapp);" [fcBlock]="true">
                      </fc-button>
                  </div>
              </ng-template>
          </nz-card>
      </div>
    </div>
    <fc-title fcLabel="元数据方法" fccontent></fc-title>
  </fc-layoutpanel>
  `,
  styles: [`
  .sys-card-btn{
    width:25%;
  }
  .sys-fast-list {
    cursor: pointer;
  }
  :host ::ng-deep .sysappeditSave .fc-left{
    text-align: center;
  }
  `]
})
export class SysappeditComponent extends ParentEditComponent {
  //元数据属性
  sysAppattributes:any;
  constructor(public mainService: SysappService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    private modal: NzModalService,
    public msg: NzMessageService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    //初始化元数据属性
    this.mainService.getappAttribute().subscribe(res=>{
      if(res.CODE==='0'){
        this.sysAppattributes=res.DATA;
      }else{
        this.messageService.error("元数据属性获取失败")
      }
    })
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  event(eventName: string, param: any): void {
  }
  /**
  * 返回列表
  * @param event
  */
  backList(event) {
    this.navRouter(this.getRouteUrl('List'), event.param);
  }
}
