import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  ParentlistComponent, FccheckComponent, FclistComponent, FccomboComponent } from 'fccomponent';
import { SysparamService, Args_Param } from '../../services/sysparam.service';
import { FCEVENT } from 'fccomponent/fc';
import { environment } from '../../../../environments/environment.prod';
@Component({
  selector: 'sysparam',
  templateUrl: './sysparam.component.html',
  styles: [`
  :host ::ng-deep .fc-layoutpanel .fc-content{
    height:100%;
  }
  :host ::ng-deep .fc-layoutgroup {
    height:100%;
  }
  :host ::ng-deep .fullgroup>section{
    height:100%;
    border:1px solid #666 !important;
  }
  .beline-div{
    min-height:1px;
    border-bottom:1px solid #666;
  }
  .list-search {
    width:100%;
  }
  .list-search:after{
    content:'';
    display:block;
    clearfix:both;
  }
  .list-search-every{
    width:24%;
    float:left;
  }
  .checkaftertitle{
    width:100px;
  }
  `]
})
export class SysparamComponent extends ParentlistComponent {
  args: Args_Param;
  saveObj: any = {};
  listCondition: any = `{"ORDER":"SORT"}`;
  selectedParamId: any;
  PID_name: any;
  selectedObject: any = {};
  check_enable: any = [{ label: '启用', value: 'Y' }];
  checkEnable_value: any;
  pageState: any = 'normal';
  data_DIC: any = [];
  filter_paramName: any;
  @ViewChild('check_cp') check_component: FccheckComponent;
  @ViewChild('list_cp') list_component: FclistComponent;
  @ViewChild('dicContentTpl') dicContentTpl: any;
  @ViewChild('combo1') combo_TYPE: FccomboComponent;
  @ViewChild('combo2') combo_DIC: FccomboComponent;
  constructor(public mainService: SysparamService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  listEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'loaded':
        if (event.param && event.param.length > 0) {
          this.saveObj = event.param[0];
          this.selectedParamId = this.saveObj.ID;
          this.checkStatus_enable();
          if (this.saveObj.PARAMDIC)
            this.updateCombo_DIC();
          this.pageState = 'normal';
        }
        break;
      case 'select':
        this.saveObj = event.param;
        this.pageState = 'normal';
        this.checkStatus_enable();
        if (this.saveObj.PARAMDIC)
          this.updateCombo_DIC();
        break;
      case 'listOneDelete':
        this.messageService.confirm("确认删除记录吗?", () => {
          let mainObj = event.param;
          if (this.beforeDelete(mainObj)) {
            this.mainService.delete({ ID: mainObj.ID }).subscribe(result => {
              if (result.CODE === '0') {
                this.afterDelete();
                this.messageService.message('删除成功！');
                //重新初始化list组件
                if (this.listCondition) {
                  if (this.listCondition.substring(this.listCondition.length - 1) === ' ') {
                    this.listCondition = this.listCondition.replace(/(\s*$)/g, "");
                  } else {
                    this.listCondition = this.listCondition + " ";
                  }
                }
              } else {
                this.messageService.message('删除失败！');
              }
            });
          }
        }, () => { });
        break;
      case 'listEdit':
        this.selectedParamId = event.param.ID;
        this.saveObj = event.param;
        this.checkStatus_enable();
        if (this.saveObj.PARAMDIC)
          this.updateCombo_DIC();
        this.pageState = 'edit';
        break;
    }
  }
  init(): void {
    this.initLabelName_PID();

  }
  tlblistEvent(ev: FCEVENT) {
    switch (ev.eventName) {
      case 'listAdd':
        for (let index in this.saveObj) {
          this.saveObj[index] = '';
        }
        this.checkStatus_enable();
        this.combo_TYPE.innerValue = undefined;
        this.combo_TYPE._selectOptions = null;
        this.pageState = 'edit';
        break;
      default:
        break;
    }
  }
  tlbformEvent(ev: FCEVENT) {
    switch (ev.eventName) {
      case 'cardSaveBack':
        if (this.saveObj.ID !== '') {
          this.mainService.update(this.saveObj).subscribe(res => {
            if (res.CODE === '0')
              this.messageService.success('更新成功');
            else
              this.messageService.error('更新失败');
          })
        } else {
          if (this.saveObj.ID) delete this.saveObj.ID;
          this.mainService.save(this.saveObj).subscribe(res => {
            if (res.CODE === '0')
              this.messageService.success('保存成功');
            else
              this.messageService.error('保存失败');
          })
        }
        this.listCondition = `{"ORDER":"SORT"}`;
        this.pageState = 'normal';
        break;
      case 'cardBack':
        this.listCondition = `{"ORDER":"SORT"}`;
        this.pageState = 'normal';
        break;
    }
  }
  initLabelName_PID() {
    this.PID_name = environment.projectName;
  }
  filter_param(ev, flter) {
    this.listCondition = JSON.stringify({ WHERE: `PARAMNAME like '%${ev}%'`, ORDER: 'SORT' });
  }
  checkStatus_enable() {
    if (this.saveObj.hasOwnProperty('ENABLE') && this.saveObj.ENABLE === 'Y') {
      this.check_component.simpleOption = true;
    } else {
      this.check_component.simpleOption = false;
    }
  }
  getDefaultQuery() {
  }
  event(eventName: string, context: any): void {
  }
  paramTypeChange(ev) {
    if (ev && ev === 'DIC') {
      this.saveObj.PARAMDIC = null;
      this.saveObj.PARAMTYPE = ev;
    } else if (ev && ev === 'CUSTOM') {
      this.saveObj.PARAMDIC = null;
      this.saveObj.PARAMTYPE = ev;
    }
  }
  showModal(title, contentTpl: any) {
    this.args = { titleTpl: title, contentTpl: contentTpl };
    this.mainService.dialogOpen(this.args);
  }
  dicListdataEvent(ev: FCEVENT) {
    switch (ev.eventName) {
      case 'rowDoubleClick':
        this.saveObj.PARAMDIC = ev.param[0].DICID;
        this.combo_DIC._selectOptions = null;
        this.combo_DIC.innerValue = undefined;
        this.mainService.close_modal();
        break;
    }
  }
  updateCombo_DIC() {
    this.mainService.appService.findWithQuery('SYSDICDETAIL', { where: `DICID = '${this.saveObj.PARAMDIC}'` }).subscribe(res => {
      if (res.CODE === '0') {
        this.data_DIC = [];
        res.DATA.forEach(el => {
          this.data_DIC.push({ label: el.DICDESC, value: el.DICVALUE });
        })
        this.combo_DIC._afterParentInit();
      }
    })
  }
  checkEvent(ev) {
    this.saveObj.ENABLE = ev;
  }
}
