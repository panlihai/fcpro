// 复制项目属性
import { Component, Input } from '@angular/core';
import 'rxjs/add/operator/filter';
import { NzModalSubject } from 'ng-zorro-antd';
import { TreeOptions } from 'fccomponent';
@Component({
    selector: 'copyattrdialog',
    template: `
    <fc-layoutpanel>
        <fc-combo fccontent fcLabel="预算分类" [fcAppid]="componentParam.appId1" [(ngModel)]="selectedClass" (ngModelChange)="event('selectClass')"></fc-combo>
        <fc-tree fccontent  [(ngModel)]="treeSelectObj" [fcOption]="treeOptions" (fcEvent)="treeEvent($event)" #classTree></fc-tree>
        <div fccontent style="display: flex;justify-content: center;">
            <fc-button fcType="primary" fcLabel="确定" (click)="event('confirm')"></fc-button>
            <fc-button  fcLabel="取消" (click)="event('cancel')"></fc-button>
        </div>
    </fc-layoutpanel>
         `,
    styles: [`
   .customize-footer{
     text-align:right;
   }
  `]
})
export class CopyprojectattrComponent {
    selectedClass: any;
    treeSelectObj: any;
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
    componentParam: any = {};
    @Input()
    set options(param: any) {
        this.componentParam = param;
    }
    // 表单验证对象
    mainValid: any = {};
    constructor(private modal: NzModalSubject) {

    }
    emitDataOutside() {
        let params = {};
        this.modal.next(params);
        this.modal.destroy();
    }
    handleCancel() {
        this.modal.destroy();
    }
    event(eventName: string, param?: any) {
        switch (eventName) {
            case '>':

                break;
            case '<':

                break;
            case 'confirm':
                this.emitDataOutside();
                break;
            case 'cancel':
                this.handleCancel();
                break;
        }
    }
}