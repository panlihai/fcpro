import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
import { ParentlistComponent } from 'fccomponent';
import { SysappService } from '../../services/sysapp.service';
@Component({
  selector: 'sysapp',
  templateUrl: './sysapp.component.html',
  styles: [`
  .sys-card-btn{
    width:25%;
  }
  .sys-fast-list {
    cursor: pointer;
  }
 
  `]
})
export class SysappComponent extends ParentlistComponent {
  //元数据
  pageList: any[];
  //明细操作按钮
  btnlistOnes: any[];
  //更多的按钮
  btnlistMores: any[];
  //字母查找
  fastsearchWords: any[];
  //数据源
  datasource: string;
  //产品
  product: string;
  //点击的首字母查询,高亮当前的字母并根据点击字母过滤,再点击当前字母,取消高亮并查询所有的数据
  searchWord: string = '';
  //没有任何内容
  noResult: boolean;
  //产品下拉
  productOptions: any[];
  //拖拽的event
  EventUtil: any = {
    //添加事件处理程序
    addHandler: (element, type, handler) => {
      if (element.addEventListener) {
        element.addEventListener(type, handler, false);
      } else if (element.attachEvent) {
        element.attachEvent("on" + type, handler);
      } else {
        element["on" + type] = handler;
      }
    },
    //获取事件对象
    getEvent: (event) => {
      return event ? event : window.event;
    },
    //获取事件的目标
    getTarget: (event) => {
      return event.target || event.srcElement;
    },
    //取消默认事件
    preventDefault: (event) => {
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    }
  }
  constructor(public mainService: SysappService,
    public router: Router,
    public activeRoute: ActivatedRoute, private modal: NzModalService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    this.btnlistOnes = this.mainService.appButtons.filter(btn => btn.BTNTYPE === 'LISTONE');
    this.btnlistMores = this.btnlistOnes.splice(3);
    this.btnlistOnes = this.btnlistOnes.splice(0, 2);
    this.fastsearchWords = this.mainService.fastSearch();
    //产品下拉
    this.mainService.getproduct().subscribe(result => {
      if (result.P_LISTVALUE && result.P_LISTVALUE.length !== 0) {
        this.productOptions = [];
        result.P_LISTVALUE.forEach(item => {
          //转换成下拉识别的对象
          this.productOptions.push({ icon: item.ICON, label: item.PNAME, value: item.PID })
        });
      }
    })
  }
  ngOnInit() {
    //初始化数据
    if (this.product !== undefined && this.product !== null && this.product !== ''
      && this.datasource !== undefined && this.datasource !== null && this.datasource !== '') {
      this.initData(this.product, this.datasource);
    } else {
      //默认没有查询到数据
      this.noResult = true;
    }
    //26个字母name,方法名,BUSTYPE为'fastsearch' 
    this.fastsearchWords = this.mainService.fastSearch();
    //每个卡片的操作按钮,取列表工具栏的明细按钮,默认显示前两个,超出的显示到更多操作里
    this.btnlistOnes = this.mainService.appButtons.filter(btn =>
      btn.BTNTYPE === 'LISTONE'
    );
    //更多的按钮
    this.btnlistMores = this.btnlistOnes.splice(3);
    //截取前两个按钮
    this.btnlistOnes = this.btnlistOnes.splice(0, 2);
  }
  getDefaultQuery() {
    return {
      //默认查询启用的
      ENABLE: 'Y',
      WHERE: ' AND 1=1'
    }
  }
  /**
   * @param eventName 事件名称
   * @param context 事件返回参数
   */
  event(eventName: string, event: FCEVENT): void {

  }
  /**
   * 初始化数据，根据产品、数据源过滤元数据
   * @param product 
   * @param datasource 
   */
  initData(product: string, datasource: string) {
    this.mainService.findWithQuery({ APPMODEL: product, DATASOURCE: datasource })
      .subscribe(result => {
        if (result.CODE === '0') {
          this.pageList = result.DATA;
          //当没有数据时，显示文字提示
          if (this.pageList.length === 0) {
            this.noResult = true;
          } else {
            this.noResult = false;
          }
        }
      });
  }

  /**
    * 快速查询
    * @param item 
    */
  fastSearch(item: any) {
    //当页面按钮的类型为fastsearch时
    if (item.BUSTYPE === 'fastsearch') {
      // 点击的首字母查询,高亮当前的字母并根据点击字母过滤,再点击当前字母,取消高亮并查询所有的数据
      if (this.searchWord === item.ACTCODE) {
        this.searchWord = '';
        this.searchByWord();
      } else {
        this.searchWord = item.ACTCODE;
        this.searchByWord(item);
      }
    }
  }
  /**
  * 初始化元数据
  */
  searchByWord(btn?: any) {
    //查询数据的对象
    let valueObj: any = {};
    //如果点击了首字母搜索的按钮,则根据APPID的首字母查询
    if (btn) {
      //从0开始截取第一个字符
      valueObj.WHERE = "AND SUBSTR(APPID,0,1)='" + btn.ACTCODE + "' " + "AND APPMODEL='" + this.product + "' " + "AND DATASOURCE='" + this.datasource + "'"
    }
    //根据首字母查询数据,如果没有点击按钮或者再次点击按钮,则查询所有的数据
    this.mainService.findWithQuery(valueObj).subscribe(result => {
      if (result.CODE === '0') {
        this.pageList = result.DATA;
      }
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
   * 跳转到选择数据源页面
   * @param event 
   */
  quickstart(event: FCEVENT) {
    this.navRouter(this.getRouteUrl('Modify'), event.param);
  }
  /* * 按钮明细
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
   * 单条删除
   */
  listOneDelete() {
    this.messageService.confirm('请确认该元数据没有在其它地方使用后再删除!', () => {
    }, () => { })
  }
  /**
   * 选择产品
   * @param event 
   */
  chooseProduct(event: any) {
    this.initData(event, this.datasource);
    let a = this.product;
  }
  /**
   * 选择数据源
   * @param event 
   */
  chooseDatasource(event: any) {
    this.initData(this.product, event);
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
