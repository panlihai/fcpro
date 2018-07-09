/* 	元数据 */
import { Injectable } from "@angular/core";
import { ParentService, ProvidersService, InterfaceMethod } from "fccore";
import { Observable } from "rxjs";
import { DatePipe } from "@angular/common";
import { LayoutService } from "./layout.service";
import { NzModalService, NzModalSubject } from "ng-zorro-antd";
import { ConfigInterface } from "ng-zorro-antd/src/modal/nz-modal.service";
import { SysquotavalueService } from "./sysquotavalue.service";
@Injectable()
export class SysquotaService extends ParentService {
  currentModal: NzModalSubject;
  sysversionService: any;
  constructor(
    public providers: ProvidersService,
    private layoutService: LayoutService,
    private modalService: NzModalService,
    private quotavaludService: SysquotavalueService
  ) {
    super(providers, "SYSQUOTA");
  }
  /**YM
     * 打开指定模板弹窗
     * @param args 
     */
  dialogOpen(args: Args_Quota) {
    this.currentModal = this.modalService.open({
      title: args.titleTpl ? args.titleTpl : "指标实例修改",
      content: args.contentTpl ? args.contentTpl : null,
      footer: args.footerTpl ? args.footerTpl : null,
      style: { width: "70%" }
    })
  }
  /**YM
     * 处理更新
     * @param obj 
     */
  handle_update(obj) {
    this.save(obj).subscribe(res => {
      if (res.CODE === "0") {
        this.providers.msgService.success("更新成功");
      } else {
        this.providers.msgService.warm("更新失败");
      }
    });
    this.currentModal.destroy("onOk");
    this.currentModal = null;
  }
  /**YM
     * 处理保存
     * @param obj 
     */
  handle_save(obj) {
    this.save(obj).subscribe(res => {
      if (res.CODE === "0") {
        this.providers.msgService.success("保存成功");
      } else {
        this.providers.msgService.warm("保存失败");
      }
    });
    this.currentModal.destroy("onOk");
    this.currentModal = null;
  }
  /**YM
     * 处理取消
     */
  handle_cancel() {
    this.currentModal.destroy("onCancel");
    this.currentModal = null;
  }
  /**YM
     * 获取数据
     * @param chartid 
     */
  getQuotaValue(chartid: any) {
    return this.quotavaludService.findWithQuery({ where: `CHARTID = '${chartid}'` })
  }
  buildChartdata_static(chartObjs) {
    let handleObj_series: ChartDatas = { data: [{ data: [], label: '' }], label: [] };
    let handleObj_noSeries: { data: number[], label: string[] } = { data: [], label: [] }
    let series_Arr: any = [];
    let label_Arr: any = [];
    let value_Arr: number[] = [];
    //获取数据信息构建相应维度数组;
    chartObjs.forEach(element => {
      if (element.SERIES && !series_Arr.includes(element.SERIES)) {
        series_Arr.push(element.SERIES);
      }
      if (element.LABEL && !label_Arr.includes(element.LABEL))
        label_Arr.push(element.LABEL);
    });
    //根据获取到的数据信息构建基本数据模型;
    for (let i in series_Arr) {
      let arr: number[] = [];
      for (let index in label_Arr) {
        arr[index] = 0;
      }
      handleObj_series.data.push({ data: arr, label: series_Arr[i] })
    }
    handleObj_series.label = label_Arr;
    handleObj_noSeries.data = value_Arr;
    handleObj_series.data.shift();
    handleObj_noSeries.label = label_Arr;
    //根据后台服务器返回的数据与已有数据模型建立索引重构正确数据;
    chartObjs.forEach((el, index) => {
      if (el.SERIES) {
        for (let vindex in handleObj_series.data) {
          if (handleObj_series.data[vindex].label === el.SERIES) {
            let a = label_Arr.findIndex((value, index) => { if (value === el.LABEL) return true })
            handleObj_series.data[vindex].data[label_Arr.findIndex((value, index) => { if (value === el.LABEL) return true })] = Number.parseFloat(el.VALUE);
          }
        }
      } else {
        handleObj_noSeries.data[label_Arr.findIndex((value, index) => { if (value === el.LABEL) return true })] = Number.parseFloat(el.VALUE);
      }
    })
    return { handleObj_series, handleObj_noSeries }
  }
  /**YM
     * 解决俩个表重复CARAGORY字段产生的问题
     * @param saveObj 
     * @param param 
     */
  dealObj_oneView(saveObj, param) {
    for (let index in param) {
      if (index !== 'CATAGORY')
        saveObj[index] = param[index]
    }
    return saveObj;
  }
  /**YM
     *  从接口获取数据;
     * @param method 
     */
  getDataFromInterface(method) {
    if (method === null) {
      method = this.condition();
    }
    return this.providers.daoService
      .getFromApi(this.getResourceUrl(method), {});
  }
  listOptions = {
    fcHeight: 500,
    fcPaginationPageSize: this.app.PAGESIZE,
    //皮肤默认为bootstrap风格
    fcClass: "ag-blue",
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
    fcRowGroupPanelShow: "onlyWhenGrouping",
    //是否启用状态栏
    fcEnableStatusBar: true,
    //是否启用区域选中
    fcEnableRangeSelection: false,
    //选中方式
    fcRowSelection: "single",
    //是否启用操作列
    fcEnableAction: true,
    //选中有checkbox
    fcCheckboxSelection: false,
    //是否启用编辑
    fcEnableEdit: false,
    //是否自动保存
    fcAutoSave: false
  };
}
export interface Args_Quota {
  titleTpl?: any;
  contentTpl?: any;
  footerTpl?: any;
}
export const enum DialogState {
  listAdd,
  listEdit
}
export const QuotaValueType = {
  static: 'static',
  SQL: 'SQL',
  custom: 'custom'
}
export interface ChartDatas {
  data: ChartData[],
  label: string[]
}
export interface ChartData {
  data: number[],
  label?: string
}
export const ChartTypeCode = {
  line: "line",
  pie: "pie",
  bar: "bar"
}
export const ChartTypeName = {
  line: "线型图",
  pie: "饼状图",
  bar: "柱状图"
}