import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, ParentlistComponent } from 'fccomponent';
import { SysproductService } from '../../services/sysproduct.service';
import { FCEVENT } from 'fccomponent/fc';
@Component({
  selector: 'sysproduct',
  templateUrl: 'sysproduct.component.html',
  styles: [`
  .sys-card-btn{
    width:50%;
  }
  `]
})
export class SysproductComponent extends ParentlistComponent {
  //产品数据
  sysProducts: any[];
  //字母查找
  sysLookUp: any[];
  constructor(public mainService: SysproductService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    this.initPproduct();
    this.sysLookUp = this.mainService.fastLookUp();
  }
  /**
   * 查询
   */
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
   * 初始化产品
   */
  initPproduct() {
    this.mainService.findWithQuery({}).subscribe(result => {
      this.sysProducts = result.P_LISTVALUE;
    });
  }
  /**
   * 新增产品,跳转到新增产品页面
   */
  addProduct() {
    this.navRouter('sysproductAdd');
  }
  /**
   * 修改产品，跳转到修改产品页面
   * @param event 
   */
  modifyProduct(event: FCEVENT) {
    this.navRouter('sysproductModify', event.param);
  }
  /**
   * 删除
   */
  delectProduct(event: FCEVENT) {

  }
}
