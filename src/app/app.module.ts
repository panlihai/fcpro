import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FccoreModule } from 'fccore';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FccoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
