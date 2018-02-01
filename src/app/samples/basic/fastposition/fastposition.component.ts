import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-fastposition',
  templateUrl: './fastposition.component.html',
  styleUrls: ['./fastposition.component.css']
})
export class FastpositionComponent extends ComponentParent {
  //快速定位
  fastpositionlinks: any[] = [
    {
      label: "快速定位",
      href: "position1",
      child: []
    }, {
      label: "属性",
      href: "position2",
      child: []
    }, {
      label: "事件",
      href: "position3",
      child: []
    }, {
      label: "位置4",
      href: "position4",
      child: [{
        label: '位置4child1',
        href: 'p4child1'
      }, {
        label: '位置4child2',
        href: 'p4child2'
      }, {
        label: '位置4child3',
        href: 'p4child3'
      }]
    }
  ];
  constructor(public mainService: ComponentService) {
    super('FCFASTPOSITION', mainService);
  }
}
