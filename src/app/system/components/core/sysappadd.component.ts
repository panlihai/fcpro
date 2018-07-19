import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SysappService } from '../../services/sysapp.service';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { ParentEditComponent } from 'fccomponent/parentedit.component';
import { Sysappbuttons } from 'fccore/services/sysappbuttons.service';
@Component({
  selector: 'sysappadd',
  template: `
  <fc-layoutpanel class="sysappadd">
      <fc-title fcLabel="数据源" fccontent></fc-title>
      <fc-layoutcol fcSpans="1,1" fccontent>  
        <fc-layoutcol fcSpans="1,1" fccontent1>  
          <fc-combo [fcLabel]="'产品'" [fcOption]="productOption" [(ngModel)]="productValue" fccontent1>
          </fc-combo>
          <fc-combo [fcLabel]="'数据源'" [fcOption]="datasourceOption" [(ngModel)]="datasourceValue" fccontent2>
          </fc-combo>    
        </fc-layoutcol>
      </fc-layoutcol>  
      <fc-layoutcol fcSpans="1,1" fccontent class="systransfer">
        <nz-transfer fccontent1
            [nzDataSource]="list"
            [nzTitles]="['所有表及视图', '选中的表或视图']"
            [nzListStyle]="{'width.px': 240, 'height.px': 400}"
            (nzSelectChange)="select($event)"
            (nzChange)="change($event)">
            <ng-template #render let-item>
              {{item.title}}
            </ng-template>
        </nz-transfer>
        <fc-button fccontent2 fcLabel="一键生成" [fcType]="'default'" class='sys-block'></fc-button>
        <fc-button fccontent2 fcLabel="查看所有" [fcType]="'primary'"></fc-button>
      </fc-layoutcol>
  </fc-layoutpanel>
  `,
  styles: [`
  :host ::ng-deep .sys-block .ant-btn{
    display: block;
    margin-bottom:20px;
  } 
  :host ::ng-deep .sysappadd .fc-layoutpanel {
    height: 100%;
  }
  :host ::ng-deep .systransfer .fc-content1 {
    padding-left: 45px;
  }
  :host ::ng-deep .systransfer .fc-layoutcol{
    padding-top: 25px;
  }
  `]
})
export class SysappaddComponent extends ParentEditComponent {
  //产品下拉选项
  productOption: any[] = [];
  //数据源下拉选项
  datasourceOption: any[] = [];
  //穿梭图list
  list: any[] = [];
  constructor(public mainService: SysappService,
    public router: Router,
    public activeRoute: ActivatedRoute, 
    private modal: NzModalService,
    public msg: NzMessageService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    //初始化获取所有软件产品的产品名称
    this.mainService.getProduct({}).subscribe(res=>{
      res.P_LISTVALUE.forEach(element => {
        //将获得的产品名称添加到下拉框中
        this.productOption.push({ icon: '', label: element.PNAME, value: element.PNAME });
      });
    })
    //初始化获取所有数据源
    this.mainService.getdataSource({}).subscribe(result=>{
      result.P_LISTVALUE.forEach(element => {
        //将获得的数据源名称添加到下拉框中
        this.datasourceOption.push({ icon: '', label: element.DSNAME, value: element.PID });
      });
    })
  }
  ngOnInit(): void {
    //获取数据源
    this.getData();
  }
  /**
  * 获取数据源
  */
 getData(): void {
  const ret = [];
  for (let i = 0; i < 10; i++) {
    ret.push({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
      direction: Math.random() * 2 > 1 ? 'right' : '',
      icon: `frown-o`
    });
  }
  this.list = ret;
}
  addNew(mainObj: any): boolean {
    return true;
  }
  event(eventName: string, param: any): void {
  }
  select(ret: any) {
  }

  change(ret: any) {
  }
}
