import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentEditComponent, ParentlistComponent } from 'fccomponent';
import { SyscompanyService } from '../../services/syscompany.service';
import { FCEVENT } from 'fccomponent/fc';
import { environment } from '../../../../environments/environment';
import { ProvidersService } from 'fccore';
@Component({
  selector: 'syswizard',
  templateUrl: './syswizard.component.html',
  styles: [`
 
  `]
})
export class SyswizardComponent extends ParentlistComponent {
  constructor(public mainService: SyscompanyService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    private _providers: ProvidersService,
  ) {
    super(mainService, router, activeRoute);
  }
  init() {

  }
  getDefaultQuery() {

  }
  event(eventName: string, context: any): void {

  }
}
