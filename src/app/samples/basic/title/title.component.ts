import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styles: [``]
})
export class TitleComponent extends ComponentParent {
   //大小
   sizeview: string = `
   <fc-title fcLabel="这是一个标题" fcSize="small"></fc-title>
   <fc-title fcLabel="这是一个标题" fcSize="default"></fc-title>
   <fc-title fcLabel="这是一个标题" fcSize="large"></fc-title>
   `
   //positionview
   positionview : string = `
   <fc-title fcLabel="债权清收登记" fcLayout="center" fcheader>
        <div class="subtitle" fcsubtitle>
        <div class="subtitle-item">
            <label>单位:</label>
            <span>上海</span>
        </div>
        <div class="subtitle-item">
            <label>部门:</label>
            <span>财务科</span>
        </div>
        <div class="subtitle-item">
            <label>登记人:</label>
            <span>王五</span>
        </div>
        <div class="subtitle-item">
            <label>登记日期:</label>
            <span>2017年12月25日</span>
        </div>
        <div class="subtitle-item">
            <label>收款单状态:</label>
            <fc-tag fcTitle="未提交" fcColor="blue"></fc-tag>
        </div>
    </div>
  </fc-title>
   `
    //基础js
    basicjs: string = `
    import { Component, OnInit } from '@angular/core';
    @Component({
      selector: 'app-title',
      templateUrl: './title.component.html',
      styleUrl:'./title.component.css'
    })
    export class TitleComponent{
      }
    `
    //subtitlejs
    subtitlejs : string = `
    import { Component, OnInit } from '@angular/core';
    @Component({
      selector: 'title',
      templateUrl: './title.component.html',
      styleUrl:'./title.component.css'
    })
    export class TitleComponent{
      _subtitle = [{ label: '单位', content: '上海' }, { label: '部门', content: '财务科' }, { label: '登记人', content: '王五' }, { label: '登记日期', content: '2017年12月25日' }];
      constructor(public mainService: ComponentService) {
        super('FCTITLE', mainService);
      }
    }
    `
  //副标题
  _subtitle = [{ label: '单位', content: '上海' }, { label: '部门', content: '财务科' }, { label: '登记人', content: '王五' }, { label: '登记日期', content: '2017年12月25日' }];
  constructor(public mainService: ComponentService) {
    super('FCTITLE', mainService);
  }
}