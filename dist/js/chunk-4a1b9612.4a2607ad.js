(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a1b9612"],{1695:function(t,e,a){"use strict";var s=a("881b"),n=a.n(s);n.a},1799:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination mb-0"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e},attrs:{pages:e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getPages(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},n=[],o={name:"Pagination",props:{pages:{type:Object,default:function(){}}},methods:{getPages:function(t){this.$emit("emitPages",t)}}},i=o,r=a("2877"),l=Object(r["a"])(i,s,n,!1,null,null,null);e["a"]=l.exports},"56a6":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-alert"},t._l(t.messages,(function(e,s){return a("div",{key:s,staticClass:"alert alert-dismissible",class:"alert-"+e.status},[t._v(" "+t._s(e.message)+" "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(s)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},n=[],o=(a("4160"),a("a434"),a("159b"),{name:"AlertMessage",data:function(){return{messages:[]}},methods:{updateMessage:function(t,e){var a=Math.floor(new Date/1e3);this.messages.push({message:t,status:e,timestamp:a}),this.removeMessageWithTiming(a)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var e=this;setTimeout((function(){e.messages.forEach((function(a,s){a.timestamp===t&&e.messages.splice(s,1)}))}),6e3)}},computed:{messagesback:function(){return this.$store.state.messages}},created:function(){var t=this;t.$bus.$on("message:push",(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(e,a)}))}}),i=o,r=(a("1695"),a("2877")),l=Object(r["a"])(i,s,n,!1,null,null,null);e["a"]=l.exports},"881b":function(t,e,a){},a434:function(t,e,a){"use strict";var s=a("23e7"),n=a("23cb"),o=a("a691"),i=a("50c4"),r=a("7b0b"),l=a("65f0"),c=a("8418"),d=a("1dde"),u=a("ae40"),m=d("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,f=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!m||!p},{splice:function(t,e){var a,s,d,u,m,p,b=r(this),_=i(b.length),C=n(t,_),k=arguments.length;if(0===k?a=s=0:1===k?(a=0,s=_-C):(a=k-2,s=f(g(o(e),0),_-C)),_+a-s>h)throw TypeError(v);for(d=l(b,s),u=0;u<s;u++)m=C+u,m in b&&c(d,u,b[m]);if(d.length=s,a<s){for(u=C;u<_-s;u++)m=u+s,p=u+a,m in b?b[p]=b[m]:delete b[p];for(u=_;u>_-s+a;u--)delete b[u-1]}else if(a>s)for(u=_-s;u>C;u--)m=u+s-1,p=u+a-1,m in b?b[p]=b[m]:delete b[p];for(u=0;u<a;u++)b[u+C]=arguments[u+2];return b.length=_-s+a,d}})},e6dc:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"products"},[a("Alert"),a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._m(0),a("div",{staticClass:"Introduction container-fluid mt-2"},[a("ul",{staticClass:"Introduction-container list-unstyled row justify-content-between mb-0"},[a("li",{staticClass:"col-12 col-md-4 col-lg-3"},[a("div",{staticClass:"drop"},[a("ul",{staticClass:"Introduction-list list-unstyled"},t._l(t.menu,(function(e){return a("li",{key:e.zoe,staticClass:"Introduction-item border",class:{active:e.style,activeall:e.kind},on:{click:function(a){a.stopPropagation(),t.dropitem(e.zoe),e.took&&t.currentcontext(e.special)}}},[a("h5",{staticClass:"Introduction-item-title p-3 text-center",attrs:{id:e.name}},[a("span",{staticClass:"Introduction-plus",class:{active:e.style},attrs:{id:e.zoe}}),t._v(" "+t._s(e.name)+" ")]),a("ul",{staticClass:"Introduction-content list-unstyled",attrs:{id:e.dropid}},t._l(e.rol,(function(e){return a("li",{key:e.zoe,staticClass:"Introduction-content-list border",class:{active:e.kind},on:{click:function(a){return a.stopPropagation(),t.currentcontext(e.zoe)}}},[a("h5",{staticClass:"Introduction-content-title p-3 text-center"},[a("span",{staticClass:"Introduction-contnet-plus"},[t._v(t._s(e.name))])])])})),0)])})),0)])]),a("li",{staticClass:"commodity d-flex flex-column col-12 col-md-8 col-lg-9 mt-2 mt-md-0"},[a("ul",{staticClass:"commodity-content col-12 mx-auto row list-unstyled px-0 align-items-center border pt-2"},t._l(t.products,(function(e){return a("li",{key:e.id,staticClass:" commodity-list col-12 col-md-6 col-lg-3 mb-3"},[a("div",{staticClass:"card d-flex flex-row flex-md-column "},[a("div",{staticClass:"card-img",on:{mousemove:function(e){return e.stopPropagation(),t.HoverShow(e)}}},[a("img",{staticClass:"card-img-top img-fluid",attrs:{src:e.imageUrl,"data-num":e.id,alt:""}}),e.is_enabled?a("div",{staticClass:"card-hover d-flex justify-content-around align-items-center",attrs:{"data-num":e.id}},[a("a",{staticClass:"btn btn-outline-light",attrs:{href:"`#/custom/detail/${item.id}`","data-num":e.id},on:{click:function(a){return a.preventDefault(),t.ToProductsDetaill(e.id)}}},[t._v("more")]),a("a",{staticClass:"btn btn-outline-light",attrs:{href:"#","data-num":e.id},on:{click:function(a){return a.preventDefault(),t.getCurrentProduct(e.id)}}},[t._v("加入購物車")])]):t._e()]),a("div",{staticClass:"card-body border"},[a("h5",{staticClass:"card-title font-weight-bold"},[t._v(t._s(e.title))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.content))]),a("div",{staticClass:"d-flex justify-content-between mt-2"},[a("del",[t._v("原價"+t._s(e.origin_price)+"!!")]),a("h3",{staticClass:"h5 text-danger font-weight-bold"},[t._v("特價"+t._s(e.price)+"!!")])]),a("div",{staticClass:"card-text-btn mt-2"},[a("a",{staticClass:"btn btn-info p-1 mr-2",attrs:{href:"`#/custom/detail/${item.id}`"},on:{click:function(a){return a.preventDefault(),t.ToProductsDetaill(e.id)}}},[t._v("more")]),a("a",{staticClass:"btn btn-primary p-1",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getCurrentProduct(e.id)}}},[t._v("加入購物車")])])])])])})),0),a("PaginationPhone",{staticClass:"page-phone align-self-center mx-auto my-3",attrs:{pages:t.pagination},on:{emitPages:t.GetProducts}}),a("Pagination",{staticClass:"page-dash align-self-center mx-auto my-3",attrs:{pages:t.pagination},on:{emitPages:t.GetProducts}})],1)])]),a("CardModal",{attrs:{theProduct:t.temproduct}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"custom d-flex"},[a("div",{staticClass:"m-auto text-white"},[a("h1",[t._v("Shop Store")])])])}],o=(a("4160"),a("159b"),a("5530")),i=a("2f62"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"dropdown"},[a("button",{staticClass:"btn bg-black dropdown-toggle text-white",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("頁面")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},t._l(t.pages.total_pages,(function(e){return a("a",{key:e,staticClass:"dropdown-item",class:{active:t.pages.current_page===e},attrs:{pages:e,href:"#"},on:{click:function(a){return a.preventDefault(),t.getPages(e)}}},[t._v(t._s(e))])})),0)])},l=[],c={name:"paginationPhone",props:{pages:{type:Object,default:function(){}}},methods:{getPages:function(t){this.$store.dispatch("productsmodules/GetProducts",t)}}},d=c,u=a("2877"),m=Object(u["a"])(d,r,l,!1,null,null,null),p=m.exports,g=a("1799"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.theProduct.title))]),t._m(0)]),a("div",{staticClass:"modal-body"},[a("img",{staticClass:"img-fluid",attrs:{src:t.theProduct.imageUrl,alt:""}}),a("div",{staticClass:"mt-3"},[a("p",{staticClass:"modal-description text-secondary"},[t._v(t._s(t.theProduct.description))])]),a("div",{staticClass:"d-flex justify-content-between align-items-baseline modal-price"},[a("del",{staticClass:"h6 text-secondary"},[t._v("原價 "+t._s(t._f("currency")(t.theProduct.origin_price)))]),a("div",{staticClass:"h4 text-danger"},[t._v(" 現在購買 "),a("strong",[t._v(t._s(t._f("currency")(t.theProduct.price)))])])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.counts,expression:"counts"}],staticClass:"form-control mt-3",attrs:{name:"count"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.counts=e.target.multiple?a:a[0]}}},t._l(10,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v("總共 "+t._s(e)+" 隻")])})),0)]),a("div",{staticClass:"modal-footer"},[a("div",{staticClass:"text-nowrap mr-4 modal-total"},[t._v(" 小計 "),a("strong",[t._v(t._s(t._f("currency")(t.counts*t.theProduct.price)))])]),a("a",{staticClass:"btn btn-danger btn-block px-4",class:{disabled:t.theProduct.id===t.cartdisable},attrs:{href:"#"},on:{click:function(e){return t.addtoCart(t.theProduct.id,t.counts)}}},[t._v("立即下單")])])])])])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],v=a("1157"),b=a.n(v),_={name:"CardModal",props:{theProduct:{type:Object,default:function(){}}},data:function(){return{counts:1,cartdisable:""}},methods:{addtoCart:function(t,e){var a=this;a.cartdisable=t,a.$store.dispatch("cardmodules/addtoCart",{id:t,qty:e}).then((function(){b()("#productModal").modal("hide"),a.cartdisable="",a.counts=1}))}}},C=_,k=Object(u["a"])(C,f,h,!1,null,null,null),y=k.exports,x=a("56a6"),P={components:{Pagination:g["a"],CardModal:y,PaginationPhone:p,Alert:x["a"]},data:function(){return{hover_btn:!0,plus_icon:!1,Btn_rwd:!1,phoneCard:!1,menu:[{name:"All",zoe:"all",special:"all",took:!0,style:!1,kind:!1},{name:"魔戒-秩序陣營",zoe:"goodside",took:!1,style:!1,dropid:"order",rol:[{name:"夏爾",zoe:"theshire",kind:!1},{name:"剛鐸",zoe:"Gondor",kind:!1},{name:"洛汗",zoe:"Rohan",kind:!1},{name:"瑞文戴爾",zoe:"Rivendell",kind:!1},{name:"凱薩督姆",zoe:"Khazad-Dum",kind:!1}]},{name:"魔戒-混沌陣營",zoe:"evilside",took:!1,style:!1,dropid:"dark",rol:[{name:"艾辛格",zoe:"isengard",kind:!1},{name:"魔多",zoe:"mordor",kind:!1}]},{name:"哈比人-秩序陣營",zoe:"hobbitgood",took:!1,style:!1,dropid:"orderhobbit",rol:[{name:"埃爾博",zoe:"LonelyMountain",kind:!1},{name:"鐵丘陵矮人",zoe:"IronHills",kind:!1},{name:"幽暗密林",zoe:"Mirkwood",style:!1}]},{name:"哈比人-混沌陣營",zoe:"hobbitevil",took:!1,style:!1,dropid:"darkhobbit",rol:[{name:"阿佐格軍團",zoe:"azog",kind:!1}]},{name:"遊戲相關內容",zoe:"some",took:!1,style:!1,dropid:"book",rol:[{name:"戰爭規則書",zoe:"book",kind:!1}]}]}},methods:Object(o["a"])({getCurrentProduct:function(t){this.$store.dispatch("productsmodules/getCurrentProduct",t).then((function(){b()("#productModal").modal("show")}))},ToProductsDetaill:function(t){this.$router.push("/custom/detail/".concat(t))},currentcontext:function(t){var e=this;e.$store.commit("productsmodules/CURRENTCONTEXT",t),e.GetProducts(),e.menu.forEach((function(e){for(var a in t==e.special?0==e.kind&&(e.kind=!0):e.kind=!1,e.rol)t==e.rol[a].zoe?0==e.rol[a].kind?e.rol[a].kind=!0:e.rol[a].kind=!1:t!==e.rol[a].zoe&&(e.rol[a].kind=!1)}))},dropitem:function(t){var e=this;e.menu.forEach((function(e){t===e.zoe&&t!==e.special&&(0==e.style?(e.style=!0,b()("#".concat(e.dropid)).slideDown("slow")):(e.style=!1,b()("#".concat(e.dropid)).slideUp("slow")))}))},HoverShow:function(t){var e=t.target.dataset.num;this.$store.commit("productsmodules/HOVERLIST",e)}},Object(i["b"])("productsmodules",["GetProducts"])),computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["c"])(["isLoading"])),Object(i["c"])("productsmodules",["products","pagination","temproduct","contxt","txt"])),Object(i["c"])("cardmodules",["cartItem"])),mounted:function(){b()(".Introduction-content").hide(),b()(".card-hover").hide();var t=document.getElementById("All"),e=document.getElementById("all");t.removeChild(e)},created:function(){this.GetProducts()}},w=P,z=Object(u["a"])(w,s,n,!1,null,null,null);e["default"]=z.exports}}]);
//# sourceMappingURL=chunk-4a1b9612.4a2607ad.js.map