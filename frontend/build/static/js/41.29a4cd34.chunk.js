(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[41],{116:function(e,t,n){"use strict";n(1);var r=n(129),c=n(3);t.a=function(e){var t=e.title;return Object(c.jsx)(r.a,{children:Object(c.jsx)("title",{children:t})})}},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return l}));var r=n(7),c=n.n(r),a=n(13),i=n(25),s=n(14),o=n.n(s),u=(n(57),function(e,t){return function(){var n=Object(a.a)(c.a.mark((function n(r,a){var s,u;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.get("/api/v1/product/".concat(e));case 2:s=n.sent,u=s.data,r({type:i.a,payload:{product:u.product._id,name:u.product.name,price:u.product.price,image:u.product.images[0].url,stock:u.product.Stock,quantity:t}}),localStorage.setItem("cartItems",JSON.stringify(a().cart.cartItems));case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}),j=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:i.b,payload:e}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:i.d,payload:e}),localStorage.setItem("shippingInfo",JSON.stringify(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},243:function(e,t,n){"use strict";var r=n(1),c=n(192),a=n(599),i=n(553),s=n(592),o=n(285),u=n.n(o),j=n(286),l=n.n(j),d=n(287),b=n.n(d),p=(n(244),n(3));t.a=function(e){var t=e.activeStep,n=[{label:Object(p.jsx)(c.a,{children:"Shipping Details"}),icon:Object(p.jsx)(u.a,{})},{label:Object(p.jsx)(c.a,{children:"Confirm Order"}),icon:Object(p.jsx)(l.a,{})},{label:Object(p.jsx)(c.a,{children:"Payment"}),icon:Object(p.jsx)(b.a,{})}];return Object(p.jsx)(r.Fragment,{children:Object(p.jsx)(a.a,{alternativeLabel:!0,activeStep:t,style:{boxSizing:"border-box"},children:n.map((function(e,n){return Object(p.jsx)(i.a,{active:t===n,completed:t>=n,children:Object(p.jsx)(s.a,{style:{color:t>=n?"tomato":"rgba(0, 0, 0, 0.649)"},icon:e.icon,children:e.label})},n)}))})})}},244:function(e,t,n){},349:function(e,t,n){},555:function(e,t,n){"use strict";n.r(t);var r=n(38),c=n(1),a=(n(349),n(22)),i=n(241),s=n(116),o=n(358),u=n.n(o),j=n(356),l=n.n(j),d=n(357),b=n.n(d),p=n(359),O=n.n(p),h=n(367),f=n.n(h),x=n(360),v=n(28),m=n(243),g=(n(350),n(524)),y=(n(14),n(3));t.default=function(e){var t=e.history,n=Object(a.b)(),o=Object(v.d)(),j=Object(a.c)((function(e){return e.cart})).shippingInfo,d=Object(c.useState)(j.address),p=Object(r.a)(d,2),h=p[0],S=p[1],C=Object(c.useState)(j.city),N=Object(r.a)(C,2),I=N[0],w=N[1],k=Object(c.useState)(j.state),q=Object(r.a)(k,2),J=q[0],P=q[1],D=Object(c.useState)(j.country),F=Object(r.a)(D,2),A=F[0],B=F[1],E=Object(c.useState)(j.pinCode),z=Object(r.a)(E,2),H=z[0],L=z[1],T=Object(c.useState)(j.phoneNo),U=Object(r.a)(T,2),V=U[0],_=U[1],G=Object(c.useState)(!1),K=Object(r.a)(G,2),M=K[0],Q=K[1],R=Object(c.useState)("US"),W=Object(r.a)(R,2),X=W[0];W[1];return Object(y.jsxs)(c.Fragment,{children:[Object(y.jsx)(s.a,{title:"Shipping Details"}),Object(y.jsx)(m.a,{activeStep:0}),Object(y.jsx)("div",{className:"shippingContainer",children:Object(y.jsxs)("div",{className:"shippingBox",children:[Object(y.jsx)("h2",{className:"shippingHeading",children:"Shipping Details"}),Object(y.jsxs)("form",{className:"shippingForm",encType:"multipart/form-data",onSubmit:function(e){e.preventDefault(),M?o.error("Please Enter a Valid Phone Number"):(n(Object(i.c)({address:h,city:I,state:J,country:A,pinCode:H,phoneNo:V})),t.push("/order/confirm"))},children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(l.a,{}),Object(y.jsx)("input",{type:"text",placeholder:"Address",required:!0,value:h,onChange:function(e){return S(e.target.value)}})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)(b.a,{}),Object(y.jsx)("input",{type:"text",placeholder:"City",required:!0,value:I,onChange:function(e){return w(e.target.value)}})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)(u.a,{}),Object(y.jsx)("input",{type:"number",placeholder:"Pin Code",required:!0,value:H,onChange:function(e){return L(e.target.value)}})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)(O.a,{}),Object(y.jsxs)("select",{required:!0,value:A,onChange:function(e){return B(e.target.value)},children:[Object(y.jsx)("option",{value:"",children:"Country"}),x.Country&&x.Country.getAllCountries().map((function(e){return Object(y.jsx)("option",{value:e.isoCode,children:e.name},e.isoCode)}))]})]}),A&&Object(y.jsxs)("div",{children:[Object(y.jsx)(f.a,{}),Object(y.jsxs)("select",{required:!0,value:J,onChange:function(e){return P(e.target.value)},children:[Object(y.jsx)("option",{value:"",children:"State"}),x.State&&x.State.getStatesOfCountry(A).map((function(e){return Object(y.jsx)("option",{value:e.isoCode,children:e.name},e.isoCode)}))]})]}),Object(y.jsx)("div",{children:Object(y.jsx)(g.a,{placeholder:"Enter phone number",value:V,defaultCountry:X,style:{backgroundColor:"white"},onChange:function(e){var t;(t=e)?(_(t),t&&Object(g.b)(t)?Q(!1):Q(!0)):_(null)},error:V?Object(g.b)(V)?void 0:"Invalid phone number":"Phone number required"})}),Object(y.jsx)("input",{type:"submit",value:"Continue",className:"shippingBtn",disabled:!J})]})]})})]})}}}]);
//# sourceMappingURL=41.29a4cd34.chunk.js.map