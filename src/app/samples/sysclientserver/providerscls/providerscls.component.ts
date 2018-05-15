import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'providerscls',
  templateUrl: './providerscls.component.html',
  styles: [`
  
  `]
})
export class ProvidersclsComponent extends ComponentParent {
    //代码
    code:string=`
    import { DaoService } from './dao.service';
    import { LogService } from './log.service';
    import { MessageService } from './message.service';
    import { CacheService } from './cache.service';
    import { CommonService } from './common.service';
    import { UserService } from './user.service';
    import { AppService } from './app.service';
    import { MenuService } from './menu.service';
    import { ProductService } from './product.service';
    export declare class ProvidersService {
        daoService: DaoService;
        logService: LogService;
        msgService: MessageService;
        cacheService: CacheService;
        commonService: CommonService;
        userService: UserService;
        appService: AppService;
        menuService: MenuService;
        productService: ProductService;
        constructor(daoService: DaoService, logService: LogService, msgService: MessageService, cacheService: CacheService, commonService: CommonService, userService: UserService, appService: AppService, menuService: MenuService, productService: ProductService);
    }
    
    `;
  constructor(public mainService: ComponentService) {
    super('', mainService);
  }
}