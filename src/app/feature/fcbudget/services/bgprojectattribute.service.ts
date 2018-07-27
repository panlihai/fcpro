/* 	项目属性 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, ResponseResult } from 'fccore';
import { TreeOptions } from 'fccomponent';
import { Observable } from 'rxjs';
@Injectable()
export class BgprojectattributeService extends ParentService {
    constructor(public providers: ProvidersService) {
        super(providers, "SYSMESSAGE");
    }

    treeOptions: TreeOptions = {
        //元数据id
        fcAppid: "BGITEM",//元数据id
        //树结构节点显示内容
        fcLabel: ':{SITEM_NAME}',//支持:{参数名称}
        // 关联父节点字段名称
        fcParentCode: 'SPARENT_CODE',
        // 当前节点字段名称
        fcChildCode: 'SITEM_CODE',
        // 叶子节点字段名称
        fcLeafCode: 'BLAST',
        // 根节点条件   SPARENT_CODE is null or SPARENT_CODE=''
        fcTopWhere: "",
        // 展开条件  SPARENT_CODE=':{SITEM_CODE}'
        fcExpWhere: "",
        // 排序字段
        fcOrderby: "SSORT",
        // 模式 false为单选，true为多选
        fcMode: false,
        // 展开子节点
        fcOpenChild: false,
        // 是否显示线条
        fcShowLine: false,
        //是否可拖拽
        fcAllowDrag: false,
        //末级的编码
        fcLeafValue: "N"
    };
    fcOption1 = {
        //皮肤默认为bootstrap风格
        fcClass: 'ag-blue',
        //是否启用查询
        fcEnableSearch: false,
        //是否启用排序
        fcEnableSorting: true,
        //是否启用过滤
        fcEnableFilter: true,
        //是否自动设置表头大小
        fcEnableColResize: true,
        //是否显示工具栏
        fcShowToolPanel: true,
        //是否分页
        fcPagination: false,
        //是否显示分组
        fcRowGroupPanelShow: 'onlyWhenGrouping',
        //是否启用状态栏
        fcEnableStatusBar: true,
        //是否启用区域选中
        fcEnableRangeSelection: true,
        //选中方式
        fcRowSelection: 'multiple',
        //是否启用操作列
        fcEnableAction: true,
        //选中有checkbox
        fcCheckboxSelection: true,
        //是否启用编辑
        fcEnableEdit: true,
        //是否自动保存
        fcAutoSave: false
    };
    fcOption2 = {
        //皮肤默认为bootstrap风格
        fcClass: 'ag-blue',
        //是否启用查询
        fcEnableSearch: false,
        //是否启用排序
        fcEnableSorting: true,
        //是否启用过滤
        fcEnableFilter: true,
        //是否自动设置表头大小
        fcEnableColResize: true,
        //是否显示工具栏
        fcShowToolPanel: true,
        //是否分页
        fcPagination: true,
        //是否显示分组
        fcRowGroupPanelShow: 'onlyWhenGrouping',
        //是否启用状态栏
        fcEnableStatusBar: true,
        //是否启用区域选中
        fcEnableRangeSelection: true,
        //选中方式
        fcRowSelection: 'multiple',
        //是否启用操作列
        fcEnableAction: true,
        //选中有checkbox
        fcCheckboxSelection: true,
        //是否启用编辑
        fcEnableEdit: true,
        //是否自动保存
        fcAutoSave: false
    };
    fcOption3 = {
        //皮肤默认为bootstrap风格
        fcClass: 'ag-blue',
        //是否启用查询
        fcEnableSearch: false,
        //是否启用排序
        fcEnableSorting: true,
        //是否启用过滤
        fcEnableFilter: true,
        //是否自动设置表头大小
        fcEnableColResize: true,
        //是否显示工具栏
        fcShowToolPanel: true,
        //是否分页
        fcPagination: true,
        //是否显示分组
        fcRowGroupPanelShow: 'onlyWhenGrouping',
        //是否启用状态栏
        fcEnableStatusBar: true,
        //是否启用区域选中
        fcEnableRangeSelection: true,
        //选中方式
        fcRowSelection: 'multiple',
        //是否启用操作列
        fcEnableAction: true,
        //选中有checkbox
        fcCheckboxSelection: true,
        //是否启用编辑
        fcEnableEdit: true,
        //是否自动保存
        fcAutoSave: false
    };
    /**
     * 根据条件查询相关的自定义数据
     * @param appId 元数据id
     * @param condition 查询的条件参数
     */
    getDataSource(appId: string, condition?: object): Observable<ResponseResult> {
        return this.providers.appService.findWithQuery(appId, condition);
    }
}