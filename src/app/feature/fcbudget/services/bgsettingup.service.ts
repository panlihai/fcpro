/* 	编制设置 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService, Sysmenu } from 'fccore';
import { TreeOptions } from 'fccomponent';
import { FCEVENT } from 'fccomponent/fc';
import { Observable } from 'rxjs';
@Injectable()
export class BgsettingupService extends ParentService {
    constructor(public providers: ProvidersService) {
        super(providers, "SYSMESSAGE");
    }
    //树配置
    treeOptions: TreeOptions = {
        //元数据id
        fcAppid: "SYSMENU",//元数据id
        //树结构节点显示内容
        fcLabel: ':{MENUNAME}::{MENUID}',//支持:{参数名称}
        // 关联父节点字段名称
        fcParentCode: 'PARENT',
        // 当前节点字段名称
        fcChildCode: 'MENUID',
        // 叶子节点字段名称
        fcLeafCode: 'HASCHILD',
        // 根节点条件
        fcTopWhere: "PARENT is null or PARENT=''",
        // 展开条件
        fcExpWhere: "PARENT=':{MENUID}'",
        // 排序字段
        fcOrderby: "",
        // 模式 false为单选，true为多选
        fcMode: true,
        // 展开子节点
        fcOpenChild: false,
        // 是否显示线条
        fcShowLine: true,
        //是否可拖拽
        fcAllowDrag: true
    };
    /**
  * 上移
  * @param event 选中数据的对象
  * @param listData 列表的数据
  */
    listOneMoveup(event: FCEVENT, listData: any[]) {
        let obj: any = event;
        if (obj.ID && obj.ID !== '') {
            //选中数据序号
            let thisNum: number = obj.NDISPLAYNO;
            //上一个序号
            let thatNum: number
            //选中数据
            let thisData: any = {};
            //上一条数据
            let preData: any = {};
            if (obj.RID === listData[0].RID) {
                this.messageService.error("已到顶部,不能上移！");
            } else if (obj.RID !== listData[0].RID) {
                listData.forEach(item => {
                    if (obj.RID === item.RID) {
                        thisData = item;
                        preData = listData[item.RN - 2];
                        //暂存替换前的序号
                        thatNum = preData.NDISPLAYNO;
                        preData.NDISPLAYNO = thisNum;
                        thisData.NDISPLAYNO = thatNum;
                        this.updateOrgRelationData(thisData.RID, preData.RID, preData.NDISPLAYNO, thisData.NDISPLAYNO).subscribe(result => {
                            if (result[0].CODE !== '0') {
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
     * @param event 选中数据的对象
     * @param listData 列表的数据
     */
    listOneMovedown(event: FCEVENT, listData: any[]) {
        let obj: any = event;
        if (obj.ID && obj.ID !== '') {
            //选中数据序号
            let thisNum: number = obj.NDISPLAYNO;
            //下一条数据序号
            let nextNum: number;
            //选中数据
            let thisData: any = {};
            //下一条数据
            let nextData: any = {};
            if (obj.RID === listData[listData.length - 1].RID) {
                this.messageService.error("已到底部,不能下移！");
            } else if (obj.RID !== listData[listData.length - 1].RID) {
                listData.forEach(item => {
                    if (obj.RID === item.RID) {
                        thisData = item;
                        nextData = listData[item.RN];
                        nextNum = nextData.NDISPLAYNO;
                        thisData.NDISPLAYNO = nextNum;
                        nextData.NDISPLAYNO = thisNum;
                        this.updateOrgRelationData(thisData.RID, nextData.RID, nextData.NDISPLAYNO, thisData.NDISPLAYNO).subscribe(result => {
                            if (result[0].CODE !== '0') {
                                this.messageService.error("排序失败");
                            }
                        })
                    }
                });
            }
        }
    }
    /**
   * 更新单位隶属关系
   * @param thisId 当前选中数据的id
   * @param thatId 和当前选中数据交换的id
   * @param thatRn 和当前选中数据交换的序号
   * @param thisRn 当前选中数据的序号
   */
    updateOrgRelationData(thisId: string, thatId: string, thatRn: number, thisRn: number): Observable<any> {
        // 当前选中数据的对象
        let obj1: any = {
            ID: thisId,
            NDISPLAYNO: thisRn
        }
        // 交换序号那条数据的对象
        let obj2: any = {
            ID: thatId,
            NDISPLAYNO: thatRn

        }
        // 并行保存交换序号后的两个对象
        return this.commonService.createObservableJoin([
            this.updateList([obj1, obj2]),
        ]);
    }
}