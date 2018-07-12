/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService} from 'fccore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
@Injectable()
export class SysemployeeService extends ParentService {
  constructor(public providers: ProvidersService,
    public nzModal: NzModalService
  ) {
    super(providers, "SYSEMPLOYEE");
  }
  /**
  * 根据userid获取员工角色
  * @param employeeid 
  */
  getemployeeRole(employeeid) {
    return this.providers.appService.findWithQuery('SYSROLEUSER', { USERID: employeeid })
  }
  /**
  * 将当前员工的角色信息全部删除
  * @param uerid 
  */
  alldelete(userid) {
    return this.providers.appService.deleteObject('SYSROLEUSER', userid).subscribe(res => {
      if (res.CODE === '0') {
      } else if (res.CODE === '1') {
        this.providers.msgService.error("删除失败");
      }
    })
  }
  /**
   * 将新增员工的角色添加到数据库
   * @param obj 
   */
  addEmployeerole(employeeroleValue, environment,mainObj) {
    //获取所有的员工角色
    let employeeroleArr: any[] = [];
    let arr = employeeroleValue.split(',');
    arr.forEach(element => {
      employeeroleArr.push({
        PID: environment.pid,
        ROLEID: element,
        USERID: mainObj.SEMPLOYEE_CODE,
        REMARK: ''
      });
    })
    return this.providers.appService.saveObject('SYSROLEUSER', employeeroleArr).subscribe(res => {
      if (res.CODE === '0') {
        this.providers.msgService.success('保存成功');
      } else if (res.CODE === '1') {
        this.providers.msgService.error('保存失败')
      }
    })
  }
/**
 * 将修改的员工的角色添加到数据库
 * @param obj 
 */
editEmployeerole(obj) {
  return this.providers.appService.saveObject('SYSROLEUSER', obj).subscribe(res => {
    if (res.CODE === '0') {
      this.providers.msgService.success('保存成功');
    } else if (res.CODE === '1') {
      this.providers.msgService.error('保存失败')
    }
  })
}
}
export interface Sysemployee {
  ID: string;//	主键id 
  SEMPLOYEE_CODE: string; //工号 
  SEMPLOYEE_NAME: string; //姓名
  SGENDER: string; //性别 
  SCOMPANY_CODE: string;// 所属公司 
  SDEPT_CODE: string;// 所属部门
  SBIRTH_PLACE: string; //出生地
  IAGE: number;// 年龄
  SBIRTH_DATE: Date;// 出生日期
  SCTF_TYPE: string;// 证件类型 
  SPERSONAL_ID: string; //证件号码 
  SPASSPORT_NO: string; //护照 
  SOTHER_NAME_USED: string; //曾用名
  SFIRSTNAME: string;//	FirstName 
  SMIDDLENAME: string; //MiddleName 
  SLASTNAME: string; //LastName
  SHUKOU_LOCATION: string; //户口所在地 
  SNATION: string;// 民族 
  SNATIVEPLACE: string;// 籍贯
  SNATIONALITY: string; //国籍
  SMARITAL_STATUS: string;// 婚姻状况
  SPOLITICAL_STATUS: string;// 政治面貌
  SFIRST_WORK_DATE: Date;// 开始工作日期 
  SREMARK: string; //备注说明 
  SQUANPIN: string; //姓名全拼 
  SJIANPIN: string; //姓名简拼
  SFIRST_QUANPIN: string;// 首字全拼其余简拼
  SPHOTO: string; //照片
  STHUMBNAIL_PHOTO: string;// 缩略图
  NORDER: number;// 显示序号
  SCRATOR: string;// 创建人 
  SCREATE_TIME: string; //创建时间 
  SMODIFIER: string; //修改人 
  SMODIFY_TIME: string; //修改时间
}
