import { Component, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ParentlistComponent } from "fccomponent";
import { SysannouncementService } from "../../services/sysannouncement.service";
import { FCEVENT } from "fccomponent/fc";
import { SysquotaService, Args_Quota, ChartDatas, QuotaValueType, ChartData, ChartTypeName, ChartTypeCode, DialogState } from "../../services/sysquota.service";
import { ValuesColumnPanel } from "ag-grid-enterprise";
@Component({
  templateUrl: "./sysquotalist.component.html",
  styles: [
    `
      :host ::ng-deep .full-layoutpanel  .fc-content {
        height: 75% !important;
        overflow:hidden;
      }
      :host ::ng-deep .fc-layoutpanel>.fc-content>.fc-layoutrow>.fc-layoutrowcell2 {
        height: 100%;
      }
      .list-search {
        width: 100%;
      }
      .list-search:after {
        content: "";
        display: block;
        clearfix: both;
      }
      .list-search-every {
        width: 24%;
        float: left;
      }
      .listdata {
        height: 100%;
      }
    `
  ]
})
export class SysquotalistComponent extends ParentlistComponent {
  chartObjs: any;
  saveObj: any = {};
  chartType: any[] = [{ label: ChartTypeName.bar, value: ChartTypeCode.bar }, { label: ChartTypeName.pie, value: ChartTypeCode.pie }, { label: ChartTypeName.line, value: ChartTypeCode.line }];
  dialogState: DialogState;
  @ViewChild('contentTpl') contentTpl: any;
  @ViewChild('footerTpl') footerTpl: any;
  args: Args_Quota;
  chartLabel: string[] = [];
  chartData: any = [];
  constructor(
    public mainService: SysquotaService,
    public router: Router,
    public activeRoute: ActivatedRoute,
  ) {
    super(mainService, router, activeRoute);
  }
  init(): void {

  }

  getDefaultQuery() { }
  tlblistEvent(ev: FCEVENT) {
    switch (ev.eventName) {
      case "listAdd":
        this.saveObj = {};
        this.dialogState = DialogState.listAdd;
        this.args = { titleTpl: '指标实例新增', contentTpl: this.contentTpl, footerTpl: this.footerTpl }
        this.mainService.dialogOpen(this.args);
        break;
      default:
        break;
    }
  }
  chartTypeChange(ev) {
    if (this.saveObj && this.saveObj.ID) {
      this.listdataEvent({ eventName: 'listOneView', param: this.saveObj });
    }
    this.saveObj.CATAGORY = ev.value;
  }
  event(eventName: string, context: any): void { }
  toShow(str) {
    if (this.saveObj.CATAGORY === str && this.chartData.length !== 0) {
      return true;
    } else {
      return false;
    }
  }
  listdataEvent(ev: FCEVENT) {
    switch (ev.eventName) {
      case 'listOneView':
        this.saveObj = this.mainService.dealObj_oneView(this.saveObj, ev.param)
        this.mainService.getQuotaValue(ev.param.CHARTID).subscribe(res => {
          if (res.CODE === '0') {
            this.chartObjs = res.DATA;
            switch (this.chartObjs[0].CATAGORY) {
              case QuotaValueType.static:
                let staicObj = this.mainService.buildChartdata_static(this.chartObjs);
                if (this.chartObjs[0].SERIES) {
                  this.chartData = staicObj.handleObj_series.data;
                  this.chartLabel = staicObj.handleObj_series.label;
                }
                else {
                  this.chartData = staicObj.handleObj_noSeries.data;
                  this.chartLabel = staicObj.handleObj_noSeries.label;
                }
                break;
              case QuotaValueType.SQL:
                this.mainService.sqlExcute(this.chartObjs[0].VALUE).subscribe(res => {
                  let data: any;
                  if (res.CODE === '0') {
                    data = res.DATA
                    if (data.label) this.chartLabel = data.label;
                    else this.messageService.warm("数据类型不匹配,缺少Label");
                    if (data.data) this.chartData = data.data;
                    else this.messageService.warm("数据类型不匹配,缺少data");
                  }
                });
                break;
              case QuotaValueType.custom:
                this.mainService.getDataFromInterface(this.chartObjs[0].VALUE).subscribe(res => {
                  let data: any;
                  if (res.CODE === '0') {
                    data = res.DATA
                    if (data.label) this.chartLabel = data.label;
                    else this.messageService.warm("数据类型不匹配,缺少Label");
                    if (data.data) this.chartData = data.data;
                    else this.messageService.warm("数据类型不匹配,缺少data");
                  }
                })
                break;
            }
          }
        });
        break;
      case 'listEdit':
        this.dialogState = DialogState.listEdit;
        this.saveObj = ev.param;
        this.args = { titleTpl: '指标实例修改', contentTpl: this.contentTpl, footerTpl: this.footerTpl };
        this.mainService.dialogOpen(this.args);
        break;
    }
  }
  handle_ok() {
    if (this.dialogState === DialogState.listEdit && this.saveObj.ID)
      this.mainService.handle_update(this.saveObj);
    else if (this.dialogState === DialogState.listAdd)
      this.mainService.handle_save(this.saveObj);
  }
  handle_cancel() {
    this.mainService.handle_cancel()
  }
}
