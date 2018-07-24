/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { SysbizcodedefineService } from './sysbizcodedefine.service';
import { Router } from '@angular/router';
import { LayoutService } from './layout.service';
import { SysappService } from './sysapp.service';
import { Observable } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd';
@Injectable()
export class SysbizcoderuleService extends ParentService {
  currentModal_navLink: any;
  constructor(public providers: ProvidersService
       , public sysbizcodedefineService: SysbizcodedefineService,
       public layoutService: LayoutService,
       public sysappService: SysappService,
       public modalService: NzModalService
  ) {
    super(providers, "SYSBIZCODERULE");
  }
  /**
     * 获取当前编码规则子表的所有内容
     * */
  bizcodedefineAll() {
    return this.providers.appService.findWithQuery("SYSBIZCODEDEFINE", {})
  }
  /**
     * 子表根据逐步字段过滤出子表当前数据
     * */
  childrensendCondition(mainObj, sendCondition) {
    if (mainObj.ID) {
      //SBIZCODE_RULE_ID  = this.mainObj.SBIZCODE_RULE_CODE   那么列表开始过滤
      //子表根据主表this.mainObj.SBIZCODE_RULE_CODE字段过滤子表SBIZCODE_RULE_ID这段，子表出现过滤出的数据
      sendCondition = '{"ORDER":"NSERIAL_NUM","SBIZCODE_RULE_ID":"' + mainObj.SBIZCODE_RULE_CODE + '"}';
    } else {
      sendCondition = sendCondition + '';
    }
  }
  /**
    * 更新上移下移列表
    * @param id 
    */
  updateOrgRelationData(thisId: string, thatId: string, thatRn: number, thisRn: number): Observable<any> {
    let obj1: any = {
      ID: thisId,
      NSERIAL_NUM: thisRn
    }
    let obj2: any = {
      ID: thatId,
      NSERIAL_NUM: thatRn
    }
    return this.commonService.createObservableJoin([
      this.sysbizcodedefineService.updateList([obj1, obj2]),
    ]);
  }
  /**
   *  刷新列表
   * @param id 
   */
  listrefleshFun(sendCondition,bizcoderuledifinelist){
      //刷新列表
      let con: any = {
      ORDER: 'NSERIAL_NUM'
    }
    sendCondition = JSON.stringify(con);
    bizcoderuledifinelist.fcReflesh();
  }
   /**
   *  编码规则方法
   * @param id 
   */
  bizcoderuleFun(mainObj){
    return this.providers.appService.findWithQuery('SYSBIZCODEDEFINE',{SBIZCODE_RULE_ID:mainObj.SBIZCODE_RULE_CODE})
  }
  /**
  * 根据产品ID获取服务编码
  * @param method 
  * @param appid 
  * @param pid 
  */
  getBizCodeByAid(moduleId: string, resId: string) {
    return this.providers.daoService
      .getFromApi(`${moduleId}/${resId}/undefined`, {});
  }
  /**
   * 上移
   */
  listUpfun(bizcoderuledifinelist, sendCondition, ev, content) {
    let obj: any = ev;
    if (obj.ID && obj.ID !== '') {
      //选中数据序号
      let thisNum: number = obj.NSERIAL_NUM;
      // thisNum = obj.NDISPLAYNO;
      let listData = bizcoderuledifinelist.fcRowData;
      //选中数据
      let thisData: any = {};
      //上一条数据
      let preData: any = {};
      // 选中sparaname值
      let thisparaname: string = '';
      // 上一条数据
      let presparaname: string = '';
      if (obj.ID === listData[0].ID) {
        this.messageService.error("已到顶部,不能上移！");
      } else if (obj.ID !== listData[0].ID) {
        listData.forEach(item => {
          if (obj.ID === item.ID) {
            thisData = item;
            preData = listData[item.RN - 2];
            thisparaname = item.SPARAM_NAME;
            // presparaname = listData[item.RN - 2];
            presparaname = listData[item.RN - 2].SPARAM_NAME
            thisData.NSERIAL_NUM = preData.NSERIAL_NUM;
            preData.NSERIAL_NUM = thisNum;
            this.updateOrgRelationData(thisData.ID, preData.ID, preData.NSERIAL_NUM, thisData.NSERIAL_NUM).subscribe(result => {
              if (result[0].CODE === '0') {
                // //刷新列表
                this.listrefleshFun(sendCondition, bizcoderuledifinelist);
              } else {
                this.messageService.error("排序失败");
              }
            })
          }
        });
      }
    }
  }
  /**
   * 下移
   */
  listDownfun(bizcoderuledifinelist, sendCondition, ev) {
    let obj: any = ev;
    if (obj.ID && obj.ID !== '') {
      //选中数据序号
      let thisNum: number = obj.NSERIAL_NUM;
      let listData = bizcoderuledifinelist.fcRowData;
      //选中数据
      let thisData: any = {};
      //下一条数据
      let nextData: any = {};
      if (obj.ID === listData[listData.length - 1].ID) {
        this.messageService.error("已到底部,不能下移！");
      } else if (obj.ID !== listData[listData.length - 1].ID) {
        listData.forEach(item => {
          if (obj.ID === item.ID) {
            thisData = item;
            nextData = listData[item.RN];
            thisData.NSERIAL_NUM = nextData.NSERIAL_NUM;
            nextData.NSERIAL_NUM = thisNum;
            this.updateOrgRelationData(thisData.ID, nextData.ID, nextData.NSERIAL_NUM, thisData.NSERIAL_NUM).subscribe(result => {
              if (result[0].CODE === '0') {
                // //刷新列表
                this.listrefleshFun(sendCondition, bizcoderuledifinelist);
              } else {
                this.messageService.error("排序失败");
              }
            })
          }
        });
      }
    }
  }
  /**
       * 置頂
       */
  listTopfun(bizcoderuledifinelist, sendCondition, ev) {
    let obj: any = ev;
    if (obj.ID && obj.ID !== '') {
      //选中数据序号
      let thisNum: number = obj.NSERIAL_NUM;
      // thisNum = obj.NDISPLAYNO;
      let listData = bizcoderuledifinelist.fcRowData;
      //选中数据
      let thisData: any = {};
      //第一条数据
      let firstData: any = {};
      if (obj.ID === listData[0].ID) {
        this.messageService.error("已到顶部,不需要置顶啦！");
      } else if (obj.ID !== listData[0].ID) {
        listData.forEach(item => {
          if (obj.ID === item.ID) {
            thisData = item;
            firstData = listData[0];
            thisData.NSERIAL_NUM = firstData.NSERIAL_NUM;
            firstData.NSERIAL_NUM = thisNum;
            this.updateOrgRelationData(thisData.ID, firstData.ID, firstData.NSERIAL_NUM, thisData.NSERIAL_NUM).subscribe(result => {
              if (result[0].CODE === '0') {
                // //刷新列表
                this.listrefleshFun(sendCondition, bizcoderuledifinelist);
              } else {
                this.messageService.error("排序失败");
              }
            })
          }
        });
      }
    }
  }
  /**
        * 置底部
        */
  listBottomfun(bizcoderuledifinelist, sendCondition, ev) {
    let obj: any = ev;
    if (obj.ID && obj.ID !== '') {
      //选中数据序号
      let thisNum: number = obj.NSERIAL_NUM;
      // thisNum = obj.NDISPLAYNO;
      let listData = bizcoderuledifinelist.fcRowData;
      //选中数据
      let thisData: any = {};
      //第一条数据
      let lastData: any = {};
      if (obj.ID === listData[listData.length - 1].ID) {
        this.messageService.error("已到底部,不需要置底啦！");
      } else if (obj.ID !== listData[listData.length - 1].ID) {
        listData.forEach(item => {
          if (obj.ID === item.ID) {
            thisData = item;
            lastData = listData[listData.length - 1];
            thisData.NSERIAL_NUM = lastData.NSERIAL_NUM;
            lastData.NSERIAL_NUM = thisNum;
            this.updateOrgRelationData(thisData.ID, lastData.ID, lastData.NSERIAL_NUM, thisData.NSERIAL_NUM).subscribe(result => {
              if (result[0].CODE === '0') {
                // //刷新列表
                this.listrefleshFun(sendCondition, bizcoderuledifinelist);
              } else {
                this.messageService.error("排序失败");
              }
            })
          }
        });
      }
    }
  }
  /**
    *  新增规则点击出现模态框事件并且为空方法
    * @param event 
    */
  ruleAddmodal(content,SBIZCODE_RULE_CODE):Observable<any>{
    return this.modalService.open({
      title: '新增规则',
      content: content,
      width: "76%",
      onOk() {
      },
      onCancel() { },
      footer: false,
      componentParams: {
        options: {
          SBIZCODE_RULE_CODE: SBIZCODE_RULE_CODE
        }
      }
    })
  }
        /**
       * 编码规则sparname字段根据列表移动方法
       */
      compare(property){
        return function(a, b) {
            var value1 = a[property];
            var value2 = b[property];
            return value1 - value2;
        }
      }
}

export interface Sysbizcoderule {

}
