(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{110:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(21),c=t(26),i=t(71),u=t(73),s=t.n(u),o=t(74),m=t(70),d=t(75),k=t(3),p=t.n(k),E=t(16),g=Object(c.b)((function(e){return e}),(function(e){return e(E.d),{fetchClientes:function(){e(E.d)}}}))((function(e){var a=Object(l.useState)(!1),t=Object(m.a)(a,2),c=t[0],i=t[1],u=Object(l.useState)({toggle:!1,msg:null,type:null}),k=Object(m.a)(u,2),E=k[0],g=k[1],v=Object(d.a)({accept:".xls, .csv, .xlsx",multiple:!1,onDrop:function(a){g({toggle:!1});var t=new FormData;a.forEach(function(){var a=Object(o.a)(s.a.mark((function a(l){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.append("file",l),a.next=3,p.a.post("https://www.sundelimpieza.com/api/filesClientes/uploadClientes",t).then((function(e){i(!0),setTimeout((function(){g({toggle:!0,msg:e.data,type:"uk-alert-success"})}),3e3)})).catch((function(e){g({toggle:!0,msg:"No fue posible realizar la importaci\xf3n",type:"uk-alert-danger"})})).finally((function(){setTimeout((function(){i(!1),e.fetchClientes()}),3e3)}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}}),b=v.acceptedFiles,f=v.rejectedFiles,h=v.getRootProps,N=v.getInputProps,x=v.isDragActive,y=b.map((function(e){return n.a.createElement("li",{key:e.path},e.path," - ",e.size," bytes")})),C=f.map((function(e){return n.a.createElement("li",{key:e.path},e.path," - ",e.size," bytes")})),O=E.toggle,w=E.msg,j=E.type;return n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"uk-width-1-1 uk-text-center"},O&&n.a.createElement("div",{className:j+" uk-alert","uk-alert":"true"},n.a.createElement("p",null,w))),n.a.createElement("div",{className:"uk-alert-warning","uk-alert":"true"},n.a.createElement(r.b,{to:"static/files/BaseClientes.xlsx",target:"_blank",download:!0,style:{textDecoration:"none"}},"Descargar archivo base para la importaci\xf3n de clientes...")),n.a.createElement("div",h(),n.a.createElement("input",N()),n.a.createElement("div",{className:"js-upload uk-placeholder uk-text-center"},c?n.a.createElement("span",{"uk-spinner":"ratio: 2.3"}):n.a.createElement("span",{className:"uk-color-pink-bold","uk-icon":"icon: cloud-upload; ratio: 3.5"}),x&&n.a.createElement("h6",{className:"uk-card-title uk-color-pink-bold uk-text-bold"},"Suelte el achivo aqu\xed..."),!x&&n.a.createElement("h6",{className:"uk-card-title uk-color-pink-bold uk-text-bold"},"Arrastre y suelte un archivo aqu\xed.."))),n.a.createElement("div",{className:"uk-grid-collapse uk-child-width-expand@s uk-margin-small-top uk-text-center","uk-grid":"true"},n.a.createElement("div",null,n.a.createElement("p",{className:"uk-text-small uk-text-bold uk-margin-small-top"},"Archivos Aceptados"),n.a.createElement("ul",{className:"uk-list uk-list-large uk-list-divider uk-text-small"},y)),n.a.createElement("div",null,n.a.createElement("p",{className:"uk-text-small uk-text-bold uk-margin-small-top"},"Archivos Rechazados"),n.a.createElement("ul",{className:"uk-list uk-list-large uk-list-divider uk-text-small"},C))))})),v=t(82),b=t.n(v),f=t(83),h=t.n(f),N=Object(c.b)((function(e){return{clientes:e.clientes.array,fetching:e.clientes.isFetching}}),(function(e){return e(E.d),{fetchClientes:function(){e(E.d)}}}))((function(e){var a={columns:[{name:"R. SOCIAL",selector:"RazonSocial",sortable:!0},{name:"DOMICILIO",selector:"Domicilio",sortable:!0},{name:"LOCALIDAD",selector:"Localidad",sortable:!0},{name:"PROVINCIA",selector:"Provincia",sortable:!0},{name:"TELEFONO",selector:"Telefono",sortable:!0}],data:e.clientes};return n.a.createElement(l.Fragment,null,e.fetching?n.a.createElement("span",{"uk-spinner":"ratio: 4.5"}):n.a.createElement(h.a,Object.assign({className:"uk-margin-large-bottom"},a),n.a.createElement(b.a,{noHeader:!0,defaultSortField:"id",defaultSortAsc:!1,pointerOnHover:!0,pagination:!0,highlightOnHover:!0,expandableRows:!0,expandableRowsComponent:n.a.createElement((function(e){var a=e.data;return n.a.createElement("table",{className:"uk-table uk-table-middle uk-table-small"},n.a.createElement("tbody",{className:"uk-text-meta uk-text-justify"},n.a.createElement("tr",null,n.a.createElement("td",null,a.RazonSocial),n.a.createElement("td",null,"Domicilio ",a.Domicilio),n.a.createElement("td",null,"Localidad ",a.Localidad),n.a.createElement("td",null,"Prov. ",a.Provincia)),n.a.createElement("tr",null,n.a.createElement("td",null,"Tel. ",a.Telefono),n.a.createElement("td",null,"Cod. Postal ",a.CodigoPostal),n.a.createElement("td",null,"CUIT: ",a.CUIT),n.a.createElement("td",null,"Condici\xf3n IVA: ",a.CondicionIVA))))}),null)})))}));a.default=Object(c.b)((function(e){return e}))((function(e){return n.a.createElement(l.Fragment,null,n.a.createElement(i.a,null),n.a.createElement("div",{className:"uk-grid-small uk-child-width-expand@s uk-text-center uk-margin-medium uk-padding-remove-vertical uk-animation-fade","uk-grid":"true"},n.a.createElement("div",null,n.a.createElement("div",{className:"uk-container uk-container-expand"},n.a.createElement("h2",{className:"uk-margin-small uk-text-uppercase uk-text-bold"},"Mis Clientes"),n.a.createElement("h4",{className:"uk-margin-small"},"Gestion\xe1 todos tus clientes sin perder tiempo!..")))),n.a.createElement("div",{className:"uk-grid uk-child-width-1-1@s uk-text-center uk-padding-large uk-padding-remove-top uk-animation-fade","uk-grid":"true"},n.a.createElement("div",null,n.a.createElement("ul",{className:"uk-flex-center uk-margin-remove-vertical","uk-tab":"connect: #component-tab-left; animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium"},n.a.createElement("li",{className:"uk-text-bold"},n.a.createElement(r.b,{to:"#"},"LISTAR")),n.a.createElement("li",{className:"uk-text-bold"},n.a.createElement(r.b,{to:"#"},"IMPORTAR"))),n.a.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-body"},n.a.createElement("ul",{id:"component-tab-left",className:"uk-switcher"},n.a.createElement("li",null,n.a.createElement(N,null)),n.a.createElement("li",null,n.a.createElement(g,null)))))),n.a.createElement("div",{id:"offcanvas-nav-primary","uk-offcanvas":"mode: push;overlay: true"},n.a.createElement("div",{className:"uk-offcanvas-bar uk-flex uk-flex-column"},n.a.createElement("ul",{className:"uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical"},n.a.createElement("li",{className:"uk-active"},n.a.createElement("img",{className:"uk-border-circle uk-padding-small",src:"../static/images/avatar.jpg",width:"200",height:"200",alt:"Border circle"})),n.a.createElement("li",{className:"uk-nav-header"},"Men\xfa"),n.a.createElement("li",null,n.a.createElement(r.b,{to:"#"}," Mi Perfil")),n.a.createElement("li",null,n.a.createElement(r.b,{to:"#"}," Suscripci\xf3n")),n.a.createElement("li",null,n.a.createElement(r.b,{to:"#"}," Configuraci\xf3n")),n.a.createElement("li",{className:"uk-nav-divider"}),n.a.createElement("li",null,n.a.createElement(r.b,{to:"#"},"Cerrar Sesi\xf3n"))))))}))},71:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(21);a.a=function(){return n.a.createElement(l.Fragment,null,n.a.createElement("div",{"uk-sticky":"sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar"},n.a.createElement("nav",{className:"uk-navbar-container uk-padding uk-padding-remove-vertical uk-animation-slide-top-small","uk-navbar":"true"},n.a.createElement("div",{className:"uk-navbar-left"},n.a.createElement(r.b,{className:"uk-navbar-toggle",to:"#","uk-toggle":"target: #offcanvas-nav-primary"},n.a.createElement("span",{"uk-navbar-toggle-icon":"true","uk-tooltip":"title: Men\xfa; pos: bottom"}))),n.a.createElement("div",{className:"uk-navbar-center"},n.a.createElement(r.b,{to:"#",className:"uk-navbar-item uk-logo"},n.a.createElement("img",{src:"static/images/logo.png",alt:"logo",width:"100"}))),n.a.createElement("div",{className:"uk-navbar-right"},n.a.createElement("ul",{className:"uk-iconnav"},n.a.createElement("li",{className:"uk-margin-small-right"},n.a.createElement(r.b,{to:"#","uk-icon":"icon: bell; ratio: 1.2","uk-tooltip":"title: Notificaciones; pos: bottom"})))))))}}}]);
//# sourceMappingURL=7.63c3b591.chunk.js.map