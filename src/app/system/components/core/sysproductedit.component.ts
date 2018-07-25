 
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, ParentlistComponent, ParentEditComponent } from 'fccomponent';
import { SysproductService } from '../../services/sysproduct.service';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';
import { SysicondialogComponent } from './dialog/sysicondialog.component';
import { environment } from '../../../../environments/environment.prod';
import { ObjStatus } from 'fccore';
@Component({
  selector: 'sysproductedit',
  template: `
  <fc-layoutpanel fcFull="true" class="sysproductEdit">
        <div fcheader fccontent>
        <fc-title fcLabel="项目&产品" fcHasLine="false"></fc-title>
        <P>
            项目&产品：编辑产品内容：包含产品基本信息，产品图标，产品的立项文档等；支持增加此产品的数据源、服务等
        </P>
        <div class="sys-card-fast">
            <ul class="sys-fast-list">
                <li><span  (click)="sqllistEvent($event)">查看数据源</span></li>
                <li><span  (click)="servicelistEvent($event);">查看服务</span></li>
                <li><span  (click)="backlistEvent($event);">返回列表</span></li>
            </ul>
        </div>
      </div>
      <fc-title fccontent fcLabel="基本信息" fcHasLine="false"></fc-title>
      <fc-layoutcol fcSpans="7,3" fccontent>
          <fc-text fccontent1 [fcAppid]="appId" fcFieldCode="PID" [(ngModel)]="mainObj.PID"  [fcReadonly] = "read"  fcLabel="产品Id" name="PID" fcPlaceHolder="产品编码，全局唯一" [fcValid]="mainValid.PID"></fc-text>
          <fc-text fccontent1  [fcAppid]="appId" fcFieldCode="PNAME" [(ngModel)]="mainObj.PNAME"  name="PNAME"  fcLabel="产品名称" fcPlaceHolder="请输入中文" [fcValid]="mainValid.PNAME"></fc-text>
          <fc-layoutcol fccontent1  fcSpans="1,1" >
            <div fccontent1 class="sys-radio">
            <fc-radio  fccontent  [(ngModel)]="mainObj.DISPLAYMODE" fcLabel="模式" [fcAppid]="appId" fcFieldCode="DISPLAYMODE" fcLabelCode="DICDESC" fcValueCode="DICVALUE" name="DISPLAYMODE"></fc-radio>            
            </div>
            <div fccontent2 class="sys-num">
            <fc-text fccontent [(ngModel)]="mainObj.SORT"  fcLabel="排序" fcPlaceHolder="请输入整数" name="SORT"></fc-text>            
            </div>
          </fc-layoutcol>         
          <fc-text fccontent1  [(ngModel)]="mainObj.PARENTPID" fcPlaceHolder="依赖产品输入"  name="PARENTPID"  fcLabel="依赖产品"></fc-text>
          <fc-textarea fccontent1 fcPlaceHolder="请输入备注"  [(ngModel)]="mainObj.DIRECTION" fcLabel="备注（可选）" name="DIRECTION"></fc-textarea>
      </fc-layoutcol>
      <fc-title fccontent fcLabel="其他信息" fcHasLine="false"></fc-title>
      <div fccontent>
          <fc-layoutcol fcSpans="2,8" fccontent>
              <span class="sys-proicon" fccontent1>产品图标</span>
              <span fccontent2 class="sys-fciconlayout"  (click)="iconEvent($event)">
                  <fc-icon [fcIcon]="mainObj.ICON"  [(ngModel)]="mainObj.ICON" fcSize="large"></fc-icon>
                  <span *ngIf = "visible">选择图片</span>
              </span>
          </fc-layoutcol>
      </div>
      <div fccontent>  
          <fc-layoutcol fcSpans="2,8" fccontent>
              <span class="sys-proicon" fccontent1>产品文档</span>
              <fc-upload fccontent2 class="upload-content" fcListType="picture-card" (fcEvent)="event('fileEvent',$event)" [fcOption]="fcUploadOption">
              </fc-upload>
          </fc-layoutcol>
      </div>
      <div fccontent>
          <fc-tlbform fccontent [fcAppid]="appId" (fcEvent)="tlbformEvent($event)" fcLayout="center"></fc-tlbform>
          <div fccontent>
             <div class="sys-buttondiv" *ngIf = "buttonvisible"></div>
          </div>
      </div> 
</fc-layoutpanel>
  `,
  styles: [`
  :host ::ng-deep .fc-full{
    overflow: scroll;
    height: 92% !important;
  }
  .sys-proicon{
    display: inline-block;
    margin-left: 62%;
  }
  .sys-fciconlayout{
    width: 12%;
    height: 89px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #fbfbfb;
    margin-bottom: 9px;
}
  .sys-productbutton{
    text-align : center;
  }
  :host ::ng-deep .content-main{
    height:calc(100%-42px);
  }
  .sys-radio{
    margin-left:33% ;
  }
  .sys-num{
    margin-right:9%;
  }
  .sys-fast-list>li >span{
    cursor:pointer;
  }
  :host ::ng-deep .fc-icon-large{
    font-size:53px;
  }
  .sys-buttondiv{
    background: #fff;
    display: inline-block;
    width: 14%;
    height: 135px;
    z-index: 999;
    position: absolute;
    left: 47%;
    bottom: -34%;
  }
  `]
})
export class SysproducteditComponent extends ParentEditComponent {
  constructor(public mainService: SysproductService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    private modal: NzModalSubject,
    public modalService: NzModalService
  ) {
    super(mainService, router, activeRoute);
  }
  //是否是只读状态
  read : boolean;
  disableds :any;
  //图标属性显示字还是图标
  visible: boolean;
  //按钮只显示保存还是全部显示
  buttonvisible: boolean;
  //上传属性
  fcUploadOption: { FILETYPE: string; SOURCEID: any; SOURCEAID: string; SOURCEFIELD: string; RESTITLE: string; };
  addNew(mainObj: any): boolean {
    return true;
  }
   /**
   * 保存前验证
   */
  beforeSave(): boolean {
    this.productdisableds();
    return true;
  }
  afterSave() {
    this.productdisableds();
  }
  init(): void {
    //上传图片资源和地址
    this.fcUploadOption = {
      FILETYPE: "PIC",
      SOURCEID: this.routerParam.ID,
      SOURCEAID: "SYSPRODUCT",
      SOURCEFIELD: "",
      RESTITLE: ""
    };
    //初始化模式为标签
    this.mainObj.DISPLAYMODE = "TAB"
    //选择图片是否显示调用方法
    this.productIcon()
    //初始化设置按钮是否为禁用状态 无效果
    this.productdisableds();
  }
  getDefaultQuery() {
  }
  event(eventName: string, context: any): void {
    switch (eventName) {
      //fc-upload上传事件
      case 'fileEvent':
        //调用上传方法
        this.fileEvent(context);
        break;
      //数据源事件
      case 'cardSql':
      this.mainService.providers.msgService.message("数据源管理事件");
       this.navRouter('/system/sysdatasourceEdit',{refresh:'Y',PID:this.mainObj.PID})
        break;
      //服务按钮事件  
      case 'cardService':
      this.mainService.providers.msgService.message("服务事件");
      this.navRouter('/system/sysserviceEdit',{refresh:'Y',PID:this.mainObj.PID})
        break;
    }
  }
  /**
  * 上传图片文档方法
  * @param event  
  */
  fileEvent(event): any {
    switch (event.eventName) {
      case "success":
        this.mainService.providers.msgService.message("上传成功");
        break;
      case "failure":
        this.mainService.providers.msgService.message("上传失败");
        break;
    }
  }
  /**
    *  点击图标弹出列表
    * @param event  
    */
  iconEvent(envet) {
  this.mainService.producticonmodal(SysicondialogComponent).subscribe(obj => {
      if (obj.DICVALUE !== undefined) {
        this.mainObj.ICON = obj.DICVALUE
        this.visible = false;
      }
    })
  }
    /**
    *  点击查看数据源跳转至数据源管理
    * @param event  
    */
  sqllistEvent(event){
    this.navRouter('/system/sysdatasourceList',{refresh:'Y',PID:this.mainObj.PID})
  }
      /**
    *  点击服务事件跳转至服务首页务管理
    * @param event  
    */
  servicelistEvent(event){
    this.navRouter('/system/sysserviceList',{refresh:'Y',PID:this.mainObj.PID})
  }
    /**
    *  点击返回列表跳转至首页
    * @param event  
    */
  backlistEvent(event){
    this.navRouter('/system/sysproductList',{refresh:'Y',PID:this.mainObj.PID})
  }
    /**
    *  ICON如果等于空visible显示（文字请选择图片）
    * ICON如果不等于空visible不显示（文字请选择图片不显示）
    * @param event  
    */
   productIcon(){
    if (this.mainObj.ICON === "") {
      this.visible = true;
    } else {
      this.visible = false;
    }
   }
  /**
    *  PID有值时禁用为关闭
    * PID无值时禁用为开启
    * @param event  
    */
  productdisableds(){
  if(this.mainObj.PID !== ""){
      // this.disableds = '{}';
      this.read = true;
      this.buttonvisible = false;
    }else{
      this.read = false;
      // this.disableds ='{"BTNCARDSQLBACK":"true","BTNCARDSERVICEBACK":"true"}'
      this.buttonvisible = true;
    }
  }
}