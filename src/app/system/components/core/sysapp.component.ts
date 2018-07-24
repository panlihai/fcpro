import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { SysappService } from '../../services/sysapp.service';
import { NzModalService } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
import { ParentlistComponent } from 'fccomponent';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'sysapp',
  templateUrl: './sysapp.component.html',
  styles: [`
  .sys-card-btn{
    width:25%;
  }
  `]
})
export class SysappComponent extends ParentlistComponent {
  //字母查找
  fastsearchWords: any[];
  //元数据
  sysApps: any[];
  //明细操作按钮
  btnlistOnes: any[];
  //更多的按钮
  btnlistMores: any[];
  constructor(public mainService: SysappService,
    public router: Router,
    public activeRoute: ActivatedRoute, private modal: NzModalService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    this.initSysApp();
    this.fastsearchWords = this.mainService.fastSearch();
    this.btnlistOnes = this.mainService.appButtons.filter(btn =>
      btn.BTNTYPE === 'LISTONE'
    );
    this.btnlistMores = this.btnlistOnes.splice(3);
    this.btnlistOnes = this.btnlistOnes.splice(0, 2);
  }
  getDefaultQuery() {
    return {
      ENABLE: 'Y',
      WHERE: ' AND 1=1'
    }
  }
  /**
   * @param eventName 事件名称
   * @param context 事件返回参数
   */
  event(eventName: string, event: FCEVENT): void {
    if(event.param.BUSTYPE==='fastsearch'){
      this.searchByWord(event.param);
    }
  }
  /**
  * 初始化元数据
  */
 searchByWord(btn:any) {
   let valueObj ={WHERE:"AND SUBSTR(APPID,0,1)='"+btn.ACTCODE+"'"};
    this.mainService.findWithQuery(valueObj).subscribe(result => {
      if (result.CODE === '0') {
        this.sysApps = result.DATA;
      }
    });
  }
  /**
   * 跳转到编辑页面
   * @param event 
   */
  listEdit(event: FCEVENT) {
    let selectedObj: any = event;
    if (selectedObj && selectedObj !== null) {
      this.cacheService.setS(this.appId + "DATA", this.commonService.cloneArray(this.sysApps));
      this.navRouter(this.getRouteUrl('Modify'), { ID: selectedObj.ID, refresh: 'Y' });
    }
  }
}
