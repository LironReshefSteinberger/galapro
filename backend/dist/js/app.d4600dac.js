(function(e){function t(t){for(var n,a,c=t[0],i=t[1],u=t[2],h=0,f=[];h<c.length;h++)a=c[h],o[a]&&f.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},s=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2856:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("router-view")],1)},s=[],a=(r("5c0b"),r("2877")),c={},i=Object(a["a"])(c,o,s,!1,null,null,null);i.options.__file="App.vue";var u=i.exports,l=r("8c4f"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h2",[e._v(" this is home page")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.setUrl(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchBy.url,expression:"searchBy.url"}],attrs:{type:"text",placeholder:"Enter an URL",autofocus:""},domProps:{value:e.searchBy.url},on:{input:function(t){t.target.composing||e.$set(e.searchBy,"url",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchBy.isChecked,expression:"searchBy.isChecked"}],attrs:{type:"checkbox",checked:""},domProps:{checked:Array.isArray(e.searchBy.isChecked)?e._i(e.searchBy.isChecked,null)>-1:e.searchBy.isChecked},on:{change:[function(t){var r=e.searchBy.isChecked,n=t.target,o=!!n.checked;if(Array.isArray(r)){var s=null,a=e._i(r,s);n.checked?a<0&&e.$set(e.searchBy,"isChecked",r.concat([s])):a>-1&&e.$set(e.searchBy,"isChecked",r.slice(0,a).concat(r.slice(a+1)))}else e.$set(e.searchBy,"isChecked",o)},e.setUrl]}}),r("button",{attrs:{type:"primary"},on:{click:e.setUrl}},[e._v("Submit")])]),e.msg?r("h2",[e._v(e._s(e.msg))]):e._e(),e.url?r("h2",[e._v(e._s(e.url))]):e._e()])},f=[],p=r("f7fe"),d=r.n(p),m={name:"home",components:{},data:function(){return{searchBy:{url:"",isChecked:!0}}},methods:{setUrl:d()(function(){this.searchBy.url=this.searchBy.url.toLowerCase();var e=JSON.parse(JSON.stringify(this.searchBy));console.log("var searchBy",e),this.$store.dispatch({type:"searchBy",searchBy:e}).then(function(e){})},2e3),redirectUrl:function(e){console.log("redirectUrl-"),this.$router.push(e)}},computed:{url:function(){return console.log("gamesForBabyHomeDisplay in home-"),this.$store.getters.setUrl},msg:function(){return console.log("gamesForBassssssbyHomeDisplay in home-"),this.$store.getters.setMsg}}},v=m,g=Object(a["a"])(v,h,f,!1,null,null,null);g.options.__file="Home.vue";var y=g.exports,b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("This is an about page")])])}],k={},B=Object(a["a"])(k,b,_,!1,null,null,null);B.options.__file="About.vue";var w=B.exports;n["a"].use(l["a"]);var C=new l["a"]({routes:[{path:"/",name:"home",component:y},{path:"/about",name:"about",component:w},{path:"/a",redirect:"http://www.mytargeturl.org"}]}),O=r("2f62"),j=r("bc3a"),x=r.n(j),S="/url";function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{url:"",isChecked:isChecked};console.log("criteria in query",e);var t="?url=".concat(e.url,"&isChecked=").concat(e.isChecked);return x.a.get(S+t).then(function(e){return console.log("url back from server",e.data),e.data})}var U={query:$};n["a"].use(O["a"]);var A=new O["a"].Store({state:{url:null,msg:null,searchBy:{url:"",isChecked:!0}},mutations:{setUrl:function(e,t){var r=t.url;console.log("mutation state.url",r),e.url=r,console.log("mutation setUrl state.url",e.url)},setSearch:function(e,t){var r=t.searchBy;console.log("mutation setSearch",r),e.searchBy=r,console.log("mutation setSearch state.searchBy",e.searchBy)},setMsg:function(e,t){var r=t.msg;console.log("mutation state.msg",r),e.msg=r,console.log("mutation setMsg state.msg",e.msg)}},getters:{setUrl:function(e){return console.log("ddddddd"),e.url},setMsg:function(e){return console.log("setMsg",e.msg),e.msg}},actions:{searchBy:function(e,t){var r=t.searchBy;return e.commit({type:"setSearch",searchBy:r}),U.query(r).then(function(t){if(t.url){var r=t.url;e.commit({type:"setUrl",url:r})}else if(t.msg){var n=t.msg;e.commit({type:"setMsg",msg:n})}}).finally(function(){})}}}),M=r("9483");Object(M["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n["a"].config.productionTip=!1,new n["a"]({router:C,store:A,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("2856"),o=r.n(n);o.a}});
//# sourceMappingURL=app.d4600dac.js.map