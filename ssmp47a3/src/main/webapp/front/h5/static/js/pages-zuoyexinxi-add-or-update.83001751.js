(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-zuoyexinxi-add-or-update"],{"541a":function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-a6998c22]{padding:%?20?%}.content[data-v-a6998c22]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-a6998c22]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-a6998c22]{width:%?180?%}.avator[data-v-a6998c22]{width:%?150?%;height:%?60?%}.right-input[data-v-a6998c22]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-a6998c22]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-a6998c22]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-a6998c22]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-a6998c22]{border:0}.cu-form-group uni-input[data-v-a6998c22]{padding:0 %?30?%}.uni-input[data-v-a6998c22]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-a6998c22]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-a6998c22]::after{line-height:%?88?%}.select .uni-input[data-v-a6998c22]{line-height:%?88?%}.input .right-input[data-v-a6998c22]{line-height:%?110?%}',""]),e.exports=r},"61ea":function(e,r,t){"use strict";t.r(r);var i=t("a125"),o=t.n(i);for(var n in i)"default"!==n&&function(e){t.d(r,e,(function(){return i[e]}))}(n);r["default"]=o.a},9769:function(e,r,t){"use strict";var i,o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("作业编号")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.zuoyebianhao,placeholder:"作业编号"},model:{value:e.ruleForm.zuoyebianhao,callback:function(r){e.$set(e.ruleForm,"zuoyebianhao",r)},expression:"ruleForm.zuoyebianhao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("作业题目")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.zuoyetimu,placeholder:"作业题目"},model:{value:e.ruleForm.zuoyetimu,callback:function(r){e.$set(e.ruleForm,"zuoyetimu",r)},expression:"ruleForm.zuoyetimu"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("作业类型")]),t("v-uni-picker",{attrs:{value:e.zuoyeleixingIndex,range:e.zuoyeleixingOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.zuoyeleixingChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.zuoyeleixing?e.ruleForm.zuoyeleixing:"请选择作业类型"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.tupianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("图片")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.tupian?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.ruleForm.tupian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("班级")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.banji,placeholder:"班级"},model:{value:e.ruleForm.banji,callback:function(r){e.$set(e.ruleForm,"banji",r)},expression:"ruleForm.banji"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("时间")]),t("v-uni-picker",{attrs:{mode:"date",value:e.ruleForm.shijian},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.shijianChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.shijian?e.ruleForm.shijian:"请选择时间"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("学号")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.xuehao,placeholder:"学号"},model:{value:e.ruleForm.xuehao,callback:function(r){e.$set(e.ruleForm,"xuehao",r)},expression:"ruleForm.xuehao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("学生姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.xueshengxingming,placeholder:"学生姓名"},model:{value:e.ruleForm.xueshengxingming,callback:function(r){e.$set(e.ruleForm,"xueshengxingming",r)},expression:"ruleForm.xueshengxingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"308rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("作业内容")]),t("v-uni-textarea",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"作业内容"},model:{value:e.ruleForm.zuoyeneirong,callback:function(r){e.$set(e.ruleForm,"zuoyeneirong",r)},expression:"ruleForm.zuoyeneirong"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"8rpx",color:"#fff",borderWidth:"2rpx",width:"160rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},n=[];t.d(r,"b",(function(){return o})),t.d(r,"c",(function(){return n})),t.d(r,"a",(function(){return i}))},a125:function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("ac6a"),t("96cf");var o=i(t("3b8d")),n=i(t("e2b1")),a={data:function(){return{ruleForm:{zuoyebianhao:"",zuoyetimu:"",zuoyeleixing:"",tupian:"",banji:"",zuoyeneirong:"",shijian:"",xuehao:"",xueshengxingming:"",thumbsupnum:"",crazilynum:""},zuoyeleixingOptions:[],zuoyeleixingIndex:0,user:{},ro:{zuoyebianhao:!1,zuoyetimu:!1,zuoyeleixing:!1,tupian:!1,banji:!1,zuoyeneirong:!1,shijian:!1,xuehao:!1,xueshengxingming:!1,thumbsupnum:!1,crazilynum:!1}}},components:{wPicker:n.default},computed:{},onLoad:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(r){var t,i,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(t);case 3:return i=e.sent,this.user=i.data,this.ruleForm.banji=this.user.banji,this.ruleForm.xuehao=this.user.xuehao,this.ruleForm.xueshengxingming=this.user.xueshengxingming,e.next=10,this.$api.option("zuoyeleixing","zuoyeleixing",{});case 10:if(i=e.sent,this.zuoyeleixingOptions=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=20;break}return this.ruleForm.id=r.id,e.next=18,this.$api.info("zuoyexinxi",this.ruleForm.id);case 18:i=e.sent,this.ruleForm=i.data;case 20:if(!r.cross){e.next=71;break}o=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(o);case 23:if((e.t1=e.t0()).done){e.next=71;break}if(n=e.t1.value,"zuoyebianhao"!=n){e.next=29;break}return this.ruleForm.zuoyebianhao=o[n],this.ro.zuoyebianhao=!0,e.abrupt("continue",23);case 29:if("zuoyetimu"!=n){e.next=33;break}return this.ruleForm.zuoyetimu=o[n],this.ro.zuoyetimu=!0,e.abrupt("continue",23);case 33:if("zuoyeleixing"!=n){e.next=37;break}return this.ruleForm.zuoyeleixing=o[n],this.ro.zuoyeleixing=!0,e.abrupt("continue",23);case 37:if("tupian"!=n){e.next=41;break}return this.ruleForm.tupian=o[n],this.ro.tupian=!0,e.abrupt("continue",23);case 41:if("banji"!=n){e.next=45;break}return this.ruleForm.banji=o[n],this.ro.banji=!0,e.abrupt("continue",23);case 45:if("zuoyeneirong"!=n){e.next=49;break}return this.ruleForm.zuoyeneirong=o[n],this.ro.zuoyeneirong=!0,e.abrupt("continue",23);case 49:if("shijian"!=n){e.next=53;break}return this.ruleForm.shijian=o[n],this.ro.shijian=!0,e.abrupt("continue",23);case 53:if("xuehao"!=n){e.next=57;break}return this.ruleForm.xuehao=o[n],this.ro.xuehao=!0,e.abrupt("continue",23);case 57:if("xueshengxingming"!=n){e.next=61;break}return this.ruleForm.xueshengxingming=o[n],this.ro.xueshengxingming=!0,e.abrupt("continue",23);case 61:if("thumbsupnum"!=n){e.next=65;break}return this.ruleForm.thumbsupnum=o[n],this.ro.thumbsupnum=!0,e.abrupt("continue",23);case 65:if("crazilynum"!=n){e.next=69;break}return this.ruleForm.crazilynum=o[n],this.ro.crazilynum=!0,e.abrupt("continue",23);case 69:e.next=23;break;case 71:this.styleChange();case 72:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shijianChange:function(e){this.ruleForm.shijian=e.target.value,this.$forceUpdate()},zuoyeleixingChange:function(e){this.zuoyeleixingIndex=e.target.value,this.ruleForm.zuoyeleixing=this.zuoyeleixingOptions[this.zuoyeleixingIndex]},tupianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.tupian=e.$base.url+"upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.zuoyebianhao){e.next=3;break}return this.$utils.msg("作业编号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.zuoyetimu){e.next=6;break}return this.$utils.msg("作业题目不能为空"),e.abrupt("return");case 6:if(this.ruleForm.zuoyeleixing){e.next=9;break}return this.$utils.msg("作业类型不能为空"),e.abrupt("return");case 9:if(this.ruleForm.banji){e.next=12;break}return this.$utils.msg("班级不能为空"),e.abrupt("return");case 12:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){e.next=15;break}return this.$utils.msg("赞应输入整数"),e.abrupt("return");case 15:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){e.next=18;break}return this.$utils.msg("踩应输入整数"),e.abrupt("return");case 18:if(!this.ruleForm.id){e.next=23;break}return e.next=21,this.$api.update("zuoyexinxi",this.ruleForm);case 21:e.next=25;break;case 23:return e.next=25,this.$api.add("zuoyexinxi",this.ruleForm);case 25:this.$utils.msgBack("提交成功");case 26:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,o=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,o=o>9?o:"0"+o,"".concat(t,"-").concat(i,"-").concat(o)},toggleTab:function(e){this.$refs[e].show()}}};r.default=a},c47e:function(e,r,t){"use strict";t.r(r);var i=t("9769"),o=t("61ea");for(var n in o)"default"!==n&&function(e){t.d(r,e,(function(){return o[e]}))}(n);t("cbbd");var a,u=t("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"a6998c22",null,!1,i["a"],a);r["default"]=s.exports},c9db:function(e,r,t){var i=t("541a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=t("4f06").default;o("4d1aba20",i,!0,{sourceMap:!1,shadowMode:!1})},cbbd:function(e,r,t){"use strict";var i=t("c9db"),o=t.n(i);o.a}}]);