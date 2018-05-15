import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'commonservicecls',
  templateUrl: './commonservicecls.component.html',
  styles: [`
  
  `]
})
export class CommonserviceclsComponent extends ComponentParent {
    //代码
    code:string=`
    import { Observable } from 'rxjs/Observable';
    import 'rxjs/add/observable/forkJoin';
    import 'rxjs/add/observable/concat';
    export declare class CommonService {
        private eventEmit;
        constructor();
        /**
         * 发生事件
         * @param actCode 事件名称
         */
        event(eventName: string, param: any): void;
        /**
         * 订阅事件
         * @param 获取
         * @param 方法
         */
        subscribe(actCode: string, func: Function): void;
        private base64EncodeChars;
        private base64DecodeChars;
        /**
         * base64编码
         * @param {Object} str
         */
        private base64encode(str);
        /**
         * base64解码
         * @param {Object} str
         */
        private base64decode(str);
        /**
         * utf16转utf8
         * @param {Object} str
         */
        private utf16to8(str);
        /**
        * utf8转utf16
        * @param {Object} str
        */
        private utf8to16(str);
        /**
        * 加密
        */
        enCode64(str: any): any;
        /**
        * base64解密
        */
        deCode64(str: any): any;
        /**
         * 根据模块及资源获取到url
         * @param moduleId 模块id
         * @param resId 资源id
         */
        getUrlBy(moduleId: string, resId: string, act: string): string;
        /**
         * 获取随机数
         * @param n 范围内的数值
         */
        Random(n: any): string;
        /**
         * 获取当前时间戳
         */
        getMilliseconds(): number;
        /**
         * 获取时间戳
         * @param date 当前时间
         */
        getMillisecondsFromDate(date: string): number;
        /**
         * 秒数转时间
         * @param seconds 秒数
         */
        getDateByMilliseconds(seconds: number): Date;
        /**
         * 获取当前时间秒数
         */
        getTimestamp(): number;
        /**
         * 根据指定日期获取秒数
         * @param date 指定日期
         */
        getTimestampFromDate(date: string): number;
        /**
         * 秒数转日期
         * @param seconds 秒数
         */
        getDateByTimetamp(seconds: number): Date;
        /**
         * 获取当前年月
         * @param seg 分隔符 / -
         */
        getYearMonth(seg?: string): string;
        /**
         * 获取当前年月日
         * @param seg 分隔符
         */
        getDate(seg?: string): string;
        /**
         * 时间格式化处理
         * @param 格式化字符串
         * @param 格式化日期格式化
         * */
        dateFormat(date: Date, fmt: string): string;
        /**
         * 时间格式化处理
         * @param 格式化字符串
         * @param 格式化日期格式化
         * */
        stringDateFormat(dateStr: string, fmt: string): string;
        /**
         * 时间戳格式化处理
         * @param 格式化
         * @param 时间戳
         * */
        timestampFormat(timestamp: number, fmt: string): string;
        /**
           * 字符串转时间（yyyy-MM-dd HH:mm:ss、yyyy/M/d HH:mm:ss、yyyyMMddHHmmss、yyyyMMddHHmm、yyyyMMdd）
           * result （分钟）
           */
        stringToDate(fDate: string): Date;
        /**
         * 数值格式化
         * @param num 数值
         * @param format 格式化
         */
        numberFormat(num: number, format: string): string;
        /****
        * 替换文件
        * text :为源文件
        * rep:需要替换的符号
        * rex:替换后的符号
        * **/
        textReplaceAll(text: string, regexp: string, replacement: string): string;
        /**
         * md5加密
         * @param string 被md5加密的字符串
         */
        md5Encode(str: string): string;
        /**
        *
        * @param {当前值} value
        * @param {默认值} defaultValue
        */
        getVbyNull(value: any, defaultValue: any): any;
        /**
         *
         * @description 数组转树结构
         * @param list 数据列表
         * @param parentValue 上级编码的值
         * @param code 编码
         * @param name 名称
         * @param subtitle 小标题
         * @param parent 父级编码字段
         */
        listtotree(list: any[], parentValue: any, code: string, name: string, parent: string): any[];
        /**
         * 把字符串的参数替换成data中有的值参数形式为:{PARAMID:''}
         * @param data 数据对象
         * @param dataStr 字符串
         */
        getStringFilterByParam(data: any, dataStr: string): string;
        /**
           *
           * @description 数组转树结构
           * @param id id值
           * @param list 数据列表
           * @param parentValue 上级编码的值
           * @param code 编码
           * @param name 名称
           * @param subtitle 小标题
           * @param parent 父级编码字段
           * @param childFieldCode 是否有子节点的名称
           */
        listtotreeasync(list: any[], code: string, name: string, parent: string, childFieldCode: string): any[];
        /**
          * 当前值作为observable
          * 适合在有值的适合返回
          * @param {?} 当前值
          * @return {?}
          */
        createObservable(obj: any): Observable<any>;
        /**
         * 串行执行两个订阅任务
         * @param obs1 Observable
         * @param obs2 Observable
         */
        createObservableConcat(obs1: Observable<any>, obs2: Observable<any>): Observable<any>;
        /**
           * 并行执行多个订阅任务
           * @param obs1 Observable
           * @param obs2 Observable
           */
        createObservableJoin(obs1: Observable<any>[]): Observable<any>;
        /**
         * 复制对象
         * @param obj 复制对象
         */
        cloneObj(obj: any, exceptKey?: string): any;
        /**
         * 复制对象
         * @param obj 复制对象
         */
        cloneArray(objs: any, exceptKey?: string): any;
    }    
    `;
  constructor(public mainService: ComponentService) {
    super('', mainService);
  }
}