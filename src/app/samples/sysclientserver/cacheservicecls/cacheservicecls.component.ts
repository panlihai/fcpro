import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'cacheservicecls',
  templateUrl: './cacheservicecls.component.html',
  styles: [`
  
  `]
})
export class CacheserviceclsComponent extends ComponentParent {
    //代码
    code:string=`
    export declare class CacheService {
      constructor();
      set(key: string, value: any): void;
      get(key: string, defaultValue?: any): any;
      clear(): void;
      clearByKey(key: any): void;
      setS(key: string, value: any): void;
      getS(key: string, defaultValue?: any): any;
      clearS(): void;
      clearSByKey(key: any): void;
      objToString(obj: any): string;
  }  
    `;
  constructor(public mainService: ComponentService) {
    super('', mainService);
  }
}