import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SysappService } from '../../services/sysapp.service';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { ParentEditComponent } from 'fccomponent/parentedit.component';
import { Sysappbuttons } from 'fccore/services/sysappbuttons.service';
import { FCEVENT } from 'fccomponent/fc';
@Component({
  selector: 'sysappmodify',
  template: `
  <fc-layoutpanel class="sysappadd">
    <div fcheader>
        <fc-title fcLabel="模型&元数据"></fc-title>
        <P>
            说明：FC开发设计平台，快速开发应用模型，此功能实现模型定义，实现数据库表及视图的新增、修改、删除 、同步。
        </P>
        <div class="sys-card-fast">
            <ul class="sys-fast-list">
                <li>
                    <fc-icon fcIcon="fc-icon-everyday" fcColor="#009DFF"></fc-icon>查看产品</li>
                <li (click)="seeAll($event)">
                    <fc-icon fcIcon="fc-icon-definition" fcColor="#009DFF"></fc-icon>查看所有</li>
                <li (click)="backList($event)">
                    <fc-icon fcIcon="fc-icon-update" fcColor="#009DFF"></fc-icon>返回列表</li>
            </ul>
        </div>
    </div>
    <fc-title fcLabel="数据源" fccontent></fc-title>
    <fc-layoutcol fcSpans="1,1" fccontent>  
      <fc-layoutcol fcSpans="1,1" fccontent1>  
        <fc-combo [fcLabel]="'产品'" [fcOption]="productOption" [(ngModel)]="productValue" fccontent1>
        </fc-combo>
        <fc-combo [fcLabel]="'数据源'" [fcOption]="datasourceOption" [(ngModel)]="datasourceValue" fccontent2>
        </fc-combo>    
      </fc-layoutcol>
    </fc-layoutcol>  
    <fc-layoutcol fcSpans="1,1" fccontent class="systransfer">
      <nz-transfer fccontent1
          [nzDataSource]="list"
          [nzTitles]="['所有表及视图', '选中的表或视图']"
          [nzListStyle]="{'width.px': 280, 'height.px': 400}"
          (nzSelectChange)="select($event)"
          (nzChange)="change($event)">
          <ng-template #render let-item>
            {{item.title}}
          </ng-template>
      </nz-transfer>
      <fc-button fccontent2 fcLabel="一键生成" [fcType]="'primary'" (click)="generate($event)"></fc-button>
    </fc-layoutcol>
  </fc-layoutpanel>
  `,
  styles: [`
  :host ::ng-deep .sys-block .ant-btn{
    display: block;
    margin-bottom:20px;
  } 
  :host ::ng-deep .sysappadd .fc-layoutpanel {
    height: 100%;
  }
  :host ::ng-deep .systransfer .fc-content1 {
    padding-left: 105px;
  }
  :host ::ng-deep .systransfer .fc-layoutcol{
    padding-top: 25px;
  }
  :host ::ng-deep .ant-transfer-operation{
    margin:0px 52px;
  }
  .sys-fast-list {
    cursor: pointer;
  }
  `]
})
export class SysappmodifyComponent extends ParentEditComponent {
  //产品下拉选项
  productOption: any[];
  //数据源下拉选项
  datasourceOption: any[];
  //穿梭图list
  list: any[];
  constructor(public mainService: SysappService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    private modal: NzModalService,
    public msg: NzMessageService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    //初始化产品
    this.getproduct();
    //初始化数据源
    this.getdatasource();
    //初始化穿梭框的数据源
    this.getData();
  }
  /**
  * 获取软件产品的产品名称
  */
  getproduct() {
    this.mainService.getproduct().subscribe(res => {
      this.productOption = [];
      res.P_LISTVALUE.forEach(element => {
        //将获得的产品名称添加到下拉框中
        this.productOption.push({ icon: '', label: element.PNAME, value: element.PID });
      });
      return this.productOption;
    })
  }
  /**
  * 获取数据源
  */
  getdatasource() {
    this.mainService.getdatasource().subscribe(result => {
      this.datasourceOption = [];
      result.P_LISTVALUE.forEach(element => {
        //将获得的数据源名称添加到下拉框中
        this.datasourceOption.push({ icon: '', label: element.DSNAME, value: element.DSID });
      });
      return this.datasourceOption;
    })
  }
  /**
  * 获取穿梭框的数据源
  */
  getData(): void {
    const ret = [];
    for (let i = 0; i < 10; i++) {
      ret.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        direction: Math.random() * 2 > 1 ? 'right' : '',
        icon: `frown-o`
      });
    }
    this.list = ret;
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  event(eventName: string, param: any): void {
  }
  select(ret: any) {
  }
  change(ret: any) {
  }
  /**
  * 查看所有
  * @param event
  */
  seeAll(event:FCEVENT) {
    this.navRouter(this.getRouteUrl('List'), event.param);
  }
  /**
  * 返回列表
  * @param event
  */
  backList(event:FCEVENT) {
    this.navRouter(this.getRouteUrl('List'), event.param);
  }
  /**
  * 一键生成
  * @param event
  */
  generate(event:FCEVENT) {
    this.navRouter(this.getRouteUrl('List'), event.param);
  }
}
