/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { SysproductService } from './sysproduct.service';
@Injectable()
export class SysmenuService extends ParentService {
	constructor(public providers: ProvidersService,
		public nzModal: NzModalService,
		public sysproductService: SysproductService,
	) {
		super(providers, "SYSMENU");
	}
	/**
	* 获取产品
	*/
	getProduct() {
		return this.sysproductService.findWithQuery({});
	}
	/**
  	* 根据产品名称获取PID
  	*/
	getPid(pname) {
		return this.providers.appService.findWithQuery('SYSPRODUCT', { PNAME: pname })
	}
	/**
	* @param {page:1,size:20,...}
	* @description 查詢
	*/
	getMenu(): Observable<any> {
		return this.providers.menuService.findAllMenu("");
	}
	/**
    * 两个对象交换排序
    * @param menu1
    * @param menu2
    * @param index
    * @param menus
    */
	changeSort(menu1, menu2, index, menus) {
		let temp = menus[index];
		menus[index] = menus[index - 1];
		menus[index - 1] = temp;
		let sort = menu1.SORT;
		menu1.SORT = menu2.SORT;
		menu2.SORT = sort;
		return this.updateList([menu1, menu2]);
	}
	/**
   * 是否显示二级导航文字
   * @param sysmenu
   * @param secondMenusText
   */
	isShow(sysmenus, menusText) {
		sysmenus.forEach(element => {
			let num = 0;
			if (element.opened === true && num === 0) {
				menusText = true;
				num++;
			}
		})
	}
}
export interface Sysmenu {
	ID: string;//UUID字符型	
	PID: string;//产品ID
	MENUID: string;//菜单编码
	MENUNAME: string;//中文名称
	ENABLE: string;//启用?
	ROUTER: string;//路由
	WXMENU: string;//微信菜单?
	DESCRIPTION: string;//描述
	MENUTYPE: string;//类型
	APPID: string;//应用程序编码
	APPFILTER: string;//应用程序过滤
	HASCHILD: string;//有子菜单?
	MENUICON: string;//图标
	PARENT: string;//上级菜单编码
	SORT: string;//排序
	REMARK: string;//备注
}
