import { ComponentService } from "./services/component.service";
export class ComponentParent {
    public fcOptions: any;
    public fcCondition: string;
    constructor(public appId: string, public mainService: ComponentService) {
        this.fcOptions = mainService.fcOptions;
        this.fcCondition = '{"APPID":"' + appId + '"}';
    }
}