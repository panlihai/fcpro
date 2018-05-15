import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'radio',
  templateUrl: './radio.component.html',
  styles: [`
  .radio{
    display:inline-block;
    margin-right:24px;
    width:100%;
  }
  `]
})
export class RadioComponent extends ComponentParent {
  //大小
  sizeview: string = `
  <fc-radio [fcLabel]="'小'" fcType="button" fcSize="small" [(ngModel)]="radioValue" [fcOption]="radioOptions" style="display:inline-block;margin-right:24px;width:100%;"></fc-radio>                       
  <fc-radio [fcLabel]="'默认'" fcType="button" fcSize="default" [(ngModel)]="radioValue" [fcOption]="radioOptionsDisabled" style="display:inline-block;margin-right:24px;width:100%;"></fc-radio>                     
  <fc-radio [fcLabel]="'大'" fcType="button" fcSize="large" [(ngModel)]="radioValue" [fcOption]="radioOptionsDisabled" style="display:block;margin-top:24px;width:100%;"></fc-radio>
  `
  //按钮大小style
  radioSize: string = `
  .radio{
    display:inline-block;
    margin-right:24px;
    width:100%;
  }
  `
  //只读view
  readonlyview: string = `
  <fc-radio [fcLabel]="'只读'" [(ngModel)]="radioValueSingle" [fcOption]="radioOptionsReadonly" [fcReadonly]="true"></fc-radio>
  `
  //禁止view
  disabledview: string = `
  <fc-radio [fcLabel]="'禁用'" [fcDisabled]="true" [(ngModel)]="radioValue" [fcOption]="radioOptionsDisabled"></fc-radio>
  `
  //类型view
  typeview: string = `
  <fc-radio [fcLabel]="'radio按钮'" fcType="radio" [(ngModel)]="radioValue" [fcOption]="radioOptions"></fc-radio>
  <fc-radio [fcLabel]="'button按钮'" fcType="button" [(ngModel)]="radioValue" [fcOption]="radioOptions"></fc-radio>
  `
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'radio',
    templateUrl: './radio.component.html',
    styleUrl:'./radio.component.css'
  })
  export class RadioComponent{
    radioValueSingle: string = 'a';
    radioOption: any[] = [{ icon: '', label: 'A', value: 'a' }];
    radioValue: string = 'a';
    radioOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
    radioOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true}];
    radioOptionsReadonly: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c'}];
  }
  `
  radioValueSingle: string = 'a';
  radioOption: any[] = [{ icon: '', label: 'A', value: 'a' }];
  radioValue: string = 'a';
  radioOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  radioOptionsDisabled: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c', disabled: true }];
  radioOptionsReadonly: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c'}];
  constructor(public mainService: ComponentService) {
    super('FCRADIO', mainService);
  }
}