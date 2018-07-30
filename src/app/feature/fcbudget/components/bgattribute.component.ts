// 预算属性
import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { FCEVENT } from 'fccomponent/fc';
import { ParentlistComponent } from 'fccomponent';
import { NzModalService } from 'ng-zorro-antd';
import { BgattributeService } from '../services/bgattribute.service';
@Component({
  selector: 'bgattribute',
  templateUrl: './bgattribute.component.html',
  styles: [`
  .templatetablist{
    margin-left:5%;
  }
  .bgattab{
    text-align: center; 
    margin-left: 15%;
  }
  :host ::ng-deep .bgattab .ant-btn {
    margin-right: 2%;
}
  `]
})
export class BgattributeComponent extends ParentlistComponent {
  _selectedIndex: number;
  constructor(public mainService: BgattributeService,
    public router: Router,
    public activeRoute: ActivatedRoute, private modal: NzModalService) {
    super(mainService, router, activeRoute);
  }
   //选项卡
   tabmain = [
    { name: '属性列表'},
    { name: '属性明细' , disabled: true },
    { name: '属性值' , disabled: true }
]
  init(): void {

  }
  getDefaultQuery() {
    return {

    }
  }
  /**
   * @param eventName 新增属性事件
   * @param context 
   */
  bgattributeadd(){
    this._selectedIndex = 1;
  }
   /**
   * @param eventName 属性值返回按钮
   * @param context 
   */
  back(){
    this._selectedIndex = 0;
  }
  /**
   * @param eventName 
   * @param context 属性列表预览事件
   */
  event(eventName: string, event: FCEVENT): void {
    switch (eventName) {
      case 'listOneView' :
      this._selectedIndex = 2;
      break;
    }
    
  }
}
