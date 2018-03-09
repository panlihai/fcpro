import { RouteReuseStrategy, DefaultUrlSerializer, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class FcRouteReuseStrategy implements RouteReuseStrategy {

  _cacheRouters: { [key: string]: any } = {};

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this._cacheRouters[route.routeConfig.path] = {
      snapshot: route,
      handle: handle
    };
  }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this._cacheRouters[route.routeConfig.path];
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (route.routeConfig.path.length === 0) {
      return null;
    } else if (this._cacheRouters[route.routeConfig.path] !== undefined) {
      return this._cacheRouters[route.routeConfig.path].handle;
    } else {
      return null;
    }
  }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
