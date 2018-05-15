import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { TreeOptions, TimelineOptions } from 'fccomponent';
import { FCEVENT } from 'fccomponent/fc';
@Component({
  selector: 'templateform',
  templateUrl: './templatetreeformlists.component.html',
  styles: [`
  `]
})
export class TemplatetreeformlistsComponent extends ComponentParent {
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
 radioOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }];
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
 tabmain = [
   { name: '基本状态' },
   { name: '只读状态' },
   { name: '禁用状态' }
]
 treeSelectObj: any = {};
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
  //下拉单选
  comboValue: string = 'a';
  comboOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  constructor(public mainService: ComponentService) {
    super('SYSCOMPONENT', mainService);
  }
  event(event: FCEVENT) {
    switch (event.eventName) {
      default:
        console.log(event);
    }
  }
}