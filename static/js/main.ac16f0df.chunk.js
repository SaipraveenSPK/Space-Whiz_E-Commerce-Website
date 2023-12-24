(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(45)},34:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),l=a(18),n=a.n(l),s=(a(34),a(17)),o=a(6),m=a(15),i=a(7),d=a(2);const u={cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],cartTotalQuantity:0,cartTotalAmount:0},p=Object(d.d)({name:"cart",initialState:u,reducers:{addToCart(e,t){const a=e.cartItems.findIndex(e=>e.id===t.payload.id);if(a>=0)e.cartItems[a]={...e.cartItems[a],cartQuantity:e.cartItems[a].cartQuantity+1},m.b.info("Increased product quantity",{position:"bottom-left"});else{let a={...t.payload,cartQuantity:1};e.cartItems.push(a),m.b.success("Product added to cart",{position:"bottom-left"})}localStorage.setItem("cartItems",JSON.stringify(e.cartItems))},decreaseCart(e,t){const a=e.cartItems.findIndex(e=>e.id===t.payload.id);if(e.cartItems[a].cartQuantity>1)e.cartItems[a].cartQuantity-=1,m.b.info("Decreased product quantity",{position:"bottom-left"});else if(1===e.cartItems[a].cartQuantity){const a=e.cartItems.filter(e=>e.id!==t.payload.id);e.cartItems=a,m.b.error("Product removed from cart",{position:"bottom-left"})}localStorage.setItem("cartItems",JSON.stringify(e.cartItems))},removeFromCart(e,t){e.cartItems.map(a=>{if(a.id===t.payload.id){const t=e.cartItems.filter(e=>e.id!==a.id);e.cartItems=t,m.b.error("Product removed from cart",{position:"bottom-left"})}return localStorage.setItem("cartItems",JSON.stringify(e.cartItems)),e})},getTotals(e,t){let{total:a,quantity:r}=e.cartItems.reduce((e,t)=>{const{price:a,cartQuantity:r}=t,c=a*r;return e.total+=c,e.quantity+=r,e},{total:0,quantity:0});a=parseFloat(a.toFixed(2)),e.cartTotalQuantity=r,e.cartTotalAmount=a},clearCart(e,t){e.cartItems=[],localStorage.setItem("cartItems",JSON.stringify(e.cartItems)),m.b.error("Cart cleared",{position:"bottom-left"})}}}),{addToCart:E,decreaseCart:v,removeFromCart:h,getTotals:b,clearCart:g}=p.actions;var y=p.reducer,f=a(28),N=a(9);const I=Object(f.a)({reducerPath:"productsApi",baseQuery:Object(N.d)({baseUrl:"https://ecomm-4knx.onrender.com"}),endpoints:e=>({getAllProducts:e.query({query:()=>"products"})})}),{useGetAllProductsQuery:w}=I;var C=()=>{const{items:e,status:t}=Object(i.e)(e=>e.products),a=Object(i.d)(),r=Object(o.g)(),{data:l,error:n,isLoading:s}=w();console.log("Api",s);return c.a.createElement("div",{className:"home-container"},"success"===t?c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"New Arrivals"),c.a.createElement("div",{className:"products"},l&&(null===l||void 0===l?void 0:l.map(e=>c.a.createElement("div",{key:e.id,className:"product"},c.a.createElement("h3",null,e.name),c.a.createElement("img",{src:e.image,alt:e.name}),c.a.createElement("div",{className:"details"},c.a.createElement("span",null,e.desc),c.a.createElement("span",{className:"price"},"$",e.price)),c.a.createElement("button",{onClick:()=>(e=>{a(E(e)),r.push("/cart")})(e)},"Add To Cart")))))):"pending"===t?c.a.createElement("p",null,"Loading..."):c.a.createElement("p",null,"Unexpected error occured..."))};var S=()=>{const{cartTotalQuantity:e}=Object(i.e)(e=>e.cart);return c.a.createElement("nav",{className:"nav-bar"},c.a.createElement(s.b,{to:"/"},c.a.createElement("h2",null,"OnlineShop")),c.a.createElement(s.b,{to:"/cart"},c.a.createElement("div",{className:"nav-bag"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",fill:"currentColor",className:"bi bi-handbag-fill",viewBox:"0 0 16 16"},c.a.createElement("path",{d:"M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"})),c.a.createElement("span",{className:"bag-quantity"},c.a.createElement("span",null,e)))))};var O=()=>c.a.createElement("div",{className:"not-found"},c.a.createElement("h2",null,"404"),c.a.createElement("p",null,"Page not found"));var j=()=>{const e=Object(i.e)(e=>e.cart),t=Object(i.d)();Object(r.useEffect)(()=>{t(b())},[e,t]);return c.a.createElement("div",{className:"cart-container"},c.a.createElement("h2",null,"Shopping Cart"),0===e.cartItems.length?c.a.createElement("div",{className:"cart-empty"},c.a.createElement("p",null,"Your cart is currently empty"),c.a.createElement("div",{className:"start-shopping"},c.a.createElement(s.b,{to:"/"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-arrow-left",viewBox:"0 0 16 16"},c.a.createElement("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})),c.a.createElement("span",null,"Start Shopping")))):c.a.createElement("div",null,c.a.createElement("div",{className:"titles"},c.a.createElement("h3",{className:"product-title"},"Product"),c.a.createElement("h3",{className:"price"},"Price"),c.a.createElement("h3",{className:"quantity"},"Quantity"),c.a.createElement("h3",{className:"total"},"Total")),c.a.createElement("div",{className:"cart-items"},e.cartItems&&e.cartItems.map(e=>c.a.createElement("div",{className:"cart-item",key:e.id},c.a.createElement("div",{className:"cart-product"},c.a.createElement("img",{src:e.image,alt:e.name}),c.a.createElement("div",null,c.a.createElement("h3",null,e.name),c.a.createElement("p",null,e.desc),c.a.createElement("button",{onClick:()=>(e=>{t(h(e))})(e)},"Remove"))),c.a.createElement("div",{className:"cart-product-price"},"$",e.price),c.a.createElement("div",{className:"cart-product-quantity"},c.a.createElement("button",{onClick:()=>(e=>{t(v(e))})(e)}),c.a.createElement("div",{className:"count"},e.cartQuantity),c.a.createElement("button",{onClick:()=>(e=>{t(E(e))})(e)},"+")),c.a.createElement("div",{className:"cart-product-total-price"},"$",e.price*e.cartQuantity)))),c.a.createElement("div",{className:"cart-summary"},c.a.createElement("button",{className:"clear-btn",onClick:()=>void t(g())},"Clear Cart"),c.a.createElement("div",{className:"cart-checkout"},c.a.createElement("div",{className:"subtotal"},c.a.createElement("span",null,"Subtotal"),c.a.createElement("span",{className:"amount"},"$",e.cartTotalAmount)),c.a.createElement("p",null,"Taxes and shipping calculated at checkout"),c.a.createElement("button",null,"Check out"),c.a.createElement("div",{className:"continue-shopping"},c.a.createElement(s.b,{to:"/"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-arrow-left",viewBox:"0 0 16 16"},c.a.createElement("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})),c.a.createElement("span",null,"Continue Shopping")))))))};a(40);var x=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(s.a,null,c.a.createElement(m.a,null),c.a.createElement(S,null),c.a.createElement("div",{className:"content-container"},c.a.createElement(o.d,null,c.a.createElement(o.b,{path:"/cart",component:j}),c.a.createElement(o.b,{path:"/not-found",component:O}),c.a.createElement(o.b,{path:"/",exact:!0,component:C}),c.a.createElement(o.a,{to:"/not-found"})))))},Q=a(47);const k=Object(d.c)("products/productsFetch",async()=>{try{return(await Q.a.get("https://chaoo-online-shop.herokuapp.com/products")).data}catch(e){console.log(e)}});var A=Object(d.d)({name:"products",initialState:{items:[],status:null},reducers:{},extraReducers:{[k.pending]:(e,t)=>{e.status="pending"},[k.fulfilled]:(e,t)=>{e.items=t.payload,e.status="success"},[k.rejected]:(e,t)=>{e.status="rejected"}}}).reducer;const T=Object(d.a)({reducer:{products:A,cart:y,[I.reducerPath]:I.reducer},middleware:e=>e().concat(I.middleware)});T.dispatch(k()),T.dispatch(b()),n.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:T},c.a.createElement(x,null))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.ac16f0df.chunk.js.map