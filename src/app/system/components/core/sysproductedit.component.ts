
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, ParentlistComponent, ParentEditComponent } from 'fccomponent';
import { SysproductService } from '../../services/sysproduct.service';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';
import { SysicondialogComponent } from './dialog/sysicondialog.component';
import { environment } from '../../../../environments/environment.prod';
import { ObjStatus } from 'fccore';
@Component({
  selector: 'sysproductedit',
  templateUrl: 'sysproductedit.component.html',
  styles: [`
  .sys-card-btn{
    width:25%;
  }
  .edit-footer-btn{
    text-align:center;
  }
  .sys-choose-icon{
    position:relative;
    height:100px;
    margin-bottom:15px;
    margin-left: 2%;
  }
  .sys-choose-icon .sys-choose-icon-box{
    width: 100px;
    height: 100px;
    line-height: 90px;
    padding: 10px;
    border-radius: 4px;
    background-color: #ffffff;
    border: 1px dashed #ebedf0;
    position: absolute;
    left: 26%;
    top: 2px;
    text-align: center;
    border-radius: 7px;
  }
  .sys-choose-icon fc-button{
    position:absolute;
    left:35%;
    top:45px;
  }
  .sys-radio{
    margin-left:34% ;
  }
  .sys-num{
    margin-right:9%;
  }
  .sys-proicon{
    display: inline-block;
    margin-left: 62%;
  }
  .sys-sqlaaid{
    display: inline-block;
    position: absolute;
    top: 25%;
    left: 25%;
    background: #fafafa;
    width: 15%;
    text-align: center;
    height: 23px;
    line-height: 23px;
    border-radius:2px;
  }
  :host ::ng-deep .sys-buttonpid .ant-form-item-control nz-input {
    width: 76%;
    margin-left: 24%;
  }
  .sys-deleticon{
    background: #108ee9;
    width: 14px;
    text-align: center;
    position: absolute;
    z-index: 999;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    heihgt: 20px;
    height: 14px;
    right: 0px;
    top: 0px;
    border-radius: 4px
  }
  .sys-tab{
    margin-left:26%;
  }
  .sys-fast-list>li{
    cursor:pointer;
  }
  .sys-button{
    display: flex;
    justify-content: center;
    padding-top:20px;
    padding-bottom:40px;
  }

  .sys-choose-icon .sys-choose-icon-upload{
    line-height: 22px;
    position: absolute;
    left: 26%;
    top: 2px;
  }
  .sys-card-pannel .fc-content .sys-card-pannel-edit .noBottomLine .fc-layoutcol {
    padding: 0px;
    border-bottom:none;
  }
  .sys-card-pannel .fc-content .sys-card-pannel-edit .notitleLine .fc-layoutcol {
    border:none;
  }
  `]
})
export class SysproducteditComponent extends ParentEditComponent implements AfterViewInit {
  staticMainObj: any = {};
  value: any;
  label: any;
  constructor(public mainService: SysproductService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    private modal: NzModalSubject,
    public modalService: NzModalService
  ) {
    super(mainService, router, activeRoute);
  }
  //是否是只读状态
  read: boolean;
  disableds: any;
  //依赖产品是否显示
  relyproduct: boolean;
  //图标属性显示字还是图标
  visible: boolean;
  topbutton: boolean;
  //依赖产品下拉属性
  scomDataItemOptions: any;
  FIELDCODE: string;
  productany: any;
  //上传属性
  fcUploadOption: { FILETYPE: string; SOURCEID: any; SOURCEAID: string; SOURCEFIELD: string; RESTITLE: string; };
  addNew(mainObj: any): boolean {
    return true;
  }
  /**
   * 生命周期钩子 视图渲染完毕在执行
   * @param event  
   */
  ngAfterViewInit() {
    this.mainObj;
    //过滤fcproduct ENABLE 把PID-PNAME
    this.mainService.findWithQuery({ WHERE: `and ENABLE='Y' and PID != '${this.mainObj.PID}'` }).subscribe(result => {
      this.scomDataItemOptions = [];
      result.P_LISTVALUE.forEach(el => {
        let obj: any = {};
        obj.label = el.PID + '-' + el.PNAME;
        obj.value = el.PID;
        obj.disabled = false;
        this.scomDataItemOptions.push(obj)
      });
    });
  }
  /**
  * 保存前验证
  */
  beforeSave(): boolean {
    this.productdisableds();
    this.productIcon();
    return true;
  }
  /**
     * 实现继承与父类的afterSave函数，对cardSave函数进行功能扩展;
     */
  afterSave() {
    this.productIcon();
    this.productdisableds();
    this.mainService.findWithQuery({ WHERE: `PNAME = '${this.mainObj.PNAME}'` }).subscribe(res => {
        if (res.CODE === '0') {
            this.navRouter(this.getRouteUrl('Edit'), { ID: res.DATA[0].ID });
        }
    });
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
    //选择图片是否显示调用方法
    this.productIcon()
    //初始化设置按钮是否为禁用状态 无效果
    this.productdisableds();
    //初始化设置依赖产品是否显示
    this.relayfun()
    this.handleRouterParam();
  }
  getDefaultQuery() {
  }
  event(eventName: string, param: any): void {
    switch (eventName) {
      //fc-upload上传事件
      case 'fileEvent':
        //调用上传方法
        this.fileEvent(param);
        break;
      //+数据源事件
      case 'cardSql':
        this.navRouter('/system/sysdatasourceEdit', { refresh: 'Y', PID: this.mainObj.PID })
        break;
      //点击出现字体图标事件    
      case 'iconEvent':
        this.iconEvent();
        break;
      //点击删除图标事件  
      case 'deleticonEvent':
        this.deleticonEvent()
        break;
      //+服务按钮事件
      case 'cardService':
        this.navRouter('/system/sysserviceEdit', { refresh: 'Y', PID: this.mainObj.PID })
        break;
      // 点击查看数据源跳转至数据源管理
      case 'sqllistEvent':
        this.navRouter('/system/sysdatasourceList', { refresh: 'Y', PID: this.mainObj.PID })
        break;
      //点击服务事件跳转至服务首页务管理
      case 'servicelistEvent':
        this.navRouter('/system/sysserviceList', { refresh: 'Y', PID: this.mainObj.PID })
        break;
      //点击模型数据源事件跳转至模型数据源列表页面
      case 'applistEvent':
        this.navRouter('/system/sysappList', { refresh: 'Y', PID: this.mainObj.PID })
        break;
      //点击返回列表跳转至首页
      case 'backlistEvent':
        this.navRouter('/system/sysproductList', { refresh: 'Y', PID: this.mainObj.PID })
        break;
    }
  }
    /**
* 组件事件收集
* @param type 
* @param ev  保存按钮
*/
emitDataOutside() {
  this.cardSave(this.mainObj);
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
    *  点击图标弹出列表方法
    * @param event  
    */
  iconEvent() {
    this.mainService.producticonmodal(SysicondialogComponent).subscribe(obj => {
      if (obj.DICVALUE !== undefined) {
        this.mainObj.ICON = obj.DICVALUE
        this.visible = false;
      }
    })
  }
  /**
    *  点击图标弹出列表
    * @param event  
    */
  deleticonEvent() {
    this.mainObj.ICON = "";
    this.visible = true;
    event.stopPropagation()
  }
  /**
  *  ICON如果等于空visible显示（文字请选择图片）
  * ICON如果不等于空visible不显示（文字请选择图片不显示）
  * @param event  
  */
  productIcon() {
    if (this.mainObj.ICON === "") {
      this.visible = true;
    } else {
      this.visible = false;
      this.mainObj.ICON = this.mainObj.ICON;
    }
  }
  /**
    *  PID有值时禁用为关闭
    * PID无值时禁用为开启
    * @param event  
    */
  productdisableds() {
    if (this.mainObj.PID !== "") {
      this.read = true;
      this.topbutton = true;
    } else {
      this.read = false;
      this.topbutton = false;
    }
  }
  /**
    *  可继承时显示依赖产品text否则隐藏
    * @param event  
    */
  relayfun() {
    if (this.mainObj.ENABLE === 'Y') {
      this.relyproduct = true;
    } else {
      this.relyproduct = false;
    }
  }
  /**
* 组件事件收集
* @param type 字符串命名
* @param ev 事件传过来的参数
*/
  componentEvents(type: string, ev: any) {
    switch (type) {
      case 'ruleaddEvent':
        this.mainObj.PARENTPID = ev;
        break;
     case 'displaymode':
        this.mainObj.DISPLAYMODE = ev;
     break;
     case 'enableEvent':
        this.mainObj.ENABLE = ev;
     break;
    }
  }
 /** YM
     * 处理路由传参的情况
     * @param pid 
     */
    handleRouterParam() {
      if (this.routerParam.ID) {
          this.mainService.findWithQuery({ WHERE: `ID = '${this.routerParam.ID}'` }).subscribe(res => {
              if (res.CODE === '0' && res.DATA.length !== 0) {
                  for (let attr in res.DATA[0]) {
                      this.mainObj[attr] = res.DATA[0][attr];
                  }
                  for (let attr in this.mainObj) {
                      this.staticMainObj[attr] = this.mainObj[attr];
                  }
              } else {
                  this.messageService.error('基本信息获取失败');
              }
          })
      }
  }
}