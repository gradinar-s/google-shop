(this.webpackJsonpgoogle_store=this.webpackJsonpgoogle_store||[]).push([[0],{16:function(t,e,a){t.exports={header:"Header_header__2lcWO",rowTitle:"Header_rowTitle__2BmIO",rowNav:"Header_rowNav__3WqB3",title:"Header_title__3_C0i",titleCart:"Header_titleCart__1CAcV",quan:"Header_quan__1VKAe",cartWrapper:"Header_cartWrapper__3GL0q",alreadyNotification:"Header_alreadyNotification__3xOG4",viewNotification:"Header_viewNotification__1kLjP",message:"Header_message__PTUdK","name-goods":"Header_name-goods__2FnKv","icon-goods":"Header_icon-goods__zb3tN","delete-goods":"Header_delete-goods__JjW9N","quantity-goods":"Header_quantity-goods__294OV","quantity-goods__button":"Header_quantity-goods__button__1OqOe",plus__button:"Header_plus__button__3s1Ed",minus__button:"Header_minus__button__MCxLC",total:"Header_total__2YVPC",total__sum:"Header_total__sum__2pa1m",order__form:"Header_order__form__3Jj6S",order__button:"Header_order__button__15f9i"}},18:function(t,e,a){t.exports={cardProduct:"CardProduct_cardProduct__2oQDg",item:"CardProduct_item__27lH4",photoProduct:"CardProduct_photoProduct__3xg8g",title:"CardProduct_title__3Hj3V",price:"CardProduct_price__1I2XR",buttons:"CardProduct_buttons__33RNl",addCartWrapper:"CardProduct_addCartWrapper__1rJXA",selectionSize:"CardProduct_selectionSize__3O79P",addCart:"CardProduct_addCart__3IHko"}},39:function(t,e,a){t.exports={formCheckout:"Checkout_formCheckout__1BWgq",btnSubmitForm:"Checkout_btnSubmitForm__3DqWy"}},4:function(t,e,a){t.exports={info:"ProductInCart_info__1mjI9",mainInfoProduct:"ProductInCart_mainInfoProduct__3LZe_",selectSize:"ProductInCart_selectSize__1_Z1Y",notSelectSize:"ProductInCart_notSelectSize__UU-Qd",btnSelectSize:"ProductInCart_btnSelectSize__3ERlS",selectionSize:"ProductInCart_selectionSize__32fIc",smallProductIcons:"ProductInCart_smallProductIcons__1NkM7",btnCartManagement:"ProductInCart_btnCartManagement__wNpxt",btnBuyWrapper:"ProductInCart_btnBuyWrapper__rSc5v",btnDelWrapper:"ProductInCart_btnDelWrapper__j_esD",btnDelGoodsTheCart:"ProductInCart_btnDelGoodsTheCart__3Cjoy",btnDisabled:"ProductInCart_btnDisabled__2zpAq",notifySelectSize:"ProductInCart_notifySelectSize__3EhKa",quantityTitle:"ProductInCart_quantityTitle__1YNs3",quantityGoods:"ProductInCart_quantityGoods__Oljir",buttons:"ProductInCart_buttons__2p8Dr",totalCost:"ProductInCart_totalCost__8etzE",nameGoods:"ProductInCart_nameGoods__1akq-"}},47:function(t,e,a){t.exports={size:"SelectSize_size__3jnaC"}},50:function(t,e,a){t.exports={backToShop:"Cart_backToShop__38uTr"}},53:function(t,e,a){t.exports={loading:"Loading_loading__1CQpk"}},66:function(t,e,a){},67:function(t,e,a){},69:function(t,e,a){},70:function(t,e,a){},71:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a(0),o=a(24),r=a.n(o),i=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,o=e.getLCP,r=e.getTTFB;a(t),c(t),n(t),o(t),r(t)}))},s=a(41),d=a(14),l=a(26),u=a.n(l),b=a(28),j=a(21),p=a(2),_=fetch("https://spreadsheets.google.com/feeds/list/1NVHcPwl7wVG1E87jVy0w-Q6HL7OcUfq3E674tEj7vw0/od6/public/values?alt=json").then((function(t){return t.json()})).then((function(t){return t})),m="cardProduct/SET_PRODUCT_CARD_DATA",C="cardProduct/SET_PRODUCT_TO_CART",O="cartProduct/SET_ADD_PRODUCT_TO_CART",h="cardProduct/INCREMENT_GOODS",f="cartProduct/DECREMENT_GOODS",x="cartProduct/REMOVE_FROM_CART",P="cartProduct/SET_ALREADY_IN_CART",v="cartProduct/SET_SELECT_SIZE",g={products:[],cart:[],totalCost:[],sum:0,isAlreadyInCart:!1,isAddProduct:!1,isLoaded:!1},N=function(t){return{type:m,data:t}},y=function(t){return{type:C,product:t}},S=function(t){return{type:P,data:t}},A=function(t){return{type:O,value:t}},T=function(t){return{type:v,size:t}},I=function(){return function(){var t=Object(b.a)(u.a.mark((function t(e){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_;case 2:a=t.sent,c=a.feed.entry.map((function(t){return{id:t.gsx$id.$t,cost:Number(t.gsx$cost.$t),img:t.gsx$image.$t,name:t.gsx$name.$t,description:t.gsx$description.$t,quantity:Number(t.gsx$quantity.$t),availableSizes:t.gsx$size.$t.split(", "),counter:1,selectSize:""}})),e(N(c));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E="app/INITIALIZED_SUCCESS",z="app/OPEN_MDW_CART",w="app/CLOSE_MDW_CART",k="app/OPEN_MDW_CHECKOUT",G="app/CLOSE_MDW_CHECKOUT",W="app/SET_WINDOW_CLOSING_PROCESS",D="app/SET_COORDINATE_ELEMENT",H="app/SET_COORDINATES_ICON_CART",q={initializedApp:!1,isOpenCart:!1,isOpenCheckout:!1,windowClosingProcess:!1,coordinateElement:{},coordinatesIconCart:{}},V=function(){return{type:w}},R=function(){return{type:k}},M=function(t){return{type:W,value:t}},B=function(t){return{type:D,coordinates:t}},L=a(42),U=Object(d.combineReducers)({cardProduct:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(p.a)(Object(p.a)({},t),{},{products:e.data});case C:return Object(p.a)(Object(p.a)({},t),{},{cart:[].concat(Object(j.a)(t.cart),[e.product]),sum:t.sum+e.product.cost});case h:var a=t.cart.findIndex((function(t){return t.id===e.id})),c=Object(j.a)(t.cart);return c[a].counter++,Object(p.a)(Object(p.a)({},t),{},{cart:Object(j.a)(c),sum:t.sum+t.cart[a].cost});case f:var n=t.cart.findIndex((function(t){return t.id===e.id})),o=Object(j.a)(t.cart);return o[n].counter--,Object(p.a)(Object(p.a)({},t),{},{cart:Object(j.a)(o),sum:t.sum-t.cart[n].cost});case x:var r=t.cart.findIndex((function(t){return t.id===e.id})),i=Object(j.a)(t.cart),s=i[r].cost*i[r].counter;return i[r].counter=1,i[r].selectSize="",i.splice(r,1),Object(p.a)(Object(p.a)({},t),{},{cart:Object(j.a)(i),sum:t.sum-s,isAlreadyInCart:!1});case P:return Object(p.a)(Object(p.a)({},t),{},{isAlreadyInCart:e.data});case O:return Object(p.a)(Object(p.a)({},t),{},{isAddProduct:e.value});case v:var d=t.cart.map((function(t){return t.selectSize=e.size,t}));return Object(p.a)(Object(p.a)({},t),{},{cart:Object(j.a)(d)});default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E:return Object(p.a)(Object(p.a)({},t),{},{initializedApp:!0});case z:return Object(p.a)(Object(p.a)({},t),{},{isOpenCart:!0});case w:return Object(p.a)(Object(p.a)({},t),{},{isOpenCart:!1});case k:return Object(p.a)(Object(p.a)({},t),{},{isOpenCheckout:!0});case G:return Object(p.a)(Object(p.a)({},t),{},{isOpenCheckout:!1});case W:return Object(p.a)(Object(p.a)({},t),{},{windowClosingProcess:e.value});case D:return Object(p.a)(Object(p.a)({},t),{},{coordinateElement:e.coordinates});case H:return Object(p.a)(Object(p.a)({},t),{},{coordinatesIconCart:e.coordinates});default:return t}}}),F=Object(d.createStore)(U,Object(L.composeWithDevTools)(Object(d.applyMiddleware)(s.a))),$=a(7),Z=a(19),Q=a(5),Y=a(31),K=a(35),J=a(36);function X(){var t=Object(K.a)(["\n    position: absolute;\n    top: ","px;\n    left: ","px;\n    width: 25px;\n    height: 25px;\n    background: #cc4a16;\n    border-radius: 50%;\n    animation: "," 0.8s forwards;\n  "]);return X=function(){return t},t}function tt(){var t=Object(K.a)(["\n  60% { \n    opacity: 1;\n  };  \n  100% { \n    opacity: 0;\n    top: ","px;\n    left: ","px;\n  }"]);return tt=function(){return t},t}var et=function(t){var e=t.target.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},at=function(t,e){return Object(J.b)(tt(),t,e)},ct=function(t,e,a){return J.a.span(X(),t-25,e+15,a)},nt=(a(66),function(t){var e=t.children,a=t.direction,n=t.className,o=Object(Y.a)(t,["children","direction","className"]);return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"notification ".concat(n),children:Object(c.jsxs)("div",{className:"notification-wrapper",children:[Object(c.jsx)("div",{className:"notification-content",style:{backgroundColor:o.background,borderColor:o.borderColor},children:e}),Object(c.jsx)("span",{className:"arrow ".concat(a),style:{backgroundColor:o.background,borderColor:o.borderColor}})]})})})}),ot=a(47),rt=a.n(ot),it=Object($.b)(null,{setSelectSize:T,setCoordinateElement:B})((function(t){var e=t.className,a=t.direction,n=t.background,o=t.borderColor,r=t.iterationEl,i=t.setSelectSize,s=t.setCoordinateElement,d=Object(Y.a)(t,["className","direction","background","borderColor","iterationEl","setSelectSize","setCoordinateElement"]);return Object(c.jsx)(nt,{className:e,direction:a,background:n,borderColor:o,children:r.availableSizes.map((function(t,e){return Object(c.jsx)("span",{className:rt.a.size,onClick:function(e){s(et(e)),d.addCartGoodsValidation(r),i(t)},children:t},e)}))})})),st=a(4),dt=a.n(st),lt=Object($.b)((function(t){return{cart:t.cardProduct.cart,sum:t.cardProduct.sum,totalCost:t.cardProduct.totalCost,selectSize:t.cardProduct.selectSize}}),{incrementGoodsAC:function(t){return{type:h,id:t}},decrementGoodsAC:function(t){return{type:f,id:t}},removeFromCartAC:function(t){return{type:x,id:t}},closeCart:V,openWindowCheckout:R})((function(t){var e=t.cart,a=t.decrementGoodsAC,n=t.incrementGoodsAC,o=t.removeFromCartAC,r=t.sum,i=t.addCartGoodsValidation,s=t.closeCart,d=t.openWindowCheckout;return Object(c.jsxs)(c.Fragment,{children:[e.map((function(t){return Object(c.jsxs)("div",{className:dt.a.goodsItem,children:[Object(c.jsxs)("div",{className:dt.a.info,children:[Object(c.jsx)("div",{className:dt.a.smallProductIcons,children:Object(c.jsx)("img",{src:t.img,alt:""})}),Object(c.jsxs)("div",{className:dt.a.mainInfoProduct,children:[Object(c.jsx)("div",{className:dt.a.nameGoods,children:t.name}),t.selectSize?Object(c.jsxs)("div",{className:dt.a.selectSize,children:["Select size: ",t.selectSize]}):Object(c.jsxs)("div",{className:dt.a.notSelectSize,children:[Object(c.jsx)("span",{className:dt.a.btnSelectSize,children:"Select size"}),Object(c.jsx)(it,{className:dt.a.selectionSize,direction:"bottom",background:"#333",borderColor:"#333",iterationEl:t,addCartGoodsValidation:i})]})]}),Object(c.jsxs)("div",{className:dt.a.btnCartManagement,children:[Object(c.jsxs)("div",{className:"".concat(dt.a.btnBuyWrapper," ").concat(t.selectSize?"":dt.a.btnDisabled),children:[Object(c.jsx)(nt,{direction:"bottom",className:dt.a.notifySelectSize,children:Object(c.jsx)("span",{children:"Please choose size first"})}),Object(c.jsx)("button",{disabled:!t.selectSize,onClick:function(){s(),d()},className:"buttonPrimary",children:"Buy"})]}),Object(c.jsx)("div",{className:dt.a.btnDelWrapper,children:Object(c.jsx)("button",{onClick:function(){return o(t.id)},className:"buttonPrimary ".concat(dt.a.btnDelGoodsTheCart)})})]})]}),Object(c.jsx)("div",{className:dt.a.quantityGoods,children:Object(c.jsxs)("div",{className:dt.a.quantityTitle,children:[Object(c.jsx)("span",{children:"Quantity:"}),"".concat(t.counter,"pc | ").concat(t.cost*t.counter," UAH"),Object(c.jsxs)("div",{className:dt.a.buttons,children:[Object(c.jsx)("button",{onClick:function(){return e=t.id,void n(e);var e},className:"buttonPrimary ".concat(dt.a.plusGoods),children:"+"}),Object(c.jsx)("button",{onClick:function(){return e=t.id,void(t.counter<=1?o(e):a(e));var e},className:"buttonPrimary ".concat(dt.a.minusGoods),children:"-"})]})]})})]},t.id)})),!!e.length&&Object(c.jsxs)("div",{className:dt.a.totalCost,children:["Total: ",Object(c.jsxs)("span",{children:[r," UAH"]})]})]})})),ut=a(48),bt=a(49),jt=a(55),pt=a(54),_t=function(t){Object(jt.a)(a,t);var e=Object(pt.a)(a);function a(){var t;Object(ut.a)(this,a);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).el=document.createElement("div"),t}return Object(bt.a)(a,[{key:"componentDidMount",value:function(){document.body.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.el)}},{key:"render",value:function(){return r.a.createPortal(this.props.children,this.el)}}]),a}(n.Component),mt=(a(67),Object($.b)((function(t){return{windowClosingProcess:t.app.windowClosingProcess}}),null)((function(t){var e=t.className,a=t.title,n=t.children,o=t.isClosed,r=t.isOpen,i=t.width,s=t.windowClosingProcess;return Object(c.jsx)(c.Fragment,{children:r&&Object(c.jsx)(_t,{children:Object(c.jsx)("div",{className:"modalWindow ".concat(s?"hide":""," ").concat(e),children:Object(c.jsx)("div",{className:"modalOverlay",onClick:function(t){t.target.dataset.modalwindow&&o()},"data-modalwindow":!0,children:Object(c.jsxs)("div",{className:"modalBody",style:{maxWidth:i},children:[Object(c.jsxs)("div",{className:"modalHeader",children:[Object(c.jsx)("h2",{className:"modalTitle",children:a}),Object(c.jsx)("span",{className:"modalClosed",onClick:o,children:"\u2716"})]}),Object(c.jsx)("div",{className:"modalContent",children:n}),Object(c.jsx)("div",{className:"modalFooter"})]})})})})})}))),Ct=a(50),Ot=a.n(Ct),ht=Object($.b)((function(t){return{isOpenCart:t.app.isOpenCart}}),{})((function(t){return Object(c.jsx)(mt,{title:t.cart.length?"Cart":"Your cart is empty",isOpen:t.isOpenCart,isClosed:t.closePopup,width:!t.cart.length&&"400px",children:t.cart.length?Object(c.jsx)(lt,{addCartGoodsValidation:t.addCartGoodsValidation}):Object(c.jsx)("span",{className:Ot.a.backToShop,onClick:t.closePopup,children:"Back to shopping"})})})),ft=a(16),xt=a.n(ft),Pt=a.p+"static/media/cart.ddc068c2.svg",vt=Object($.b)((function(t){return{isAlreadyInCart:t.cardProduct.isAlreadyInCart,cart:t.cardProduct.cart,initializedApp:t.app.initializedApp}}),{openCart:function(){return{type:z}},closeCart:V,setWindowClosingProcess:M,setCoordinatesIconCart:function(t){return{type:H,coordinates:t}}})((function(t){var e=Object(n.useRef)();return Object(n.useEffect)((function(){var a=e.current.getBoundingClientRect(),c=Math.round(a.top),n=Math.round(a.left);t.setCoordinatesIconCart({top:c,left:n})}),[]),Object(c.jsx)("header",{className:xt.a.header,children:Object(c.jsxs)("div",{className:xt.a.rowNav,children:[Object(c.jsx)("div",{className:xt.a.rowTitle,children:Object(c.jsx)(Z.b,{to:"/selectionGoods",className:xt.a.title,children:"Google Shop"})}),Object(c.jsxs)("div",{className:xt.a.cartWrapper,children:[t.isAlreadyInCart&&Object(c.jsx)(nt,{className:xt.a.alreadyNotification,direction:"right",children:Object(c.jsx)("span",{className:xt.a.message,children:"This goods is already in your cart"})}),Object(c.jsxs)("div",{ref:e,className:xt.a.titleCart,onClick:t.openCart,children:[Object(c.jsx)("img",{src:Pt,alt:""}),Object(c.jsx)("span",{className:xt.a.quan,children:t.cart.length})]})]}),Object(c.jsx)(ht,{cart:t.cart,closePopup:function(){t.setWindowClosingProcess(!0),setTimeout((function(){t.closeCart(),t.setWindowClosingProcess(!1)}),210)},addCartGoodsValidation:t.addCartGoodsValidation})]})})})),gt=a(22),Nt=a(39),yt=a.n(Nt),St=Object($.b)((function(t){return{isOpenCheckout:t.app.isOpenCheckout}}),{closeWindowCheckout:function(){return{type:G}},setWindowClosingProcess:M})((function(t){return Object(c.jsx)(mt,{title:"Buy in one click",isClosed:function(){t.setWindowClosingProcess(!0),setTimeout((function(){t.closeWindowCheckout(),t.setWindowClosingProcess(!1)}),210)},isOpen:t.isOpenCheckout,width:"450px",children:Object(c.jsx)(gt.d,{initialValues:{name:"",email:"",tel:""},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",e},onSubmit:function(t){console.log(t)},children:function(t){var e=t.isSubmitting;return Object(c.jsxs)(gt.c,{className:yt.a.formCheckout,children:[Object(c.jsx)(gt.b,{type:"text",name:"name",placeholder:"Name"}),Object(c.jsx)(gt.b,{type:"email",name:"email",placeholder:"Email"}),Object(c.jsx)(gt.a,{name:"email",className:"error",component:"div"}),Object(c.jsx)(gt.b,{type:"tel",name:"tel",placeholder:"Phone"}),Object(c.jsx)(gt.a,{name:"tel",component:"div"}),Object(c.jsx)("button",{className:"buttonPrimary ".concat(yt.a.btnSubmitForm),type:"submit",disabled:e,children:"Buy"})]})}})})})),At=a(18),Tt=a.n(At),It=Object(d.compose)(Object($.b)((function(t){return{products:t.cardProduct.products,cart:t.cardProduct.cart,isAddProduct:t.cardProduct.isAddProduct,coordinateElement:t.app.coordinateElement,coordinatesIconCart:t.app.coordinatesIconCart}}),{openWindowCheckout:R,setCoordinateElement:B,setProductToCartAC:y,setAlreadyInCartAC:S,setAddProductToCart:A}))((function(t){var e=at(t.coordinatesIconCart.top,t.coordinatesIconCart.left),a=ct(t.coordinateElement.top,t.coordinateElement.left,e);return Object(c.jsxs)("div",{className:Tt.a.cardProduct,children:[Object(c.jsx)(St,{}),t.isAddProduct&&Object(c.jsx)(_t,{children:Object(c.jsx)(a,{})}),t.products.map((function(e){return Object(c.jsxs)("div",{className:Tt.a.item,children:[Object(c.jsx)(Z.b,{to:"/goods/".concat(e.id),className:Tt.a.photoProduct,children:Object(c.jsx)("img",{src:e.img,alt:""})}),Object(c.jsx)(Z.b,{to:"/goods/".concat(e.id),className:Tt.a.title,children:e.name}),Object(c.jsxs)("div",{className:Tt.a.price,children:[e.cost," UAH"]}),Object(c.jsxs)("div",{className:Tt.a.buttons,children:[Object(c.jsx)("button",{onClick:t.openWindowCheckout,className:"buttonPrimary",children:"Buy"}),Object(c.jsxs)("div",{className:Tt.a.addCartWrapper,children:[Object(c.jsx)(it,{className:Tt.a.selectionSize,direction:"bottom",background:"#333",borderColor:"#333",iterationEl:e,addCartGoodsValidation:t.addCartGoodsValidation}),Object(c.jsx)("button",{className:"buttonPrimary ".concat(Tt.a.addCart),onClick:function(a){t.addCartGoodsValidation(e),t.setCoordinateElement(et(a))}})]})]})]},e.id)}))]})})),Et=a(53),zt=a.n(Et),wt=a.p+"static/media/loading.48060ccb.svg",kt=function(t){return Object(c.jsx)("div",{className:zt.a.loading,children:Object(c.jsx)("img",{src:wt,alt:""})})},Gt=a(8),Wt=a.n(Gt),Dt=Object(d.compose)(Object($.b)((function(t){return{products:t.cardProduct.products,cart:t.cardProduct.cart,isAddProduct:t.cardProduct.isAddProduct,coordinatesIconCart:t.app.coordinatesIconCart,coordinateElement:t.app.coordinateElement}}),{getProductCardDataTC:I,setProductToCartAC:y,setAlreadyInCartAC:S,setAddProductToCart:A,openWindowCheckout:R,setCoordinateElement:B,setSelectSize:T}),Q.e)((function(t){var e=t.match.params.id,a=t.products[e],n=at(t.coordinatesIconCart.top,t.coordinatesIconCart.left),o=ct(t.coordinateElement.top,t.coordinateElement.left,n);return t.products.length?Object(c.jsxs)("div",{className:Wt.a.productPage,children:[t.isAddProduct&&Object(c.jsx)(_t,{children:Object(c.jsx)(o,{})}),Object(c.jsx)("div",{className:Wt.a.infoSection,children:Object(c.jsx)("div",{className:Wt.a.photo,children:Object(c.jsx)("img",{src:a.img,alt:""})})}),Object(c.jsxs)("div",{className:Wt.a.orderSelection,children:[Object(c.jsx)("div",{className:Wt.a.title,children:a.name}),Object(c.jsxs)("div",{className:Wt.a.availability,children:[a.quantity>=10&&Object(c.jsx)("span",{className:"".concat(Wt.a.areAvailable),children:"Are available"}),a.quantity<10&&0!==a.quantity&&Object(c.jsx)("span",{className:"".concat(Wt.a.last),children:"The item is running out"}),0===a.quantity&&Object(c.jsx)("span",{className:"".concat(Wt.a.notAvailable),children:"Not available"})]}),Object(c.jsxs)("div",{className:Wt.a.cost,children:[a.cost," UAH"]}),Object(c.jsxs)("div",{className:Wt.a.descriptionGoods,children:[Object(c.jsx)("hr",{}),Object(c.jsx)("p",{children:a.description})]}),Object(c.jsxs)("div",{className:Wt.a.sizeSelection,children:[Object(c.jsx)("hr",{}),a.availableSizes.map((function(e){return Object(c.jsx)("div",{onClick:function(c){t.setCoordinateElement(et(c)),t.addCartGoodsValidation(a),t.setSelectSize(e)},className:Wt.a.sizeGoods,children:e},e)})),Object(c.jsx)("hr",{})]}),Object(c.jsxs)("div",{className:Wt.a.buttons,children:[Object(c.jsx)(St,{}),Object(c.jsx)("button",{className:"buttonPrimary",onClick:t.openWindowCheckout,children:"Buy"}),Object(c.jsx)("button",{className:"buttonPrimary ".concat(Wt.a.addToCart),onClick:function(e){t.addCartGoodsValidation(a),t.setCoordinateElement(et(e))},children:"Add to cart"})]})]})]}):Object(c.jsx)(kt,{})})),Ht=(a(69),Object($.b)((function(t){return{initializedApp:t.app.initializedApp,cart:t.cardProduct.cart}}),{setProductToCartAC:y,setAddProductToCart:A,setAlreadyInCartAC:S,initializeApp:function(){return function(){var t=Object(b.a)(u.a.mark((function t(e){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e(I()),t.next=3,Promise.all([a]);case 3:e({type:E});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(t){Object(n.useEffect)((function(){return t.initializeApp()}),[]);var e=function(e){if(t.cart.length)if(t.cart.some((function(t){return e.id===t.id}))){if(!e.selectSize)return;t.setAlreadyInCartAC(!0),setTimeout((function(){t.setAlreadyInCartAC(!1)}),2700)}else t.setProductToCartAC(e),t.setAddProductToCart(!0),setTimeout((function(){t.setAddProductToCart(!1)}),1e3);else t.setProductToCartAC(e),t.setAddProductToCart(!0),setTimeout((function(){t.setAddProductToCart(!1)}),1e3)},a=Object(c.jsx)(It,{addCartGoodsValidation:e});return t.initializedApp?Object(c.jsxs)("div",{className:"wrapper-app",children:[Object(c.jsx)(vt,{addCartGoodsValidation:e}),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"shop-body",children:[Object(c.jsx)(Q.a,{exact:!0,path:"/",render:function(){return a}}),Object(c.jsx)(Q.a,{path:"/selectionGoods",render:function(){return a}}),Object(c.jsx)(Q.a,{path:"/goods/:id",render:function(){return Object(c.jsx)(Dt,{addCartGoodsValidation:e})}})]})})]}):Object(c.jsx)(kt,{})})));a(70);r.a.render(Object(c.jsx)(Z.a,{children:Object(c.jsx)($.a,{store:F,children:Object(c.jsx)(Ht,{})})}),document.getElementById("root")),i()},8:function(t,e,a){t.exports={productPage:"ProductPage_productPage__1poYV",infoSection:"ProductPage_infoSection__2oO63",photo:"ProductPage_photo__3i2z-",availability:"ProductPage_availability__1UiuS",areAvailable:"ProductPage_areAvailable__3Ermh",last:"ProductPage_last__1465L",notAvailable:"ProductPage_notAvailable__v5Vzj",orderSelection:"ProductPage_orderSelection__2ZsfX",title:"ProductPage_title__U0eGG",cost:"ProductPage_cost__6x9ki",descriptionGoods:"ProductPage_descriptionGoods__1eFTV",sizeSelection:"ProductPage_sizeSelection__1v89v",sizeGoods:"ProductPage_sizeGoods__3OQ4S",buttons:"ProductPage_buttons__2MyTP",addToCart:"ProductPage_addToCart__EkQtZ"}}},[[71,1,2]]]);
//# sourceMappingURL=main.cfdd837b.chunk.js.map