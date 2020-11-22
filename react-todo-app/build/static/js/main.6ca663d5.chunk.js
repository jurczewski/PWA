(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),l=n(7),i=n.n(l),o=(n(15),n(4)),d=n(8),r=n(2),b=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),s=n[0],l=n[1],i=Object(c.useState)(""),o=Object(r.a)(i,2),d=o[0],b=o[1];var u=Object(a.jsxs)("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),l(!1),""!==d&&(e.editTask(e.id,d),b(""))},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)("label",{className:"todo-label",htmlFor:e.id,children:["New name for ",e.name]}),Object(a.jsx)("input",{id:e.id,className:"todo-text",type:"text",value:d,onChange:function(e){b(e.target.value)}})]}),Object(a.jsxs)("div",{className:"btn-group",children:[Object(a.jsxs)("button",{type:"button",className:"btn todo-cancel",onClick:function(){return l(!1)},children:["Cancel",Object(a.jsxs)("span",{className:"visually-hidden",children:["renaming ",e.name]})]}),Object(a.jsxs)("button",{type:"submit",className:"btn btn__primary todo-edit",children:["Save",Object(a.jsxs)("span",{className:"visually-hidden",children:["new name for ",e.name]})]})]})]}),j=Object(a.jsxs)("div",{className:"stack-small",children:[Object(a.jsxs)("div",{className:"c-cb",children:[Object(a.jsx)("input",{id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),Object(a.jsx)("label",{className:"todo-label",htmlFor:e.id,children:e.name})]}),Object(a.jsxs)("div",{className:"btn-group",children:[Object(a.jsxs)("button",{type:"button",className:"btn",onClick:function(){return l(!0)},children:["Edit ",Object(a.jsx)("span",{className:"visually-hidden",children:e.name})]}),Object(a.jsxs)("button",{type:"button",className:"btn btn__danger",onClick:function(){return e.deleteTask(e.id)},children:["Delete ",Object(a.jsx)("span",{className:"visually-hidden",children:e.name})]})]})]});return Object(a.jsx)("li",{className:"todo",children:s?u:j})},u=function(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),s=n[0],l=n[1];return Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==s&&(e.addTask(s),l(""))},children:[Object(a.jsx)("h2",{className:"label-wrapper",children:Object(a.jsx)("label",{htmlFor:"new-todo-input",className:"label__lg",children:"What needs to be done?"})}),Object(a.jsx)("input",{type:"text",id:"new-todo-input",className:"input input__lg",name:"text",autoComplete:"off",value:s,onChange:function(e){l(e.target.value)}}),Object(a.jsx)("button",{type:"submit",className:"btn btn__primary btn__lg",children:"Add"})]})},j=function(e){return Object(a.jsxs)("button",{type:"button",className:"btn toggle-btn","aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)},children:[Object(a.jsx)("span",{className:"visually-hidden",children:"Show "}),Object(a.jsx)("span",{children:e.name}),Object(a.jsx)("span",{className:"visually-hidden",children:" tasks"})]})},m=n(9),p={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},h=Object.keys(p);var O=function(e){var t=Object(c.useState)("All"),n=Object(r.a)(t,2),s=n[0],l=n[1],i=h.map((function(e){return Object(a.jsx)(j,{name:e,isPressed:e===s,setFilter:l},e)})),O=Object(c.useState)(e.tasks),x=Object(r.a)(O,2),f=x[0],g=x[1],v=f.filter(p[s]).map((function(e){return Object(a.jsx)(b,{id:e.id,name:e.name,completed:e.completed,toggleTaskCompleted:N,deleteTask:k,editTask:y},e.id)}));function N(e){var t=f.map((function(t){return e===t.id?Object(o.a)(Object(o.a)({},t),{},{completed:!t.completed}):t}));g(t)}function k(e){var t=f.filter((function(t){return e!==t.id}));g(t)}function y(e,t){var n=f.map((function(n){return e===n.id?Object(o.a)(Object(o.a)({},n),{},{name:t}):n}));g(n)}var C=1!==v.length?"tasks":"task",S="".concat(v.length," ").concat(C," remaining");return Object(a.jsxs)("div",{className:"todoapp stack-large",children:[Object(a.jsx)("h1",{children:"TodoApp"}),Object(a.jsx)(u,{addTask:function(e){var t={id:"todo-"+Object(m.a)(),name:e,completed:!1};g([].concat(Object(d.a)(f),[t]))}}),Object(a.jsx)("div",{className:"filters btn-group stack-exception",children:i}),Object(a.jsx)("h2",{id:"list-heading",children:S}),Object(a.jsx)("ul",{className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading",children:v})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),s(e),l(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{tasks:[{id:"todo-0",name:"Eat",completed:!0},{id:"todo-1",name:"Sleep",completed:!1},{id:"todo-2",name:"Repeat",completed:!1}]})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.6ca663d5.chunk.js.map