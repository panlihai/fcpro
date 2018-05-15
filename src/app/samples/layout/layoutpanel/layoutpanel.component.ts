import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'layoutpanel',
  templateUrl: './layoutpanel.component.html',
  styles: [`
  .header{
    height:40px;
    line-height:40px;
    background-color:#ccc;
  }
  .content{
    height:400px;
    background-color:#8f9ba2;
  }
  .footer{
    height:80px;
    background-color:#855d5d;
  }
  `]
})
export class LayoutpanelComponent extends ComponentParent {
  //basicview
  basicview : string = `
  <fc-layoutpanel>
    <div  fcheader>面板的标题</div>
    <div fctoolbar>
      <fc-button fcLabel="新增"></fc-button>
      <fc-button fcLabel="修改"></fc-button>
      <fc-button fcLabel="保存"></fc-button>
      <fc-button fcLabel="删除"></fc-button>
    </div>
    <div class="content" fccontent>面板的内容区</div>
    <div class="footer" fccontent>面板的底部区</div>
  </fc-layoutpanel>
  `
  //basicstyle
  basicstyle : string = `
  .header{
    height:40px;
    line-height:40px;
    background-color:#ccc;
  }
  .content{
    height:400px;
    background-color:#8f9ba2;
  }
  .footer{
    height:80px;
    background-color:#855d5d;
  }
  `
  //基础js
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'layoutpanel',
    templateUrl: './layoutpanel.component.html',
    styleUrl:'./layoutpanel.component.css'
  })
  export class LayoutpanelComponent{
  
  }
  `
  constructor(public mainService: ComponentService) {
    super('FCLAYOUTPANEL', mainService);
  }
}