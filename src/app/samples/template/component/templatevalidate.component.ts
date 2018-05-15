import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentService } from '../../services/component.service';
import { ParentEditComponent, TimelineOptions } from 'fccomponent';
import { Sysappfields } from 'fccore';
import { ComponentParent } from '../../componentparent';
@Component({
  selector: 'templatevalidate',
  templateUrl: './templatevalidate.component.html',
  styles: [`
  .templatevalidate{

  }
  `]
})
export class TemplatevalidateComponent {
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
  radioOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  //数值
  doubleValue: number = 5.5;
  //整数
  longValue: number = 5;
  //评分
  rateValue: number = 5;
  //基本时间轴
  timeline1: TimelineOptions = {
    fcAppid: '',
    fcLabelCode: 'label',
    fcTitleCode: 'title',
    fcSmarkCode: 'smark',
    fcColorCode: 'color'
  };
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
  mainObj: any = {};
  mainApp: any;
  appId: string = "SYSCOMPONENT";
  // 页面配置对象
  mainValid: any = {};
  constructor(public mainService: ComponentService, public router: Router, public activedRoute: ActivatedRoute) {
    this.mainApp = this.mainService.appService.getAppById(this.appId);
    this.mainObj = this.mainService.appService.initObjDefaultValue(this.mainApp);
    let fields: Sysappfields[] = this.mainService.appService.getFormFieldsByApp(this.mainApp);
    fields.forEach(field => {
      let validate: any = {};
      let _validate: any = {};
      _validate.show = 'N';
      _validate.showValidator = "";
      _validate.validators = {
        "required": field.ISNULL === 'N',
        "maxLength": field.LENGTH,
        "customVal": true
      };
      _validate.errorMessages = {
        "required": field.FIELDNAME + "不能为空.",
        "maxLength": "最大输入字数不能超过" + field.LENGTH + "字.",
        "customVal": "自定义验证dddddddddddd",
      };
      _validate.fieldCode = field.FIELDCODE;
      validate[field.FIELDCODE] = _validate;
      this.mainValid[field.FIELDCODE] = JSON.stringify(_validate);
    });

    let fieldValid = JSON.parse(this.mainValid.ENABLE);
    fieldValid.validators.customVal = true;
    fieldValid.errorMessages.customVal = '自定义验证提示内容';
  }
  /**
   * 验证
   */
  validator() {
    let v: boolean = true;
    Object.keys(this.mainValid).forEach(key => {
      let validator = JSON.parse(this.mainValid[key]);
      //当前主对象的字段值
      let value = this.mainObj[validator.fieldCode];
      // 当前主对象的校验规则
      let valid = validator.validators;
      // 当前主对象校验规则错误说明
      let message = validator.errorMessages;
      // 判断是否必填
      if (valid.required && value.length === 0) {
        validator.show = 'Y';
        validator.showValidator = "required";
        v = false;
      } else if (value.length > valid.maxLength) {
        validator.show = 'Y';
        validator.showValidator = "maxLength";
        v = false;
      } else if (valid.customVal) {
        validator.show = 'Y';
        validator.showValidator = "customVal";
        v = false;
      }
      this.mainValid[key] = JSON.stringify(validator);
    });
    return v;
  }
  /**
  * 保存
  * @param action 事件名称
  */
  cardSave(action: string): void {

  }
  tlbformEvent(event) {
    switch (event.eventName) {
      case 'cardSave':// 点击保存验证
        if (this.validator()) {
          this.cardSave(event.eventName);
        }
        break;
    }
  }

  doAction() {

  }
}