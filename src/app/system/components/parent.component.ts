import { Component, ViewChild, ViewChildren, QueryList } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
    ParentService,
    LogService,
    AppService,
    CacheService,
    MessageService,
    CommonService,
    ProductService,
    UserService,
    ObjStatus
} from "fccore";
import { FclistdataComponent } from "fccomponent";
export abstract class ParentComponent {
    //路由参数
    routerParam: any;
    userInfo;
    condition;
    selectedIndex: number = 0;
    logService: LogService;
    appService: AppService;
    cacheService: CacheService;
    messageService: MessageService;
    commonService: CommonService;
    productService: ProductService;
    userService: UserService;
    appId: string;
    resize: boolean = true;
    hasException: boolean;
    mainObj: any;
    mainApp: any;
    fldsigRequired: any[];
    wfActive: boolean;
    wfMyTaskActive: boolean;
    wfenabled: boolean;
    readonlyList: boolean;
    searchList: any[];
    multiple: boolean;
    showmultiple: boolean;
    pageSize: number;
    curPage: number;
    curRec: number;
    recordCount: number;
    childRelation: {};
    outRelation: {};
    objStatus = ObjStatus.CLEAR;
    readonlyObject = false;
    selectedObjects = [];
    isApplink = false;
    isLinkReadonly = false;
    defselect = false;
    openlist = true;
    orderBy: string;
    //子组件
    @ViewChild(FclistdataComponent) listWnd: FclistdataComponent;
    @ViewChildren(FclistdataComponent)
    childWindow: QueryList<FclistdataComponent>;
    constructor(public mainService: ParentService,
        public router: Router,
        public activetedRoute: ActivatedRoute) {
        // 初始化日志服务
        this.logService = mainService.providers.logService;
        // 初始化元数据服务
        this.appService = mainService.providers.appService;
        // 初始化缓存服务
        this.cacheService = mainService.providers.cacheService;
        // 初始化工具服务
        this.commonService = mainService.providers.commonService;
        // 初始化产品服务
        this.productService = mainService.providers.productService;
        // 初始化消息服务
        this.messageService = mainService.providers.msgService;
        // 初始化用户服务
        this.userService = mainService.providers.userService;        
        //初始化用户信息
        this.userInfo = this.userService.getUserInfo();
        //获取路由参数
        this.activetedRoute.queryParams.subscribe(params => {
            this.routerParam = params;
            //避免出现错误
            this.initMainiObj();
            this.initCondition();
            this.init();
        })
    }
    ngOnInit(): void {


    }
    /**
     * 子类初始化
     */
    abstract init(): void;
    /**
     * 子类初始化对象
     */
    abstract addNew(mainObj: any);
    /**
     * 子类默认调用对象
     */
    public query(): void {
        this.listWnd.refresh(this.condition);
    }
    /**
     * 子类初始化对象
     */
    abstract getDefaultQuery(): any;
    /**
     * 初始化当前对象内容
     */
    private initMainiObj() {
        //初始化元数据id
        this.appId = this.mainService.resId;
        //初始化元数据
        this.mainApp = this.mainService.app;
        this.mainObj = this.appService.initObjDefaultValue(this.mainApp);
    }
    private initCondition() {
        this.condition = this.appService.initObjDefaultConditon(this.mainApp);
    }
    /**
    * 选中tab页
    * @param selecedIndex 选项卡的索引
    */
    public selectedTab(selecedIndex) {
        this.selectedIndex = selecedIndex;
    }
    /**
     * 保存之前的操作
     */
    abstract beforeSave(): boolean;
    /**
     * 保存之后的操作
     */
    abstract afterSave(): void;
    /**
     * 删除之前的操作
     */
    abstract beforeDelete(mainObj: any): boolean;
    /**
     * 删除之后的操作
     */
    abstract afterDelete(): void;


    /**
     * 列表新增
     * @param action 
     */
    public listAdd(context: any): void {
        this.initMainiObj();
        if (this.addNew(this.mainObj)) {
            this.selectedTab(1);
        }
    }
    /**
     * 列表编辑
     * @param action 
     */
    public listEdit(context: any): void {
        if (this.beforeEdit()) {
            this.mainObj = context.PARAMS;
            this.listEditView();
            this.selectedTab(1);
        }
    }
    /**
     * 列表编辑
     * @param action 
     */
    public listEditView(): void {

    }
    /**
     * 编辑之前的操作
     */
    abstract beforeEdit(): boolean;
    /**
     * 编辑之后的操作
     */
    abstract afterEdit(mainObj: any): void;

