(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[1],{12:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return u}));var n=a(8),r=a.n(n),c="GET_USER_REQUEST",i="GET_USER_SUCCESS",u="GET_USER_ERROR";t.d=function(e){e({type:c}),r.a.get("https://www.sundelimpieza.com/api/usuarios/all").then((function(t){e({type:i,payload:t.data})})).catch((function(t){e({type:u,payload:t.data})}))}},16:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return u}));var n=a(8),r=a.n(n),c="FETCH_CLIENTES_REQUEST",i="FETCH_CLIENTES_SUCCESS",u="FETCH_CLIENTES_ERROR";t.d=function(e){e({type:c}),r.a.get("https://www.sundelimpieza.com/api/clientes/all").then((function(t){e({type:i,payload:t.data})})).catch((function(t){e({type:u,erorr:t.toString()})}))}},17:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return u}));var n=a(8),r=a.n(n),c="FETCH_PRODUCTOS_REQUEST",i="FETCH_PRODUCTOS_SUCCESS",u="FETCH_PRODUCTOS_ERROR";t.d=function(e){e({type:c}),r.a.get("https://www.sundelimpieza.com/api/productos/all").then((function(t){e({type:i,payload:t.data})})).catch((function(t){e({type:u,erorr:t.toString()})}))}},18:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return l}));var n=a(8),r=a.n(n),c=a(12),i="LOGIN_USER_REQUEST",u="LOGIN_USER_SUCCESS",l="LOGIN_USER_ERROR";t.d=function(e){return function(t){t({type:i}),r.a.post("https://www.sundelimpieza.com/api/usuarios/register",e).then((function(e){t({type:u,payload:e.data})})).catch((function(e){t({type:l,payload:e.data})})).finally((function(){t(c.d)}))}}},40:function(e,t,a){e.exports=a(67)},65:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),u=a(19),l=a(24),o=a(10),s=a(37),d=a(2),p=a(16),E={array:[],isFetching:!1};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.b:return Object(d.a)({},e,{isFetching:!0});case p.c:return Object(d.a)({},e,{isFetching:!1,array:t.payload});case p.a:return Object(d.a)({},e,{isFetching:!1});default:return e}},h=a(17),m={array:[],isFetching:!1};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.b:return Object(d.a)({},e,{isFetching:!0});case h.c:return Object(d.a)({},e,{isFetching:!1,array:t.payload});case h.a:return Object(d.a)({},e,{isFetching:!1});default:return e}},b=a(18),v={array:[],isFetching:!1};var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.b:return Object(d.a)({},e,{isFetching:!0});case b.c:return Object(d.a)({},e,{isFetching:!1,array:t.payload});case b.a:return Object(d.a)({},e,{isFetching:!1});default:return e}},S=a(12),g={array:[],isFetching:!1};var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.b:return Object(d.a)({},e,{isFetching:!0});case S.c:return Object(d.a)({},e,{isFetching:!1,array:t.payload});case S.a:return Object(d.a)({},e,{isFetching:!1});default:return e}},_=Object(o.c)({clientes:f,productos:y,signup:O,users:k}),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,F=Object(o.e)(_,R(Object(o.a)(s.a))),j=a(9),C=(a(65),Object(n.lazy)((function(){return a.e(4).then(a.bind(null,90))}))),T=Object(n.lazy)((function(){return a.e(8).then(a.bind(null,86))})),w=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,87))})),U=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,91))})),N=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,89))})),z=Object(n.lazy)((function(){return a.e(9).then(a.bind(null,88))})),I=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"uk-position-center uk-overlay uk-overlay-default"},r.a.createElement("span",{"uk-spinner":"ratio: 4.5"}))},r.a.createElement(C,null))),r.a.createElement(j.a,{path:"/perfil"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"uk-position-center uk-overlay uk-overlay-default"},r.a.createElement("span",{"uk-spinner":"ratio: 4.5"}))},r.a.createElement(T,null))),r.a.createElement(j.a,{exact:!0,path:"/dashboard"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"uk-position-center uk-overlay uk-overlay-default"},r.a.createElement("span",{"uk-spinner":"ratio: 4.5"}))},r.a.createElement(w,null))),r.a.createElement(j.a,{exact:!0,path:"/dashboard-clientes"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"uk-position-center uk-overlay uk-overlay-default"},r.a.createElement("span",{"uk-spinner":"ratio: 4.5"}))},r.a.createElement(U,null))),r.a.createElement(j.a,{exact:!0,path:"/dashboard-productos"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"uk-position-center uk-overlay uk-overlay-default"},r.a.createElement("span",{"uk-spinner":"ratio: 4.5"}))},r.a.createElement(N,null))),r.a.createElement(j.a,{exact:!0,path:"/dashboard-precios"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"uk-position-center uk-overlay uk-overlay-default"},r.a.createElement("span",{"uk-spinner":"ratio: 4.5"}))},r.a.createElement(z,null)))))};i.a.render(r.a.createElement(l.a,{store:F},r.a.createElement(u.a,null,r.a.createElement(I,null))),document.getElementById("root"))}},[[40,2,3]]]);
//# sourceMappingURL=main.e2128f1e.chunk.js.map