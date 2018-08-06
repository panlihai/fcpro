import { Component, Renderer2, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { ParentEditComponent } from 'fccomponent';
import { SysviewService } from '../../services/sysview.service';
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
        width: 95%;
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
      .selectList-area, .selectList-list-area {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px;
        margin-top: 5px;
        height:535px;
        overflow:auto;
      }
      .selectList-content-area{

      }
      .selectList-list-area {
        position:relative;
        left:5%;
      }
`]
})
export class SysvieweditComponent extends ParentEditComponent {
    productName: any;
    pidOption: any;
    modelOptions: any;
    fastsearchWords: any[];
    staticMainObj: any;
    condition: any;
    sysApps: any;
    searchBoolean: boolean = true;
    selectedApps: any = [];
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
        this.handleRouterParam();
        this.preventUnsaved();
        this.initSysApps();

    }
    /** YM
    * 处理路由传参的情况
    * @param pid 
    */
    handleRouterParam() {
        if (this.routerParam.ID) {
            this.mainService.findWithQuery({ WHERE: `ID = '${this.routerParam.ID}'` }).subscribe(res => {
                if (res.CODE === '0' && res.DATA.length !== 0) {
                    this.staticMainObj = res.DATA[0];
                    this.mainObj = res.DATA[0];
                } else {
                    this.messageService.error('基本信息获取失败');
                }
            })
        }
    }
    preventUnsaved() {
        this.router.events.filter(el => el instanceof NavigationStart).subscribe(ev => {
            //TODO remark: route.config.deActive;
        })
    }
    /**
     * html事件收集及派发函数
     * @param eventName 
     * @param param 
     */
    event(eventName: string, param: any): void {
        switch (eventName) {
            case 'addViewElement':
                this.mainService.openViewElementDialog();
                break;
            case 'selectElementToEdit':
                break;
            case 'selectApp':
                this.handleSelectApp(param)
                break;

        }
    }
    /**
     * 初始化mainObj的默认值
     */
    initDefaultMainObj() {
        this.mainObj = this.mainService.getDefaultObj();
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
        this.sysApps = param;
        this.mainService.getAppFieldsByApp();
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
