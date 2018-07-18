/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
@Injectable()
export class SysbizcodedefineService extends ParentService {
  constructor(public providers: ProvidersService) {
    super(providers, "SYSBIZCODEDEFINE");
  }
   /**
     * 获取当前编码规则子表的所有内容
     * */
    bizcodedefineAll() {
      return this.providers.appService.findWithQuery("SYSBIZCODEDEFINE", {})
  }
   // 字表数据修改保存
   rulemodalObjsave(obj) {
    return this.providers.appService.saveObject('SYSBIZCODEDEFINE', obj).subscribe(res => {
      if (res.CODE = '0') {
        this.providers.msgService.success('保存成功');
      } else if (res.CODE = '1') {
        this.providers.msgService.error('保存失败')
      }
    })
  }
	//新增子表数据
	childrensave(obj) {
    return this.providers.appService.saveObject('SYSBIZCODEDEFINE', obj).subscribe(res => {
      if (res.CODE = '0') {
        this.providers.msgService.success('保存成功');
      } else if (res.CODE = '1') {
        this.providers.msgService.error('保存失败')
      }
    })
  }
  	//修改子表数据
	childrenupdate(obj) {
    return this.providers.appService.updateObject('SYSBIZCODEDEFINE', obj).subscribe(res => {
      if (res.CODE = '0') {
        this.providers.msgService.success('保存成功');
      } else if (res.CODE = '1') {
        this.providers.msgService.error('保存失败')
      }
    })
  }
  //编码规则新增数据增到子表中并且显示出来
  // 刷新列表
  listrefleshFun(sendCondition,bizcoderuledifinelist){
    //刷新列表
    let con: any = {
    ORDER: 'NSERIAL_NUM'
  }
  sendCondition = JSON.stringify(con);
  bizcoderuledifinelist.fcReflesh();
}
}

export interface Sysbizcodefine {
  // ID:string;
	SSEGMENT_TYPE: string ;	//类型	SYSBIZCODEFINE	-	字符型	32	是	1	否	是	否	是	是	否	文本框	-	-	-	1
	SSEGMENT_NAME: string;//	名称	-	-	字符型	256	是	2	否	是	否	是	是	否	文本框	-	-	-	1
	SDESCRIPTION: string;	//SDESCRIPTION	-	-	字符型	512	是	3	否	是	否	否	是	否	文本框	-	-	-	1
	SPARAM_NAME: string;	//参数名称	-	-	字符型	256	是	3	否	是	否	是	是	否	文本框	-	-	-	1
	NSERIAL_NUM: string;	//NSERIAL_NUM	-	-	数值	22	是	4	否	是	否	否	是	否	文本框	-	-	-	1
	NFIXED_LENGTH	: string;//NFIXED_LENGTH	-	-	数值	22	是	5	否	是	否	否	是	否	文本框	-	-	-	1
  SDEFAULT_VALUE: string;	//SDEFAULT_VALUE	-	-	字符型	256	是	6	否	是	否	否	是	否	文本框	-	-	-	1
	SDATE_FORMAT_CODE: string;	//SDATE_FORMAT_CODE	-	-	字符型	32	是	8	否	是	否	否	是	否	文本框	-	-	-	1
  SENUMERATE_TERM_CODE: string;	//枚举名称	-	-	字符型	256	是	9	否	是	否	是	是	否	文本框	-	-	-	1
	SENUMERATE_CODE_NAME: string;		//转义项	-	-	字符型	256	是	10	否	是	否	是	是	否	文本框	-	-	-	1
  SENUMERATE_CODE_VALUE: string;//枚举代码	-	-	字符型	256	是	11	否	是	否	是	是	否	文本框	-	-	-	1
	NPARAMETER_LEFT_PLACES: string;	//NPARAMETER_LEFT_PLACES	-	-	数值	22	是	12	否	是	否	否	是	否	文本框	-	-	-	1
  SFIXED_VALUE: string;	//SFIXED_VALUE	-	-	字符型	256	是	13	否	是	否	否	是	否	文本框	-	-	-	1
	SSQL_SCRIPT: string;//SSQL_SCRIPT	-	-	字符型	4000	是	14	否	是	否	否	是	否	文本框	-	-	-	1
	SSERIALTYPE_FULL_CODE	: string;//SSERIALTYPE_FULL_CODE	-	-	字符型	256	是	15	否	是	否	否	是	否	文本框	-	-	-	1
	NSERIALTYPE_START_VALUE: string;	//NSERIALTYPE_START_VALUE	-	-	数值	22	是	16	否	是	否	否	是	否	文本框	-	-	-	1
	NSERIALTYPE_STEP_VALUE: string;	//NSERIALTYPE_STEP_VALUE	-	-	数值	22	是	17	否	是	否	否	是	否	文本框	-	-	-	1
	SENUNERATE_MAPPING_INFO:string;	//SENUNERATE_MAPPING_INFO	-	-	字符型	4000	是	18	否	是	否	否	是	否	文本框	-	-	-	1
	SBIZCODE_RULE_ID:string;	//SBIZCODE_RULE_ID	-	-	字符型	32	是	19	否	是	否	否	是	否	文本框	-	-	-	1
	SEXTEND_CLASS_NAME:string;	//SEXTEND_CLASS_NAME	-	-	字符型	256	是	20	否	是	否	否	是	否	文本框	-	-	-	1
	SPARAMETER_RIGHT_PLACES:string;	//SPARAMETER_RIGHT_PLACES	-	-	字符型	256	是	21	否	是	否	否	是	否	文本框	-	-	-	1
	SCRATOR:string;	//SCRATOR	-	-	字符型	40	是	22	否	是	否	否	是	否	文本框	-	-	-	1
	SCREATE_TIME:string;	//SCREATE_TIME	-	-	字符型	40	是	23	否	是	否	否	是	否	文本框	-	-	-	1
	SMODIFIER2:string;	//SMODIFIER2	-	-	字符型	40	是	24	否	是	否	否	是	否	文本框	-	-	-	1
	SMODIFY_TIME:string;	//SMODIFY_TIME	-	-	字符型	40	是	25	否	是	否	否	是	否	文本框	-	-	-	
}
