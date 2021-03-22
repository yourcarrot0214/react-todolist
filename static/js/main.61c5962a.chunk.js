(this.webpackJsonpredux=this.webpackJsonpredux||[]).push([[0],{39:function(n,e,t){"use strict";t.r(e);var o,i,r,c,d,a,u,s,p,b,x,l,m,f,j,O,h,g,v,D,y,T=t(0),w=t.n(T),z=t(10),E=t.n(z),k=t(3),S=t(13),_=t(4),L=t(20),M=t.n(L),C={ADD_TODO:"ADD_TODO",COMPLETE_TODO:"COMPLETE_TODO",EDIT_TODO:"EDIT_TODO",REMOVE_TODO:"REMOVE_TODO"},F=function(n){return{hours:n.getHours(),minutes:n.getMinutes(),seconds:n.getSeconds()}},I=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(n){return e.reduce((function(n,e){return e(n)}),n)}},N=I(F,(function(n){return(100-(3600*n.hours+60*n.minutes+n.seconds)/86400*100).toFixed(1)}),(function(n){return"\uc624\ub298 \ud558\ub8e8\ub294 ".concat(n,"% \ub0a8\uc558\uc2b5\ub2c8\ub2e4.")})),A=I(F,(function(n){return{hours:n.hours<10?Number("0"+n.hours):n.hours,minutes:n.minutes<10?Number(n.minutes+"0"):n.minutes}})),R=t(2),J=t(1),P=R.d.div(o||(o=Object(k.a)(["\n  padding-top: 48px;\n  padding-left: 32px;\n  padding-right: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e9ecef;\n  h1 {\n    margin: 0;\n    font-size: 36px;\n    color: #343a40;\n  }\n  .day {\n    margin-top: 4px;\n    color: #868e96;\n    font-size: 21px;\n    height: 1rem;\n  }\n  .percentage {\n    color: #20c997;\n    font-size: 18px;\n    margin-top: 40px;\n    font-weight: bold;\n    height: 1rem;\n  }\n\n  @media "," {\n    padding-top: 24px;\n    padding-left: 12px;\n    padding-right: 12px;\n    padding-bottom: 6px;\n    h1 {\n      font-size: 24px;\n    }\n    .day {\n      margin-top: 12px;\n      font-size: 16px;\n    }\n    .percentage {\n      margin-top: 20px;\n      margin-bottom: 12px;\n    }\n  }\n"])),(function(n){return n.theme.mobile})),V=function(n){return setInterval((function(){var n=document.querySelector(".day"),e=document.querySelector(".percentage");n.innerText=(new Date).toLocaleTimeString(),e.innerText=N(new Date)}),1e3),Object(J.jsxs)(P,{children:[Object(J.jsx)("h1",{children:n.date}),Object(J.jsx)("div",{className:"day"}),Object(J.jsx)("div",{className:"percentage"})]})},q=w.a.memo(V),B=R.d.div(i||(i=Object(k.a)(["\n  flex: 1;\n  padding: 20px 32px;\n  padding-bottom: 48px;\n  overflow-y: auto;\n\n  @media "," {\n    padding: 12px 12px;\n  }\n"])),(function(n){return n.theme.mobile})),H=function(n){var e=n.todos;return Object(J.jsxs)(B,{children:[e.map((function(n){return Object(J.jsx)(ln,{todo:n},n.id)})),Object(J.jsx)(mn,{})]})},K=w.a.memo(H),G=t(5),Q=t(7),U=R.d.div(r||(r=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #dee2e6;\n  font-size: 24px;\n  margin-left: 12px;\n  cursor: pointer;\n  &:hover {\n    color: #ff6b6b;\n  }\n  display: none;\n\n  @media "," {\n    font-size: 16px;\n  }\n"])),(function(n){return n.theme.mobile})),W=R.d.div(c||(c=Object(k.a)(["\n  font-size: 16px;\n  color: #495057;\n  background: #38d9a9;\n  padding: 6px 6px;\n  margin-right: 2rem;\n  border-radius: 6px;\n\n  @media "," {\n    font-size: 12px;\n    padding: 4px 4px;\n    margin-right: 1rem;\n  }\n"])),(function(n){return n.theme.mobile})),X=R.d.div(d||(d=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  width: 100%;\n"]))),Y=R.d.div(a||(a=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  margin-bottom: 12px;\n  border-bottom: 1px solid #e9ecef;\n  &:hover {\n    "," {\n      display: initial;\n    }\n  }\n"])),U),Z=R.d.div(u||(u=Object(k.a)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 16px;\n  border: 1px solid #ced4da;\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  cursor: pointer;\n  ","\n\n  @media "," {\n    width: 18px;\n    height: 18px;\n    font-size: 16px;\n    margin-right: 12px;\n  }\n"])),(function(n){return n.done&&Object(R.c)(s||(s=Object(k.a)(["\n      border: 1px solid #38d9a9;\n      color: #38d9a9;\n    "])))}),(function(n){return n.theme.mobile})),$=R.d.div(p||(p=Object(k.a)(["\n  flex: 1;\n  font-size: 21px;\n  color: #495057;\n  ","\n  ","\n\n  @media "," {\n    font-size: 16px;\n  }\n"])),(function(n){return n.done&&Object(R.c)(b||(b=Object(k.a)(["\n      color: #ced4da;\n    "])))}),(function(n){return n.editmode&&Object(R.c)(x||(x=Object(k.a)(["\n      display: none;\n    "])))}),(function(n){return n.theme.mobile})),nn=R.d.form(l||(l=Object(k.a)([""]))),en=R.d.input(m||(m=Object(k.a)(["\n  display: none;\n  flex: 1;\n  outline: none;\n  font-size: 21px;\n  border: none;\n  ","\n\n  @media "," {\n    font-size: 16px;\n  }\n"])),(function(n){return n.editmode&&Object(R.c)(f||(f=Object(k.a)(["\n      display: inline-block;\n    "])))}),(function(n){return n.theme.mobile})),tn=function(n){var e=n.todo,t=n.editTodo,o=Object(T.useState)(!1),i=Object(G.a)(o,2),r=i[0],c=i[1],d=Object(T.useState)(!1),a=Object(G.a)(d,2),u=a[0],s=a[1],p=Object(T.useState)(e.text),b=Object(G.a)(p,2),x=b[0],l=b[1];return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(X,{children:[Object(J.jsx)(W,{children:"".concat(e.start.hours," : ").concat(e.start.minutes)}),e.end.minutes&&Object(J.jsx)(W,{children:"".concat(e.end.hours," : ").concat(e.end.minutes)}),function(n){var e=n.hours,t=n.minutes;return 0===e&&0===t||void 0===e&&void 0===t?"":0===e&&0!==t?Object(J.jsx)(W,{children:"Laptime ".concat(t,"\ubd84")}):Object(J.jsx)(W,{children:"Laptime ".concat(e,"\uc2dc\uac04 ").concat(t,"\ubd84")})}(e.lapse)]}),Object(J.jsxs)(Y,{children:[Object(J.jsx)(Z,{onClick:function(){n.completeTodo(n.todo.id,!r),c((function(n){return!n}))},done:e.done,children:e.done&&Object(J.jsx)(Q.c,{})}),Object(J.jsx)($,{editmode:u,done:e.done,children:e.text}),Object(J.jsx)(nn,{onSubmit:function(o){o.preventDefault(),e.text===x||t(n.todo.id,x),s(!u)},children:Object(J.jsx)(en,{editmode:u,onChange:function(n){l(n.target.value)},value:x,placeholder:e.text,autoFocus:!0})}),Object(J.jsx)(U,{children:Object(J.jsx)(Q.b,{onClick:function(){n.removeTodo(n.todo.id)}})}),Object(J.jsx)(U,{children:Object(J.jsx)(Q.d,{onClick:function(){s(!u)}})})]})]})},on=w.a.memo(tn),rn=R.d.button(j||(j=Object(k.a)(["\n  background: #38d9a9;\n  &:hover {\n    background: #63e6be;\n  }\n  &:active {\n    background: #20c997;\n  }\n\n  z-index: 5;\n  cursor: pointer;\n  width: 60px;\n  height: 60px;\n  display: block;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  position: absolute;\n  left: 50%;\n  bottom: 0px;\n  transform: translate(-50%, 50%);\n  color: white;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  transition: 0.125s all ease-in;\n  ","\n\n  @media "," {\n    width: 40px;\n    height: 40px;\n    font-size: 24px;\n  }\n"])),(function(n){return n.open&&Object(R.c)(O||(O=Object(k.a)(["\n      background: #ff6b6b;\n      &:hover {\n        background: #ff8787;\n      }\n      &:active {\n        background: #fa5252;\n      }\n      transform: translate(-50%, 50%) rotate(45deg);\n    "])))}),(function(n){return n.theme.mobile})),cn=R.d.div(h||(h=Object(k.a)(["\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n"]))),dn=R.d.form(g||(g=Object(k.a)(["\n  background: #f8f9fa;\n  padding-left: 32px;\n  padding-top: 32px;\n  padding-right: 32px;\n  padding-bottom: 72px;\n\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n  border-top: 1px solid #e9ecef;\n\n  @media "," {\n    padding-left: 12px;\n    padding-top: 20px;\n    padding-right: 12px;\n    padding-bottom: 30px;\n  }\n"])),(function(n){return n.theme.mobile})),an=R.d.input(v||(v=Object(k.a)(["\n  padding: 12px;\n  border-radius: 4px;\n  border: 1px solid #dee2e6;\n  width: 100%;\n  outline: none;\n  font-size: 18px;\n  box-sizing: border-box;\n\n  @media "," {\n    padding: 8px;\n    font-size: 14px;\n  }\n"])),(function(n){return n.theme.mobile})),un=function(n){var e=n.addTodo,t=Object(T.useState)(!1),o=Object(G.a)(t,2),i=o[0],r=o[1],c=Object(T.useState)(""),d=Object(G.a)(c,2),a=d[0],u=d[1];return Object(J.jsxs)(J.Fragment,{children:[i&&Object(J.jsx)(cn,{children:Object(J.jsx)(dn,{onSubmit:function(n){n.preventDefault(),e(a),u(""),r(!i)},children:Object(J.jsx)(an,{value:a,onChange:function(n){u(n.target.value)},autoFocus:!0,placeholder:"\ud560 \uc77c\uc744 \uc785\ub825 \ud6c4 Enter\ud0a4\ub97c \ub54c\ub9ac\uc138\uc694."})})}),Object(J.jsx)(rn,{onClick:function(){return r(!i)},open:i,children:Object(J.jsx)(Q.a,{})})]})},sn=w.a.memo(un),pn=function(n){return{addTodo:function(e){return n(function(n){return{type:C.ADD_TODO,id:M()(),text:n,done:!1,start:A(new Date)}}(e))},completeTodo:function(e,t){return n(function(n,e){return{type:C.COMPLETE_TODO,id:n,done:e,end:e?A(new Date):{}}}(e,t))},editTodo:function(e,t){return n(function(n,e){return{type:C.EDIT_TODO,id:n,text:e}}(e,t))},removeTodo:function(e){return n(function(n){return{type:C.REMOVE_TODO,id:n}}(e))}}},bn=Object(_.b)((function(n){return{date:n.date}}),null)(q),xn=Object(_.b)((function(n){return{todos:Object(S.a)(n.todos)}}),null)(K),ln=Object(_.b)(null,pn)(on),mn=Object(_.b)(null,pn)(sn),fn=Object(R.b)(D||(D=Object(k.a)(["\n  html {\n    height: 100%;\n  }\n  body {\n    box-sizing: border-box;\n    background: #e9ecef;\n  }\n"]))),jn=R.d.div(y||(y=Object(k.a)(["\n  width: 512px;\n  height: 768px;\n\n  position: relative;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);\n\n  margin: 0 auto;\n\n  margin-top: 32px;\n  margin-bottom: 32px;\n  display: flex;\n  flex-direction: column;\n\n  @media "," {\n    width: 300px;\n    height: 520px;\n    margin-top: 16px;\n  }\n\n  @media "," {\n    width: 720px;\n    height: 950px;\n    margin-top: 24px;\n  }\n"])),(function(n){return n.theme.mobile}),(function(n){return n.theme.tabletS}));function On(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(fn,{}),Object(J.jsxs)(jn,{children:[Object(J.jsx)(bn,{}),Object(J.jsx)(xn,{})]})]})}var hn=w.a.memo(On),gn=t(12),vn=t(9),Dn=function(n,e){var t=60*n.hours+n.minutes,o=(n.hours>e.hours?1440:60*e.hours+e.minutes)-t;return{hours:Math.floor(o/60),minutes:o%60}},yn={date:(new Date).toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric",weekday:"long"})},Tn=Object(gn.b)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case C.ADD_TODO:return[].concat(Object(S.a)(n),[{id:e.id,text:e.text,done:e.done,start:e.start,end:{},lapse:{}}]);case C.COMPLETE_TODO:return n.map((function(n){return n.id===e.id?Object(vn.a)(Object(vn.a)({},n),{},{done:e.done,end:e.end,lapse:e.done?Dn(n.start,e.end):{}}):n}));case C.EDIT_TODO:return n.map((function(n){return n.id===e.id?Object(vn.a)(Object(vn.a)({},n),{},{text:e.text}):n}));case C.REMOVE_TODO:return n.filter((function(n){return n.id!==e.id}));default:return n}}),localStorage["DayLine-store"]?JSON.parse(localStorage["DayLine-store"]):yn);Tn.subscribe((function(){return localStorage["DayLine-store"]=JSON.stringify(Tn.getState())}));var wn=Tn,zn="1023px",En="1220px",kn="1280px",Sn="1460px",_n="1700px",Ln={mobile:"(max-width: ".concat("767px",")"),tabletS:"(max-width: ".concat(zn,")"),tabletM:"(max-width: ".concat(En,")"),tabletL:"(max-width: ".concat(kn,")"),laptop:"(max-width: ".concat(Sn,")"),desktop:"(max-width: ".concat(_n,")")};E.a.render(Object(J.jsx)(w.a.StrictMode,{children:Object(J.jsx)(_.a,{store:wn,children:Object(J.jsx)(R.a,{theme:Ln,children:Object(J.jsx)(hn,{})})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.61c5962a.chunk.js.map