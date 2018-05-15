import { Routes } from '@angular/router';
import { TemplateformComponent } from './component/templateform.component';
import { TemplatetreeformsComponent } from './component/templatetreeforms.component';
import { TemplatemodaltreeformlistsComponent } from './component/templatemodaltreeformlists.component';
import { TemplatemodalformlistsComponent } from './component/templatemodalformlists.component';
import { TemplatemodaltreemodallistsComponent } from './component/templatemodaltreemodallists.component';
import { TemplatemodaltreeformComponent } from './component/templatemodaltreeform.component';
import { TemplatemodallistsComponent } from './component/templatemodallists.component';
import { TemplatemodalformComponent } from './component/templatemodalform.component';
import { TemplatetreeformlistsComponent } from './component/templatetreeformlists.component';
import { TemplatelistComponent } from './component/templatelist.component';
import { TemplateformlistsComponent } from './component/templateformlists.component';
import { TemplatetabformComponent } from './component/templatetabform.component';
import { TemplatehomeComponent } from './component/templatehome.component';
import { TemplatesigninComponent } from './component/templatesignin.component';
import { TemplatesignupComponent } from './component/templatesignup.component';
import { TemplatetreelistsComponent } from './component/templatetreelists.component';
import { TemplatevalidateComponent } from './component/templatevalidate.component';
import { TemplatetablistComponent } from './component/templatetablist.component';
import { TemplatetreetablistComponent } from './component/templatetreetablist.component';
import { TemplatefastpositionComponent } from './component/templatefastposition.component';
export const templateRouters: Routes = [
    {
        path: 'system/templateform',//表单模板
        component: TemplateformComponent
    }, {
        path: 'system/templatetreeforms',//树表单
        component: TemplatetreeformsComponent
    }, {
        path: 'system/templatemodaltreeformlists',//模态框树表单列表
        component: TemplatemodaltreeformlistsComponent
    }, {
        path: 'system/templatemodalformlists',//模态框表单列表
        component: TemplatemodalformlistsComponent
    }, {
        path: 'system/templatemodaltreemodallists',//模态框树模态框列表
        component: TemplatemodaltreemodallistsComponent
    }, {
        path: 'system/templatemodaltreeform',//模态框树表单
        component: TemplatemodaltreeformComponent
    }, {
        path: 'system/templatemodallists',//模态框列表
        component: TemplatemodallistsComponent
    }, {
        path: 'system/templatemodalform',//模态框表单
        component: TemplatemodalformComponent
    }, {
        path: 'system/templatetreeformlists',//树表单列表
        component: TemplatetreeformlistsComponent
    }, {
        path: 'system/templatetreelists',//树列表
        component: TemplatetreelistsComponent
    }, {
        path: 'system/templateformlists',//表单列表模板
        component: TemplateformlistsComponent
    }, {
        path: 'system/templatefastposition',//表单快速定位模板
        component: TemplatefastpositionComponent
    }, {
        path: 'system/templatetabform',//选项卡表单模板
        component: TemplatetabformComponent
    }, {
        path: 'system/templatehome',//主页模板
        component: TemplatehomeComponent
    }, {
        path: 'system/templatesignin',//登录模板
        component: TemplatesigninComponent
    }, {
        path: 'system/templatesignup',//注册模板
        component: TemplatesignupComponent
    }, {
        path: 'system/templatetreelists',//树列表模板
        component: TemplatetreelistsComponent
    }, {
        path: 'system/templatelist',//列表模板模板
        component: TemplatelistComponent
    }, {
        path: 'system/templatevalidate',//表单验证模板
        component: TemplatevalidateComponent
    }, {
        path: 'system/templatetablist',//选项卡列表模板
        component: TemplatetablistComponent
    }, {
        path: 'system/templatetreetablist',//树选项卡列表模板
        component: TemplatetreetablistComponent
    }


];
