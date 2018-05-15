import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';
import { TimelineOptions } from 'fccomponent';
@Component({
  selector: 'templatetablist',
  templateUrl: './templatetablist.component.html',
  styles: [`
  `]
})
export class TemplatetablistComponent extends ComponentParent {
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
  //选项卡
  tabmain = [
    { name: '版本列表', icon: '', disabled: false },
    { name: '版本详细', icon: '', disabled: false },
  ]
 //自定义下拉单选
 anyValue: any = { "label": "A", "value": "a", "disabled": false };
 anyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
 //多选
 checkValue: string = 'a';
 checkOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
 //下拉多选
 chosenValue: string = 'a';
 chosenOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
 //单选
 radioValue: string = 'a';
 radioOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
 //数值
 doubleValue: number = 5.5;
 //整数
 longValue: number = 5;
 //text
 content: string = '文本内容';
 addonbefore: string = '';
 //自定义下拉多选
 manyValue: any[] = [{ "label": "A", "value": "a", "disabled": false }];
 manyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
 //选项卡
  constructor(public mainService: ComponentService) {
    super('SYSCOMPONENT', mainService);
  }
}