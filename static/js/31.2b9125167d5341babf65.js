webpackJsonp([31],{"+/Yt":function(e,a,t){"use strict";var n=t("34v0"),i=t.n(n),o=t("ra3+"),r=t("/mv4");t("i84Q");a.a={data:function(){return{validate:null,countDown:60,reCallVerify:null,showVoiceTip:!1,type:"sms",start1:!1,mobile:""}},components:{headTop:o.a},created:function(){this.sig=this.$route.query.sig},computed:i()({},t.i(r.b)(["needValidation","cart_id","orderParam"])),methods:i()({},t.i(r.c)(["CHANGE_ORDER_PARAM","ORDER_SUCCESS"]),{sendCode1:function(){var e=this;this.$dialog.loading.open("发送中..."),setTimeout(function(){if(e.$dialog.loading.close(),!/^1[3|4|5|8][0-9]\d{4,8}$/.test(e.mobile))return e.$dialog.alert({mes:"不是完整的11位手机号或者正确的手机号前七位"}),e.$refs.mobile.focus(),!1;e.start1=!0,e.$dialog.toast({mes:"已发送",icon:"success",timeout:1e3}),e.getData()},1e3)},count:function(){var e=this;this.countDown=60,clearInterval(this.timer),this.timer=setInterval(function(){0==--e.countDown&&clearInterval(e.timer)},1e3)},sendVoice:function(){this.showVoiceTip=!0,this.type="voice",this.getData()},getData:function(){this.reCallVerify={validate_token:"6666abc"},this.checkToken=!0,this.reCallVerify.message&&this.$dialog.alert({mes:this.reCallVerify.message})},confrimOrder:function(){if(this.checkToken){this.CHANGE_ORDER_PARAM({validation_code:this.validate,validation_token:this.reCallVerify.validate_token});this.ORDER_SUCCESS("ok"),this.$router.push("/confirmOrder/payment")}else this.$dialog.alert({mes:"请输入验证码"})}}),mounted:function(){this.count()}}},LM72:function(e,a,t){var n=t("apLL");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t("6imX")("2a02b046",n,!0)},apLL:function(e,a,t){a=e.exports=t("bKW+")(!0),a.push([e.i,".slide-enter-active[data-v-911f3242],.slide-leave-active[data-v-911f3242]{-webkit-transition:all .3s;transition:all .3s}.slide-enter[data-v-911f3242],.slide-leave-to[data-v-911f3242]{-webkit-transform:translate3d(3rem,0,0);transform:translate3d(3rem,0,0);opacity:0}.loading-container[data-v-911f3242]{position:absolute;z-index:100;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.rating_page[data-v-911f3242]{z-index:202;background:#f2f2f2}.rating_page[data-v-911f3242],.validation_page[data-v-911f3242]{position:fixed;top:0;left:0;right:0;bottom:0;padding-top:1.95rem}.validation_page[data-v-911f3242]{background-color:#f5f5f5;z-index:204}.validation_page input[data-v-911f3242],.validation_page p[data-v-911f3242],.validation_page span[data-v-911f3242]{font-family:Helvetica Neue,Tahoma,Arial}.determine[data-v-911f3242]{background-color:#4cd964;font-size:.7rem;color:#fff;text-align:center;margin:0 .7rem;line-height:1.8rem;border-radius:.2rem;margin-top:.5rem}.validataion_container[data-v-911f3242]{background-color:#fff;padding:.7rem}.validataion_container .validataion_header span[data-v-911f3242]{font-size:.7rem;color:#333}.validataion_container .validataion_header span[data-v-911f3242]:nth-of-type(2){color:#ff6000}.input_form[data-v-911f3242]{display:-webkit-box;display:-ms-flexbox;display:flex}.input_form [data-v-911f3242]{font-size:.65rem;color:#666;border-radius:.15rem}.input_form input[data-v-911f3242]{-webkit-box-flex:3;-ms-flex:3;flex:3;height:1.5rem;background-color:#eee;padding:0 .6rem}.input_form span[data-v-911f3242]{-webkit-box-flex:1;-ms-flex:1;flex:1;height:1.5rem;display:inline-block;text-align:center;line-height:1.5rem;font-size:.6rem}.input_form .repost[data-v-911f3242]{background-color:#3190e8;color:#fff}.input_form .disable[data-v-911f3242]{background-color:#eee;color:#999}.voice_tip[data-v-911f3242]{margin-bottom:.4rem}.voice_tip p[data-v-911f3242]{font-size:.65rem;color:#333;line-height:1rem}.voice_tip p span[data-v-911f3242]{color:#ff6000}","",{version:3,sources:["D:/l赖/x学习资料/vuejs/learn_demo/learnformelm/frommayun/learnfromelm/src/page/confirmOrder/children/userValidation.vue"],names:[],mappings:"AACA,0EACE,2BAA6B,AAC7B,kBAAqB,CACtB,AACD,+DACE,wCAA2C,AACnC,gCAAmC,AAC3C,SAAW,CACZ,AACD,oCACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,8BAME,YAAa,AACb,kBAAoB,CAErB,AACD,gEATE,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,QAAS,AACT,SAAU,AAGV,mBAAqB,CAWtB,AATD,kCAME,yBAA0B,AAC1B,WAAa,CAEd,AACD,mHACI,uCAAyC,CAC5C,AACD,4BACE,yBAA0B,AAC1B,gBAAkB,AAClB,WAAY,AACZ,kBAAmB,AACnB,eAAgB,AAChB,mBAAoB,AACpB,oBAAsB,AACtB,gBAAmB,CACpB,AACD,wCACE,sBAAuB,AACvB,aAAe,CAChB,AACD,iEACI,gBAAkB,AAClB,UAAY,CACf,AACD,gFACI,aAAe,CAClB,AACD,6BACE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,8BACI,iBAAmB,AACnB,WAAY,AACZ,oBAAuB,CAC1B,AACD,mCACI,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,cAAe,AACf,sBAAuB,AACvB,eAAiB,CACpB,AACD,kCACI,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,cAAe,AACf,qBAAsB,AACtB,kBAAmB,AACnB,mBAAoB,AACpB,eAAiB,CACpB,AACD,qCACI,yBAA0B,AAC1B,UAAY,CACf,AACD,sCACI,sBAAuB,AACvB,UAAY,CACf,AACD,4BACE,mBAAqB,CACtB,AACD,8BACI,iBAAmB,AACnB,WAAY,AACZ,gBAAkB,CACrB,AACD,mCACM,aAAe,CACpB",file:"userValidation.vue",sourcesContent:["\n.slide-enter-active[data-v-911f3242], .slide-leave-active[data-v-911f3242] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.slide-enter[data-v-911f3242], .slide-leave-to[data-v-911f3242] {\n  -webkit-transform: translate3d(3rem, 0, 0);\n          transform: translate3d(3rem, 0, 0);\n  opacity: 0;\n}\n.loading-container[data-v-911f3242] {\n  position: absolute;\n  z-index: 100;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.rating_page[data-v-911f3242] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 202;\n  background: #f2f2f2;\n  padding-top: 1.95rem;\n}\n.validation_page[data-v-911f3242] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #f5f5f5;\n  z-index: 204;\n  padding-top: 1.95rem;\n}\n.validation_page p[data-v-911f3242], .validation_page span[data-v-911f3242], .validation_page input[data-v-911f3242] {\n    font-family: Helvetica Neue,Tahoma,Arial;\n}\n.determine[data-v-911f3242] {\n  background-color: #4cd964;\n  font-size: 0.7rem;\n  color: #fff;\n  text-align: center;\n  margin: 0 .7rem;\n  line-height: 1.8rem;\n  border-radius: 0.2rem;\n  margin-top: 0.5rem;\n}\n.validataion_container[data-v-911f3242] {\n  background-color: #fff;\n  padding: .7rem;\n}\n.validataion_container .validataion_header span[data-v-911f3242] {\n    font-size: 0.7rem;\n    color: #333;\n}\n.validataion_container .validataion_header span[data-v-911f3242]:nth-of-type(2) {\n    color: #ff6000;\n}\n.input_form[data-v-911f3242] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.input_form *[data-v-911f3242] {\n    font-size: 0.65rem;\n    color: #666;\n    border-radius: 0.15rem;\n}\n.input_form input[data-v-911f3242] {\n    -webkit-box-flex: 3;\n        -ms-flex: 3;\n            flex: 3;\n    height: 1.5rem;\n    background-color: #eee;\n    padding: 0 .6rem;\n}\n.input_form span[data-v-911f3242] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    height: 1.5rem;\n    display: inline-block;\n    text-align: center;\n    line-height: 1.5rem;\n    font-size: .6rem;\n}\n.input_form .repost[data-v-911f3242] {\n    background-color: #3190e8;\n    color: #fff;\n}\n.input_form .disable[data-v-911f3242] {\n    background-color: #eee;\n    color: #999;\n}\n.voice_tip[data-v-911f3242] {\n  margin-bottom: .4rem;\n}\n.voice_tip p[data-v-911f3242] {\n    font-size: 0.65rem;\n    color: #333;\n    line-height: 1rem;\n}\n.voice_tip p span[data-v-911f3242] {\n      color: #ff6000;\n}\n"],sourceRoot:""}])},lT3c:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"validation_page"},[t("head-top",{attrs:{"head-title":"用户手机验证","go-back":!0}}),e._v(" "),t("section",{staticClass:"validataion_container"},[e.showVoiceTip?t("div",{staticClass:"voice_tip"},[t("p",[e._v("电话拨打中...")]),e._v(" "),e._m(0)]):e._e(),e._v(" "),t("header",{staticClass:"validataion_header"},[t("span",[e._v("收不到短信？使用")]),e._v(" "),t("span",{on:{click:function(a){a.stopPropagation(),e.sendVoice(a)}}},[e._v("语音验证码")])]),e._v(" "),t("yd-cell-group",[t("yd-cell-item",[t("yd-icon",{attrs:{slot:"icon",name:"phone3",size:".8rem"},slot:"icon"}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],ref:"mobile",attrs:{slot:"right",type:"text",placeholder:"请输入手机号码"},domProps:{value:e.mobile},on:{input:function(a){a.target.composing||(e.mobile=a.target.value)}},slot:"right"}),e._v(" "),t("yd-sendcode",{attrs:{slot:"right",type:"warning"},nativeOn:{click:function(a){e.sendCode1(a)}},slot:"right",model:{value:e.start1,callback:function(a){e.start1=a},expression:"start1"}})],1)],1),e._v(" "),t("form",{staticClass:"input_form"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.validate,expression:"validate"}],attrs:{type:"text",name:"validate",placeholder:"验证码",maxlength:"6"},domProps:{value:e.validate},on:{input:function(a){a.target.composing||(e.validate=a.target.value)}}})]),e._v(" "),t("div",[t("yd-button",{attrs:{size:"large",type:"primary"},nativeOn:{click:function(a){e.confrimOrder(a)}}},[e._v("确定")])],1)],1)],1)},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("请留意来自 "),t("span",[e._v("10105757")]),e._v(" 或者 "),t("span",[e._v("021-315754XX")]),e._v(" 的电话")])}],o={render:n,staticRenderFns:i};a.a=o},uXs0:function(e,a,t){"use strict";function n(e){t("LM72")}Object.defineProperty(a,"__esModule",{value:!0});var i=t("+/Yt"),o=t("lT3c"),r=t("mPyB"),A=n,l=r(i.a,o.a,!1,A,"data-v-911f3242",null);a.default=l.exports}});
//# sourceMappingURL=31.2b9125167d5341babf65.js.map