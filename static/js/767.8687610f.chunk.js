(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[767],{7767:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var a=n(9434),r=n(2791),s=n(2007),c=n.n(s),o="my-contact-list_item__nB3PH",i="my-contact-list_btn__3qYuQ",l=n(184),u=function(e){var t=e.deleteContact,n=e.contacts;console.log(n);var a=n.map((function(e){var n=e._id,a=e.name,r=e.phone;return(0,l.jsxs)("li",{className:o,children:[a,": ",r,(0,l.jsx)("button",{onClick:function(){return t(n)},className:i,children:"Delete"})]},n)}));return(0,l.jsx)("ul",{children:a})},m=u;u.defaultProps={contacts:[]},u.prototypes={onClick:c().func.isRequired,contacts:c().arrayOf(c().shape({id:c().string.isRequired,name:c().string.isRequired,number:c().string.isRequired}))};var p="my-contact-filter_input__UpVbo",d="my-contact-filter_formGroup__cCgh9",h=function(e){var t=e.handlFilter,n=e.value;return(0,l.jsx)("div",{className:d,children:(0,l.jsx)("input",{value:n,onChange:t,className:p,type:"text",name:"filter",placeholder:"Filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})})},f=h;h.prototypes={handlFilter:c().func.isRequired};var _=n(4942),v=n(1413),y=n(9439),x="my-contact-form_formGroup__uopK4",j="my-contact-form_input__fmH4z",b="my-contact-form_btn__aaHKj",C=function(e){var t=e.onSubmit,n=(0,r.useState)({name:"",phone:""}),a=(0,y.Z)(n,2),s=a[0],c=a[1],o=function(e){var t=e.target,n=t.name,a=t.value;c((function(e){return(0,v.Z)((0,v.Z)({},e),{},(0,_.Z)({},n,a))}))};return(0,l.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var n=s.name,a=s.phone;t({name:n,phone:a}),c({name:"",phone:""})},children:[(0,l.jsx)("div",{className:x,children:(0,l.jsx)("input",{type:"text",value:s.name,name:"name",onChange:o,className:j,placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,l.jsx)("div",{className:x,children:(0,l.jsx)("input",{onChange:o,value:s.phone,className:j,type:"tel",name:"phone",placeholder:"Phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,l.jsx)("button",{className:b,children:"Add contact"})]})},N=C;C.prototypes={onSubmit:c().func.isRequired};var g=n(30),k=n(5653),q=function(e){var t=e.contacts,n=e.filter;if(!n)return t.items;var a=n.toLocaleLowerCase();return t.items.filter((function(e){var t=e.name,n=e.phone;return t.toLocaleLowerCase().includes(a)||n.toLocaleLowerCase().includes(a)}))},w=function(e){return e.filter},A="my-contacts_wrapper__b-SwW",T="my-contacts_block__ETN8q",R="my-contacts_title__CmkMe",O="my-contacts_message__W9jiG",P=function(){var e=(0,a.v9)(q),t=(0,a.v9)(w),n=(0,a.I0)();(0,r.useEffect)((function(){n((0,g.CL)())}),[n]);return(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:R,children:"My contacts"}),(0,l.jsxs)("div",{className:A,children:[(0,l.jsxs)("div",{className:T,children:[(0,l.jsx)("h4",{className:R,children:"Name"}),(0,l.jsx)(N,{onSubmit:function(e){var t=e.name,a=e.phone,r=(0,g.v6)({name:t,phone:a});n(r)}})]}),(0,l.jsxs)("div",{className:T,children:[(0,l.jsx)("h4",{className:R,children:"Contacts"}),(0,l.jsx)(f,{value:t,handlFilter:function(e){var t=e.target,a=(0,k.T)(t.value);n(a)}}),(0,l.jsx)(m,{deleteContact:function(e){var t=(0,g.in)(e);n(t)},contacts:e}),!e.length&&(0,l.jsx)("p",{className:O,children:"No contacts in the list"})]})]})]})},S=function(){return(0,l.jsx)("div",{children:(0,l.jsx)(P,{})})}},888:function(e,t,n){"use strict";var a=n(9047);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,s,c){if(c!==a){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=767.8687610f.chunk.js.map