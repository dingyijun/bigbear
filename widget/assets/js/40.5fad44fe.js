webpackJsonp([40],{1:function(e,n,t){"use strict";function a(e,n,t,a){return"function"==typeof n&&(a=t,t=n,n=void 0),"function"!=typeof t&&(a=t,t=void 0),{url:e,data:n,fnSuc:t,dataType:a}}var i=t(0),o=t.n(i),r=t(17),l=t.n(r),s=t(3),u=t.n(s),c=t(8),d=(t.n(c),t(9)),p=t.n(d),m=t(18),f=(t.n(m),t(19)),w=t.n(f),v=t(4),g=t.n(v),h=t(13),E=t.n(h),b={},y=/android/gi.test(navigator.appVersion),x=function(){var e=window.localStorage;return y&&(e=window.os.localStorage()),e};b.trim=function(e){return String.prototype.trim?null===e?"":String.prototype.trim.call(e):e.replace(/(^\s*)|(\s*$)/g,"")},b.trimAll=function(e){return e.replace(/\s*/g,"")},b.isElement=function(e){return!(!e||1!==e.nodeType)},b.isArray=function(e){return Array.isArray?Array.isArray(e):e instanceof Array},b.isEmptyObject=function(e){return"{}"===E()(e)},b.addEvt=function(e,n,t,a){if(!b.isElement(e))return void console.warn("$api.addEvt Function need el param, el param must be DOM Element");a=a||!1,e.addEventListener&&e.addEventListener(n,t,a)},b.rmEvt=function(e,n,t,a){if(!b.isElement(e))return void console.warn("$api.rmEvt Function need el param, el param must be DOM Element");a=a||!1,e.removeEventListener&&e.removeEventListener(n,t,a)},b.one=function(e,n,t,a){if(!b.isElement(e))return void console.warn("$api.one Function need el param, el param must be DOM Element");a=a||!1;var i=this,o=function o(){t&&t(),i.rmEvt(e,n,o,a)};i.addEvt(e,n,o,a)},b.dom=function(e,n){if(1===arguments.length&&"string"==typeof arguments[0]){if(document.querySelector)return document.querySelector(arguments[0])}else if(2===arguments.length&&e.querySelector)return e.querySelector(n)},b.domAll=function(e,n){if(1===arguments.length&&"string"==typeof arguments[0]){if(document.querySelectorAll)return document.querySelectorAll(arguments[0])}else if(2===arguments.length&&e.querySelectorAll)return e.querySelectorAll(n)},b.byId=function(e){return document.getElementById(e)},b.first=function(e,n){return 1===arguments.length?b.isElement(e)?e.children[0]:void console.warn("$api.first Function need el param, el param must be DOM Element"):2===arguments.length?this.dom(e,n+":first-child"):void 0},b.last=function(e,n){if(1===arguments.length){if(!b.isElement(e))return void console.warn("$api.last Function need el param, el param must be DOM Element");var t=e.children;return t[t.length-1]}if(2===arguments.length)return this.dom(e,n+":last-child")},b.eq=function(e,n){return this.dom(e,":nth-child("+n+")")},b.not=function(e,n){return this.domAll(e,":not("+n+")")},b.prev=function(e){if(!b.isElement(e))return void console.warn("$api.prev Function need el param, el param must be DOM Element");var n=e.previousSibling;return n.nodeType&&3===n.nodeType?n=n.previousSibling:void 0},b.next=function(e){if(!b.isElement(e))return void console.warn("$api.next Function need el param, el param must be DOM Element");var n=e.nextSibling;return n.nodeType&&3===n.nodeType?n=n.nextSibling:void 0},b.closest=function(e,n){if(!b.isElement(e))return void console.warn("$api.closest Function need el param, el param must be DOM Element");var t,a,i=function(e,n){var t=0,a=e.length;for(t;t<a;t++)if(e[t].isSameNode(n))return e[t];return!1};return function e(n,o){for(t=b.domAll(n.parentNode,o),a=i(t,n);!a;){if(null!==(n=n.parentNode)&&n.nodeType===n.DOCUMENT_NODE)return!1;a=e(n,o)}return a}(e,n)},b.contains=function(e,n){var t=!1;if(n===e)return t=!0;do{if((n=n.parentNode)===e)return t=!0}while(n===document.body||n===document.documentElement);return t},b.remove=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},b.attr=function(e,n,t){return b.isElement(e)?2===arguments.length?e.getAttribute(n):3===arguments.length?(e.setAttribute(n,t),e):void 0:void console.warn("$api.attr Function need el param, el param must be DOM Element")},b.removeAttr=function(e,n){if(!b.isElement(e))return void console.warn("$api.removeAttr Function need el param, el param must be DOM Element");2===arguments.length&&e.removeAttribute(n)},b.hasCls=function(e,n){return b.isElement(e)?e.className.indexOf(n)>-1:void console.warn("$api.hasCls Function need el param, el param must be DOM Element")},b.addCls=function(e,n){if(!b.isElement(e))return void console.warn("$api.addCls Function need el param, el param must be DOM Element");if("classList"in e)e.classList.add(n);else{var t=e.className,a=t+" "+n;e.className=a}return e},b.removeCls=function(e,n){if(!b.isElement(e))return void console.warn("$api.removeCls Function need el param, el param must be DOM Element");if("classList"in e)e.classList.remove(n);else{var t=e.className,a=t.replace(n,"");e.className=a}return e},b.toggleCls=function(e,n){return b.isElement(e)?("classList"in e?e.classList.toggle(n):b.hasCls(e,n)?b.removeCls(e,n):b.addCls(e,n),e):void console.warn("$api.toggleCls Function need el param, el param must be DOM Element")},b.val=function(e,n){if(!b.isElement(e))return void console.warn("$api.val Function need el param, el param must be DOM Element");if(1===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value;case"INPUT":case"TEXTAREA":return e.value}if(2===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value=n,e;case"INPUT":case"TEXTAREA":return e.value=n,e}},b.prepend=function(e,n){return b.isElement(e)?(e.insertAdjacentHTML("afterbegin",n),e):void console.warn("$api.prepend Function need el param, el param must be DOM Element")},b.append=function(e,n){return b.isElement(e)?(e.insertAdjacentHTML("beforeend",n),e):void console.warn("$api.append Function need el param, el param must be DOM Element")},b.before=function(e,n){return b.isElement(e)?(e.insertAdjacentHTML("beforebegin",n),e):void console.warn("$api.before Function need el param, el param must be DOM Element")},b.after=function(e,n){return b.isElement(e)?(e.insertAdjacentHTML("afterend",n),e):void console.warn("$api.after Function need el param, el param must be DOM Element")},b.html=function(e,n){return b.isElement(e)?1===arguments.length?e.innerHTML:2===arguments.length?(e.innerHTML=n,e):void 0:void console.warn("$api.html Function need el param, el param must be DOM Element")},b.text=function(e,n){return b.isElement(e)?1===arguments.length?e.textContent:2===arguments.length?(e.textContent=n,e):void 0:void console.warn("$api.text Function need el param, el param must be DOM Element")},b.offset=function(e){if(!b.isElement(e))return void console.warn("$api.offset Function need el param, el param must be DOM Element");var n=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),t=Math.max(document.documentElement.scrollTop,document.body.scrollTop),a=e.getBoundingClientRect();return{l:a.left+n,t:a.top+t,w:e.offsetWidth,h:e.offsetHeight}},b.css=function(e,n){if(!b.isElement(e))return void console.warn("$api.css Function need el param, el param must be DOM Element");"string"==typeof n&&n.indexOf(":")>0&&e.style&&(e.style.cssText+=";"+n)},b.cssVal=function(e,n){if(!b.isElement(e))return void console.warn("$api.cssVal Function need el param, el param must be DOM Element");if(2===arguments.length){return window.getComputedStyle(e,null).getPropertyValue(n)}},b.jsonToStr=function(e){if("object"===(void 0===e?"undefined":g()(e)))return JSON&&E()(e)},b.strToJson=function(e){if("string"==typeof e)return JSON&&JSON.parse(e)},b.setStorage=function(e,n){if(2===arguments.length){var t=n;"object"===(void 0===t?"undefined":g()(t))?(t=E()(t),t="obj-"+t):t="str-"+t;var a=x();a&&a.setItem(e,t)}},b.getStorage=function(e){var n=x();if(n){var t=n.getItem(e);if(!t)return;if(0===t.indexOf("obj-"))return t=t.slice(4),JSON.parse(t);if(0===t.indexOf("str-"))return t.slice(4)}},b.rmStorage=function(e){var n=x();n&&e&&n.removeItem(e)},b.clearStorage=function(){var e=x();e&&e.clear()},b.fixIos7Bar=function(e){return b.fixStatusBar(e)},b.fixStatusBar=function(e){return b.isElement(e)?(e.style.paddingTop=window.api.safeArea.top+"px",e.style.height=window.api.safeArea.top+e.offsetHeight+"px",e.offsetHeight):(console.warn("$api.fixStatusBar Function need el param, el param must be DOM Element"),0)},b.fixTabBar=function(e){return b.isElement(e)?(e.style.paddingBottom=window.api.safeArea.bottom+"px",e.offsetHeight):(console.warn("$api.fixTabBar Function need el param, el param must be DOM Element"),0)},b.showProgress=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";window.api?window.api.showProgress({title:"",text:e}):w.a.open({text:e,spinnerType:"fading-circle"})},b.hideProgress=function(){window.api?window.api.hideProgress():w.a.close()},b.toast=function(e){var n=e.message,t=void 0===n?"":n,a=e.position,i=void 0===a?"top":a,o=e.duration,r=void 0===o?2e3:o;window.api?window.api.toast({msg:t,location:i,duration:r}):p()({message:t,position:i,duration:r})},b.post=function(){var e=a.apply(null,arguments),n={},t=e.fnSuc;if(e.url&&(n.url=e.url),e.data&&(n.data=e.data),e.dataType){var i=e.dataType.toLowerCase();"text"!==i&&"json"!==i||(n.dataType=i)}else n.dataType="json";n.method="post",window.ajax(n,function(e,n){e&&t&&t(e)})},b.get=function(){var e=a.apply(null,arguments),n={},t=e.fnSuc;if(e.url&&(n.url=e.url),e.dataType){var i=e.dataType.toLowerCase();"text"!==i&&"json"!==i||(n.dataType=i)}else n.dataType="text";n.method="get",window.api.ajax(n,function(e,n){e&&t&&t(e)})},b.sleep=function(e){return new u.a(function(n,t){setTimeout(function(){n("ok")},e)})},b.openWin=function(e){var n=e.LCB,t=e.name,a=e.url,i=e.title,r=void 0===i?"":i,s=e.fname,u=e.furl,c=e.hasLeft,d=void 0!==c&&c,p=e.hasRight,m=void 0!==p&&p,f=e.jumpTime,w=void 0===f?100:f,v=e.data,g=void 0===v?{}:v,h=l()(e,["LCB","name","url","title","fname","furl","hasLeft","hasRight","jumpTime","data"]);if(window.api){var E={name:t,url:a,bounces:!1,slidBackEnabled:!1,pageParam:o()({},h)};if("function"==typeof n){var y="LCB"+Date.now().valueOf()+Math.random();b.addEventListener({name:y},n),E.pageParam.LCBName=y}if("function"==typeof g.callback){var x="EVENT"+Date.now().valueOf()+Math.random();b.addEventListener({name:x},g.callback),g.eventName=x,delete g.callback}void 0!==s&&(E.pageParam.wtitle=r,E.pageParam.fname=s,E.pageParam.furl=u,E.pageParam.hasLeft=d,E.pageParam.hasRight=m,E.pageParam.data=g),setTimeout(function(){window.api.openWin(E)},w)}else u&&(window.location.href=u.replace("./","/"))},b.addEventListener=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};window.api&&window.api.addEventListener(e,function(t,a){n(o()({},t,{value:"string"==typeof t.value?JSON.parse(t.value):t.value}),a),!1!==e.delEvent&&window.api.removeEventListener({name:e.name})})},b.sendEvent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.api&&window.api.sendEvent({name:e,extra:"object"===(void 0===n?"undefined":g()(n))?E()(n):n})},b.closeWin=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};window.api&&(window.api.pageParam.eventName&&""!==window.api.pageParam.eventName&&b.sendEvent(window.api.pageParam.eventName,e),window.api.closeWin())},b.back=function(){window.api&&(window.api.pageParam.LCBName&&""!==window.api.pageParam.LCBName&&b.sendEvent(window.api.pageParam.LCBName),window.api.closeWin())},b.confirm=function(e){var n=e.title,t=void 0===n?"":n,a=e.content,i=void 0===a?"":a,o=e.callback,r=void 0===o?function(){}:o;window.api?api.confirm({title:t,msg:i,buttons:["确定","取消"]},function(e,n){switch(e.buttonIndex){case 1:r(e,n)}}):!0===confirm(i)&&r()},b.urlParse=function(e){var n=e.split("?"),t=n[0],a=n[1].split("&"),i={};return a.foreach(function(e){i[e.split("=")[0]]=unescape(e.split("=")[1])}),{base:t,params:i}},b.openWebPage=function(e){if(window.api)switch(window.api.systemType){case"android":window.api.openApp({androidPkg:"android.intent.action.VIEW",mimeType:"text/html",uri:e},function(e,n){});break;case"ios":var n=b.urlParse(e),t=n.base,a=n.params;window.api.openApp({iosUrl:t,appParam:{appParam:a}})}else window.open(e)},b.getPicUrl=function(e,n){var t=e.split("/");if("test.mangotmall.com"!==t[2])return e;var a=n?n+"_":"";return t[t.length-1]=a+t[t.length-1],t.join("/")},b.backCloseW=function(){var e=0;window.api.addEventListener({name:"keyback"},function(n,t){e?1==e&&window.api.closeWidget():(e=1,b.toast({position:"top",message:"再点一次退出应用"}),setTimeout(function(){e=0},2e3))})},n.a=b},1018:function(e,n,t){e.exports=t(407)},407:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(11),i=t(867),o=t.n(i),r=t(15),l=(t.n(r),t(16)),s=(t.n(l),t(14));t.n(s);window.apiready=function(){document.body.addEventListener("touchstart",function(){}),new a.default({el:"#app",render:function(e){return e(o.a)}})}},429:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(693),i=t.n(a);n.default={props:{height:{type:String,default:"50px"},textColor:{type:String},color:{type:String},title:{type:String},zDepth:{type:Number}},components:{AppBar:i.a},computed:{hasSlot:function(){return!!this.$slots.default}},methods:{},mounted:function(){}}},503:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(152),i=t.n(a),o=t(27),r=t.n(o),l=t(1),s=t(793),u=t.n(s);n.default={data:function(){return{showMarker:!1,wtitle:window.api?window.api.pageParam.wtitle:"",hasLeft:!!window.api&&window.api.pageParam.hasLeft,hasRight:!!window.api&&window.api.pageParam.hasRight}},components:{Button:r.a,Icon:i.a,UIHeader:u.a},methods:{clickLeft:function(){"main"==window.api.pageParam.data.comefrom||"setting"==window.api.pageParam.data.comefrom?window.api.openWin({name:"main",url:"./index/main.html",pageParam:{comefrom:"login"}}):l.a.back()},clickRight:function(){window.api&&window.api.execScript({frameName:this.fname,script:"clickRight()"})}},mounted:function(){var e=this,n=l.a.fixStatusBar(l.a.dom(".header"));window.api&&(window.api.addEventListener({name:"keyback"},function(){l.a.back()}),window.api.addEventListener({name:"openMarker"},function(){e.showMarker=!0}),window.api.addEventListener({name:"closeMarker"},function(){e.showMarker=!1}),"login_f"!==window.api.pageParam.fname&&"bund_f"!==window.api.pageParam.fname||l.a.backCloseW(),window.api.openFrame({name:window.api.pageParam.fname,url:window.api.pageParam.furl,bounces:!1,pageParam:window.api.pageParam.data||{},rect:{x:0,y:n+1,w:"auto",h:"auto"}}))}}},622:function(e,n){},631:function(e,n){},793:function(e,n,t){function a(e){t(631)}var i=t(10)(t(429),t(896),a,"data-v-40441284",null);e.exports=i.exports},867:function(e,n,t){function a(e){t(622)}var i=t(10)(t(503),t(889),a,"data-v-31dad792",null);e.exports=i.exports},889:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("UIHeader",{staticClass:"header",attrs:{color:"#ffffff",textColor:"#000000","z-depth":0,title:e.wtitle}},[e.hasLeft?t("Button",{attrs:{slot:"left",icon:""},on:{click:e.clickLeft},slot:"left"},[t("Icon",{attrs:{value:":icon-left",color:"#666",size:24}})],1):e._e(),e._v(" "),e.hasRight?t("Button",{attrs:{slot:"right",icon:""},on:{click:e.clickRight},slot:"right"},[t("Icon",{attrs:{value:":icon-kefunv",color:"#666",size:24}})],1):e._e()],1),e._v(" "),e.showMarker?t("div",{staticClass:"v-modal"}):e._e()],1)},staticRenderFns:[]}},896:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("AppBar",e._b({style:{height:e.height},attrs:{color:e.color,textColor:e.textColor,"z-depth":e.zDepth,title:e.title}},"AppBar",e.$attrs,!1),[e._t("left",null,{slot:"left"}),e._v(" "),e.hasSlot?t("div",[e._t("default")],2):e._e(),e._v(" "),e._t("right",null,{slot:"right"})],2)},staticRenderFns:[]}}},[1018]);