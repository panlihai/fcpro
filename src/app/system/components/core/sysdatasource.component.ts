import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, ParentlistComponent } from 'fccomponent';
import { SysdatasourceService } from '../../services/sysdatasource.service';
import { FCEVENT } from 'fccomponent/fc';
import { Sysappbuttons } from 'fccore';
// import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
(window as any).global = window;
@Component({
  selector: 'sysdatasource',
  templateUrl: './sysdatasource.component.html',
  styles: [`
  .sys-card-btn{
    width:25%;
  }
  `]
})
export class SysdatasourceComponent extends ParentlistComponent {
  //字母查找
  sysLookUp: any[];
  //数据源
  pageList: any[];
  //明细操作按钮
  btnlistOnes: any[];
  //更多的按钮
  btnlistMores: any[];
  //产品
  product: string;
  //产品下拉
  productOptions: any[] = [];
  //没有任何内容
  noResult: boolean;
  constructor(public mainService: SysdatasourceService,
    public router: Router,
    public activeRoute: ActivatedRoute,
  ) {
    super(mainService, router, activeRoute);

  }
  init(): void {
    //初始化数据源
    this.initData(this.product);
    //每个卡片的操作按钮,取列表工具栏的明细按钮,默认显示前两个,超出的显示到更多操作里
    this.btnlistOnes = this.mainService.appButtons.filter(btn =>
      btn.BTNTYPE === 'LISTONE'
    );
    //更多的按钮
    this.btnlistMores = this.btnlistOnes.splice(3);
    //截取前两个按钮
    this.btnlistOnes = this.btnlistOnes.splice(0, 2);
  }
  ngOnInit() {
    //产品下拉
    this.mainService.getproduct().subscribe(result => {
      if (result.P_LISTVALUE && result.P_LISTVALUE.length !== 0) {
        result.P_LISTVALUE.forEach(item => {
          //转换成下拉识别的对象
          this.productOptions.push({ icon: item.ICON, label: item.PNAME, value: item.PID })
        });
      }
    })
  }
  getDefaultQuery() {

  }

  /**
   * 主对象的事件
   * @param eventName 事件名 
   * @param context 返回参数
   */
  event(eventName: string, context: any): void {
    switch (eventName) {

    }
  }


  /**
   * 初始化数据源
   */
  initData(product: string) {
    //根据后端接口查询数据源
    this.mainService.findWithQuery({ PID: this.product }).subscribe(result => {
      this.pageList = result.P_LISTVALUE;
    });
  }
  /**
  * 跳转到编辑页面
  * @param event 
  */
  listEdit(event: FCEVENT) {
    //选中的对象
    let selectedObj: any = event;
    if (selectedObj && selectedObj !== null) {
      //把卡片的数据放入缓存中
      this.cacheService.setS(this.appId + "DATA", this.commonService.cloneArray(this.pageList));
      //把id带入到编辑页面
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
        //阻止冒泡
        event.stopPropagation();
        event.preventDefault();
        break;
      case 'listOneEdit'://明细修改
        this.listEdit(item);
        //阻止冒泡
        event.stopPropagation();
        event.preventDefault();
        break;
      case 'listOneHelp'://明细帮助
        //阻止冒泡
        event.stopPropagation();
        event.preventDefault();
        break;
    }
  }
  /**
    * 选择产品
    * @param event 
    */
  chooseProduct(event: any) {
    this.initData(event);
  }
  /**
   * 单条删除
   */
  listOneDelete() {
    this.messageService.confirm('请确认该数据源没有在其它地方使用后再删除!', () => {

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
    //阻止冒泡
    event.stopPropagation();
    event.preventDefault();
  }
  /**
   * 下载
   */
  download() {
    this.messageService.message("下载功能正在开发中，敬请期待！");
    //阻止冒泡
    event.stopPropagation();
    event.preventDefault();
  }
  /**
   * 评论
   */
  evaluate() {
    this.messageService.message("评论功能正在开发中，敬请期待！");
    //阻止冒泡
    event.stopPropagation();
    event.preventDefault();
  }
  /**
   * 统计
   */
  count() {
    this.messageService.message("统计功能正在开发中，敬请期待！");
    //阻止冒泡
    event.stopPropagation();
    event.preventDefault();
  }
}
