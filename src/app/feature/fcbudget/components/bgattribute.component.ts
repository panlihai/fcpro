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
  `]
})
export class BgattributeComponent extends ParentlistComponent {
  constructor(public mainService: BgattributeService,
    public router: Router,
    public activeRoute: ActivatedRoute, private modal: NzModalService) {
    super(mainService, router, activeRoute);
  }
  init(): void {

  }
  getDefaultQuery() {
    return {

    }
  }
  /**
   * @param eventName 事件名称
   * @param context 事件返回参数
   */
  event(eventName: string, event: FCEVENT): void {

  }
}
