(function(e){function t(t){for(var r,o,u=t[0],s=t[1],i=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-6c4a4a77":"53eec546","chunk-33766b60":"624215ae","chunk-4d736245":"990a0082"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-6c4a4a77":1,"chunk-33766b60":1,"chunk-4d736245":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-6c4a4a77":"7ccf2660","chunk-33766b60":"96a32202","chunk-4d736245":"8689fec2"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],l=i.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/TheF2E-Hotel/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("router-view"),n("Snackbar")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-snackbar",{attrs:{color:e.color,text:"",timeout:"3000"},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[n("v-btn",e._b({attrs:{text:""},on:{click:function(t){e.show=!1}}},"v-btn",r,!1),[e._v(" Close ")])]}}]),model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[e._v(" "+e._s(e.message)+" ")])},u=[],s={name:"Snackbar",data:function(){return{show:!1,message:"",color:""}},created:function(){var e=this;this.$store.subscribe((function(t,n){"snackbar/showMessage"===t.type&&(e.message=n.snackbar.content,e.color=n.snackbar.color,e.show=!0)}))}},i=s,l=n("2877"),f=n("6544"),d=n.n(f),h=n("8336"),p=n("2db4"),m=Object(l["a"])(i,c,u,!1,null,"55896a3c",null),b=m.exports;d()(m,{VBtn:h["a"],VSnackbar:p["a"]});var v={components:{Snackbar:b}},g=v,w=(n("5c0b"),n("7496")),y=Object(l["a"])(g,o,a,!1,null,null,null),k=y.exports;d()(y,{VApp:w["a"]});n("d3b7"),n("3ca3"),n("ddb0");var O=n("8c4f");r["a"].use(O["a"]);var j=function(){return function(e){return Object.assign({},e.params,e.query)}},E=[{path:"*",redirect:"/"},{path:"/",name:"Index",component:function(){return Promise.all([n.e("chunk-6c4a4a77"),n.e("chunk-4d736245")]).then(n.bind(null,"d504"))}},{path:"/reservation",name:"Reservation",props:j(),component:function(){return Promise.all([n.e("chunk-6c4a4a77"),n.e("chunk-33766b60")]).then(n.bind(null,"2b83"))}}],_=new O["a"]({mode:"history",base:"/TheF2E-Hotel/",routes:E});_.afterEach((function(){window.scrollTo(0,0)}));var x=_,P=n("2f62"),S={namespaced:!0,state:{content:"",color:""},mutations:{showMessage:function(e,t){e.content=t.content,e.color=t.color}}};r["a"].use(P["a"]);var M=new P["a"].Store({modules:{snackbar:S}}),T=n("f309");r["a"].use(T["a"]);var A=new T["a"]({theme:{themes:{light:{primary:"#496146",secondary:"#E3EAE2",error:"#C65021"}}}}),C=(n("159b"),n("b0c0"),n("91c3")),L=function e(t){e.installed||(e.installed=!0,C.keys().forEach((function(e){var n=C(e),r=n.default||n;Object.defineProperty(t.prototype,"$".concat(r.name),{get:function(){return r}})})))},V=L,N=n("4c93"),R=n("7bb1"),G=n("60d4"),U={install:function(e,t){var n=t.store;if(!n)throw new Error("Please provide vuex store.");e.prototype.$snackbar={showMessage:function(e){var t=e.content,r=void 0===t?"":t,o=e.color,a=void 0===o?"":o;n.commit("snackbar/showMessage",{content:r,color:a},{root:!0})},error:function(e){n.commit("snackbar/showMessage",{content:e,color:"error"},{root:!0})},warning:function(e){n.commit("snackbar/showMessage",{content:e,color:"warning"},{root:!0})},info:function(e){n.commit("snackbar/showMessage",{content:e,color:"primary"},{root:!0})}}}},$=U;Object(R["e"])("eager"),Object(R["c"])("required",N["e"]),Object(R["c"])("digits",N["a"]),Object(R["c"])("max",N["b"]),Object(R["c"])("min",N["c"]),Object(R["c"])("regex",N["d"]),Object(R["d"])("zh_TW",G),r["a"].component("ValidationProvider",R["b"]),r["a"].component("ValidationObserver",R["a"]),r["a"].use(V),r["a"].use($,{store:M}),r["a"].config.productionTip=!1,new r["a"]({router:x,store:M,vuetify:A,render:function(e){return e(k)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"91c3":function(e,t,n){var r={"./room.js":"ce41"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="91c3"},"9c0c":function(e,t,n){},ce41:function(e,t,n){"use strict";n.r(t),n.d(t,"GetRooms",(function(){return s})),n.d(t,"GetRoom",(function(){return i})),n.d(t,"PostRoom",(function(){return l}));n("d3b7");var r=n("bc3a"),o=n.n(r);function a(e){return new Promise((function(t,n){var r=o.a.create({headers:{Accept:"application/json",Authorization:"Bearer HMUCvgjAVLxEmkUVN4mrwkiSXMalQyUxVc5umVG8TJAXxw3GazyzLd19XaGn"},baseURL:"https://challenge.thef2e.com/api/thef2e2019/stage6"});r(e).then((function(e){return t(e),!1})).catch((function(e){n(e)}))}))}function c(e,t){return a({url:e,params:t,method:"get"})}function u(e,t,n){return a({url:e,params:t,data:n,method:"post"})}var s=function(e,t){return c("/rooms").then(e).catch(t)},i=function(e,t,n){return c("/room/".concat(e)).then(t).catch(n)},l=function(e,t,n,r){return u("/room/".concat(e),t).then(n).catch(r)};t["default"]={name:"roomApi",GetRooms:s,GetRoom:i,PostRoom:l}}});
//# sourceMappingURL=app.45979bd7.js.map