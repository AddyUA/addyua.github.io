(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8168bdd6"],{"159b":function(t,e,a){var r=a("da84"),o=a("fdbc"),n=a("17c2"),i=a("9112");for(var s in o){var c=r[s],u=c&&c.prototype;if(u&&u.forEach!==n)try{i(u,"forEach",n)}catch(l){u.forEach=n}}},"17c2":function(t,e,a){"use strict";var r=a("b727").forEach,o=a("a640"),n=a("ae40"),i=o("forEach"),s=n("forEach");t.exports=i&&s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1ae4":function(t,e,a){t.exports=a.p+"img/logo.9ce59b36.svg"},"21bb":function(t,e,a){"use strict";var r=a("2dad"),o=a.n(r);o.a},"2dad":function(t,e,a){},4160:function(t,e,a){"use strict";var r=a("23e7"),o=a("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"65f0":function(t,e,a){var r=a("861d"),o=a("e8b5"),n=a("b622"),i=n("species");t.exports=function(t,e){var a;return o(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!o(a.prototype)?r(a)&&(a=a[i],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},"9c19":function(t,e,a){t.exports=a.p+"img/header-gamak.2c9f2da8.png"},a640:function(t,e,a){"use strict";var r=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&r((function(){a.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,a){var r=a("83ab"),o=a("d039"),n=a("5135"),i=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(n(s,t))return s[t];e||(e={});var a=[][t],u=!!n(e,"ACCESSORS")&&e.ACCESSORS,l=n(e,0)?e[0]:c,d=n(e,1)?e[1]:void 0;return s[t]=!!a&&!o((function(){if(u&&!r)return!0;var t={length:-1};u?i(t,1,{enumerable:!0,get:c}):t[1]=1,a.call(t,l,d)}))}},b727:function(t,e,a){var r=a("0366"),o=a("44ad"),n=a("7b0b"),i=a("50c4"),s=a("65f0"),c=[].push,u=function(t){var e=1==t,a=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d;return function(p,h,m,g){for(var v,b,y=n(p),L=o(y),S=r(h,m,3),x=i(L.length),_=0,C=g||s,E=e?C(p,x):a?C(p,0):void 0;x>_;_++)if((f||_ in L)&&(v=L[_],b=S(v,_,y),t))if(e)E[_]=b;else if(b)switch(t){case 3:return!0;case 5:return v;case 6:return _;case 2:c.call(E,v)}else if(l)return!1;return d?-1:u||l?l:E}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},bb51:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Header"),a("Features")],1)},o=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{ref:"homeHeader",staticClass:"home-header",attrs:{id:"home-header"}},[r("video",{staticClass:"home-header__video",attrs:{autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[r("source",{attrs:{src:a("e103"),type:"video/mp4"}}),t._v(" Your browser is not supported! ")]),r("img",{staticClass:"home-header__logo",attrs:{src:a("1ae4"),alt:"logo"}}),r("img",{staticClass:"home-header__chuk parallax",attrs:{"data-speed":"50",src:a("c9a8"),alt:"chuk"}}),r("img",{staticClass:"home-header__gamak parallax",attrs:{"data-speed":"100",src:a("9c19"),alt:"gamak"}}),r("div",{staticClass:"home-header__bag parallax",attrs:{"data-speed":"100"}},[r("div",{staticClass:"home-header__bag-btn",on:{click:function(e){t.isBag=!t.isBag}}}),t.isBag?r("div",{staticClass:"home-header__bag-content",on:{click:function(e){t.isBag=!t.isBag}}},[r("b",[t._v("Bag")]),t._v(" - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi doloribus, sunt voluptas voluptate ullam saepe corrupti labore quaerat quos voluptatum consequuntur quod magnam animi quibusdam maxime fugit amet porro. ")]):t._e()])])},i=[],s=(a("4160"),a("159b"),{name:"Header",data:function(){return{isBag:!1}},mounted:function(){this.$refs.homeHeader.addEventListener("mousemove",(function(t){this.querySelectorAll(".parallax").forEach((function(e){var a=e.getAttribute("data-speed");e.style.transform="translateX(".concat(t.clientX*a/9e3,"px)")}))}))}}),c=s,u=a("2877"),l=Object(u["a"])(c,n,i,!1,null,null,null),d=l.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{\n    active: true,\n    callback: onWaypoint,\n    options: intersectionOptions\n  }"}],ref:"homeFeatures",staticClass:"home-features",attrs:{id:"home-features"}},[a("h1",[t._v("FEATURES")])])},p=[],h={name:"Features",data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[.5]}}},methods:{onWaypoint:function(t){var e=t.going;e===this.$waypointMap.GOING_IN&&(console.log("waypoint going In"),this.$refs.homeFeatures.style.backgroundColor="royalblue"),e===this.$waypointMap.GOING_OUT&&(console.log("waypoint going Out!"),this.$refs.homeFeatures.style.backgroundColor="orangered")}}},m=h,g=Object(u["a"])(m,f,p,!1,null,null,null),v=g.exports,b={name:"Home",components:{Header:d,Features:v}},y=b,L=(a("21bb"),Object(u["a"])(y,r,o,!1,null,null,null));e["default"]=L.exports},c9a8:function(t,e,a){t.exports=a.p+"img/header-chuk.5dca7da3.png"},e103:function(t,e,a){t.exports=a.p+"media/header-bg-mountains.b4b0bd86.mp4"},e8b5:function(t,e,a){var r=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-8168bdd6.a796fd05.js.map