import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FccoreModule } from 'fccore';
import { AppComponent } from './app.component';
import { AppRouters } from './app.route';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule } from 'fccomponent';
import { LayoutComponent } from './layouts/layout/layout.component';
import { environment } from '../environments/environment';
import { SharedModule } from './shared.module';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(AppRouters),
    FccoreModule.forRoot(environment),
    FcadModule,
    FcbasicModule,
    FclayoutModule,
    FcnavModule
  ],
  exports: [
    AppComponent,
    LayoutComponent,
    RouterModule
  ],
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
