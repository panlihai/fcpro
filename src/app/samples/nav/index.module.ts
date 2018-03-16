import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { navRouters } from './index.route';
import { FcbasicModule, FclayoutModule, FcadModule, FcnavModule, FclistModule } from 'fccomponent';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbreadcrumbComponent } from './navbreadcrumb/navbreadcrumb.component';
import { NavdropdownComponent } from './navdropdown/navdropdown.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { NavsideComponent } from './navside/navside.component';
import { NavstepComponent } from './navstep/navstep.component';
import { NavtabComponent } from './navtab/navtab.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(navRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule, 
    FclistModule
  ],
  exports: [

  ],
  declarations: [
    NavbarComponent,
    NavbreadcrumbComponent,
    NavdropdownComponent,
    NavmenuComponent,
    NavsideComponent,
    NavstepComponent,
    NavtabComponent
  ],
  providers: [

  ]
})
export class NavModule { }
