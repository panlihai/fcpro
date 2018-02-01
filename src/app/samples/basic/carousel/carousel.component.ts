import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent extends ComponentParent {
  carousel1: any[];
  constructor(public mainService: ComponentService) {
    super('FCCAROUSEL', mainService);
    this.carousel1 = [
      {
        label: "1",
        src: "assets/img/fc1.jpg"
      }, {
        label: "2",
        src: "assets/img/fc2.jpg"
      }, {
        label: "3",
        src: "assets/img/fc3.jpg"
      }, {
        label: "4",
        src: "assets/img/fc4.jpg"
      }
    ]
  }
}

