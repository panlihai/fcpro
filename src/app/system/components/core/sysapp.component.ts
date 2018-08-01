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
  .sys-fast-list {
    cursor: pointer;
  .sys-fast-select{
    width:15%;
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
  //数据源
  datasource: string;
  //产品
  product: string;
  //点击的首字母查询,高亮当前的字母并根据点击字母过滤,再点击当前字母,取消高亮并查询所有的数据
  searchWord: string = '';
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
  }
  ngOnInit() {
    this.mainService.findWithQuery({}).subscribe(result => {
      if (result.CODE === '0') {
        this.sysApps = result.DATA;
      }
    });
    this.searchByWord();
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
   * 事件规定在何处放置被拖动的数据
   * @param ev 
   */
  allowDrop(ev) {
    ev.preventDefault();
  }
  /**
   * dragstart规定当元素被拖动时，会发生什么。drag规定了被拖动的数据
   * @param ev 
   */
  drag(ev) {
    ev = this.EventUtil.getEvent(ev);
    let target = this.EventUtil.getTarget(ev);
    //方法设置被拖数据的数据类型和值,数据类型是 "Text"，值是可拖动元素的 id ("drag1")
    ev.dataTransfer.setData("Text", ev.target.id);
  }
  /**
   * 当放置被拖数据时，会发生 drop 事件。
   * @param ev 
   */
  drop(ev) {
    ev = this.EventUtil.getEvent(ev);
    var target = this.EventUtil.getTarget(ev);
    ev.preventDefault();
    let data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
  }
  dragenter(ev) {
    ev= this.EventUtil.getEvent(ev);
    var target = this.EventUtil.getTarget(ev);
    //重要！重写dragenter事件的默认行为，使其可以触发drop事件
    this.EventUtil.preventDefault(ev);
    //dropEffect事件和effectAllowed事件搭配使用
    ev.dataTransfer.dropEffect = 'copyMove';
    target.className = 'hover';
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
      valueObj.WHERE = "AND SUBSTR(APPID,0,1)='" + btn.ACTCODE + "'"
    }
    //根据首字母查询数据,如果没有点击按钮或者再次点击按钮,则查询所有的数据
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
    //选中的对象
    let selectedObj: any = event;
    if (selectedObj && selectedObj !== null) {
      //把卡片的数据放入缓存中
      this.cacheService.setS(this.appId + "DATA", this.commonService.cloneArray(this.sysApps));
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
