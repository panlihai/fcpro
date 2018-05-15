import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'logservicecls',
  templateUrl: './logservicecls.component.html',
  styles: [`
  
  `]
})
export class LogserviceclsComponent extends ComponentParent {
    //代码
    code:string=`
    import { DaoService } from './dao.service';
    import { CommonService } from './common.service';
    import { CacheService } from './cache.service';
    export declare class LogService {
        private commonServie;
        private daoService;
        private cacheService;
        moduleId: string;
        resId: string;
        constructor(commonServie: CommonService, daoService: DaoService, cacheService: CacheService);
        debug(msg: any): void;
        info(msg: any): void;
        error(msg: any): void;
        /**
         * 记录行为日志
         * @param moduleId 模块id
         * @param resId 资源id
         * @param act 操作编码
         * @param param 操作输入参数
         * @param result 结果
         * @param reason 原因
         */
        writeBehavior(moduleId: string, resId: string, act: string, param: any, result: string, reason?: string): void;
        /**
         * 记录操作日志
         * @param moduleId 模块id
         * @param resId 资源id
         * @param act 操作编码
         * @param param 操作输入参数
         * @param result 结果
         * @param reason 原因
         */
        writeAction(moduleId: string, resId: string, act: string, param: any, result: string, reason?: string): void;
        /**
         * 记录错误日志
         * @param moduleId 模块id
         * @param resId 资源id
         * @param act 操作编码
         * @param param 操作输入参数
         * @param result 结果
         * @param reason 原因
         */
        writeError(moduleId: string, resId: string, act: string, param: any, result: string, reason?: string): void;
        /**
         *
         * @param type 日志类型 操作日志：ACTION;错误日志：ERROR；行为日志：BEHAVIOR；
         * @param act 操作
         * @param level 级别
         * @param param 输入参数
         * @param result 结果
         * @param reason 原因
         */
        write(type: string, moduleId: string, resId: string, act: string, level: number, param: any, result: string, reason: string): void;
    }
    export declare const LOGLEVEL: {
        INFO: number;
        WARM: number;
        ERROR: number;
    };
    export declare const LOGTYPE: {
        ACTION: string;
        ERROR: string;
        BEHAVIOR: string;
    };    
    `;
  constructor(public mainService: ComponentService) {
    super('', mainService);
  }
}