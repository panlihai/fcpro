import { Component, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ParentEditComponent, FclistdataComponent } from "fccomponent";
import { FCEVENT } from "fccomponent/fc";
import { Args_QuotaValue, AccessToData, SysquotavalueService, PageStateConfig, ObjectState } from "../../services/sysquotavalue.service";
@Component({
  templateUrl: "./sysquotaedit.component.html",
  styles: [
    `
      :host ::ng-deep .fc-layoutpanel .fc-content {
        height: 80% !important;
        overflow:hidden;
      }
      :host ::ng-deep .ag-sort-order{
        display : none !important;
      }
      :host ::ng-deep .ant-radio-group{
        display:flex !important;
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
      .btnWrapper{
        width: 100%;
        display: flex;
        flex: 1;
        justify-content: center;
        position: relative;
        top:30px
      }
    `
  ]
})
export class SysquotaEditComponent extends ParentEditComponent {
  editCondition: { where: string; };
  PageState: any = PageStateConfig.list;
  sppId: any;
  ObjState: ObjectState;
  saveObj: any = {};
  AccessToDataType: any[] = [{ icon: '', label: AccessToData.static.name, value: AccessToData.static.code }, { icon: '', label: AccessToData.SQL.name, value: AccessToData.SQL.code }, { icon: '', label: AccessToData.custom.name, value: AccessToData.custom.code }];
  args: Args_QuotaValue;
  // indexObj_edit: any;
  @ViewChild('listdata') editlist: FclistdataComponent;
  @ViewChild('detailList') detailList: FclistdataComponent
  @ViewChild('contentTpl') contentTpl: any;
  @ViewChild('footerTpl') footerTpl: any;
  constructor(
    public mainService: SysquotavalueService,
    public router: Router,
    public activeRoute: ActivatedRoute
  ) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    this.PageState = PageStateConfig.list;
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  event(eventName: string, param: any): void { }
  tlblistEvent(ev: FCEVENT) {
    switch (ev.eventName) {
      case "listAdd":
        this.saveObj = {};
        this.PageState = PageStateConfig.add;
        this.ObjState = ObjectState.Add;
        this.editCondition = { where: `CHARTID = '${this.saveObj.CHARTID}'` }
        this.saveObj.CHARTID = this.mainService.getTimeStamp()
        // this.args = { titleTpl: '指标值新增', contentTpl: this.contentTpl, footerTpl: this.footerTpl };
        // this.mainService.dialogOpen(this.args);
        break;
      default:
        break;
    }
  }
  listdataEvent(ev: FCEVENT) {
    switch (ev.eventName) {
      case 'listOneView':
        break;
      case 'listEdit':
        this.saveObj = ev.param;
        this.editCondition = { where: `CHARTID = '${this.saveObj.CHARTID}'` }
        this.PageState = PageStateConfig.edit;
        this.ObjState = ObjectState.Update;
        // setTimeout(() => {
        //   this.indexObj_edit = this.editlist.fcRowData;
        // });
        // this.args = { titleTpl: '指标值修改', contentTpl: this.contentTpl, footerTpl: this.footerTpl }
        // this.mainService.dialogOpen(this.args)
        break;
      case 'listOneDelete':
        this.mainService.confirmMsg('确认删除？', () => {
          this.mainService.delete(ev.param).subscribe(res => {
            if (res.CODE === '0') {
              this.mainService.successMsg('删除成功');
              this.detailList.fcReflesh();
            }
            else this.mainService.errMsg('删除失败');
          })
        }, () => { })
        break;
      default:
        break;
    }
  }
  SQLlistdataEvent(ev: FCEVENT) {
    switch (ev.eventName) {
      case 'rowDoubleClick':
        this.saveObj.VALUE = ev.param[0].SQLKEY;
        this.mainService.close_modal();
        break;
    }
  }
  typeChange(ev) {
    this.saveObj.CATAGORY = ev.DICVALUE;
    this.saveObj.VALUE = null;
    this.saveObj.LABEL = null;
    this.saveObj.SERIES = null;
  }
  showModal(title, contentTpl: any) {
    this.args = { titleTpl: title, contentTpl: contentTpl }
    this.mainService.dialogOpen(this.args)
  }
  handle_ok() {
    this.mainService.handle_ok(this.saveObj, this.editlist);
    this.PageState = PageStateConfig.list;
  }
  handle_cancel() {
    this.mainService.handle_cancel()
    this.PageState = PageStateConfig.list;
  }
  static_add(contentTpl, footerTpl) {
    let args: Args_QuotaValue = { titleTpl: '新增数据', contentTpl: contentTpl, footerTpl: footerTpl }
    this.mainService.dialogOpen(args);
  }
  static_delete() {
    // let gridApi: GridApi = this.editlist._gridApi;
    // let columnApi: ColumnApi = this.editlist._gridColumnApi;
    // let selected = gridApi.getSelectedRows();
    // let removed: RowDataTransaction = { remove: selected };
    // gridApi.updateRowData(removed);
    // this.static_sort();
  }
  static_sort() {
    // let gridApi: GridApi = this.editlist._gridApi;
    // let columnApi: ColumnApi = this.editlist._gridColumnApi;
    // gridApi.setSortModel([{ colId: 'SERIES', sort: true }, { colId: 'LABEL', sort: true }])
  }
  add_cancel() {
    this.mainService.close_modal();
  }
  add_ok() {
    this.mainService.add_ok(this.saveObj, this.editlist)
  }
}
