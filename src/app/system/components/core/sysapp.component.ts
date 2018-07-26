import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { SysappService } from '../../services/sysapp.service';
import { NzModalService } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
import { ParentlistComponent } from 'fccomponent';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'sysapp',
  templateUrl: './sysapp.component.html',
  styles: [`
  .sys-card-btn{
    width:25%;
  }
  `]
})
export class SysappComponent extends ParentlistComponent {
  //元数据
  sysApps: any[];
  //明细操作按钮
  btnlistOnes: any[];
  //更多的按钮
  btnlistMores: any[];
  //字母查找
  fastsearchWords: any[];
  constructor(public mainService: SysappService,
    public router: Router,
    public activeRoute: ActivatedRoute, private modal: NzModalService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    this.searchByWord();
    this.fastsearchWords = this.mainService.fastSearch();
    this.btnlistOnes = this.mainService.appButtons.filter(btn =>
      btn.BTNTYPE === 'LISTONE'
    );
    this.btnlistMores = this.btnlistOnes.splice(3);
    this.btnlistOnes = this.btnlistOnes.splice(0, 2);
  }
  getDefaultQuery() {
    return {
      ENABLE: 'Y',
      WHERE: ' AND 1=1'
    }
  }
  //点击的首字母查询
  searchWord: any[] = [];
  /**
   * @param eventName 事件名称
   * @param context 事件返回参数
   */
  event(eventName: string, event: FCEVENT): void {
    this.searchWord.push(event.param.ACTCODE);
    if (event.param.BUSTYPE === 'fastsearch' &&
      (event.param.ACTCODE !== this.searchWord[this.searchWord.length - 1] || this.searchWord.length === 1)) {
      this.searchByWord(event.param);
    } else {
      this.searchByWord();
    }
  }
  /**
  * 初始化元数据
  */
  searchByWord(btn?: any) {
    let valueObj: any = {};
    if (btn) {
      valueObj.WHERE = "AND SUBSTR(APPID,0,1)='" + btn.ACTCODE + "'"
    }
    this.mainService.findWithQuery(valueObj).subscribe(result => {
      if (result.CODE === '0') {
        this.sysApps = result.DATA;
      }
    });
  }
  /**
   * 跳转到编辑页面
   * @param event 
   */
  listEdit(event: FCEVENT) {
    let selectedObj: any = event;
    if (selectedObj && selectedObj !== null) {
      this.cacheService.setS(this.appId + "DATA", this.commonService.cloneArray(this.sysApps));
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
        event.stopPropagation();
        event.preventDefault();
        break;
      case 'listOneEdit'://明细修改
        this.listEdit(item);
        event.stopPropagation();
        event.preventDefault();
        break;
      case 'listOneHelp'://明细帮助
      event.stopPropagation();
      event.preventDefault();
        break;
    }
  }
  /**
   * 单条删除
   */
  listOneDelete() {
    this.messageService.confirm('请确认该元数据没有在其它地方使用后再删除!', () => {

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
