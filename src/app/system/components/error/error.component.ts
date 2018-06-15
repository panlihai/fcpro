import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvidersService } from 'fccore';
@Component({
  selector: 'error',
  template: `
  <fc-layoutpanel style="height:100%;" class="messagedetail">
    <fc-title fcLabel="发生错误，请联系管理员" fcheader></fc-title>
    <p class="main-content" fccontent>{{error|json}}</p>       
  </fc-layoutpanel>  
  `,
  styles: [`
  
  `]
})
export class ErrorComponent implements OnInit {
  constructor(public provider: ProvidersService) {

  }
  error: string = '';
  ngOnInit(): void {
    this.error = this.provider.cacheService.getS('error', '');
  }
}
