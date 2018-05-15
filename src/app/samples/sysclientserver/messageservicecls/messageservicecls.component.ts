import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'messageservicecls',
  templateUrl: './messageservicecls.component.html',
  styles: [`
  
  `]
})
export class MessageserviceclsComponent extends ComponentParent {
    //代码
    code:string=`
    import { LogService } from './log.service';
    import { DaoService } from './dao.service';
    export declare class MessageService {
        log: LogService;
        daoService: DaoService;
        msgMsg: Message;
        errMsg: Message;
        warmMsg: Message;
        loadingid: string;
        loadStatus: string;
        static sender: any;
        static confirmModal: any;
        constructor(log: LogService, daoService: DaoService);
        /**
         * 消息发送
         * @param message
         */
        sendMsg(message: string): void;
        message(content: string, second?: number): void;
        confirm(content: string, ok: any, cancel: any): void;
        success(content: string, second?: number): void;
        warm(content: string, second?: number): void;
        error(content: string, second?: number): void;
        startLoading(content?: string): void;
        endLoading(): void;
        startAntLoading(content?: string): void;
        endAntLoading(): void;
    }
    export declare class Message {
        msgType: string;
        content: string;
        second: number;
        constructor(msgtype: string, content: string, second: number);
    }    
    `;
  constructor(public mainService: ComponentService) {
    super('', mainService);
  }
}