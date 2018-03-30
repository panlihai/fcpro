import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { NzMessageService } from 'ng-zorro-antd';
import { FcshareModule } from 'fccomponent/fcshare';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(){
    FcshareModule.init(environment);
  }
}
