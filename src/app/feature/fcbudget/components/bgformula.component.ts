// 预算公式
import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { FCEVENT } from 'fccomponent/fc';
import { ParentlistComponent } from 'fccomponent';
import { NzModalService } from 'ng-zorro-antd';
import { BgattributeService } from '../services/bgattribute.service';
@Component({
  selector: 'bgformula',
  templateUrl: './bgformula.component.html',
  styles: [`
  :host ::ng-deep .formulaLeftList .fc-listdata{
    height:450px;
  }
  :host ::ng-deep .formulaRightList .fc-listdata{
    height:500px;
  }
  .floatLeft{
    float:left;
    margin-top:14px;
  }
  .floatLeftButton{
    float:left;
  }
  :host ::ng-deep .floatLeftButton .ant-btn{
    margin-right:10px;
    margin-top:8px;
  }
  :host ::ng-deep .formulaLeft .fc-layoutrow{
    border: 1px solid;
    width: 83%;
    padding: 15px;
    margin:30px 10px 10px 60px;
  }
  :host ::ng-deep .formulaRight .fc-layoutrow{
    padding:20px 30px 0px 40px;
  }
  .save .ant-btn{
    width:100%;
    text-aligin:center;
  }
  :host ::ng-deep .leftButton .fc-content2{
    margin-top:85px;
  }
  :host ::ng-deep .leftButton .ant-btn{
    padding:0px 10px;
  }
  .save {
    text-align: center;
    margin-top: 15px;
}
  `]
})
export class BgformulaComponent extends ParentlistComponent {
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
