import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, ParentlistComponent } from 'fccomponent';
import { SysproductService } from '../../services/sysproduct.service';
import { FCEVENT } from 'fccomponent/fc';
import { environment } from '../../../../environments/environment.prod';
@Component({
  selector: 'sysproduct',
  templateUrl: 'sysproduct.component.html',
  styles: [`
  .sys-card-btn{
    width:25%;
  }
  `]
})
export class SysproductComponent extends ParentlistComponent {
  //产品数据
  sysProducts: any[];
  //字母查找
  sysLookUp: any[];
  //明细操作按钮
  btnlistOnes: any[];
  //更多的按钮
  btnlistMores: any[];
  constructor(public mainService: SysproductService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    this.initPproduct();
    this.btnlistOnes = this.mainService.appButtons.filter(btn =>
      btn.BTNTYPE === 'LISTONE'
    );
    this.btnlistMores = this.btnlistOnes.splice(2);
    this.btnlistOnes = this.btnlistOnes.splice(0, 2);
  }

  getDefaultQuery() {

  }
  /**
   * 初始化产品
   */
  initPproduct() {
    this.mainService.findWithQuery({}).subscribe(result => {
      this.sysProducts = result.P_LISTVALUE;
    });
  }
  /**
   * 
   * @param eventName 
   * @param context 
   */
  event(eventName: string, context: any): void {
    switch (eventName) {
    }
  }
  /**
  * 跳转到编辑页面
  * @param event 
  */
  listEdit(event: FCEVENT) {
    let selectedObj: any = event;
    if (selectedObj && selectedObj !== null) {
      this.cacheService.setS(this.appId + "DATA", this.commonService.cloneArray(this.sysProducts));
      this.navRouter(this.getRouteUrl('Edit'), { ID: selectedObj.ID, refresh: 'Y' });
    }
  }
  /**
   * 按钮明细
   * @param event 
   */
  btnCardEvent(event: any, item: any) {
    switch (event.ACTCODE) {
      case 'listOneDelete'://明细删除
        this.listOneDelete();
        break;
      case 'listOneEdit'://明细修改
        this.listEdit(item);
        break;
      case 'listOneHelp'://明细帮助
        break;
    }
  }
  /**
   * 单条删除
   */
  listOneDelete() {
    this.messageService.confirm('请确认产品没有在其它地方使用后再删除!', () => {

    }, () => { })
  }
  /**
   * 导入
   */
  import() {

  }
  /**
   * 点赞
   */
  thumbUp() {
    this.messageService.message("点赞功能正在开发中，敬请期待！");
    event.stopPropagation();
    event.preventDefault();
  }
  /**
   * 下载
   */
  download() {
    this.messageService.message("下载功能正在开发中，敬请期待！");
    event.stopPropagation();
    event.preventDefault();
  }
  /**
   * 评论
   */
  evaluate() {
    this.messageService.message("评论功能正在开发中，敬请期待！");
    event.stopPropagation();
    event.preventDefault();
  }
  /**
   * 统计
   */
  count() {
    this.messageService.message("统计功能正在开发中，敬请期待！");
    event.stopPropagation();
    event.preventDefault();
  }
}
