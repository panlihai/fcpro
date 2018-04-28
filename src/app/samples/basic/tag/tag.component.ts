import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styles: [``]
})
export class TagComponent extends ComponentParent {
  _fcEvent(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  constructor(public mainService: ComponentService) {
    super('FCTAG', mainService);
  }
  // 是否关闭
  _close(event: Event): void {
    this._fcEvent({
        eventName: 'close',
        param: event
    })
}
_checked = true;
 /**
     * 选中标签
     * @param checked 
     */
  _handleChange(checked: boolean): void {
    this._checked = checked;
    this._fcEvent({
        eventName: 'check',
        param: event
    })
}
}