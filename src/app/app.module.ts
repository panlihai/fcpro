import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Routers } from './app.route';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forChild(Routers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
