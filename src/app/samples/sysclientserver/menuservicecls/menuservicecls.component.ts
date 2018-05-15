import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'menuservicecls',
  templateUrl: './menuservicecls.component.html',
  styles: [`
  
  `]
})
export class MenuserviceclsComponent extends ComponentParent {
    //代码
    code:string=`
    import { DaoService } from './dao.service';
    import { LogService } from './log.service';
    import { CacheService } from './cache.service';
    import { CommonService } from './common.service';
    import { App } from '../entity/app';
    import { ResponseResult } from '../entity/response';
    import { Observable } from 'rxjs/Observable';
    export declare class MenuService {
        private daoService;
        private logService;
        private cacheService;
        private commonService;
        moduleId: string;
        resId: string;
        environment: any;
        app: App;
        menus: any;
        constructor(daoService: DaoService, logService: LogService, cacheService: CacheService, commonService: CommonService);
        /**
         * 根据appid获取到应用程序内容
         */
        findAllWithQuery(): Observable<ResponseResult>;
        /**
         * 根据appid获取到应用程序内容
         */
        findWithQuery(param: any): Observable<ResponseResult>;
        /**
         * 获取所有菜单内容。
         */
        findAllMenu(parentCode: string): Observable<any>;
        /**
         * 存储菜单信息
         * @param menus 按钮
         */
        storeMenus(menus: any): void;
        /**
         * 删除缓存数据
         */
        removeMenus(): void;
    }    
    `;
  constructor(public mainService: ComponentService) {
    super('', mainService);
  }
}