(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{3285:function(t,e,n){"use strict";n.r(e);var i=n("6263"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},4023:function(t,e,n){var i=n("7cf5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("001ba461",i,!0,{sourceMap:!1,shadowMode:!1})},6263:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=i(n("3b8d")),r=i(n("2971")),a={data:function(){return{username:"",password:"",options:["请选择登录用户类型"],optionsValues:["","xuesheng"],index:0}},onLoad:function(){var t=["请选择登录用户类型"],e=r.default.list();this.menuList=e;for(var n=0;n<this.menuList.length;n++)"是"==this.menuList[n].hasFrontLogin&&t.push(this.menuList[n].roleName);this.options=t,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(t){uni.setStorageSync("loginTable",t),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.optionsValues[this.index]){t.next=3;break}return this.$utils.msg("请选择登陆用户类型"),t.abrupt("return");case 3:return t.next=5,this.$api.login("".concat(this.optionsValues[this.index]),{username:this.username,password:this.password});case 5:return e=t.sent,uni.setStorageSync("token",e.token),uni.setStorageSync("nickname",this.username),uni.setStorageSync("nowTable","".concat(this.optionsValues[this.index])),t.next=11,this.$api.session("".concat(this.optionsValues[this.index]));case 11:e=t.sent,uni.setStorageSync("userid",e.data.id),uni.setStorageSync("role","".concat(this.options[this.index])),this.$utils.tab("../index/index");case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value}}};e.default=a},"7cf5":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-20e916e8]{padding:0 %?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:calc(100vh - 44px);box-sizing:border-box}.content[data-v-20e916e8]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-20e916e8]{text-align:center}.logo uni-image[data-v-20e916e8]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-20e916e8]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-20e916e8]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-20e916e8]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-20e916e8]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-20e916e8]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-20e916e8]{margin:0;color:#b49950}',""]),t.exports=e},"8e7c":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"logo"},[n("v-uni-image",{style:{boxShadow:"0 0 16rpx #59f43e",borderColor:"#ccc",borderRadius:"40rpx",borderWidth:"2rpx",width:"160rpx",borderStyle:"solid",url:"http://codegen.caihongy.cn/20201024/ed5e326ca66f403aa3197b5fbb4ec733.jpg",isShow:!0,height:"160rpx"},attrs:{src:"http://codegen.caihongy.cn/20201024/ed5e326ca66f403aa3197b5fbb4ec733.jpg",mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(23, 152, 242, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"请输入账号"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(23, 152, 242, 1)",backgroundColor:"#fff",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-picker",{attrs:{value:t.index,range:t.options},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.optionsChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-picker-type",style:{lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v(t._s(t.options[t.index]))])],1)],1),n("v-uni-view",[n("v-uni-button",{style:{borderColor:"#ccc",backgroundColor:"rgba(23, 152, 242, 1)",borderRadius:"20rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoginTap.apply(void 0,arguments)}}},[t._v("登录")])],1),n("v-uni-view",{staticClass:"links"},[n("v-uni-view",{staticClass:"link-highlight",style:{color:"rgba(23, 152, 242, 1)",fontSize:"24rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onRegisterTap("xuesheng")}}},[t._v("注册学生")]),n("v-uni-view",[t._v("|")]),n("v-uni-view",{style:{color:"rgba(255, 0, 0, 1)",fontSize:"24rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onForgetTap.apply(void 0,arguments)}}},[t._v("忘记密码？")])],1)],1)},r=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"9c42":function(t,e,n){"use strict";var i=n("4023"),o=n.n(i);o.a},a86a:function(t,e,n){"use strict";n.r(e);var i=n("8e7c"),o=n("3285");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("9c42");var a,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"20e916e8",null,!1,i["a"],a);e["default"]=c.exports}}]);