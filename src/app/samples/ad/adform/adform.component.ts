import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FcadformOption } from 'fccomponent';
@Component({
  selector: 'adform',
  templateUrl: './adform.component.html',
  styles: [``]
})
export class AdformComponent extends ComponentParent {
  //basicview
  basicview : string = `
  <fc-layoutcol fccontent>
    <form nz-form fccontent1>
      <fc-switch fcCheckValue="Y" fcLabel="开关label" fcOption='[{"label":"是","value":"Y"},{"label":"否","value":"N"}]' name="11"></fc-switch>
      <div style="margin-left:83px;">开关：fcCheckValue="Y"/Y是关闭,N是开启和fcOption配合使用</div>
      <fc-any [(ngModel)]="anyValue" fcLabel="下拉单选对象label" [fcOption]="anyOptions" name="12"></fc-any>
      <div style="margin-left:36px;">下拉单选对象：[fcOption]="anyOptions" [(ngModel)]="anyValue"/其中anyValue、anyOptions</div>
      <fc-check [(ngModel)]="checkValue" fcLabel="多选框label" [fcOption]="checkOptions" name="13"></fc-check>
      <div style="margin-left: 71px;">多选框： [(ngModel)]="checkValue" [fcOption]="checkOptions"/其中checkValue、checkOptions是配置参数</div>
      <fc-chosen [(ngModel)]="chosenValue" fcLabel="下拉多选label" [fcOption]="chosenOptions" name="14"></fc-chosen>
      <div style="margin-left: 62px;">下拉多选:[(ngModel)]="chosenValue"[fcOption]="chosenOptions" /其中chosenValue、chosenOptions是配置参数</div>
      <fc-combo [(ngModel)]="comboValue" fcLabel="下拉单选label" fcRequired="true" [fcOption]="comboOptions" name="15"></fc-combo>
      <div style="margin-left: 59px;">下拉单选：[(ngModel)]="comboValue"[fcOption]="comboOptions"/其中comboValue、comboOptions是配置参数s </div>
      <fc-date [(ngModel)]="now" fcLabel="日期label" name="16"></fc-date>
      <div style="margin-left: 82px;">年月：[(ngModel)]="now"</div>
      <fc-datetime [(ngModel)]="now" fcLabel="时间日期label" name="17"></fc-datetime>
      <fc-double [(ngModel)]="inputNumber" fcLabel="数值label" name="18"></fc-double>
      <div style="margin-left: 82px;">数值：[(ngModel)]="inputNumber"/inputNumber是配置参数</div>
    </form>
    <div fccontent2>
      <fc-long [(ngModel)]="inputNumber" fcLabel="整数label"></fc-long>
      <div style="margin-left:83px;">整数：[(ngModel)]="inputNumber"/inputNumber是配置参数</div>
      <fc-many [(ngModel)]="manyValue" fcLabel="下拉多选对象label" fcAppid="SYSAPP" fcFieldCode="ENABLECACHE" fcValueCode='DICVALUE'
        fcLabelCode='DICDESC'></fc-many>
      <div style="margin-left:39px;">下拉多选对象：[(ngModel)]="manyValue"  元数据：fcAppid="SYSAPP"、元数据字段：fcFieldCode="ENABLECACHE"、元数据值：fcValueCode='DICVALUE'/manyValue是配置参数</div> 
      <fc-radio fcAppid="SYSAPP" fcFieldCode="ENABLECACHE" [(ngModel)]="radioValue" fcValueCode='DICVALUE' fcLabelCode='DICDESC'></fc-radio>
      <div style="margin-left: 62px;">单选按钮：配置元数据fcAppid="SYSAPP" fcFieldCode="ENABLECACHE" [(ngModel)]="radioValue" fcValueCode='DICVALUE' fcLabelCode='DICDESC'/其中radioValue是自定义</div>
      <fc-text fcAppid="SYSAPP" fcFieldCode='APPNAME' fcPlaceHolder="请输入" fcLabel="文本框label"></fc-text>
      <div style="margin-left: 40px;">文本框：fcPlaceHolder="请输入"/文本框默认内容</div>
      <fc-textarea fcPlaceHolder="请输入" fcLabel="大文本框label"></fc-textarea>
      <div style="margin-left: 63px;">大文本框：fcPlaceHolder="请输入"/大文本框默认内容</div>
    </div>
  </fc-layoutcol>
  <fc-tlbform fccontent [fcButtons]="[{BTNNAME:'查询'},{BTNNAME:'清空',BTNTYPE:'default'}]" fcLayout="center"></fc-tlbform>
  `
  //readonly
  readonlyview : string = `
  <fc-layoutcol fccontent>
  <div fccontent1>
    <form nz-form>
      <fc-switch fcCheckValue="Y" fcLabel="开关label" fcOption='[{"label":"是","value":"Y"},{"label":"否","value":"N"}]' name="11"></fc-switch>
      <div style="margin-left:83px;">开关：fcCheckValue="Y"/Y是关闭,N是开启和fcOption配合使用</div>
      <fc-any [(ngModel)]="anyValue" fcLabel="下拉单选对象label" fcDisabledCode="true" [fcOption]="anyOptions" name="12"></fc-any>
      <div style="margin-left:36px;">下拉单选对象：[fcOption]="anyOptions" [(ngModel)]="anyValue"/其中anyValue、anyOptions</div>
      <div style="margin-left:83px;">下拉单选对象：</div>
      <fc-check [(ngModel)]="checkValue" fcLabel="多选框label" [fcOption]="checkOptions" name="13"></fc-check>
      <div style="margin-left:36px;">下拉单选对象：[fcOption]="anyOptions" [(ngModel)]="anyValue"</div>
      <fc-chosen [(ngModel)]="chosenValue" fcLabel="下拉多选label" [fcOption]="chosenOptions" name="14"></fc-chosen>
      <div style="margin-left: 62px;">下拉多选:[(ngModel)]="chosenValue"[fcOption]="chosenOptions" /其中chosenValue、chosenOptions是配置参数</div>
      <fc-combo [(ngModel)]="comboValue" fcLabel="下拉单选label" fcRequired="true" [fcOption]="comboOptions" name="15"></fc-combo>
      <div style="margin-left: 59px;">下拉单选：[(ngModel)]="comboValue"[fcOption]="comboOptions"/其中comboValue、comboOptions是配置参数s </div>
      <fc-date [(ngModel)]="now" fcLabel="日期label" name="16"></fc-date>
      <div style="margin-left: 82px;">年月：[(ngModel)]="now"</div>
      <fc-datetime [(ngModel)]="now" fcLabel="时间日期label" name="17"></fc-datetime>
      <div style="margin-left: 47px;">年月日时间：[(ngModel)]="now"</div>
      <div style="margin-left: 47px;">年月日时间：[(ngModel)]="now"</div>
      <fc-double [(ngModel)]="inputNumber" fcLabel="数值label" name="18"></fc-double>
      <div style="margin-left: 82px;">数值：[(ngModel)]="inputNumber"/inputNumber是配置参数</div>
    </form>
  </div>
  <div fccontent2>
    <fc-long [(ngModel)]="inputNumber" fcLabel="整数label"></fc-long>
    <div style="margin-left:83px;">整数：[(ngModel)]="inputNumber"/inputNumber是配置参数</div>
    <fc-many [(ngModel)]="manyValue" fcLabel="下拉多选对象label" fcAppid="SYSAPP" fcFieldCode="ENABLECACHE" fcValueCode='DICVALUE'
      fcLabelCode='DICDESC'></fc-many>
    <div style="margin-left:39px;">下拉多选对象：[(ngModel)]="manyValue"  元数据：fcAppid="SYSAPP"、元数据字段：fcFieldCode="ENABLECACHE"、元数据值：fcValueCode='DICVALUE'/manyValue是配置参数</div>
    <fc-radio fcAppid="SYSAPP" fcFieldCode="ENABLECACHE" [(ngModel)]="radioValue" fcValueCode='DICVALUE' fcLabelCode='DICDESC'></fc-radio>
    <div style="margin-left: 62px;">单选按钮：配置元数据fcAppid="SYSAPP" fcFieldCode="ENABLECACHE" [(ngModel)]="radioValue" fcValueCode='DICVALUE' fcLabelCode='DICDESC'/其中radioValue是自定义</div>
    <fc-text fcPlaceHolder="请输入" fcLabel="文本框label" fcReadonly="true"></fc-text>
    <div style="margin-left: 40px;">文本框：fcPlaceHolder="请输入"/文本框默认内容</div>
    <fc-textarea fcPlaceHolder="请输入" fcLabel="大文本框label" fcReadonly="true"></fc-textarea>
    <div style="margin-left: 63px;">大文本框：fcPlaceHolder="请输入"/大文本框默认内容</div>
  </div>
</fc-layoutcol>
  `
  //disabledview
  disabledview : string = `
  <div fccontent>
  <fc-layoutcol fccontent>
    <div fccontent1>
      <form nz-form>
        <fc-switch fcCheckValue="Y" fcLabel="开关label" fcOption='[{"label":"是","value":"Y"},{"label":"否","value":"N"}]' name="11"></fc-switch>
        <div style="margin-left:83px;">开关：fcCheckValue="Y"/Y是关闭,N是开启和fcOption配合使用</div>
        <fc-any [(ngModel)]="anyValue" fcLabel="下拉单选对象label" [fcOption]="anyOptions" name="12"></fc-any>
        <div style="margin-left:36px;">下拉单选对象：[fcOption]="anyOptions" [(ngModel)]="anyValue"/其中anyValue、anyOptions</div>
        <fc-check [(ngModel)]="checkValue" fcLabel="多选框label" [fcOption]="checkOptions" name="13"></fc-check>
        <div style="margin-left:36px;">下拉单选对象：[fcOption]="anyOptions" [(ngModel)]="anyValue"</div>
        <fc-chosen [(ngModel)]="chosenValue" fcLabel="下拉多选label" [fcOption]="chosenOptions" name="14"></fc-chosen>
        <div style="margin-left: 62px;">下拉多选:[(ngModel)]="chosenValue"[fcOption]="chosenOptions" /其中chosenValue、chosenOptions是配置参数</div>
        <fc-combo [(ngModel)]="comboValue" fcLabel="下拉单选label" fcRequired="true" [fcOption]="comboOptions" name="15"></fc-combo>
        <div style="margin-left: 59px;">下拉单选：[(ngModel)]="comboValue"[fcOption]="comboOptions"/其中comboValue、comboOptions是配置参数s </div>
        <fc-date [(ngModel)]="now" fcLabel="日期label" name="16"></fc-date>
        <div style="margin-left: 82px;">年月：[(ngModel)]="now"</div>
        <fc-datetime [(ngModel)]="now" fcLabel="时间日期label" name="17"></fc-datetime>
        <div style="margin-left: 47px;">年月日时间：[(ngModel)]="now"</div>
        <fc-double [(ngModel)]="inputNumber" fcLabel="数值label" name="18"></fc-double>
        <div style="margin-left: 82px;">数值：[(ngModel)]="inputNumber"/inputNumber是配置参数</div>
      </form>
    </div>
    <div fccontent2>
      <fc-long [(ngModel)]="inputNumber" fcLabel="整数label"></fc-long>
      <div style="margin-left:83px;">整数：[(ngModel)]="inputNumber"/inputNumber是配置参数</div>
      <fc-many [(ngModel)]="manyValue" fcLabel="下拉多选对象label" fcAppid="SYSAPP" fcFieldCode="ENABLECACHE" fcValueCode='DICVALUE'
        fcLabelCode='DICDESC'></fc-many>
        <div style="margin-left:39px;">下拉多选对象：[(ngModel)]="manyValue"  元数据：fcAppid="SYSAPP"、元数据字段：fcFieldCode="ENABLECACHE"、元数据值：fcValueCode='DICVALUE'/manyValue是配置参数</div>
      <fc-radio fcAppid="SYSAPP" fcFieldCode="ENABLECACHE" [(ngModel)]="radioValue" fcValueCode='DICVALUE' fcLabelCode='DICDESC'></fc-radio>
      <div style="margin-left: 62px;">单选按钮：配置元数据fcAppid="SYSAPP" fcFieldCode="ENABLECACHE" [(ngModel)]="radioValue" fcValueCode='DICVALUE' fcLabelCode='DICDESC'/其中radioValue是自定义</div>
      <fc-text fcPlaceHolder="请输入" fcDisabled="true" fcLabel="文本框label" [(ngModel)]="content"></fc-text>
      <div style="margin-left: 40px;">文本框：fcPlaceHolder="请输入"/文本框默认内容</div>
      <fc-textarea fcPlaceHolder="请输入" fcDisabled="true" fcLabel="大文本框label" [(ngModel)]="content"></fc-textarea>
      <div style="margin-left: 63px;">大文本框：fcPlaceHolder="请输入"/大文本框默认内容</div>
    </div>
  </fc-layoutcol>
</div>
  `
  //basicjs
  basicjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'adform',
    templateUrl: './adform.component.html',
    styleUrl:'./adform.component.css'
  })
  export class AdformComponent{
    formConfig: FcadformOption = { fcTitle: "元数据编辑" };
    radioValue: string = 'a';
    anyValue: any = { "label": "A", "value": "a", "disabled": false };
    anyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
    manyValue: any[] = [{ "label": "A", "value": "a", "disabled": false }];
    checkValue: string = 'a';
    checkOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
    chosenValue: string = 'a';
    chosenOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
    comboValue: string = 'a';
    comboOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
    now = new Date();
    inputNumber: number = 3;
    content:string="这是文本框内容";
  }
  `
  formConfig: FcadformOption = { fcTitle: "元数据编辑" };
  radioValue: string = 'a';
  anyValue: any = { "label": "A", "value": "a", "disabled": false };
  anyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  manyValue: any[] = [{ "label": "A", "value": "a", "disabled": false }];
  checkValue: string = 'a';
  checkOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  chosenValue: string = 'a';
  chosenOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  comboValue: string = 'a';
  comboOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  now = new Date();
  inputNumber: number = 3;
  content:string="这是文本框内容";
  constructor(public mainService: ComponentService) {
    super('FCADFORM', mainService);
  }
}