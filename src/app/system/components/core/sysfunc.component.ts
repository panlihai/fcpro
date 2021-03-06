import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentlistComponent } from 'fccomponent';
import { FCEVENT } from 'fccomponent/fc';
import { SysfuncService } from '../../services/sysfunc.service';
@Component({
  selector: 'sysfunc',
  templateUrl: 'sysfunc.component.html',
  styles: [`
   
  `]
})
export class SysfuncComponent extends ParentlistComponent {
  //明细操作按钮
  btnlistOnes: any[];
  //更多的按钮
  btnlistMores: any[];
  //字母查找
  fastsearchWords: any[];
  //服务
  pageList: any[];
  //点击的首字母查询,高亮当前的字母并根据点击字母过滤,再点击当前字母,取消高亮并查询所有的数据
  searchWord: string = '';
  //没有任何内容
  noResult: boolean;
  //分页总数
  pageTotal: number;
  //分页索引
  pageNum: number;
  //分页大小
  pageSize: number;
  //产品
  product: string;
  //产品下拉
  productOptions: any[];
  constructor(public mainService: SysfuncService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    //初始化分页
    this.pageNum = 1;
    this.pageSize = 20;
    this.pageTotal = 0;
    //根据首字母过滤
    this.searchByWord();
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
    //产品下拉
    this.mainService.getProduct().subscribe(result => {
      this.productOptions = [];
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
* @param eventName 事件名称
* @param context 事件返回参数
*/
  event(eventName: string, event: FCEVENT): void {
    //当页面按钮的类型为fastsearch时
    if (event.param.BUSTYPE === 'fastsearch') {
      this.searchByWord(event.param);
    }
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
      valueObj.WHERE = "AND SUBSTR(FUNCID,0,1)='" + btn.ACTCODE + "' " + "AND PID='" + this.product + "'"
    } else {
      valueObj.WHERE = "AND PID='" + this.product + "' " + "AND PAGESIZE='" + this.pageSize + "' " + "AND PAGENUM='" + this.pageNum + "' "
    }
    //根据首字母查询数据,如果没有点击按钮或者再次点击按钮,则查询所有的数据
    this.mainService.findWithQuery(valueObj).subscribe(result => {
      if (result.CODE === '0') {
        this.pageList = result.DATA;
        this.pageTotal = result.TOTALSIZE;
        if (this.pageList.length === 0) {
          this.noResult = true;
        } else {
          this.noResult = false;
        }
      } else {
        this.noResult = true;
      }
    });
  }
  listEdit(sysfunc: any) {
    this.navRouter(this.getRouteUrl('Edit'), { ID: sysfunc.ID, refresh: 'Y' });
  }
  /**
   * 初始化数据，根据产品、数据源过滤元数据
   * @param product 
   * @param datasource 
   */
  initData(product: string) {
    this.mainService.findWithQuery({ PID: product, PAGESIZE: this.pageSize, PAGENUM: this.pageNum })
      .subscribe(result => {
        if (result.CODE === '0') {
          this.pageList = result.DATA;
          this.pageTotal = result.TOTALSIZE;
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
* 选择产品
* @param event 
*/
  chooseProduct(event: any) {
    this.initData(event);
  }
  /**
   * 阻止冒泡
   */
  stopPropagation(event: any) {
    event.stopPropagation();
    event.preventDefault();
  }
  /**
   * 按钮明细
   * @param event 
   */
  btnCardEvent(event: any, btn: any, item: any) {
    switch (btn.ACTCODE) {
      case 'listOneDelete'://明细删除
        this.listOneDelete();
        //阻止冒泡
        this.stopPropagation(event);
        break;
      case 'listOneEdit'://明细修改
        this.listEdit(item);
        //阻止冒泡
        this.stopPropagation(event);
        break;
      case 'listOneHelp'://明细帮助
        //阻止冒泡
        this.stopPropagation(event);
        break;
    }
  }
  /**
   * 单条删除
   */
  listOneDelete() {
    this.messageService.confirm('请确认该服务没有在其它地方使用后再删除!', () => {

    }, () => { })
  }
  /**
  * 分页事件
  * @param event 
  */
  fcpaginationEvent(event: FCEVENT) {
    //查询数据的对象
    let valueObj: any = {};
    switch (event.eventName) {
      case 'pageSizeChange'://每页显示多少条
        valueObj.WHERE = "AND PAGESIZE='" + event.param + "' " + "AND PAGENUM='" + this.pageNum + "' " + "AND PID='" + this.product + "'"
        this.mainService.findWithQuery(valueObj).subscribe(result => {
          if (result.CODE === '0') {
            this.pageList = result.DATA;
          }
        });
        break;
      case 'jumpPage'://跳转到第几页
        valueObj.WHERE = "AND PAGESIZE='" + event.param + "' " + "AND PAGENUM='" + this.pageNum + "' " + "AND PID='" + this.product + "'"
        this.mainService.findWithQuery(valueObj).subscribe(result => {
          if (result.CODE === '0') {
            this.pageList = result.DATA;
          }
        });
        break;
    }
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