    /**
     * 列表删除
     * @param action 
     */
    listDelete(context: any): void {
        let mainObj = context.PARAMS;
        if (this.beforeDelete(mainObj)) {
            this.mainService.delete({ ID: mainObj.ID }).subscribe(result => {
                if (result.CODE === '0') {
                    this.afterDelete();
                    this.query();
                    this.messageService.message('删除成功！');
                } else {
                    this.messageService.message('删除失败！');
                }
            });
        }
    }
    /**
     * 列表帮助
     * @param action 
     */
    listHelp(action: string): void {
    }
    /**
      * 列表导入
      * @param action 
      */
    listPrev(): void {
        this.mainObj = this.listWnd.getPrevObj();
    }
    /**
     * 列表导入
     * @param action 
     */
    listNext(): void {
        this.mainObj = this.listWnd.getNextObj();
    }
    /**
     * 列表导入
     * @param action 
     */
    import(action: string): void {
    }
    /**
     * 列表导出
     * @param action 
     */
    export(action: string): void {
    }
    /**
     * 保存新建
     * @param action 
     */
    saveNew(action: string): void {
        if (this.beforeSave()) {
            this.mainService.save(this.mainObj).subscribe(result => {
                if (result.CODE === '0') {
                    this.messageService.message('保存成功！');
                    this.afterSave();
                    this.initMainiObj();
                } else {
                    this.messageService.message('保存失败！');
                }
            });
        }
    }
    /**
    * 保存
    * @param action 事件名称
    */
    cardSave(action: string): void {
        if (this.beforeSave()) {
            this.mainService.save(this.mainObj).subscribe(result => {
                if (result.CODE === '0') {
                    this.messageService.message('保存成功！');
                    this.afterSave();
                    this.mainObj = result.DATA[0];
                } else {
                    this.messageService.message('保存失败！');
                }
            });
        }
    }
    /**
     * 保存返回
     * @param action 事件名称
     */
    cardSaveBack(action: string): void {
        if (this.beforeSave()) {
            this.mainService.save(this.mainObj).subscribe(result => {
                if (result.CODE === '0') {
                    this.selectedTab(0);
                    this.messageService.message('保存成功！');
                    this.afterSave();
                    this.query();
                } else {
                    this.messageService.message('保存失败！');
                }
            });
        }
    }
    /**
         * 修改返回
         * @param action 事件名称
         */
    cardEdit(action: string): void {
        if (this.beforeEdit()) {
            this.mainService.update(this.mainObj).subscribe(result => {
                if (result.CODE === '0') {
                    this.messageService.message('修改成功！');
                    this.afterEdit(result.DATA[0]);
                } else {
                    this.messageService.message('保存失败！');
                }
            });
        }
    }
    /**
     * 修改返回
     * @param action 事件名称
     */
    cardEditBack(action: string): void {
        if (this.beforeEdit()) {
            this.mainService.update(this.mainObj).subscribe(result => {
                if (result.CODE === '0') {
                    this.selectedTab(0);
                    this.messageService.message('修改成功！');
                    this.afterEdit(result.DATA[0]);
                    this.query();
                } else {
                    this.messageService.message('保存失败！');
                }
            });
        }
    }
    /**
     * 表单返回
     * @param action 事件名称
     */
    cardBack(action: string): void {
        this.selectedTab(0);
        this.query();
    }
    /**
     * 根据工具栏处理事件
     * @param action 事件名称
     */
    tlblistEvent(context) {
        switch (context.ACTION) {
            case 'listAdd':
                this.listAdd(context.ACTION);
                break;           
            case 'listDelete':
                this.listDelete(context.ACTION);
                break;
            case 'listHelp':
                this.listHelp(context.ACTION);
                break;
            case 'listPrev':
                this.listPrev();
                break;
            case 'listNext':
                this.listNext();
                break;
            case 'import':
                this.import(context.ACTION);
                break;
            case 'export':
                this.export(context.ACTION);
                break;
            default:
                this.event(context.ACTION, context);
        }
    }
    /**
     * 根据列表处理事件
     * @param action 事件名称
     */
    listdataEvent(context) {
        switch (context.ACTION) {           
            case 'listEdit':
                this.listEdit(context);
                break;
            case 'listOneDelete':
                this.listDelete(context);
                break;
            case 'listOneView':
                // this.cardSaveBack(action);
                break;           
            default:
                this.event(context.ACTION, context);
        }
    }
    /**
     * 根据列表处理事件
     * @param action 事件名称
     */
    adformEvent(context) {
        switch (context.ACTION) {           
            case 'cardSave':
                if (this.mainObj.ID.length === 0) {
                    this.cardSave(context.ACTION);
                } else {
                    this.cardEdit(context.ACTION);
                }
                break;
            case 'cardAdd':
                break;
            case 'cardSaveNew':
                break;
            case 'cardSaveBack':
                if (this.mainObj.ID.length === 0) {
                    this.cardSaveBack(context.ACTION);
                } else {
                    this.cardEditBack(context.ACTION);
                }
                break;
            case 'cardSaveCopy':
                // this.cardSaveBack(action);
                break;
            case 'cardBack':
                this.cardBack(context.ACTION);
                break;
            default:
                this.event(context.ACTION, context);
        }
    }
    /**
     * 自定义事件名称
     * @param eventName 事件名称
     * @param context 上下午环境
     */
    abstract event(eventName: string, context: any): void;

    /**
     * 根据字段名称获取字典
     * @param fieldCode 字段名称
     */
    getDicByFieldcode(fieldCode: string): any[] {
        return this.appService.getDicByFieldcode(this.appId, fieldCode);
    }
    /**
     * 根据字典编码获取字典
     * @param fieldCode 字段名称
     */
    getDicByDiccode(dicCode: string): any[] {
        return this.appService.getDicByDiccode(this.appId, dicCode);
    }
}

