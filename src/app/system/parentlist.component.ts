import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import {
    ParentService,
    LogService,
    AppService,
    CacheService,
    MessageService,
    CommonService,
    ProductService,
    UserService,
    ObjStatus,
    Sysappfields,
    Sysappbuttons,
    Sysapplinks
} from "fccore";
import * as XLSX from 'xlsx';
import { ViewChild } from "@angular/core";
import { GrandComponent } from "fccomponent/grand.component";
import { FclistdataComponent } from "fccomponent/fclist/fclistdata.component";
import { FCEVENT } from "fccomponent/fc";
export abstract class ParentlistComponent extends GrandComponent {
    modifyObjs: any;
    //条件内容
    condition: string;
    //查询条件
    searchObj: any;
    // 选中的一個记录
    selectedObject: any;
    // 选中的所有记录列
    selectedObjects: any[];
    //默认的排序条件
    orderBy: string;
    //列表字段
    mainFields: Sysappfields[];
    //工具栏
    mainToolbar: Sysappbuttons[];
    //列表操作按钮
    mainListButtons: Sysappbuttons[];
    //子列表组件
    @ViewChild(FclistdataComponent) listWnd: FclistdataComponent;
    constructor(public mainService: ParentService,
        public router: Router,
        public activetedRoute: ActivatedRoute) {
        super(mainService, router, activetedRoute);
        //此次不推荐写初始化代码
    }
    /**
     * 初始化条件
     */
    private _initCondition() {
        this.condition = JSON.stringify(this.appService.initObjDefaultConditon(this.mainApp));
    }
    /**
     * 初始化当前对象内容
     */
    _init() {
        //初始化查询条件
        this.searchObj = {};
        // 初始化查询条件
        this._initCondition();
        // 初始化获取当前列表字段
        this.mainFields = this.mainService.getListFields();
        // 初始化获取当前列表操作按钮
        this.mainToolbar = this.mainService.getToolbarButtons();
        // 初始化获取当前列表操作按钮
        this.mainListButtons = this.mainService.getListButtons();
        // 子类初始化
        this.init();
        // 执行查询事件
        this.search();
    }
    /**
     * 子类初始化
     */
    abstract init(): void;
    /**
     * 子类默认调用对象
     */
    public query(): void {
        this.listWnd.fcReflesh();
    }
    /**
    * 获取默认的查询条件 
    */
    abstract getDefaultQuery(): any;

    /**
     * 查询重置
     **/
    reset() {
        // 子类查询条件初始化
        this._initCondition();
        this.search();
    }
    /**
     * 获取查询条件内容
     */
    search(event?: FCEVENT): any {
        if (event) {
            this.searchObj = event.param;
        }
        let _condition: any = {};
        // 判断是否存在查询条件内容
        if (typeof (this.searchObj) === 'object') {
            _condition = JSON.parse(JSON.stringify(this.searchObj));
        }
        //   获取默认查询条件或自定义的查询like等
        let defautlSearchObj = this.getDefaultQuery();
        if (defautlSearchObj) {
            Object.keys(defautlSearchObj).forEach(key => {
                if (defautlSearchObj[key] !== '' && defautlSearchObj[key] !== null) {
                    if (key === 'WHERE' && _condition.WHERE && defautlSearchObj.WHERE) {
                        if (defautlSearchObj.WHERE.toUpperCase().replace(/(^\s*)|(\s*$)/g, "").substr(0, 3) !== 'AND') {
                            _condition.WHERE = _condition.WHERE + " AND " + defautlSearchObj.WHERE;
                        } else {
                            _condition.WHERE = _condition.WHERE + defautlSearchObj.WHERE;
                        }
                    } else {
                        _condition[key] = defautlSearchObj[key];
                    }
                }
            });
        }
        if (this.condition && this.condition.substr(this.condition.length - 1, this.condition.length) === ' ') {
            this.condition = JSON.stringify(_condition);
        } else {
            this.condition = JSON.stringify(_condition) + " ";
        }
    }

    /**
     * 删除之前的操作
     */
    beforeDelete(mainObj: any): boolean {
        return true;
    }
    /**
     * 删除之后的操作
     */
    afterDelete(): void {

    }

