import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';

@Component({
  selector: 'chartbar',
  templateUrl: './chartbar.component.html',
  styles: [``]
})
export class ChartbarComponent extends ComponentParent {
  _fcEvent(arg0: any): any {
    throw new Error("Method not implemented.");
  }
    //柱状图文字
    _barLabels: string[] = ['哈局', '沈阳局', '北京局', '太原局', '呼和局', '...', '乌鲁木齐'];
    //柱状图数据
    _barData: any[] = [
      { data: [73370315, 174698475, 87764250, 2250, 0, 250174, 9], label: '计提利息总额' },
      { data: [24823, 4310789, 790632, 23052, 668, 318150, 9], label: '累计已提折旧总额' }
    ];
    /**
     * 柱状图事件
     * @param event 
     */
    chartbarEvent(event: FCEVENT) {
      switch (event.eventName) {
        case 'hover':
          break;
        case 'click':
          break;
      }
    }
      /**
     * 鼠标点击
     * @param event 
     */
    public _chartClicked(event: any): void {
      this._fcEvent({
          eventName: 'click',
          param: event
      })
  }
  /**
   * 鼠标滑过
   * @param event 
   */
  public _chartHovered(event: any): void {
      this._fcEvent({
          eventName: 'hover',
          param: event
      })
  }
  constructor(public mainService:ComponentService){
    super('FCCHARTBAR',mainService);
  }
  }           