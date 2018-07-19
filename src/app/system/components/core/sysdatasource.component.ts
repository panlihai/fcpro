import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, ParentlistComponent } from 'fccomponent';
import { SysdatasourceService } from '../../services/sysdatasource.service';
import { FCEVENT } from 'fccomponent/fc';
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
  constructor(public mainService: SysdatasourceService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    this.sysLookUp = this.mainService.fastLookUp();
    this.initDatasource();
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
