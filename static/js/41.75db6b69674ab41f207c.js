webpackJsonp([41],{"/Jod":function(a,t,n){"use strict";function e(a){n("W/3Y")}Object.defineProperty(t,"__esModule",{value:!0});var A=n("CIyl"),r=n("40yp"),o=n("mPyB"),i=e,s=o(A.a,r.a,!1,i,"data-v-117a7092",null);t.default=s.exports},"1PC0":function(a,t,n){t=a.exports=n("bKW+")(!0),t.push([a.i,".slide-enter-active[data-v-117a7092],.slide-leave-active[data-v-117a7092]{-webkit-transition:all .3s;transition:all .3s}.slide-enter[data-v-117a7092],.slide-leave-to[data-v-117a7092]{-webkit-transform:translate3d(3rem,0,0);transform:translate3d(3rem,0,0);opacity:0}.loading-container[data-v-117a7092]{position:absolute;z-index:100;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.rating_page[data-v-117a7092]{position:fixed;position:absolute;top:0;left:0;right:0;bottom:0;z-index:202;background:#f2f2f2;padding-top:1.95rem}.markdown[data-v-117a7092]{font-size:.6rem;color:#666;padding:0 .5rem .5rem}.markdown h3[data-v-117a7092]{color:#3190e8;line-height:2rem}.markdown li[data-v-117a7092],.markdown p[data-v-117a7092]{font-size:.6rem;color:#666;line-height:1rem}","",{version:3,sources:["D:/l赖/x学习资料/vuejs/learn_demo/learnformelm/frommayun/learnfromelm/src/page/balance/children/detail.vue"],names:[],mappings:"AACA,0EACE,2BAA6B,AAC7B,kBAAqB,CACtB,AACD,+DACE,wCAA2C,AACnC,gCAAmC,AAC3C,SAAW,CACZ,AACD,oCACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,8BACE,eAAgB,AAUhB,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,QAAS,AACT,SAAU,AACV,YAAa,AACb,mBAAoB,AACpB,mBAAqB,CATtB,AAWD,2BACE,gBAAkB,AAClB,WAAY,AACZ,qBAAyB,CAC1B,AACD,8BACI,cAAe,AACf,gBAAkB,CACrB,AACD,2DACI,gBAAkB,AAClB,WAAY,AACZ,gBAAkB,CACrB",file:"detail.vue",sourcesContent:["\n.slide-enter-active[data-v-117a7092], .slide-leave-active[data-v-117a7092] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.slide-enter[data-v-117a7092], .slide-leave-to[data-v-117a7092] {\n  -webkit-transform: translate3d(3rem, 0, 0);\n          transform: translate3d(3rem, 0, 0);\n  opacity: 0;\n}\n.loading-container[data-v-117a7092] {\n  position: absolute;\n  z-index: 100;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.rating_page[data-v-117a7092] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 202;\n  background: #f2f2f2;\n  padding-top: 1.95rem;\n}\n.rating_page[data-v-117a7092] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 202;\n  background: #f2f2f2;\n  padding-top: 1.95rem;\n}\n.markdown[data-v-117a7092] {\n  font-size: 0.6rem;\n  color: #666;\n  padding: 0 0.5rem 0.5rem;\n}\n.markdown h3[data-v-117a7092] {\n    color: #3190e8;\n    line-height: 2rem;\n}\n.markdown p[data-v-117a7092], .markdown li[data-v-117a7092] {\n    font-size: 0.6rem;\n    color: #666;\n    line-height: 1rem;\n}\n"],sourceRoot:""}])},"40yp":function(a,t,n){"use strict";var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("div",{staticClass:"rating_page"},[n("head-top",{attrs:{"head-title":"我的余额","go-back":!0}}),a._v(" "),n("div",{staticClass:"markdown"},[n("h3",{attrs:{id:"q1-"}},[a._v("Q1: 使用余额的条件")]),a._v(" "),n("p",[a._v("为了保护账户安全，使用余额前必须先绑定手机号。")]),a._v(" "),n("h3",{attrs:{id:"q2-"}},[a._v("Q2: 余额可以怎么用？")]),a._v(" "),n("p",[a._v("余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。")]),a._v(" "),n("h3",{attrs:{id:"q3-"}},[a._v("Q3:我要如何提现？")]),a._v(" "),n("p",[a._v("为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。")]),a._v(" "),n("h3",{attrs:{id:"q4-"}},[a._v("Q4:为什么会提现失败？")]),a._v(" "),n("p",[a._v("可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。")])])],1)])},A=[],r={render:e,staticRenderFns:A};t.a=r},CIyl:function(a,t,n){"use strict";var e=n("ra3+");t.a={components:{headTop:e.a}}},"W/3Y":function(a,t,n){var e=n("1PC0");"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);n("6imX")("6b466ebe",e,!0)}});
//# sourceMappingURL=41.75db6b69674ab41f207c.js.map