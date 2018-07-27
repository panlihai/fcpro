import { Routes } from '@angular/router';
import { BgattributeComponent } from './components/bgattribute.component';
import { BgprojectattributeComponent } from './components/bgprojectattribute.component';
import { BgformulaComponent } from './components/bgformula.component';
import { BgsettingupComponent } from './components/bgsettingup.component';
export const Routers: Routes = [{
    path: 'bgattributeList',//预算属性
    component: BgattributeComponent,
    data: { keep: false }
}, {
    path: 'bgprojectattributeList',//项目属性
    component: BgprojectattributeComponent,
    data: { keep: false }
}, {
    path: 'bgformulaList',//公式属性
    component: BgformulaComponent,
    data: { keep: false }
}, {
    path: 'bgsettingupList',//编制设置,
    component: BgsettingupComponent,
    data: { keep: false }
}];
