import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { FCEVENT } from 'fccomponent/fc';
import { NzModalService } from 'ng-zorro-antd';
import { EventEmitter } from 'events';
import { ProvidersService, Sysmenu } from 'fccore';
import { environment } from '../../../../environments/environment';
import { element } from 'protractor';
import { SysmenuService } from '../../services/sysmenu.service';
@Component({
    selector: 'sysmenu',
    template: `
  <fc-layoutpanel>
    <div fcheader>
      <fc-title fcLabel="导航"></fc-title>
      <P>
          说明：导航栏功能，提供终端用户获取功能、设置导航的层级关系。
      </P>
      <div class="sys-card-fast">
          <ul class="sys-fast-list">
              <li>
                  <fc-icon fcIcon="fc-icon-everyday" fcColor="#009DFF"></fc-icon>导入
              </li>
              <li>
                  <fc-icon fcIcon="fc-icon-definition" fcColor="#009DFF"></fc-icon>导出
              </li>
              <li>
                  <fc-icon fcIcon="fc-icon-update" fcColor="#009DFF"></fc-icon>帮助
              </li>
          </ul>
      </div>
    </div>
    <fc-layoutcol fcSpans="2,8" fccontent>
        <fc-combo [fcLabel]="'产品'" [fcOption]="productOption" [(ngModel)]="pid" (ngModelChange)="selectProduct($event)" fccontent1>
        </fc-combo>
        <fc-layoutcol fcSpans="8,2" fccontent2 class="navMenu">
            <div fccontent1 class="sys-menus" *ngIf="sysmenus.length!==0">
                <div>一级导航</div>
                <div class="secondMenu" *ngIf="secondMenusText===true">二级导航</div>
                <div class="thirdMenutext" *ngIf="thirdMenusText===true">三级导航</div>
            </div>
            <ul fccontent1 *ngFor="let sysmenu of sysmenus; let i = index" class="firstMenu">
                <li class="clearFloat">
                    <div class="sysmenu-first">
                        <span class="sysmenu" [ngClass]="{'menutype-app':sysmenu.MENUTYPE==='APP'}">{{sysmenu.MENUNAME}}</span>
                        <div class="arrow">
                            <i class="anticon anticon-arrow-up" (click)="changeSort(sysmenus[i],sysmenus[i-1],i,sysmenus)" *ngIf="i!==0"></i>
                            <i class="anticon anticon-arrow-down" (click)="changeSort(sysmenus[i+1],sysmenus[i],i+1,sysmenus)" *ngIf="i!==sysmenus.length-1"></i>
                        </div>    
                    </div> 
                    <fc-icon fcIcon="fc-icon-right" *ngIf="sysmenu.P_CHILDMENUS!==null&&sysmenu.P_CHILDMENUS!==undefined&&sysmenu.opened===false" class="openIcon" (click)="open(sysmenu)" fcSize="small" fcToolTip="展开" fcPosition="bottom"></fc-icon>
                    <fc-icon fcIcon="fc-icon-left" *ngIf="sysmenu.P_CHILDMENUS!==null&&sysmenu.P_CHILDMENUS!==undefined&&sysmenu.opened===true" class="closeIcon" (click)="close(sysmenu)" fcSize="small" fcToolTip="收起" fcPosition="bottom"></fc-icon>
                    <ul class="floatLeft" *ngIf="sysmenu.P_CHILDMENUS!==null&&sysmenu.P_CHILDMENUS!==undefined&&sysmenu.P_CHILDMENUS.length!==0&&sysmenu.opened===true">
                        <div  class="syssecondMenu" *ngFor="let sysscondMenu of sysmenu.P_CHILDMENUS; let i = index">
                            <li [ngClass]="{'menutype-app':sysscondMenu.MENUTYPE==='APP'}">
                                {{sysscondMenu.MENUNAME}}
                            </li>
                            <span [ngClass]="{'dragsecondMenu':sysscondMenu.MENUTYPE==='MENU'}"></span> 
                            <div class="arrow">
                                <i class="anticon anticon-arrow-up" *ngIf="i!==0" (click)="changeSort(sysmenu.P_CHILDMENUS[i],sysmenu.P_CHILDMENUS[i-1],i,sysmenu.P_CHILDMENUS)"></i>
                                <i class="anticon anticon-arrow-down" *ngIf="i!==sysmenu.P_CHILDMENUS.length-1"(click)="changeSort(sysmenu.P_CHILDMENUS[i+1],sysmenu.P_CHILDMENUS[i],i+1,sysmenu.P_CHILDMENUS)"></i>
                            </div>  
                            <ul *ngIf="sysscondMenu.P_CHILDMENUS!==null&&sysscondMenu.P_CHILDMENUS!==undefined&&sysscondMenu.P_CHILDMENUS.length!==0&&sysscondMenu.opened===true">
                                <div class="thirdMenu" *ngFor="let systhridMenu of sysscondMenu.P_CHILDMENUS; let i = index">
                                    <li [ngClass]="{'menutype-app':systhridMenu.MENUTYPE==='APP'}">
                                        {{systhridMenu.MENUNAME}}
                                    </li>
                                    <span [ngClass]="{'dragsecondMenu':systhridMenu.MENUTYPE==='MENU'}"></span> 
                                    <div class="arrow">
                                        <i class="anticon anticon-arrow-up" (click)="changeSort(sysscondMenu.P_CHILDMENUS[i],sysscondMenu.P_CHILDMENUS[i-1],i,sysscondMenu.P_CHILDMENUS)" *ngIf="i!==0"></i>
                                        <i class="anticon anticon-arrow-down" (click)="changeSort(sysscondMenu.P_CHILDMENUS[i+1],sysscondMenu.P_CHILDMENUS[i],i+1,sysscondMenu.P_CHILDMENUS)" *ngIf="i!==sysscondMenu.P_CHILDMENUS.length-1"></i>
                                    </div>    
                                </div>  
                                <span class="dragAreasecond"></span>               
                            </ul> 
                            <fc-icon fcIcon="fc-icon-right" *ngIf="sysscondMenu.P_CHILDMENUS!==null&&sysscondMenu.P_CHILDMENUS!==undefined&&sysscondMenu.opened===false" class="secondopenIcon" (click)="open(sysscondMenu)" fcSize="small" fcToolTip="展开" fcPosition="bottom"></fc-icon>
                            <fc-icon fcIcon="fc-icon-left" *ngIf="sysscondMenu.P_CHILDMENUS!==null&&sysscondMenu.P_CHILDMENUS!==undefined&&sysscondMenu.opened===true" class="secondcloseIcon" (click)="close(sysscondMenu)" fcSize="small" fcToolTip="收起" fcPosition="bottom"></fc-icon> 
                        </div> 
                        <span class="dragAreasecond"></span>                                  
                    </ul>
                </li>
            </ul>
            <span class="dragAreafirst" fccontent1 *ngIf="sysmenus.length!==0"></span>
            <div fccontent2 *ngIf="sysmenus.length!==0" class="functionMenu">
                <span>功能</span>
                <fc-button [fcType]="'primary'" fcLabel="+" fcSize="large"></fc-button>
            </div>
            <div fccontent2 class="menuButton" *ngIf="sysmenus.length!==0">
                <span>菜单</span>
                <fc-button [fcType]="'default'" fcLabel="+" fcSize="default"></fc-button>
            </div>
        </fc-layoutcol>
    </fc-layoutcol>
  </fc-layoutpanel>
  `,
    styles: [`
    .sys-menus {
        overflow: hidden;
    }
    .sysmenu{
        width: 150px;
        height: 30px;
        background-color: #F0F2F5;
        line-height: 30px;
        text-align: center;
        border-radius: 5px;
        display: inline-block;
    }
    .clearFloat{
        overflow:hidden;
        position: relative;
        margin-bottom: 10px;
    }
    .floatLeft{
        float:left;
        margin-left:68px;
        padding-bottom: 30px;
        margin-bottom: 10px;
    }
    .sysmenu-first{
        float:left; 
        position: relative;
    }
    .syssecondMenu{
        width: 150px;
        height: 30px;
        background-color: #F0F2F5;
        line-height: 30px;
        text-align: center;
        border-radius: 5px;
        margin-bottom: 10px;
        position: relative;
    }
    .menutype-app{
        background-color: #49a9ee;
        color:white;
        border-radius: 5px;
    }
    .sys-menus div{
        width: 100px;
        text-align: center;
        height: 30px;
        line-height: 30px;
        width: 150px;
        float: left;
        font-weight: bold;
    }
    .secondMenu {
        margin-left: 68px;
    }
    .dragAreafirst{
        position: absolute;
        width: 100%;
        height: 30px;
        border: 2px dashed #9d9d9d;
        border-radius: 3px;
        width: 150px;
        margin-bottom: 40px;
    }
    .dragAreasecond{
        position: absolute;
        width: 150px;
        height: 30px;
        border: 2px dashed #9d9d9d;
        border-radius: 3px;
    }
    .dragsecondMenu{
        position: absolute;
        width: 150px;
        height: 30px;
        border: 2px dashed #9d9d9d;
        border-radius: 3px;
        top: 0px;
        left: 200px;
    }
    .openIcon{
        float:left;
        margin-left:18px; 
        position: absolute;
        left:115px;
        top:6px;
        cursor: pointer;
    }
    .secondopenIcon{
        float:left;
        margin-left:18px; 
        position: absolute;
        left:115px;
        top:0px;
        cursor: pointer;
    }
    .openMenu{
        display: block;
    }
    .closeIcon{
        float:left;
        margin-left:18px;
        position: absolute;
        left:115px;
        top:6px;
        cursor: pointer;
    }
    .secondcloseIcon{
        float:left;
        margin-left:18px;
        position: absolute;
        left:115px;
        top:0px;
        cursor: pointer;
    }
    .showIcon{
        display: block;  
    }
    .menuButton{
        margin-top:20px;
    }
    .menuButton span{
        font-weight: bold;
    }
    :host ::ng-deep .menuButton .ant-btn{
        width:150px;
        height:30px;
    }
    .functionMenu{
        margin-top:30px;
    }
    .functionMenu span{
        font-weight: bold;
    }
    .arrow{
        text-align: center;
        height: 22px;
        position: absolute;
        top: 6px;
        right: -50px;
        width: 38px;
    }
    .anticon{
        font-size:14px;
    }
    :host ::ng-deep .functionMenu .ant-btn{
        width:150px;
        height:30px;
        background-color: #49a9ee;
        border: 1px solid #49a9ee;
    }
    .thirdMenutext {
        margin-left: 60px;
    }
    .thirdMenu[_ngcontent-c38] {
        float: left;
        background-color: #49a9ee;
        color: white;
        border-radius: 5px;
        left: 210px;
        position: absolute;
        top: 0px;
        width: 150px;
    }
  `]
})
export class SysmenuComponent extends ParentlistComponent {
    //产品下拉选项
    productOption: any[];
    //菜单
    sysmenus: any[];
    //pid
    pid: string;
    //二级导航文字显示
    secondMenusText: boolean = false;
    //三级导航文字显示
    thirdMenusText: boolean = false;
    constructor(public mainService: SysmenuService,
        public router: Router,
        private _providers: ProvidersService,
        private modalService: NzModalService,
        public activeRoute: ActivatedRoute) {
        super(mainService, router, activeRoute);
    }
    init(): void {
        this.sysmenus = [];
        //初始化产品
        this.getProduct();
    }
    getDefaultQuery() {
    }
    event(eventName: string, context: any): void {
    }
    /**
     * 获取软件产品的产品名称
     */
    getProduct() {
        this.mainService.getProduct().subscribe(res => {
            this.productOption = [];
            res.P_LISTVALUE.forEach(element => {
                //将获得的产品名称添加到下拉框中
                this.productOption.push({ icon: '', label: element.PNAME, value: element.PID });
            });
            if (this.routerParam.PID !== undefined && this.routerParam.PID !== '') {
                this.selectProduct(this.routerParam.PID);
            }
        })
    }
    /**
     * 获取菜单
     */
    getMenu(pid) {
        this.sysmenus = [];
        this.mainService.getMenu().subscribe((result: any[]) => {
            result.filter(item => item.PID === pid).forEach(item => {
                //一级菜单
                this.sysmenus = Object.assign([], this.sysmenus, item.P_CHILDMENUS);
            })
        })
    }
    /**
    * 选中某一个产品
    * @param value
    */
    selectProduct(value) {
        this.pid = value;
        this.getMenu(this.pid);
    }
    /**
    * 展开菜单
    * @param sysmenu
    */
    open(sysmenu) {
        sysmenu.opened = true;
        //显示二级导航文字
        this.secondMenusText = true;
        //显示三级导航文字
        this.thirdMenusText = true;
    }
    /**
    * 关闭菜单
    * @param sysmenu
    */
    close(sysmenu) {
        sysmenu.opened = false;
        //隐藏二级导航文字
        this.secondMenusText = false;
        //判断是否有二级导航展开状态
        this.mainService.isShow(this.sysmenus, this.secondMenusText);
        //隐藏三级导航文字
        this.thirdMenusText = false;
        //判断是否有三级导航展开状态
        this.mainService.isShow(this.sysmenus, this.thirdMenusText);
    }
    /**
    * 两个对象交换排序
    * @param menu1
    * @param menu2
    * @param index
    * @param menus
    */
    changeSort(menu1: Sysmenu, menu2: Sysmenu, index: number, menus) {
        this.mainService.changeSort(menu1, menu2, index, menus).subscribe(result => {
            if (result.CODE === '0') {
                this.mainService.messageService.success("交换成功");
            }
        })
    }

}