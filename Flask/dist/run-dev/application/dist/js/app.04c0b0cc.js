(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)o=s[u],r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function s(t){return l.p+"js/"+({model:"model"}[t]||t)+"."+{model:"e6990723"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={model:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var a="css/"+({model:"model"}[t]||t)+"."+{model:"e5cc8587"}[t]+".css",o=l.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var s=r[i],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===a||c===o))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){s=u[i],c=s.getAttribute("data-href");if(c===a||c===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.request=a,n(r)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[t]=0}));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=i);var c,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(t),c=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[t]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,u.appendChild(d)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0375":function(t,e,n){},"05c6":function(t,e,n){"use strict";var a=n("934d"),o=n.n(a);o.a},"081b":function(t,e,n){"use strict";var a=n("822b"),o=n.n(a);o.a},1:function(t,e){},"13d0":function(t,e,n){"use strict";var a=n("0375"),o=n.n(a);o.a},"13d9":function(t,e,n){},"49b0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("TopNavBar",{staticClass:"topnav"}),n("SideNavBar",{staticClass:"sidenav"}),n("router-view",{staticClass:"main"}),n("ModelFooter",{staticClass:"footer"})],1)])},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Inputs")]),t._l(t.links,function(e){return n("router-link",{key:e.id,staticClass:"myButton",attrs:{to:""+e.page}},[n("span",[n("font-awesome-icon",{staticClass:"fa-icon",attrs:{icon:e.icon}}),t._v("\n            "+t._s(e.text)+"\n        ")],1)])})],2)},s=[],l={name:"SideNavBar",data:function(){return{links:[{id:0,text:"Model",page:"/model",storage_key:"model",icon:"plane-departure"},{id:1,text:"Load Upload",page:"/data_load",storage_key:"load_data",icon:"table"},{id:2,text:"Solar Upload",page:"/data_solar",storage_key:"data_solar",icon:"table"},{id:3,text:"Participants",page:"/participants",storage_key:"participants",icon:"user"},{id:4,text:"Tariffs",page:"/tariffs",storage_key:"tariffs",icon:"exchange-alt"},{id:5,text:"Central Solar",page:"/central_solar",storage_key:"central_solar",icon:"solar-panel"},{id:6,text:"Central Battery",page:"/central_battery",storage_key:"central_battery",icon:"battery-full"},{id:7,text:"Financing",page:"/financing",storage_key:"financing",icon:"money-check-alt"},{id:8,text:"Review",page:"review",storage_key:"review",icon:"search"},{id:9,text:"Results",page:"results",storage_key:"review",icon:"poll"}]}},methods:{}},c=l,u=(n("081b"),n("2877")),d=Object(u["a"])(c,i,s,!1,null,"1e37516b",null);d.options.__file="SideNavBar.vue";var p=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-nav"},[n("div",{staticClass:"logo"},[n("font-awesome-icon",{staticClass:"fa-icon",attrs:{icon:"network-wired"}})],1),n("div",{staticClass:"sim-title"},[t._v("\n            Energy Sharing Sim\n        ")]),n("div",{staticClass:"sponsor-title"},[t._v("\n\n            UNSW Center for Energy and Environmental Markets\n        ")])])},m=[],v={name:"TopNavBar",data:function(){return{links:[]}}},h=v,_=(n("13d0"),Object(u["a"])(h,f,m,!1,null,null,null));_.options.__file="TopNavBar.vue";var g=_.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.sleeping?t._e():n("div",{staticClass:"status"},[t._v(" Status: "+t._s(t.status))])])},y=[],w={name:"ModelFooter",data:function(){return{is_connected:!1,sleeping:!0,status:""}},sockets:{status_channel:function(t){this.is_connected=!0,this.sleeping=!1,this.status=t.data.message}},computed:{completed_pages:{get:function(){return this.$store.state.frontend_state.completed_pages}},total_pages:{get:function(){return this.$store.state.frontend_state.total_pages}}},methods:{}},C=w,k=(n("05c6"),Object(u["a"])(C,b,y,!1,null,"4592d904",null));k.options.__file="ModelFooter.vue";var x=k.exports,E={name:"app",components:{ModelFooter:x,SideNavBar:p,TopNavBar:g},data:function(){return{}}},S=E,j=(n("7c55"),Object(u["a"])(S,o,r,!1,null,null,null));j.options.__file="App.vue";var O=j.exports,$=n("8c4f"),B=(n("a1d1"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",[t._v("Contact Us")]),n("p",[n("ul",{staticClass:"noBullets"},[n("li",[t._v("Email: "+t._s(t.email))]),n("li",[t._v("Website: "+t._s(t.web))])])])])}),T=[],N={name:"Contact",data:function(){return{email:"dave@example.com",web:"example@example.com"}}},P=N,M=(n("e40a"),Object(u["a"])(P,B,T,!1,null,"28a71c83",null));M.options.__file="Contact.vue";var A=M.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Local Energy Sharing Simulator")]),n("p",[t._v("Click 'Model' on the left to get started. ")]),n("modal",{attrs:{height:"80%",width:"80%",name:"hello-world"}},[n("div",{staticClass:"modal-content"},[n("h1",[t._v("Local Energy Sharing Simulator")]),n("div",{staticClass:"logos"},[n("img",{staticClass:"logo",attrs:{src:"/images/ceem-logo.png"}}),n("img",{staticClass:"logo",attrs:{src:"/images/crc-logo.png"}}),n("img",{staticClass:"logo",attrs:{src:"/images/unsw-logo.jpg"}})]),n("div",{staticClass:"get-started-button",on:{click:t.hide}},[t._v("Get Started")])])])],1)},I=[],L={name:"Home",methods:{show:function(){this.$modal.show("hello-world")},hide:function(){this.$modal.hide("hello-world")}},mounted:function(){this.$modal.show("hello-world")}},U=L,H=(n("89f1"),Object(u["a"])(U,F,I,!1,null,null,null));H.options.__file="Home.vue";var W=H.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input"},[n("h1",[t._v("This is the Inputs Page")])])}],R={},G=Object(u["a"])(R,q,J,!1,null,null,null);G.options.__file="Inputs.vue";var z=G.exports;a["a"].use($["a"]);var D=new $["a"]({routes:[{path:"/",name:"home",component:W},{path:"/about",name:"about",component:function(){return Promise.resolve().then(n.bind(null,"a1d1"))}},{path:"/contact",name:"contact",component:A},{path:"/data_load",name:"data_load",component:function(){return n.e("model").then(n.bind(null,"b237"))}},{path:"/data_solar",name:"data_solar",component:function(){return n.e("model").then(n.bind(null,"173b"))}},{path:"/inputs",name:"inputs",component:z},{path:"/model",name:"model",component:function(){return n.e("model").then(n.bind(null,"1d3c"))}},{path:"/central_battery",name:"central_battery",component:function(){return n.e("model").then(n.bind(null,"811d"))}},{path:"/central_solar",name:"central_solar",component:function(){return n.e("model").then(n.bind(null,"9318"))}},{path:"/financing",name:"financing",component:function(){return n.e("model").then(n.bind(null,"057a"))}},{path:"/participants",name:"participants",component:function(){return n.e("model").then(n.bind(null,"7f03"))}},{path:"/review",name:"review",component:function(){return n.e("model").then(n.bind(null,"5a24"))}},{path:"/results",name:"results",component:function(){return n.e("model").then(n.bind(null,"f587"))}},{path:"/tariffs",name:"tariffs",component:function(){return n.e("model").then(n.bind(null,"9a5b"))}}]}),K=n("2f62");a["a"].use(K["a"]);var Q={state:{},mutations:{save_server_page:function(t,e){t[e.model_page_name]=e.data}}},V={state:{},mutations:{save_page:function(t,e){t[e.model_page_name]=e.data}}},X={state:{},mutations:{save_page:function(t,e){t[e.chart_name]=e.data}}},Y=new K["a"].Store({strict:!0,modules:{chart_data:X,frontend_state:V,model_parameters:Q},state:{},getters:{},mutations:{}}),Z=n("1dce"),tt=n.n(Z),et=n("8055"),nt=n.n(et),at=n("0a12"),ot=n.n(at),rt=n("1881"),it=n.n(rt),st=n("ecee"),lt=n("c074"),ct=n("ad3d");n.d(e,"SocketInstance",function(){return ut}),a["a"].use(tt.a);var ut=nt()("http://0.0.0.0:5000/");ut.on("connect",function(){console.log("Websockets Connected")}),a["a"].use(ot.a,ut),a["a"].use(it.a),st["c"].add(lt["b"]),st["c"].add(lt["j"]),st["c"].add(lt["e"]),st["c"].add(lt["f"]),st["c"].add(lt["k"]),st["c"].add(lt["l"]),st["c"].add(lt["c"]),st["c"].add(lt["i"]),st["c"].add(lt["a"]),st["c"].add(lt["d"]),st["c"].add(lt["h"]),st["c"].add(lt["g"]),a["a"].component("font-awesome-icon",ct["a"]),a["a"].config.productionTip=!1,new a["a"]({store:Y,router:D,render:function(t){return t(O)}}).$mount("#app")},"7c55":function(t,e,n){"use strict";var a=n("d3dd"),o=n.n(a);o.a},"822b":function(t,e,n){},"88d0":function(t,e,n){"use strict";var a=n("9c31"),o=n.n(a);o.a},"89f1":function(t,e,n){"use strict";var a=n("13d9"),o=n.n(a);o.a},"934d":function(t,e,n){},"9c31":function(t,e,n){},a1d1:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("About")]),n("p",[t._v("Here is some About Info.")])])}],r={name:"About"},i=r,s=(n("88d0"),n("2877")),l=Object(s["a"])(i,a,o,!1,null,null,null);l.options.__file="About.vue";e["default"]=l.exports},d3dd:function(t,e,n){},e40a:function(t,e,n){"use strict";var a=n("49b0"),o=n.n(a);o.a}});
//# sourceMappingURL=app.04c0b0cc.js.map