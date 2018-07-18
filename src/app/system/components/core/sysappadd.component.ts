import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SysappService } from '../../services/sysapp.service';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { ParentEditComponent } from 'fccomponent/parentedit.component';
import { Sysappbuttons } from 'fccore/services/sysappbuttons.service';
@Component({
  selector: 'sysappadd',
  template: `
  <fc-layoutpanel>
      <fc-title fcLabel="数据源" fccontent></fc-title>
      <fc-layoutcol fcSpans="1,1" fccontent>  
        <fc-layoutcol fcSpans="1,1" fccontent1>  
               
        </fc-layoutcol>
      </fc-layoutcol>  
      <fc-layoutcol fcSpans="1,1" fccontent>
        <nz-transfer fccontent1
            [nzDataSource]="list"
            [nzListStyle]="{'width.px': 200, 'height.px': 400}"
            (nzSelectChange)="select($event)"
            (nzChange)="change($event)">
            <ng-template #render let-item>
              <i class="anticon anticon-{{item.icon}}"></i> {{item.title}}
            </ng-template>
        </nz-transfer>
        <fc-button fccontent2 fcLabel="生成元数据" [fcType]="'default'" class='sys-block'></fc-button>
        <fc-button fccontent2 fcLabel="查看所有" [fcType]="'primary'"></fc-button>
      </fc-layoutcol>
  </fc-layoutpanel>
  `,
  styles: [`
  :host ::ng-deep .sys-block .ant-btn{
    display: block;
    margin-bottom:20px;
  }
  `]
})
export class SysappaddComponent extends ParentEditComponent {
  list: any[] = [];
  tlbBtns:Sysappbuttons[];
  constructor(public mainService: SysappService,
    public router: Router,
    public activeRoute: ActivatedRoute, 
    private modal: NzModalService,
    public msg: NzMessageService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
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

select(ret: any) {
  console.log('nzSelectChange', ret);
}

change(ret: any) {
  console.log('nzChange', ret);
}
  addNew(mainObj: any): boolean {
    return true;
  }
  event(eventName: string, param: any): void {
  }
}
