(this["webpackJsonpdanny-employee-directory"]=this["webpackJsonpdanny-employee-directory"]||[]).push([[0],{43:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var c=r(2),a=r(13),n=r.n(a),s=r(17),l=r(4),i=r(14),o=r(15),h=r(19),j=r(18),d=r(0);var u=function(e){return Object(d.jsx)("form",{children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(d.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search Employee by their first name",id:"search"}),Object(d.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-danger mt-3",children:"Search"})]})})};var m=function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",children:Object(d.jsx)("img",{alt:e.firstName,src:e.picture})}),Object(d.jsx)("td",{children:e.firstName}),Object(d.jsx)("td",{children:e.lastName}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.phone}),Object(d.jsx)("td",{children:e.dob})]})},b=r(16),p=r.n(b),f=function(e){return p.a.get("https://randomuser.me/api/?results=100&nat=us")},O=(r(43),function(e){Object(h.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(i.a)(this,r);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={result:[],filter:"",currentSort:"default",sortField:"",filterBy:"lastName"},e.filterEmployees=function(t){console.log(e.state.result);var r=e.state.result.filter((function(e){return e.firstName===t}));e.setState({result:r})},e.handleFormSubmit=function(t){t.preventDefault();var r=t.target.name,c=t.target.value;e.filterEmployees(c),e.setState(Object(l.a)({},r,c)),e.filterEmployees(c),e.filterEmployees(e.state.search)},e.handleInputChange=function(t){var r=t.target.name,c=t.target.value;e.setState(Object(l.a)({},r,c))},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){console.log(t),e.setState({result:t.data.results.map((function(e,t){return{firstName:e.name.first,lastName:e.name.last,picture:e.picture.large,email:e.email,phone:e.phone,dob:e.dob.age,key:t}}))})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-md-12",children:Object(d.jsx)("h2",{children:"Employee Directory"})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)(u,{value:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("table",{className:"table",children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"Photo"}),Object(d.jsx)("th",{children:"First Name"}),Object(d.jsx)("th",{scope:"col",children:"Last Name "}),Object(d.jsx)("th",{scope:"col",children:"Email"}),Object(d.jsx)("th",{scope:"col",children:"Phone"}),Object(d.jsx)("th",{scope:"col",children:"Age"})]}),Object(s.a)(this.state.result).map((function(e){return Object(d.jsx)(m,{picture:e.picture,firstName:e.firstName,lastName:e.lastName,email:e.email,phone:e.phone,dob:e.dob},e.key)}))]})})]})}}]),r}(c.Component));var x=function(){return Object(d.jsx)(O,{})};r(44);n.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.18b6e479.chunk.js.map