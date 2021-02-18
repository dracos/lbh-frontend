(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{122:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return h}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=p(t),m=r,h=b["".concat(o,".").concat(m)]||b[m]||s[m]||a;return t?i.a.createElement(h,l(l({ref:n},c),{},{components:t})):i.a.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(7),a=(t(0),t(122)),o={title:"Input"},l={unversionedId:"lbh/components/lbh-input/README",id:"lbh/components/lbh-input/README",isDocsHomePage:!1,title:"Input",description:"Use an accordion to make a large amount of content easily digestible.",source:"@site/docs/lbh/components/lbh-input/README.md",slug:"/lbh/components/lbh-input/README",permalink:"/LBH-frontend/lbh/components/lbh-input/README",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/master/docs/lbh/components/lbh-input/README.md",version:"current",sidebar:"someSidebar",previous:{title:"Generating components",permalink:"/LBH-frontend/developing/generating-components"},next:{title:"Input",permalink:"/LBH-frontend/lbh/components/lbh-input/README"}},u=[{value:"Input",id:"input",children:[{value:"HTML",id:"html",children:[]},{value:"Nunjucks",id:"nunjucks",children:[]}]},{value:"With hint text",id:"with-hint-text",children:[{value:"HTML",id:"html-1",children:[]},{value:"Nunjucks",id:"nunjucks-1",children:[]}]}],c={toc:u};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use an accordion to make a large amount of content easily digestible."),Object(a.b)("p",null,"Consider using an accordion where a user might only be interested in one or two sections of the content."),Object(a.b)("p",null,"If the content should be explored in a particular order, consider using pages instead."),Object(a.b)("h2",{id:"input"},"Input"),Object(a.b)("div",{class:"govuk-form-group lbh-form-group"},Object(a.b)("label",{class:"govuk-label  lbh-label",for:"input-example"},"National Insurance number"),Object(a.b)("input",{class:"govuk-input  lbh-input",id:"input-example",name:"test-name",type:"text"})),Object(a.b)("h3",{id:"html"},"HTML"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<div class="govuk-form-group lbh-form-group">\n  <label class="govuk-label  lbh-label" for="input-example">\n    National Insurance number\n  </label>\n  <input\n    class="govuk-input  lbh-input"\n    id="input-example"\n    name="test-name"\n    type="text"\n  />\n</div>\n')),Object(a.b)("h3",{id:"nunjucks"},"Nunjucks"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{% from "lbh-input/macro.njk" import lbhInput %}\n\n{{ lbhInput({\n  "label": {\n    "text": "National Insurance number"\n  },\n  "id": "input-example",\n  "name": "test-name"\n}) }}\n')),Object(a.b)("h2",{id:"with-hint-text"},"With hint text"),Object(a.b)("div",{class:"govuk-form-group lbh-form-group"},Object(a.b)("label",{class:"govuk-label  lbh-label",for:"input-with-hint-text"},"National insurance number"),Object(a.b)("span",{id:"input-with-hint-text-hint",class:"govuk-hint  lbh-hint"},"It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019."),Object(a.b)("input",{class:"govuk-input  lbh-input",id:"input-with-hint-text",name:"test-name-2",type:"text","aria-describedby":"input-with-hint-text-hint"})),Object(a.b)("h3",{id:"html-1"},"HTML"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<div class="govuk-form-group lbh-form-group">\n  <label class="govuk-label  lbh-label" for="input-with-hint-text">\n    National insurance number\n  </label>\n  <span id="input-with-hint-text-hint" class="govuk-hint  lbh-hint">\n    It\u2019s on your National Insurance card, benefit letter, payslip or P60. For\n    example, \u2018QQ 12 34 56 C\u2019.\n  </span>\n  <input\n    class="govuk-input  lbh-input"\n    id="input-with-hint-text"\n    name="test-name-2"\n    type="text"\n    aria-describedby="input-with-hint-text-hint"\n  />\n</div>\n')),Object(a.b)("h3",{id:"nunjucks-1"},"Nunjucks"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{% from "lbh-input/macro.njk" import lbhInput %}\n\n{{ lbhInput({\n  "label": {\n    "text": "National insurance number"\n  },\n  "hint": {\n    "text": "It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019."\n  },\n  "id": "input-with-hint-text",\n  "name": "test-name-2"\n}) }}\n')))}p.isMDXComponent=!0}}]);