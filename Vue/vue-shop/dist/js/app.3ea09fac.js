(function(t){function a(a){for(var n,r,o=a[0],s=a[1],p=a[2],l=0,m=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&m.push(c[r][0]),c[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(a);while(m.length)m.shift()();return i.push.apply(i,p||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,o=1;o<e.length;o++){var s=e[o];0!==c[s]&&(n=!1)}n&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var n={},c={app:0},i=[];function r(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)r.d(e,n,function(a){return t[a]}.bind(null,n));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=a,o=o.slice();for(var p=0;p<o.length;p++)a(o[p]);var u=s;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0001":function(t,a,e){"use strict";var n=e("3842"),c=e.n(n);c.a},"034f":function(t,a,e){"use strict";var n=e("85ec"),c=e.n(n);c.a},3842:function(t,a,e){},4253:function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("app-main-wrapper")],1)},i=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"v-main-wrapper"},[e("keep-alive",[e("router-view")],1)],1)},o=[],s={name:"v-main-wrapper",props:{},data:function(){return{}},computed:{},components:{},methods:{},watch:{},mounted:function(){}},p=s,u=(e("85bd"),e("2877")),l=Object(u["a"])(p,r,o,!1,null,null,null),m=l.exports,_={name:"app",components:{appMainWrapper:m}},f=_,d=(e("034f"),Object(u["a"])(f,c,i,!1,null,null,null)),v=d.exports,g=e("8c4f"),C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"v-catalog"},[e("router-link",{attrs:{to:{name:"Cart",params:{cartData:t.CART}}}},[e("div",{staticClass:"v-catalog__link_to_cart main-btn"},[e("font-awesome-icon",{attrs:{icon:["fas","shopping-cart"],size:"3x"}}),e("span",{staticClass:"v-catalog__link_to_cart-item"},[t._v(t._s(t.CART.length))])],1)]),e("h1",{staticClass:"v-catalog__header"},[t._v("SHOP")]),e("div",{staticClass:"v-catalog__list"},t._l(t.PRODUCTS,(function(a){return e("app-catalog-item",{key:a.article,attrs:{productData:a},on:{addToCart:t.addToCart}})})),1)],1)},b=[],h=e("5530"),T=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"v-catalog-item"},[t.isInfoPopup?n("app-popup",{attrs:{popupBtnTitle:"Add to cart",popupTitle:t.productData.name},on:{closePopup:t.closePopup,popupBtnAction:t.addToCart}},[n("img",{staticClass:"v-catalog-item__popup-image",attrs:{src:e("bb6e")("./"+t.productData.image),alt:"image"}}),n("div",[n("p",{staticClass:"v-catalog-item__description"},[t._v('"'+t._s(t.productData.description)+'"')]),n("p",{staticClass:"v-catalog-item__category"},[t._v(t._s(t.productData.category))]),n("p",{staticClass:"v-catalog-item__price"},[t._v("Price: "+t._s(t.productData.price)+"$")])])]):t._e(),n("img",{staticClass:"v-catalog-item__image",attrs:{src:e("bb6e")("./"+t.productData.image),alt:"image"}}),n("p",{staticClass:"v-catalog-item__name"},[t._v('"'+t._s(t.productData.name)+'"')]),n("p",{staticClass:"v-catalog-item__category"},[t._v(t._s(t.productData.category))]),n("p",{staticClass:"v-catalog-item__price"},[t._v("Price: "+t._s(t.productData.price)+"$")]),n("button",{staticClass:"v-catalog-item__show-info btn",on:{click:t.showPopup}},[t._v("Show info")]),n("button",{staticClass:"v-catalog-item__add btn",on:{click:t.addToCart}},[n("font-awesome-icon",{attrs:{icon:["fas","cart-plus"]}}),n("span",[t._v("Add to cart")])],1)],1)},y=[],O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"popupWrapper",staticClass:"popup-wrapper"},[e("div",{staticClass:"v-popup"},[e("div",{staticClass:"v-popup__header"},[e("span",[t._v('"'+t._s(t.popupTitle)+'"')]),e("span",[e("font-awesome-icon",{staticClass:"v-popup__header-close-btn",attrs:{icon:["fas","times-circle"]},on:{click:t.closePopup}})],1)]),e("div",{staticClass:"v-popup__content"},[t._t("default")],2),e("div",{staticClass:"v-popup__footer"},[e("button",{staticClass:"submit-btn btn",on:{click:t.popupBtnAction}},[t._v(" "+t._s(t.popupBtnTitle)+" ")])])])])},D=[],E={name:"v-popup",props:{popupTitle:{type:String,default:"Product name"},popupBtnTitle:{type:String,default:"Ok"}},methods:{popupBtnAction:function(){this.$emit("popupBtnAction")},closePopup:function(){this.$emit("closePopup")}},mounted:function(){var t=this;document.addEventListener("click",(function(a){a.target===t.$refs.popupWrapper&&t.closePopup()}))}},I=E,R=(e("0001"),Object(u["a"])(I,O,D,!1,null,null,null)),P=R.exports,w={name:"v-catalog-item",data:function(){return{isInfoPopup:!1}},props:{productData:{type:Object,default:function(){return{}}}},components:{appPopup:P},methods:{showPopup:function(){this.isInfoPopup=!0},closePopup:function(){this.isInfoPopup=!1},addToCart:function(){this.$emit("addToCart",this.productData)}}},A=w,j=(e("7508"),Object(u["a"])(A,T,y,!1,null,null,null)),M=j.exports,k=e("2f62"),x={name:"v-catalog",components:{appCatalogItem:M},computed:Object(h["a"])({},Object(k["c"])(["PRODUCTS","CART"])),methods:Object(h["a"])(Object(h["a"])({},Object(k["b"])(["GET_PRODUCTS_FROM_API","ADD_TO_CART"])),{},{addToCart:function(t){this.ADD_TO_CART(t)}})},S=x,$=(e("e294"),Object(u["a"])(S,C,b,!1,null,null,null)),F=$.exports,q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"v-cart"},[e("router-link",{attrs:{to:{name:"Catalog"}}},[e("div",{staticClass:"v-cart__link_to_catalog main-btn shop"},[e("font-awesome-icon",{attrs:{icon:["fas","shopping-bag"],size:"3x"}})],1)]),e("h1",{staticClass:"v-cart__header"},[t._v("Cart")]),t.cartData.length?t._e():e("p",[t._v("There are no pruducts in cart ...")]),t._l(t.cartData,(function(a,n){return e("app-cart-item",{key:a.article,attrs:{cartItemData:a},on:{deleteFromCart:function(a){return t.deleteFromCart(n)},increment:function(a){return t.increment(n)},decrement:function(a){return t.decrement(n)}}})})),e("div",{staticClass:"v-cart__total"},[e("p",{staticClass:"total__name"},[t._v("Total:")]),e("p",[t._v(t._s(t.cartTotalCost)+" $")])])],2)},N=[],B=(e("13d5"),e("b85c")),U=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"v-cart-item"},[n("img",{staticClass:"v-cart-item__image",attrs:{src:e("bb6e")("./"+t.cartItemData.image),alt:"image"}}),n("div",{staticClass:"v-cart-item__info"},[n("p",[t._v('"'+t._s(t.cartItemData.name)+'"')]),n("p",{staticClass:"v-cart-item__category"},[t._v(t._s(t.cartItemData.category))]),n("p",[t._v(" Total: "),n("span",{staticClass:"v-cart-item__total"},[t._v(t._s(t.cartItemData.price*t.cartItemData.quantity)+"$")])]),n("p",[t._v(t._s(t.cartItemData.article))])]),n("div",{staticClass:"v-cart-item__quantity"},[n("p",[t._v("Qty:")]),n("p",[n("span",{staticClass:"v-cart-item__quantity_button",on:{click:t.decItem}},[t._v("-")]),n("span",{staticClass:"v-cart-item__quantity_qty"},[t._v(t._s(t.cartItemData.quantity))]),n("span",{staticClass:"v-cart-item__quantity_button",on:{click:t.incItem}},[t._v("+")])])]),n("button",{staticClass:"btn",on:{click:t.deleteFromCart}},[t._v("Delete")])])},L=[],W={name:"v-cart-item",props:{cartItemData:{type:Object,default:function(){return{}}}},methods:{decItem:function(){this.$emit("decrement")},incItem:function(){this.$emit("increment")},deleteFromCart:function(){this.$emit("deleteFromCart")}},mounted:function(){this.$set(this.cartItemData,"quantity",1)}},G=W,J=(e("5a6f"),Object(u["a"])(G,U,L,!1,null,null,null)),z=J.exports,K={name:"v-cart",props:{cartData:{type:Array,default:function(){return[]}}},components:{appCartItem:z},computed:{cartTotalCost:function(){var t=[];if(this.cartData.length){var a,e=Object(B["a"])(this.cartData);try{for(e.s();!(a=e.n()).done;){var n=a.value;t.push(n.price*n.quantity)}}catch(c){e.e(c)}finally{e.f()}return t=t.reduce((function(t,a){return a+t}),0),t}return 0}},methods:Object(h["a"])(Object(h["a"])({},Object(k["b"])(["DELETE_FROM_CART","INC_CART_ITEM","DEC_CART_ITEM"])),{},{increment:function(t){this.INC_CART_ITEM(t)},decrement:function(t){this.DEC_CART_ITEM(t)},deleteFromCart:function(t){this.DELETE_FROM_CART(t)}})},V=K,H=(e("8b90"),Object(u["a"])(V,q,N,!1,null,null,null)),Q=H.exports;n["a"].use(g["a"]);var X=[{path:"/",name:"Catalog",component:F},{path:"/cart",name:"Cart",component:Q,props:!0}],Y=new g["a"]({routes:X}),Z=Y;e("d81d"),e("a434"),e("bc3a");n["a"].use(k["a"]);var tt=new k["a"].Store({state:{products:[{image:"img-1.png",name:"Ghost of Tsushima",description:"В конце XIII века в ходе кампании по завоеванию Востока Монгольская империя стерла с лица земли целые народы. Остров Цусима – последнее, что лежит на пути мощного монгольского флота во главе с хитрым и безжалостным генералом Хотун-ханом до материковой Японии.",price:40,article:"T1",available:!0,category:"PS4"},{image:"img-2.png",name:"The Last of Us II",description:"После смертельно опасного путешествия по охваченной эпидемией Америке Элли и Джоэл осели в Вайоминге. Обосновавшись в процветающей общине, они обрели желанную стабильность, несмотря на постоянную угрозу нападения зараженных и теряющих смысл жизни выживших.",price:50,article:"T2",available:!0,category:"PS4"},{image:"img-3.png",name:"Jedi Fallen Order",description:"В игре «Звёздные Войны Джедаи: Павший Орден», новом экшне с видом от третьего лица авторства Respawn Entertainment, вас ждут приключения галактического масштаба. Действие этой сюжетной одиночной игры разворачивается после событий ленты «Эпизод III – Месть ситхов».",price:35,article:"T3",available:!1,category:"PS4"},{image:"img-4.png",name:"Resident Evil 3",description:"Только Джилл Валентайн знает о преступлениях корпорации «Амбрелла». Чтобы остановить ее, «Амбрелла» использует секретное оружие: Немезис! В комплект входит новая сетевая игра Resident Evil Resistance, в которой четверо выживших бросают вызов зловещему высшему разуму и пытаются сбежать из его плена.",price:30,article:"T4",available:!0,category:"PC"},{image:"img-5.png",name:"Mortal Kombat 11",description:"Mortal Kombat возвращается во всей красе! Начинается следующий виток эволюции легендарной серии. Совершенно новые варианты персонализации героя обеспечат беспрецедентные возможности для настройки бойцов и придания им неповторимых индивидуальных черт.",price:35,article:"T5",available:!1,category:"PC"},{image:"img-6.png",name:"God of War",description:"Все изменилось. Закончился круговорот насилия, недоверия и обмана. Завершена череда ошибок, связанных с богами греческого пантеона, – злополучное соглашение с Аресом, убийство семьи, ненависть и безумие, а в итоге грандиозное разрушение Олимпа. Ярость Кратоса стала причиной множества бед. Но что будет, когда он сделает правильный выбор? И почему он решил так поступить?",price:40,article:"T6",available:!0,category:"PS4"}],cart:[]},mutations:{SET_TO_CART:function(t,a){if(t.cart.length){var e=!1;t.cart.map((function(t){t.article===a.article&&(e=!0)})),e||t.cart.push(a)}else t.cart.push(a)},INCREMENT:function(t,a){t.cart[a].quantity++},DECREMENT:function(t,a){t.cart[a].quantity>1&&t.cart[a].quantity--},REMOVE_FROM_CART:function(t,a){t.cart.splice(a,1)}},actions:{ADD_TO_CART:function(t,a){var e=t.commit;e("SET_TO_CART",a)},INC_CART_ITEM:function(t,a){var e=t.commit;e("INCREMENT",a)},DEC_CART_ITEM:function(t,a){var e=t.commit;e("DECREMENT",a)},DELETE_FROM_CART:function(t,a){var e=t.commit;e("REMOVE_FROM_CART",a)}},getters:{PRODUCTS:function(t){return t.products},CART:function(t){return t.cart}},modules:{}}),at=(e("9299"),e("ecee")),et=e("c074"),nt=e("ad3d");at["c"].add(et["c"],et["a"],et["b"],et["d"]),n["a"].component("font-awesome-icon",nt["a"]),n["a"].config.productionTip=!1,new n["a"]({router:Z,store:tt,render:function(t){return t(v)}}).$mount("#app")},"5a6f":function(t,a,e){"use strict";var n=e("cfa5"),c=e.n(n);c.a},"6ae5":function(t,a,e){t.exports=e.p+"img/img-5.2b9b15a2.png"},7508:function(t,a,e){"use strict";var n=e("dac5"),c=e.n(n);c.a},8286:function(t,a,e){t.exports=e.p+"img/img-2.9f6e7c9e.png"},"85bd":function(t,a,e){"use strict";var n=e("4253"),c=e.n(n);c.a},"85ec":function(t,a,e){},"8b90":function(t,a,e){"use strict";var n=e("9e0b"),c=e.n(n);c.a},9299:function(t,a,e){},"9e0b":function(t,a,e){},"9f56":function(t,a,e){t.exports=e.p+"img/img-6.4fb256bb.png"},bb6e:function(t,a,e){var n={"./img-1.png":"efed","./img-2.png":"8286","./img-3.png":"bf7c","./img-4.png":"f25d","./img-5.png":"6ae5","./img-6.png":"9f56"};function c(t){var a=i(t);return e(a)}function i(t){if(!e.o(n,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return n[t]}c.keys=function(){return Object.keys(n)},c.resolve=i,t.exports=c,c.id="bb6e"},bf7c:function(t,a,e){t.exports=e.p+"img/img-3.20293259.png"},cfa5:function(t,a,e){},d0a5:function(t,a,e){},dac5:function(t,a,e){},e294:function(t,a,e){"use strict";var n=e("d0a5"),c=e.n(n);c.a},efed:function(t,a,e){t.exports=e.p+"img/img-1.b9171a91.png"},f25d:function(t,a,e){t.exports=e.p+"img/img-4.5ce822c7.png"}});
//# sourceMappingURL=app.3ea09fac.js.map