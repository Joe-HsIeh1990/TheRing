(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30584f36"],{"7f96":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"check",tabindex:"-1",role:"dialog","aria-labelledby":"checkCenterTitle","aria-hidden":"true","data-backdrop":"static"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body leave-modal"},[a("p",[t._v("您的訂單尚未完成，確定要離開此頁? ")]),a("div",{staticClass:"text-right"},[a("button",{staticClass:"mr-2 btn btn-danger determin",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 確定 ")]),a("button",{staticClass:"cancel btn btn-dark",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")])])])])])])}],o={name:"CheckModal",data:function(){return{}}},n=o,i=a("2877"),l=Object(i["a"])(n,s,r,!1,null,null,null);e["a"]=l.exports},"9b83":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-white"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"pt-5 container CustomerOrder"},[a("h1",{staticClass:"text-center mb-4 CustomerOrder-title text-secondary"},[t._v(" 建立訂單 ")]),t._m(0),t.cart.total?a("div",{staticClass:"row flex-row-reverse"},[a("div",{staticClass:"col-lg-5"},[a("div",{staticClass:"customerCart-order border"},[t._m(1),t._l(t.cart.carts,(function(e,s){return a("div",{key:s,staticClass:"d-flex customerCart-order-item align-items-start p-3"},[a("div",{staticClass:"d-flex flex-column mt-1"},[a("h5",{staticClass:"mb-0 h6"},[t._v(" "+t._s(e.product.title)+" ")]),a("span",[t._v(t._s(e.qty)+"隻")])]),a("span",{staticClass:"ml-auto order-item-price"},[t._v(t._s(t._f("currency")(e.total)))])])})),t.cart.final_total&&t.cart.final_total!==t.cart.total?a("div",{staticClass:"d-flex customerCart-order-item align-items-start text-success p-3"},[a("div",{staticClass:"d-flex flex-column mb-3"},[a("h5",{staticClass:"mb-0"},[t._v(" 已套用優惠 ")]),a("span",[t._v(t._s(t.cart.final_total/t.cart.total*100)+"% OFF")])]),a("span",{staticClass:"ml-auto order-item-price"},[t._v(t._s(t._f("currency")(t.cart.total-t.cart.final_total)))])]):t._e(),a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid;return[t.cart.final_total&&t.cart.final_total===t.cart.total?a("form",{staticClass:"p-3 d-flex justify-content-center",attrs:{action:""}},[a("div",{staticClass:"input-group"},[a("ValidationProvider",{attrs:{name:"優惠碼",rules:"required|coupones"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("div",{class:r},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_num,expression:"coupon_num"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_num},on:{input:function(e){e.target.composing||(t.coupon_num=e.target.value)}}}),a("span",[t._v(t._s(s[0]))])])]}}],null,!0)})],1),a("div",{staticClass:"input-group"},[a("button",{staticClass:"coupones-btn btn btn-outline-secondary",attrs:{type:"button",disabled:s},on:{click:t.addCouponCode}},[t._v(" 套用優惠碼 ")])])]):t._e()]}}],null,!1,1519868276)}),a("hr",{staticClass:"my-3"}),a("div",{staticClass:"pb-3 px-3 pt-0 customerCart-order-Next"},[a("div",{staticClass:"d-flex justify-content-end align-content-center mb-3 align-items-end"},[a("p",{staticClass:"subtotal mr-2"},[t._v(" 總計 ")]),a("p",{staticClass:"total h3 mb-0 text-danger"},[t._v(" "+t._s(t._f("currency")(t.cart.final_total))+" ")])])])],2)]),a("div",{staticClass:"col-lg-7 mb-5"},[t._m(2),a("div",{staticClass:"border p-3"},[a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid;return[a("form",{on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),a("ValidationProvider",{attrs:{name:"姓名",rules:"required|name:2"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("div",{class:r},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",attrs:{id:"username",type:"text",name:"姓名",placeholder:"輸入姓名 必填!!"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useremail"}},[t._v("Email")]),a("ValidationProvider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("div",{class:r},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",attrs:{id:"useremail",type:"Email",name:"Email",placeholder:"請輸入 Email 必填!!"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),a("ValidationProvider",{attrs:{name:"手機號碼",rules:"required|phone"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("div",{class:r},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",attrs:{id:"usertel",type:"手機號碼",name:"tel",placeholder:"請輸入電話 必填!!"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),a("ValidationProvider",{attrs:{name:"地址",rules:"required|addres:6"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("div",{class:r},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",attrs:{id:"useraddress",type:"text",name:"地址",placeholder:"請輸入地址 必填!!"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comment"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),a("div",{staticClass:"form-row align-content-center"},[a("div",{staticClass:"form-group col-md-6"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.backToCart}},[t._v(" 上一步 ")])]),a("div",{staticClass:"form-group col-md-6"},[a("button",{staticClass:"btn btn-dark text-warning",attrs:{type:"submit",disabled:s}},[t._v(" 確認送出 ")])])])])]}}],null,!1,2255805086)})],1)])]):t._e()]),a("check")],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"alert alert-success rounded-pill text-center",attrs:{role:"alert"}},[t._v(" 1.填寫訂單 ")])]),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"alert bg-five rounded-pill text-center",attrs:{role:"alert"}},[t._v(" 2.確認付款 ")])]),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"alert bg-five rounded-pill text-center",attrs:{role:"alert"}},[t._v(" 3.訂單完成 ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex align-items-center justify-content-center border-bottom p-3 bg-primary"},[a("h2",{staticClass:"h5"},[t._v(" 訂單金額 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("h4",{staticClass:"py-3 bg-primary mx-auto"},[t._v(" 訂購人資料 ")])])}],o=(a("99af"),a("d81d"),a("5530")),n=a("2f62"),i=a("1157"),l=a.n(i),c=a("7bb1"),d=a("7f96"),u={name:"CustomOrder",components:{ValidationObserver:c["a"],check:d["a"]},data:function(){return{form:{user:{name:"",email:"",tel:"",address:"",identity:"",passport:""},message:""},leave:!1,coupon_num:""}},computed:Object(o["a"])(Object(o["a"])({},Object(n["c"])(["isLoading"])),Object(n["c"])("cardModules",["cart"])),created:function(){this.$store.dispatch("cardModules/getCart")},methods:{createOrder:function(){var t=this,e=t.form;t.$store.dispatch("orderModules/createOrder",e).then((function(){t.leave=!0}))},backToCart:function(){this.$router.go(-1)},deleteCart:function(t){var e=this;e.$store.commit("ISLOADING",!0),e.$http.all(e.cart.carts.map((function(t){var a="".concat("https://vue-course-api.hexschool.io/","api/").concat("maker","/cart/").concat(t.id);return e.$http.delete(a)}))).then((function(){e.$store.commit("ISLOADING",!1),t()}))},addCouponCode:function(){var t=this;""!==t.coupon_num&&this.$store.dispatch("cardModules/addCouponCode",t.coupon_num).then((function(){t.coupon_num=""}))}},beforeRouteLeave:function(t,e,a){var s=this;s.leave?s.deleteCart(a):(l()("#check").modal("show"),l()(".determin").on("click",(function(){s.deleteCart(a)})),l()(".cancel").on("click",(function(){a(!1)})))}},m=u,v=a("2877"),f=Object(v["a"])(m,s,r,!1,null,null,null);e["default"]=f.exports},d81d:function(t,e,a){"use strict";var s=a("23e7"),r=a("b727").map,o=a("1dde"),n=a("ae40"),i=o("map"),l=n("map");s({target:"Array",proto:!0,forced:!i||!l},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-30584f36.93d8ce99.js.map