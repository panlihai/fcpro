import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  //当前日期
  now = new Date();
  constructor() { }

  ngOnInit() {
  }

}
