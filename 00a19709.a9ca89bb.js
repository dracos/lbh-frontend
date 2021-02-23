(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{114:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return v}));var l=a(0),s=a.n(l);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,l,s=function(t,e){if(null==t)return{};var a,l,s={},c=Object.keys(t);for(l=0;l<c.length;l++)a=c[l],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(l=0;l<c.length;l++)a=c[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var _=s.a.createContext({}),r=function(t){var e=s.a.useContext(_),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},d=function(t){var e=r(t.components);return s.a.createElement(_.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return s.a.createElement(s.a.Fragment,{},e)}},g=s.a.forwardRef((function(t,e){var a=t.components,l=t.mdxType,c=t.originalType,b=t.parentName,_=o(t,["components","mdxType","originalType","parentName"]),d=r(a),g=l,v=d["".concat(b,".").concat(g)]||d[g]||u[g]||c;return a?s.a.createElement(v,n(n({ref:e},_),{},{components:a})):s.a.createElement(v,n({ref:e},_))}));function v(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var c=a.length,b=new Array(c);b[0]=g;var n={};for(var o in e)hasOwnProperty.call(e,o)&&(n[o]=e[o]);n.originalType=t,n.mdxType="string"==typeof t?t:l,b[1]=n;for(var _=2;_<c;_++)b[_]=a[_];return s.a.createElement.apply(null,b)}return s.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},75:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return b})),a.d(e,"metadata",(function(){return n})),a.d(e,"toc",(function(){return o})),a.d(e,"default",(function(){return r}));var l=a(4),s=a(9),c=(a(0),a(114)),b={title:"Tabs"},n={unversionedId:"components/tabs",id:"components/tabs",isDocsHomePage:!1,title:"Tabs",description:"Tabs can be a helpful way of letting users quickly switch between related information if:",source:"@site/docs/components/tabs.md",slug:"/components/tabs",permalink:"/LBH-frontend/components/tabs",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/master/docs/components/tabs.md",version:"current"},o=[{value:"Tabs",id:"tabs",children:[{value:"HTML",id:"html",children:[]},{value:"Nunjucks",id:"nunjucks",children:[]}]},{value:"Tag with html",id:"tag-with-html",children:[{value:"HTML",id:"html-1",children:[]},{value:"Nunjucks",id:"nunjucks-1",children:[]}]}],_={toc:o};function r(t){var e=t.components,a=Object(s.a)(t,["components"]);return Object(c.b)("wrapper",Object(l.a)({},_,a,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Tabs can be a helpful way of letting users quickly switch between related information if:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"your content can be usefully separated into clearly labelled sections"),Object(c.b)("li",{parentName:"ul"},"the first section is more relevant than the others for most users"),Object(c.b)("li",{parentName:"ul"},"users will not need to view all the sections at once")),Object(c.b)("p",null,"Tabs can work well for people who use a service regularly, for example, users of a caseworking system. Their need to perform tasks quickly may be greater than their need for simplicity of first-time use."),Object(c.b)("h2",{id:"tabs"},"Tabs"),Object(c.b)("div",{class:"govuk-tabs lbh-tabs","data-module":"govuk-tabs"},Object(c.b)("h2",{class:"govuk-tabs__title"},"Contents"),Object(c.b)("ul",{class:"govuk-tabs__list"},Object(c.b)("li",{class:"govuk-tabs__list-item govuk-tabs__list-item--selected"},Object(c.b)("a",{class:"govuk-tabs__tab",href:"#past-day"},"Past day")),Object(c.b)("li",{class:"govuk-tabs__list-item"},Object(c.b)("a",{class:"govuk-tabs__tab",href:"#past-week"},"Past week")),Object(c.b)("li",{class:"govuk-tabs__list-item"},Object(c.b)("a",{class:"govuk-tabs__tab",href:"#past-month"},"Past month")),Object(c.b)("li",{class:"govuk-tabs__list-item"},Object(c.b)("a",{class:"govuk-tabs__tab",href:"#past-year"},"Past year"))),Object(c.b)("section",{class:"govuk-tabs__panel",id:"past-day"},Object(c.b)("h2",{class:"lbh-heading-h2"},"Past day"),Object(c.b)("table",{class:"govuk-table"},Object(c.b)("thead",{class:"govuk-table__head"},Object(c.b)("tr",{class:"govuk-table__row"},Object(c.b)("th",{class:"govuk-table__header",scope:"col"},"Case manager"),Object(c.b)("th",{class:"govuk-table__header",scope:"col"},"Cases opened"),Object(c.b)("th",{class:"govuk-table__header",scope:"col"},"Cases closed"))),Object(c.b)("tbody",{class:"govuk-table__body"},Object(c.b)("tr",{class:"govuk-table__row"},Object(c.b)("td",{class:"govuk-table__cell"},"David Francis"),Object(c.b)("td",{class:"govuk-table__cell"},"3"),Object(c.b)("td",{class:"govuk-table__cell"},"0")),Object(c.b)("tr",{class:"govuk-table__row"},Object(c.b)("td",{class:"govuk-table__cell"},"Paul Farmer"),Object(c.b)("td",{class:"govuk-table__cell"},"1"),Object(c.b)("td",{class:"govuk-table__cell"},"0")),Object(c.b)("tr",{class:"govuk-table__row"},Object(c.b)("td",{class:"govuk-table__cell"},"Rita Patel"),Object(c.b)("td",{class:"govuk-table__cell"},"2"),Object(c.b)("td",{class:"govuk-table__cell"},"0"))))),Object(c.b)("section",{class:"govuk-tabs__panel govuk-tabs__panel--hidden",id:"past-week"},Object(c.b)("h2",{class:"lbh-heading-h2"},"Past week"),Object(c.b)("table",{class:"govuk-table"},Object(c.b)("thead",{class:"govuk-table__head"},Object(c.b)("tr",{class:"govuk-table__row"},Object(c.b)("th",{class:"govuk-table__header",scope:"col"},"Case manager"),Object(c.b)("th",{class:"govuk-table__header",scope:"col"},"Cases opened"),Object(c.b)("th",{class:"govuk-table__header",scope:"col"},"Cases closed"))),Object(c.b)("tbody",{class:"govuk-table__body"},Object(c.b)("tr",{class:"govuk-table__row"},Object(c.b)("td",{class:"govuk-table__cell"},"David Francis"),Object(c.b)("td",{class:"govuk-table__cell"},"24"),Object(c.b)("td",{class:"govuk-table__cell"},"18")),Object(c.b)("tr",{class:"govuk-table__row"},Object(c.b)("td",{class:"govuk-table__cell"},"Paul Farmer"),Object(c.b)("td",{class:"govuk-table__cell"},"16"),Object(c.b)("td",{class:"govuk-table__cell"},"20")),Object(c.b)("tr",{class:"govuk-table__row"},Object(c.b)("td",{class:"govuk-table__cell"},"Rita Patel"),Object(c.b)("td",{class:"govuk-table__cell"},"24"),Object(c.b)("td",{class:"govuk-table__cell"},"27"))))),Object(c.b)("section",{class:"govuk-tabs__panel govuk-tabs__panel--hidden",id:"past-month"},Object(c.b)("h2",{class:"lbh-heading-h2"},"Past month"),Object(c.b)("table",{class:"govuk-table"},Object(c.b)("thead",{class:"govuk-table__head"},Object(c.b)("tr",{class:"govuk-table__row"},Object(c.b)("th",{class:"govuk-table__header",scope:"col"},"Case manager"),Object(c.b)("th",{class:"govuk-table__header",scope:"col"},"Cases opened"),Object(c.b)("th",{class:"govuk-table__header",scope:"col"},"Cases closed"))),Object(c.b)("tbody",{class:"govuk-table__body"},Object(c.b)("tr",{class:"govuk-table__row"},Object(c.b)("td",{class:"govuk-table__cell"},"David Francis"),Object(c.b)("td",{class:"govuk-table__cell"},"98"),Object(c.b)("td",{class:"govuk-table__cell"},"95")),Object(c.b)("tr",{class:"govuk-table__row"},Object(c.b)("td",{class:"govuk-table__cell"},"Paul Farmer"),Object(c.b)("td",{class:"govuk-table__cell"},"122"),Object(c.b)("td",{class:"govuk-table__cell"},"131")),Object(c.b)("tr",{class:"govuk-table__row"},Object(c.b)("td",{class:"govuk-table__cell"},"Rita Patel"),Object(c.b)("td",{class:"govuk-table__cell"},"126"),Object(c.b)("td",{class:"govuk-table__cell"},"142"))))),Object(c.b)("section",{class:"govuk-tabs__panel govuk-tabs__panel--hidden",id:"past-year"},Object(c.b)("h2",{class:"lbh-heading-h2"},"Past year"),Object(c.b)("table",{class:"govuk-table"},Object(c.b)("thead",{class:"govuk-table__head"},Object(c.b)("tr",{class:"govuk-table__row"},Object(c.b)("th",{class:"govuk-table__header",scope:"col"},"Case manager"),Object(c.b)("th",{class:"govuk-table__header",scope:"col"},"Cases opened"),Object(c.b)("th",{class:"govuk-table__header",scope:"col"},"Cases closed"))),Object(c.b)("tbody",{class:"govuk-table__body"},Object(c.b)("tr",{class:"govuk-table__row"},Object(c.b)("td",{class:"govuk-table__cell"},"David Francis"),Object(c.b)("td",{class:"govuk-table__cell"},"1380"),Object(c.b)("td",{class:"govuk-table__cell"},"1472")),Object(c.b)("tr",{class:"govuk-table__row"},Object(c.b)("td",{class:"govuk-table__cell"},"Paul Farmer"),Object(c.b)("td",{class:"govuk-table__cell"},"1129"),Object(c.b)("td",{class:"govuk-table__cell"},"1083")),Object(c.b)("tr",{class:"govuk-table__row"},Object(c.b)("td",{class:"govuk-table__cell"},"Rita Patel"),Object(c.b)("td",{class:"govuk-table__cell"},"1539"),Object(c.b)("td",{class:"govuk-table__cell"},"1265")))))),Object(c.b)("h3",{id:"html"},"HTML"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},'<div class="govuk-tabs  lbh-tabs" data-module="govuk-tabs">\n  <h2 class="govuk-tabs__title">\n    Contents\n  </h2>\n  <ul class="govuk-tabs__list">\n        <li class="govuk-tabs__list-item govuk-tabs__list-item--selected">\n          <a class="govuk-tabs__tab" href="#past-day">\n            Past day\n          </a>\n        </li>\n        <li class="govuk-tabs__list-item">\n          <a class="govuk-tabs__tab" href="#past-week">\n            Past week\n          </a>\n        </li>\n        <li class="govuk-tabs__list-item">\n          <a class="govuk-tabs__tab" href="#past-month">\n            Past month\n          </a>\n        </li>\n        <li class="govuk-tabs__list-item">\n          <a class="govuk-tabs__tab" href="#past-year">\n            Past year\n          </a>\n        </li>\n  </ul>\n      <section class="govuk-tabs__panel" id="past-day">\n        <h2 class="lbh-heading-h2">Past day</h2>\n<table class="govuk-table">\n  <thead class="govuk-table__head">\n    <tr class="govuk-table__row">\n      <th class="govuk-table__header" scope="col">Case manager</th>\n      <th class="govuk-table__header" scope="col">Cases opened</th>\n      <th class="govuk-table__header" scope="col">Cases closed</th>\n    </tr>\n  </thead>\n  <tbody class="govuk-table__body">\n    <tr class="govuk-table__row">\n      <td class="govuk-table__cell">David Francis</td>\n      <td class="govuk-table__cell">3</td>\n      <td class="govuk-table__cell">0</td>\n    </tr>\n    <tr class="govuk-table__row">\n      <td class="govuk-table__cell">Paul Farmer</td>\n      <td class="govuk-table__cell">1</td>\n      <td class="govuk-table__cell">0</td>\n    </tr>\n    <tr class="govuk-table__row">\n      <td class="govuk-table__cell">Rita Patel</td>\n      <td class="govuk-table__cell">2</td>\n      <td class="govuk-table__cell">0</td>\n    </tr>\n  </tbody>\n</table>\n\n      </section>\n      <section class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-week">\n        <h2 class="lbh-heading-h2">Past week</h2>\n<table class="govuk-table">\n  <thead class="govuk-table__head">\n    <tr class="govuk-table__row">\n      <th class="govuk-table__header" scope="col">Case manager</th>\n      <th class="govuk-table__header" scope="col">Cases opened</th>\n      <th class="govuk-table__header" scope="col">Cases closed</th>\n    </tr>\n  </thead>\n  <tbody class="govuk-table__body">\n    <tr class="govuk-table__row">\n      <td class="govuk-table__cell">David Francis</td>\n      <td class="govuk-table__cell">24</td>\n      <td class="govuk-table__cell">18</td>\n    </tr>\n    <tr class="govuk-table__row">\n      <td class="govuk-table__cell">Paul Farmer</td>\n      <td class="govuk-table__cell">16</td>\n      <td class="govuk-table__cell">20</td>\n    </tr>\n    <tr class="govuk-table__row">\n      <td class="govuk-table__cell">Rita Patel</td>\n      <td class="govuk-table__cell">24</td>\n      <td class="govuk-table__cell">27</td>\n    </tr>\n  </tbody>\n</table>\n\n      </section>\n      <section class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-month">\n        <h2 class="lbh-heading-h2">Past month</h2>\n<table class="govuk-table">\n  <thead class="govuk-table__head">\n    <tr class="govuk-table__row">\n      <th class="govuk-table__header" scope="col">Case manager</th>\n      <th class="govuk-table__header" scope="col">Cases opened</th>\n      <th class="govuk-table__header" scope="col">Cases closed</th>\n    </tr>\n  </thead>\n  <tbody class="govuk-table__body">\n    <tr class="govuk-table__row">\n      <td class="govuk-table__cell">David Francis</td>\n      <td class="govuk-table__cell">98</td>\n      <td class="govuk-table__cell">95</td>\n    </tr>\n    <tr class="govuk-table__row">\n      <td class="govuk-table__cell">Paul Farmer</td>\n      <td class="govuk-table__cell">122</td>\n      <td class="govuk-table__cell">131</td>\n    </tr>\n    <tr class="govuk-table__row">\n      <td class="govuk-table__cell">Rita Patel</td>\n      <td class="govuk-table__cell">126</td>\n      <td class="govuk-table__cell">142</td>\n    </tr>\n  </tbody>\n</table>\n\n      </section>\n      <section class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-year">\n        <h2 class="lbh-heading-h2">Past year</h2>\n<table class="govuk-table">\n  <thead class="govuk-table__head">\n    <tr class="govuk-table__row">\n      <th class="govuk-table__header" scope="col">Case manager</th>\n      <th class="govuk-table__header" scope="col">Cases opened</th>\n      <th class="govuk-table__header" scope="col">Cases closed</th>\n    </tr>\n  </thead>\n  <tbody class="govuk-table__body">\n    <tr class="govuk-table__row">\n      <td class="govuk-table__cell">David Francis</td>\n      <td class="govuk-table__cell">1380</td>\n      <td class="govuk-table__cell">1472</td>\n    </tr>\n    <tr class="govuk-table__row">\n      <td class="govuk-table__cell">Paul Farmer</td>\n      <td class="govuk-table__cell">1129</td>\n      <td class="govuk-table__cell">1083</td>\n    </tr>\n    <tr class="govuk-table__row">\n      <td class="govuk-table__cell">Rita Patel</td>\n      <td class="govuk-table__cell">1539</td>\n      <td class="govuk-table__cell">1265</td>\n    </tr>\n  </tbody>\n</table>\n\n      </section>\n</div>\n')),Object(c.b)("h3",{id:"nunjucks"},"Nunjucks"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'{% from "lbh-tabs/macro.njk" import lbhTabs %}\n\n{{ lbhTabs({\n  "items": [\n    {\n      "label": "Past day",\n      "id": "past-day",\n      "panel": {\n        "html": "<h2 class=\\"lbh-heading-h2\\">Past day</h2>\\n<table class=\\"govuk-table\\">\\n  <thead class=\\"govuk-table__head\\">\\n    <tr class=\\"govuk-table__row\\">\\n      <th class=\\"govuk-table__header\\" scope=\\"col\\">Case manager</th>\\n      <th class=\\"govuk-table__header\\" scope=\\"col\\">Cases opened</th>\\n      <th class=\\"govuk-table__header\\" scope=\\"col\\">Cases closed</th>\\n    </tr>\\n  </thead>\\n  <tbody class=\\"govuk-table__body\\">\\n    <tr class=\\"govuk-table__row\\">\\n      <td class=\\"govuk-table__cell\\">David Francis</td>\\n      <td class=\\"govuk-table__cell\\">3</td>\\n      <td class=\\"govuk-table__cell\\">0</td>\\n    </tr>\\n    <tr class=\\"govuk-table__row\\">\\n      <td class=\\"govuk-table__cell\\">Paul Farmer</td>\\n      <td class=\\"govuk-table__cell\\">1</td>\\n      <td class=\\"govuk-table__cell\\">0</td>\\n    </tr>\\n    <tr class=\\"govuk-table__row\\">\\n      <td class=\\"govuk-table__cell\\">Rita Patel</td>\\n      <td class=\\"govuk-table__cell\\">2</td>\\n      <td class=\\"govuk-table__cell\\">0</td>\\n    </tr>\\n  </tbody>\\n</table>\\n"\n      }\n    },\n    {\n      "label": "Past week",\n      "id": "past-week",\n      "panel": {\n        "html": "<h2 class=\\"lbh-heading-h2\\">Past week</h2>\\n<table class=\\"govuk-table\\">\\n  <thead class=\\"govuk-table__head\\">\\n    <tr class=\\"govuk-table__row\\">\\n      <th class=\\"govuk-table__header\\" scope=\\"col\\">Case manager</th>\\n      <th class=\\"govuk-table__header\\" scope=\\"col\\">Cases opened</th>\\n      <th class=\\"govuk-table__header\\" scope=\\"col\\">Cases closed</th>\\n    </tr>\\n  </thead>\\n  <tbody class=\\"govuk-table__body\\">\\n    <tr class=\\"govuk-table__row\\">\\n      <td class=\\"govuk-table__cell\\">David Francis</td>\\n      <td class=\\"govuk-table__cell\\">24</td>\\n      <td class=\\"govuk-table__cell\\">18</td>\\n    </tr>\\n    <tr class=\\"govuk-table__row\\">\\n      <td class=\\"govuk-table__cell\\">Paul Farmer</td>\\n      <td class=\\"govuk-table__cell\\">16</td>\\n      <td class=\\"govuk-table__cell\\">20</td>\\n    </tr>\\n    <tr class=\\"govuk-table__row\\">\\n      <td class=\\"govuk-table__cell\\">Rita Patel</td>\\n      <td class=\\"govuk-table__cell\\">24</td>\\n      <td class=\\"govuk-table__cell\\">27</td>\\n    </tr>\\n  </tbody>\\n</table>\\n"\n      }\n    },\n    {\n      "label": "Past month",\n      "id": "past-month",\n      "panel": {\n        "html": "<h2 class=\\"lbh-heading-h2\\">Past month</h2>\\n<table class=\\"govuk-table\\">\\n  <thead class=\\"govuk-table__head\\">\\n    <tr class=\\"govuk-table__row\\">\\n      <th class=\\"govuk-table__header\\" scope=\\"col\\">Case manager</th>\\n      <th class=\\"govuk-table__header\\" scope=\\"col\\">Cases opened</th>\\n      <th class=\\"govuk-table__header\\" scope=\\"col\\">Cases closed</th>\\n    </tr>\\n  </thead>\\n  <tbody class=\\"govuk-table__body\\">\\n    <tr class=\\"govuk-table__row\\">\\n      <td class=\\"govuk-table__cell\\">David Francis</td>\\n      <td class=\\"govuk-table__cell\\">98</td>\\n      <td class=\\"govuk-table__cell\\">95</td>\\n    </tr>\\n    <tr class=\\"govuk-table__row\\">\\n      <td class=\\"govuk-table__cell\\">Paul Farmer</td>\\n      <td class=\\"govuk-table__cell\\">122</td>\\n      <td class=\\"govuk-table__cell\\">131</td>\\n    </tr>\\n    <tr class=\\"govuk-table__row\\">\\n      <td class=\\"govuk-table__cell\\">Rita Patel</td>\\n      <td class=\\"govuk-table__cell\\">126</td>\\n      <td class=\\"govuk-table__cell\\">142</td>\\n    </tr>\\n  </tbody>\\n</table>\\n"\n      }\n    },\n    {\n      "label": "Past year",\n      "id": "past-year",\n      "panel": {\n        "html": "<h2 class=\\"lbh-heading-h2\\">Past year</h2>\\n<table class=\\"govuk-table\\">\\n  <thead class=\\"govuk-table__head\\">\\n    <tr class=\\"govuk-table__row\\">\\n      <th class=\\"govuk-table__header\\" scope=\\"col\\">Case manager</th>\\n      <th class=\\"govuk-table__header\\" scope=\\"col\\">Cases opened</th>\\n      <th class=\\"govuk-table__header\\" scope=\\"col\\">Cases closed</th>\\n    </tr>\\n  </thead>\\n  <tbody class=\\"govuk-table__body\\">\\n    <tr class=\\"govuk-table__row\\">\\n      <td class=\\"govuk-table__cell\\">David Francis</td>\\n      <td class=\\"govuk-table__cell\\">1380</td>\\n      <td class=\\"govuk-table__cell\\">1472</td>\\n    </tr>\\n    <tr class=\\"govuk-table__row\\">\\n      <td class=\\"govuk-table__cell\\">Paul Farmer</td>\\n      <td class=\\"govuk-table__cell\\">1129</td>\\n      <td class=\\"govuk-table__cell\\">1083</td>\\n    </tr>\\n    <tr class=\\"govuk-table__row\\">\\n      <td class=\\"govuk-table__cell\\">Rita Patel</td>\\n      <td class=\\"govuk-table__cell\\">1539</td>\\n      <td class=\\"govuk-table__cell\\">1265</td>\\n    </tr>\\n  </tbody>\\n</table>\\n"\n      }\n    }\n  ]\n}) }}\n\n')),Object(c.b)("h2",{id:"tag-with-html"},"Tag with html"),Object(c.b)("strong",{class:"govuk-tag  lbh-tag"},Object(c.b)("span",null,"Beta")),Object(c.b)("h3",{id:"html-1"},"HTML"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},'<strong class="govuk-tag  lbh-tag">\n  <span>Beta</span>\n</strong>\n')),Object(c.b)("h3",{id:"nunjucks-1"},"Nunjucks"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'{% from "lbh-tag/macro.njk" import lbhTag %}\n\n{{ lbhTag({\n  "html": "<span>Beta</span>"\n}) }}\n\n')))}r.isMDXComponent=!0}}]);