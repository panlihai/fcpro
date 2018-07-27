import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';
import { SysbizcodedefineService } from '../../../services/sysbizcodedefine.service';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'sysappmodaleventdialog',
  template: `
  <fc-layoutpanel class="sys-card-pannel">
  <div class="sys-card-pannel-header" fcheader>
      <fc-title fcLabel="数据源" class="sys-card-pannel-title" [fcHasLine]="false"></fc-title>
      <P class="sys-card-pannel-smarks">
          数据源：<fc-layoutpanel class="sys-card-pannel">
          <div class="sys-card-pannel-header" fcheader>
              <fc-title fcLabel="数据源" class="sys-card-pannel-title" [fcHasLine]="false"></fc-title>
              <P class="sys-card-pannel-smarks">
                  数据源：描述与模型的事件，呈现方式体现在按钮上，与属性及关系构成模型
              </P>
              <div class="sys-card-fast">
                  <ul class="sys-fast-list">
                      <li  (click)="handleCancel($event)"  *ngIf = "topbutton">
                              <fc-icon fcIcon="fc-icon-backtrack" fcColor="#009DFF"></fc-icon>关闭</li>
                  </ul>
              </div>
              <img class="sys-card-bg" src="assets/img/system-bg.png" />
          </div>
          <div class="sys-card-pannel-edit" fccontent>
              <!-- 基本信息 -->
              <fc-layoutcol fcSpans="1,1">
                  <fc-title fccontent1 fcLabel="基本信息" [fcHasLine]="false"></fc-title>
                   <fc-combo fccontent1 fcLabel="产品名称"  [fcOption]="scomDataItemOptions"  [(ngModel)]="mainObj.PID"
                   name="PID"  (ngModelChange)="componentEvents('ruleaddEvent',$event)" ></fc-combo>
                  <div fccontent1 class="sys-buttonpid">
                      <div fccontent class="sys-sqlaaid">{{mainObj.PID}}</div>
                      <fc-text fccontent fcLabel="数据源id" [fcAppid]="appId" fcFieldCode="DSID" [fcValid]="mainValid.DSID"  [(ngModel)]="mainObj.DSID" name="SYSDATASOURCE.DSID"></fc-text>                    
                  </div>
                  <fc-text fccontent1 fcLabel="数据源名称"  [fcAppid]="appId" fcFieldCode="DSNAME" [fcValid]="mainValid.DSNAME" [(ngModel)]="mainObj.DSNAME"  name="SYSDATASOURCE.DSNAME"></fc-text>
                  <div fccontent1 class="sys-tab">中文，配合id识别不同数据源</div>
                  <fc-layoutcol fccontent1 fcSpans="1,1">
                      <div fccontent1 class="sys-radio">
                          <fc-radio fccontent1 [(ngModel)]="mainObj.ENABLE" fcLabel="是否启用" [fcAppid]="appId" fcFieldCode="ENABLE" fcLabelCode="DICDESC"
                              fcValueCode="DICVALUE" name="ENABLE"></fc-radio>
                      </div>
                      <div fccontent2 class="sys-num">
                          <fc-long fccontent [(ngModel)]="mainObj.SORT" fcLabel="排序" fcPlaceHolder="请输入整数" name="SORT"></fc-long>
                      </div>
                  </fc-layoutcol>
                  <fc-textarea fccontent1 fcLabel="备注"  [(ngModel)]="mainObj.REMARK" name="SYSDATASOURCE.REMARK"></fc-textarea>
                  <div fccontent1 class="sys-tab">请输入少于200字</div>
              </fc-layoutcol>
              <!-- 数据源信息 -->
              <fc-layoutcol fcSpans="1,1">
                  <fc-title fccontent1  fcLabel="数据源信息" [fcHasLine]="false"></fc-title>
                  <fc-any fccontent1 fcLabel="数据源类型"  (ngModelChange)="componentEvents('ruletypeEvent',$event)" [fcAppid]="appId" fcFieldCode="DSTYPE" [(ngModel)]="mainObj.DSTYPE" fcLabelCode="DICDESC"
                      fcValueCode="DICVALUE" name="SYSPRODUCT.DSTYPE"></fc-any>
                  <div fccontent1 class="sys-tab">仅限关系型数据库</div>    
                  <fc-text fccontent1 fcLabel="请url" [fcAppid]="appId" fcFieldCode="URL" [(ngModel)]="mainObj.URL" name="SYSDATASOURCE.URL"></fc-text>
                  <div fccontent1 class="sys-tab">如：jdbc:oracle:thin:@127.0.0.1:1521:orcl</div>  
                  <fc-text fccontent1 fcLabel="数据源用户名" [fcAppid]="appId" fcFieldCode="USERNAME" [(ngModel)]="mainObj.USERNAME" name="SYSDATASOURCE.USERNAME"></fc-text>
                  <fc-text fccontent1 fcLabel="数据源密码" [fcAppid]="appId" fcFieldCode="PASSWORD" [(ngModel)]="mainObj.PASSWORD" name="SYSDATASOURCE.PASSWORD"></fc-text>
                  <div fccontent1 class="sys-tab">点击查看密码将记录日志，填写查看人的用户名密码查看；</div> 
              </fc-layoutcol>
              <!-- 其它信息 -->
              <fc-layoutcol fcSpans="1,1">
                  <fc-title fccontent1 fcLabel="其它信息" [fcHasLine]="false"></fc-title>
                  <div class="sys-choose-icon" fccontent1>
                      <fc-label fcLabel="数据源图标"></fc-label>
                      <div class="sys-choose-icon-box"  (click)="iconEvent($event)">
                              <fc-icon [fcIcon]="mainObj.ICON"  [(ngModel)]="mainObj.ICON" fcSize="large"></fc-icon>
                              <span *ngIf = "visible">选择字体图标</span>
                      </div>
                      <span class="sys-deleticon"  (click)="deleticonEvent($event)">x</span>
                  </div>
              </fc-layoutcol>
              <fc-layoutcol fcSpans="1,0">
                  <div fccontent1 style="padding-top:20px;padding-bottom:20px ; text-align:center;">
                          <div fccontent class="sys-button">
                                  <span fccontent>
                                          <fc-button  [fcType]="'primary'" fcLabel="保存" (click)="emitDataOutside($event)">
                                          </fc-button>
                                  </span>
                                  <span fccontent  *ngIf = "topbutton">
                                      <fc-button [fcType]="'default'" fcLabel="+模型"  (click)="btnCardAddModel($event)">
                                      </fc-button>
                                  </span>
                          </div> 
                      
                   </div>
              </fc-layoutcol>
          </div>
      </fc-layoutpanel>
      </P>
      <div class="sys-card-fast">
          <ul class="sys-fast-list">
              <li  (click)="servicelistEvent($event)"  *ngIf = "topbutton">
                      <fc-icon fcIcon="fc-icon-backtrack" fcColor="#009DFF"></fc-icon>查看服务</li>
              <li (click)="applistEvent($event)" *ngIf = "topbutton">
                      <fc-icon fcIcon="fc-icon-backtrack" fcColor="#009DFF"  ></fc-icon>查看模型</li>
              <li  (click)="backToList($event)">
                  <fc-icon fcIcon="fc-icon-backtrack" fcColor="#009DFF"></fc-icon>返回列表</li>
          </ul>
      </div>
      <img class="sys-card-bg" src="assets/img/system-bg.png" />
  </div>
  <div class="sys-card-pannel-edit" fccontent>
      <!-- 基本信息 -->
      <fc-layoutcol fcSpans="1,0">
          <fc-title fccontent1 fcLabel="基本信息" [fcHasLine]="false"></fc-title>
           <fc-combo fccontent1 fcLabel="模型名称"  [fcOption]="scomDataItemOptions"  [(ngModel)]="mainObj.PID"
           name="PID"  (ngModelChange)="componentEvents('ruleaddEvent',$event)" ></fc-combo>
          <div fccontent1 class="sys-buttonpid">
              <div fccontent class="sys-sqlaaid">{{mainObj.PID}}</div>
              <fc-text fccontent fcLabel="事件编码" fcPlaceHolder="按编码规则自动生成" [fcAppid]="appId" fcFieldCode="DSID" [fcValid]="mainValid.DSID"  [(ngModel)]="mainObj.DSID" name="SYSDATASOURCE.DSID"></fc-text>                    
          </div>
          <div fccontent1 class="sys-tab">与其关系名称,中文，如，元数据的属性</div>
          <fc-text fccontent1 fcLabel="事件名称"  fcPlaceHolder="请输入中文"  [fcAppid]="appId" fcFieldCode="DSNAME" [fcValid]="mainValid.DSNAME" [(ngModel)]="mainObj.DSNAME"  name="SYSDATASOURCE.DSNAME"></fc-text>
          <div fccontent1 class="sys-tab">被关联的模型名称</div>
          <fc-text fccontent1 fcLabel="操作代码"  fcPlaceHolder="请输入编码如addCard"  [fcAppid]="appId" fcFieldCode="DSNAME" [fcValid]="mainValid.DSNAME" [(ngModel)]="mainObj.DSNAME"  name="SYSDATASOURCE.DSNAME"></fc-text>
          <div fccontent1 class="sys-tab">前端操作的事件编码</div>
          <fc-layoutcol fccontent1 fcSpans="1,1">
              <div fccontent1 class="sys-radio">
                  <fc-radio fccontent1 [(ngModel)]="mainObj.ENABLE" fcLabel="是否启用" [fcAppid]="appId" fcFieldCode="ENABLE" fcLabelCode="DICDESC"
                  fcValueCode="DICVALUE" name="ENABLE"></fc-radio>
              </div>
              <div fccontent2 class="sys-num">
                  <fc-long fccontent [(ngModel)]="mainObj.SORT" fcLabel="排序" fcPlaceHolder="请输入整数" name="SORT"></fc-long>
              </div>
          </fc-layoutcol>
      </fc-layoutcol>
      <!-- 其它信息 -->
      <fc-layoutcol fcSpans="1,1">
          <fc-title fccontent1 fcLabel="其它信息" [fcHasLine]="false"></fc-title>
          <div class="sys-choose-icon" fccontent1>
              <fc-label fcLabel="数据源图标"></fc-label>
              <div class="sys-choose-icon-box"  (click)="iconEvent($event)">
                      <fc-icon [fcIcon]="mainObj.ICON"  [(ngModel)]="mainObj.ICON" fcSize="large"></fc-icon>
                      <span *ngIf = "visible">选择字体图标</span>
              </div>
              <span class="sys-deleticon"  (click)="deleticonEvent($event)">x</span>
          </div>
      </fc-layoutcol>
      <fc-layoutcol fcSpans="1,0">
          <div fccontent1 style="padding-top:20px;padding-bottom:20px ; text-align:center;">
                  <div fccontent class="sys-button">
                          <span fccontent>
                                  <fc-button  [fcType]="'primary'" fcLabel="保存" (click)="emitDataOutside($event)">
                                  </fc-button>
                          </span>
                          <span fccontent  *ngIf = "topbutton">
                              <fc-button [fcType]="'default'" fcLabel="+模型"  (click)="btnCardAddModel($event)">
                              </fc-button>
                          </span>
                  </div> 
              
           </div>
      </fc-layoutcol>
  </div>
</fc-layoutpanel>
    `,
  styles: [`
   .customize-footer{
     text-align:right;
   }
   .sys-tab{
    margin-left:26%;
  }
  `]
})
export class SysappmodaleventdialogComponent  {
  constructor(private modal: NzModalSubject, public mainService: SysbizcodedefineService) {
  }
  @Input()
  set options(option: any) {
  }
  
//确定按钮
emitDataOutside(ev){
  
}
// 取消按钮
handleCancel(e) {
  this.modal.destroy();
}
}