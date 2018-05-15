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
import { TooltipComponent } from './tooltip/tooltip.component';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { CollapseComponent } from './collapse/collapse.component';
import { TagComponent } from './tag/tag.component';
import { LinkComponent } from './link/link.component';
import { ChatComponent } from './chat/chat.component';
import { LabelComponent } from './label/label.component';
import { CascaderComponent } from './cascader/cascader.component';
import { TreeselectComponent } from './treeselect/treeselect.component';
export const basicRouters: Routes = [
    {
        path: 'system/fcbuttonList',//按钮
        component: ButtonComponent
    }, {
        path: 'system/fcanyList',//自定义下拉单选
        component: AnyComponent
    }, {
        path: 'system/fcbacktopList',//回到顶部
        component: BacktopComponent
    }, {
        path: 'system/fcavatarList',//头像
        component: AvatarComponent
    }, {
        path: 'system/fcbadgeList',//徽标
        component: BadgeComponent
    }, {
        path: 'system/fccalendarList',//日历
        component: CalendarComponent
    }, {
        path: 'system/fccarouselList',//轮播图
        component: CarouselComponent
    }, {
        path: 'system/fccheckList',//多选
        component: CheckComponent
    }, {
        path: 'system/fcchosenList',//多选下拉
        component: ChosenComponent
    }, {
        path: 'system/fccomboList',//单选下拉
        component: ComboComponent
    }
    , {
        path: 'system/fcdateList',//日期
        component: DateComponent
    }
    , {
        path: 'system/fcdatetimeList',//日期时间
        component: DatetimeComponent
    }, {
        path: 'system/fcdividerList',//分隔
        component: DividerComponent
    }, {
        path: 'system/fcdoubleList',//数值
        component: DoubleComponent
    }, {
        path: 'system/fceditorList',//富文本框
        component: EditorComponent
    }, {
        path: 'system/fcfastpositionList',//快速定位
        component: FastpositionComponent
    }, {
        path: 'system/fciconList',//图标
        component: IconComponent
    }, {
        path: 'system/fclongList',//整数
        component: LongComponent
    }, {
        path: 'system/fclist',//列表
        component: ListComponent
    }, {
        path: 'system/fcmanyList',//自定义下拉多选
        component: ManyComponent
    }, {
        path: 'system/fcpopoverList',//气泡
        component: PopoverComponent
    }, {
        path: 'system/fcradioList',//单选
        component: RadioComponent
    }, {
        path: 'system/fcrateList',//评分
        component: RateComponent
    }, {
        path: 'system/fcswitchList',//开关
        component: SwitchComponent
    }
    , {
        path: 'system/fctextList',//文本框
        component: TextComponent
    }
    , {
        path: 'system/fctextareaList',//大文本框
        component: TextareaComponent
    }, {
        path: 'system/fctimeList',//时间
        component: TimeComponent
    }, {
        path: 'system/fctimelineList',//时间轴
        component: TimelineComponent
    }, {
        path: 'system/fctitleList',//标题
        component: TitleComponent
    }, {
        path: 'system/fctableList',//表
        component: TableComponent
    }, {
        path: 'system/fctreeList',//树控件
        component: TreeComponent
    }, {
        path: 'system/fcuploadList',//上传
        component: UploadComponent
    }, {
        path: 'system/fctooltipList',//文字提示
        component: TooltipComponent
    }, {
        path: 'system/fccollapseList',//自定义查询展开收起、折叠面板
        component: CollapseComponent
    }, {
        path: 'system/fclistList',//列表
        component: ListComponent
    }, {
        path: 'system/fctagList',//标签
        component: TagComponent
    },
    {
        path: 'system/fclinkList',//link链接
        component: LinkComponent
    },
    {
        path: 'system/fcchatList',//chat聊天
        component: ChatComponent
    },
    {
        path: 'system/fclabelList',//label
        component: LabelComponent
    },
    {
        path: 'system/fccascaderList',//级联选择
        component: CascaderComponent
    },
    {
        path: 'system/fctreeselectList',//下拉树
        component: TreeselectComponent
    }
];
