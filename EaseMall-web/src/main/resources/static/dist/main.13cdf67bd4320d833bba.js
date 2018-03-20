webpackJsonp([7],{141:function(t,e,n){"use strict";var o=n(173);e.a={components:{Navbar:o.a},data:function(){return{}},mounted:function(){console.log("app mounted")}}},142:function(t,e,n){"use strict";n(143);e.a={data:function(){return{theme:"dark"}},methods:{onSelect:function(t){"home"===t?this.$goHome():"logout"===t?this.logout():"shopcart"===t?this.$router.push({name:"cart"}):"accounting"===t?this.$router.push({name:"account"}):"login"===t?this.$router.push({name:"login",query:{redirectUrl:window.location.href}}):"publish"===t&&this.$router.push({name:"publish"})},logout:function(){this.$http.get("/logout").then(function(t){window.location.reload()})}},mounted:function(){console.log("navbar mounted")}}},143:function(t,e,n){"use strict";var o=n(2);new o.default},147:function(t,e,n){"use strict";function o(t,e){var n;try{n=new Blob([t],{type:e})}catch(a){if(window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,"TypeError"==a.name&&window.BlobBuilder){var o=new BlobBuilder;o.append(t),n=o.getBlob(e)}else{if("InvalidStateError"!=a.name)throw new Error("Your browser does not support Blob & BlobBuilder!");n=new Blob([t],{type:e})}}return n}var a=n(9),r=n.n(a),i=n(169),s={};s.title=function(t){t=t||"Netease Mall",window.document.title=t};"development"===i.a||i.a;s.ajax=r.a.create({baseURL:"/api",timeout:3e4}),s.getBase64Image=function(t){var e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d").drawImage(t,0,0),e.toDataURL("image/png",.5)},s.dataURL2Blob=function(t){var e,n,a,r,i,s;for(s=t.split(","),s[1]=s[1].replace(/\s/g,""),e=~s[0].indexOf("base64")?atob(s[1]):decodeURIComponent(s[1]),a=new ArrayBuffer(e.length),n=new Uint8Array(a),r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return i=s[0].split(":")[1].split(";")[0],new o(a,i)},s.dataURItoBlob=function(t){var e;e=t.split(",")[0].indexOf("base64")>=0?atob(t.split(",")[1]):unescape(t.split(",")[1]);for(var n=t.split(",")[0].split(":")[1].split(";")[0],o=new Uint8Array(e.length),a=0;a<e.length;a++)o[a]=e.charCodeAt(a);return new Blob([o],{type:n})},e.a=s},149:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=n(10),r=n(11),i=n(12),s=n.n(i),u=n(8),l=n.n(u),c=n(13),p=n.n(c),d=n(151),f=n(147),m=n(171),h=n(177);n.n(h);o.default.use(a.a),o.default.use(s.a),o.default.use(r.a),o.default.use(p.a,{attempt:4,lazyComponent:!0}),o.default.prototype.$util=f.a,o.default.prototype.$http=f.a.ajax,o.default.prototype.$isLogin=function(){return void 0!=l.a.get("ES_token")},o.default.prototype.$eraseLogin=function(){l.a.remove("ES_token"),b.state.islogin=!1,b.state.username=null,b.state.userId=null,b.state.isbuyer=!1,b.state.isseller=!1},o.default.prototype.$goHome=function(){"home"===g.currentRoute.name?location.reload():g.push({name:"home"})},o.default.prototype.$confirm_login=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e="";e=o.default.prototype.$isLogin()?"您还没有登陆，是否登陆商城？":"您的登录已经过期，是否重新登录商城？",s.a.Modal.confirm({title:e,content:"",onOk:function(){o.default.prototype.$eraseLogin(),g.push({name:"login",query:{redirectUrl:window.location.href}})},onCancel:function(){l.a.remove("ES_token"),b.state.islogin=!1,b.state.isbuyer=!1,b.state.isseller=!1,t&&o.default.prototype.$goHome()}})},o.default.prototype.$validate=function(t,e,n){var a=t.meta.privilege;o.default.prototype.$isLogin()?o.default.prototype.$http.get("/valid",{params:{__t:Date.parse(new Date)}}).then(function(t){b.state.islogin=!0,b.state.username=t.data.data.username,b.state.userId=t.data.data.userId,0===t.data.data.role?b.state.isbuyer=!0:1===t.data.data.role&&(b.state.isseller=!0),"buyer"===a?!0===b.state.isbuyer?n():o.default.prototype.$goHome():"seller"===a?!0===b.state.isseller?n():o.default.prototype.$goHome():n()}).catch(function(){o.default.prototype.$eraseLogin()}):void 0!=a?o.default.prototype.$goHome():n()};var v={mode:"history",routes:d.a},g=new a.a(v);g.beforeEach(function(t,e,n){s.a.LoadingBar.start(),f.a.title(t.meta.title),null===e.name?o.default.prototype.$validate(t,e,n):n()}),g.afterEach(function(){s.a.LoadingBar.finish(),window.scrollTo(0,0)}),f.a.ajax.interceptors.response.use(function(t){return t},function(t){return 401===t.response.status?setTimeout(function(){o.default.prototype.$confirm_login()},450):s.a.Modal.error({title:"服务器错误",content:'请求"'+t.config.url+'"错误！\n'+t.response.data.msg}),Promise.reject(t)});var b=new r.a.Store({state:{islogin:!1,userId:null,username:null,isbuyer:!1,isseller:!1},getters:{},mutations:{},actions:{}});o.default.prototype.$store1=b,new o.default({el:"#app",router:g,store:b,render:function(t){return t(m.a)}})},151:function(t,e,n){"use strict";var o=[{name:"home",path:"/",meta:{title:"home"},component:function(t){return n.e(3).then(function(){var e=[n(179)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{name:"goods",path:"/goods/:goodsId",meta:{title:"商品信息"},component:function(t){return n.e(0).then(function(){var e=[n(146)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{name:"snap_goods",path:"/snapshot/:snapId",meta:{title:"交易快照",privilege:"buyer"},component:function(t){return n.e(0).then(function(){var e=[n(146)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{name:"login",path:"/login",meta:{title:"用户登录"},component:function(t){return n.e(2).then(function(){var e=[n(180)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{name:"cart",path:"/cart",meta:{title:"购物车",privilege:"buyer"},component:function(t){return n.e(4).then(function(){var e=[n(181)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{name:"account",path:"/account",meta:{title:"账务",privilege:"buyer"},component:function(t){return n.e(5).then(function(){var e=[n(182)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{name:"404",path:"*",meta:{title:"404"},component:function(t){return n.e(6).then(function(){var e=[n(183)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{name:"publish",path:"/publish",meta:{title:"发布",privilege:"seller"},children:[{name:"publish_edit",path:"eidt/:goodsId",meta:{title:"发布(编辑)",privilege:"seller"},component:function(t){return n.e(1).then(function(){var e=[n(148)];t.apply(null,e)}.bind(this)).catch(n.oe)}}],component:function(t){return n.e(1).then(function(){var e=[n(148)];t.apply(null,e)}.bind(this)).catch(n.oe)}}];e.a=o},169:function(t,e,n){"use strict";e.a="production"},171:function(t,e,n){"use strict";function o(t){i||n(172)}var a=n(141),r=n(176),i=!1,s=n(4),u=o,l=s(a.a,r.a,!1,u,null,null);l.options.__file="src/app.vue",e.a=l.exports},172:function(t,e){},173:function(t,e,n){"use strict";function o(t){i||n(174)}var a=n(142),r=n(175),i=!1,s=n(4),u=o,l=s(a.a,r.a,!1,u,"data-v-4b074d53",null);l.options.__file="src/common/e-navbar.vue",e.a=l.exports},174:function(t,e){},175:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Menu",{attrs:{mode:"horizontal",theme:t.theme,"active-name":"home"},on:{"on-select":t.onSelect}},[n("MenuItem",{attrs:{name:"home"}},[t._v("首页")]),t._v(" "),this.$store.state.isbuyer?n("MenuItem",{attrs:{name:"accounting"}},[t._v("账务")]):t._e(),t._v(" "),this.$store.state.isbuyer?n("MenuItem",{attrs:{name:"shopcart"}},[t._v("购物车")]):t._e(),t._v(" "),this.$store.state.isseller?n("MenuItem",{attrs:{name:"publish"}},[t._v("发布")]):t._e(),t._v(" "),this.$store.state.islogin?n("Submenu",{staticClass:"ivu-menu-item user-bar",attrs:{name:"user"}},[n("template",{slot:"title"},[n("span",{domProps:{textContent:t._s(this.$store.state.username)}})]),t._v(" "),n("MenuItem",{attrs:{name:"logout"}},[t._v("登出")])],2):n("MenuItem",{staticClass:"ivu-menu-item user-bar",attrs:{name:"login"}},[t._v("登陆")])],1)],1)},a=[];o._withStripped=!0;var r={render:o,staticRenderFns:a};e.a=r},176:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._v(" "),n("router-view")],1)},a=[];o._withStripped=!0;var r={render:o,staticRenderFns:a};e.a=r},177:function(t,e){},4:function(t,e){t.exports=function(t,e,n,o,a,r){var i,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(i=t,s=t.default);var l="function"==typeof s?s.options:s;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId=a);var c;if(r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):o&&(c=o),c){var p=l.functional,d=p?l.render:l.beforeCreate;p?(l._injectStyles=c,l.render=function(t,e){return c.call(e),d(t,e)}):l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:i,exports:s,options:l}}}},[149]);