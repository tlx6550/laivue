webpackJsonp([12],{"44yN":function(t,e,i){"use strict";function s(t){i("mzsn")}Object.defineProperty(e,"__esModule",{value:!0});var n=i("Widt"),o=i("5RKJ"),r=i("mPyB"),a=s,l=r(n.a,o.a,!1,a,"data-v-419dfe80",null);e.default=l.exports},"5RKJ":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rating_page"},[i("head-top",{attrs:{"head-title":"食品监督安全公示","go-back":!0}}),t._v(" "),i("scroll",{staticClass:"scroll_container",attrs:{id:"scroll_section",data:t.list}},[i("section",[i("section",{staticClass:"shop_status_container"},[i("header",[t._v("食品监督安全公示")]),t._v(" "),i("section",{staticClass:"shop_statu_detail"},[i("div",[1==t.shopDetail.status?i("svg",{staticClass:"shop_status"},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#res-well"}})]):i("svg",{staticClass:"res-well"},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#res-bad"}})])]),t._v(" "),i("div",{staticClass:"check_date"},[i("p",[i("span",[t._v("监督检查结果：")]),t._v(" "),1==t.shopDetail.status?i("span",{staticClass:"shop_status_well"},[t._v("良好")]):i("span",{staticClass:"shop_status_bad"},[t._v("差")])]),t._v(" "),i("p",[i("span",[t._v("检查日期：")]),t._v(" "),i("span",[t._v(t._s(t.shopDetail.identification.identificate_date&&t.shopDetail.identification.identificate_date.split("T")[0]))])])])])]),t._v(" "),i("section",{staticClass:"shop_status_container"},[i("header",[i("span",[t._v("工商登记信息")])]),t._v(" "),i("ul",[i("li",[i("p",[t._v("企业名称")]),t._v(" "),i("p",[t._v(t._s(t.shopDetail.identification.company_name))])]),t._v(" "),i("li",[i("p",[t._v("工商执照注册号")]),t._v(" "),i("p",[t._v(t._s(t.shopDetail.identification.identificate_agency))])]),t._v(" "),i("li",[i("p",[t._v("注册资本")]),t._v(" "),i("p",[t._v(t._s(t.shopDetail.identification.registered_number))])]),t._v(" "),i("li",[i("p",[t._v("注册地址")]),t._v(" "),i("p",[t._v(t._s(t.shopDetail.identification.registered_address))])]),t._v(" "),i("li",[i("p",[t._v("属地监管所")]),t._v(" "),i("p",[t._v(t._s(t.shopDetail.identification.registered_principal))])]),t._v(" "),i("li",[i("p",[t._v("法定代表人")]),t._v(" "),i("p",[t._v(t._s(t.shopDetail.identification.legal_person))])]),t._v(" "),i("li",[i("p",[t._v("经营范围")]),t._v(" "),i("p",[t._v(t._s(t.shopDetail.identification.operation_period))])])])]),t._v(" "),i("section",{staticClass:"shop_status_container"},[i("header",[t._v("餐饮许可证")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("营业范围")]),t._v(" "),i("p",[t._v(t._s(t.shopDetail.identification.operation_period))])]),t._v(" "),i("li",[i("p",[t._v("许可证有效期")]),t._v(" "),i("p",[t._v(t._s(t.shopDetail.identification.licenses_date))])]),t._v(" "),i("li",[i("p",[t._v("许可证号")]),t._v(" "),i("p",[t._v(t._s(t.shopDetail.identification.licenses_number))])]),t._v(" "),i("li",[i("p",[t._v("发证时间")]),t._v(" "),i("p",[t._v(t._s(t.shopDetail.identification.licenses_scope))])]),t._v(" "),i("li",[i("p",[t._v("发证机关")]),t._v(" "),i("p",[t._v(t._s(t.shopDetail.identification.registered_principal))])])])]),t._v(" "),i("section",{staticClass:"license_img shop_status_container"},[i("header",[t._v("许可证书")]),t._v(" "),i("div",{staticClass:"img_container"},[i("yd-lightbox",t._l(t.testUrlList,function(t,e){return i("yd-lightbox-img",{key:e,attrs:{src:t.src}})}))],1)])])])],1)},n=[],o={render:s,staticRenderFns:n};e.a=o},AeiX:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"wrapper"},[t._t("default")],2)},n=[],o={render:s,staticRenderFns:n};e.a=o},HFUh:function(t,e,i){!function(e,i){t.exports=i()}(0,function(){return function(t){function e(s){if(i[s])return i[s].exports;var n=i[s]={exports:{},id:s,loaded:!1};return t[s].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="/assets/",e(0)}([function(t,e,i){"use strict";var s=i(1);s.BScroll.Version="0.1.15",t.exports=s.BScroll},function(t,e,i){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.BScroll=void 0;var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),a=i(2);e.BScroll=function(t){function e(t,i){s(this,e);var o=n(this,Object.getPrototypeOf(e).call(this));return o.wrapper="string"==typeof t?document.querySelector(t):t,o.scroller=o.wrapper.children[0],o.scrollerStyle=o.scroller.style,o.options={startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,selectedIndex:0,rotate:25,wheel:!1,snap:!1,snapLoop:!1,snapThreshold:.1,swipeTime:2500,bounceTime:700,adjustTime:400,swipeBounceTime:1200,deceleration:.001,momentumLimitTime:300,momentumLimitDistance:15,resizePolling:60,preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0},(0,a.extend)(o.options,i),o.translateZ=o.options.HWCompositing&&a.hasPerspective?" translateZ(0)":"",o.options.useTransition=o.options.useTransition&&a.hasTransition,o.options.useTransform=o.options.useTransform&&a.hasTransform,o.options.eventPassthrough=!0===o.options.eventPassthrough?"vertical":o.options.eventPassthrough,o.options.preventDefault=!o.options.eventPassthrough&&o.options.preventDefault,o.options.scrollX="horizontal"!==o.options.eventPassthrough&&o.options.scrollX,o.options.scrollY="vertical"!==o.options.eventPassthrough&&o.options.scrollY,o.options.freeScroll=o.options.freeScroll&&!o.options.eventPassthrough,o.options.directionLockThreshold=o.options.eventPassthrough?0:o.options.directionLockThreshold,!0===o.options.tap&&(o.options.tap="tap"),o._init(),o.options.snap&&o._initSnap(),o.refresh(),o.options.snap||o.scrollTo(o.options.startX,o.options.startY),o.enable(),o}return o(e,t),r(e,[{key:"_init",value:function(){this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._addEvents()}},{key:"_initSnap",value:function(){var t=this;if(this.currentPage={},this.options.snapLoop){var e=this.scroller.children;e.length>0&&((0,a.prepend)(e[e.length-1].cloneNode(!0),this.scroller),this.scroller.appendChild(e[1].cloneNode(!0)))}"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){if(t.pages=[],t.wrapperWidth&&t.wrapperHeight&&t.scrollerWidth&&t.scrollerHeight){var e=t.options.snapStepX||t.wrapperWidth,i=t.options.snapStepY||t.wrapperHeight,s=0,n=void 0,o=void 0,r=void 0,l=0,h=void 0,c=0,p=void 0,d=void 0,u=void 0;if(!0===t.options.snap)for(o=Math.round(e/2),r=Math.round(i/2);s>-t.scrollerWidth;){for(t.pages[l]=[],h=0,n=0;n>-t.scrollerHeight;)t.pages[l][h]={x:Math.max(s,t.maxScrollX),y:Math.max(n,t.maxScrollY),width:e,height:i,cx:s-o,cy:n-r},n-=i,h++;s-=e,l++}else for(d=t.options.snap,h=d.length,p=-1;l<h;l++)u=(0,a.getRect)(d[l]),(0===l||u.left<=(0,a.getRect)(d[l-1]).left)&&(c=0,p++),t.pages[c]||(t.pages[c]=[]),s=Math.max(-u.left,t.maxScrollX),n=Math.max(-u.top,t.maxScrollY),o=s-Math.round(u.width/2),r=n-Math.round(u.height/2),t.pages[c][p]={x:s,y:n,width:u.width,height:u.height,cx:o,cy:r},s>t.maxScrollX&&c++;var f=t.options.snapLoop?1:0;t.goToPage(t.currentPage.pageX||f,t.currentPage.pageY||0,0),t.options.snapThreshold%1==0?(t.snapThresholdX=t.options.snapThreshold,t.snapThresholdY=t.options.snapThreshold):(t.snapThresholdX=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width*t.options.snapThreshold),t.snapThresholdY=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height*t.options.snapThreshold))}}),this.on("scrollEnd",function(){t.options.snapLoop&&(0===t.currentPage.pageX&&t.goToPage(t.pages.length-2,t.currentPage.pageY,0),t.currentPage.pageX===t.pages.length-1&&t.goToPage(1,t.currentPage.pageY,0))}),this.on("flick",function(){var e=t.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(t.x-t.startX),1e3),Math.min(Math.abs(t.y-t.startY),1e3)),300);t.goToPage(t.currentPage.pageX+t.directionX,t.currentPage.pageY+t.directionY,e)})}},{key:"_nearestSnap",value:function(t,e){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var i=0;if(Math.abs(t-this.absStartX)<this.snapThresholdX&&Math.abs(e-this.absStartY)<this.snapThresholdY)return this.currentPage;t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),e>0?e=0:e<this.maxScrollY&&(e=this.maxScrollY);for(var s=this.pages.length;i<s;i++)if(t>=this.pages[i][0].cx){t=this.pages[i][0].x;break}s=this.pages[i].length;for(var n=0;n<s;n++)if(e>=this.pages[0][n].cy){e=this.pages[0][n].y;break}return i===this.currentPage.pageX&&(i+=this.directionX,i<0?i=0:i>=this.pages.length&&(i=this.pages.length-1),t=this.pages[i][0].x),n===this.currentPage.pageY&&(n+=this.directionY,n<0?n=0:n>=this.pages[0].length&&(n=this.pages[0].length-1),e=this.pages[0][n].y),{x:t,y:e,pageX:i,pageY:n}}},{key:"_addEvents",value:function(){var t=a.addEvent;this._handleEvents(t)}},{key:"_removeEvents",value:function(){var t=a.removeEvent;this._handleEvents(t)}},{key:"_handleEvents",value:function(t){var e=this.options.bindToWrapper?this.wrapper:window;t(window,"orientationchange",this),t(window,"resize",this),this.options.click&&t(this.wrapper,"click",this),this.options.disableMouse||(t(this.wrapper,"mousedown",this),t(e,"mousemove",this),t(e,"mousecancel",this),t(e,"mouseup",this)),a.hasTouch&&!this.options.disableTouch&&(t(this.wrapper,"touchstart",this),t(e,"touchmove",this),t(e,"touchcancel",this),t(e,"touchend",this)),t(this.scroller,a.style.transitionEnd,this)}},{key:"_start",value:function(t){var e=a.eventType[t.type];if((1===e||0===t.button)&&!(!this.enabled||this.destroyed||this.initiated&&this.initiated!==e)){if(this.initiated=e,!this.options.preventDefault||a.isBadAndroid||(0,a.preventDefaultException)(t.target,this.options.preventDefaultException)||t.preventDefault(),this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=+new Date,this.options.wheel&&(this.target=t.target),this.options.useTransition&&this.isInTransition){this.isInTransition=!1;var i=this.getComputedPosition();this._translate(i.x,i.y),this.options.wheel?this.target=this.items[Math.round(-i.y/this.itemHeight)]:this.trigger("scrollEnd")}var s=t.touches?t.touches[0]:t;this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=s.pageX,this.pointY=s.pageY,this.trigger("beforeScrollStart")}}},{key:"_move",value:function(t){if(this.enabled&&!this.destroyed&&a.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var e=t.touches?t.touches[0]:t,i=e.pageX-this.pointX,s=e.pageY-this.pointY;this.pointX=e.pageX,this.pointY=e.pageY,this.distX+=i,this.distY+=s;var n=Math.abs(this.distX),o=Math.abs(this.distY),r=+new Date;if(!(r-this.endTime>this.options.momentumLimitTime&&o<this.options.momentumLimitDistance&&n<this.options.momentumLimitDistance)){if(this.directionLocked||this.options.freeScroll||(n>o+this.options.directionLockThreshold?this.directionLocked="h":o>=n+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"===this.directionLocked){if("vertical"===this.options.eventPassthrough)t.preventDefault();else if("horizontal"===this.options.eventPassthrough)return void(this.initiated=!1);s=0}else if("v"===this.directionLocked){if("horizontal"===this.options.eventPassthrough)t.preventDefault();else if("vertical"===this.options.eventPassthrough)return void(this.initiated=!1);i=0}i=this.hasHorizontalScroll?i:0,s=this.hasVerticalScroll?s:0;var l=this.x+i,h=this.y+s;(l>0||l<this.maxScrollX)&&(l=this.options.bounce?this.x+i/3:l>0?0:this.maxScrollX),(h>0||h<this.maxScrollY)&&(h=this.options.bounce?this.y+s/3:h>0?0:this.maxScrollY),this.directionX=i>0?-1:i<0?1:0,this.directionY=s>0?-1:s<0?1:0,this.moved||(this.moved=!0,this.trigger("scrollStart")),this._translate(l,h),r-this.startTime>this.options.momentumLimitTime&&(this.startTime=r,this.startX=this.x,this.startY=this.y,1===this.options.probeType&&this.trigger("scroll",{x:this.x,y:this.y})),this.options.probeType>1&&this.trigger("scroll",{x:this.x,y:this.y});var c=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,p=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,d=this.pointX-c,u=this.pointY-p;(d>document.documentElement.clientWidth-this.options.momentumLimitDistance||d<this.options.momentumLimitDistance||u<this.options.momentumLimitDistance||u>document.documentElement.clientHeight-this.options.momentumLimitDistance)&&this._end(t)}}}},{key:"_end",value:function(t){if(this.enabled&&!this.destroyed&&a.eventType[t.type]===this.initiated&&(this.initiated=!1,this.options.preventDefault&&!(0,a.preventDefaultException)(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.trigger("touchend",{x:this.x,y:this.y}),!this.resetPosition(this.options.bounceTime,a.ease.bounce))){this.isInTransition=!1;var e=Math.round(this.x),i=Math.round(this.y);if(!this.moved){if(this.options.wheel){if(this.target&&"wheel-scroll"===this.target.className){var s=Math.abs(Math.round(i/this.itemHeight)),n=Math.round((this.pointY+(0,a.offset)(this.target).top-this.itemHeight/2)/this.itemHeight);this.target=this.items[s+n]}this.scrollToElement(this.target,this.options.adjustTime,!0,!0,a.ease.swipe)}else this.options.tap&&(0,a.tap)(t,this.options.tap),this.options.click&&(0,a.click)(t);return void this.trigger("scrollCancel")}this.scrollTo(e,i),this.endTime=+new Date;var o=this.endTime-this.startTime,r=Math.abs(e-this.startX),l=Math.abs(i-this.startY);if(this._events.flick&&o<this.options.momentumLimitTime&&r<this.options.momentumLimitDistance&&l<this.options.momentumLimitDistance)return void this.trigger("flick");var h=0;if(this.options.momentum&&o<this.options.momentumLimitTime&&(l>this.options.momentumLimitDistance||r>this.options.momentumLimitDistance)){var c=this.hasHorizontalScroll?(0,a.momentum)(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options):{destination:e,duration:0},p=this.hasVerticalScroll?(0,a.momentum)(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options):{destination:i,duration:0};e=c.destination,i=p.destination,h=Math.max(c.duration,p.duration),this.isInTransition=1}else this.options.wheel&&(i=Math.round(i/this.itemHeight)*this.itemHeight,h=this.options.adjustTime);var d=a.ease.swipe;if(this.options.snap){var u=this._nearestSnap(e,i);this.currentPage=u,h=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(e-u.x),1e3),Math.min(Math.abs(i-u.y),1e3)),300),e=u.x,i=u.y,this.directionX=0,this.directionY=0,d=a.ease.bounce}if(e!==this.x||i!==this.y)return(e>0||e<this.maxScrollX||i>0||i<this.maxScrollY)&&(d=a.ease.swipeBounce),void this.scrollTo(e,i,h,d);this.options.wheel&&(this.selectedIndex=0|Math.abs(this.y/this.itemHeight)),this.trigger("scrollEnd")}}},{key:"_resize",value:function(){var t=this;this.enabled&&(clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling))}},{key:"_startProbe",value:function(){function t(){var i=e.getComputedPosition();e.trigger("scroll",i),e.isInTransition&&(e.probeTimer=(0,a.requestAnimationFrame)(t))}(0,a.cancelAnimationFrame)(this.probeTimer),this.probeTimer=(0,a.requestAnimationFrame)(t);var e=this}},{key:"_transitionTime",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?0:arguments[0];if(this.scrollerStyle[a.style.transitionDuration]=e+"ms",this.options.wheel&&!a.isBadAndroid)for(var i=0;i<this.items.length;i++)this.items[i].style[a.style.transitionDuration]=e+"ms";!e&&a.isBadAndroid&&(this.scrollerStyle[a.style.transitionDuration]="0.001s",(0,a.requestAnimationFrame)(function(){"0.0001ms"===t.scrollerStyle[a.style.transitionDuration]&&(t.scrollerStyle[a.style.transitionDuration]="0s")}))}},{key:"_transitionTimingFunction",value:function(t){if(this.scrollerStyle[a.style.transitionTimingFunction]=t,this.options.wheel&&!a.isBadAndroid)for(var e=0;e<this.items.length;e++)this.items[e].style[a.style.transitionTimingFunction]=t}},{key:"_transitionEnd",value:function(t){t.target===this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime,a.ease.bounce)||(this.isInTransition=!1,this.trigger("scrollEnd")))}},{key:"_translate",value:function(t,e){if(this.options.useTransform?this.scrollerStyle[a.style.transform]="translate("+t+"px,"+e+"px)"+this.translateZ:(t=Math.round(t),e=Math.round(e),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=e+"px"),this.options.wheel&&!a.isBadAndroid)for(var i=0;i<this.items.length;i++){var s=this.options.rotate*(e/this.itemHeight+i);this.items[i].style[a.style.transform]="rotateX("+s+"deg)"}this.x=t,this.y=e}},{key:"enable",value:function(){this.enabled=!0}},{key:"disable",value:function(){this.enabled=!1}},{key:"refresh",value:function(){this.wrapper.offsetHeight;this.wrapperWidth=parseInt(this.wrapper.style.width)||this.wrapper.clientWidth,this.wrapperHeight=parseInt(this.wrapper.style.height)||this.wrapper.clientHeight,this.scrollerWidth=parseInt(this.scroller.style.width)||this.scroller.clientWidth,this.scrollerHeight=parseInt(this.scroller.style.height)||this.scroller.clientHeight,this.options.wheel?(this.items=this.scroller.children,this.options.itemHeight=this.itemHeight=this.items.length?this.items[0].clientHeight:0,void 0===this.selectedIndex&&(this.selectedIndex=this.options.selectedIndex),this.options.startY=-this.selectedIndex*this.itemHeight,this.maxScrollX=0,this.maxScrollY=-this.itemHeight*(this.items.length-1)):(this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight),this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=(0,a.offset)(this.wrapper),this.trigger("refresh"),this.resetPosition()}},{key:"resetPosition",value:function(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],e=arguments.length<=1||void 0===arguments[1]?a.ease.bounce:arguments[1],i=this.x;!this.hasHorizontalScroll||i>0?i=0:i<this.maxScrollX&&(i=this.maxScrollX);var s=this.y;return!this.hasVerticalScroll||s>0?s=0:s<this.maxScrollY&&(s=this.maxScrollY),(i!==this.x||s!==this.y)&&(this.scrollTo(i,s,t,e),!0)}},{key:"wheelTo",value:function(t){this.options.wheel&&(this.y=-t*this.itemHeight,this.scrollTo(0,this.y))}},{key:"scrollBy",value:function(t,e){var i=arguments.length<=2||void 0===arguments[2]?0:arguments[2],s=arguments.length<=3||void 0===arguments[3]?a.ease.bounce:arguments[3];t=this.x+t,e=this.y+e,this.scrollTo(t,e,i,s)}},{key:"scrollTo",value:function(t,e,i){var s=arguments.length<=3||void 0===arguments[3]?a.ease.bounce:arguments[3];this.isInTransition=this.options.useTransition&&i>0&&(t!==this.x||e!==this.y),i&&!this.options.useTransition||(this._transitionTimingFunction(s.style),this._transitionTime(i),this._translate(t,e),i&&3===this.options.probeType&&this._startProbe(),this.options.wheel&&(e>0?this.selectedIndex=0:e<this.maxScrollY?this.selectedIndex=this.items.length-1:this.selectedIndex=0|Math.abs(e/this.itemHeight)))}},{key:"getSelectedIndex",value:function(){return this.options.wheel&&this.selectedIndex}},{key:"getCurrentPage",value:function(){return this.options.snap&&this.currentPage}},{key:"scrollToElement",value:function(t,e,i,s,n){if(t&&(t=t.nodeType?t:this.scroller.querySelector(t),!this.options.wheel||"wheel-item"===t.className)){var o=(0,a.offset)(t);o.left-=this.wrapperOffset.left,o.top-=this.wrapperOffset.top,!0===i&&(i=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===s&&(s=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),o.left-=i||0,o.top-=s||0,o.left=o.left>0?0:o.left<this.maxScrollX?this.maxScrollX:o.left,o.top=o.top>0?0:o.top<this.maxScrollY?this.maxScrollY:o.top,this.options.wheel&&(o.top=Math.round(o.top/this.itemHeight)*this.itemHeight),e=void 0===e||null===e||"auto"===e?Math.max(Math.abs(this.x-o.left),Math.abs(this.y-o.top)):e,this.scrollTo(o.left,o.top,e,n)}}},{key:"getComputedPosition",value:function(){var t=window.getComputedStyle(this.scroller,null),e=void 0,i=void 0;return this.options.useTransform?(t=t[a.style.transform].split(")")[0].split(", "),e=+(t[12]||t[4]),i=+(t[13]||t[5])):(e=+t.left.replace(/[^-\d.]/g,""),i=+t.top.replace(/[^-\d.]/g,"")),{x:e,y:i}}},{key:"goToPage",value:function(t,e,i){var s=arguments.length<=3||void 0===arguments[3]?a.ease.bounce:arguments[3];t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),e>=this.pages[t].length?e=this.pages[t].length-1:e<0&&(e=0);var n=this.pages[t][e].x,o=this.pages[t][e].y;i=void 0===i?this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(n-this.x),1e3),Math.min(Math.abs(o-this.y),1e3)),300):i,this.currentPage={x:n,y:o,pageX:t,pageY:e},this.scrollTo(n,o,i,s)}},{key:"next",value:function(t,e){var i=this.currentPage.pageX,s=this.currentPage.pageY;i++,i>=this.pages.length&&this.hasVerticalScroll&&(i=0,s++),this.goToPage(i,s,t,e)}},{key:"prev",value:function(t,e){var i=this.currentPage.pageX,s=this.currentPage.pageY;i--,i<0&&this.hasVerticalScroll&&(i=0,s--),this.goToPage(i,s,t,e)}},{key:"destroy",value:function(){this._removeEvents(),this.destroyed=!0,this.trigger("destroy")}},{key:"handleEvent",value:function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t);break;case"touchmove":case"mousemove":this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"click":!this.enabled||t._constructed||/(SELECT|INPUT|TEXTAREA)/i.test(t.target.tagName)||(t.preventDefault(),t.stopPropagation())}}}]),e}(a.EventEmitter)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(3);Object.keys(s).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return s[t]}})});var n=i(4);Object.keys(n).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return n[t]}})});var o=i(5);Object.keys(o).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})});var r=i(6);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})});var a=i(7);Object.keys(a).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return a[t]}})});var l=i(8);Object.keys(l).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return l[t]}})})},function(t,e){"use strict";function i(t){return!1!==u&&("standard"===u?t:u+t.charAt(0).toUpperCase()+t.substr(1))}function s(t,e,i,s){t.addEventListener(e,i,{passive:!1,capture:!!s})}function n(t,e,i,s){t.removeEventListener(e,i,!!s)}function o(t){for(var e=0,i=0;t;)e-=t.offsetLeft,i-=t.offsetTop,t=t.offsetParent;return{left:e,top:i}}function r(t){if(t instanceof window.SVGElement){var e=t.getBoundingClientRect();return{top:e.top,left:e.left,width:e.width,height:e.height}}return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}}function a(t,e){for(var i in e)if(e[i].test(t[i]))return!0;return!1}function l(t,e){var i=document.createEvent("Event");i.initEvent(e,!0,!0),i.pageX=t.pageX,i.pageY=t.pageY,t.target.dispatchEvent(i)}function h(t){var e=t.target;if(!/(SELECT|INPUT|TEXTAREA)/i.test(e.tagName)){var i=document.createEvent(window.MouseEvent?"MouseEvents":"Event");i.initEvent("click",!0,!0),i._constructed=!0,e.dispatchEvent(i)}}function c(t,e){e.firstChild?p(t,e.firstChild):e.appendChild(t)}function p(t,e){e.parentNode.insertBefore(t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.addEvent=s,e.removeEvent=n,e.offset=o,e.getRect=r,e.preventDefaultException=a,e.tap=l,e.click=h,e.prepend=c,e.before=p;var d=document.createElement("div").style,u=function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var e in t)if(void 0!==d[t[e]])return e;return!1}(),f=i("transform");e.hasPerspective=i("perspective")in d,e.hasTouch="ontouchstart"in window,e.hasTransform=!1!==f,e.hasTransition=i("transition")in d,e.style={transform:f,transitionTimingFunction:i("transitionTimingFunction"),transitionDuration:i("transitionDuration"),transitionDelay:i("transitionDelay"),transformOrigin:i("transformOrigin"),transitionEnd:i("transitionEnd")},e.eventType={touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.isBadAndroid=/Android /.test(window.navigator.appVersion)&&!/Chrome\/\d/.test(window.navigator.appVersion)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ease={swipe:{style:"cubic-bezier(0.23, 1, 0.32, 1)",fn:function(t){return 1+--t*t*t*t*t}},swipeBounce:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},bounce:{style:"cubic-bezier(0.165, 0.84, 0.44, 1)",fn:function(t){return 1- --t*t*t*t}}}},function(t,e){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){var i=[],s=!0,n=!1,o=void 0;try{for(var r,a=t[Symbol.iterator]();!(s=(r=a.next()).done)&&(i.push(r.value),!e||i.length!==e);s=!0);}catch(t){n=!0,o=t}finally{try{!s&&a.return&&a.return()}finally{if(n)throw o}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}();e.EventEmitter=function(){function t(){s(this,t),this._events={}}return o(t,[{key:"on",value:function(t,e){var i=arguments.length<=2||void 0===arguments[2]?this:arguments[2];this._events[t]||(this._events[t]=[]),this._events[t].push([e,i])}},{key:"once",value:function(t,e){function i(){this.off(t,i),n||(n=!0,e.apply(s,arguments))}var s=arguments.length<=2||void 0===arguments[2]?this:arguments[2],n=!1;this.on(t,i)}},{key:"off",value:function(t,e){var i=this._events[t];if(i)for(var s=i.length;s--;)i[s][0]===e&&(i[s][0]=void 0)}},{key:"trigger",value:function(t){var e=this._events[t];if(e)for(var s=e.length,o=[].concat(i(e)),r=0;r<s;r++){var a=o[r],l=n(a,2),h=l[0],c=l[1];h&&h.apply(c,[].slice.call(arguments,1))}}}]),t}()},function(t,e){"use strict";function i(t,e,i,s,n,o){var r=t-e,a=Math.abs(r)/i,l=o.deceleration,h=o.itemHeight,c=o.swipeBounceTime,p=o.bounceTime,d=o.swipeTime,u=o.wheel?4:15,f=t+a/l*(r<0?-1:1);return o.wheel&&h&&(f=Math.round(f/h)*h),f<s?(f=n?s-n/u*a:s,d=c-p):f>0&&(f=n?n/u*a:0,d=c-p),{destination:Math.round(f),duration:d}}Object.defineProperty(e,"__esModule",{value:!0}),e.momentum=i},function(t,e){"use strict";function i(t,e){for(var i in e)t[i]=e[i]}Object.defineProperty(e,"__esModule",{value:!0}),e.extend=i;e.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,(t.interval||100/60)/2)}}(),e.cancelAnimationFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t)}}()}])})},Hw68:function(t,e,i){e=t.exports=i("bKW+")(!0),e.push([t.i,".slide-enter-active[data-v-419dfe80],.slide-leave-active[data-v-419dfe80]{-webkit-transition:all .3s;transition:all .3s}.slide-enter[data-v-419dfe80],.slide-leave-to[data-v-419dfe80]{-webkit-transform:translate3d(3rem,0,0);transform:translate3d(3rem,0,0);opacity:0}.loading-container[data-v-419dfe80]{position:absolute;z-index:100;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.rating_page[data-v-419dfe80]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:202;background:#f2f2f2;padding-top:1.95rem}.scroll_container[data-v-419dfe80]{width:100%;height:100%}ul[data-v-419dfe80]{margin-left:1rem;padding:.4rem 0}ul li[data-v-419dfe80]{margin-bottom:.4rem}ul li p[data-v-419dfe80]{line-height:1rem}ul li p[data-v-419dfe80]:first-of-type{font-size:.55rem;color:#333}ul li p[data-v-419dfe80]:nth-of-type(2){font-size:.5rem;color:#999}.shop_status_container[data-v-419dfe80]{background-color:#fff;margin-bottom:.4rem}.shop_status_container header[data-v-419dfe80]{line-height:1.8rem;padding:0 .6rem;border-bottom:.025rem solid #f1f1f1;font-size:.75rem;color:#333}.shop_status_container .shop_statu_detail[data-v-419dfe80]{display:-webkit-box;display:-ms-flexbox;display:flex;padding:.6rem}.shop_status_container .shop_statu_detail svg[data-v-419dfe80]{width:2rem;height:2rem;margin-right:.6rem}.shop_status_container .shop_statu_detail .check_date span[data-v-419dfe80]{font-size:.55rem;color:#666}.shop_status_container .shop_statu_detail .check_date .shop_status_well[data-v-419dfe80]{color:#7ed321}.shop_status_container .shop_statu_detail .check_date .shop_status_bad[data-v-419dfe80]{color:red}.license_img[data-v-419dfe80]{padding:.6rem;background-color:#fff;padding-bottom:8rem}.license_img .img_container[data-v-419dfe80]{background-color:#ebebeb}.license_img .img_container img[data-v-419dfe80]{width:40%;height:auto;margin:.4rem;vertical-align:middle}","",{version:3,sources:["D:/l赖/x学习资料/vuejs/learn_demo/learnformelm/frommayun/learnfromelm/src/page/shop/children/children/shopSafe.vue"],names:[],mappings:"AACA,0EACE,2BAA6B,AAC7B,kBAAqB,CACtB,AACD,+DACE,wCAA2C,AACnC,gCAAmC,AAC3C,SAAW,CACZ,AACD,oCACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,8BACE,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,QAAS,AACT,SAAU,AACV,YAAa,AACb,mBAAoB,AACpB,mBAAqB,CACtB,AACD,mCACE,WAAY,AACZ,WAAa,CACd,AACD,oBACE,iBAAkB,AAClB,eAAiB,CAClB,AACD,uBACI,mBAAqB,CACxB,AACD,yBACM,gBAAkB,CACvB,AACD,uCACM,iBAAmB,AACnB,UAAY,CACjB,AACD,wCACM,gBAAkB,AAClB,UAAY,CACjB,AACD,wCACE,sBAAuB,AACvB,mBAAqB,CACtB,AACD,+CACI,mBAAoB,AACpB,gBAAiB,AACjB,oCAAsC,AACtC,iBAAmB,AACnB,UAAY,CACf,AACD,2DACI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,aAAe,CAClB,AACD,+DACM,WAAY,AACZ,YAAa,AACb,kBAAoB,CACzB,AACD,4EACM,iBAAmB,AACnB,UAAY,CACjB,AACD,yFACM,aAAe,CACpB,AACD,wFACM,SAAW,CAChB,AACD,8BACE,cAAe,AACf,sBAAuB,AACvB,mBAAqB,CACtB,AACD,6CACI,wBAA0B,CAC7B,AACD,iDACM,UAAW,AACX,YAAa,AACb,aAAc,AACd,qBAAuB,CAC5B",file:"shopSafe.vue",sourcesContent:["\n.slide-enter-active[data-v-419dfe80], .slide-leave-active[data-v-419dfe80] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.slide-enter[data-v-419dfe80], .slide-leave-to[data-v-419dfe80] {\n  -webkit-transform: translate3d(3rem, 0, 0);\n          transform: translate3d(3rem, 0, 0);\n  opacity: 0;\n}\n.loading-container[data-v-419dfe80] {\n  position: absolute;\n  z-index: 100;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.rating_page[data-v-419dfe80] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 202;\n  background: #f2f2f2;\n  padding-top: 1.95rem;\n}\n.scroll_container[data-v-419dfe80] {\n  width: 100%;\n  height: 100%;\n}\nul[data-v-419dfe80] {\n  margin-left: 1rem;\n  padding: .4rem 0;\n}\nul li[data-v-419dfe80] {\n    margin-bottom: .4rem;\n}\nul li p[data-v-419dfe80] {\n      line-height: 1rem;\n}\nul li p[data-v-419dfe80]:nth-of-type(1) {\n      font-size: 0.55rem;\n      color: #333;\n}\nul li p[data-v-419dfe80]:nth-of-type(2) {\n      font-size: 0.5rem;\n      color: #999;\n}\n.shop_status_container[data-v-419dfe80] {\n  background-color: #fff;\n  margin-bottom: .4rem;\n}\n.shop_status_container header[data-v-419dfe80] {\n    line-height: 1.8rem;\n    padding: 0 .6rem;\n    border-bottom: 0.025rem solid #f1f1f1;\n    font-size: 0.75rem;\n    color: #333;\n}\n.shop_status_container .shop_statu_detail[data-v-419dfe80] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: .6rem;\n}\n.shop_status_container .shop_statu_detail svg[data-v-419dfe80] {\n      width: 2rem;\n      height: 2rem;\n      margin-right: .6rem;\n}\n.shop_status_container .shop_statu_detail .check_date span[data-v-419dfe80] {\n      font-size: 0.55rem;\n      color: #666;\n}\n.shop_status_container .shop_statu_detail .check_date .shop_status_well[data-v-419dfe80] {\n      color: #7ed321;\n}\n.shop_status_container .shop_statu_detail .check_date .shop_status_bad[data-v-419dfe80] {\n      color: red;\n}\n.license_img[data-v-419dfe80] {\n  padding: .6rem;\n  background-color: #fff;\n  padding-bottom: 8rem;\n}\n.license_img .img_container[data-v-419dfe80] {\n    background-color: #ebebeb;\n}\n.license_img .img_container img[data-v-419dfe80] {\n      width: 40%;\n      height: auto;\n      margin: .4rem;\n      vertical-align: middle;\n}\n"],sourceRoot:""}])},NXAv:function(t,e,i){i("EyoV"),i("gjWx"),t.exports=i("ZBPP").Array.from},OUEQ:function(t,e,i){"use strict";var s=i("HFUh"),n=i.n(s);e.a={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},scrollX:{type:Boolean,default:!1},listenScroll:{type:Boolean,default:!1},data:{type:Array,default:null},pullup:{type:Boolean,default:!1},pulldown:{type:Boolean,default:!1},beforeScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){var t=this;if(this.$refs.wrapper){if(this.scroll=new n.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click}),this.listenScroll){var e=this;this.scroll.on("scroll",function(t){e.$emit("scroll",t)})}if(this.pullup){var i=this;this.scroll.on("scrollEnd",function(){t.scroll.y<=t.scroll.maxScrollY+50&&i.$emit("scrollToEnd")})}this.beforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("beforeScroll")})}},enable:function(){this.scroll&&this.scroll.enable()},disable:function(){this.scroll&&this.scroll.disable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},this.refreshDelay)}}}},On6D:function(t,e,i){"use strict";var s=i("8tNu"),n=i("KH1Y");t.exports=function(t,e,i){e in t?s.f(t,e,n(0,i)):t[e]=i}},Widt:function(t,e,i){"use strict";var s=i("34v0"),n=i.n(s),o=i("fHpZ"),r=i.n(o),a=i("ra3+"),l=i("uaSg"),h=i("rEcq"),c=i("/mv4"),p=i("we8T");e.a={mixins:[p.a],data:function(){return{localapi:l.d,proapi:l.e,imgBaseUrl:l.c,list:[],testUrl:"http://img4.imgtn.bdimg.com/it/u=2770691011,100164542&fm=214&gp=0.jpg",testUrlList:[{src:"http://img4.imgtn.bdimg.com/it/u=2770691011,100164542&fm=214&gp=0.jpg"},{src:"http://img4.imgtn.bdimg.com/it/u=2770691011,100164542&fm=214&gp=0.jpg"}]}},created:function(){this.list=r()(this.shopDetail)},mounted:function(){},computed:n()({},i.i(c.b)(["shopDetail"])),methods:{showLicenseImg:function(t){this.licenseImg=t,this.showlicenseImg=!0}},components:{scroll:h.a,headTop:a.a}}},fHpZ:function(t,e,i){t.exports={default:i("NXAv"),__esModule:!0}},gjWx:function(t,e,i){"use strict";var s=i("NQnF"),n=i("5I2C"),o=i("aOYj"),r=i("IfnB"),a=i("XY9y"),l=i("yciV"),h=i("On6D"),c=i("OOMP");n(n.S+n.F*!i("Vrk2")(function(t){Array.from(t)}),"Array",{from:function(t){var e,i,n,p,d=o(t),u="function"==typeof this?this:Array,f=arguments.length,m=f>1?arguments[1]:void 0,v=void 0!==m,g=0,A=c(d);if(v&&(m=s(m,f>2?arguments[2]:void 0,2)),void 0==A||u==Array&&a(A))for(e=l(d.length),i=new u(e);e>g;g++)h(i,g,v?m(d[g],g):d[g]);else for(p=A.call(d),i=new u;!(n=p.next()).done;g++)h(i,g,v?r(p,m,[n.value,g],!0):n.value);return i.length=g,i}})},mzsn:function(t,e,i){var s=i("Hw68");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("6imX")("5072025d",s,!0)},rEcq:function(t,e,i){"use strict";var s=i("OUEQ"),n=i("AeiX"),o=i("mPyB"),r=o(s.a,n.a,!1,null,null,null);e.a=r.exports},we8T:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var s=(i("/mv4"),{methods:{getImgPath:function(t){var e=void 0;return t?(e=-1!==t.indexOf("jpeg")?".jpeg":".png","https://fuss10.elemecdn.com/"+t.substr(0,1)+"/"+t.substr(1,2)+"/"+t.substr(3)+e):"http://test.fe.ptdev.cn/elm/elmlogo.jpeg"}}})}});
//# sourceMappingURL=12.5fdec6a4ca980df691a7.js.map