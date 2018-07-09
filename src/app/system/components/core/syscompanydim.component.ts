import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { SyscompanydimService } from '../../services/syscompanydim.service';
import { NzModalService } from 'ng-zorro-antd';
@Component({
    selector: 'syscompanydim',
    template: `
    <fc-layoutpanel fcFull="true">
    <fc-layoutrow fcSpan="30"  fccontent>
     <fc-tlblist fccontent1 [fcAppid]="appId" (fcEvent)="tlblistEvent($event)"></fc-tlblist>
    <fc-listdata  fccontent2 [fcAppid]="appId" [fcOption]="mainService.listOptions" (fcEvent)="componentEvents('listdataEvent',$event)"></fc-listdata>
    </fc-layoutrow>
  </fc-layoutpanel>
  <ng-template #companydimtitle>
    <span>维度信息</span>
  </ng-template>
  <ng-template #companydim style="z-index:999;">
    <fc-layoutpanel fcFull="true">
        <div fccontent style="text-align:center">
            <fc-button fcLabel="保存" fcType="primary" (click)="saveEvent()"></fc-button>
            <fc-button fcLabel="返回列表" fcType="default" (click)="backEvent()"></fc-button>
        </div>
        <fc-layoutcol fcSpans="1,1" fccontent>
            <fc-text fccontent1 style="flex:1"  [(ngModel)]="saveObj.SDIM_CODE"  fcLabel="维度代码" name="TITLE"></fc-text>
            <fc-text fccontent2 style="flex:1"  [(ngModel)]="saveObj.SDIM_NAME" fcLabel="维度名称" name="PUBLISHUSER" ></fc-text>
            <fc-radio fccontent1 style="flex:1"  [fcLabel]="'默认维度'" [(ngModel)]="saveObj.BISDEFAULT" [fcAppid]="appId"  fcFieldCode="BISDEFAULT" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio>
            <fc-radio fccontent2 style="flex:1"  [fcLabel]="'是否内置'" [(ngModel)]="saveObj.BISUSE" [fcAppid]="appId" fcFieldCode="BISUSE" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio>
            <fc-radio fccontent1 style="flex:1"  [fcLabel]="'是否公开'" [(ngModel)]="saveObj.BISPUBLIC" [fcAppid]="appId"fcFieldCode="BISPUBLIC" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio>
            <fc-text fccontent2 style="flex:1" [(ngModel)]="saveObj.SREMARK" fcLabel="应用" name="SREMARK" ></fc-text>
            <fc-radio fccontent1 style="flex:1"  [fcLabel]="'启用状态'" [(ngModel)]="saveObj.BISUSE" [fcAppid]="appId" fcFieldCode="BISUSE" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio>
        </fc-layoutcol>
    </fc-layoutpanel> 
</ng-template>
    `,
    styles: [`
    :host ::ng-deep .fc-layoutpanel .fc-content{
        height:100%;
      }
  `]
})
export class SyscompanydimComponent extends ParentlistComponent {
    arr : any = {};
    defaultOptions: any[] = [{ icon: '', label: '是', value: 'Y' }, { icon: '', label: '否', value: 'N' }];
    builtinOptions: any[] = [{ icon: '', label: '是', value: 'Y' }, { icon: '', label: '否', value: 'N' }];
    publicradioOptions: any[] = [{ icon: '', label: '是', value: 'Y' }, { icon: '', label: '否', value: 'N' }];
    saveObj: any  = {};
    ztQueryObj:any={};
  //   新增模态框开始
  @ViewChild('companydimtitle')
  companydimtitle: TemplateRef<HTMLElement>;
  @ViewChild('companydim')
  companydim: TemplateRef<HTMLElement>;
    currentModal: any;
  //新增模态框结束
  init(): void {
  }
  ngOnInit() {
    this.saveObj = this.mainService.getassignment()
    this.saveObj.BISDEFAULT = "Y";
    this.saveObj.BISUSE = "Y";
    this.saveObj.BISPUBLIC = "Y";
  }
  getDefaultQuery() {
  }
  event(eventName: string, context: any): void {
  }
  tlblistEvent(context: any){
    switch (context.eventName) {
        case 'listAdd':
        this.saveObj = this.mainService.getassignment()
        this.saveObj.SDIM_CODE =""   
        this.saveObj.SDIM_NAME =""
        this.saveObj.BISDEFAULT = "Y"
        this.saveObj.BISUSE = "Y"   
        this.saveObj.BISPUBLIC = "Y"   
        this.saveObj.SREMARK = ""
        this.mainService.providers.msgService.message("新增事件触发")
        this.showModal(this.companydimtitle,this.companydim);
        break;
      }
  } 
     //******* /  弹窗相关方法实现
     showModal(titleTpl,contentTpl) {
        let ago = this;
        this.currentModal = this.modalService.open({
        title: titleTpl,
        content: contentTpl,
        width: "75%",
        wrapClassName: "vertical-center-modal",
        maskClosable: false,
        onOk: function () {
        },
        onCancel: function () {
        },
        });
    }
    // 模态框返回列表事件
  backEvent(){
    this.currentModal.destroy();
  }
    // 保存新增数据
    saveEvent(){
        this.mainService.save(this.saveObj).subscribe(res => {
            if(res.CODE='0'){
              this.messageService.success('保存成功');
            }else{
              this.messageService.warm("保存失败");
            }
          });
        }
        /**
   * 组件事件收集
   * @param type 字符串命名
   * @param ev 事件传过来的参数
   */
  componentEvents(type: string, ev: any) {
    switch (type) {
      case 'listdataEvent':
      if (ev.eventName == "listEdit") {
        // 修改事件  选中列表中某条数据，让修改弹窗中字段为选中列表字段内容
        this.arr = ev.param;
        this.saveObj = this.arr;
        this.showModal(this.companydimtitle,this.companydim);
      }
      break;
      }
  }
    constructor(public mainService: SyscompanydimService,
        public router: Router,
        public activeRoute: ActivatedRoute,
        public modalService: NzModalService) {
        super(mainService, router, activeRoute);
    }
}