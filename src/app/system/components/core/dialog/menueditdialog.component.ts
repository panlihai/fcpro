import { Component, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
import { SysmenuService } from '../../../services/sysmenu.service';
import { ParentEditComponent } from 'fccomponent/parentedit.component';
import { Router, ActivatedRoute } from '@angular/router';
// 选择图标
@Component({
    selector: 'menueditdialog',
    template: `
<fc-layoutpanel>
    <div class="sys-card-pannel-header" fcheader>
        <fc-title fcLabel="编辑导航项" class="sys-card-pannel-title" [fcHasLine]="false"></fc-title>
        <P class="sys-card-pannel-smarks">
            说明：导航页，是菜单项的编辑，包含菜单中文名称，编码名称，是否末级等，可建子导航；
        </P>
    </div>
    <div fccontent>
        <fc-title fcLabel="基本信息" class="sys-card-pannel-title" [fcHasLine]="false" fccontent></fc-title>
        <fc-layoutcol fcSpans="1,0" fccontent>
            <fc-layoutcol fcSpans="1,1" fccontent1>
                <fc-text fccontent1 [fcLabel]="'导航编码'"  fcPlaceHolder="请输入字符" [(ngModel)]="mainObj.MENUID" [fcAppid]="appId"></fc-text>
                <span fccontent1 class="instructions">唯一标识该导航</span>
                <fc-text fccontent1 [fcLabel]="'名称导航'"  fcPlaceHolder="请输入中文" [(ngModel)]="mainObj.MENUNAME" [fcAppid]="appId"></fc-text>
                <span fccontent1 class="instructions">此内容将在导航中显示</span>
                <div class="noShow" fccontent1 [ngClass]="{'show':show===true}" >
                    <fc-text fccontent [fcLabel]="'路由'"  fcPlaceHolder="请输入路由名称" [(ngModel)]="mainObj.ROUTER" [fcAppid]="appId"></fc-text>
                    <span fccontent class="instructions">不包含产品编码，不包含/；如sysappList</span>
                    <fc-radio fccontent [fcLabel]="'导航类型'"  [fcAppid]="'SYSMENU'" [(ngModel)]="mainObj.MENUTYPE" fcFieldCode="MENUTYPE" fcLabelCode="DICDESC"
                        fcValueCode="DICVALUE">
                    </fc-radio>
                    <span fccontent class="instructions">功能：默认路由；内部路由：全部路由（pid/sysappList）；外部路径：http：//www.baidu .com/index.html</span>
                </div>
            </fc-layoutcol>
        </fc-layoutcol>
        <fc-title fcLabel="其他信息" class="sys-card-pannel-title" [fcHasLine]="false" fccontent></fc-title>
        <fc-layoutcol fcSpans="1,0" fccontent>
            <fc-layoutcol fcSpans="1,1" fccontent1>
                <fc-long fccontent1 [fcLabel]="'排序'" fcPlaceHolder="请输入整数" [(ngModel)]="mainObj.SORT" [fcAppid]="appId"></fc-long>
                <fc-radio fccontent2 [fcLabel]="'是否启用'" [fcAppid]="'SYSMENU'" [(ngModel)]="mainObj.ENABLE" fcFieldCode="ENABLE" fcLabelCode="DICDESC"
                    fcValueCode="DICVALUE">
                </fc-radio>
                <span fccontent2 class="instructions">默认为启用</span>
            </fc-layoutcol>
            <fc-textarea  fccontent1 [fcLabel]="'备注（可选）'" name="textareaname" [fcRows]="'2'" [(ngModel)]="mainObj.REMARK" [fcAppid]="appId" fcPlaceHolder="请输入备注" class="remarkText"></fc-textarea>
        </fc-layoutcol>
        <div class="customize-footer" fccontent1>
            <fc-button  [fcType]="'primary'" fcLabel="保存" (click)="ok($event)">
            </fc-button>
            <fc-tlbform fccontent1 fcType="primary" [fcAppid]="appId" fcLayout="center" (fcEvent)="tlbformEvent($event)" class="basicTlb"></fc-tlbform>
        </div>
    </div>
</fc-layoutpanel>
    `,
    styles: [`
   .instructions{
        width: 100%;
        display: block;
        margin-left: 25%;
        color: #CFCFCF;
   }
   .instructions1{
        width: 100%;
        display: block;
        margin-left: 500px;
    }
    .noShow{
        display:none;
    }
    .show{
        display:block;
    }
    .sys-card-pannel-header{
        border-bottom:1px solid #e9e9e9;
    }
    :host ::ng-deep .remarkText .ant-form-item-label {
        width: 12.5%;
    }
    .customize-footer {
        text-align: center;
    }
  `]
})
export class MenueditdialogComponent extends ParentEditComponent{
    event(eventName: string) {
    }
    init(): void {
        
    }
    addNew(mainObj: any): boolean {
        return true;
    }
    
    constructor(private modal: NzModalSubject, public mainService: SysmenuService,
        public router: Router,
        public activeRoute: ActivatedRoute) {
        super(mainService, router, activeRoute);
    }
    //初始化是否显示路由
    show:boolean;
    mainObj={
        ID:'',
        MENUID :'',
        MENUNAME:  '',
        ROUTER: '',
        MENUTYPE:  '',
        SORT:  '',
        ENABLE: '',
        REMARK:'',
        HASCHILD:''
    }
    @Input()
    set options(option: any) {
      if(option==={}){
        this.mainObj=this.mainService.initObjDefaultValue(option);
      }
      if (option!=={}) {
        this.mainObj=option;
        if(this.mainObj.HASCHILD==='N'){
            this.show=true;
        }else if(this.mainObj.HASCHILD===undefined){
            this.show=true;
        }
      }
    }
    ok(){
        let param=this.mainObj;
        this.modal.next(param);
        this.modal.destroy();
    }
}