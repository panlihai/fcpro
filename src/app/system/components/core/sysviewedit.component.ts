import { Component, Renderer2, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { ParentEditComponent } from 'fccomponent';
import { SysviewService } from '../../services/sysview.service';
import { DragData } from '../../../directive/mdrag-drop.service';
@Component({
    selector: 'sysviewedit',
    templateUrl: 'sysviewedit.component.html',
    styles: [`
    .sys-card-btn{
        width:50%;
      }
      :host ::ng-deep .fc-layoutpanel {
          padding:10px;
      }
      .place-div{
          height:42px;
      }
      .last-btn{
          height:42px;
          position:relative;
          right:95%;
      }
      .fctitle-h2{
        margin: 1% 0% 1% 3%;
      }
      .btnAdd-dragable-area{
        position:relative;
        left:5%;
        line-height: 25px;
        text-align: center;
        border: 2px #ddd dashed;
        border-radius: 4px;
      }
      .btnAdd-dragable-area:hover{
       cursor:pointer;
       border-color:dodgerblue;
       transition: 1s;
      }
      .selectList-title-area {
        height: 28px;
        border: 1px solid #ccc;
        border-radius: 3px;
        line-height: 28px;
        text-align: center;
      }
      .selectList-tree-area, .selectList-list-area {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px;
        margin-top: 5px;
        height:535px;
      }
      .selectList-list-area {
        overflow:auto;
      }
      .selectList-content-area{
        height:94%;
        overflow:auto;
      }
      .selectList-element-container{

      }
      .selectList-element-area{

      }
      .selectList-element-header{
        zoom: 1.1;
        padding: 2% 0 1% 2%;
      }
      .selectList-element-icon-open, .selectList-element-icon-close{
        text-align: center;
        float: left;
        font-size: 14px;
        line-height: 10px;
        color: #bbb;
        width: 14px;
        height: 14px;
        margin: 1%;
        cursor:pointer;
      }
      .selectList-element-icon-close{
        
      }
      .selectList-element-text-main:hover{
        color:blue;
        cursor:move;
      }
      .selectList-element-text-extra{
        
      }
      .selectList-child-area{
        padding: 0 0 0 16%;
      }
      .selectList-child-text{
        padding: 1%;
      }
      .selectList-child-text:hover{
        color:blue;
        cursor:move;
      }
      .selectList-list-area {
        position:relative;
        left:5%;
      }
      .drag-start {
        opacity: 0.5;
        border: #ff525b dashed 1px;
      }
      
      .drag-enter {
        cursor:pointer;
        border-color:dodgerblue;
        transition: 1s;
      }
      
      :host ::ng-deep .ant-select-selection--multiple{
          max-height:40px;
          overflow:auto;
      }
`]
})
export class SysvieweditComponent extends ParentEditComponent {
    pidOption: any;
    staticMainObj: any;
    sysApps: any;
    selectedApps: any = [];
    listCondition: any;
    constructor(public mainService: SysviewService,
        public router: Router,
        private renderer: Renderer2,
        private el: ElementRef,
        public activeRoute: ActivatedRoute) {
        super(mainService, router, activeRoute);
    }

    /**
     * 新增之前执行的函数
     * @param mainObj 
     */
    addNew(mainObj: any): boolean {
        return true;
    }
    /**
     * 组件初始化执行函数
     */
    init(): void {
        this.initDefaultMainObj();
        this.handleRouterParam();
        this.initSysApps();
        this.initListCondition();

    }
    beforeSave() {
        if (this.mainObj.ID === '')
            delete this.mainObj.ID;
        return true;
    }
    initListCondition() {
        let con: any = {
            WHERE: `APPID='${this.mainObj.APPID}'`,
            PAGESIZE: 9999
        }
        this.listCondition = JSON.stringify(con);
    }
    /** YM
    * 处理路由传参的情况
    * @param pid 
    */
    handleRouterParam() {
        if (this.routerParam.ID) {
            this.mainService.findWithQuery({ WHERE: `ID = '${this.routerParam.ID}'` }).subscribe(res => {
                if (res.CODE === '0' && res.DATA.length !== 0) {
                    for (let attr in res.DATA[0]) {
                        this.mainObj[attr] = res.DATA[0][attr];
                    }
                    this.staticMainObj = {};
                    for (let attr in this.mainObj) {
                        this.staticMainObj[attr] = this.mainObj[attr];
                    }
                } else {
                    this.messageService.error('基本信息获取失败');
                }
            })
        }
        if (this.routerParam.funcId) {
            this.mainService._findWithQuery('SYSFUNC', { ID: this.routerParam.funcId }).subscribe(res => {
                if (res.CODE === '0' && res.DATA.length !== 0) {
                    for (let attr in res.DATA[0]) {
                        if (attr === 'FUNCID') {
                            this.mainObj[attr] = res.DATA[0][attr];
                        }
                    }
                } else {
                    this.messageService.error('功能信息获取失败');
                }
            })
        }
    }
    /**
     * html事件收集及派发函数
     * @param eventName 
     * @param param 
     */
    event(eventName: string, param: any): void {
        switch (eventName) {
            case 'editViewElement':
                this.mainService.openViewElementDialog({ funcId: this.routerParam.funcId ? this.routerParam.funcId : null, viewId: this.mainObj.ID ? this.mainObj.ID : null, ID: param ? param.ID : null });
                break;
            case 'selectElementToEdit':
                break;
            case 'selectApp':
                this.handleSelectApp(param)
                break;
            case 'backToFuncEdit':
                this.backToFuncEdit()
                break;
            case 'handleDropped':
                this.handleDropped(param);
                break;
        }
    }
    handleDropped(param: DragData) {
        this.mainService.saveField(param);
    }
    backToFuncEdit() {
        this.navRouter(this.mainService.getRouteUrl(this.mainService.moduleId, 'SYSFUNC', 'Edit'), { ID: this.routerParam.funcId, refresh: 'Y' });
    }
    /**
     * 初始化mainObj的默认值
     */
    initDefaultMainObj() {
        this.mainObj = {};
        this.mainObj = this.mainService.getDefaultObj(this.mainApp);
        this.staticMainObj = {};
        for (let attr in this.mainObj) {
            this.staticMainObj[attr] = this.mainObj[attr];
        }
    }
    /**
     * 初始化产品名称的自定义下拉选项内容
     */
    initPidOption() {
    }
    /** YM
     * 根据PID获取服务编码并赋值.
     * @param pid 
     */
    getServiceId() {
    }
    /**
     * 实现继承与父类的afterSave函数，对cardSave函数进行功能扩展;
     */
    afterSave() {
    }
    /**
  * 新增产品,跳转到新增产品页面
  */
    addView() {
    }
    addInterface() {
    }
    initSysApps() {
        this.mainService.getSysApps().subscribe(res => {
            if (res.CODE === '0') {
                this.sysApps = res.DATA;
                //测试数据
                this.selectedApps = res.DATA;
            }
        });
    }
    handleSelectApp(param: any) {
        this.selectedApps = param;
        this.selectedApps.forEach((el: any, index) => {
            this.mainService.findAppByAid(el.APPID).subscribe(res => {
                if (res.CODE === '0') {
                    var sApp = res.DATA;
                    if (sApp && sApp[el.APPID]) {
                        this.selectedApps[index] = sApp[el.APPID];
                        this.selectedApps[index]['open'] = false;
                    }
                }
            })
        });
    }
    trackByIndex(index, item) {
        return index;
    }
    obj:any={}
    /**
     * dragstart规定当元素被拖动时，会发生什么。drag规定了被拖动的数据
     * @param ev 
     * @param obj 拖拽的对象
     */
    dragstart(ev, obj: any) {
        ev.dataTransfer.effectAllowed = "copy";
        //存入数据
        ev.dataTransfer.setData("Text", ev.target.id);
       this.obj=obj;
    }
    dragover(ev) {//拖拽目标身上的效果
        ev.preventDefault();
        // Set the dropEffect to move
        ev.dataTransfer.dropEffect = "copy"
    }
    /**
     * 当放置被拖数据时，会发生 drop 事件。
     * @param ev 
     */
    drop(ev) {
        ev.preventDefault();
        //获取目标id并新增dom
        let data = ev.dataTransfer.getData("Text");
        let a=ev.dataTransfer.getData("Text");
        this.logService.debug(a);
        //复制目标
        let item = document.getElementById(data).cloneNode();
        ev.target.appendChild(item);
        //移动目标
        // ev.target.appendChild(document.getElementById(data));
        //拖拽后抛出事件，打开弹窗
        this.mainService.openViewElementDialog(this.obj);
    }
    /**
     * 
     * @param ev 
     */
    dragenter(ev) {

    }
}
