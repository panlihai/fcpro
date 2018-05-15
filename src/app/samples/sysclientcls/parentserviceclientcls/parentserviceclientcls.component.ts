import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'parentserviceclientcls',
  templateUrl: './parentserviceclientcls.component.html',
  styles: [`
  
  `]
})
export class ParentserviceclientclsComponent extends ComponentParent {
    //代码
    code:string=`
    import { ProvidersService } from "../services/providers.service";
    import { Observable } from "rxjs/Observable";
    import { Provider } from "../classes/provider";
    import { ResponseResult } from '../entity/response';
    import { FormGroup } from '@angular/forms';
    import { Sysapplinks, Sysappfields, Sysdic, Sysappfldgroup, Sysappbuttons, LogService, AppService, CacheService, MessageService, CommonService, ProductService, UserService, Fcapp } from "..";
    export declare class ParentService implements Provider {
        private ps;
        private appId;
        logService: LogService;
        appService: AppService;
        cacheService: CacheService;
        messageService: MessageService;
        commonService: CommonService;
        productService: ProductService;
        userService: UserService;
        enablePagination: boolean;
        userInfo: any;
        moduleId: string;
        resId: string;
        providers: ProvidersService;
        pageSize: number;
        pageNum: number;
        app: Fcapp;
        formOptions: FormOption;
        listSearchOptions: SearchlistOption;
        listOptions: listOption;
        appLinks: Sysapplinks[];
        appFields: Sysappfields[];
        appButtons: Sysappbuttons[];
        appFieldGroup: Sysappfldgroup[];
        appDics: Sysdic[];
        constructor(ps: ProvidersService, appId?: string);
        /**
         * 初始化元数据内容，包含元数据的表单配置，列表配置，查询条件配置
         * */
        initApp(): void;
        /**
         * 初始化相关的内容。
         * @param app 当前初始化的元数据对象
         */
        private initAppDetail(app);
        /**
       * 根据获取表单字段列
       */
        getFormFields(): Sysappfields[];
        /**
         * 根据获取列表字段列
         */
        getListFields(): Sysappfields[];
        /**
       * 根据获取表单按钮组
       */
        getFormButtons(): Sysappbuttons[];
        /**
         * 根据获取列表按钮
         */
        getListButtons(): Sysappbuttons[];
        /**
           * 获取工具栏按钮
           */
        getToolbarButtons(): Sysappbuttons[];
        /**
         * 获取满足字段key的值为value的所有字段
         * @param appId 元数据id
         * @param key 字段名称
         * @param value 字段值 可以是number，string等类型
         */
        getFieldByAny(appId: string, key: string, value: any): Sysappfields[];
        /**
         *  根据就当前的id值从后端获取数据内容
         * @param id 需要获取id对象的数据内容
         * @return Observable
         */
        initMainObj(id: string): Observable<ResponseResult>;
        /**
         * 保存对象
         * @param json 对象数据值
         */
        saveByParams(json: any): Observable<ResponseResult>;
        save(json: any): Observable<ResponseResult>;
        saveList(json: any): Observable<ResponseResult>;
        delete(json: any): Observable<ResponseResult>;
        update(json: any, method?: string): Observable<ResponseResult>;
        updateList(json: any[]): Observable<ResponseResult>;
        upLoadFile($file: any, json: any): Observable<ResponseResult>;
        downloadFile(json: any): Observable<ResponseResult>;
        import($file: any): Observable<ResponseResult>;
        export(json: any): Observable<ResponseResult>;
        sqlExcute(json: any): Observable<ResponseResult>;
        updateStatus(json: any): Observable<ResponseResult>;
        condition(): void;
        listOneView(): void;
        listDelete(): void;
        /**
         * @description 根据id获取对象内容
         * @param id 主键id
         */
        findByID(id: string): Observable<ResponseResult>;
        /**
         * @param {page:1,size:20,...}
         * @description 查詢
         */
        findWithQuery(param: any): Observable<ResponseResult>;
        /**
        * @param {...}
        * @description 查詢所有的数据
        */
        findWithQueryAll(param: any): Observable<ResponseResult>;
        /**
         * 根据操作方法返回资源请求路径
         * @param act 操作方法
         */
        getResourceUrl(act: any): string;
        /**
         * 记录操作日志
         * @param act 操作方法
         * @param param 输入参数
         * @param result 结果
         * @param reason 原因
         */
        writeActionLog(act: string, param: any, result: string, reason?: string): void;
        /**
         * 记录错误日志
         * @param act 操作方法
         * @param param 输入参数
         * @param result 结果
         * @param reason 原因
         */
        writeErrorLog(act: string, param: any, result: string, reason?: string): void;
        /**
         * 记录行为日志
         * @param act 操作方法
         * @param param 输入参数
         * @param result 结果
         * @param reason 原因
         */
        writeBehaviorLog(act: string, param: any, result: string, reason?: string): void;
        /**
         * 获取用户信息，从缓存中。
         */
        getUserInfo(): any;
      }
      export interface listOption {
          fcClass?: string;
          fcHeight: number;
          fcEnableSorting: boolean;
          fcEnableSearch: boolean;
          fcEnableFilter: boolean;
          fcEnableColResize: boolean;
          fcShowToolPanel?: boolean;
          fcPagination: boolean;
          fcRowGroupPanelShow?: string;
          fcEnableStatusBar: boolean;
          fcPaginationPageSize: number;
          fcEnableRangeSelection: boolean;
          fcRowSelection: string;
          fcFields?: any[];
          fcEnableAction?: boolean;
          fcOrder?: string;
          fcCheckboxSelection: boolean;
          fcEnableEdit: boolean;
          fcAutoSave?: boolean;
      }
      export declare enum FORMACTION {
          ADD = 0,
          MODIFY = 1,
      }
      export interface FormOption {
          fcTitle?: string;
          fcSubTitle?: string;
          fcFields?: Sysappfields[];
          fcToolbar?: Sysappbuttons[];
          fcFieldDics?: any;
          fcAct?: FORMACTION;
          fcLayout?: string;
          fcValidate?: FormGroup;
          fcSpans?: number;
      }
      export interface SearchlistOption {
          fcTitle?: string;
          fcSubTitle?: string;
          fcFields?: Sysappfields[];
          fcToolbar?: Sysappbuttons[];
          fcFieldDics?: any;
          fcLayout?: string;
          fcValidate?: FormGroup;
          fcSpans?: number;
          fcAct: FORMACTION;
      }
      export interface SqlExcuteParam {
          PARAMKEY: string;
          PARAMVALUE: string;
      }
      export interface SqlExcute {
          KEY: string;
          VALUE: SqlExcuteParam[];
      }    
    `;
  constructor(public mainService: ComponentService) {
    super('', mainService);
  }
}