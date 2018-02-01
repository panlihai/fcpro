import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'hellofc',
  template: `
    <fc-layoutpanel>
      <fc-title fcTitle="hello fc" fcheader></fc-title>
      <div fctoolbar></div>
      <div fccontent></div>
    </fc-layoutpanel>
  `,
  styles: [`
  
  `]
})
export class HellofcComponent {

  constructor() {
  }

  ngOnInit() {
  }

}
