(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__sMvqy",filterInput:"Filter_filterInput__2dFcj"}},16:function(t,e,n){t.exports={contactListItem:"ContactItem_contactListItem__2HXUo",deleteContactBtn:"ContactItem_deleteContactBtn__4Sa1i"}},19:function(t,e,n){t.exports={contactList:"ContactList_contactList__17s1G"}},41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),s=n(3),i=n(17),l=n(12),u=n.n(l),b=n(4),j=Object(b.b)("phonebook/save"),d=Object(b.b)("phonebook/delete"),m=(Object(b.b)("phonebook/filter"),Object(b.b)("phonebook/changeFilter")),f=n(6),O=n.n(f),h=n(1);function p(){var t=Object(a.useState)(""),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),l=o[0],b=o[1],d=Object(s.c)((function(t){return t.contacts.items})),m=Object(s.b)(),f=function(){c(""),b("")},p=function(){return d.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))},x=function(t){alert("".concat(t," is already in your contacts!")),f()},_=u.a.generate(),v=u.a.generate();return Object(h.jsxs)("form",{className:O.a.form,onSubmit:function(t){t.preventDefault();var e={id:u.a.generate(),name:n,number:l};void 0===p()?(m(j(e)),f()):x(n)},children:[Object(h.jsx)("label",{className:O.a.label,htmlFor:_,children:"Name"}),Object(h.jsx)("input",{id:_,className:O.a.input,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(t){return c(t.target.value)}}),Object(h.jsx)("label",{className:O.a.label,htmlFor:v,children:"Number"}),Object(h.jsx)("input",{id:v,className:O.a.input,type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(t){return b(t.target.value)}}),Object(h.jsx)("button",{className:O.a.formBtn,type:"submit",children:"Add contact"})]})}var x=n(15),_=n.n(x);function v(){var t=Object(s.c)((function(t){return t.contacts.filter})),e=Object(s.b)();return Object(h.jsxs)("label",{className:_.a.filterLabel,children:["Find contacts by name",Object(h.jsx)("input",{type:"text",value:t,className:_.a.filterInput,onChange:function(t){return e(m(t.target.value))},onBlur:function(t){return e(m(""))}})]})}var g=n(16),C=n.n(g);function y(t){var e=t.name,n=t.phoneNumber,a=t.onDeleteBtn;return Object(h.jsxs)("li",{className:C.a.contactListItem,children:[Object(h.jsxs)("p",{children:[e,": ",Object(h.jsx)("span",{children:n})]}),Object(h.jsx)("button",{className:C.a.deleteContactBtn,type:"button",onClick:a,children:"Delete"})]})}var N=n(19),L=n.n(N);function k(){var t=Object(s.c)((function(t){return t.contacts.items})),e=Object(s.c)((function(t){return t.contacts.filter})),n=Object(s.b)(),a=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return Object(h.jsx)("ul",{className:L.a.contactList,children:a.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsx)(y,{name:a,phoneNumber:c,onDeleteBtn:function(){return n(d(e))}},e)}))})}function F(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(p,{}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(v,{}),Object(h.jsx)(k,{})]})}var w,B=n(2),I=n(5),A=n(20),z=n.n(A),D=n(7),S=n(22),q=Object(b.c)([],(w={},Object(D.a)(w,j,(function(t,e){return[].concat(Object(S.a)(t),[e.payload])})),Object(D.a)(w,d,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),w)),J=Object(b.c)("",Object(D.a)({},m,(function(t,e){return e.payload}))),M=Object(B.b)({items:q,filter:J}),Z={key:"savedContacts",storage:z.a,whitelist:["items"]},P=Object(B.b)({contacts:Object(I.g)(Z,M)}),E=Object(b.a)({reducer:P,middleware:function(t){return t({serializableCheck:{ignoredActions:[I.a,I.f,I.b,I.c,I.d,I.e]}})}}),G=Object(I.h)(E),H=n(21);n(41);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(s.a,{store:E,children:Object(h.jsx)(H.a,{loading:null,persistor:G,children:Object(h.jsx)(F,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"Form_form__3gnDr",label:"Form_label__3I5kx",input:"Form_input__h2x9p",formBtn:"Form_formBtn__1YwuI"}}},[[42,1,2]]]);
//# sourceMappingURL=main.664beece.chunk.js.map