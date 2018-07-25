import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, ParentlistComponent } from 'fccomponent';
import { SysdatasourceService } from '../../services/sysdatasource.service';
import { FCEVENT } from 'fccomponent/fc';
import { Sysappbuttons } from 'fccore';
// import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
(window as any).global = window;
@Component({
  selector: 'sysdatasource',
  templateUrl: './sysdatasource.component.html',
  styles: [`
  .sys-card-btn{
    width:25%;
  }
  `]
})
export class SysdatasourceComponent extends ParentlistComponent {
  //字母查找
  sysLookUp: any[];
  //数据源
  sysDatasources: any[];
  //明细操作按钮
  btnlistOnes: any[];
  //更多的按钮
  btnlistMores: any[];
  //产品
  product:string;
  constructor(public mainService: SysdatasourceService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    // private dragulaService: DragulaService
  ) {
    super(mainService, router, activeRoute);
  
  }
  init(): void {
    this.sysLookUp = this.mainService.fastLookUp();
    this.initDatasource();
    this.btnlistOnes = this.mainService.appButtons.filter(btn =>
      btn.BTNTYPE === 'LISTONE'
    );
    this.btnlistMores = this.btnlistOnes.splice(3);
    this.btnlistOnes = this.btnlistOnes.splice(0, 2);
  }
  getDefaultQuery() {

  }

  /**
   * 主对象的事件
   * @param eventName 事件名 
   * @param context 返回参数
   */
  event(eventName: string, context: any): void {
    switch (eventName) {
     
    }
  }


  /**
   * 初始化数据源
   */
  initDatasource() {
    this.mainService.findWithQuery({}).subscribe(result => {
      this.sysDatasources = result.P_LISTVALUE;
    });
  }
  /**
  * 跳转到编辑页面
  * @param event 
  */
  listEdit(event: FCEVENT) {
    let selectedObj: any = event;
    if (selectedObj && selectedObj !== null) {
      this.cacheService.setS(this.appId + "DATA", this.commonService.cloneArray(this.sysDatasources));
      this.navRouter(this.getRouteUrl('Edit'), { ID: selectedObj.ID, refresh: 'Y' });
    }
  }
}
