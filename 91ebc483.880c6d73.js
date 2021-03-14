(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{125:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||l;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),l=(n(0),n(125)),i={title:"Browser support"},o={unversionedId:"developing/browser-support",id:"developing/browser-support",isDocsHomePage:!1,title:"Browser support",description:"LBH Frontend will allow you to build services that comply with the [guidance",source:"@site/docs/developing/browser-support.md",slug:"/developing/browser-support",permalink:"/developing/browser-support",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/main/docs/developing/browser-support.md",version:"current",sidebar:"someSidebar",previous:{title:"Update using npm",permalink:"/developing/updating"},next:{title:"Using it with React",permalink:"/developing/react"}},b=[{value:"Browsers",id:"browsers",children:[{value:"Supporting Internet Explorer 8",id:"supporting-internet-explorer-8",children:[]}]},{value:"Assistive technologies",id:"assistive-technologies",children:[]}],s={toc:b};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"LBH Frontend will allow you to build services that comply with the ",Object(l.b)("a",{parentName:"p",href:"https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices#browsers-to-test-in"},"guidance\nin the GOV.UK Service Manual"),"."),Object(l.b)("h2",{id:"browsers"},"Browsers"),Object(l.b)("p",null,"Currently, LBH Frontend officially supports the following browsers:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Operating system"),Object(l.b)("th",{parentName:"tr",align:null},"Browser"),Object(l.b)("th",{parentName:"tr",align:null},"Support"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Windows"),Object(l.b)("td",{parentName:"tr",align:null},"Internet Explorer 8-10"),Object(l.b)("td",{parentName:"tr",align:null},"functional")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Windows"),Object(l.b)("td",{parentName:"tr",align:null},"Internet Explorer 11"),Object(l.b)("td",{parentName:"tr",align:null},"compliant")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Windows"),Object(l.b)("td",{parentName:"tr",align:null},"Edge (latest 2 versions)"),Object(l.b)("td",{parentName:"tr",align:null},"compliant")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Windows"),Object(l.b)("td",{parentName:"tr",align:null},"Google Chrome (latest 2 versions)"),Object(l.b)("td",{parentName:"tr",align:null},"compliant")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Windows"),Object(l.b)("td",{parentName:"tr",align:null},"Mozilla Firefox (latest 2 versions)"),Object(l.b)("td",{parentName:"tr",align:null},"compliant")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"macOS"),Object(l.b)("td",{parentName:"tr",align:null},"Safari 9+"),Object(l.b)("td",{parentName:"tr",align:null},"compliant")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"macOS"),Object(l.b)("td",{parentName:"tr",align:null},"Google Chrome (latest 2 versions)"),Object(l.b)("td",{parentName:"tr",align:null},"compliant")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"macOS"),Object(l.b)("td",{parentName:"tr",align:null},"Mozilla Firefox (latest 2 versions)"),Object(l.b)("td",{parentName:"tr",align:null},"compliant")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"iOS"),Object(l.b)("td",{parentName:"tr",align:null},"Safari for iOS 9.3+"),Object(l.b)("td",{parentName:"tr",align:null},"compliant")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"iOS"),Object(l.b)("td",{parentName:"tr",align:null},"Google Chrome (latest 2 versions)"),Object(l.b)("td",{parentName:"tr",align:null},"compliant")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Android"),Object(l.b)("td",{parentName:"tr",align:null},"Google Chrome (latest 2 versions)"),Object(l.b)("td",{parentName:"tr",align:null},"compliant")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Android"),Object(l.b)("td",{parentName:"tr",align:null},"Samsung Internet (latest 2 versions)"),Object(l.b)("td",{parentName:"tr",align:null},"compliant")))),Object(l.b)("p",null,"\u2018Compliant\u2019 means that the components must look as good and function as well as\nthey do in other modern browsers."),Object(l.b)("p",null,"'Functional' means the components may not look perfect in the given browser, but\nmust still be usable without errors and without 'looking broken'."),Object(l.b)("p",null,"If you are including LBH Frontend as part of a stylesheet that you are\ngenerating in your application's build pipeline, you will need to ",Object(l.b)("a",{parentName:"p",href:"docs/installation/supporting-internet-explorer-8.md"},"generate and\ninclude a separate stylesheet in order to support Internet Explorer\n8"),"."),Object(l.b)("h3",{id:"supporting-internet-explorer-8"},"Supporting Internet Explorer 8"),Object(l.b)("p",null,"It's difficult, but just about still possible, to use the Hackney design system in an app that supports IE8:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#include-an-html5-shiv"},"Include an HTML5 shiv")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#bundling-an-ie8-specific-stylesheet"},"Generate an IE8-specific stylesheet")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#transforming-the-generated-stylesheet-using-oldie"},"Transform the IE8 stylesheet using oldie")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#including-the-ie8-stylesheet-in-your-project"},"Include the IE8 stylesheet in your project"))),Object(l.b)("p",null,"Once you have completed these steps, you will be able to write CSS that targets IE8 in your own application styles."),Object(l.b)("p",null,"If you are using the distributed versions of LBH Frontend that already\ninclude an IE8-specific stylesheet then you can include that in your project, skipping steps 2 and 3."),Object(l.b)("h4",{id:"1-include-an-html5-shiv"},"1. Include an HTML5 shiv"),Object(l.b)("p",null,"You will need to to include a ",Object(l.b)("a",{parentName:"p",href:"https://github.com/aFarkas/html5shiv"},"HTML5 shiv"),"\nwhich allows the 'semantic' HTML elements introduced in HTML5 to be used in\nolder browsers which do not natively support them."),Object(l.b)("p",null,"These elements include ",Object(l.b)("inlineCode",{parentName:"p"},"article"),", ",Object(l.b)("inlineCode",{parentName:"p"},"aside"),", ",Object(l.b)("inlineCode",{parentName:"p"},"figcaption"),", ",Object(l.b)("inlineCode",{parentName:"p"},"figure"),", ",Object(l.b)("inlineCode",{parentName:"p"},"footer"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"header"),", ",Object(l.b)("inlineCode",{parentName:"p"},"main"),", ",Object(l.b)("inlineCode",{parentName:"p"},"mark"),", ",Object(l.b)("inlineCode",{parentName:"p"},"nav"),", ",Object(l.b)("inlineCode",{parentName:"p"},"section"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"time"),"."),Object(l.b)("p",null,"To improve performance for users of modern browsers, you can wrap the shiv\ninclude with conditional comments that target only the browsers that need it:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'\x3c!--[if lt IE 9]>\n  <script src="/path/tohtml5shiv.js"><\/script>\n<![endif]--\x3e\n')),Object(l.b)("p",null,"Note that some libraries such as Modernizr may already include html5shiv."),Object(l.b)("h4",{id:"2-bundling-an-ie8-specific-stylesheet"},"2. Bundling an IE8-specific stylesheet"),Object(l.b)("p",null,"Setting the ",Object(l.b)("inlineCode",{parentName:"p"},"$govuk-is-ie8")," variable to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," when generating the stylesheet\nwill create a version that targets IE8. For example, it will:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"flatten media queries to create a 'desktop only' version"),Object(l.b)("li",{parentName:"ul"},"include any conditional styles that target IE8"),Object(l.b)("li",{parentName:"ul"},"exclude any conditional styles that target browsers other than IE8")),Object(l.b)("p",null,"You must set the variable before importing LBH Frontend."),Object(l.b)("p",null,"In most scenarios you should be able to create a separate stylesheet for IE8,\nset the ",Object(l.b)("inlineCode",{parentName:"p"},"$govuk-is-ie8")," variable to true and then import your main application\nstylesheet without having to redefine anything else."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-scss"},'// application.scss\n\n@import "lbh-frontend/lbh/all";\n\n.example {\n  // example application style\n}\n\n// application-ie8.scss\n\n$govuk-is-ie8: true;\n\n@import "application";\n')),Object(l.b)("h4",{id:"3-transforming-the-generated-stylesheet-using-oldie"},"3. Transforming the generated stylesheet using 'oldie'"),Object(l.b)("p",null,"You should use the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/jonathantneal/oldie"},"oldie")," plugin for\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/postcss/postcss"},"postcss")," to further transform the\nstylesheet:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"replacing opacity properties with compatible filter properties"),Object(l.b)("li",{parentName:"ul"},"swapping :: selectors with compatible : selectors for pseudo-elements"),Object(l.b)("li",{parentName:"ul"},"swapping rgba colours with compatible hex colours and filter properties")),Object(l.b)("p",null,"The oldie plugin is also able to flatten media queries, but this will already\nhave been done as part of the stylesheet compilation in step 1."),Object(l.b)("p",null,"Doing this as a separate step allows us to keep the source of LBH Frontend\nsimple, without having to wrap syntax that would need to be transformed in\nmixins or functions."),Object(l.b)("h4",{id:"4-including-the-ie8-stylesheet-in-your-project"},"4. Including the IE8 stylesheet in your project"),Object(l.b)("p",null,"Now that you have an IE8 compatible stylesheet you should include it using\n",Object(l.b)("a",{parentName:"p",href:"https://www.quirksmode.org/css/condcom.html"},"conditional comments"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'\x3c!--[if !IE 8]>\x3c!--\x3e\n<link rel="stylesheet" href="assets/application.css" />\n\x3c!--<![endif]--\x3e\n\x3c!--[if IE 8]>\n  <link rel="stylesheet" href="assets/application-ie8.css" />\n<![endif]--\x3e\n')),Object(l.b)("h2",{id:"assistive-technologies"},"Assistive technologies"),Object(l.b)("p",null,"LBH Frontend will allow you to build services that comply with the ",Object(l.b)("a",{parentName:"p",href:"https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies#what-to-test"},"guidance\nin the GOV.UK Service Manual"),"."),Object(l.b)("p",null,"Currently, LBH Frontend officially supports the following assistive technologies:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Software"),Object(l.b)("th",{parentName:"tr",align:null},"Version"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Browser"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"JAWS"),Object(l.b)("td",{parentName:"tr",align:null},"15 or later"),Object(l.b)("td",{parentName:"tr",align:null},"screen reader"),Object(l.b)("td",{parentName:"tr",align:null},"Internet Explorer 11")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ZoomText"),Object(l.b)("td",{parentName:"tr",align:null},"10.11 or later"),Object(l.b)("td",{parentName:"tr",align:null},"screen magnifier"),Object(l.b)("td",{parentName:"tr",align:null},"Internet Explorer 11")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Dragon NaturallySpeaking"),Object(l.b)("td",{parentName:"tr",align:null},"11 or later"),Object(l.b)("td",{parentName:"tr",align:null},"speech recognition"),Object(l.b)("td",{parentName:"tr",align:null},"Internet Explorer 11")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NVDA"),Object(l.b)("td",{parentName:"tr",align:null},"2016 or later"),Object(l.b)("td",{parentName:"tr",align:null},"screen reader"),Object(l.b)("td",{parentName:"tr",align:null},"Firefox (latest versions)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"VoiceOver"),Object(l.b)("td",{parentName:"tr",align:null},"7.0 or later"),Object(l.b)("td",{parentName:"tr",align:null},"screen reader"),Object(l.b)("td",{parentName:"tr",align:null},"Safari on iOS10 and OS X")))),Object(l.b)("p",null,"In addition, we test that all content is accessible with keyboard only."),Object(l.b)("p",null,"We aim to support ",Object(l.b)("a",{parentName:"p",href:"https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/"},"users who adjust or override the colours of websites they visit"),". We test this by ",Object(l.b)("a",{parentName:"p",href:"https://support.mozilla.org/en-US/kb/change-fonts-and-colors-websites-use"},"changing colours in Firefox"),", by ",Object(l.b)("a",{parentName:"p",href:"https://support.microsoft.com/en-gb/help/13862/windows-use-high-contrast-mode"},"enabling 'High Contrast' mode in Windows")," and by using the ",Object(l.b)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph?hl=en-US"},"High Contrast plugin for Chrome"),"."))}c.isMDXComponent=!0}}]);