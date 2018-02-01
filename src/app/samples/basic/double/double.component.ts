import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-double',
  templateUrl: './double.component.html',
  styleUrls: ['./double.component.css']
})
export class DoubleComponent implements OnInit {
  doubleValue: number = 5.5;
  constructor() {

  }

  ngOnInit() {
  }

}
