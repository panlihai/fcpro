import { Routes } from '@angular/router';
import { AddetailComponent } from './addetail/addetail.component';
import { AdformComponent } from './adform/adform.component';
import { AdcarouselComponent } from './adcarousel/adcarousel.component';
import { AdcodeComponent } from './adcode/adcode.component';
export const adRouters: Routes = [
    {
        path: 'system/fcaddetailList',//高级组件-详情
        component: AddetailComponent
    }, {
        path: 'system/fcadformList',//高级组件-表单
        component: AdformComponent
    }, {
        path: 'system/fcadcarouselList',//高级组件-轮播
        component: AdcarouselComponent
    }, {
        path: 'system/fcadcodeList',//高级组件-代码
        component: AdcodeComponent
    }
];
