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
  sysLookUp: any[];
  //元数据
  sysApps: any[];
  constructor(public mainService: SysappService,
    public router: Router,
    public activeRoute: ActivatedRoute, private modal: NzModalService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    this.initSysApp();
    this.sysLookUp = this.mainService.fastLookUp();
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
  event(eventName: string, context: any): void {
    switch (eventName) {
      case 'lookUpA'://根据字母快速查找
        break;
      case 'lookUpB':
        break;
      case 'lookUpC':
        break;
      case 'lookUpD':
        break;
      case 'lookUpE':
        break;
      case 'lookUpF':
        break;
      case 'lookUpG':
        break;
      case 'lookUpH':
        break;
      case 'lookUpI':
        break;
      case 'lookUpJ':
        break;
      case 'lookUpK':
        break;
      case 'lookUpL':
        break;
      case 'lookUpM':
        break;
      case 'lookUpN':
        break;
      case 'lookUpO':
        break;
      case 'lookUpP':
        break;
      case 'lookUpQ':
        break;
      case 'lookUpR':
        break;
      case 'lookUpS':
        break;
      case 'lookUpT':
        break;
      case 'lookUpU':
        break;
      case 'lookUpV':
        break;
      case 'lookUpW':
        break;
      case 'lookUpX':
        break;
      case 'lookUpY':
        break;
      case 'lookUpZ':
        break;
    }
  }
  /**
  * 初始化元数据
  */
  initSysApp() {
    this.mainService.findWithQuery({}).subscribe(result => {
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
