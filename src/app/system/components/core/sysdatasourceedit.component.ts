import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, ParentlistComponent, ParentEditComponent } from 'fccomponent';
import { SysdatasourceService } from '../../services/sysdatasource.service';
import { NzModalService } from 'ng-zorro-antd';
import { chooseicondialogComponent } from './dialog/chooseicondialog.component';
import { SysicondialogComponent } from './dialog/sysicondialog.component';
import { ObjStatus } from 'fccore';
import { SysappmodaleventdialogComponent } from './dialog/sysappmodaleventdialog.component';
import { SysappmodalrelationdialogComponent } from './dialog/sysappmodalrelationdialog.component';
import { SysservicemodaldialogComponent } from './dialog/sysservicemodaldialog.component';
@Component({
  selector: 'sysdatasource',
  templateUrl: './sysdatasourceedit.component.html',
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
  }
  .sys-choose-icon fc-button{
    position:absolute;
    left:35%;
    top:45px;
  }
  .sys-radio{
    margin-left:-11% ;
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
  `]
})
export class SysdatasourceeditComponent extends ParentEditComponent {
  addNew(mainObj: any): boolean {
    return true;
  }
  topbutton: boolean;
  scomDataItemOptions: any;
  //any下拉
  datasouceany :any;
  //图标属性显示字还是图标
  visible: boolean;
  constructor(public mainService: SysdatasourceService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    public modal: NzModalService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
      //选择图片是否显示调用方法
     this.productIcon()
     //顶部按钮是否显示
     this.productdisableds();
     //下拉框显示自己想要动态传入的label和value值 
     this.mainService.findWithQuery({ WHERE: `and ENABLE='Y' and PID != '${this.mainObj.PID}'` }).subscribe(result => {
      this.scomDataItemOptions=[];
      result.P_LISTVALUE.forEach(el => {
        let obj :any = {};
        obj.label = el.PID+'-'+el.DSNAME;
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
  //  数据源ID等于PID+DSID
  // this.mainObj.DSID = this.mainObj.PID + this.mainObj.DSID 
  this.productdisableds()
  this.productIcon();
  return true;
}
afterSave() {
   // 数据源ID等于PID+DSID
  // this.mainObj.DSID = this.mainObj.PID + this.mainObj.DSID 
  this.productdisableds();
  this.productIcon();
}
  /**
   * 主对象的事件
   * @param eventName 事件名 
   * @param context 返回参数
   */
  event(eventName: string, param: any): void {
    switch (eventName) {
       //保存按钮
       case 'emitDataOutside':
       this.cardSave(param);
       break;
       //跳转至模型路由
       case 'btnCardAddModel':
       this.navRouter('/system/sysappEdit', { refresh: 'Y', PID: this.mainObj.PID ,DSID:this.mainObj.DSID})  
       break;
       //点击出现字体图标事件    
       case 'iconEvent':
       this.iconEvent();
       break;
        //点击删除图标事件  
      case 'deleticonEvent':
      this.deleticonEvent()
      break;
      //返回列表
      case 'backToList':
      this.navRouter('/system/sysdatasourceList');
      break;
      //点击服务事件跳转至服务首页务管理
      case 'servicelistEvent':
       this.navRouter('/system/sysserviceList', { refresh: 'Y', PID: this.mainObj.PID ,DSID:this.mainObj.DSID})      
      break;
      //点击模型数据源事件跳转至模型数据源列表页面
      case 'applistEvent':
      this.navRouter('/system/sysappList', { refresh: 'Y', PID: this.mainObj.PID,DSID:this.mainObj.DSID })      
      break;
      //PID下拉框选中值
      case 'ruleaddEvent':
      this.mainObj.PID = param;
      break;
      //数据源信息下拉框
      case 'ruletypeEvent':
      this.mainObj.DSTYPE = param;
      break;
    }
  }
  /**
    *  点击图标弹出列表
    * @param event  
    */
   iconEvent() {
      this.mainService.producticonmodal('字体图标',SysicondialogComponent).subscribe(obj => {
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
  deleticonEvent(){
    this.mainObj.ICON = "";
    this.visible = true;
    event.stopPropagation()
  }
  /**
    * DSID有值时禁用为关闭
    * DSID无值时禁用为开启
    * @param event  
    */
   productdisableds() {
    if (this.mainObj.DSID !== "") {
       //  数据源ID等于PID+DSID
      this.mainObj.DSID = this.mainObj.PID + this.mainObj.DSID 
      this.topbutton = true;
      //数据源id  调用PID 和DSID比较方法，比较后修改页面 数据源ID文本框显示 PID和DSID不相等字段
      this.strfun();
    } else {
       //  数据源ID等于PID+DSID
       this.mainObj.DSID = this.mainObj.PID + this.mainObj.DSID 
      this.topbutton = false;
    }
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
* 组件事件收集
* @param type 字符串命名
* @param ev 事件传过来的参数
*/
componentEvents(type: string, ev: any) {
  switch (type) {
    case 'ruleaddEvent':
    this.mainObj.PID = ev;
      break;
      case 'ruletypeEvent':
      this.mainObj.DSTYPE = ev;
      break;
  }
}
 /**
* PID和DSID比较方法
*/
  strfun(){
    [this.mainObj.PID,this.mainObj.DSID] = (this.mainObj.PID+this.mainObj.DSID).replace(/(.+)(.+)\1/, '$2\n').split('\n')
  }
   /**
* 测试代码
*/
  testmodal(){
    this.mainService.producticonmodal('模型事件',SysappmodaleventdialogComponent)
  }  
  testmodal2(){
    this.mainService.producticonmodal('模型关系',SysappmodalrelationdialogComponent)
  } 
  testmodal3(){
    this.mainService.producticonmodal('参数配置',SysservicemodaldialogComponent)
  }   
}