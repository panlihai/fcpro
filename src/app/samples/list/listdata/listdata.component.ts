import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { ParentComponent } from 'fccomponent/parent.component';
import { FCEVENT } from 'fccomponent/fc';
@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html'
})
export class ListdataComponent extends ComponentParent {
  constructor(public mainService: ComponentService) {
    super('FCLISTDATA', mainService);
  }
  event(event: FCEVENT) {
    switch (event.eventName) {
      default:
        console.log(event);
    }
  }
}