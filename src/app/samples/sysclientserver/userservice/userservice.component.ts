import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'userservice',
  templateUrl: './userservice.component.html',
  styles: [`
  
  `]
})
export class UserserviceComponent extends ComponentParent {
    //代码
    code:string=`
    import { Observable } from 'rxjs/Observable';
    import { DaoService } from './dao.service';
    import { LogService } from './log.service';
    import { CommonService } from './common.service';
    import { CacheService } from './cache.service';
    import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
    export declare class UserService implements CanActivate {
        private daoService;
        private logService;
        private cacheService;
        private commonService;
        private router;
        environment: any;
        moduleId: string;
        resId: string;
        constructor(daoService: DaoService, logService: LogService, cacheService: CacheService, commonService: CommonService, router: Router);
        /**
          *
          * @param route
          * @param state
          */
        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any;
        /**
         * @description 系统登录
         * @param userId 用户编码
         * @param password 用户密码
         */
        login(userId: string, password: string): Observable<any>;
        /**
         * @description 存储用户数据
         * @param data 登陆后返回数据
         */
        storeUserInfo(data: any): void;
        /**
         * @description 获取登录用户数据内容
         */
        getUserInfo(): any;
        /**
         * @description 用户注销
         */
        logout(): Observable<any>;
        /**
         * 清除用户信息
         */
        clearUserinfo(): void;
    }    
    `;
  constructor(public mainService: ComponentService) {
    super('', mainService);
  }
}