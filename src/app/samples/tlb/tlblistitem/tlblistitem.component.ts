import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { Sysappbuttons } from 'fccore';
import { FCEVENT } from 'fccomponent/fc';

@Component({
  selector: 'app-tlblistitem',
  templateUrl: './tlblistitem.component.html',
  styles: [``]
})
export class TlblistitemComponent extends ComponentParent {
  //basicview
  basicview : string = `
  <fc-tlblistitem [fcAppid]="'SYSCOMPONENT'" (fcEvent)="listitem($event)"></fc-tlblistitem>
  <div style="height: 200px;">
     <fc-listdata [fcAppid]="'SYSCOMPONENT'" [fcOption]="fcListdataOptions" [fcCondition]="_condition"></fc-listdata>
  </div>
  `
  //basicjs
  basicjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'tlbform',
    templateUrl: './tlbform.component.html',
    styleUrl:'./tlbform.component.css'
  })
  export class TlbformComponent{
    _condition: string;
    //列表页数据配置
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
      fcEnableRangeSelection: false,
      //选中方式
      fcRowSelection: 'multiple',
      //是否启用操作列
      fcEnableAction: false,
      //选中有checkbox
      fcCheckboxSelection: true,
      //是否启用编辑
      fcEnableEdit: false,
      //是否自动保存
      fcAutoSave: false
    };
    listitem(event: FCEVENT) {
      switch (event.eventName) {
        case 'me':
        this.mainService.providers.msgService.message("工具栏事件");
          break;
      }
    }
  }
  `
  _condition: string;
  //列表页数据配置
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
    fcEnableRangeSelection: false,
    //选中方式
    fcRowSelection: 'multiple',
    //是否启用操作列
    fcEnableAction: false,
    //选中有checkbox
    fcCheckboxSelection: true,
    //是否启用编辑
    fcEnableEdit: false,
    //是否自动保存
    fcAutoSave: false
  };
  constructor(public mainService: ComponentService) {
    super('FCTLBLISTITEM', mainService);
  }
 /**
   * 自定义工具栏事件
   * @param event 
   */
  listitem(event: FCEVENT) {
    switch (event.eventName) {
      case 'me':
      this.mainService.providers.msgService.message("工具栏事件");
        break;
    }
  }
}