(this["webpackJsonprabbit-timer"]=this["webpackJsonprabbit-timer"]||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),i=c(4),r=c.n(i),s=(c(10),c(2)),u=c(5),j=c.n(u),b=c.p+"static/media/rabbit.c00e47da.gif",o=c.p+"static/media/carrot.f824eadc.jpg",l=(c(12),c(0));function O(t){t.timer;var e=t.setTimer,c=Object(n.useState)("00"),a=Object(s.a)(c,2),i=a[0],r=a[1],u=Object(n.useState)("30"),j=Object(s.a)(u,2),b=j[0],o=j[1],O=Object(n.useState)("00"),m=Object(s.a)(O,2),d=m[0],p=m[1];return Object(l.jsxs)("div",{className:"time-picker",children:[Object(l.jsx)("input",{type:"text",inputmode:"numeric",onChange:function(t){return r(t.target.value)},value:i}),Object(l.jsx)("input",{type:"text",inputmode:"numeric",onChange:function(t){return o(t.target.value)},value:b}),Object(l.jsx)("input",{type:"text",inputmode:"numeric",onChange:function(t){return p(t.target.value)},value:d}),Object(l.jsx)("button",{onClick:function(){return e("".concat(i,":").concat(b,":").concat(d))},children:"SET"})]})}function m(t){var e=t.timer,c=t.goBack,a=Object(n.useState)(1e3),i=Object(s.a)(a,2),r=i[0],u=i[1],O=Object(n.useState)(0),m=Object(s.a)(O,2),d=m[0],p=m[1],f=Object(n.useState)(0),v=Object(s.a)(f,2),x=v[0],h=v[1],g=Object(n.useState)(null),S=Object(s.a)(g,2),k=S[0],C=S[1];Object(n.useEffect)((function(){var t=e?e.split(":"):[0,0,0],c=Object(s.a)(t,3),n=c[0],a=c[1],i=c[2],r=60*parseInt(n)*60+60*parseInt(a)+parseInt(i);h(r),u(1e3),p(0),C(new Audio("./mario_game_over.mp3"))}),[e]),j()((function(){x&&d<x?p((function(t){return(t||0)+1})):(k&&k.play(),u(null))}),r);var N=x?Math.round(d/x*100):0,y="".concat(N,"%");return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)("button",{onClick:function(){u(1e3),p(0)},children:"RESET"}),Object(l.jsx)("button",{onClick:c,children:"BACK"})]}),Object(l.jsxs)("div",{className:"timer-container",children:[Object(l.jsx)("div",{className:"rabbit-container",children:Object(l.jsx)("img",{src:b,alt:"rabbit",className:"rabbit",style:{marginLeft:y}})}),Object(l.jsx)("div",{className:"progress",children:Object(l.jsx)("div",{className:"progress-fill",style:{width:y}})}),Object(l.jsx)("div",{className:"carrot-container",children:r&&Object(l.jsx)("img",{src:o,className:"carrot",alt:"carrot",width:"100"})})]})]})}var d=function(){var t=Object(n.useState)(""),e=Object(s.a)(t,2),c=e[0],a=e[1],i=Object(n.useState)("time-picker"),r=Object(s.a)(i,2),u=r[0],j=r[1];return Object(l.jsx)("div",{className:"app",children:"time-picker"===u?Object(l.jsx)(O,{timer:c,setTimer:function(t){a(t),j("timer")}}):Object(l.jsx)(m,{timer:c,goBack:function(){return j("time-picker")}})})},p=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;c(t),n(t),a(t),i(t),r(t)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.5c6420aa.chunk.js.map