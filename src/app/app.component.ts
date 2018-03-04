import { Component } from '@angular/core';
import { FccoreModule } from 'fccore';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(){
    FccoreModule.forRoot(environment)
  }
}
