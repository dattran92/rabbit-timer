(this["webpackJsonprabbit-timer"]=this["webpackJsonprabbit-timer"]||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(4),i=c.n(r),s=(c(10),c(2)),j=c(5),b=c.n(j),u=c.p+"static/media/rabbit.c00e47da.gif",o=c.p+"static/media/carrot.f824eadc.jpg",l=(c(12),c(0));function O(t){t.timer;var e=t.setTimer,c=Object(n.useState)("00"),a=Object(s.a)(c,2),r=a[0],i=a[1],j=Object(n.useState)("30"),b=Object(s.a)(j,2),u=b[0],o=b[1],O=Object(n.useState)("00"),m=Object(s.a)(O,2),d=m[0],p=m[1];return Object(l.jsxs)("div",{className:"time-picker",children:[Object(l.jsx)("input",{type:"text",mode:"number",onChange:function(t){return i(t.target.value)},value:r}),Object(l.jsx)("input",{type:"text",mode:"number",onChange:function(t){return o(t.target.value)},value:u}),Object(l.jsx)("input",{type:"text",mode:"number",onChange:function(t){return p(t.target.value)},value:d}),Object(l.jsx)("button",{onClick:function(){return e("".concat(r,":").concat(u,":").concat(d))},children:"SET"})]})}function m(t){var e=t.timer,c=t.goBack,a=Object(n.useState)(1e3),r=Object(s.a)(a,2),i=r[0],j=r[1],O=Object(n.useState)(0),m=Object(s.a)(O,2),d=m[0],p=m[1],f=Object(n.useState)(0),v=Object(s.a)(f,2),x=v[0],h=v[1],g=Object(n.useState)(null),S=Object(s.a)(g,2),k=S[0],C=S[1];Object(n.useEffect)((function(){var t=e?e.split(":"):[0,0,0],c=Object(s.a)(t,3),n=c[0],a=c[1],r=c[2],i=60*parseInt(n)*60+60*parseInt(a)+parseInt(r);h(i),j(1e3),p(0),C(new Audio("./mario_game_over.mp3"))}),[e]),b()((function(){x&&d<x?p((function(t){return(t||0)+1})):(k&&k.play(),j(null))}),i);var N=x?Math.round(d/x*100):0,y="".concat(N,"%");return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)("button",{onClick:function(){j(1e3),p(0)},children:"RESET"}),Object(l.jsx)("button",{onClick:c,children:"BACK"})]}),Object(l.jsxs)("div",{className:"timer-container",children:[Object(l.jsx)("div",{className:"rabbit-container",children:Object(l.jsx)("img",{src:u,alt:"rabbit",className:"rabbit",style:{marginLeft:y}})}),Object(l.jsx)("div",{className:"progress",children:Object(l.jsx)("div",{className:"progress-fill",style:{width:y}})}),Object(l.jsx)("div",{className:"carrot-container",children:i&&Object(l.jsx)("img",{src:o,className:"carrot",alt:"carrot",width:"100"})})]})]})}var d=function(){var t=Object(n.useState)(""),e=Object(s.a)(t,2),c=e[0],a=e[1],r=Object(n.useState)("time-picker"),i=Object(s.a)(r,2),j=i[0],b=i[1];return Object(l.jsx)("div",{className:"app",children:"time-picker"===j?Object(l.jsx)(O,{timer:c,setTimer:function(t){a(t),b("timer")}}):Object(l.jsx)(m,{timer:c,goBack:function(){return b("time-picker")}})})},p=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),r(t),i(t)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.cbd92e23.chunk.js.map