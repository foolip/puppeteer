"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36156],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),i=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,d=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=i(r),m=a,f=s["".concat(d,".").concat(m)]||s[m]||c[m]||p;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=s;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<p;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},31206:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return i},toc:function(){return l},default:function(){return s}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),o=["components"],u={},d=void 0,i={unversionedId:"puppeteer.mouse.draganddrop",id:"puppeteer.mouse.draganddrop",isDocsHomePage:!1,title:"puppeteer.mouse.draganddrop",description:"Home &gt; puppeteer &gt; Mouse &gt; dragAndDrop",source:"@site/docs/puppeteer.mouse.draganddrop.md",sourceDirName:".",slug:"/puppeteer.mouse.draganddrop",permalink:"/puppeteer/docs/next/puppeteer.mouse.draganddrop",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.mouse.draganddrop.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"puppeteer.mouse.drag",permalink:"/puppeteer/docs/next/puppeteer.mouse.drag"},next:{title:"puppeteer.mouse.dragenter",permalink:"/puppeteer/docs/next/puppeteer.mouse.dragenter"}},l=[{value:"Mouse.dragAndDrop() method",id:"mousedraganddrop-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],c={toc:l};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.mouse"},"Mouse")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.mouse.draganddrop"},"dragAndDrop")),(0,p.kt)("h2",{id:"mousedraganddrop-method"},"Mouse.dragAndDrop() method"),(0,p.kt)("p",null,"Performs a drag, dragenter, dragover, and drop in sequence."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"dragAndDrop(start: Point, target: Point, options?: {\n        delay?: number;\n    }): Promise<void>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"start"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.point"},"Point")),(0,p.kt)("td",{parentName:"tr",align:null})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"target"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.point"},"Point")),(0,p.kt)("td",{parentName:"tr",align:null},"point to drag from")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"options"),(0,p.kt)("td",{parentName:"tr",align:null},"{ delay?: number; }"),(0,p.kt)("td",{parentName:"tr",align:null},"An object of options. Accepts delay which, if specified, is the time to wait between ",(0,p.kt)("code",null,"dragover")," and ",(0,p.kt)("code",null,"drop")," in milliseconds. Defaults to 0.")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<","void",">"))}s.isMDXComponent=!0}}]);