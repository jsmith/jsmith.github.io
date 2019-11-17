(function(t){function e(e){for(var n,a,o=e[0],c=e[1],l=e[2],p=0,f=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={app:0},r=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"0104":function(t,e,i){},"066c":function(t,e,i){"use strict";var n=i("a339"),s=i.n(n);s.a},2933:function(t,e,i){},"5c0b":function(t,e,i){"use strict";var n=i("9c0c"),s=i.n(n);s.a},"69e4":function(t,e,i){},9794:function(t,e,i){},"9c0c":function(t,e,i){},a339:function(t,e,i){},c6af:function(t,e,i){"use strict";var n=i("69e4"),s=i.n(n);s.a},cd49:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("stars"),i("div",{staticClass:"information"},[t._m(0),i("div",{staticClass:"sub-title"},[t._v("Software Engineering @ UNB")]),i("div",{staticClass:"icons",staticStyle:{"margin-top":"10px"}},[i("GithubIcon",{staticClass:"icon",attrs:{link:"https://github.com/jsmith"}}),i("Linkedin",{staticClass:"icon",attrs:{link:"https://linkedin.com/in/jacsmith21"}}),i("Twitter",{staticClass:"icon",attrs:{link:"https://twitter.com/jacobsmith_1"}})],1)]),i("Projects",{staticClass:"projects"})],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("div",{staticStyle:{display:"flex"}},[i("div",{staticClass:"title-text text-background"},[t._v("Jacob Smith")])]),i("div",{staticClass:"text-foreground",staticStyle:{display:"flex"}},[i("div",{staticClass:"title-text"},[t._v("Jacob Smith")])])])}],a=(i("b0c0"),i("9911"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"stars"}),i("div",{staticClass:"stars2"}),i("div",{staticClass:"stars3"})])}],c=i("750b"),l=Object(c["b"])({name:"Stars"}),u=l,p=(i("c6af"),i("ce04"),i("2877")),f=Object(p["a"])(u,a,o,!1,null,"0acfd366",null),d=f.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card container"},[i("div",{staticClass:"project-title"},[t._v(t._s(t.name))]),i("div",{staticClass:"tags"},[t._v(t._s(t.tagsFormatted))]),i("div",{staticClass:"description"},[t._v(t._s(t.description))]),i("div",{staticStyle:{flex:"1"}}),i("div",{staticClass:"links"},[i("a",{staticClass:"link",attrs:{href:t.link,target:"_blank"}},[t._v("Check it out!")]),i("a",{staticClass:"repo",attrs:{href:t.repo,target:"_blank"}},[t._v("Repo")])])])},v=[],m=(i("a15b"),i("ac1f"),i("1276"),Object(c["b"])({props:{name:{type:String,required:!0},tags:{type:String,required:!0},description:{type:String,required:!0},link:{type:String,required:!0},repo:{type:String,required:!0}},setup:function(t){return{tagsFormatted:Object(c["a"])((function(){return t.tags.split(",").join(", ")}))}}})),b=m,g=(i("e21f"),Object(p["a"])(b,h,v,!1,null,"64894c37",null)),_=g.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[t._l(t.projects,(function(e,n){return i("div",{key:n,staticClass:"card"},[i("div",{staticClass:"project-title"},[t._v(t._s(e.name))]),i("div",{staticClass:"tags"},[t._v(t._s(t._f("format")(e.tags)))]),i("div",{staticClass:"description"},[t._v(t._s(e.description))]),i("div",{staticStyle:{flex:"1"}}),i("div",{staticClass:"links"},[i("a",{staticClass:"link",attrs:{href:e.link,target:"_blank"}},[t._v("Check it out!")]),i("a",{staticClass:"repo",attrs:{href:e.repo,target:"_blank"}},[t._v("Repo")])])])})),i("div",{staticClass:"flex-end-spacer"})],2)},j=[],k=[{name:"Vusic",link:"https://dawg.dev",repo:"https://github.com/dawg/vusic",description:"A Digital Audio Workstation built using the web!",tags:"Typescript,Web Audio API,Electron,Vue"},{name:"Portfolio 2.0",link:"https://jacobsmith.me",repo:"https://github.com/jsmith/portfolio2.0",description:"My second portfolio site (the one you're looking at right now).",tags:"Typescript,Vue"},{name:"Portfolio 1.0",link:"https://jacobsmith.me/porfolio",repo:"https://github.com/jsmith/portfolio",description:"My first portfolio site, built to mimic a terminal.",tags:"Typescript,Vue"},{name:"Jacob's Text Magic",link:"https://jacobsmith.me/assembly",repo:"https://github.com/jsmith/assembly",description:"A simple online assembly language compiler with a debugger.",tags:"Typescript,Vue"},{name:"JML",link:"https://github.com/jsmith/jml",repo:"https://github.com/jsmith/jml",description:"A machine library (ID3, Naive Bayes, Random Forest K-Nearest Neighbors) built in pure Java.",tags:"Java,Machine Learning"}],C={name:"Projects",data:function(){return{projects:k}},filters:{format:function(t){return t.split(",").join(", ")}}},x=C,w=(i("066c"),Object(p["a"])(x,y,j,!1,null,"19efea6d",null)),S=w.exports,O=i("22f9"),P=i("d47d"),T=i("e792"),M=function(t){return n["a"].extend({name:t.name+"Link",props:{link:String},render:function(e){return e("a",{attrs:{target:"_blank",href:this.$props.link,style:"text-decoration: none; color: white"}},[e(t)])}})},E=n["a"].extend({name:"app",components:{Stars:d,GithubIcon:M(O["a"]),Linkedin:M(P["a"]),Twitter:M(T["a"]),Project:_,Projects:S},data:function(){return{projects:k}}}),J=E,$=(i("5c0b"),Object(p["a"])(J,s,r,!1,null,null,null)),A=$.exports;i("d48d"),i("0104");n["a"].config.productionTip=!1,n["a"].use(c["c"]),new n["a"]({render:function(t){return t(A)}}).$mount("#app")},ce04:function(t,e,i){"use strict";var n=i("9794"),s=i.n(n);s.a},e21f:function(t,e,i){"use strict";var n=i("2933"),s=i.n(n);s.a}});
//# sourceMappingURL=app.0e80fb0d.js.map