import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SysappService } from '../../services/sysapp.service';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { ParentEditComponent } from 'fccomponent/parentedit.component';
import { FCEVENT } from 'fccomponent/fc';
import { SysappmodaleventdialogComponent } from './dialog/sysappmodaleventdialog.component';
import { SysappmodalrelationdialogComponent } from './dialog/sysappmodalrelationdialog.component';
import { SysattributeEditdialogComponent } from './dialog/sysattributeEditdialog.component';
@Component({
  selector: 'sysappedit',
  templateUrl: `sysappedit.component.html`,
  styles: [`
  .sys-card-btn{
    width:50%;
  }
  :host ::ng-deep .fc-layoutpanel {
      padding:10px;
  }
  .place-div{
      height:42px;
  }
  .last-btn{
      height:42px;
      position:relative;
      right:95%;
  }
  .instructions{
    width:100%;
    margin-left:25%;
    display:block;
    color:#938e8e;
  }
  :host ::ng-deep .basicTlb .fc-tlbform{
    margin-top:20px;
  }
  :host ::ng-deep .noinstructions .ant-form-item-control {
    padding-bottom: 10px;
  }
  .sys-card-pannel .fc-content .sys-card-pannel-edit .noBottomLine .fc-layoutcol {
    padding: 0px;
    border-bottom:none;
  }
  .butType{
    font-size:16px;
    font-weigth:700;
  }
  .clearFloat{
    overflow:hidden;
  }
  .attributeLeft{
    float:left;
    width:30%;
    padding: 0px 40px 0px 40px;
    display:none;
  }
  .displayMode{
    display:block;
  }
  .widthCovered{
    width:100%;
  }
  .attributeRight{
    float:left;
    width:60%;
  }
  .addAttribute {
    width: 100%;
    height: 30px;    
    border: 1px dashed #d9d9d9;
    color:#d9d9d9;
    border-radius: 5px;
    line-height: 25px;
    padding-left: 10px;
    margin-bottom:10px;
}
  .sys-fast-list {
    cursor: pointer;
  }
  :host ::ng-deep .angular-tree-component {
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 79%;
  }
  .showSelectModel {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    margin-top: 5px;
  }
  .SelectModelTop {
    height: 28px;
    border: 1px solid #ccc;
    border-radius: 3px;
    line-height: 28px;
    text-align: center;
  }
  :host ::ng-deep .widthCovered .fc-list{
    height:250px;
  }
  :host ::ng-deep .sys-app .fc-title-in {
    margin-right: 33%;
  }
  `]
})
export class SysappeditComponent extends ParentEditComponent {
  //元数据属性
  sysAppattributes: any;
  //字母查找
  fastsearchWords: any[];
  //明细操作按钮
  btnlistOnes: any[];
  //更多的按钮
  btnlistMores: any[];
  //产品下拉选项
  productOption: any[];
  //数据源下拉选项
  datasourceOption: any[];
  //模型事件
  sysEvents: any;
  //模型接口
  sysInterfaces: any;
  //模型关系
  sysLinks: any;
  //属性列表过滤
  condition: any;
  //模型配置
  modelOption: any = [];
  //DSID
  DSID: string;
  //从现有模型中选择属性
  displayMode: boolean = false;
  //物理表以及属性、事件、接口、关系显示
  isShow: boolean;
  //当前选中的模型
  models: any = [];
  constructor(public mainService: SysappService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    private modal: NzModalService,
    public msg: NzMessageService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    //初始化字母查找
    this.fastsearchWords = this.mainService.fastSearch();
    //初始化按钮
    this.btnlistOnes = this.mainService.appButtons.filter(btn =>
      btn.BTNTYPE === 'LISTONE'
    );
    this.btnlistMores = this.btnlistOnes.splice(3);
    this.btnlistOnes = this.btnlistOnes.splice(0, 2);
    //初始化产品
    this.getproduct();
    //初始化数据源
    this.getdatasource();
    //当为编辑页面时初始化模型事件、接口、模型关系
    if (this.mainObj.APPID !== "") {
      this.show();
      this.getSysEvents(this.mainObj.APPID);
      this.getSysInterfaces(this.mainObj.APPID);
      this.getSysLinks(this.mainObj.APPID)
    }
    //根据条件过滤出对应的属性列表
    let con: any = {
      WHERE: "APPID=" + "'" + this.mainObj.APPID + "'",
      PAGESIZE: 9999
    }
    this.condition = JSON.stringify(con);
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  event(eventName: string, param: any): void {
    switch (eventName) {
      case 'addList':
        break;

    }
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
  * 物理表以及属性、事件、接口、关系显示
  */
  show() {
    this.isShow = true;
  }
  /**
  * 保存之后
  */
  afterSave() {
    //保存之后获取本信息ID,并且进入对应ID页面
    this.mainService.getID(this.mainObj.APPID,this.mainObj.APPNAME).subscribe(res=>{
      if(res.CODE==='0'){
        this.mainObj.ID=res.DATA[0].ID;
        if(this.mainObj.ID!==''){
          this.navRouter(this.getRouteUrl('Edit'),{ ID: this.mainObj.ID, refresh: 'Y' });
        }
      }
    })
    //新增页面保存之后物理表以及属性、事件、接口、关系显示
    this.show();
  }
  /**
  * 返回列表
  * @param event
  */
  backList(event) {
    this.navRouter(this.getRouteUrl('List'), event.param);
  }
  /** YM
  * 处理路由传参的情况
  * @param pid 
  */
  handleRouterParam() {
    if (this.routerParam.ID) {
      this.mainService.findWithQuery({ WHERE: `ID = '${this.routerParam.ID}'` }).subscribe(res => {
        if (res.CODE === '0') {
          this.mainObj = res.DATA[0];
        } else {
          this.messageService.error('基本信息获取失败');
        }
      })
    }
  }
  /**模型-属性
   * 从现有模型中选择属性
   * @param  DATASOURCE(数据源)
   */
  selectAttribute(DATASOURCE:any) {
    //显示左侧模型
    this.displayMode = true;
    //根据数据源获取模型配置
    this.mainService.getModelOption(this.mainObj.DATASOURCE, this.mainObj.APPMODEL).subscribe(res => {
      if (res.CODE === '0') {
        this.modelOption = res.DATA;
      }
    });
  }
  /**模型-属性
   * 选择模型
   * @param  tableObjs
   */
  modelEvents(tableObjs: any[]) {
    let tables = '';
    tableObjs.forEach(element => {
      tables += element.MAINTABLE + ","
    });
    tables = tables.substr(tables.length - 1, 1);
    this.mainService.getModelField(tables, this.mainObj.DATASOURCE, this.mainObj.APPMODEL).subscribe(res => {
      if (res.CODE === '0') {
        let tableFields = {};
        tableObjs.forEach(table => {
          let tableFields: any = Object.assign({}, table);
          tableFields.fields = res.DATA[table.TABLENAME];
          this.models.push(tableFields);
        })
      }
    });
  }
  /** 
  * 模型-属性
  *列表里面新增属性
  *@param  ev
  */
  addAttributeAdd(ev:string) {
    this.mainService.WindowEvent(ev, '属性-编辑', SysattributeEditdialogComponent);
  }
  /** 
   * 模型-属性
   *列表里面编辑属性
   *@param  ev
   @param  str
   */
  attributeEditEvent(ev: FCEVENT,str:string) {
    switch (ev.eventName) {
      case "listEdit":
      this.mainService.WindowEditEvent(ev.param,str, '属性-编辑', SysattributeEditdialogComponent);
        break;
    }
  }
  /**
   * 获取模型事件-数据
   * @param appid 
   */
  getSysEvents(appid) {
    this.mainService.getSysEvents(appid).subscribe(res => {
      if (res.CODE === '0') {
        this.sysEvents = res.DATA;
      } else {
        this.messageService.error('模型事件获取失败');
      }
    });
  }
  /** 
   *新增模型事件卡片
   * 
   */
  addModelEvent(event:string) {
    this.mainService.WindowEvent(event, '模型事件', SysappmodaleventdialogComponent);
  }
  
  /** 
   *编辑模型事件卡片
   *@param event 
   */
  editModelEvent(event:Object,str:string) {
    this.mainService.WindowEditEvent(event,str, '模型事件', SysappmodaleventdialogComponent);
  }
  /**
   * 获取模型接口-数据
   * @param appid 
   */
  getSysInterfaces(appid) {
    this.mainService.getSysInterfaces(appid).subscribe(res => {
      if (res.CODE === '0') {
        this.sysInterfaces = res.DATA;
      } else {
        this.messageService.error('模型接口获取失败');
      }
    });
  }
  /** 
   *新增模型接口卡片
   */
  addModelInterface() {
    this.navRouter('/system/sysinterfaceEdit', { refresh: 'Y', ID: this.mainObj.ID })
  }
  /** 
   *编辑模型接口卡片
   *@param interface 
   */
  editModelInterface(event:any) {
    //选中的对象
    let selectedObj: any = event;
    if (selectedObj && selectedObj !== null) {
      //把卡片的数据放入缓存中
      this.cacheService.setS('SYSINTERFACE' + "DATA", this.commonService.cloneArray(this.sysInterfaces));
      //把id带入到编辑页面
      this.navRouter('/system/sysinterfaceEdit', { ID: selectedObj.ID, refresh: 'Y' });
    }
  }
  /**
   * 获取模型关系-数据
   * @param appid 
   */
  getSysLinks(appid) {
    this.mainService.getSysLinks(appid).subscribe(res => {
      if (res.CODE === '0') {
        this.sysLinks = res.DATA;
      } else {
        this.messageService.error('模型关系获取失败');
      }
    });
  }
  /** 
   *新增模型关系卡片
   *@param event 
   */
  addModelRelation(event:string) {
    this.mainService.WindowEvent(event, '模型关系', SysappmodalrelationdialogComponent);
  }
  /** 
   *编辑模型关系卡片
   *@param event 
   */
  editModelRelation(event:Object,str:string) {
    this.mainService.WindowEditEvent(event, str,'模型关系', SysappmodalrelationdialogComponent);
  }
}
