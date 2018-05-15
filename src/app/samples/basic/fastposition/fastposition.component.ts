import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'fastposition',
  templateUrl: './fastposition.component.html',
  styles: [`
    .blue{
      background:blue;
      height:200px;
    }
    .gre{
      background:#ccc;
      height:200px;
    }
    .black{
      background:#000;
      height:200px;
    }
    .pink{
      background:pink;
      height:200px;
    }
  `]
})
export class FastpositionComponent extends ComponentParent {
  //最基本basicview
  basicview : string = `
<!-- 快速定位 -->
<fc-layoutcol fcSpans="9,1" fccontent>
        <fc-layoutpanel fccontent1>
        <!-- 组件内容开始 -->
            <fc-layoutcol fccontent fcSpans="1">
                <fc-layoutgroup id="id0" fcTitle="第一部分" fccontent1  class="blue">
                        <div fccontent class="blue"></div>   
                </fc-layoutgroup>
                <fc-layoutgroup id="id1" fcTitle="第二部分" fccontent1  class="blue">
                        <div fccontent class="gre"></div>   
                </fc-layoutgroup>
                <fc-layoutgroup id="id2" fcTitle="第三部分" fccontent1  class="blue">
                        <div fccontent class="black"></div>   
                </fc-layoutgroup>
                <fc-layoutgroup id="id3" fcTitle="第四部分" fccontent1  class="blue">
                        <div fccontent class="pink"></div>   
                </fc-layoutgroup>
            </fc-layoutcol>
        <!-- 组件内容结束 -->
        </fc-layoutpanel>
        <div class="fastposition-content" fccontent2>
        <fc-fastposition [fcLinks]="
        [
        {href:'id0','label':'第一部分'},
        {href:'id1','label':'第二部分'},
        {href:'id2','label':'第三部分'},
        {href:'id3','label':'第四部分'}
        ]">
        </fc-fastposition>
        </div>
</fc-layoutcol>
<!-- 快速定位结束 -->
  `
//基础css
basicstyle : string = `
.blue{
  background:blue;
  height:200px;
}
.gre{
  background:#ccc;
  height:200px;
}
.black{
  background:#000;
  height:200px;
}
.pink{
  background:pink;
  height:200px;
}
`  
  //基础js
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'fastposition',
    templateUrl: './fastposition.component.html',
    styleUrl:'./fastposition.component.css'
  })
  export class FastpositionComponent{
  }
  `
  constructor(public mainService: ComponentService) {
    super('FCFASTPOSITION', mainService);
  }
}
