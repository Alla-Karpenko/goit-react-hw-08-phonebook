(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{92:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a(34),s=a(35),i=a(37),r=a(36),o=a(0),c=a(8),h=a(10),b=a(1),u={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},p=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={name:"",email:"",password:""},e.handleChange=function(t){var a=t.target,l=a.name,s=a.value;e.setState(Object(n.a)({},l,s))},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.password;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,style:u.form,autoComplete:"off",children:[Object(b.jsxs)("label",{style:u.label,children:["\u0418\u043c\u044f",Object(b.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleChange})]}),Object(b.jsxs)("label",{style:u.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(b.jsx)("input",{type:"email",name:"email",value:a,onChange:this.handleChange})]}),Object(b.jsxs)("label",{style:u.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(b.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange})]}),Object(b.jsx)("button",{type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})}}]),a}(o.Component),j={onRegister:h.a.register};t.default=Object(c.b)(null,j)(p)}}]);
//# sourceMappingURL=6.086a5492.chunk.js.map