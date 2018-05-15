import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'check',
  templateUrl: './check.component.html',
  styles: [``]
})
export class CheckComponent extends ComponentParent {
  //复选框单独使用view
  single: string = `
  <fc-check [fcLabel]="'单独使用'" [(ngModel)]="checkValue"  [fcOption]="checkOption"></fc-check>
  `
  //只读view
  readonlyview: string = `
  <fc-check [fcLabel]="'只读'"  [fcReadonly]="true" [(ngModel)]="checkValue" [fcOption]="checkOptionsreadonly"></fc-check>
  `
  //单独禁用
  singledisabledview: string = `
  <fc-check [fcLabel]="'单独禁用'" [(ngModel)]="checkValue" [fcOption]="checkOptionsDisabled"></fc-check>
  `
  //禁用状态
  disabledview: string = `
  <fc-check [fcLabel]="'禁用'"  fcDisabled="true" [(ngModel)]="checkValue" [fcOption]="checkOptionsDisabled"></fc-check>
  `
  //基本用法
  basicjs:string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'check',
    templateUrl: './check.component.html',
    styleUrl:'./check.component.css'
  })
  export class CheckComponent{
  checkValue: string = 'a';
  checkOption: any[] = [{ icon: '', label: 'A', value: 'a' }];
  checkOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  checkOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  checkOptionsreadonly: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b', }, { icon: '', label: 'C', value: 'c'}];
  }
  `
  checkValue: string = 'a';
  checkOption: any[] = [{ icon: '', label: 'A', value: 'a' }];
  checkOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  checkOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  checkOptionsreadonly: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b', }, { icon: '', label: 'C', value: 'c'}];
  constructor(public mainService: ComponentService) {
    super('FCCHECK', mainService);
  }
}

