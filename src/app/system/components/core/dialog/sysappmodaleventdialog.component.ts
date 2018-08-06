import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';
import { forEach } from '@angular/router/src/utils/collection';
import { SysappbuttonsService } from '../../../services/sysappbuttons.service';
import { SysicondialogComponent } from './sysicondialog.component';
import { ParentEditComponent } from 'fccomponent';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'sysappmodaleventdialog',
  template: `
  <div>
    <div class="bg-dialog-content">
         <div class="topClose">
            <div>事件：描述与模型的事件，呈现方式体现在按钮上，与属性及关系构成模型</div>
            <div class="sys-card-fast">
                <ul class="sys-fast-list">
                    <li class="sys-icon-btn"  (click)="event('closetop')">
                        <fc-icon fcIcon="fc-icon-close" fcColor="#009DFF"></fc-icon>关闭
                    </li>
                </ul>
            </div>
         </div>
         <div fccontent>
         <fc-layoutpanel fccontent id="id0">
             <fc-title fcLabel="基本信息" fcWidth="96%" fcheader [fcHasLine]="false"></fc-title>
             <fc-layoutcol fcSpans="1,0" fccontent>
                 <div fccontent1>
                     <fc-text [fcLabel]="'模型名称'" fcReadonly="true" [(ngModel)]="content"
                     name="APPPID"></fc-text>
                    <fc-text [fcLabel]="'事件编码'" [fcAppid]="appId" fcFieldCode="BTNCODE" [fcValid]="mainValid.BTNCODE" fcPlaceHolder="按编码规则自动生成"   [(ngModel)]="mainObj.BTNCODE" 
                     name="BTNCODE"></fc-text>
                     <div class="sys-tab">与其关系名称，中文，如，元数据的属性</div>
                     <fc-text [fcLabel]="'事件名称'" [fcAppid]="appId" fcFieldCode="BTNNAME" [fcValid]="mainValid.BTNNAME"  fcPlaceHolder="请输入中文"  [(ngModel)]="mainObj.BTNNAME" 
                     name="BTNNAME"></fc-text>
                     <div class="sys-tab">被关联的模型名称</div>
                     <fc-text [fcLabel]="'操作代码'"  [fcAppid]="appId" fcFieldCode="ACTCODE" [fcValid]="mainValid.ACTCODE"   fcPlaceHolder="请输入编码如addCard" [(ngModel)]="mainObj.ACTCODE"
                     name="ACTCODE"></fc-text>
                     <div class="sys-tab">前端操作的事件编码</div>
                 </div>
             </fc-layoutcol>
             <fc-layoutcol fcSpans="1,1" fccontent>
                 <div fccontent1 style="margin-left:34%;">
                      <fc-long  [fcAppid]="appId" fcFieldCode="SORT" [fcValid]="mainValid.SORT" [(ngModel)]="mainObj.SORT" fcLabel="排序" fcPlaceHolder="请输入整数" name="SORT"></fc-long>
                 </div>
                 <div fccontent2>
                      <fc-radio [(ngModel)]="mainObj.ENABLE" fcLabel="是否启用" [fcAppid]="appId" fcFieldCode="ENABLE" fcLabelCode="DICDESC"
                      fcValueCode="DICVALUE" name="ENABLE"  (ngModelChange)="componentEvents('enableEvent',$event)"></fc-radio>
                 </div>
             </fc-layoutcol>
             <div class="sys-title-container" fccontent>
                <fc-title class="sys-flex-title" fcLabel="其他信息" [fcHasLine]="false"></fc-title>
                <i class="sys-title-arrow" *ngIf="showDown===true" (click)="open($event)" fccontent1>∨</i>
                <i class="sys-title-arrow" *ngIf="showDown===false" (click)="close($event)" fccontent1>∧</i>
            </div>
            <fc-layoutcol fcSpans="1,0" fccontent class="otherMessage">
                <div class="sys-choose-icon" fccontent1 *ngIf="showDown===false">
                    <fc-label fcLabel="图标"></fc-label>
                    <div class="sys-choose-icon-box"  (click)="event('iconEvent')">
                        <fc-icon [fcIcon]="mainObj.BTNICON"  [(ngModel)]="mainObj.BTNICON" fcSize="large"></fc-icon>
                        <span *ngIf = "visible">选择字体图标</span>
                        <span class="sys-deleticon"  (click)="event('deleticonEvent')">x</span>
                    </div>
                </div>
                <div fccontent1 style="margin-top:5px;" *ngIf="showDown===false">
                    <fc-radio  [fcAppid]="appId" fcFieldCode="BTNTYPE" [fcValid]="mainValid.BTNTYPE" [(ngModel)]="mainObj.BTNTYPE" fcLabel="事件发生场景" fcFieldCode="BTNTYPE"
                     fcLabelCode="DICDESC" fcValueCode="DICVALUE" name="BTNTYPE"  (ngModelChange)="componentEvents('btntypeEvent',$event)"></fc-radio>                  
                    <div class="sys-tab">此事件在模型卡片场景，列表场景，工具栏场景的事件类型</div>
                    <fc-radio  [fcAppid]="appId" fcFieldCode="ALLOWTYPE" [fcValid]="mainValid.ALLOWTYPE" [(ngModel)]="mainObj.ALLOWTYPE" fcLabel="许可类型" fcFieldCode="ALLOWTYPE"
                    fcLabelCode="DICDESC" fcValueCode="DICVALUE" name="ALLOWTYPE"  (ngModelChange)="componentEvents('allowtypeEvent',$event)"></fc-radio>  
                    <div class="sys-tab">开放的事件无需授权，许可按钮需要授权</div>
                </div>
                <fc-textarea fccontent1 [(ngModel)]="mainObj.HELP" fcLabel="帮助(可选)"  name="HELP" fcPlaceHolder="请输入备注" *ngIf="showDown===false"></fc-textarea>
                <div fccontent1 class="sys-tab" *ngIf="showDown===false" class="helpBottom">请输入少于200字</div>
            </fc-layoutcol>
         </fc-layoutpanel>
     </div>
    </div>
    <div class="customize-footer">
        <fc-tlbform fccontent1 fcType="primary" [fcAppid]="appId" fcLayout="center" (fcEvent)="tlbformEvent($event)" class="basicTlb"></fc-tlbform>
    </div>
  </div>
    `,
  styles: [`
  .bg-dialog-content{
      height:450px;
      overflow: scroll;
  }
   .customize-footer{
     text-align:center;
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
  .sys-topclose{
    color: #108ee9;
    margin-top: 8px;
    margin-left: 19px;
  }
  .sys-tab{
      margin-left:26%;
  }
  .anticon {
    margin-right: 20px;
    display: block;
    text-align: right;
 }
 .sys-title-arrow{
  font-size: 20px;
  font-style: inherit;
  flex: 0.2;
  display:block;
  text-align: right;
}
.sys-title-arrow:hover{
  cursor:pointer;
}
.topClose{
  border-bottom:1px solid #ccc;
}
.helpBottom{
  border-bottom:1px solid #ccc;
  padding-left: 250px;
}
.sys-title-container{
  display:flex;
  flex-direction:row;
  align-items:center;
  padding-right: 20px;
  border-top: 1px solid #ccc;
}
.sys-flex-title{
  flex:0.8;
} 
  `]
})
export class SysappmodaleventdialogComponent  extends ParentEditComponent{
  //图标属性显示字还是图标
  visible: boolean = true;
  //显示展开收起图标,初始收起
  showDown: boolean;
  //模型名称
  content: string;
  //声明对象
  mainObj = {
    APPID: '',
    BTNCODE: '',
    BTNNAME: '',
    ACTCODE: '',
    SORT: '',
    ENABLE: '',
    BTNICON: '',
    BTNTYPE: '',
    ALLOWTYPE: '',
    HELP: ''
  }
  //中间对象
  obj = {
    APPID: '',
    BTNCODE: '',
    BTNNAME: '',
    ACTCODE: '',
    SORT: '',
    ENABLE: '',
    BTNICON: '',
    BTNTYPE: '',
    ALLOWTYPE: '',
    HELP: ''
  };
  @Input()
  set options(option: any) {
    this.obj = option;
    //新增弹窗
    if (this.obj.APPID === undefined) {
      this.content = option;
    }
    this.productIcon();
  }
  @Input()
  set strs(str: any) {
    //编辑的弹窗
    if (str != undefined && str != null && str != '') {
      this.content = str;
      this.mainObj = this.obj;
    }
    this.productIcon();
  }
  constructor(private modal: NzModalSubject, public mainService: SysappbuttonsService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    this.showDown = true;
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  /**
  * 保存前验证
  */
  beforeSave():boolean{
    this.mainObj.APPID=this.content.split('-')[0];
    return true;
  }
  event(eventName: string, param: any): void {
    switch (eventName) {
      //图标弹窗
      case 'iconEvent':
        this.mainService.producticonmodal('字体图标', SysicondialogComponent).subscribe(obj => {
          if (obj.DICVALUE !== undefined) {
            this.mainObj.BTNICON = obj.DICVALUE
            this.visible = false;
          }
        })
        break;
      //删除字体图标X
      case 'deleticonEvent':
        this.mainObj.BTNICON = "";
        this.visible = true;
        event.stopPropagation()
        break;
      case 'closetop':
      this.modal.destroy();
    }
  }
  /**
  *  ICON如果等于空visible显示（文字请选择图片）
  * ICON如果不等于空visible不显示（文字请选择图片不显示）
  * @param event  
  */
  productIcon() {
     //第一次判断是新增还是修改页面如果是新增页面提示显示如果
     //是修改页面判断图标是否为空如果为空显示否则不显示提示
     if (this.mainObj.BTNICON === "" || this.mainObj.BTNICON === null) {
        this.visible = this.visible
    } else {
      this.visible = !this.visible
    }
  }
  /**
* 组件事件收集
* @param type 字符串命名
* @param ev 事件传过来的参数
*/
  componentEvents(type: string, ev: any) {
    switch (type) {
      case 'enableEvent':
        this.mainObj.ENABLE = ev;
        break;
      case 'btntypeEvent':
        this.mainObj.BTNTYPE = ev;
        break;
      case 'allowtypeEvent':
        this.mainObj.ALLOWTYPE = ev;
        break;
    }
  }
  /**
  * 展开其他信息
  */
  open() {
    this.showDown = false;
  }
  /**
  * 收起其他信息
  */
  close() {
    this.showDown = true;
  }
}