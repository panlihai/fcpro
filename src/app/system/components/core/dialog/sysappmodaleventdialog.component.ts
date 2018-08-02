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
         <div>事件：描述与模型的事件，呈现方式体现在按钮上，与属性及关系构成模型</div>
         <div class="sys-topclose">关闭</div>
         <div fccontent>
         <fc-layoutpanel fccontent id="id0">
             <fc-title fcLabel="基本信息" fcWidth="96%" fcheader  [fcHasLine]="false"></fc-title>
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
                    <fc-radio [(ngModel)]="mainObj.ENABLE" fcLabel="是否启用" [fcAppid]="appId" fcFieldCode="ENABLE" fcLabelCode="DICDESC"
                    fcValueCode="DICVALUE" name="ENABLE"  (ngModelChange)="componentEvents('enableEvent',$event)"></fc-radio>
                 </div>
                 <div fccontent2>
                     <fc-long  [fcAppid]="appId" fcFieldCode="SORT" [fcValid]="mainValid.SORT" [(ngModel)]="mainObj.SORT" fcLabel="排序" fcPlaceHolder="请输入整数" name="SORT"></fc-long>
                 </div>
             </fc-layoutcol>
            <fc-layoutcol fcSpans="1,0" fccontent>
                <fc-title fcLabel="其他信息" fcWidth="96%" [fcHasLine]="false" fccontent1></fc-title>
                 <div class="sys-choose-icon" fccontent1>
                    <fc-label fcLabel="数据源图标"></fc-label>
                    <div class="sys-choose-icon-box"  (click)="event('iconEvent')">
                        <fc-icon [fcIcon]="mainObj.BTNICON"  [(ngModel)]="mainObj.BTNICON" fcSize="large"></fc-icon>
                        <span *ngIf = "visible">选择字体图标</span>
                        <span class="sys-deleticon"  (click)="event('deleticonEvent')">x</span>
                    </div>
                </div>
                <div fccontent1 style="margin-top:5px;">
                    <fc-radio  [fcAppid]="appId" fcFieldCode="BTNTYPE" [fcValid]="mainValid.BTNTYPE" [(ngModel)]="mainObj.BTNTYPE" fcLabel="事件发生场景"
                     fcLabelCode="DICDESC" fcValueCode="DICVALUE" name="BTNTYPE"  (ngModelChange)="componentEvents('btntypeEvent',$event)"></fc-radio>                  
                    <div class="sys-tab">此事件在模型卡片场景，列表场景，工具栏场景的事件类型</div>
                    <fc-radio  [fcAppid]="appId" fcFieldCode="ALLOWTYPE" [fcValid]="mainValid.ALLOWTYPE" [(ngModel)]="mainObj.ALLOWTYPE" fcLabel="许可类型"
                    fcLabelCode="DICDESC" fcValueCode="DICVALUE" name="ALLOWTYPE"  (ngModelChange)="componentEvents('allowtypeEvent',$event)"></fc-radio>  
                    <div class="sys-tab">开放的事件无需授权，许可按钮需要授权</div>
                </div>
                <fc-textarea fccontent1 [(ngModel)]="mainObj.HELP" fcLabel="帮助"  name="HELP"></fc-textarea>
                <div fccontent1 class="sys-tab">请输入少于200字</div>
            </fc-layoutcol>
         </fc-layoutpanel>
     </div>
    </div>
    <div class="customize-footer">
        <fc-button  [fcType]="'primary'" fcLabel="保存" (click)="emitDataOutside($event)">
        </fc-button>
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
  `]
})
export class SysappmodaleventdialogComponent  extends ParentEditComponent{
  // readonly:boolean;
  //模型名称字段
  content: any;
  constructor(private modal: NzModalSubject, public mainService: SysappbuttonsService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  //图标属性显示字还是图标
  visible: boolean = true;
  mainObj:any = {
    APPPID:'',
    BTNCODE:'',
    BTNNAME:'',
    ACTCODE:'',
    ENABLE:'',
    SORT:'',
    BTNICON:'',
    BTNTYPE:'',
    ALLOWTYPE:'',
    HELP:'',
    ID:''
  }
  @Input()
  set options(option: any) {
    this.mainObj=option;
    if (this.mainObj.APPID === undefined) {
      this.content = '';
      // this.readonly = false;
    } else {
      this.content = option.APPID + "-" + option.BTNNAME;
      // this.readonly = true;
    }
    this.productIcon();
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  init(): void {
  }
  /**
* 保存前验证
*/
  beforeSave(): boolean {
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
    }
  }
  /**
  *  ICON如果等于空visible显示（文字请选择图片）
  * ICON如果不等于空visible不显示（文字请选择图片不显示）
  * @param event  
  */
  productIcon() {
     //第一次判断如果是事件触发，则提示显示否则不显示，当不是事件触发时判断BTNICON是否是空
     if (this.mainObj.BTNICON === null) {
      // this.visible = true;
      // this.visible = this.visible
        if (this.mainObj.BTNICON === null) {
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
      case 'btntypeEvent':
        this.mainObj.BTNTYPE = ev;
        break;
      case 'allowtypeEvent':
        this.mainObj.ALLOWTYPE = ev;
        break;
    }
  }
  //确定按钮
emitDataOutside(ev){
  if(this.mainObj.ID === undefined){
    //新增模态框数据新增到子表中  
    this.mainService.childrensave(this.mainObj)   
  }else{
    //修改子表数据
    this.mainService.childrenupdate(this.mainObj)
  }
}
}