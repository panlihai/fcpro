import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { ParentComponent } from 'fccomponent/parent.component';
import { FCEVENT } from 'fccomponent/fc';
@Component({
  selector: 'listdata',
  templateUrl: './listdata.component.html',
  styles: [`
    :host ::ng-deep .listdata .fu-full{
      height:auto;
    }
  `]
})
export class ListdataComponent extends ComponentParent {
  //基础basicview
  basicview : string  = `
  <fc-listdata [fcAppid]="appId" [fcOption]="fcListdataOptions"[fcCondition]="listDataCustomCondition"></fc-listdata>
  `
   //启用查询
   searchjs : string = `
   import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'listdata',
    templateUrl: './listdata.component.html',
    styleUrl:'./listdata.component.css'
  })
  export class ListdataComponent{
  fcListdataOptionsearch = {
    //是否启用查询
    fcEnableSearch: true,
    //是否启用编辑
    fcEnableEdit: true,
    //皮肤默认为bootstrap风格
    fcClass: 'ag-blue',
    //每页显示条数
    fcPaginationPageSize: 10,
    //是否启用排序
    fcEnableSorting: true,
    //是否启用过滤
    fcEnableFilter: true,
    //是否自动设置表头大小
    fcEnableColResize: true,
    //是否显示工具栏
    fcShowToolPanel: false,
    //是否分页
    fcPagination: true,
    //是否显示分组
    fcRowGroupPanelShow: 'none',//'always',
    //是否启用状态栏
    fcEnableStatusBar: true,
    //是否启用区域选中
    fcEnableRangeSelection: true,
    //选中方式
    fcRowSelection: 'multiple',
    //是否启用操作列
    fcEnableAction: false,
    //选中有checkbox
    fcCheckboxSelection: true,
    //是否自动保存
    fcAutoSave: false
    };
  }
   `
   //tlbjs显示工具栏
   tlbjs : string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'listdata',
     templateUrl: './listdata.component.html',
     styleUrl:'./listdata.component.css'
   })
   export class ListdataComponent{
    fcListdataOptiontlb = {
      //是否显示工具栏
      fcShowToolPanel: true,
      //皮肤默认为bootstrap风格
      fcClass: 'ag-blue',
      //每页显示条数
      fcPaginationPageSize: 10,
      //是否启用查询
      fcEnableSearch: false,
      //是否启用排序
      fcEnableSorting: true,
      //是否启用过滤
      fcEnableFilter: true,
      //是否自动设置表头大小
      fcEnableColResize: true,
      //是否分页
      fcPagination: true,
      //是否显示分组
      fcRowGroupPanelShow: 'none',//'always',
      //是否启用状态栏
      fcEnableStatusBar: true,
      //是否启用区域选中
      fcEnableRangeSelection: true,
      //选中方式
      fcRowSelection: 'multiple',
      //是否启用操作列
      fcEnableAction: false,
      //选中有checkbox
      fcCheckboxSelection: true,
      //是否启用编辑
      fcEnableEdit: true,
      //是否自动保存
      fcAutoSave: false
   }
   }
   `
   //groupjs启用分组
   groupjs : string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'listdata',
     templateUrl: './listdata.component.html',
     styleUrl:'./listdata.component.css'
   })
   export class ListdataComponent{
    fcListdataOptiongroup = {
      //是否显示分组
      fcRowGroupPanelShow: 'always',//'none',
     //是否显示工具栏
     fcShowToolPanel: true,
     //皮肤默认为bootstrap风格
     fcClass: 'ag-blue',
     //每页显示条数
     fcPaginationPageSize: 10,
     //是否启用查询
     fcEnableSearch: false,
     //是否启用排序
     fcEnableSorting: true,
     //是否启用过滤
     fcEnableFilter: true,
     //是否自动设置表头大小
     fcEnableColResize: true,
     //是否分页
     fcPagination: true,
     //是否启用状态栏
     fcEnableStatusBar: true,
     //是否启用区域选中
     fcEnableRangeSelection: true,
     //选中方式
     fcRowSelection: 'multiple',
     //是否启用操作列
     fcEnableAction: false,
     //选中有checkbox
     fcCheckboxSelection: true,
     //是否启用编辑
     fcEnableEdit: true,
     //是否自动保存
     fcAutoSave: false
   }
   }
   `
  //pagejs每页显示条数
  pagejs : string =  `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'listdata',
    templateUrl: './listdata.component.html',
    styleUrl:'./listdata.component.css'
  })
  export class ListdataComponent{
    fcListdataOptionpage = {
      //皮肤默认为bootstrap风格
      fcClass: 'ag-blue',
      //每页显示条数
      fcPaginationPageSize: 10,
      //是否启用查询
      fcEnableSearch: false,
      //是否启用排序
      fcEnableSorting: true,
      //是否启用过滤
      fcEnableFilter: true,
      //是否自动设置表头大小
      fcEnableColResize: true,
      //是否显示工具栏
      fcShowToolPanel: false,
      //是否分页
      fcPagination: true,
      //是否显示分组
      fcRowGroupPanelShow: 'none',//'always',
      //是否启用状态栏
      fcEnableStatusBar: true,
      //是否启用区域选中
      fcEnableRangeSelection: true,
      //选中方式
      fcRowSelection: 'multiple',
      //是否启用操作列
      fcEnableAction: false,
      //选中有checkbox
      fcCheckboxSelection: true,
      //是否启用编辑
      fcEnableEdit: true,
      //是否自动保存
      fcAutoSave: false
    }
  }
  `
  //rowselectj是否启用操作列
  rowselectjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'listdata',
    templateUrl: './listdata.component.html',
    styleUrl:'./listdata.component.css'
  })
  export class ListdataComponent{
    fcListdataOptionpage = {
      //皮肤默认为bootstrap风格
      fcClass: 'ag-blue',
      //每页显示条数
      fcPaginationPageSize: 10,
      //是否启用查询
      fcEnableSearch: false,
      //是否启用排序
      fcEnableSorting: true,
      //是否启用过滤
      fcEnableFilter: true,
      //是否自动设置表头大小
      fcEnableColResize: true,
      //是否显示工具栏
      fcShowToolPanel: false,
      //是否分页
      fcPagination: true,
      //是否显示分组
      fcRowGroupPanelShow: 'none',//'always',
      //是否启用状态栏
      fcEnableStatusBar: true,
      //是否启用区域选中
      fcEnableRangeSelection: true,
      //选中方式
      fcRowSelection: 'multiple',
      //是否启用操作列
      fcEnableAction: false,
      //选中有checkbox
      fcCheckboxSelection: true,
      //是否启用编辑
      fcEnableEdit: true,
      //是否自动保存
      fcAutoSave: false
    }
  }
  `
  //基础js
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'listdata',
    templateUrl: './listdata.component.html',
    styleUrl:'./listdata.component.css'
  })
  export class ListdataComponent{
    fcListdataOptions = {
      //皮肤默认为bootstrap风格
      fcClass: 'ag-blue',
      //每页显示条数
      fcPaginationPageSize: 20,
      //是否启用查询
      fcEnableSearch: false,
      //是否启用排序
      fcEnableSorting: true,
      //是否启用过滤
      fcEnableFilter: true,
      //是否自动设置表头大小
      fcEnableColResize: true,
      //是否显示工具栏
      fcShowToolPanel: false,
      //是否分页
      fcPagination: true,
      //是否显示分组
      fcRowGroupPanelShow: 'none',//'always',
      //是否启用状态栏
      fcEnableStatusBar: true,
      //是否启用区域选中
      fcEnableRangeSelection: true,
      //选中方式
      fcRowSelection: 'multiple',
      //是否启用操作列
      fcEnableAction: false,
      //选中有checkbox
      fcCheckboxSelection: true,
      //是否启用编辑
      fcEnableEdit: true,
      //是否自动保存
      fcAutoSave: false
    };
  }
  `
  //savejs自动保存
  savejs : string =  `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'listdata',
    templateUrl: './listdata.component.html',
    styleUrl:'./listdata.component.css'
  })
  export class ListdataComponent{
    fcListdataOptionsave = {
      //是否自动保存
      fcAutoSave: true,
      //是否启用操作列
      fcEnableAction: true,
       //是否显示分组
       fcRowGroupPanelShow: 'always',//'none',
      //是否显示工具栏
      fcShowToolPanel: true,
      //皮肤默认为bootstrap风格
      fcClass: 'ag-blue',
      //每页显示条数
      fcPaginationPageSize: 10,
      //是否启用查询
      fcEnableSearch: false,
      //是否启用排序
      fcEnableSorting: true,
      //是否启用过滤
      fcEnableFilter: true,
      //是否自动设置表头大小
      fcEnableColResize: true,
      //是否分页
      fcPagination: true,
      //是否启用状态栏
      fcEnableStatusBar: true,
      //是否启用区域选中
      fcEnableRangeSelection: true,
      //选中方式
      fcRowSelection: 'multiple',
      //选中有checkbox
      fcCheckboxSelection: true,
      //是否启用编辑
      fcEnableEdit: true,
    }
  }
  `
  //列表分页
  fcListdataOptions = {
    //皮肤默认为bootstrap风格
    fcClass: 'ag-blue',
    //每页显示条数
    fcPaginationPageSize: 20,
    //是否启用查询
    fcEnableSearch: false,
    //是否启用排序
    fcEnableSorting: true,
    //是否启用过滤
    fcEnableFilter: true,
    //是否自动设置表头大小
    fcEnableColResize: true,
    //是否显示工具栏
    fcShowToolPanel: false,
    //是否分页
    fcPagination: true,
    //是否显示分组
    fcRowGroupPanelShow: 'none',//'always',
    //是否启用状态栏
    fcEnableStatusBar: true,
    //是否启用区域选中
    fcEnableRangeSelection: true,
    //选中方式
    fcRowSelection: 'multiple',
    //是否启用操作列
    fcEnableAction: false,
    //选中有checkbox
    fcCheckboxSelection: true,
    //是否启用编辑
    fcEnableEdit: true,
    //是否自动保存
    fcAutoSave: false
  };
  //启用查询 
  fcListdataOptionsearch = {
     //是否启用查询
     fcEnableSearch: true,
     //是否启用编辑
     fcEnableEdit: true,
     //皮肤默认为bootstrap风格
     fcClass: 'ag-blue',
     //每页显示条数
     fcPaginationPageSize: 10,
     //是否启用排序
     fcEnableSorting: true,
     //是否启用过滤
     fcEnableFilter: true,
     //是否自动设置表头大小
     fcEnableColResize: true,
     //是否显示工具栏
     fcShowToolPanel: false,
     //是否分页
     fcPagination: true,
     //是否显示分组
     fcRowGroupPanelShow: 'none',//'always',
     //是否启用状态栏
     fcEnableStatusBar: true,
     //是否启用区域选中
     fcEnableRangeSelection: true,
     //选中方式
     fcRowSelection: 'multiple',
     //是否启用操作列
     fcEnableAction: false,
     //选中有checkbox
     fcCheckboxSelection: true,
     //是否自动保存
     fcAutoSave: false
  };
  //每条显示页数
  fcListdataOptionpage = {
    //皮肤默认为bootstrap风格
    fcClass: 'ag-blue',
    //每页显示条数
    fcPaginationPageSize: 10,
    //是否启用查询
    fcEnableSearch: false,
    //是否启用排序
    fcEnableSorting: true,
    //是否启用过滤
    fcEnableFilter: true,
    //是否自动设置表头大小
    fcEnableColResize: true,
    //是否显示工具栏
    fcShowToolPanel: false,
    //是否分页
    fcPagination: true,
    //是否显示分组
    fcRowGroupPanelShow: 'none',//'always',
    //是否启用状态栏
    fcEnableStatusBar: true,
    //是否启用区域选中
    fcEnableRangeSelection: true,
    //选中方式
    fcRowSelection: 'multiple',
    //是否启用操作列
    fcEnableAction: false,
    //选中有checkbox
    fcCheckboxSelection: true,
    //是否启用编辑
    fcEnableEdit: true,
    //是否自动保存
    fcAutoSave: false
  }
  //显示工具栏
  fcListdataOptiontlb = {
     //是否显示工具栏
     fcShowToolPanel: true,
     //皮肤默认为bootstrap风格
     fcClass: 'ag-blue',
     //每页显示条数
     fcPaginationPageSize: 10,
     //是否启用查询
     fcEnableSearch: false,
     //是否启用排序
     fcEnableSorting: true,
     //是否启用过滤
     fcEnableFilter: true,
     //是否自动设置表头大小
     fcEnableColResize: true,
     //是否分页
     fcPagination: true,
     //是否显示分组
     fcRowGroupPanelShow: 'none',//'always',
     //是否启用状态栏
     fcEnableStatusBar: true,
     //是否启用区域选中
     fcEnableRangeSelection: true,
     //选中方式
     fcRowSelection: 'multiple',
     //是否启用操作列
     fcEnableAction: false,
     //选中有checkbox
     fcCheckboxSelection: true,
     //是否启用编辑
     fcEnableEdit: true,
     //是否自动保存
     fcAutoSave: false
  }
  //启用分组
  fcListdataOptiongroup = {
     //是否显示分组
     fcRowGroupPanelShow: 'always',//'none',
    //是否显示工具栏
    fcShowToolPanel: true,
    //皮肤默认为bootstrap风格
    fcClass: 'ag-blue',
    //每页显示条数
    fcPaginationPageSize: 10,
    //是否启用查询
    fcEnableSearch: false,
    //是否启用排序
    fcEnableSorting: true,
    //是否启用过滤
    fcEnableFilter: true,
    //是否自动设置表头大小
    fcEnableColResize: true,
    //是否分页
    fcPagination: true,
    //是否启用状态栏
    fcEnableStatusBar: true,
    //是否启用区域选中
    fcEnableRangeSelection: true,
    //选中方式
    fcRowSelection: 'multiple',
    //是否启用操作列
    fcEnableAction: false,
    //选中有checkbox
    fcCheckboxSelection: true,
    //是否启用编辑
    fcEnableEdit: true,
    //是否自动保存
    fcAutoSave: false
  }
  constructor(public mainService: ComponentService) {
    super('SYSCOMPONENT', mainService);
  }
  //启用操作列rowselect
  fcListdataOptionrowselect = {
    //是否启用操作列
    fcEnableAction: true,
     //是否显示分组
     fcRowGroupPanelShow: 'always',//'none',
    //是否显示工具栏
    fcShowToolPanel: true,
    //皮肤默认为bootstrap风格
    fcClass: 'ag-blue',
    //每页显示条数
    fcPaginationPageSize: 10,
    //是否启用查询
    fcEnableSearch: false,
    //是否启用排序
    fcEnableSorting: true,
    //是否启用过滤
    fcEnableFilter: true,
    //是否自动设置表头大小
    fcEnableColResize: true,
    //是否分页
    fcPagination: true,
    //是否启用状态栏
    fcEnableStatusBar: true,
    //是否启用区域选中
    fcEnableRangeSelection: true,
    //选中方式
    fcRowSelection: 'multiple',
    //选中有checkbox
    fcCheckboxSelection: true,
    //是否启用编辑
    fcEnableEdit: true,
    //是否自动保存
    fcAutoSave: false
  }
  //启用自定保存
  fcListdataOptionsave = {
    //是否自动保存
    fcAutoSave: true,
    //是否启用操作列
    fcEnableAction: true,
     //是否显示分组
     fcRowGroupPanelShow: 'always',//'none',
    //是否显示工具栏
    fcShowToolPanel: true,
    //皮肤默认为bootstrap风格
    fcClass: 'ag-blue',
    //每页显示条数
    fcPaginationPageSize: 10,
    //是否启用查询
    fcEnableSearch: false,
    //是否启用排序
    fcEnableSorting: true,
    //是否启用过滤
    fcEnableFilter: true,
    //是否自动设置表头大小
    fcEnableColResize: true,
    //是否分页
    fcPagination: true,
    //是否启用状态栏
    fcEnableStatusBar: true,
    //是否启用区域选中
    fcEnableRangeSelection: true,
    //选中方式
    fcRowSelection: 'multiple',
    //选中有checkbox
    fcCheckboxSelection: true,
    //是否启用编辑
    fcEnableEdit: true,
  }
  //eventview
  eventview : string = `
  <fc-listdata [fcAppid]="appId" [fcOption]="fcListdataOptions" (fcEvent)="listdataEvent($event)" [fcCondition]="listDataCustomCondition"></fc-listdata>
  `
  //事件eventjs
  eventjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'listdata',
    templateUrl: './listdata.component.html',
    styleUrl:'./listdata.component.css'
  })
  export class ListdataComponent{
    fcListdataOptions = {
      //皮肤默认为bootstrap风格
      fcClass: 'ag-blue',
      //每页显示条数
      fcPaginationPageSize: 20,
      //是否启用查询
      fcEnableSearch: false,
      //是否启用排序
      fcEnableSorting: true,
      //是否启用过滤
      fcEnableFilter: true,
      //是否自动设置表头大小
      fcEnableColResize: true,
      //是否显示工具栏
      fcShowToolPanel: false,
      //是否分页
      fcPagination: true,
      //是否显示分组
      fcRowGroupPanelShow: 'none',//'always',
      //是否启用状态栏
      fcEnableStatusBar: true,
      //是否启用区域选中
      fcEnableRangeSelection: true,
      //选中方式
      fcRowSelection: 'multiple',
      //是否启用操作列
      fcEnableAction: false,
      //选中有checkbox
      fcCheckboxSelection: true,
      //是否启用编辑
      fcEnableEdit: true,
      //是否自动保存
      fcAutoSave: false
    };
    /**
     * 列表组件事件
     * @param action 事件名称
     */
    listdataEvent(event: FCEVENT) {
      switch (event.eventName) {
        case 'cellClick'://单元格事件
          this.mainService.providers.msgService.message("这是单元格事件");
          break;
        case 'rowClick':
          this.mainService.providers.msgService.message("这是单元格单击事件");
          break;
        case 'selected':
          this.mainService.providers.msgService.message("这是单元格选中事件");
          break;
        case 'rowDoubleClick':
          this.mainService.providers.msgService.message("这是单元格双击事件");
          break;
        case 'modify':
          this.mainService.providers.msgService.message("停止编辑");
          break;
      }
    }
  }
  `
  /**
   * 列表组件事件
   * @param action 事件名称
   */
  listdataEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'cellClick'://单元格事件
        this.mainService.providers.msgService.message("这是单元格事件");
        break;
      case 'rowClick':
        this.mainService.providers.msgService.message("这是单元格单击事件");
        break;
      case 'selected':
        this.mainService.providers.msgService.message("这是单元格选中事件");
        break;
      case 'rowDoubleClick':
        this.mainService.providers.msgService.message("这是单元格双击事件");
        break;
      case 'modify':
        this.mainService.providers.msgService.message("停止编辑");
        break;
    }
  }
}