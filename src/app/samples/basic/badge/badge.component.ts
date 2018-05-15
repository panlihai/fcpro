import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'badge',
  templateUrl: './badge.component.html',
  styles: [``]
})
export class BadgeComponent extends ComponentParent {
  //statusview
  statusview: string = `
  <fc-badge fcStatus="success" fcStatusMode="CIRCLE" ></fc-badge>
  <fc-badge fcStatus="error" fcStatusMode="CIRCLE" fcToolTip="error"></fc-badge>
  <fc-badge fcStatus="default" fcStatusMode="CIRCLE" fcToolTip="default"></fc-badge>
  <fc-badge fcStatus="processing" fcStatusMode="CIRCLE" fcToolTip="processing"></fc-badge>
  `
  //textview
  textview: string = `
  <fc-badge fcStatus="success" fcStatusMode="CIRCLE" fcText="success"></fc-badge>
  <fc-badge fcStatus="error" fcStatusMode="CIRCLE" fcText="error"></fc-badge>
  <fc-badge fcStatus="default" fcStatusMode="CIRCLE" fcText="default"></fc-badge>
  <fc-badge fcStatus="processing" fcStatusMode="CIRCLE"fcText="processing"></fc-badge>
  `
   //基础js
   basicjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'badge',
     templateUrl: './badge.component.html',
     styleUrl:'./badge.component.css'
   })
   export class BadgeComponent{
     }
   `
  constructor(public mainService: ComponentService) {
    super('FCBADGE', mainService);
  }
}
