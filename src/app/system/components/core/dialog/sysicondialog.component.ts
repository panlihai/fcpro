import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';
import { SysbizcodedefineService } from '../../../services/sysbizcodedefine.service';
import { forEach } from '@angular/router/src/utils/collection';
import { SysiconService } from '../../../services/sysicon.service';
import { $ } from 'protractor';
@Component({
  selector: 'icondialog',
  template: `
    <div>
      <div>
          <div *ngFor="let icon of icons" 
                class="sys-fciconlayout" (click) = "iconsave(icon.DICVALUE)">
              <span><fc-icon [fcIcon]="icon.DICVALUE"></fc-icon></span>
              <span>{{icon.DICDESC}}</span>
          </div>  
      </div>
    </div>
    `,
  styles: [`
  .sys-fciconlayout{
    width: 25%;
    height: 89px;
    display: inline-flex; 
    align-items: center; 
    justify-content: center;
  }
  .sys-iconzi{
    display: inline-flex; 
    align-items: center; 
    justify-content: center;
  }
  .sys-fciconlayout:hover{
    background: #10a3e9;
  }
  `]
})
export class SysicondialogComponent{
  icons :any;
  DICVALUE: string = '';
  constructor(private modal: NzModalSubject, public mainService: SysiconService) {
  this.mainService.getIcon().subscribe(result => {
    this.icons = result.DATA;
  })
  }
  @Input()
  set options(option: any) {
  }
    /**
  * 点击保存icon类名
  * @param event  
  */
  iconsave(DICVALUE){
    this.mainService.providers.msgService.message("触发点击事件");
    let ev : any = {DICVALUE : DICVALUE};
    this.modal.next(ev);
    this.modal.destroy();
}
}