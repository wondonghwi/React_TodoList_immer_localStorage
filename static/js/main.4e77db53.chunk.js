(this.webpackJsonptodolist_localstorage=this.webpackJsonptodolist_localstorage||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(1),a=c.n(o),s=c(5),i=c.n(s),r=(c(13),c(2)),l=(c(14),function(e){var t=e.children;return Object(n.jsxs)("div",{className:"TodoTemplate",children:[Object(n.jsx)("div",{className:"app-title",children:"\uc77c\uc815\uad00\ub9ac"}),Object(n.jsx)("div",{className:"content",children:t})]})}),j=(c(15),c(18)),u=function(e){var t=e.onInsert,c=Object(o.useState)(""),a=Object(r.a)(c,2),s=a[0],i=a[1],l=Object(o.useCallback)((function(e){i(e.target.value)}),[]),u=Object(o.useCallback)((function(e){e.preventDefault(),t(s),i("")}),[t,s]);return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{className:"TodoInsert",onSubmit:u,children:[Object(n.jsx)("input",{onChange:l,value:s,placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud558\uc138\uc694"}),Object(n.jsx)("button",{type:"submit",children:Object(n.jsx)(j.a,{})})]})})},d=(c(16),c(6)),b=c.n(d),O=function(e){var t=e.todos,c=e.onRemove,a=e.onToggle,s=Object(o.useCallback)((function(){return t.map((function(e){var t=e.id,o=e.text,s=e.checked;return Object(n.jsxs)("div",{className:"TodoList",children:[Object(n.jsxs)("div",{className:b()("checkbox",{checked:s}),onClick:function(){return a(t)},children:[s?Object(n.jsx)(j.b,{}):Object(n.jsx)(j.c,{}),Object(n.jsx)("div",{className:"text",children:o})]}),Object(n.jsx)("div",{className:"remove",onClick:function(){return c(t)},children:Object(n.jsx)(j.d,{})})]},t)}))}),[c,a,t]);return Object(n.jsx)(n.Fragment,{children:s()})},f=a.a.memo(O),h=c(3),m=function(){var e=localStorage.getItem("todos");e=e?JSON.parse(localStorage.getItem("todos")||[]):localStorage.getItem("todos")||[];var t=Object(o.useState)(e),c=Object(r.a)(t,2),a=c[0],s=c[1],i=Object(o.useState)(Math.random().toString(36)),j=Object(r.a)(i,2),d=j[0],b=j[1],O=Object(o.useCallback)((function(e){var t={id:d,text:e,checked:!1};s(Object(h.a)(a,(function(e){e.push(t)}))),b(Math.random().toString(36))}),[d,a]),m=Object(o.useCallback)((function(e){s(Object(h.a)(a,(function(t){t.splice(t.findIndex((function(t){return t.id===e})),1)})))}),[a]),x=Object(o.useCallback)((function(e){s(Object(h.a)(a,(function(t){var c=t.find((function(t){return t.id===e}));c.checked=!c.checked})))}),[a]);return Object(o.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(a))}),[a]),Object(n.jsx)("div",{children:Object(n.jsxs)(l,{children:[Object(n.jsx)(u,{onInsert:O}),Object(n.jsx)(f,{todos:a,onRemove:m,onToggle:x})]})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),o(e),a(e),s(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),x()}],[[17,1,2]]]);
//# sourceMappingURL=main.4e77db53.chunk.js.map