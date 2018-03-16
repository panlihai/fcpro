import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ParentComponent } from 'fccomponent';
import { SpreadService } from '../helloproject/services/spread.service';
import { Router } from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [
    `
    
    `
  ]
})
export class HomeComponent {
  constructor() {
  }
}
