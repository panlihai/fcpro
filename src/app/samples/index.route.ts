import { Routes } from '@angular/router';
export const Routers: Routes = [
    {
        path: '',//高级组件
        loadChildren: './ad/index.module#AdModule'
    },
    {
        path: '',//基础组件
        loadChildren: './basic/index.module#BasicModule'
    },
    {
        path: '',//图表组件
        loadChildren: './chart/index.module#ChartModule'
    },
    {
        path: '',//布局组件
        loadChildren: './layout/index.module#LayoutModule'
    },
    {
        path: '',//列表组件
        loadChildren: './list/index.module#ListModule'
    },
    {
        path: '',//模态框组件
        loadChildren: './modal/index.module#ModalModule'
    },
    {
        path: '',//导航组件
        loadChildren: './nav/index.module#NavModule'
    },
    {
        path: '',//加载组件
        loadChildren: './progress/index.module#ProgressModule'
    },
    {
        path: '',//查询组件
        loadChildren: './search/index.module#SearchModule'
    },
    {
        path: '',//平台组件
        loadChildren: './sys/index.module#SysModule'
    },
    {
        path: '',//选项卡组件
        loadChildren: './tab/index.module#TabModule'
    },
    {
        path: '',//工具栏组件
        loadChildren: './tlb/index.module#TlbModule'
    },
    {
        path: '',//模板
        loadChildren: './template/index.module#TemplateModule'
    },
    {
        path: '',//后端基类
        loadChildren: './sysclientcls/index.module#SysclientclsModule'
    },
    {
        path: '',//前端基类
        loadChildren: './sysclientserver/index.module#SysclientserverModule'
    },
    {
        path: '',//前端服务类
        loadChildren: './sysservercls/index.module#SysserverclsModule'
    },
    {
        path: '',//get start
        loadChildren: './getstart/index.module#GetstartModule'
    },
    {
        path: '',//updatelog
        loadChildren: './updatelog/index.module#UpdatelogModule'
    },
    {
        path: '',//document
        loadChildren: './document/index.module#DocumentModule'
    }
];
