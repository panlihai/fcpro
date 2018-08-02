// 添加列属性
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import 'rxjs/add/operator/filter';
import { NzModalSubject } from 'ng-zorro-antd';
@Component({
  selector: 'addcolattrvaluedialog',
  template: `
  <div>
    <div class="bg-dialog-content">
      <fc-layoutcol fcSpans="4,6">
        <div class="bg-dialog-left" fccontent1>
        <fc-layoutgroup fcTitle="列属性" class="bg-dialog-left-layoutgroup">
          <fc-button fcLabel="添加" class="bg-dialog-fixed-btn" fccontent></fc-button>
          <div class="bg-dialog-list3" fccontent>
            <div class="bg-dialog-list3-filter">
              <fc-text class="bg-dialog-filter" fcLabel="列属性1" name="name1"></fc-text>
              <fc-button class="bg-dialog-btn" fcLabel="过滤" fcType="primary"></fc-button>
            </div>
            <div class="bg-dialog-list3-list">
              <fc-listdata fcAppid="SYSAPP" [fcOption]="rowattrOption"></fc-listdata>
            </div>
          </div>
          <div class="bg-dialog-list3" fccontent>
            <div class="bg-dialog-list3-filter">
              <fc-text class="bg-dialog-filter" fcLabel="列属性2" name="name2"></fc-text>
              <fc-button class="bg-dialog-btn" fcLabel="过滤" fcType="primary"></fc-button>
            </div>
            <div class="bg-dialog-list3-list">
              <fc-listdata fcAppid="SYSAPP" [fcOption]="rowattrOption"></fc-listdata>
            </div>
          </div>
          <div class="bg-dialog-list3" style="border-bottom:0;" fccontent>
            <div class="bg-dialog-list3-filter">
              <fc-text class="bg-dialog-filter" fcLabel="列属性3" name="name3"></fc-text>
              <fc-button class="bg-dialog-btn" fcLabel="过滤" fcType="primary"></fc-button>
            </div>
            <div class="bg-dialog-list3-list">
              <fc-listdata fcAppid="SYSAPP" [fcOption]="rowattrOption"></fc-listdata>
            </div>
          </div>
        </fc-layoutgroup>
        </div>
        <div class="bg-dialog-right" fccontent2>
        <div class="bg-dialog-right-list">
            <fc-button fcLabel="清空" class="bg-dialog-fixed-btn"></fc-button>
            <fc-listdata fcAppid="SYSMESSAGE"></fc-listdata>
          </div>
        </div>
      </fc-layoutcol>
   </div>
    <div class="customize-footer">
      <fc-button  [fcType]="'primary'" fcLabel="确定" (click)="emitDataOutside($event)">
      </fc-button>
      <fc-button [fcType]="'default'" fcLabel="取消"  (click)="handleCancel($event)">
      </fc-button>
    </div>
  </div>
  `,
  styles: [`
   :host ::ng-deep .templatetablist .ant-col-22 {
     margin-left:4%;}
  .bg-dialog-left{
    position:relative;
    padding-right:70px;
  }
  .bg-dialog-fixed-btn{
    position:absolute;
    right:-70px;
    top:100px;
  }
  .bg-dialog-right{
    position:relative;
    padding-right:70px;
  }
  .bg-dialog-list3{
    width:100%;
    height:200px;
    padding-top:10px;
    padding-bottom:10px;
    border-bottom:1px solid #ebedf0;
  }
  .bg-dialog-list3-filter{
    display:flex;
    justify-content:space-between;
    width:100%;
    height:30px;
    margin-bottom:5px;
  }
  .bg-dialog-list3-filter .bg-dialog-filter{
    width:calc(100% - 64px);
  }
  .bg-dialog-list3-list{
    height:calc(100% - 30px);
  }
   .customize-footer{
     text-align:center;
   }
   .bg-dialog-right-list{
     width:100%;
     height:630px;
     position:relative;
   }
   :host ::ng-deep .bg-dialog-left-layoutgroup>.fc-content{
    padding:10px;
   }
  `]
})
export class AddcolattrvaluedialogComponent {
  _lastPwd: string;
  _newPwd: string;
  @Input()
  lastPwd: string;
  @Input()
  newPwd: string;
  @Input()
  //传值
  set options(option: any) {
    this._lastPwd = option.lastPwd;
    this._newPwd = option.newPwd;
  }
  constructor(private modal: NzModalSubject) {

  }
  emitDataOutside() {
    let params = { lastPwd: this._lastPwd, newPwd: this._newPwd };
    this.modal.next(params);
    this.modal.destroy();
  }
  handleCancel(e) {
    this.modal.destroy();
  }
  rowattrOption = {
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
    fcPagination: false,
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
}