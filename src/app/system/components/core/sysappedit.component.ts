import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SysappService } from '../../services/sysapp.service';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { ParentEditComponent } from 'fccomponent/parentedit.component';
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
  }
  .attributeRight{
    float:left;
    width:60%;
  }
  .addAttribute {
    width: 70%;
    height: 30px;    
    border: 1px dashed #d9d9d9;
    color:#d9d9d9;
    border-radius: 5px;
    line-height: 25px;
    padding-left: 10px;
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
    //初始化模型事件、接口、模型关系
    if (this.mainObj.APPID !== "") {
      this.getSysEvents(this.mainObj.APPID);
      this.getSysInterfaces(this.mainObj.APPID);
      this.getSysLinks(this.mainObj.APPID)
    }
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  event(eventName: string, param: any): void {
    switch(eventName){
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
        this.datasourceOption.push({ icon: '', label: element.DSNAME, value: element.PID });
      });
      return this.datasourceOption;
    })
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
}
