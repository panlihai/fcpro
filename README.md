# Fcexample
这个项目依赖于[Angular CLI](https://github.com/angular/angular-cli) version 1.6.3脚手架
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
## 什么是FC
FC是fastcore的简称
1.基于angular5、spring实现前后端分离的开发平台.
2.标准化的路由引擎.
3.强制实施结构化模型-视图-控制器（MVC)框架.
4.强制模块化.
5.标准化的组件、具备数据绑定、可扩展性、整洁
6.采用angular作为前端框架，推荐使用TYPESCRIPT2.2规范编写代码，展现层原子组件采用蚂蚁金服ant design或其扩展产品，把功能组件与业务相结合形成业务组件；所有开发人员通过业务组件化的设计思路开发前端产品；业务组件形成模块，模块独立文件夹，独立项目，独立发布；提供核心模块、工具模块，所有业务模块依赖工具模块，核心模块依赖工具模块及各业务模块，核心模块组合不同业务模块形成不同产品
## 开发计划
-这是平台的开发计划
<pre>
    <code>
       <table border="1">
  <tr>
    <th>优先级</th>
    <th>类型</th>
    <th>序号</th>
    <th>开发内容</th>
    <th>已开发</th>
    <th>是否完成</th>
    <th>预计工作量(天/人)</th>
    <th>实际工作量</th>
    <th>预计完成时间</th>
    <th>实际完成时间</th>
    <th>负责人</th>
    <th>备注</th>
  </tr>
  <tr>
    <td rowspan="6">1</td>
    <td rowspan="6">平台组件整合</td>
    <td>1</td>
    <td>登录</td>
    <td>是</td>
    <td>否</td>
    <td>0.5</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>2</td>
    <td>注册</td>
    <td>是</td>
    <td>否</td>
    <td>0.5</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>3</td>
    <td>路由复用</td>
    <td>是</td>
    <td>否</td>
    <td>2</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>4</td>
    <td>组件demo</td>
    <td>是</td>
    <td>否</td>
    <td>2</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>5</td>
    <td>组件API</td>
    <td>是</td>
    <td>否</td>
    <td>2</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>6</td>
    <td>平台框架整合</td>
    <td>是</td>
    <td>否</td>
    <td>2</td>
    <td></td>
    <td>2018年2月2日</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="5">1</td>
    <td rowspan="5">授权认证</td>
    <td>1</td>
    <td>菜单授权</td>
    <td>否</td>
    <td>否</td>
    <td>2</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>2</td>
    <td>按钮授权</td>
    <td>否</td>
    <td>否</td>
    <td>2</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>3</td>
    <td>登录授权</td>
    <td>否</td>
    <td>否</td>
    <td>2</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>4</td>
    <td>接口授权</td>
    <td>否</td>
    <td>否</td>
    <td>2</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>5</td>
    <td>其它资源授权</td>
    <td>否</td>
    <td>否</td>
    <td>2</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>3</td>
    <td>预算升级</td>
    <td>1</td>
    <td>全面预算项目升级</td>
    <td>否</td>
    <td>否</td>
    <td>7</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>4</td>
    <td>多数据源</td>
    <td>1</td>
    <td>多数据源开发</td>
    <td>否</td>
    <td>否</td>
    <td>5</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>5</td>
    <td>资源存储解决方案</td>
    <td>1</td>
    <td>资源存储解决方案</td>
    <td>否</td>
    <td>否</td>
    <td>3</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>6</td>
    <td>日志处理</td>
    <td>1</td>
    <td>日志处理开发</td>
    <td>否</td>
    <td>否</td>
    <td>4</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
</code>  
</pre>
## 开发步骤
<pre>
<code>
1.nodejs环境搭建后，查看node版本node -v    npm -v
2.git环境搭建，操作步骤：
   提交代码git add . 
   保存代码git commit  
   更新代码git pull origin dev 
   提交代码 git   push origin dev
3.Angular Cli环境搭建：https://github.com/angular/angular-cli
   -npm install -g typescript             
   npm install -g @angular/cli
