import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'appservicecls',
  templateUrl: './appservicecls.component.html',
  styles: [`
  
  `]
})
export class AppserviceclsComponent extends ComponentParent {
    //代码
    code:string=`
    import { DaoService } from './dao.service';
    import { LogService } from './log.service';
    import { CacheService } from './cache.service';
    import { CommonService } from './common.service';
    import { Observable } from 'rxjs/Observable';
    import { ProductService } from './product.service';
    import { ResponseResult } from '../entity/response';
    import { Sysappfields } from './sysappfields.service';
    import { Sysapplinks } from './sysapplinks.service';
    import { Sysappbuttons } from './sysappbuttons.service';
    import { FcDic } from './sysdic.service';
    import { Sysappfldgroup } from './sysappfldgroup.service';
    export declare class AppService {
        private daoService;
        private logService;
        private cacheService;
        private commonService;
        private productService;
        apps: any[];
        moduleId: string;
        resId: string;
        constructor(daoService: DaoService, logService: LogService, cacheService: CacheService, commonService: CommonService, productService: ProductService);
        /**
         * 初始化所有的当前产品的app结构,并存储在缓存中。
         */
        initApp(): void;
        /**
         * 获取数据默认的数据值
         * @param app
         */
        initObjDefaultValue(app: any): any;
        /**
           * 获取数据默认的数据值
           * @param app
           */
        initObjDefaultConditon(app: Fcapp): any;
        /**
         *
         * 获取APP结构
         * @param appId 资源id
         */
        getAppById(appId: string): Fcapp;
        /**
         * 根据appid获取到应用程序内容
         */
        findAllApp(): Observable<ResponseResult>;
        /**
         * 根据条件获取到应用程序内容
         */
        findAppWithQuery(param: any): Observable<ResponseResult>;
        /**
           * 根据appid获取到应用程序内容
           * @param appid 应用程序
           */
        findAppByAid(appid: string): Observable<ResponseResult>;
        /**
         * 根据元数据id
         * @param appid 应用程序id
         * @param condition
         */
        findWithQuery(appid: string, condition: any): Observable<ResponseResult>;
        /**
         * 根据元数据id
         * @param appid 应用程序id
         * @param condition
         */
        findById(appid: string, id: string): Observable<ResponseResult>;
        /**
         * 根据当前对象的结构提交保存
         * @param appId 元数据id
         * @param obj 当前对象
         */
        saveObject(appId: string, obj: any): Observable<ResponseResult>;
        /**
         * 根据当前对象的结构提交修改
         * @param appId 元数据id
         * @param obj 当前对象
         */
        updateObject(appId: string, obj: any): Observable<ResponseResult>;
        /**
         * 根据当前对象的id删除对象。
         * @param appId 元数据id
         * @param id 元数据对应的对象id
         */
        deleteObject(appId: string, id: string): Observable<ResponseResult>;
        /**
         * 获取请求url
         * @param app 元数据对象
         * @param act 执行方法
         */
        private getUrl(appId, act);
        /**
         *
         * @param appId 当前资源id
         * @param btnType btn按钮类型['CARD','LIST','LISTONE']
         */
        getBtnByAppid(appId: string, btnType: string): Sysappbuttons[];
        /**
        *
        * @param appId 当前资源id
        * @param btnType btn按钮类型['CARD','LIST','LISTONE']
        */
        getBtnByApp(app: Fcapp, btnType: string): Sysappbuttons[];
        /**
         * 根据元数据id获取表单字段列
         * @param appId 元数据id
         */
        getFormFieldsByAppid(appId: string): Sysappfields[];
        /**
         * 根据元数据id获取列表字段列
         * @param appId 元数据id
         */
        getListFieldsByAppid(appId: string): Sysappfields[];
        /**
         * 根据元数据获取表单字段列
         * @param app 元数据
         */
        getFormFieldsByApp(app: Fcapp): Sysappfields[];
        /**
         * 根据元数据获取列表字段列
         * @param app 元数据
         */
        getListFieldsByApp(app: Fcapp): Sysappfields[];
        /**
         * 获取满足字段key的值为value的所有字段
         * @param appId 元数据id
         * @param key 字段名称
         * @param value 字段值 可以是number，string等类型
         */
        getFieldsByAppid(appId: string, key: string, value: any): Sysappfields[];
        /**
         * 获取满足字段key的值为value的所有字段
         * @param app 元数据
         * @param key 字段名称
         * @param value 字段值 可以是number，string等类型
         */
        getFieldsByApp(app: Fcapp, key: string, value: any): Sysappfields[];
        /**
         * 根据元数据id获取表单按钮
         * @param appId 元数据id
         */
        getFormButtonsByAppid(appId: string): Sysappbuttons[];
        /**
         * 根据元数据id获取工具栏按钮
         * @param appId 元数据id
         */
        getToolbarButtonsByAppid(appId: string): Sysappbuttons[];
        /**
         * 根据元数据id获取获取列表明细按钮
         * @param appId 元数据id
         */
        getListButtonsByAppid(appId: string): Sysappbuttons[];
        /**
         * 获取满足字段key的值为value的所有按钮
         * @param appId 元数据id
         * @param key 字段名称
         * @param value 字段值 可以是number，string等类型
        */
        getButtonsByAppid(appId: string, key: string, value: any): any;
        /**
         * 根据元数据获取表单按钮
         * @param app 元数据
         */
        getFormButtonsByApp(app: Fcapp): Sysappbuttons[];
        /**
         * 根据元数据获取工具栏按钮
         * @param app 元数据
         */
        getToolbarButtonsByApp(app: Fcapp): Sysappbuttons[];
        /**
         * 根据元数据获取获取列表明细按钮
         * @param app 元数据
         */
        getListButtonsByApp(app: Fcapp): Sysappbuttons[];
        /**
           * 获取满足字段key的值为value的所有按钮
           * @param app 元数据
           * @param key 字段名称
           * @param value 字段值 可以是number，string等类型
           */
        getButtonsByApp(app: Fcapp, key: string, value: any): Sysappbuttons[];
        /**
         * 根据字段名称获取字段内容
         * @param appId 元数据id
         * @param fieldCode 字段名称
         */
        getFieldByFieldcode(appId: string, fieldCode: string): Sysappfields;
        /**
         * 根据字段名称获取字段内容
         * @param app 元数据
         * @param fieldCode 字段名称
         */
        getFieldByAppFieldcode(app: Fcapp, fieldCode: string): Sysappfields;
        /**
         * 根据资源id及数据字典编码获取数据字典项列表
         * @param appId 当前资源id
         * @param diccode 数据字典编码
         */
        getDicByDiccode(appId: string, diccode: string): any[];
        /**
         * 根据资源id及数据字典编码获取数据字典项列表
         * @param app 元数据
         * @param diccode 数据字典编码
         */
        getDicByAppDiccode(app: Fcapp, diccode: string): any[];
        /**
         * 根据字段名称获取数据字典列表
         * @param appId 元数据id
         * @param fieldCode 字段名称
         */
        getDicByFieldcode(appId: string, fieldCode: string): any;
        /**
         * 根据字段名称获取数据字典列表
         * @param app 元数据
         * @param fieldCode 字段名称
         */
        getDicByAppFieldcode(app: Fcapp, fieldCode: string): any;
        /**
         * 获取元数据对应的字段数据字典 返回单个对象
         * 仅限静态字典
         * @param appId 元数据id
         */
        getDicByAppid(appId: string): any;
        /**
         * 根据数据字典获取数据美容
         * @param fieldDic
         * @param value
         */
        getDicdescByFieldCode(fieldDic: any, value: string): any;
        /**
         * 根据资源id及参照字典编码获取参照字典项列表
         * @param appId 当前资源id
         * @param diccode 参照字典编码
         */
        getDicAppByDiccode(appId: string, diccode: string): any[];
        /**
         * 根据资源id及参照字典编码获取参照字典项列表
         * @param app 元数据
         * @param diccode 参照字典编码
         */
        getDicAppByAppDiccode(app: Fcapp, diccode: string): any[];
        /**
         * 根据字段名称获取参照字典列表
         * @param appId 元数据id
         * @param fieldCode 字段名称
         */
        getDicAppByFieldcode(appId: string, fieldCode: string): any;
        /**
         * 根据字段名称获取参照字典列表
         * @param app 元数据
         * @param fieldCode 字段名称
         */
        getDicAppByAppFieldcode(app: Fcapp, fieldCode: string): any;
        /**
         * 获取元数据对应的字段参照字典 返回单个对象
         * 仅限静态字典
         * @param appId 元数据id
         */
        getDicAppByAppid(appId: string): any;
        /**
         * 根据参照字典获取数据美容
         * @param fieldDic
         * @param value
         */
        getDicAppdescByFieldCode(fieldDic: any, value: string): any;
      }
      export interface Fcapp {
          /**主表*/ MAINTABLE?: string;
          /**页面地址*/ APPURL?: string;
          /**数据源*/ DATASOURCE?: string;
          /**日志?*/ ENABLELOG?: string;
          /**启用?Y:启用;N:禁用*/ ENABLE?: string;
          /**默认列表预览条数*/ VIEWSIZE?: string;
          /**默认表单显示列数*/ CARDCOLS?: number;
          /**模块*/ APPMODEL?: string;
          /**列表页面*/ LISTPAGE?: string;
          /**卡片页脚字段名称*/ CARDFOOTER?: string;
          /**卡片内容字段名称*/ CARDCONTENT?: string;
          /**卡片导航下级字段*/ CHILDFIELDCODE?: string;
          /**卡片导航上级字段*/ PARENTFIELDCODE?: string;
          /**卡片标题字段名称*/ CARDTITLE?: string;
          /**监听类*/ SERVICECLASS?: string;
          /**缓存?*/ ENABLECACHE?: string;
          /**过滤条件*/ APPFILTER?: string;
          /**分页大小*/ PAGESIZE?: number;
          /**对外开放字段*/ IMPLFIELDS?: string;
          /**表类型*/ TABLETYPE?: string;
          /**表单页面*/ CARDPAGE?: string;
          /**备注*/ REMARK?: string;
          /**SQL排序*/ SORTBY?: string;
          /**APP类型*/ APPTYPE?: string;
          /**UUID*/ ID?: string;
          /**APP中文名称*/ APPNAME?: string;
          /**APP名称*/ APPID?: string;
          P_APPFIELDS: Sysappfields[];
          P_APPFLDGROUP: Sysappfldgroup[];
          P_APPLINKS: Sysapplinks[];
          P_APPDICS: FcDic[];
          P_APPBUTTONS: Sysappbuttons[];
      }
      export interface Sysapp {
          /**主表*/ MAINTABLE?: string;
          /**页面地址*/ APPURL?: string;
          /**数据源*/ DATASOURCE?: string;
          /**日志?*/ ENABLELOG?: string;
          /**启用?Y:启用;N:禁用*/ ENABLE?: string;
          /**默认列表预览条数*/ VIEWSIZE?: string;
          /**默认表单显示列数*/ CARDCOLS?: string;
          /**模块*/ APPMODEL?: string;
          /**列表页面*/ LISTPAGE?: string;
          /**卡片页脚字段名称*/ CARDFOOTER?: string;
          /**卡片内容字段名称*/ CARDCONTENT?: string;
          /**卡片导航下级字段*/ CHILDFIELDCODE?: string;
          /**卡片导航上级字段*/ PARENTFIELDCODE?: string;
          /**卡片标题字段名称*/ CARDTITLE?: string;
          /**监听类*/ SERVICECLASS?: string;
          /**缓存?*/ ENABLECACHE?: string;
          /**过滤条件*/ APPFILTER?: string;
          /**分页大小*/ PAGESIZE?: string;
          /**对外开放字段*/ IMPLFIELDS?: string;
          /**表类型*/ TABLETYPE?: string;
          /**表单页面*/ CARDPAGE?: string;
          /**备注*/ REMARK?: string;
          /**SQL排序*/ SORTBY?: string;
          /**APP类型*/ APPTYPE?: string;
          /**UUID*/ ID?: string;
          /**APP中文名称*/ APPNAME?: string;
          /**APP名称*/ APPID?: string;
      }
    
    `;
  constructor(public mainService: ComponentService) {
    super('', mainService);
  }
}