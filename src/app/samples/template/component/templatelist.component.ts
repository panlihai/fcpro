import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';
@Component({
  selector: 'templatelist',
  templateUrl: './templatelist.component.html',
  styles: [`
:host ::ng-deep .templatelist .fc-layoutpanel .fc-content{
  height:100%;
}
.list-search {
  width:100%;
  padding:10px 0px;
  border:none;
}
.list-search:after{
  content:'';
  display:block;
  clear:both;
}
.list-search-every,.list-search-button{    
  float:left;
}
:host ::ng-deep .list-search-fromto .fromto-content .ant-input-number {
  width:100%;
}
:host ::ng-deep .list-search-every .ant-form-item-label{
  min-width:64px;
} 
:host ::ng-deep .list-search-every1 .ant-col-sm-16{
  min-width:116px;
  width:65%;
} 
:host ::ng-deep .list-search-every2 .ant-col-sm-16{
  min-width: 68px;
  width: 50%;
} 
:host ::ng-deep form .has-feedback > .ant-select .ant-select-selection-selected-value{
  padding-right:28px;
}
.btn-add-padding{
  padding:0px 0px 10px;
}
  `]
})
export class TemplatelistComponent extends ComponentParent {
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
  //下拉单选
  comboValue: string = 'a';
  comboOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  //单选
  radioValue: string = 'a';
  radioOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  constructor(public mainService: ComponentService) {
    super('SYSCOMPONENT', mainService);
  }
}