4.安装淘宝镜像 npm install -g cnpm --registry=http://registry.npm.taobao.org
5.vscode工具安装，集成了很多插件，内置git命令，通过编辑器提交代码。
6.注册GitHub账号，克隆安装fcexample项目，遇到平台相关的问题在fcexample的Issues中搜索、提出问题，建立平台知识库。
7.angular的模块 
8.安装淘宝镜像 npm install -g cnpm --registry=http://registry.npm.taobao.org
9.vscode工具安装，集成了很多插件，内置git命令，通过编辑器提交代码。
10.命令行执行 git clone https://github.com/panlihai/fcexample.git 克隆安装fcexample项目，遇到平台相关的问题在fcexample的Issues中搜索、提出问题，建立平台知识库。
</code>
</pre>
## 开发计划
 -这是平台的组件清单
<pre>
    <code>
    <table border=0 cellpadding=0 cellspacing=0 width=1509 style='border-collapse: 
 collapse;table-layout:fixed;width:1131pt;display: -webkit-box;'>
    <col class=x69 width=49 style='mso-width-source:userset;width:36pt'>
    <col class=x70 width=71 style='mso-width-source:userset;width:53pt'>
    <col class=x69 width=52 style='mso-width-source:userset;width:39pt'>
    <col width=144 style='mso-width-source:userset;width:108pt'>
    <col width=83 style='mso-width-source:userset;width:62pt'>
    <col width=112 style='mso-width-source:userset;width:84pt'>
    <col width=197 style='mso-width-source:userset;width:147pt'>
    <col width=127 style='mso-width-source:userset;width:95pt'>
    <col width=143 style='mso-width-source:userset;width:107pt'>
    <col width=145 style='mso-width-source:userset;width:108pt'>
    <col width=84 style='mso-width-source:userset;width:63pt'>
    <col width=302 style='mso-width-source:userset;width:226pt'>
    <tr height=42 style='mso-height-source:userset;height:31.5pt' id='r0'>
        <td colspan=12 id='tc0' height=42 class=x71 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:31.5pt;'>平台组件设计清单</td>
    </tr>
    <tr height=27 style='mso-height-source:userset;height:20.25pt' id='r1'>
        <td height=27 class=x73 style='height:20.25pt;'>序号</td>
        <td class=x73>类型</td>
        <td class=x73>序号</td>
        <td class=x73>组件</td>
        <td class=x73>已开发</td>
        <td class=x73>是否完成</td>
        <td class=x74>预计工作量(天/人)</td>
        <td class=x74>实际工作量</td>
        <td class=x74>预计完成时间</td>
        <td class=x74>实际完成时间</td>
        <td class=x74>负责人</td>
        <td class=x74>备注</td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r2'>
        <td rowspan=33 height=627 class=x75 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:470.25pt;'>1</td>
        <td rowspan=33 height=627 class=x76 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:470.25pt;'>基础组件</td>
        <td class=x75>1</td>
        <td class=x77>标题</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r3'>
        <td class=x75>2</td>
        <td class=x77>回到顶部</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r4'>
        <td class=x75>3</td>
        <td class=x77>图标</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r5'>
        <td class=x75>4</td>
        <td class=x77>分隔</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r6'>
        <td class=x75>5</td>
        <td class=x77>按钮</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r7'>
        <td class=x75>6</td>
        <td class=x77>开关</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r8'>
        <td class=x75>7</td>
        <td class=x77>日期</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r9'>
        <td class=x75>8</td>
        <td class=x77>日期时间</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r10'>
        <td class=x75>9</td>
        <td class=x77>时间</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r11'>
        <td class=x75>10</td>
        <td class=x77>文本框</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r12'>
        <td class=x75>11</td>
        <td class=x77>数值</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r13'>
        <td class=x75>12</td>
        <td class=x77>整数</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r14'>
        <td class=x75>13</td>
        <td class=x77>大文本框</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r15'>
        <td class=x75>14</td>
        <td class=x77>富文本框</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r16'>
        <td class=x75>15</td>
        <td class=x77>单选</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r17'>
        <td class=x75>16</td>
        <td class=x77>多选</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r18'>
        <td class=x75>17</td>
        <td class=x77>单选下拉</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r19'>
        <td class=x75>18</td>
        <td class=x77>多选下拉</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r20'>
        <td class=x75>19</td>
        <td class=x77>自定义下拉单选</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r21'>
        <td class=x75>20</td>
        <td class=x77>自定义下拉多选</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r22'>
        <td class=x75>21</td>
        <td class=x77>上传</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r23'>
        <td class=x75>22</td>
        <td class=x77>树控件</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r24'>
        <td class=x75>23</td>
        <td class=x77>表单</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r25'>
        <td class=x75>24</td>
        <td class=x77>详情</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r26'>
        <td class=x75>25</td>
        <td class=x77>折叠</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r27'>
        <td class=x75>26</td>
        <td class=x77>头像</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r28'>
        <td class=x75>27</td>
        <td class=x77>徽标</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r29'>
        <td class=x75>28</td>
        <td class=x77>日历</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r30'>
        <td class=x75>29</td>
        <td class=x77>评分</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r31'>
        <td class=x75>30</td>
        <td class=x77>时间轴</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r32'>
        <td class=x75>31</td>
        <td class=x77>气泡</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r33'>
        <td class=x75>32</td>
        <td class=x77>快速定位</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r34'>
        <td class=x75>33</td>
        <td class=x77>轮播图</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r35'>
        <td rowspan=7 height=133 class=x75 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:99.75pt;'>2</td>
        <td rowspan=7 height=133 class=x76 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:99.75pt;'>列表</td>
        <td class=x75>1</td>
        <td class=x77>查询树列表</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r36'>
        <td class=x75>2</td>
        <td class=x77>自定义列表</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r37'>
        <td class=x75>3</td>
        <td class=x77>数据列表</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r38'>
        <td class=x75>4</td>
        <td class=x77>编辑列表</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r39'>
        <td class=x75>5</td>
        <td class=x77>自定义树列表</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r40'>
        <td class=x75>6</td>
        <td class=x77>查询列表</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r41'>
        <td class=x75>7</td>
        <td class=x77>编辑列表</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r42'>
        <td rowspan=3 height=57 class=x75 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:42.75pt;'>3</td>
        <td rowspan=3 height=57 class=x76 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:42.75pt;'>查询选择</td>
        <td class=x75>1</td>
        <td class=x77>查询选择列表</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r43'>
        <td class=x75>2</td>
        <td class=x77>查询选择树及列表</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r44'>
        <td class=x75>3</td>
        <td class=x77>查询选择树</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r45'>
        <td rowspan=8 height=152 class=x75 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:114pt;'>4</td>
        <td rowspan=8 height=152 class=x76 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:114pt;'>模态框</td>
        <td class=x75>1</td>
        <td class=x77>询问</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r46'>
        <td class=x75>2</td>
        <td class=x77>警告</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r47'>
        <td class=x75>3</td>
        <td class=x77>消息</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r48'>
        <td class=x75>4</td>
        <td class=x77>成功</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r49'>
        <td class=x75>5</td>
        <td class=x77>错误</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r50'>
        <td class=x75>6</td>
        <td class=x77>表单</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r51'>
        <td class=x75>7</td>
        <td class=x77>列表</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r52'>
        <td class=x75>8</td>
        <td class=x77>左树及列表</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r53'>
        <td rowspan=4 height=76 class=x75 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:57pt;'>5</td>
        <td rowspan=4 height=76 class=x76 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:57pt;'>布局</td>
        <td class=x75>1</td>
        <td class=x77>分组</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r54'>
        <td class=x75>2</td>
        <td class=x77>横向</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r55'>
        <td class=x75>3</td>
        <td class=x77>纵向</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r56'>
        <td class=x75>4</td>
        <td class=x77>门户</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r57'>
        <td rowspan=4 height=76 class=x75 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:57pt;'>6</td>
        <td rowspan=4 height=76 class=x76 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:57pt;'>消息提示</td>
        <td class=x75>5</td>
        <td class=x77>警告</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r58'>
        <td class=x75>6</td>
        <td class=x77>成功</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r59'>
        <td class=x75>7</td>
        <td class=x77>信息</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r60'>
        <td class=x75>8</td>
        <td class=x77>错误</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r61'>
        <td rowspan=3 height=57 class=x75 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:42.75pt;'>7</td>
        <td rowspan=3 height=57 class=x76 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:42.75pt;'>加载</td>
        <td class=x75>9</td>
        <td class=x77>圆圈</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r62'>
        <td class=x75>10</td>
        <td class=x77>百分比</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r63'>
        <td class=x75>11</td>
        <td class=x77>横条</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r64'>
        <td rowspan=2 height=38 class=x75 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:28.5pt;'>8</td>
        <td rowspan=2 height=38 class=x76 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:28.5pt;'>选项卡</td>
        <td class=x75>12</td>
        <td class=x77>父选项卡</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r65'>
        <td class=x75>13</td>
        <td class=x77>子选项卡</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r66'>
        <td rowspan=7 height=133 class=x75 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:99.75pt;'>9</td>
        <td rowspan=4 height=76 class=x76 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:57pt;'>工具栏</td>
        <td class=x75>1</td>
        <td class=x77>列表</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r67'>
        <td class=x75>2</td>
        <td class=x77>子列表</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r68'>
        <td class=x75>3</td>
        <td class=x77>表单</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r69'>
        <td class=x75>4</td>
        <td class=x77>下拉</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r70'>
        <td rowspan=3 height=57 class=x76 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:42.75pt;'>表单验证</td>
        <td class=x75>5</td>
        <td class=x77>必填</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r71'>
        <td class=x75>6</td>
        <td class=x77>最长</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r72'>
        <td class=x75>7</td>
        <td class=x77>自定义</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r73'>
        <td rowspan=7 height=133 class=x75 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:99.75pt;'>10</td>
        <td rowspan=7 height=133 class=x76 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:99.75pt;'>导航</td>
        <td class=x75>1</td>
        <td class=x77>菜单</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r74'>
        <td class=x75>2</td>
        <td class=x77>选项卡</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r75'>
        <td class=x75>3</td>
        <td class=x77>侧边栏</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r76'>
        <td class=x75>4</td>
        <td class=x77>下拉</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r77'>
        <td class=x75>5</td>
        <td class=x77>路径</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r78'>
        <td class=x75>6</td>
        <td class=x77>导航栏</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r79'>
        <td class=x75>7</td>
        <td class=x77>步骤</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r80'>
        <td rowspan=3 height=57 class=x80 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:42.75pt;'>11</td>
        <td rowspan=3 height=57 class=x81 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:42.75pt;'>图表</td>
        <td class=x80>1</td>
        <td class=x78>饼图</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r81'>
        <td class=x80>2</td>
        <td class=x78>柱状图</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r82'>
        <td class=x80>3</td>
        <td class=x78>折线图</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r83'>
        <td rowspan=4 height=76 class=x80 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:57pt;'>12</td>
        <td rowspan=4 height=76 class=x81 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:57pt;'>查询</td>
        <td class=x80>1</td>
        <td class=x78>全文查询</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r84'>
        <td class=x80>2</td>
        <td class=x78>列表查询</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r85'>
        <td class=x80>3</td>
        <td class=x78>快速查询</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r86'>
        <td class=x80>4</td>
        <td class=x78>高级查询</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r87'>
        <td rowspan=7 height=133 class=x80 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:99.75pt;'>13</td>
        <td rowspan=7 height=133 class=x81 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:99.75pt;'>主题皮肤</td>
        <td class=x80>1</td>
        <td class=x78>window风格</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r88'>
        <td class=x80>2</td>
        <td class=x78>默认</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r89'>
        <td class=x80>3</td>
        <td class=x78>蓝色</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r90'>
        <td class=x80>4</td>
        <td class=x78>暗黑</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r91'>
        <td class=x80>5</td>
        <td class=x78>material风格</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r92'>
        <td class=x80>6</td>
        <td class=x78>bootstrap主题</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r93'>
        <td class=x80>7</td>
        <td class=x78>桌面工具</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r94'>
        <td rowspan=11 height=209 class=x75 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:156.75pt;'>14</td>
        <td rowspan=11 height=209 class=x76 style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:156.75pt;'>平台组件</td>
        <td class=x75>1</td>
        <td class=x77>元数据</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r95'>
        <td class=x75>2</td>
        <td class=x77>软件产品</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r96'>
        <td class=x75>3</td>
        <td class=x77>消息组件</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r97'>
        <td class=x75>4</td>
        <td class=x77>数据字典</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r98'>
        <td class=x75>5</td>
        <td class=x77>参照字典</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r99'>
        <td class=x75>6</td>
        <td class=x77>登录</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r100'>
        <td class=x75>7</td>
        <td class=x77>注册</td>
        <td class=x78>是</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r101'>
        <td class=x75>8</td>
        <td class=x77>忘记密码</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r102'>
        <td class=x75>9</td>
        <td class=x77>角色</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r103'>
        <td class=x75>10</td>
        <td class=x77>授权</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r104'>
        <td class=x75>11</td>
        <td class=x77>用户</td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
        <td class=x78></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r105'>
        <td height=19 class=x82 style='height:14.25pt;'></td>
        <td class=x83></td>
        <td class=x82></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r106'>
        <td height=19 class=x82 style='height:14.25pt;'></td>
        <td class=x83></td>
        <td class=x82></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r107'>
        <td height=19 class=x82 style='height:14.25pt;'></td>
        <td class=x83></td>
        <td class=x82></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
    </tr>
    <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r108'>
        <td height=19 class=x82 style='height:14.25pt;'></td>
        <td class=x83></td>
        <td class=x82></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
        <td class=x79></td>
    </tr>
    <![if supportMisalignedColumns]>
    <tr height=0 style='display:none'>
        <td width=49 style='width:36.75pt'></td>
        <td width=71 style='width:53.25pt'></td>
        <td width=52 style='width:39pt'></td>
        <td width=144 style='width:108pt'></td>
        <td width=83 style='width:62.25pt'></td>
        <td width=112 style='width:84pt'></td>
        <td width=197 style='width:147.75pt'></td>
        <td width=127 style='width:95.25pt'></td>
        <td width=143 style='width:107.25pt'></td>
        <td width=145 style='width:108.75pt'></td>
        <td width=84 style='width:63pt'></td>
        <td width=302 style='width:226.5pt'></td>
    </tr>
    <![endif]>
