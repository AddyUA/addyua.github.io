(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38db11c0"],{"159b":function(t,e,a){var r=a("da84"),n=a("fdbc"),i=a("17c2"),o=a("9112");for(var s in n){var c=r[s],l=c&&c.prototype;if(l&&l.forEach!==i)try{o(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(t,e,a){"use strict";var r=a("b727").forEach,n=a("a640"),i=a("ae40"),o=n("forEach"),s=i("forEach");t.exports=o&&s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1ae4":function(t,e,a){t.exports=a.p+"img/logo.9ce59b36.svg"},"1dde":function(t,e,a){var r=a("d039"),n=a("b622"),i=a("2d00"),o=n("species");t.exports=function(t){return i>=51||!r((function(){var e=[],a=e.constructor={};return a[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"21bb":function(t,e,a){"use strict";var r=a("2dad"),n=a.n(r);n.a},"2dad":function(t,e,a){},4160:function(t,e,a){"use strict";var r=a("23e7"),n=a("17c2");r({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"65f0":function(t,e,a){var r=a("861d"),n=a("e8b5"),i=a("b622"),o=i("species");t.exports=function(t,e){var a;return n(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?r(a)&&(a=a[o],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},8418:function(t,e,a){"use strict";var r=a("c04e"),n=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var o=r(e);o in t?n.f(t,o,i(0,a)):t[o]=a}},"99af":function(t,e,a){"use strict";var r=a("23e7"),n=a("d039"),i=a("e8b5"),o=a("861d"),s=a("7b0b"),c=a("50c4"),l=a("8418"),u=a("65f0"),f=a("1dde"),d=a("b622"),m=a("2d00"),h=d("isConcatSpreadable"),v=9007199254740991,p="Maximum allowed index exceeded",b=m>=51||!n((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),_=f("concat"),g=function(t){if(!o(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},y=!b||!_;r({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,r,n,i,o=s(this),f=u(o,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?o:arguments[e],g(i)){if(n=c(i.length),d+n>v)throw TypeError(p);for(a=0;a<n;a++,d++)a in i&&l(f,d,i[a])}else{if(d>=v)throw TypeError(p);l(f,d++,i)}return f.length=d,f}})},"9c19":function(t,e,a){t.exports=a.p+"img/header-gamak.2c9f2da8.png"},a640:function(t,e,a){"use strict";var r=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&r((function(){a.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,a){var r=a("83ab"),n=a("d039"),i=a("5135"),o=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(i(s,t))return s[t];e||(e={});var a=[][t],l=!!i(e,"ACCESSORS")&&e.ACCESSORS,u=i(e,0)?e[0]:c,f=i(e,1)?e[1]:void 0;return s[t]=!!a&&!n((function(){if(l&&!r)return!0;var t={length:-1};l?o(t,1,{enumerable:!0,get:c}):t[1]=1,a.call(t,u,f)}))}},b727:function(t,e,a){var r=a("0366"),n=a("44ad"),i=a("7b0b"),o=a("50c4"),s=a("65f0"),c=[].push,l=function(t){var e=1==t,a=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f;return function(m,h,v,p){for(var b,_,g=i(m),y=n(g),E=r(h,v,3),x=o(y.length),S=0,C=p||s,L=e?C(m,x):a?C(m,0):void 0;x>S;S++)if((d||S in y)&&(b=y[S],_=E(b,S,g),t))if(e)L[S]=_;else if(_)switch(t){case 3:return!0;case 5:return b;case 6:return S;case 2:c.call(L,b)}else if(u)return!1;return f?-1:l||u?u:L}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},bb51:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Header"),a("Features"),a("Gallery"),a("Stories"),a("Book"),a("Footer")],1)},n=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{ref:"homeHeader",staticClass:"home-header",attrs:{id:"home"}},[r("video",{staticClass:"home-header__video",attrs:{autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[r("source",{attrs:{src:a("e103"),type:"video/mp4"}}),t._v(" Your browser is not supported! ")]),r("Navbar"),r("img",{staticClass:"home-header__chuk parallax",attrs:{"data-speed":"50",src:a("c9a8"),alt:"chuk"}}),r("img",{staticClass:"home-header__gamak parallax",attrs:{"data-speed":"120",src:a("9c19"),alt:"gamak"}}),r("div",{staticClass:"home-header__bag parallax",attrs:{"data-speed":"100"}},[r("div",{staticClass:"home-header__bag-btn",on:{click:function(e){t.isBag=!t.isBag}}}),t.isBag?r("div",{staticClass:"home-header__bag-content",on:{click:function(e){t.isBag=!t.isBag}}},[r("b",[t._v("Bag")]),t._v(" - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi doloribus, sunt voluptas voluptate ullam saepe corrupti labore quaerat quos voluptatum consequuntur quod magnam animi quibusdam maxime fugit amet porro. ")]):t._e()])],1)},o=[],s=(a("99af"),a("4160"),a("159b"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"home-navbar"},[r("a",{attrs:{href:"#"}},[r("img",{staticClass:"home-navbar__logo",attrs:{src:a("1ae4"),alt:"logo"}})]),r("ul",{staticClass:"home-navbar-list"},[r("li",{staticClass:"home-navbar-list-item"},[r("a",{attrs:{href:"#features"}},[t._v("Features ")])]),r("li",{staticClass:"home-navbar-list-item"},[r("a",{attrs:{href:"#gallery"}},[t._v("Gallery ")])]),r("li",{staticClass:"home-navbar-list-item"},[r("a",{attrs:{href:"#stories"}},[t._v("Stories ")])]),r("li",{staticClass:"home-navbar-list-item"},[r("a",{attrs:{href:"#book"}},[t._v("Book ")])])])])}],l={name:"Navbar",data:function(){return{forTest:!0}},mounted:function(){}},u=l,f=a("2877"),d=Object(f["a"])(u,s,c,!1,null,null,null),m=d.exports,h={name:"Header",data:function(){return{isBag:!1}},components:{Navbar:m},mounted:function(){this.$refs.homeHeader.addEventListener("mousemove",(function(t){this.querySelectorAll(".parallax").forEach((function(e){var a=e.getAttribute("data-speed");e.style.transform="translate(".concat(t.clientX*a/8e3,"px, ").concat(t.clientY*a/8e3,"px)")}))}))}},v=h,p=Object(f["a"])(v,i,o,!1,null,null,null),b=p.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{\n    active: true,\n    callback: onWaypoint,\n    options: intersectionOptions\n  }"}],ref:"homeFeatures",staticClass:"home-features",attrs:{id:"features"}},[t.isVisible?a("Navbar",{class:{nfixed:t.isVisible}}):t._e(),a("h1",[t._v("FEATURES")])],1)},g=[],y={name:"Features",data:function(){return{isVisible:!1,intersectionOptions:{root:null,threshold:[.9]}}},components:{Navbar:m},methods:{onWaypoint:function(t){var e=t.going,a=t.direction;e===this.$waypointMap.GOING_IN&&(this.isVisible=!0),a===this.$waypointMap.DIRECTION_BOTTOM&&(this.isVisible=!1)}}},E=y,x=Object(f["a"])(E,_,g,!1,null,null,null),S=x.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-gallery",attrs:{id:"gallery"}},[a("h1",[t._v("GALLERY")])])}],O={name:"Gallery"},k=O,T=Object(f["a"])(k,C,L,!1,null,null,null),w=T.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"home-stories",attrs:{id:"stories"}},[a("h1",[t._v("STORIES")])])}],B={name:"Stories"},M=B,G=Object(f["a"])(M,A,$,!1,null,null,null),N=G.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-book",attrs:{id:"book"}},[a("h1",[t._v("BOOK")])])}],R={name:"Book"},H=R,j=Object(f["a"])(H,F,V,!1,null,null,null),q=j.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-footer"},[a("h1",[t._v("FOOTER")])])}],D={name:"Footer"},W=D,Y=Object(f["a"])(W,I,P,!1,null,null,null),J=Y.exports,K={name:"Home",data:function(){return{}},components:{Header:b,Features:S,Gallery:w,Stories:N,Book:q,Footer:J},mounted:function(){}},U=K,X=(a("21bb"),Object(f["a"])(U,r,n,!1,null,null,null));e["default"]=X.exports},c9a8:function(t,e,a){t.exports=a.p+"img/header-chuk.9d9fe032.png"},e103:function(t,e,a){t.exports=a.p+"media/header-bg-mountains.b4b0bd86.mp4"},e8b5:function(t,e,a){var r=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-38db11c0.c2ae7a13.js.map