(window.webpackJsonp=window.webpackJsonp||[]).push([["dashboard-welcome~31ecd969"],{"02da":function(e,t,n){"use strict";n("9c5e")},"112a":function(e,t,n){e.exports=n.p+"img/analysis.d9040b65.svg"},"9c5e":function(e,t,n){},d6cc:function(e,t,n){"use strict";n.r(t),n("a9e3"),n("f00c");var o=n("7a23"),r=n("112a"),a=n.n(r),i=Object(o.withScopeId)("data-v-748b0942");Object(o.pushScopeId)("data-v-748b0942");var c={class:"box"},s=Object(o.createVNode)("img",{src:a.a},null,-1),l={class:"charging"};Object(o.popScopeId)();var u=i((function(e,t,n,r,a,u){var d=Object(o.resolveComponent)("a-descriptions-item"),b=Object(o.resolveComponent)("a-badge"),p=Object(o.resolveComponent)("a-descriptions");return Object(o.openBlock)(),Object(o.createBlock)("div",null,[Object(o.createVNode)("div",c,[s,Object(o.createVNode)(p,{title:"浏览器信息",bordered:""},{default:i((function(){return[(Object(o.openBlock)(!0),Object(o.createBlock)(o.Fragment,null,Object(o.renderList)(e.browserInfo,(function(e,t){return Object(o.openBlock)(),Object(o.createBlock)(d,{label:t,key:t},{default:i((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e),1)]})),_:2},1032,["label"])})),128)),Object(o.createVNode)(d,{label:"网络状态"},{default:i((function(){return[Object(o.createVNode)(b,{status:e.online?"processing":"default",text:e.online?"在线":"离线"},null,8,["status","text"])]})),_:1})]})),_:1})]),Object(o.withDirectives)(Object(o.createVNode)("div",l,[Object(o.createVNode)("div",null,Object(o.toDisplayString)(e.batteryStatus),1),Object(o.withDirectives)(Object(o.createVNode)("div",null," 剩余可使用时间："+Object(o.toDisplayString)(e.calcDischargingTime),513),[[o.vShow,Number.isFinite(e.battery.dischargingTime)&&0!=e.battery.dischargingTime]]),Object(o.withDirectives)(Object(o.createVNode)("span",null," 距离电池充满需要："+Object(o.toDisplayString)(e.calcDischargingTime),513),[[o.vShow,Number.isFinite(e.battery.chargingTime)&&0!=e.battery.chargingTime]])],512),[[o.vShow,!1]])])})),d=(n("b0c0"),n("ade3")),b=n("4d91"),p=n("1d19"),f=n("b488"),m=n("0464"),g=n("7b05"),h=n("4df5");function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function O(e){return e?e.toString().split("").reverse().map((function(e){var t=Number(e);return isNaN(t)?e:t})):[]}var w={prefixCls:b.a.string,count:b.a.any,component:b.a.string,title:b.a.oneOfType([b.a.number,b.a.string,null]),displayComponent:b.a.any,onAnimated:b.a.func},j=Object(o.defineComponent)({name:"ScrollNumber",mixins:[f.a],inheritAttrs:!1,props:w,emits:["animated"],setup:function(){return{configProvider:Object(o.inject)("configProvider",h.b),lastCount:void 0,timeout:void 0}},data:function(){return{animateStarted:!0,sCount:this.count}},watch:{count:function(){this.lastCount=this.sCount,this.setState({animateStarted:!0})}},updated:function(){var e=this,t=this.animateStarted,n=this.count;t&&(this.clearTimeout(),this.timeout=setTimeout((function(){e.setState({animateStarted:!1,sCount:n},e.handleAnimated)})))},beforeUnmount:function(){this.clearTimeout()},methods:{clearTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0)})),getPositionByNum:function(e,t){var n=this.sCount,o=Math.abs(Number(n)),r=Math.abs(Number(this.lastCount)),a=Math.abs(O(n)[t]),i=Math.abs(O(this.lastCount)[t]);return this.animateStarted?10+e:o>r?a>=i?10+e:20+e:a<=i?10+e:e},handleAnimated:function(){this.$emit("animated")},renderNumberList:function(e,t){for(var n=[],r=0;r<30;r++)n.push(Object(o.createVNode)("p",{key:r.toString(),class:Object(p.a)(t,{current:e===r})},[r%10]));return n},renderCurrentNumber:function(e,t,n){if("number"==typeof t){var r=this.getPositionByNum(t,n),a={transition:this.animateStarted||void 0===O(this.lastCount)[n]?"none":void 0,msTransform:"translateY(".concat(100*-r,"%)"),WebkitTransform:"translateY(".concat(100*-r,"%)"),transform:"translateY(".concat(100*-r,"%)")};return Object(o.createVNode)("span",{class:"".concat(e,"-only"),style:a,key:n},[this.renderNumberList(r,"".concat(e,"-only-unit"))])}return Object(o.createVNode)("span",{key:"symbol",class:"".concat(e,"-symbol")},[t])},renderNumberElement:function(e){var t=this,n=this.sCount;return n&&Number(n)%1==0?O(n).map((function(n,o){return t.renderCurrentNumber(e,n,o)})).reverse():n}},render:function(){var e=this,t=this.prefixCls,n=this.title,r=this.component,a=void 0===r?"sup":r,i=this.displayComponent,c=(0,this.configProvider.getPrefixCls)("scroll-number",t),s=this.$attrs,l=s.class,u=s.style,d=void 0===u?{}:u;if(i)return Object(g.a)(i,{class:Object(p.a)("".concat(c,"-custom-component"),i.props&&i.props.class)});var b=Object(m.a)(v(v({},this.$props),this.$attrs),["count","onAnimated","component","prefixCls","displayComponent"]),f=v({},d),h=v(v({},b),{title:n,style:f,class:Object(p.a)(c,l)});return d&&d.borderColor&&(h.style.boxShadow="0 0 0 1px ".concat(d.borderColor," inset")),Object(o.createVNode)(a,h,{default:function(){return[e.renderNumberElement(c)]}})}}),y=n("46b7"),N=(Object(y.a)("success","processing","error","default","warning"),Object(y.a)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")),C=n("1d6f"),x=n("af88"),S=n("dd3d");function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var T={count:b.a.VNodeChild,showZero:b.a.looseBool,overflowCount:b.a.number,dot:b.a.looseBool,prefixCls:b.a.string,scrollNumberPrefixCls:b.a.string,status:b.a.oneOf(Object(y.a)("success","processing","default","error","warning")),color:b.a.string,text:b.a.VNodeChild,offset:b.a.arrayOf(b.a.oneOfType([String,Number])),numberStyle:b.a.style,title:b.a.string};function _(e){return-1!==N.indexOf(e)}var P=Object(o.defineComponent)({name:"ABadge",props:Object(C.o)(T,{showZero:!1,dot:!1,overflowCount:99}),setup:function(){return{configProvider:Object(o.inject)("configProvider",h.b),badgeCount:void 0}},methods:{getNumberedDispayCount:function(){var e=this.$props.overflowCount,t=this.badgeCount;return t>e?"".concat(e,"+"):t},getDispayCount:function(){return this.isDot()?"":this.getNumberedDispayCount()},getScrollNumberTitle:function(){var e=this.$props.title,t=this.badgeCount;return e||("string"==typeof t||"number"==typeof t?t:void 0)},getStyleWithOffset:function(){var e=this.$props,t=e.offset,n=e.numberStyle;return D(t?{right:"".concat(-parseInt(t[0],10),"px"),marginTop:Object(S.a)(t[1])?"".concat(t[1],"px"):t[1]}:{},n)},getBadgeClassName:function(e,t){var n,o=this.hasStatus();return Object(p.a)(e,(V(n={},"".concat(e,"-status"),o),V(n,"".concat(e,"-dot-status"),o&&this.dot&&!this.isZero()),V(n,"".concat(e,"-not-a-wrapper"),!t.length),n))},hasStatus:function(){var e=this.$props,t=e.status,n=e.color;return!!t||!!n},isZero:function(){var e=this.getNumberedDispayCount();return"0"===e||0===e},isDot:function(){var e=this.$props.dot,t=this.isZero();return e&&!t||this.hasStatus()},isHidden:function(){var e=this.$props.showZero,t=this.getDispayCount(),n=this.isZero(),o=this.isDot();return(null==t||""===t||n&&!e)&&!o},renderStatusText:function(e){var t=Object(C.g)(this,"text");return this.isHidden()||!t?null:Object(o.createVNode)("span",{class:"".concat(e,"-status-text")},[t])},renderDispayComponent:function(){var e=this.badgeCount;if(e&&"object"===k(e))return Object(g.a)(e,{style:this.getStyleWithOffset()},!1)},renderBadgeNumber:function(e,t){var n,r=this.$props,a=r.status,i=r.color,c=this.badgeCount,s=this.getDispayCount(),l=this.isDot(),u=this.isHidden(),d=(V(n={},"".concat(e,"-dot"),l),V(n,"".concat(e,"-count"),!l),V(n,"".concat(e,"-multiple-words"),!l&&c&&c.toString&&c.toString().length>1),V(n,"".concat(e,"-status-").concat(a),!!a),V(n,"".concat(e,"-status-").concat(i),_(i)),n),b=this.getStyleWithOffset();return i&&!_(i)&&((b=b||{}).background=i),u?null:Object(o.withDirectives)(Object(o.createVNode)(j,{prefixCls:t,"data-show":!u,class:d,count:s,displayComponent:this.renderDispayComponent(),title:this.getScrollNumberTitle(),style:b,key:"scrollNumber"},null),[[o.vShow,!u]])}},render:function(){var e,t=this.prefixCls,n=this.scrollNumberPrefixCls,r=this.status,a=this.color,i=Object(C.g)(this,"text"),c=this.configProvider.getPrefixCls,s=c("badge",t),l=c("scroll-number",n),u=Object(C.l)(this),d=Object(C.g)(this,"count");Array.isArray(d)&&(d=d[0]),this.badgeCount=d;var b=this.renderBadgeNumber(s,l),f=this.renderStatusText(s),m=Object(p.a)((V(e={},"".concat(s,"-status-dot"),this.hasStatus()),V(e,"".concat(s,"-status-").concat(r),!!r),V(e,"".concat(s,"-status-").concat(a),_(a)),e)),g={};if(a&&!_(a)&&(g.background=a),!u.length&&this.hasStatus()){var h=this.getStyleWithOffset(),v=h&&h.color;return Object(o.createVNode)("span",{class:this.getBadgeClassName(s,u),style:h},[Object(o.createVNode)("span",{class:m,style:g},null),Object(o.createVNode)("span",{style:{color:v},class:"".concat(s,"-status-text")},[i])])}var O=Object(x.d)(u.length?"".concat(s,"-zoom"):"");return Object(o.createVNode)("span",{class:this.getBadgeClassName(s,u)},[u,Object(o.createVNode)(x.a,O,{default:function(){return[b]}}),f])}}),B=Object(y.b)(P),I=n("6a21"),M=n("ae55");function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e){return null!=e}var q=function(e){var t,n=e.itemPrefixCls,r=e.component,a=e.span,i=e.bordered,c=e.label,s=e.content,l=e.colon,u=r;return i?Object(o.createVNode)(u,{class:[(t={},A(t,"".concat(n,"-item-label"),$(c)),A(t,"".concat(n,"-item-content"),$(s)),t)],colSpan:a},{default:function(){return[$(c)?c:s]}}):Object(o.createVNode)(u,{class:["".concat(n,"-item")],colSpan:a},{default:function(){return[c&&Object(o.createVNode)("span",{class:["".concat(n,"-item-label"),A({},"".concat(n,"-item-no-colon"),!l)]},[c]),s&&Object(o.createVNode)("span",{class:"".concat(n,"-item-content")},[s])]}})},z=function(e){var t=function(e,t,n){var r=t.colon,a=t.prefixCls,i=t.bordered,c=n.component,s=n.type,l=n.showLabel,u=n.showContent;return e.map((function(e,t){var n=Object(C.j)(e),d=n.prefixCls,b=void 0===d?a:d,p=n.span,f=void 0===p?1:p,m=Object(C.g)(e,"label"),g=Object(C.l)(e),h=Object(C.f)(e),v=Object(C.m)(e),O=e.key;return"string"==typeof c?Object(o.createVNode)(q,{key:"".concat(s,"-").concat(O||t),class:h,style:v,span:f,colon:r,component:c,itemPrefixCls:b,bordered:i,label:l?m:null,content:u?g:null},null):[Object(o.createVNode)(q,{key:"label-".concat(O||t),class:h,style:v,span:1,colon:r,component:c[0],itemPrefixCls:b,bordered:i,label:m},null),Object(o.createVNode)(q,{key:"content-".concat(O||t),class:h,style:v,span:2*f-1,component:c[1],itemPrefixCls:b,bordered:i,content:g},null)]}))},n=e.prefixCls,r=e.vertical,a=e.row,i=e.index,c=e.bordered;return r?Object(o.createVNode)(o.Fragment,null,[Object(o.createVNode)("tr",{key:"label-".concat(i),class:"".concat(n,"-row")},[t(a,e,{component:"th",type:"label",showLabel:!0})]),Object(o.createVNode)("tr",{key:"content-".concat(i),class:"".concat(n,"-row")},[t(a,e,{component:"td",type:"content",showContent:!0})])]):Object(o.createVNode)("tr",{key:i,class:"".concat(n,"-row")},[t(a,e,{component:c?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0})])};function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}b.a.string,b.a.any,b.a.number;var E=Object(o.defineComponent)({name:"ADescriptionsItem",props:{prefixCls:b.a.string,label:b.a.VNodeChild,span:b.a.number.def(1)},render:function(){return null}}),F={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function W(e,t,n){var o=e;return(void 0===t||t>n)&&(o=Object(g.a)(e,{span:n}),Object(I.a)(void 0===t,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),o}var H={prefixCls:b.a.string,bordered:b.a.looseBool,size:b.a.oneOf(Object(y.a)("default","middle","small")).def("default"),title:b.a.VNodeChild,extra:b.a.VNodeChild,column:{type:[Number,Object],default:function(){return F}},layout:b.a.oneOf(Object(y.a)("horizontal","vertical")),colon:b.a.looseBool},Y=Object(o.defineComponent)({name:"ADescriptions",Item:E,setup:function(e,t){var n,r=t.slots,a=Object(o.inject)("configProvider",h.b).getPrefixCls,i=Object(o.ref)({});return Object(o.onMounted)((function(){n=M.a.subscribe((function(t){"object"===Z(e.column)&&(i.value=t)}))})),Object(o.onBeforeUnmount)((function(){M.a.unsubscribe(n)})),function(){var t,n,c,s,l=e.prefixCls,u=e.column,d=e.size,b=e.bordered,p=void 0!==b&&b,f=e.layout,m=void 0===f?"horizontal":f,g=e.colon,h=void 0===g||g,v=e.title,O=void 0===v?null===(n=r.title)||void 0===n?void 0:n.call(r):v,w=e.extra,j=void 0===w?null===(c=r.extra)||void 0===c?void 0:c.call(r):w,y=a("descriptions",l),N=function(e,t){if("number"==typeof e)return e;if("object"===Z(e))for(var n=0;n<M.b.length;n++){var o=M.b[n];if(t[o]&&void 0!==e[o])return e[o]||F[o]}return 3}(u,i.value),x=function(e,t){var n=Object(C.b)(e),o=[],r=[],a=t;return n.forEach((function(e,i){var c,s=null===(c=e.props)||void 0===c?void 0:c.span,l=s||1;if(i===n.length-1)return r.push(W(e,s,a)),void o.push(r);l<a?(a-=l,r.push(e)):(r.push(W(e,l,a)),o.push(r),a=t,r=[])})),o}(null===(s=r.default)||void 0===s?void 0:s.call(r),N);return Object(o.createVNode)("div",{class:[y,(t={},L(t,"".concat(y,"-").concat(d),"default"!==d),L(t,"".concat(y,"-bordered"),!!p),t)]},[(O||j)&&Object(o.createVNode)("div",{class:"".concat(y,"-header")},[Object(o.createVNode)("div",{class:"".concat(y,"-title")},[O]),Object(o.createVNode)("div",{class:"".concat(y,"-extra")},[j])]),Object(o.createVNode)("div",{class:"".concat(y,"-view")},[Object(o.createVNode)("table",null,[Object(o.createVNode)("tbody",null,[x.map((function(e,t){return Object(o.createVNode)(z,{key:t,index:t,colon:h,prefixCls:y,vertical:"vertical"===m,bordered:p,row:e},null)}))])])])])}}});Y.props=H,Y.install=function(e){return e.component(Y.name,Y),e.component(Y.Item.name,Y.Item),e};var J,U=Y,G=n("f014"),K=n("ba98"),Q=n("8c5e"),R=n("8f4c"),X=(n("4ec9"),n("d3b7"),n("ac1f"),n("25f0"),n("3ca3"),n("466d"),n("5319"),n("ddb0"),n("3835")),ee=n("a4ee"),te=n("a9d9"),ne=Object(o.defineComponent)({name:"welcome",components:(J={HuaweiCharge:R.a},Object(d.a)(J,B.name,B),Object(d.a)(J,U.name,U),Object(d.a)(J,U.Item.name,U.Item),Object(d.a)(J,"SettingOutlined",G.a),Object(d.a)(J,"EditOutlined",K.a),Object(d.a)(J,"EllipsisOutlined",Q.a),J),setup:function(){var e=Object(te.a)().online,t=Object(ee.a)(),n=t.battery,r=t.batteryStatus,a=t.calcDischargingTime,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",t=navigator.userAgent.toLowerCase(),n=function(e){return e.test(t)},o=function(e){var n;return null===(n=t.match(e))||void 0===n?void 0:n.toString().replace(/[^0-9|_.]/g,"").replace(/_/g,".")},r=new Map([[n(/windows|win32|win64|wow32|wow64/g),"windows"],[n(/macintosh|macintel/g),"macos"],[n(/x11/g),"linux"],[n(/android|adr/g),"android"],[n(/ios|iphone|ipad|ipod|iwatch/g),"ios"]]).get(!0)||"unknow",a=new Map([["windows",new Map([[n(/windows nt 5.0|windows 2000/g),"2000"],[n(/windows nt 5.1|windows xp/g),"xp"],[n(/windows nt 5.2|windows 2003/g),"2003"],[n(/windows nt 6.0|windows vista/g),"vista"],[n(/windows nt 6.1|windows 7/g),"7"],[n(/windows nt 6.2|windows 8/g),"8"],[n(/windows nt 6.3|windows 8.1/g),"8.1"],[n(/windows nt 10.0|windows 10/g),"10"]]).get(!0)],["macos",o(/os x [\d._]+/g)],["android",o(/android [\d._]+/g)],["ios",o(/os [\d._]+/g)]]).get(r)||"unknow",i="unknow";"windows"===r||"macos"===r||"linux"===r?i="desktop":("android"===r||"ios"===r||n(/mobile/g))&&(i="mobile");var c=new Map([[n(/applewebkit/g),["webkit",new Map([[n(/safari/g),"safari"],[n(/chrome/g),"chrome"],[n(/opr/g),"opera"],[n(/edge/g),"edge"]]).get(!0)]||!1],[n(/gecko/g)&&n(/firefox/g),["gecko","firefox"]],[n(/presto/g),["presto","opera"]],[n(/trident|compatible|msie/g),["trident","iexplore"]]]).get(!0)||["unknow","unknow"],s=Object(X.a)(c,2),l=s[0],u=void 0===l?"unknow":l,d=s[1],b=void 0===d?"unknow":d,p=new Map([["webkit",o(/applewebkit\/[\d._]+/g)],["gecko",o(/gecko\/[\d._]+/g)],["presto",o(/presto\/[\d._]+/g)],["trident",o(/trident\/[\d._]+/g)]]).get(u)||"unknow",f=new Map([["firefox",o(/firefox\/[\d._]+/g)],["opera",o(/opr\/[\d._]+/g)],["iexplore",o(/(msie [\d._]+)|(rv:[\d._]+)/g)],["edge",o(/edge\/[\d._]+/g)],["safari",o(/version\/[\d._]+/g)],["chrome",o(/chrome\/[\d._]+/g)]]).get(b)||"unknow",m=new Map([[n(/micromessenger/g),["wechat",o(/micromessenger\/[\d._]+/g)]],[n(/qqbrowser/g),["qq",o(/qqbrowser\/[\d._]+/g)]],[n(/ucbrowser/g),["uc",o(/ucbrowser\/[\d._]+/g)]],[n(/qihu 360se/g),["360","unknow"]],[n(/2345explorer/g),["2345",o(/2345explorer\/[\d._]+/g)]],[n(/metasr/g),["sougou","unknow"]],[n(/lbbrowser/g),["liebao","unknow"]],[n(/maxthon/g),["maxthon",o(/maxthon\/[\d._]+/g)]]]).get(!0)||["none","unknow"],g=Object(X.a)(m,2),h=g[0],v=void 0===h?"none":h,O=g[1],w=void 0===O?"unknow":O;return{"zh-cn":Object.assign({"内核":u,"内核版本":p,"平台":i,"载体":b,"载体版本":f,"系统":r,"系统版本":a},"none"===v?{}:{"外壳":v,"外壳版本":w}),en:Object.assign({engine:u,engineVs:p,platform:i,supporter:b,supporterVs:f,system:r,systemVs:a},"none"===v?{}:{shell:v,shellVs:w})}[e]}("zh-cn");return Object(o.watchEffect)((function(){Object.assign(i,{"距离电池充满需要":Number.isFinite(n.value.chargingTime)&&0!=n.value.chargingTime?a.value:"未知","剩余可使用时间":Number.isFinite(n.value.dischargingTime)&&0!=n.value.dischargingTime?a.value:"未知","电池状态":r.value,"当前电量":n.value.level+"%"})})),{browserInfo:i,online:e,battery:n,batteryStatus:r,calcDischargingTime:a}}});n("02da"),ne.render=u,ne.__scopeId="data-v-748b0942",t.default=ne}}]);