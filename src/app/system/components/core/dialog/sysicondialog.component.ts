import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';
import { SysbizcodedefineService } from '../../../services/sysbizcodedefine.service';
import { forEach } from '@angular/router/src/utils/collection';
import { SysiconService } from '../../../services/sysicon.service';
@Component({
  selector: 'icondialog',
  template: `
    <div>
      <div>
          <div *ngFor="let icon of icons" 
                class="sys-fciconlayout">
              <fc-icon [fcIcon]="icon.DICVALUE"></fc-icon>
              {{icon.DICVALUE}}
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
  icons: any[];
  constructor(private modal: NzModalSubject, public mainService: SysiconService) {
  this.mainService.getIcon().subscribe(result => {
    this.icons = result.DATA;
  })
  }
  @Input()
  set options(option: any) {
  }
}