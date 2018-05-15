import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'daoservicecls',
  templateUrl: './daoservicecls.component.html',
  styles: [`
  
  `]
})
export class DaoserviceclsComponent extends ComponentParent {
    //代码
    code:string=`
    import { CacheService } from './cache.service';
    import { RequestOptions, Response } from '@angular/http';
    import 'rxjs/add/operator/toPromise';
    import 'rxjs/add/operator/map';
    import { CommonService } from './common.service';
    import { ResponseResult } from '../entity/response';
    import { Observable } from 'rxjs/Observable';
    import { Fcconfig } from '../config/fcconfig';
    import { HttpClient } from '@angular/common/http';
    export declare const FCCONFIG: Fcconfig;
    export declare class DaoService {
        http: HttpClient;
        private cacheService;
        private commonService;
        ws: WebSocket;
        constructor(http: HttpClient, cacheService: CacheService, commonService: CommonService);
        /**
         * 获取请求选项对象
         */
        getOptions(): any;
        /**
         * 获取参数列对象
         * @param param 参数
         * @param isArray 是否是数组 默认为false
         */
        getParamOpt(param: any): any;
        /**
         * 获取默认的参数,url中的参数
         *
         */
        getDefaultParams(): string;
        /**
         *
         * @param url 请求url
         * @param params
         */
        getWithPromise(url: string, params: any): Promise<Response>;
        /**
         * 执行get查询，如http://ip:port/url?param=
         * @param url 请求全路径
         * @param params 参数内容
         */
        getBase(url: string, params: any): Observable<any>;
        /**
         * 通过post方法
         * @param url 请求资源
         * @param reqOpts 请求参数
         */
        postBase(url: string, body: any, reqOpts?: RequestOptions): Observable<Object>;
        /**
          * 通过post方法
          * @param url 请求资源
          * @param reqOpts 请求参数
          */
        postByParams(url: string, body: any, reqOpts?: RequestOptions): Observable<Object>;
        /**
           * @description 异常统一处理，抛出异常内容
           * @param err 错误内容
           */
        private handleErr(err);
        /**
         * @description 异常统一处理，抛出异常内容
         * @param err 错误内容
         */
        private handleError(error);
        /**
          * 应用系统接口get请求
          * @param url 请求url，不包含主机及
          * @param params
          */
        getFromApi(url: string, params: any): Observable<ResponseResult>;
        /**
           * 应用系统接口post请求
           * @param url 请求url，不包含主机及
           * @param params
           */
        postFromApi(url: string, params: any): Observable<any>;
        /**
           * 应用系统接口get请求
           * @param url 请求url，不包含主机及
           * @param params
           */
        getFromSystem(url: string, params: any): Observable<any>;
        /**
           * 应用系统接口post请求
           * @param url 请求url，不包含主机及
           * @param params
           */
        postFromSystem(url: string, params: any): Observable<any>;
        /**
           * 应用系统接口get请求
           * @param url 请求url，不包含主机及
           * @param params
           */
        getFromLog(url: string, params: any): Observable<any>;
        /**
           * 应用系统接口post请求
           * @param url 请求url，不包含主机及
           * @param params
           */
        postFromLog(url: string, params: any): Observable<any>;
        /**
         * 应用系统接口get请求
         * @param url 请求url，不包含主机及
         * @param params
         */
        getFromAuth(url: string, params: any): Observable<ResponseResult>;
        /**
           * 应用系统接口post请求
           * @param url 请求url，不包含主机及
           * @param params
           */
        postFromAuth(url: string, params: any): Observable<any>;
        /**
         * 连接ws并监听消息
         */
        connectionWs(userId: string): Observable<any>;
        /**
         * 发送消息
         * @param message 发送消息体
         */
        sendMessage(message: string): void;
    }    
    `;
  constructor(public mainService: ComponentService) {
    super('', mainService);
  }
}