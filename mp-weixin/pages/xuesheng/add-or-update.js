(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xuesheng/add-or-update"],{1417:function(e,t,n){},4950:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}))},"5b99":function(e,t,n){"use strict";n.r(t);var i=n("9170"),r=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=r.a},"628b":function(e,t,n){"use strict";(function(e){n("91a2"),n("921b");i(n("66fd"));var t=i(n("ee41"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},9170:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,i,r,u,a){try{var o=e[u](a),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(i,r)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function o(e){u(a,i,r,o,s,"next",e)}function s(e){u(a,i,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("828f"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{ruleForm:{xuehao:"",mima:"",xueshengxingming:"",xingbie:"",touxiang:"",banji:"",shouji:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{xuehao:!1,mima:!1,xueshengxingming:!1,xingbie:!1,touxiang:!1,banji:!1,shouji:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var t=a(i.default.mark((function t(n){var r,u,a,o;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(u=t.sent,this.user=u.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=14;break}return this.ruleForm.id=n.id,t.next=12,this.$api.info("xuesheng",this.ruleForm.id);case 12:u=t.sent,this.ruleForm=u.data;case 14:if(!n.cross){t.next=49;break}a=e.getStorageSync("crossObj"),t.t0=i.default.keys(a);case 17:if((t.t1=t.t0()).done){t.next=49;break}if(o=t.t1.value,"xuehao"!=o){t.next=23;break}return this.ruleForm.xuehao=a[o],this.ro.xuehao=!0,t.abrupt("continue",17);case 23:if("mima"!=o){t.next=27;break}return this.ruleForm.mima=a[o],this.ro.mima=!0,t.abrupt("continue",17);case 27:if("xueshengxingming"!=o){t.next=31;break}return this.ruleForm.xueshengxingming=a[o],this.ro.xueshengxingming=!0,t.abrupt("continue",17);case 31:if("xingbie"!=o){t.next=35;break}return this.ruleForm.xingbie=a[o],this.ro.xingbie=!0,t.abrupt("continue",17);case 35:if("touxiang"!=o){t.next=39;break}return this.ruleForm.touxiang=a[o],this.ro.touxiang=!0,t.abrupt("continue",17);case 39:if("banji"!=o){t.next=43;break}return this.ruleForm.banji=a[o],this.ro.banji=!0,t.abrupt("continue",17);case 43:if("shouji"!=o){t.next=47;break}return this.ruleForm.shouji=a[o],this.ro.shouji=!0,t.abrupt("continue",17);case 47:t.next=17;break;case 49:this.styleChange();case 50:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.xuehao){e.next=3;break}return this.$utils.msg("学号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(this.ruleForm.xueshengxingming){e.next=9;break}return this.$utils.msg("学生姓名不能为空"),e.abrupt("return");case 9:if(!this.ruleForm.id){e.next=14;break}return e.next=12,this.$api.update("xuesheng",this.ruleForm);case 12:e.next=16;break;case 14:return e.next=16,this.$api.add("xuesheng",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s}).call(this,n("543d")["default"])},c227:function(e,t,n){"use strict";var i=n("1417"),r=n.n(i);r.a},ee41:function(e,t,n){"use strict";n.r(t);var i=n("4950"),r=n("5b99");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("c227");var a,o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"6be49a12",null,!1,i["a"],a);t["default"]=s.exports}},[["628b","common/runtime","common/vendor"]]]);