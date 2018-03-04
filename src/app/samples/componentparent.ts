import { ComponentService } from "./services/component.service";
export class ComponentParent {
    public fcOption: any;
    public fcCondition: string;
    constructor(public appId: string, public mainService: ComponentService) {
        this.fcOption = mainService.fcOption;
        this.fcCondition = '{"APPID":"' + appId + '"}';
    }
}