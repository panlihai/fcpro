import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { searchRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FclistModule, FcsearchModule } from 'fccomponent';
import { SearchadvanceComponent } from './searchadvance/searchadvance.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { SearchfastComponent } from './searchfast/searchfast.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(searchRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule, 
    FclistModule,
    FcsearchModule
  ],
  exports: [

  ],
  declarations: [
    SearchadvanceComponent,
    SearchbarComponent,
    SearchboxComponent,
    SearchfastComponent
  ],
  providers: [

  ]
})
export class SearchModule { }
