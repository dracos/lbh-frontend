(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(114)),a={title:"Installing from dist"},l={unversionedId:"installing-from-dist",id:"installing-from-dist",isDocsHomePage:!1,title:"Installing from dist",description:"Limitations",source:"@site/docs\\installing-from-dist.md",slug:"/installing-from-dist",permalink:"/LBH-frontend/installing-from-dist",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/master/docs/installing-from-dist.md",version:"current",sidebar:"someSidebar",previous:{title:"Updating using NPM",permalink:"/LBH-frontend/updating-with-npm"},next:{title:"Browser support",permalink:"/LBH-frontend/browser-support"}},s=[{value:"Limitations",id:"limitations",children:[]},{value:"Steps to install",id:"steps-to-install",children:[{value:"1. Download resources",id:"1-download-resources",children:[]},{value:"2. Include resources",id:"2-include-resources",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"limitations"},"Limitations"),Object(o.b)("p",null,"When installing from ",Object(o.b)("inlineCode",{parentName:"p"},"dist"),", you are using compiled and minified versions of the\nstylesheet. This means that you will not be able to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"selectively include the CSS or JavaScript for individual components."),Object(o.b)("li",{parentName:"ul"},"build your own styles or components based on the palette or typography and\nspacing mixins."),Object(o.b)("li",{parentName:"ul"},"customise the build (for example, overriding colours or enabling global\nstyles)."),Object(o.b)("li",{parentName:"ul"},"use the component Nunjucks templates.")),Object(o.b)("p",null,"If you require any of this functionality, you should ",Object(o.b)("a",{parentName:"p",href:"installing-with-npm.md"},"install LBH Frontend\nusing node package manager")," instead."),Object(o.b)("h2",{id:"steps-to-install"},"Steps to install"),Object(o.b)("h3",{id:"1-download-resources"},"1. Download resources"),Object(o.b)("p",null,"Download the latest compiled and minified versions of the stylesheets,\nJavaScript and the assets:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/lbh-frontend/tree/master/dist"},"CSS and JavaScript")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/lbh-frontend/tree/master/dist/assets"},"Assets"))),Object(o.b)("h3",{id:"2-include-resources"},"2. Include resources"),Object(o.b)("p",null,"You must copy the entire ",Object(o.b)("inlineCode",{parentName:"p"},"assets")," folder to the root of your service."),Object(o.b)("p",null,"Follow the below example to add the CSS and JavaScript files to your HTML template. This example assumes you have copied the stylesheets and JavaScript files to ",Object(o.b)("inlineCode",{parentName:"p"},"/stylesheets")," and ",Object(o.b)("inlineCode",{parentName:"p"},"/javascript")," respectively."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Example</title>\n    \x3c!--[if !IE 8]>\x3c!--\x3e\n    <link\n      rel="stylesheet"\n      href="stylesheets/lbh-frontend-[latest version].min.css"\n    />\n    \x3c!--<![endif]--\x3e\n    \x3c!--[if IE 8]>\n      <link\n        rel="stylesheet"\n        href="stylesheets/lbh-frontend-ie8-[latest-version].min.css"\n      />\n    <![endif]--\x3e\n  </head>\n  <body>\n    \x3c!-- Copy and paste component HTML--\x3e\n    <button class="lbh-button">This is a button component</button>\n    <script src="javascript/lbh-frontend-[latest version].min.js"><\/script>\n    <script>\n      window.LBHFrontend.initAll();\n    <\/script>\n  </body>\n</html>\n')))}p.isMDXComponent=!0}}]);