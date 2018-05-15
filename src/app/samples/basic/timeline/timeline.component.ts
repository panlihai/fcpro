import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { TimelineOptions } from 'fccomponent';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styles: [``]
})
export class TimelineComponent extends ComponentParent {
  //基础js
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'timeline',
    templateUrl: './timeline.component.html',
    styleUrl:'./timeline.component.css'
  })
  export class TimelineComponent{
    //基本时间轴
    timeline1: TimelineOptions = {
      fcAppid: '',
      fcLabelCode: 'label',
      fcTitleCode: 'title',
      fcSmarkCode: 'smark',
      fcColorCode: 'color'
    };
    constructor() {  
      this.timeline1.fcValues = [
        {
          label: "2018-03-14 18:00",
          title: "标题1",
          subTitle: "小标题",
          smark: "这是描述",
          color: 2
        }, {
          label: "2018-03-14 18:00",
          title: "标题2",
          subTitle: "小标题",
          smark: "这是描述",
          color: 2
        }, {
          label: "2018-03-14 18:00",
          title: "标题3",
          subTitle: "小标题",
          smark: "这是描述",
          color: 2
        }, {
          label: "2018-03-14 18:00",
          title: "标题4",
          subTitle: "小标题",
          smark: "这是描述",
          color: 2
        }
      ]
      this.timelineColor.fcValues = [
        {
          label: "2018-03-14 18:00",
          title: "标题1",
          subTitle: "小标题",
          smark: "这是描述",
          color: 0
        }, {
          label: "2018-03-14 18:00",
          title: "标题2",
          subTitle: "小标题",
          smark: "这是描述",
          color: 1
        }, {
          label: "2018-03-14 18:00",
          title: "标题3",
          subTitle: "小标题",
          smark: "这是描述",
          color: 2
        }, {
          label: "2018-03-14 18:00",
          title: "标题4",
          subTitle: "小标题",
          smark: "这是描述",
          color: 1
        }
      ]
    }
  }

  `
  //colorjs
  colorjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'timeline',
    templateUrl: './timeline.component.html',
    styleUrl:'./timeline.component.css'
  })
  export class TimelineComponent{
    //基本时间轴
    timeline1: TimelineOptions = {
      fcAppid: '',
      fcLabelCode: 'label',
      fcTitleCode: 'title',
      fcSmarkCode: 'smark',
      fcColorCode: 'color'
    };
    //圆圈颜色
    timelineColor: TimelineOptions = {
      fcAppid: '',
      fcLabelCode: 'label',
      fcTitleCode: 'title',
      fcSmarkCode: 'smark',
      fcColorCode: 'color'
    };
    constructor() {  
      this.timeline1.fcValues = [
        {
          label: "2018-03-14 18:00",
          title: "标题1",
          subTitle: "小标题",
          smark: "这是描述",
          color: 2
        }, {
          label: "2018-03-14 18:00",
          title: "标题2",
          subTitle: "小标题",
          smark: "这是描述",
          color: 2
        }, {
          label: "2018-03-14 18:00",
          title: "标题3",
          subTitle: "小标题",
          smark: "这是描述",
          color: 2
        }, {
          label: "2018-03-14 18:00",
          title: "标题4",
          subTitle: "小标题",
          smark: "这是描述",
          color: 2
        }
      ]
      this.timelineColor.fcValues = [
        {
          label: "2018-03-14 18:00",
          title: "标题1",
          subTitle: "小标题",
          smark: "这是描述",
          color: 0
        }, {
          label: "2018-03-14 18:00",
          title: "标题2",
          subTitle: "小标题",
          smark: "这是描述",
          color: 1
        }, {
          label: "2018-03-14 18:00",
          title: "标题3",
          subTitle: "小标题",
          smark: "这是描述",
          color: 2
        }, {
          label: "2018-03-14 18:00",
          title: "标题4",
          subTitle: "小标题",
          smark: "这是描述",
          color: 1
        }
      ]
    }
  }
  `
  //基本时间轴
  timeline1: TimelineOptions = {
    fcAppid: '',
    fcLabelCode: 'label',
    fcTitleCode: 'title',
    fcSmarkCode: 'smark',
    fcColorCode: 'color'
  };
  //圆圈颜色
  timelineColor: TimelineOptions = {
    fcAppid: '',
    fcLabelCode: 'label',
    fcTitleCode: 'title',
    fcSmarkCode: 'smark',
    fcColorCode: 'color'
  };
  constructor(public mainService: ComponentService) {
    super('FCTIMELINE', mainService);

    this.timeline1.fcValues = [
      {
        label: "2018-03-14 18:00",
        title: "标题1",
        subTitle: "小标题",
        smark: "这是描述",
        color: 2
      }, {
        label: "2018-03-14 18:00",
        title: "标题2",
        subTitle: "小标题",
        smark: "这是描述",
        color: 2
      }, {
        label: "2018-03-14 18:00",
        title: "标题3",
        subTitle: "小标题",
        smark: "这是描述",
        color: 2
      }, {
        label: "2018-03-14 18:00",
        title: "标题4",
        subTitle: "小标题",
        smark: "这是描述",
        color: 2
      }
    ]
    this.timelineColor.fcValues = [
      {
        label: "2018-03-14 18:00",
        title: "标题1",
        subTitle: "小标题",
        smark: "这是描述",
        color: 0
      }, {
        label: "2018-03-14 18:00",
        title: "标题2",
        subTitle: "小标题",
        smark: "这是描述",
        color: 1
      }, {
        label: "2018-03-14 18:00",
        title: "标题3",
        subTitle: "小标题",
        smark: "这是描述",
        color: 2
      }, {
        label: "2018-03-14 18:00",
        title: "标题4",
        subTitle: "小标题",
        smark: "这是描述",
        color: 1
      }
    ]
  }
}