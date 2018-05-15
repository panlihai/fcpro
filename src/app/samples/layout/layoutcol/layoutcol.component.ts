import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'layoutcol',
  templateUrl: './layoutcol.component.html',
  styles: [`
  .first{
    height:200px;
    background-color:#E6F7FF;
  }
  .second{
    height:200px;
    background-color:#BAE7FF;
  }
  .third{
    height:100px;
    background-color:#d3adf7;
  }
  .four{
    height:70px;
    background-color:#9254de;
  }
  .five{
    height:70px;
    background-color:#9254de;
  }
  .six{
    height:180px;
    background-color:#722ed1;
  }
  `]
})
export class LayoutcolComponent extends ComponentParent {
  //customview
  customview : string = `
  <div fccontent>
    <fc-layoutcol fcSpans="8,2">
        <div class="first" fccontent1></div>
        <div class="second" fccontent2></div>
    </fc-layoutcol>
  </div>
  `
  //basicview
  basicview : string = `
  <div fccontent>
    <fc-layoutcol fcSpans="1,1">
        <div class="first" fccontent1>
        </div>
        <div class="second" fccontent2>
        </div>
    </fc-layoutcol>
 </div>
  `
  //newlineview
  newlineview : string = `
  <div fccontent>
    <fc-layoutcol fcSpans="8,2">
      <div style="height:400px;background-color:#f0f5ff;" fccontent1>
      </div>
      <div style="height:400px;background-color:#d6e4ff;" fccontent2>
      </div>
      <div style="height:400px;background-color:#adc6ff;" fccontent1>
      </div>
      <div style="height:400px;background-color:#85a5ff;" fccontent2>
      </div>
      <div style="height:400px;background-color:#597ef7;" fccontent1>
      </div>
      <div style="height:400px;background-color:#40a9ff;" fccontent2>
      </div>
    </fc-layoutcol>
  </div>
  `
  //basicstyle
  basicstyle : string = `
  .first{
    height:200px;
    background-color:#E6F7FF;
  }
  .second{
    height:200px;
    background-color:#BAE7FF;
  }
  `
  //flowstyle
  flowstyle : string = `
  .first{
    height:200px;
    background-color:#E6F7FF;
  }
  .second{
    height:200px;
    background-color:#BAE7FF;
  }
  .third{
    height:100px;
    background-color:#d3adf7;
  }
  .four{
    height:70px;
    background-color:#9254de;
  }
  .five{
    height:70px;
    background-color:#9254de;
  }
  .six{
    height:180px;
    background-color:#722ed1;
  }
  `
  //basicjs
  basicjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'layoutcol',
    templateUrl: './layoutcol.component.html',
    styleUrl:'./layoutcol.component.css'
  })
  export class LayoutcolComponent{
  
  }
  `
  constructor(public mainService: ComponentService) {
    super('FCLAYOUTCOL', mainService);
  }
}