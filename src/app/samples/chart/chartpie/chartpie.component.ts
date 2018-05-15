import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';

@Component({
  selector: 'chartpie',
  templateUrl: './chartpie.component.html',
  styles: [``]
})
export class ChartpieComponent extends ComponentParent {
  //饼状图文字
  _pieLabels: string[] = ['铁债', '国开行', '优先股']
  //饼状图数据
  /**
   * 饼状图事件
   * @param event 
   */
  chartpieEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'hover':
        break;
      case 'click':
        break; 
    }
  }
  _pieData: number[] = [1692215654.69178, 293107561.643836, 933395486.794522];
  constructor(public mainService: ComponentService) {
    super('FCCHARTPIE', mainService);
  }
}