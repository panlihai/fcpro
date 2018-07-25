import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { SysserviceService } from '../../services/sysservice.service';
import { FCEVENT } from 'fccomponent/fc';
@Component({
    selector: 'sysservice',
    templateUrl: './sysservice.component.html',
    styles: [`
   
            `]
})
export class SysserviceComponent extends ParentlistComponent {
   //明细操作按钮
   btnlistOnes: any[];
   //更多的按钮
   btnlistMores: any[];
   //字母查找
   fastsearchWords: any[];
   //服务
   sysServices:any[];
    constructor(public mainService: SysserviceService,
        public router: Router,
        public activeRoute: ActivatedRoute) {
        super(mainService, router, activeRoute);
    }
    init(): void {
        this.searchByWord();
        this.fastsearchWords = this.mainService.fastSearch();
        this.btnlistOnes = this.mainService.appButtons.filter(btn =>
          btn.BTNTYPE === 'LISTONE'
        );
        this.btnlistMores = this.btnlistOnes.splice(3);
        this.btnlistOnes = this.btnlistOnes.splice(0, 2);
    }
    getDefaultQuery() {
    }
     /**
   * @param eventName 事件名称
   * @param context 事件返回参数
   */
  event(eventName: string, event: FCEVENT): void {
    if (event.param.BUSTYPE === 'fastsearch') {
      this.searchByWord(event.param);
    }
  }
  /**
  * 初始化元数据
  */
  searchByWord(btn?: any) {
    let valueObj: any = {};
    if (btn) {
      valueObj.WHERE = "AND SUBSTR(SERVICEID,0,1)='" + btn.ACTCODE + "'"
    }
    this.mainService.findWithQuery(valueObj).subscribe(result => {
      if (result.CODE === '0') {
        this.sysServices = result.DATA;
      }
    });
  }
}
