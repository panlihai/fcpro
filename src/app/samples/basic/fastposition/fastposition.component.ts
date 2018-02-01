import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fastposition',
  templateUrl: './fastposition.component.html',
  styleUrls: ['./fastposition.component.css']
})
export class FastpositionComponent implements OnInit {
  //快速定位
  fastpositionlinks: any[];
  constructor() { }

  ngOnInit() {
    this.fastpositionlinks = [
      {
        label: "位置1",
        href: "position1",
        child: []
      }, {
        label: "位置2",
        href: "position2",
        child: [
          {
            label: '位置2的子元素1',
            href: 'p2child1'
          }, {
            label: '位置2的子元素2',
            href: 'p2child2'
          }
        ]
      }, {
        label: "位置3",
        href: "position3",
        child: []
      }
    ]
  }
}
