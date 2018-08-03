import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentEditComponent, FctextComponent } from 'fccomponent';
import { SysserviceService } from '../../services/sysservice.service';
import { DialogCardListComponent, DialogCardListArgs } from './dialog/dialogcardlist.component';
import { NzModalService } from '../../../../../node_modules/ng-zorro-antd';
@Component({
    selector: 'sysserviceedit',
    templateUrl: 'sysserviceedit.component.html',
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
        position: relative;
        right: 95%;
        padding: 3%;
      }
            `],
})
export class SysserviceeditComponent extends ParentEditComponent {
    productName: any;
    pidOption: any;
    fastsearchWords: any[];
    sysViews: any;
    sysInterfaces: any;
    staticMainObj: any = {};
    mainObj: any = {};
    btnlistOnes: any;
    btnlistMores: any;
    searchWord: any;
    constructor(public mainService: SysserviceService,
        public router: Router,
        public activeRoute: ActivatedRoute,
        private nzModal: NzModalService
    ) {
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
        //根据首字母过滤
        // this.searchByWord();
        this.getCardListBtn();
        this.initFastSeachWords();
        this.getPidOption();
        this.handleRouterParam();
    }
    /**
     * 初始化卡片按钮
     */
    getCardListBtn() {
        //每个卡片的操作按钮,取列表工具栏的明细按钮,默认显示前两个,超出的显示到更多操作里
        this.btnlistOnes = this.mainService.appButtons.filter(btn =>
            btn.BTNTYPE === 'LISTONE'
        );
        //更多的按钮
        this.btnlistMores = this.btnlistOnes.splice(3);
        //截取前两个按钮
        this.btnlistOnes = this.btnlistOnes.splice(0, 2);
    }
    getDefaultObj() {
        this.mainObj = this.mainService.getDefaultObj();
    }
    /**
     * html事件收集及派发函数
     * @param eventName 
     * @param params 
     */
    event(eventName: string, params?: any): void {
        event.stopPropagation();
        // if (params && params.param && params.param.BUSTYPE ? params.param.BUSTYPE === 'fastsearch' : false) {
        //     this.searchByWord(params.param);
        // }
        let dialogCardListArgs: DialogCardListArgs = { appId: null, configInterface: { title: null } };
        dialogCardListArgs.methodIndex = eventName;
        if (params instanceof FctextComponent) dialogCardListArgs.textComponent = params;
        switch (eventName) {
            case 'PID':
                this.getServiceId(params)
                break;
            case 'DEFAULTAPPID':
                this.showModal(dialogCardListArgs);
                break;
            case 'editInterface':
                this.editInterface(params);
                break;
            case 'BTNLISTONEEDIT':
                this.editInterface(params);
                break;
            case 'BTNLISTONEDELETE':
                this.deleteSysInterface(params.ID);
                break;
        }
    }
    /**YM
     * 确认删除接口？
     * @param id 
     */
    deleteSysInterface(id) {
        this.nzModal.confirm({
            title: '操作提示',
            content: '确认删除吗？',
            onOk: () => { this.mainService.delteSysInterface(id) },
            onCancel: () => { }
        })
    }
    /**
     * 初始化产品名称的自定义下拉选项内容
     */
    getPidOption() {
        this.mainService.getAllProduct().subscribe(res => {
            if (res.P_LISTVALUE) {
                this.pidOption = [];
                res.P_LISTVALUE.forEach(el => {
                    let option = { label: el.PNAME, value: el.PID, disabled: false };
                    this.pidOption.push(option);
                });
            }
            else this.messageService.error("在取出产品名称相关数据时出错");
        })
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
                    for (let attr in this.mainObj) {
                        this.staticMainObj[attr] = this.mainObj[attr];
                    }
                    this.getSysInterfaces({ WHERE: `APPID = '${this.mainObj.SERVICEID}'` });
                } else {
                    this.messageService.error('基本信息获取失败');
                }
            })
        }
    }
    /**
     * 获取服务-接口数据
     * @param serviceId 
     */
    getSysInterfaces(serviceId) {
        this.mainService.getSysInterfaces(serviceId).subscribe(res => {
            if (res.CODE === '0') {
                this.sysInterfaces = res.DATA;
            } else {
                this.messageService.error('接口数据获取失败');
            }
        });
    }
    /**
     * 初始化获取字母快速查询按钮数据
     */
    initFastSeachWords() {
        this.fastsearchWords = this.mainService.initFastSeachWords();
    }
    /** YM
     * 根据PID获取服务编码并赋值.
     * @param pid 
     */
    getServiceId(pid: string) {
        this.mainService.getBizCodeByAid(pid).subscribe(res => {
            if (res.CODE === '0') {
                this.mainObj.SERVICEID = res.DATA[0];
            }
        });
    }
    /**
     * 实现继承与父类的beforeSave函数，对cardSave函数进行功能扩展;
     */
    beforeSave() {
        // this.mainObj = this.mainService.beforeSave(this.mainObj);
        return true;
    }
    /**
     * 实现继承与父类的afterSave函数，对cardSave函数进行功能扩展;
     */
    afterSave() {
        this.mainService.findWithQuery({ WHERE: `SERVICEID = '${this.mainObj.SERVICEID}'` }).subscribe(res => {
            if (res.CODE === '0') {
                this.navRouter(this.getRouteUrl('Edit'), { ID: res.DATA[0].ID });
            }
        });
    }
    /**
    * 新增产品,跳转到新增产品页面
    */
    addView() {
        this.navRouter(this.mainService.getRouteUrl(this.mainService.moduleId, 'SYSVIEW', 'Edit'));
    }
    /**
    * 新增接口,跳转到新增接口页面
    */
    editInterface(params?: any) {
        this.navRouter(this.mainService.getRouteUrl(this.mainService.moduleId, 'SYSINTERFACE', 'Edit'), { ID: this.mainObj.ID, interfaceId: params ? params.ID : undefined, from: this.appId });
    }
    /** YM
      * 显示窗口前的判断
      * @param dialogCardListArgs  
      */
    showModal(dialogCardListArgs: DialogCardListArgs) {
        if (dialogCardListArgs.textComponent ? dialogCardListArgs.textComponent.fcDisabled : true) {
            dialogCardListArgs = this.builddialogCardListArgs(dialogCardListArgs);
            dialogCardListArgs.configInterface.width = "80%";
            this.mainService.openDialog(dialogCardListArgs).subscribe(dialogCardListArgs => {
                if (dialogCardListArgs.hasOwnProperty('methodIndex'))
                    this.afterFuctionForDialog(dialogCardListArgs);
            });
        }
    }
    /** YM
    * 弹窗的必要参数构建函数派发
    * @param dialogCardListArgs 
    */
    builddialogCardListArgs(dialogCardListArgs: DialogCardListArgs) {
        switch (dialogCardListArgs.methodIndex) {
            case 'DEFAULTAPPID':
                dialogCardListArgs.configInterface.title = '选择默认模型';
                dialogCardListArgs.configInterface.content = DialogCardListComponent;
                dialogCardListArgs.condition = {};
                dialogCardListArgs.appId = 'SYSAPP';
                break;
        }
        return dialogCardListArgs;
    }
    /** YM
    * 弹窗确认后的处理函数派发
    * @param dialogCardListArgs 
    */
    afterFuctionForDialog(dialogCardListArgs: DialogCardListArgs) {
        switch (dialogCardListArgs.methodIndex) {
            case 'DEFAULTAPPID':
                if (dialogCardListArgs.data)
                    this.mainObj.DEFAULTAPPID = dialogCardListArgs.data.APPID;
                break;
        }
    }
    /**
     *  返回列表方法
     */
    backToList() {
        this.navRouter(this.getRouteUrl('List'));
    }
    //     /**
    //  * 快速查询
    //  * @param item 
    //  */
    // fastSearch(item: any) {
    //     //当页面按钮的类型为fastsearch时
    //     if (item.BUSTYPE === 'fastsearch') {
    //         // 点击的首字母查询,高亮当前的字母并根据点击字母过滤,再点击当前字母,取消高亮并查询所有的数据
    //         if (this.searchWord === item.ACTCODE) {
    //             this.searchWord = '';
    //             this.searchByWord();
    //         } else {
    //             this.searchWord = item.ACTCODE;
    //             this.searchByWord(item);
    //         }
    //     }
    // }
    // /**
    //   * 初始化元数据
    //   */
    // searchByWord(btn?: any) {
    //     //查询数据的对象
    //     let valueObj: any = {};
    //     //如果点击了首字母搜索的按钮,则根据APPID的首字母查询
    //     if (btn) {
    //         //从0开始截取第一个字符
    //         valueObj.WHERE = ` AND SUBSTR(APPID, 0, 1) = '${btn.ACTCODE}' AND PID = '${this.mainObj.PID}}'`
    //     }
    //     //根据首字母查询数据,如果没有点击按钮或者再次点击按钮,则查询所有的数据
    //     this.mainService.getSysInterfaces(valueObj).subscribe(result => {
    //         if (result.CODE === '0') {
    //             this.sysInterfaces = result.DATA;
    //         }
    //     });
    // }
}