</table>
    </code>
</pre>
##  代码规范
<code>
    <pre>
-1.命名规范：
   模块命名：英文名称作为文件夹名称；
    Directive命名：英文名称+.directive.ts作为名称；
    Pipe命名：英文名称+.pipe.ts作为名称；
    Service命名:资源名称+.service.ts与component保持前缀一致；
    组件Component命名：后端资源名称+.component.ts作为名称；
    组件内部的View视图命名：后端资源名称+.component.html；
    组件内部的View视图样式命名：后端资源名称+.component.scss；
    方法命名：动词，保存（save）、删除（delete）、修改（modify）
    路由名称: 资源名称加动词，如：userLogin
-2.模块规范
模块由业务组件构成，业务模块依赖工具模块，工具模块提供公共服务如http请求、缓存、消息、日志、用户服务、工具、元数据等服务，模块独立编写内部服务，内部服务通过工具服务类请求后端资源；
模块通过index.module.ts对外暴露模块，index.module.ts整合内部各业务组件及内部服务；index.components.ts对外暴露结构；
各模块有directives，services,components,pipes,config文件夹组成；directives统一存放本模块的指令（扩展属性）；services统一存放本模块提供的服务，每个component组件提供一个服务类；components存放本模块的所有业务组件，每个组件一个文件夹，其包含本组件的类、视图，样式等文件；pipes存放本模块的所有视图内容管道工具；config存放本模块的配置文件，包含配置路由表。
-3.组件规范
各组件必须注入组件本身服务mainService、providersService；providersService包含log.service、cache.service、message.service、common.service、app.service、user.service；除这些服务之外不再注入其它服务；其它服务统一由组件本身服务依赖。组件继承工具服务模块的parent.component.ts类，父类提供对该资源表单及列表等公共方法，包含增删改查、导入、导出、获取资源的参照字典，静态字典，实时推送消息等
-4.整体编码规范
所有类名需注释，标记@description {描述}；@author {作者};
所有方法需注释，标记@description {描述}；@param {参数名称：类型}；@return {返回值：类型}；
核心代码需注释：保持3行代码一个行内注释的方式；
避免出现function方法，应采用箭头表单式；
方法之间保留一行空格；
方法名称后面的大括号保持与方法名称一行内
  </code>
</pre>
