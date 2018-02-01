import { Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { AnyComponent } from './any/any.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CheckComponent } from './check/check.component';
import { ChosenComponent } from './chosen/chosen.component';
import { ComboComponent } from './combo/combo.component';
import { DateComponent } from './date/date.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { DividerComponent } from './divider/divider.component';
import { DoubleComponent } from './double/double.component';
import { EditorComponent } from './editor/editor.component';
import { FastpositionComponent } from './fastposition/fastposition.component';
import { IconComponent } from './icon/icon.component';
import { LongComponent } from './long/long.component';
import { ManyComponent } from './many/many.component';
import { PopoverComponent } from './popover/popover.component';
import { RadioComponent } from './radio/radio.component';
import { RateComponent } from './rate/rate.component';
import { SwitchComponent } from './switch/switch.component';
import { TextComponent } from './text/text.component';
import { TextareaComponent } from './textarea/textarea.component';
import { TimeComponent } from './time/time.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TitleComponent } from './title/title.component';
import { TreeComponent } from './tree/tree.component';
import { UploadComponent } from './upload/upload.component';
import { BacktopComponent } from './backtop/backtop.component';
export const basicRouters: Routes = [
    {
        path: 'fcbuttonList/:menuId',//按钮
        component: ButtonComponent
    }, {
        path: 'fcanyList/:menuId',//自定义下拉单选
        component: AnyComponent
    }, {
        path: 'fcbacktopList/:menuId',//回到顶部
        component: BacktopComponent
    }, {
        path: 'fcavatarList/:menuId',//头像
        component: AvatarComponent
    }, {
        path: 'fcbadgeList/:menuId',//徽标
        component: BadgeComponent
    }, {
        path: 'fccalendarList/:menuId',//日历
        component: CalendarComponent
    }, {
        path: 'fccarouselList/:menuId',//轮播图
        component: CarouselComponent
    }, {
        path: 'fccheckList/:menuId',//多选
        component: CheckComponent
    }, {
        path: 'fcchosenList/:menuId',//多选下拉
        component: ChosenComponent
    }, {
        path: 'fccomboList/:menuId',//单选下拉
        component: ComboComponent
    }, {
        path: 'fcdateList/:menuId',//日期
        component: DateComponent
    }, {
        path: 'fcdatetimeList/:menuId',//日期时间
        component: DatetimeComponent
    }, {
        path: 'fcdividerList/:menuId',//分隔
        component: DividerComponent
    }, {
        path: 'fcdoubleList/:menuId',//数值
        component: DoubleComponent
    }, {
        path: 'fceditorList/:menuId',//富文本框
        component: EditorComponent
    }, {
        path: 'fcfastpositionList/:menuId',//快速定位
        component: FastpositionComponent
    }, {
        path: 'fciconList/:menuId',//图标
        component: IconComponent
    }, {
        path: 'fclongList/:menuId',//整数
        component: LongComponent
    }, {
        path: 'fcmanyList/:menuId',//自定义下拉多选
        component: ManyComponent
    }, {
        path: 'fcpopoverList/:menuId',//气泡
        component: PopoverComponent
    }, {
        path: 'fcradioList/:menuId',//单选
        component: RadioComponent
    }, {
        path: 'fcrateList/:menuId',//评分
        component: RateComponent
    }, {
        path: 'fcswitchList/:menuId',//开关
        component: SwitchComponent
    }, {
        path: 'fctextList/:menuId',//文本框
        component: TextComponent
    }, {
        path: 'fctextareaList/:menuId',//大文本框
        component: TextareaComponent
    }, {
        path: 'fctimeList/:menuId',//时间
        component: TimeComponent
    }, {
        path: 'fctimelineList/:menuId',//时间轴
        component: TimelineComponent
    }, {
        path: 'fctitleList/:menuId',//标题
        component: TitleComponent
    }, {
        path: 'fctreeList/:menuId',//树控件
        component: TreeComponent
    }, {
        path: 'fcuploadList/:menuId',//上传
        component: UploadComponent
    }
];