    /**
     * 列表新增
     * @param action 
     */
    public listAdd(event: FCEVENT): void {
        this.navAdd({ refresh: 'Y' });
    }
    /**
     * 列表编辑
     * @param action 
     */
    public listEdit(event: FCEVENT): void {
        if (this.selectedObject && this.selectedObject !== null) {
            this.selectedObject = event.param;
            if (this.beforeEdit()) {
                this.navModify();
            }
        } else {
            this.messageService.warm("请选择一条记录！");
            return;
        }
    }
    /**
     * 编辑之前的操作
     */
    beforeEdit(): boolean {
        return true;
    }
    /**
         * 删除一条记录
         * @param action 
         */
    listOneDelete(context: any): void {
        this.messageService.confirm("确认删除记录吗?", () => {
            let mainObj = context.param;
            if (this.beforeDelete(mainObj)) {
                this.mainService.delete({ ID: mainObj.ID }).subscribe(result => {
                    if (result.CODE === '0') {
                        this.afterDelete();
                        this.messageService.message('删除成功！');
                        this.listWnd.deleteRowDataById([mainObj.ID]);
                    } else {
                        this.messageService.message('删除失败！');
                    }
                });
            }
        }, () => { });
    }
    /**
     * 列表批量删除
     * @param action 
     */
    listDelete(event: FCEVENT): void {
        this.messageService.confirm("确认删除记录吗?", () => {
            if (this.selectedObjects.length === 0) {
                this.messageService.warm('请选择至少一条记录！');
                return;
            }
            let canDo = true;
            for (let i = 0; i < this.selectedObjects.length; i++) {
                let mainObj = this.selectedObjects[i];
                if (!this.beforeDelete(mainObj)) {
                    canDo = false;
                    break;
                }
            }
            if (!canDo) {
                return;
            }
            let ids = [];
            this.selectedObjects.forEach(obj => {
                ids.push({ ID: obj.ID });
            });
            this.mainService.delete(ids).subscribe(result => {
                if (result.CODE === '0') {
                    this.afterDelete();
                    this.selectedObjects.forEach(obj => {
                        this.listWnd.deleteRowDataById([obj.ID]);
                    })
                    this.messageService.message('删除成功！');
                } else {
                    this.messageService.message('删除失败！');
                }
            });
        }, () => { });
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
    import(action: string): void {
    }
    /**
     * 列表导出
     * @param action 
     */
    export(action: string): void {
        //如果没有选中数据，从后端取出导出数据
        let datas: any[] = this.mainService.commonService.cloneArray(this.listWnd.fcRowData, 'DOACTION');
        let data: any[] = [];
        let header: string[] = [];
        this.mainFields.forEach(field => {
            header.push(field.FIELDNAME);
        });
        let select = this.selectedObjects;
        data.push(header);
        //如果选中数据，导出已选中的数据
        if (select.length !== 0) datas = select;
        datas.forEach(row => {
            let obj: any[] = [];
            this.mainFields.forEach(field => {
                if (row[field.FIELDCODE + '_DICDESC']) {
                    obj.push(row[field.FIELDCODE + '_DICDESC']);
                } else {
                    obj.push(row[field.FIELDCODE]);
                }
            });
            data.push(obj);
        })

        /* generate worksheet */
        const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, this.mainApp.APPNAME);

        /* save to file */
        XLSX.writeFile(wb, this.mainApp.APPNAME + this.mainService.commonService.getTimestamp() + ".xlsx");
    }
    /**
     * 列表工具栏处理事件
     * @param event 事件名称
     */
    tlblistEvent(event: FCEVENT) {
        switch (event.eventName) {
            case 'listAdd':
                this.listAdd(event);
                break;
            case 'listDelete':
                this.listDelete(event);
                break;
            case 'listEdit':
                this.listEdit(event);
                break;
            case 'listHelp':
                this.listHelp(event.eventName);
                break;
            case 'import':
                this.import(event.eventName);
                break;
            case 'export':
                this.export(event.eventName);
                break;
            default:
                this.event(event.eventName, event);
        }
    }


    /**
     * 查询事件处理
     * @param event 查询事件参数
     */
    searchlistEvent(event: FCEVENT): void {
        switch (event.eventName) {
            case "search":
                this.search();
                break;
            default:
                this.event(event.eventName, event.param);
        }
    }
    /** 
     * 自定义事件名称
     * @param eventName 事件名称
     * @param context 上下午环境
     */
    abstract event(eventName: string, context: any): void;
    /**
     * 跳转至新增页面
     */
    navAdd(params?: any) {
        if (!params) {
            params = { refresh: 'Y' };
        } else {
            params.refresh = 'Y';
        }
        this.navRouter(this.getRouteUrl('Edit'), params);
    }
    /**
     * 跳转至修改页面
     */
    navModify() {
        this.cacheService.setS(this.appId + "DATA", this.commonService.cloneArray(this.listWnd.fcRowData, 'DOACTION'));
        this.navRouter(this.getRouteUrl('Edit'), { ID: this.selectedObject.ID, refresh: 'Y' });
    }
    /**
     * 跳转至详情页面
     */
    navDetail() {
        this.cacheService.setS(this.appId + "DATA", this.commonService.cloneArray(this.listWnd.fcRowData, 'DOACTION'));
        this.navRouter(this.getRouteUrl('Detail'), { ID: this.selectedObject.ID, refresh: 'Y' });
    }
    cellClick(event: FCEVENT) {
        if (event.param.field.INPUTTYPE && event.param.field.INPUTTYPE === 'url') {
            window.open(event.param.data[event.param.field.FIELDCODE], '_blank');
        }
    }
    /**
    * 根据列表处理事件
    * @param action 事件名称
    */
    listdataEvent(event: FCEVENT) {
        switch (event.eventName) {
            case 'listEdit':
                this.listEdit(event);
                break;
            case 'listOneDelete':
                this.listOneDelete(event);
                break;
            case 'listOneView':
                this.navDetail();
                break;
            case 'cellClick':
                this.cellClick(event);
                break;
            case 'rowClick':
                break;
            case 'selected':
                this.onSelect(event);
                break;
            case 'modify':
                this.onModify(event);
                break;
            default:
                this.event(event.eventName, event);
        }
    }
    /**
     * 选中的数据对象
     * @param event 
     */
    onSelect(event: FCEVENT) {
        this.selectedObjects = [];
        this.selectedObjects = this.selectedObjects.concat(event.param);
        if (this.selectedObjects.length === 1) {
            this.selectedObject = this.selectedObjects[0];
        } else if (this.selectedObjects.length > 1) {
            this.selectedObject = this.selectedObjects[this.selectedObjects.length - 1];
        } else {
            this.selectedObject = this.appService.initObjDefaultValue(this.mainApp);
        }
    }
    /**
     * 在列表中编辑数据对象放入编辑对象中
     * @param event 
     */
    onModify(event: FCEVENT) {
        this.modifyObjs.push(event.param);
    }
}

