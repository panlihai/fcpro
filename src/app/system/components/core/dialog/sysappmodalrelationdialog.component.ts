import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';
import { SysbizcodedefineService } from '../../../services/sysbizcodedefine.service';
import { forEach } from '@angular/router/src/utils/collection';
import { SysapplinksService } from '../../../services/sysapplinks.service';
import { ParentEditComponent } from 'fccomponent';
import { Router, ActivatedRoute } from '@angular/router';
import { SysicondialogComponent } from './sysicondialog.component';
@Component({
  selector: 'sysappmodalrelationdialog',
  template: `
  <div>
  <div class="bg-dialog-content">
       <div class="topClose">
          <div>事件：描述与模型的事件，呈现方式体现在按钮上，与属性及关系构成模型</div>
       </div>
       <div fccontent>
       <fc-layoutpanel fccontent id="id0">
           <fc-title fcLabel="基本信息" fcWidth="96%" fcheader [fcHasLine]="false"></fc-title>
           <fc-layoutcol fcSpans="1,0" fccontent>
               <div fccontent1>
                    <fc-text [fcLabel]="'主模型名称'" fcReadonly="true" [(ngModel)]="content" name="MAINAPP"></fc-text>
                    <fc-text [fcLabel]="'关系名称'" fcPlaceHolder="请输入关系的中文描述"   [(ngModel)]="mainObj.LINKNAME" 
                    name="LINKNAME"></fc-text>
                    <div class="sys-tab">与其关系名称，中文，如，元数据的属性</div>
                    <fc-any  fcLabel="子模型名称"  [fcOption]="scomDataItemOptions"   fcPlaceHolder="请输入中文" 
                    [(ngModel)]="mainObj.ITEMAPP" (ngModelChange)="componentEvents('ruletypeEvent',$event)" name="ITEMAPP"></fc-any>
                    <div class="sys-tab">被关联的模型名称</div>
                    <fc-text [fcLabel]="'关联条件'" fcPlaceHolder="请输入sql条件，带and"   [(ngModel)]="mainObj.LINKFILTER" 
                    name="	LINKFILTER"></fc-text>
                    <div class="sys-tab">与主模型通过sql条件构成一对一或一对多关系或主外键关系</div>
               </div>
           </fc-layoutcol>
           <fc-layoutcol fcSpans="1,1" fccontent>
               <div fccontent1 style="margin-left:34%;">
                    <fc-long  [fcAppid]="appId" fcFieldCode="SORTBY" [fcValid]="mainValid.SORTBY" [(ngModel)]="mainObj.SORTBY" fcLabel="排序" fcPlaceHolder="请输入整数" name="SORTBY"></fc-long>
               </div>
               <div fccontent2>
                    <fc-radio [(ngModel)]="mainObj.ENABLE" fcLabel="是否启用" [fcAppid]="appId" fcFieldCode="ENABLE" fcLabelCode="DICDESC"
                    fcValueCode="DICVALUE" name="ENABLE"  (ngModelChange)="componentEvents('enableEvent',$event)"></fc-radio>
               </div>
           </fc-layoutcol>
          <fc-layoutcol fcSpans="1,0" fccontent class="otherMessage">
              <i class="sys-title-arrow" *ngIf="showDown===true" (click)="open($event)" fccontent1>∨</i>
              <i class="sys-title-arrow" *ngIf="showDown===false" (click)="close($event)" fccontent1>∧</i>
              <fc-title fcLabel="其他信息" fcWidth="96%" [fcHasLine]="false" *ngIf="showDown===false" fccontent1></fc-title>
              <div class="sys-choose-icon" fccontent1 *ngIf="showDown===false">
                  <fc-label fcLabel="数据源图标"></fc-label>
                  <div class="sys-choose-icon-box"  (click)="event('iconEvent')">
                      <fc-icon [fcIcon]="mainObj.ICON"  [(ngModel)]="mainObj.ICON" fcSize="large"></fc-icon>
                      <span *ngIf = "visible===true">选择字体图标</span>
                  </div>
                  <span class="sys-deleticon"  (click)="event('deleticonEvent')">x</span>
              </div>
              <div fccontent1 style="margin-top:5px;" *ngIf="showDown===false">
                  <fc-radio [(ngModel)]="mainObj.VIEWPOSITION" fcLabel="相对位置" [fcAppid]="appId" fcFieldCode="VIEWPOSITION" fcLabelCode="DICDESC"
                  fcValueCode="DICVALUE" name="VIEWPOSITION"  (ngModelChange)="componentEvents('viewpositionEvent',$event)"></fc-radio>
                  <div class="sys-tab">与主模型的相对位置，并排，并列，并列后并排的相对位置</div>
                  <fc-radio [(ngModel)]="mainObj.ENABLECACHE" fcLabel="关联缓存" [fcAppid]="appId" fcFieldCode="ENABLECACHE" fcLabelCode="DICDESC"
                  fcValueCode="DICVALUE" name="ENABLECACHE"  (ngModelChange)="componentEvents('enablecacheEvent',$event)"></fc-radio>
              </div>            
              <fc-textarea fccontent1 fcLabel="备注" [(ngModel)]="mainObj.REMARK" name="REMARK" *ngIf="showDown===false"></fc-textarea>
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
  .sys-title-arrow{
    font-size: 20px;
    font-style: inherit;
    flex: 0.2;
    display:block;
    text-align: right;
    padding-right: 20px;
    border-top: 1px solid #ccc;
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
  `]
})
export class SysappmodalrelationdialogComponent extends ParentEditComponent{
  //显示展开收起图标,初始收起
  showDown: boolean;
  //图标属性显示字还是图标
  visible: boolean = true;
  //依赖产品下拉属性
  scomDataItemOptions: any;
  //模型名称
  content: string;
  //声明对象
  mainObj = {
    MAINAPP:'',
    LINKNAME:'',
    ITEMAPP:'',
    LINKFILTER:'',
    ENABLE:'',
    SORTBY:'',
    ICON:'',
    VIEWPOSITION:'',
    ENABLECACHE:'',
    REMARK:''

  }
  //中间对象
  obj = {
    MAINAPP:'',
    LINKNAME:'',
    ITEMAPP:'',
    LINKFILTER:'',
    ENABLE:'',
    SORTBY:'',
    ICON:'',
    VIEWPOSITION:'',
    ENABLECACHE:'',
    REMARK:''
  };
  @Input()
  set options(option: any) {
    this.obj = option;
    //新增弹窗
    if (this.obj.MAINAPP === undefined) {
      this.content = option;
    }
  }
  @Input()
  set strs(str: any) {
    //编辑的弹窗
    if (str != undefined && str != null && str != '') {
      this.content = str;
      this.mainObj = this.obj;
    }
  }
  constructor(private modal: NzModalSubject,
    public mainService: SysapplinksService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    //初始化加载图标判断是否有图标
    this.mainService.applinksall().subscribe(result => {
      this.scomDataItemOptions = [];
      result.DATA.forEach(el => {
        let obj: any = {};
        obj.label = el.APPID + '-' + el.APPNAME;
        obj.value = el.APPID;
        obj.disabled = false;
        this.scomDataItemOptions.push(obj)
      })
    })
    // this.productIcon();
    
    this.showDown = true;
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  /**
  * 保存前验证
  */
 beforeSave():boolean{
  this.mainObj.MAINAPP=this.content.split('-')[0];
  this.mainObj.SORTBY+="";
  return true;
}
  event(eventName: string, param: any): void {
    switch (eventName) {
      //图标弹窗
      case 'iconEvent':
        this.mainService.producticonmodal('字体图标', SysicondialogComponent).subscribe(obj => {
          if (obj.DICVALUE !== undefined) {
            this.mainObj.ICON = obj.DICVALUE
            this.visible = false;
          }
        })
        break;
      //删除字体图标X
      case 'deleticonEvent':
        this.mainObj.ICON = "";
        this.visible = true;
        event.stopPropagation()
        break;
    }
  }
   /**
  *  ICON如果等于空visible显示（文字请选择图片）
  * ICON如果不等于空visible不显示（文字请选择图片不显示）
  * @param event  
  */
 productIcon() {
  //第一次判断如果是事件触发，则提示显示否则不显示，当不是事件触发时判断BTNICON是否是空
  if (this.mainObj.ICON === null) {
   // this.visible = true;
   // this.visible = this.visible
     if (this.mainObj.ICON === null) {
       // this.visible = true;
       this.visible = this.visible
     } else {
       // this.visible = false;
       this.visible = !this.visible
     }
 } else {
   // this.visible = false;
   this.visible = this.visible
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
      //相对位置单选按钮
      case 'viewpositionEvent':
        this.mainObj.VIEWPOSITION = ev;
        break;
      //关系缓存单选按钮
      case 'enablecacheEvent':
        this.mainObj.ENABLECACHE = ev;
        break;
         //关系缓存单选按钮
      case 'ruletypeEvent':
      this.mainObj.ITEMAPP = ev.value;
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