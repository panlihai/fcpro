import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
export class IsFormValueChanged {
    canDeactivate(component: any): boolean {
        let equal: boolean = true;
        if (component.mainObj) {
            for (let attr in component.mainObj) {
                if (component.staticMainObj[attr] !== component.mainObj[attr]) {
                    equal = false;
                }
            }
            if (equal) {
                return true;
            } else {
                return window.confirm('检测到您的表单填写信息有变更且未保存，是否确定离开当前页面');
            }
        }
    }
}

@Injectable()
export class DeactivateGuard implements CanDeactivate<any> {
    constructor(private isFormValueChanged: IsFormValueChanged) { }
    canDeactivate(
        component: any,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.isFormValueChanged.canDeactivate(component);
    }
}