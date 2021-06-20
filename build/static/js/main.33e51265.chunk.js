(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{10:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return j}));n(25);var r=n(15),c=n.n(r),a=n(22),o=n(17),u=n.n(o),s=n(3);u.a.defaults.baseURL="https://connections-api.herokuapp.com";var i=function(t){u.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){u.a.defaults.headers.common.Authorization=""},l={register:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(s.a.registerRequest()),e.prev=1,e.next=4,u.a.post("/users/signup",t);case 4:r=e.sent,i(r.data.token),n(s.a.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(s.a.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(s.a.loginRequest()),e.prev=1,e.next=4,u.a.post("/users/login",t);case 4:r=e.sent,i(r.data.token),n(s.a.loginSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(s.a.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(s.a.logoutRequest()),t.prev=1,t.next=4,u.a.post("/users/logout");case 4:b(),e(s.a.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(s.a.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return i(a),e(s.a.getCurrentUserRequest()),t.prev=5,t.next=8,u.a.get("/users/current");case 8:o=t.sent,e(s.a.getCurrentUserSuccess(o.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(s.a.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},j={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUsername:function(t){return t.auth.user.name}}},20:function(t,e,n){"use strict";n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return l})),n.d(e,"e",(function(){return j})),n.d(e,"d",(function(){return d}));var r=n(2),c=Object(r.b)("contacts/fetchContactsRequest"),a=Object(r.b)("contacts/fetchContactsSuccess"),o=Object(r.b)("contacts/fetchContactsError"),u=Object(r.b)("contacts/addContactsRequest"),s=Object(r.b)("contacts/addContactsSuccess"),i=Object(r.b)("contacts/addContactsError"),b=Object(r.b)("contacts/deleteContactsRequest"),l=Object(r.b)("contacts/deleteContactsSuccess"),j=Object(r.b)("contacts/deleteContactsError"),d=Object(r.b)("contacts/changeFilter")},25:function(t,e,n){"use strict";var r,c,a,o,u=n(4),s=n(7),i=n(2),b=n(3),l={name:null,email:null},j=Object(i.c)(l,(r={},Object(u.a)(r,b.a.registerSuccess,(function(t,e){return e.payload.user})),Object(u.a)(r,b.a.loginSuccess,(function(t,e){return e.payload.user})),Object(u.a)(r,b.a.logoutSuccess,(function(){return l})),Object(u.a)(r,b.a.getCurrentUserSuccess,(function(t,e){return e.payload})),r)),d=Object(i.c)(null,(c={},Object(u.a)(c,b.a.registerSuccess,(function(t,e){return e.payload.token})),Object(u.a)(c,b.a.loginSuccess,(function(t,e){return e.payload.token})),Object(u.a)(c,b.a.logoutSuccess,(function(){return null})),c)),O=function(t,e){return e.payload},g=Object(i.c)(null,(a={},Object(u.a)(a,b.a.registerError,O),Object(u.a)(a,b.a.loginError,O),Object(u.a)(a,b.a.logoutError,O),Object(u.a)(a,b.a.getCurrentUserError,O),a)),h=Object(i.c)(!1,(o={},Object(u.a)(o,b.a.registerSuccess,(function(){return!0})),Object(u.a)(o,b.a.loginSuccess,(function(){return!0})),Object(u.a)(o,b.a.getCurrentUserSuccess,(function(){return!0})),Object(u.a)(o,b.a.registerError,(function(){return!1})),Object(u.a)(o,b.a.loginError,(function(){return!1})),Object(u.a)(o,b.a.getCurrentUserError,(function(){return!1})),Object(u.a)(o,b.a.logoutSuccess,(function(){return!1})),o));e.a=Object(s.b)({user:j,isAuthenticated:h,token:d,error:g})},3:function(t,e,n){"use strict";var r=n(2),c=Object(r.b)("auth/registerRequest"),a=Object(r.b)("auth/registerSuccess"),o=Object(r.b)("auth/registerError"),u=Object(r.b)("auth/loginRequest"),s=Object(r.b)("auth/loginSuccess"),i=Object(r.b)("auth/loginError"),b=Object(r.b)("auth/logoutRequest"),l=Object(r.b)("auth/logoutSuccess"),j=Object(r.b)("auth/logoutError"),d=Object(r.b)("auth/getCurrentUserRequest"),O=Object(r.b)("auth/getCurrentUserSuccess"),g=Object(r.b)("auth/getCurrentUserError");e.a={registerRequest:c,registerSuccess:a,registerError:o,logoutRequest:b,logoutSuccess:l,logoutError:j,loginRequest:u,loginSuccess:s,loginError:i,getCurrentUserRequest:d,getCurrentUserSuccess:O,getCurrentUserError:g}},86:function(t,e,n){"use strict";n.r(e);var r,c=n(0),a=n.n(c),o=n(23),u=n.n(o),s=n(14),i=n(8),b=n(26),l=n(2),j=n(4),d=n(7),O=n(20),g=Object(l.c)([],(r={},Object(j.a)(r,O.j,(function(t,e){return e.payload})),Object(j.a)(r,O.c,(function(t,e){var n=e.payload;return[].concat(Object(b.a)(t),[n])})),Object(j.a)(r,O.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),h=Object(l.c)("",Object(j.a)({},O.d,(function(t,e){return e.payload}))),f=Object(d.b)({items:g,filter:h}),p=n(16),x=n(25),v=n(47),m=n.n(v),k=Object(b.a)(Object(l.d)({serializableCheck:{ignoredActions:[p.a,p.f,p.b,p.c,p.d,p.e]}})),y={key:"auth",storage:m.a,whitelist:["token"]},S=Object(l.a)({reducer:{auth:Object(p.g)(y,x.a),contacts:f},middleware:k}),C={store:S,persistor:Object(p.h)(S)},A=(n(60),n(34)),E=n(35),U=n(37),R=n(36),w=n(5),q=n(10),L=n(1),I={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},z=Object(i.b)((function(t){return{isAuthenticated:q.b.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(L.jsxs)("nav",{children:[Object(L.jsx)(s.b,{to:"/",exact:!0,style:I.link,activeStyle:I.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),e&&Object(L.jsx)(s.b,{to:"/contacts",exact:!0,style:I.link,activeStyle:I.activeLink,children:"Phonebook"})]})})),T=n.p+"static/media/girl-avatar.6e96ceb4.png",B={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12}},F={onLogout:q.a.logOut},W=Object(i.b)((function(t){return{name:q.b.getUsername(t),avatar:T}}),F)((function(t){var e=t.avatar,n=t.name,r=t.onLogout;return Object(L.jsxs)("div",{style:B.container,children:[Object(L.jsx)("img",{src:e,alt:"",width:"32",style:B.avatar}),Object(L.jsxs)("span",{style:B.name,children:["Welcome, ",n]}),Object(L.jsx)("button",{type:"button",onClick:r,children:"Logout"})]})})),D={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},G=function(){return Object(L.jsxs)("div",{children:[Object(L.jsx)(s.b,{to:"/register",exact:!0,style:D.link,activeStyle:D.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(L.jsx)(s.b,{to:"/login",exact:!0,style:D.link,activeStyle:D.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})},J={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}},M=Object(i.b)((function(t){return{isAuthenticated:q.b.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(L.jsxs)("header",{style:J.header,children:[Object(L.jsx)(z,{}),e?Object(L.jsx)(W,{}):Object(L.jsx)(G,{})]})})),P=n(18),H=n(27),K=["component","isAuthenticated","redirectTo"],N=Object(i.b)((function(t){return{isAuthenticated:q.b.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(H.a)(t,K);return Object(L.jsx)(w.b,Object(P.a)(Object(P.a)({},c),{},{render:function(t){return n?Object(L.jsx)(e,Object(P.a)({},t)):Object(L.jsx)(w.a,{to:r})}}))})),Q=["component","isAuthenticated","redirectTo"],V=Object(i.b)((function(t){return{isAuthenticated:q.b.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(H.a)(t,Q);return Object(L.jsx)(w.b,Object(P.a)(Object(P.a)({},c),{},{render:function(t){return n&&c.restricted?Object(L.jsx)(w.a,{to:r}):Object(L.jsx)(e,Object(P.a)({},t))}}))})),X=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,91))})),Y=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,92))})),Z=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,93))})),$=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,94))})),_=function(t){Object(U.a)(n,t);var e=Object(R.a)(n);function n(){return Object(A.a)(this,n),e.apply(this,arguments)}return Object(E.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(M,{}),Object(L.jsx)(c.Suspense,{fallback:Object(L.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),children:Object(L.jsxs)(w.d,{children:[Object(L.jsx)(V,{exact:!0,path:"/",component:X}),Object(L.jsx)(V,{exact:!0,path:"/register",restricted:!0,redirectTo:"/contacts",component:Y}),Object(L.jsx)(V,{exact:!0,path:"/login",restricted:!0,redirectTo:"/contacts",component:Z}),Object(L.jsx)(N,{path:"/contacts",component:$,redirectTo:"/login"})]})})]})}}]),n}(c.Component),tt={onGetCurrentUser:q.a.getCurrentUser},et=Object(i.b)(null,tt)(_),nt=n(49);u.a.render(Object(L.jsx)(a.a.StrictMode,{children:Object(L.jsx)(i.a,{store:C.store,children:Object(L.jsx)(nt.a,{loading:null,persistor:C.persistor,children:Object(L.jsx)(s.a,{children:Object(L.jsx)(et,{})})})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.33e51265.chunk.js.map