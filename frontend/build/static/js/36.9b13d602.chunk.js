(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[36],{116:function(e,t,a){"use strict";a(1);var n=a(129),r=a(3);t.a=function(e){var t=e.title;return Object(r.jsx)(n.a,{children:Object(r.jsx)("title",{children:t})})}},127:function(e,t,a){"use strict";a(1),a(128);var n=a(3);t.a=function(){return Object(n.jsx)("div",{className:"loading",children:Object(n.jsx)("div",{})})}},128:function(e,t,a){},135:function(e,t,a){"use strict";a.d(t,"g",(function(){return p})),a.d(t,"e",(function(){return l})),a.d(t,"b",(function(){return d})),a.d(t,"j",(function(){return f})),a.d(t,"c",(function(){return j})),a.d(t,"h",(function(){return v})),a.d(t,"i",(function(){return b})),a.d(t,"f",(function(){return x})),a.d(t,"d",(function(){return h})),a.d(t,"a",(function(){return y}));var n=a(7),r=a.n(n),c=a(13),s=a(14),i=a.n(s),u=a(5),o=a(15),p=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:u.e}),"/api/v1/products",e.next=5,i.a.get("/api/v1/products");case 5:a=e.sent,n=a.data,t({type:u.f,payload:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:u.d,payload:e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},l=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:u.b}),e.next=4,i.a.get("".concat(o.a,"/api/v1/admin/products"));case 4:a=e.sent,n=a.data,t({type:u.c,payload:n.products}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:u.a,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:u.t}),n={headers:{"Content-Type":"multipart/form-data"}},t.next=5,i.a.post("".concat(o.a,"/api/v1/admin/product/new"),e,n);case 5:c=t.sent,s=c.data,a({type:u.v,payload:s}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:u.s,payload:t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e,t){return function(){var a=Object(c.a)(r.a.mark((function a(n){var c,s,p;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:u.F}),c={headers:{"Content-Type":"application/json"}},a.next=5,i.a.put("".concat(o.a,"/api/v1/admin/product/").concat(e),t,c);case 5:s=a.sent,p=s.data,n({type:u.H,payload:p.success}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),n({type:u.E,payload:a.t0.response.data.message});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:u.l}),t.next=4,i.a.delete("".concat(o.a,"/api/v1/admin/product/").concat(e));case 4:n=t.sent,c=n.data,a({type:u.n,payload:c.success}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:u.k,payload:t.t0.response.data.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:u.C}),a({type:u.B}),t.next=5,i.a.get("".concat(o.a,"/api/v1/product/").concat(e));case 5:n=t.sent,c=n.data,a({type:u.D,payload:c.product}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:u.A,payload:t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:u.x}),n={headers:{"Content-Type":"application/json"}},t.next=5,i.a.put("".concat(o.a,"/api/v1/review"),e,n);case 5:c=t.sent,s=c.data,a({type:u.z,payload:s.success}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:u.w,payload:t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:u.h}),t.next=4,i.a.get("".concat(o.a,"/api/v1/reviews?id=").concat(e));case 4:n=t.sent,c=n.data,a({type:u.i,payload:c.reviews}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:u.g,payload:t.t0.response.data.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e,t){return function(){var a=Object(c.a)(r.a.mark((function a(n){var c,s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:u.p}),a.next=4,i.a.delete("".concat(o.a,"/api/v1/reviews?id=").concat(e,"&productId=").concat(t));case 4:c=a.sent,s=c.data,n({type:u.r,payload:s.success}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:u.o,payload:a.t0.response.data.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},y=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:u.j});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},194:function(e,t,a){},304:function(e,t,a){},305:function(e,t,a){"use strict";var n=a(2),r=(a(1),a(18)),c=a(528),s=a(3);t.a=function(e){var t=e.product,a={value:t.ratings,readOnly:!0,precision:.5};return Object(s.jsxs)(r.b,{className:"productCard",to:"/product/".concat(t._id),children:[Object(s.jsx)("img",{style:{objectFit:"cover",boxShadow:"5px 1px 10px gray",borderRadius:"10px 10px 0px 0px"},src:t.images[0].url,alt:t.name}),Object(s.jsx)("p",{style:{textTransform:"capitalize"},children:t.name.length>75?t.name.slice(0,50)+"...read more":t.name}),Object(s.jsxs)("div",{children:[Object(s.jsx)(c.a,Object(n.a)({},a)),Object(s.jsxs)("p",{className:"productCardSpan",children:["(",t.numOfReviews," Reviews)"]})]}),Object(s.jsx)("span",{className:"pro-price",children:"$".concat(t.price)})]})}},510:function(e,t,a){},582:function(e,t,a){"use strict";a.r(t);var n=a(39),r=a(1),c=(a(510),a(194),a(304),a(23)),s=a(135),i=a(127),u=a(305),o=a(511),p=a.n(o),l=a(598),d=a(29),f=a(192),j=a(116),v=a(14),b=a.n(v),x=a(515),h=a.n(x),y=a(10),O=a(3);t.default=function(e){e.match;var t=Object(c.b)(),a=Object(y.h)().keyword,o=Object(d.d)(),v=Object(c.c)((function(e){return e.categories})).categories,x=Object(c.c)((function(e){return e.products})).error,m=Object(r.useState)(1),g=Object(n.a)(m,2),w=g[0],k=g[1],C=Object(r.useState)([0,5e3]),S=Object(n.a)(C,2),N=S[0],P=S[1],T=Object(r.useState)(""),L=Object(n.a)(T,2),R=L[0],B=L[1],z=Object(r.useState)(0),A=Object(n.a)(z,2),I=A[0],D=A[1],F=Object(r.useState)(""),E=Object(n.a)(F,2),_=E[0],H=E[1],J=Object(r.useState)([]),U=Object(n.a)(J,2),X=U[0],$=U[1],q=Object(r.useState)([]),G=Object(n.a)(q,2),K=G[0],M=G[1],Q=Object(r.useState)(20),V=Object(n.a)(Q,1)[0],W=Object(r.useState)(0),Y=Object(n.a)(W,2),Z=Y[0],ee=Y[1],te=Object(r.useState)(!0),ae=Object(n.a)(te,2),ne=ae[0],re=ae[1],ce=function(e,t,a,n){B(a),P(t),D(e),H(n);var r=K.filter((function(r){return r.ratings>=e&&h()(r.price).isBetween(t[0],t[1])&&r.category.toLowerCase().includes(a.toLowerCase())&&r.name.toLowerCase().includes(n.toLowerCase())}));if(0===e&&0===t[0]&&""===a&&""===n){var c=w*V-V,s=w*V,i=K.slice(c,s);ee(K.length),$(i)}else ee(r.length),$(r)};return Object(r.useEffect)((function(){x&&(o.error(x),t(Object(s.a)())),b.a.get("/api/v1/products").then((function(e){a?($(e.data.products.filter((function(e){return e.category===a})).slice(0,V)),ee(X.length),B(a)):($(e.data.products.slice(0,V)),ee(e.data.products.length),B("")),M(e.data.products),re(!1)})).catch((function(e){console.log("AXIOS ERROR: ",e)})),B("axe")}),[t,o,x]),Object(O.jsx)(r.Fragment,{children:ne?Object(O.jsx)(i.a,{}):Object(O.jsxs)("div",{style:{overflow:"hidden"},children:[Object(O.jsx)(j.a,{title:"PRODUCTS -- the henrys forge"}),Object(O.jsxs)("div",{className:"cateSearchBox",style:{background:"white"},children:[Object(O.jsxs)("div",{className:"filterFields",children:[Object(O.jsxs)("select",{value:R,onChange:function(e){return ce(I,N,e.target.value,_)},className:"categoryBox",style:{textTransform:"capitalize"},children:[Object(O.jsx)("option",{style:{textTransform:"capitalize"},value:"",children:"All"}),v.map((function(e){return Object(O.jsx)("option",{style:{textTransform:"capitalize"},value:e.name,children:e.name},e._id)}))]}),Object(O.jsxs)("div",{className:"sliderBox",children:[Object(O.jsxs)("div",{className:"price-slider",children:[Object(O.jsx)(f.a,{children:"Price"}),Object(O.jsx)(l.a,{value:N,onChange:function(e,t){return ce(I,t,R,_)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",min:0,max:5e3})]}),Object(O.jsxs)("div",{className:"rating-slider",children:[Object(O.jsx)(f.a,{component:"legend",children:"Ratings"}),Object(O.jsx)(l.a,{value:I,onChange:function(e,t){ce(t,N,R,_)},"aria-labelledby":"continuous-slider",valueLabelDisplay:"auto",min:0,max:5})]})]})]}),Object(O.jsx)("input",{type:"text",className:"searchInput",placeholder:"Search Product...",onChange:function(e){return ce(I,N,R,e.target.value)}})]}),Object(O.jsx)("h2",{className:"productsHeading",children:"Products"}),Object(O.jsx)("div",{className:"products",children:X&&X.map((function(e){return Object(O.jsx)(u.a,{product:e},e._id)}))}),V<=Z&&Object(O.jsx)("div",{className:"paginationBox",children:Object(O.jsx)(p.a,{activePage:w,itemsCountPerPage:V,totalItemsCount:Z,onChange:function(e){$(K.slice(e*V-V,e*V)),k(e)},nextPageText:"Next",prevPageText:"Prev",firstPageText:"1st",lastPageText:"Last",itemClass:"page-item",linkClass:"page-link",activeClass:"pageItemActive",activeLinkClass:"pageLinkActive"})})]})})}}}]);
//# sourceMappingURL=36.9b13d602.chunk.js.map