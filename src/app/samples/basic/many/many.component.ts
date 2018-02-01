import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-many',
  templateUrl: './many.component.html',
  styleUrls: ['./many.component.css']
})
export class ManyComponent implements OnInit {
  manyValue: any[] = [{ "label": "A", "value": "a", "disabled": false }];
  manyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  manyOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  manynullOptions: any[] = [];
  constructor() {

  }
  ngOnInit() {

  }
}
