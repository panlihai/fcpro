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
        <fc-combo [fcLabel]="'产品'" [fcOption]="productOption" [(ngModel)]="productValue" fccontent1 (ngModelChange)="chooseProduct($event)">
        </fc-combo>
        <fc-combo [fcLabel]="'数据源'" [fcOption]="datasourceOption" [(ngModel)]="datasourceValue" fccontent2 (ngModelChange)="chooseDatasource($event)">
        </fc-combo>    
      </fc-layoutcol>
    </fc-layoutcol>  
    <fc-layoutcol fcSpans="1,1" fccontent class="box">
      <fc-layoutcol fcSpans="1,1" fccontent1>  
          <div class="allVandT" fccontent1>
            <div class="allVandTTop">所有表及视图</div>
            <ul class="allVandTBottom" (drop)="drop($event)" (dragover)="dragover($event)">
                <li *ngFor="let data of allDatas; let i = index" [id]="i" [draggable]="true" (dragstart)="dragstart($event)">{{data.MAINTABLE}}-{{data.TABLETYPE==='TABLE'?'表':'视图'}}</li>
            </ul>
          </div>
          <div class="selectVandT" fccontent2>
            <div class="selectVandTTop">选中的表或视图</div>
            <ul class="selectVandTBottom" (drop)="drop($event)" (dragover)="dragover($event)">
              
            </ul>
          </div>
        </fc-layoutcol>
      <fc-button fccontent2 fcLabel="一键生成" [fcType]="'primary'" (click)="generate($event)" class="boxRight"></fc-button>
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
  :host ::ng-deep .ant-transfer-operation{
    margin:0px 52px;
  }
  .sys-fast-list {
    cursor: pointer;
  }
  .allVandT,.selectVandT{
    border: 1px solid #d9d9d9;
    width: 66%;
    border-radius: 5px;
    margin-left: 25%;
  }
  .allVandTTop,.selectVandTTop {
    text-align: right;
    padding: 8px;
    border-bottom: 1px solid #d9d9d9;
  }
  .allVandTBottom,.selectVandTBottom {
    padding: 10px;
    height: 400px;
    overflow: auto;
  }
  :host ::ng-deep .box>.fc-layoutcol {
    margin-top: 20px;
  }
  `]
})
export class SysappmodifyComponent extends ParentEditComponent {
  //产品下拉选项
  productOption: any[];
  //数据源下拉选项
  datasourceOption: any[];
  //所有的表及视图
  allDatas: any[];
  //穿梭图list
  list: any[];
  //产品id
  pid: any;
  //数据源id
  dsid: any;
  //穿梭框右侧的数据
  rightData: any[];
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
* 选择产品
*  @param event 
*/
  chooseProduct(event: any) {
    this.pid = event;
  }
  /**
  * 选择数据源
  *  @param event 
  */
  chooseDatasource(event: any) {
    this.dsid = event;
    if (this.dsid !== undefined && this.dsid !== '' && this.pid !== undefined && this.pid !== '') {
      //初始化所有的表及视图数据
      this.getData(event);
    }
  }
  /**
  * 获取表和视图的数据
  */
  getData(event): void {
    //测试数据：
    this.mainService.findWithQuery(event).subscribe(res => {
      if (res.CODE === '0') {
        this.allDatas =  res.DATA;
      }
    });
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  event(eventName: string, param: any): void {
  }
  /**
    * dragstart规定当元素被拖动时，会发生什么。drag规定了被拖动的数据
    * @param ev 
    * @param obj 拖拽的对象
    */
  dragstart(ev, obj: any) {
    ev.dataTransfer.effectAllowed = "copy";
    //存入数据
    ev.dataTransfer.setData("Text", ev.target.id);
  }
  dragover(ev) {//拖拽目标身上的效果
    ev.preventDefault();
    // Set the dropEffect to move
    ev.dataTransfer.dropEffect = "copy"
  }
  /**
   * 当放置被拖数据时，会发生 drop 事件。
   * @param ev 
   */
  drop(ev) {
    ev.preventDefault();
    //获取目标id并新增dom
    let data = ev.dataTransfer.getData("Text");
    let a = ev.dataTransfer.getData("Text");
    this.logService.debug(a);
    //移动目标
    ev.target.appendChild(document.getElementById(data));
    //拖拽后抛出事件
    this.messageService.message('拖拽成功');
  }
  /**
   * 
   * @param ev 
   */
  dragenter(ev) {

  }
  /**
  * 查看所有
  * @param event
  */
  seeAll(event: FCEVENT) {
    this.navRouter(this.getRouteUrl('List'), event.param);
  }
  /**
  * 返回列表
  * @param event
  */
  backList(event: FCEVENT) {
    this.navRouter(this.getRouteUrl('List'), event.param);
  }
  /**
  * 一键生成
  * @param event
  */
  generate(event: FCEVENT) {
    //调用一键生成
    this.mainService.generate(this.rightData);
    this.navRouter(this.getRouteUrl('List'), event.param);
  }
}
