(window.webpackJsonp=window.webpackJsonp||[]).push([[17,18],{158:function(e,t,n){"use strict";n.r(t);n(32),n(22),n(23),n(62),n(188);var a=n(0),r=n.n(a),o=n(160),l=n(161),i=n(68),c=n(170),s=n(2),u=n(10),p=(n(223),n(163)),m=n(182),d=n(190),f=n(191),h=n(192),y=n(189),b=n(164),g=n(167),v=n(141),k=n.n(v);var j=function e(t,n){return"link"===t.type?(a=t.href,r=n,(o=function(e){return e.endsWith("/")?e:e+"/"})(a)===o(r)):"category"===t.type&&t.items.some((function(t){return e(t,n)}));var a,r,o};function O(e){var t,n,o,l=e.item,i=e.onItemClick,c=e.collapsible,m=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),f=l.items,h=l.label,y=j(l,m),b=(n=y,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(a.useState)((function(){return!!c&&(!y&&l.collapsed)})),v=g[0],O=g[1];Object(a.useEffect)((function(){y&&!b&&v&&O(!1)}),[y,b,v]);var E=Object(a.useCallback)((function(e){e.preventDefault(),O((function(e){return!e}))}),[O]);return 0===f.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:h},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":c,"menu__link--active":c&&y},t[k.a.menuLinkText]=!c,t)),onClick:c?E:void 0,href:c?"#!":void 0},d),h),r.a.createElement("ul",{className:"menu__list"},f.map((function(e){return r.a.createElement(C,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:i,collapsible:c,activePath:m})}))))}function E(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),l=t.href,i=t.label,c=j(t,a);return r.a.createElement("li",{className:"menu__list-item",key:i},r.a.createElement(b.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":c}),to:l},Object(g.a)(l)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),i))}function C(e){switch(e.item.type){case"category":return r.a.createElement(O,e);case"link":default:return r.a.createElement(E,e)}}var N=function(e){var t,n,o=Object(a.useState)(!1),i=o[0],c=o[1],u=Object(l.a)(),g=u.siteConfig,v=(g=void 0===g?{}:g).themeConfig.navbar,j=(v=void 0===v?{}:v).title,O=v.hideOnScroll,E=void 0!==O&&O,N=u.isClient,x=Object(h.a)(),w=x.logoLink,P=x.logoLinkProps,S=x.logoImageUrl,_=x.logoAlt,T=Object(m.a)().isAnnouncementBarClosed,I=Object(y.a)().scrollY,L=e.docsSidebars,D=e.path,B=e.sidebar,A=e.sidebarCollapsible;Object(d.a)(i);var M=Object(f.a)();if(Object(a.useEffect)((function(){M===f.b.desktop&&c(!1)}),[M]),!B)return null;var W=L[B];if(!W)throw new Error('Cannot find the sidebar "'+B+'" in the sidebar config!');return r.a.createElement("div",{className:Object(p.a)(k.a.sidebar,(t={},t[k.a.sidebarWithHideableNavbar]=E,t))},E&&r.a.createElement(b.a,Object(s.a)({tabIndex:"-1",className:k.a.sidebarLogo,to:w},P),null!=S&&r.a.createElement("img",{key:N,src:S,alt:_}),null!=j&&r.a.createElement("strong",null,j)),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive",k.a.menu,(n={"menu--show":i},n[k.a.menuWithAnnouncementBar]=!T&&0===I,n))},r.a.createElement("button",{"aria-label":i?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){c(!i)}},i?r.a.createElement("span",{className:Object(p.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:k.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},W.map((function(e){return r.a.createElement(C,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),c(!1)},collapsible:A,activePath:D})})))))},x=(n(193),n(194),n(81),n(78),n(224),n(183),{plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]}),w={Prism:n(57).a,theme:x};function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var _=/\r\n|\r|\n/,T=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},I=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},L=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=S({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=S({},n,{backgroundColor:null}),r};function D(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var B=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),P(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?L(e.theme,e.language):void 0;return t.themeDict=n})),P(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=S({},D(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?S({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),P(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),P(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=S({},D(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?S({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=a[l]++)<r[l];){var s=void 0,u=t[l],p=n[l][o];if("string"==typeof p?(u=l>0?u:["plain"],s=p):(u=I(u,p.type),p.alias&&(u=I(u,p.alias)),s=p.content),"string"==typeof s){var m=s.split(_),d=m.length;i.push({types:u,content:m[0]});for(var f=1;f<d;f++)T(i),c.push(i=[]),i.push({types:u,content:m[f]})}else l++,t.push(u),n.push(s),a.push(0),r.push(s.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return T(i),c}(void 0!==l?t.tokenize(a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),A=n(225),M=n.n(A),W=n(226),F=n.n(W),R={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},$=n(175),z=function(){var e=Object(l.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object($.a)().isDarkTheme,a=t.theme||R,r=t.darkTheme||a;return n?r:a},J=n(142),U=n.n(J),H=/{([\d,-]+)}/,X=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},Y=/title=".*"/,q=function(e){var t=e.children,n=e.className,o=e.metastring,i=Object(l.a)().siteConfig.themeConfig.prism,c=void 0===i?{}:i,u=Object(a.useState)(!1),m=u[0],d=u[1],f=Object(a.useState)(!1),h=f[0],y=f[1];Object(a.useEffect)((function(){y(!0)}),[]);var b=Object(a.useRef)(null),g=[],v="",k=z();if(o&&H.test(o)){var j=o.match(H)[1];g=F.a.parse(j).filter((function(e){return e>0}))}o&&Y.test(o)&&(v=o.match(Y)[0].split("title=")[1].replace(/"+/g,""));var O=n&&n.replace(/language-/,"");!O&&c.defaultLanguage&&(O=c.defaultLanguage);var E=t.replace(/\n$/,"");if(0===g.length&&void 0!==O){for(var C,N="",x=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return X(["js","jsBlock"]);case"jsx":case"tsx":return X(["js","jsBlock","jsx"]);case"html":return X(["js","jsBlock","html"]);case"python":case"py":return X(["python"]);default:return X()}}(O),P=t.replace(/\n$/,"").split("\n"),S=0;S<P.length;){var _=S+1,T=P[S].match(x);if(null!==T){switch(T.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":N+=_+",";break;case"highlight-start":C=_;break;case"highlight-end":N+=C+"-"+(_-1)+","}P.splice(S,1)}else S+=1}g=F.a.parse(N),E=P.join("\n")}var I=function(){M()(E),d(!0),setTimeout((function(){return d(!1)}),2e3)};return r.a.createElement(B,Object(s.a)({},w,{key:h,theme:k,code:E,language:O}),(function(e){var t,n,a=e.className,o=e.style,l=e.tokens,i=e.getLineProps,c=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,v&&r.a.createElement("div",{style:o,className:U.a.codeBlockTitle},v),r.a.createElement("div",{className:U.a.codeBlockContent},r.a.createElement("button",{ref:b,type:"button","aria-label":"Copy code to clipboard",className:Object(p.a)(U.a.copyButton,(t={},t[U.a.copyButtonWithTitle]=v,t)),onClick:I},m?"Copied":"Copy"),r.a.createElement("div",{tabIndex:"0",className:Object(p.a)(a,U.a.codeBlock,(n={},n[U.a.codeBlockWithTitle]=v,n))},r.a.createElement("div",{className:U.a.codeBlockLines,style:o},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return g.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(s.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(s.a)({key:t},c({token:e,key:t})))})))}))))))}))},G=(n(143),n(144)),K=n.n(G),Q=function(e){return function(t){var n,a=t.id,o=Object(u.a)(t,["id"]),i=Object(l.a)().siteConfig,c=(i=void 0===i?{}:i).themeConfig,s=(c=void 0===c?{}:c).navbar,m=(s=void 0===s?{}:s).hideOnScroll,d=void 0!==m&&m;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:Object(p.a)("anchor",(n={},n[K.a.enhancedAnchor]=!d,n)),id:a}),o.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):r.a.createElement(e,o)}},V=n(145),Z=n.n(V),ee={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(q,e):r.a.createElement("code",e):t},a:function(e){return/\.[^./]+$/.test(e.href)?r.a.createElement("a",e):r.a.createElement(b.a,e)},pre:function(e){return r.a.createElement("div",Object(s.a)({className:Z.a.mdxCodeBlock},e))},h1:Q("h1"),h2:Q("h2"),h3:Q("h3"),h4:Q("h4"),h5:Q("h5"),h6:Q("h6")},te=n(178),ne=n(174),ae=n(146),re=n.n(ae);t.default=function(e){var t=e.route,n=e.docsMetadata,a=e.location,s=t.routes.find((function(e){return Object(ne.a)(a.pathname,e)}))||{},u=n.permalinkToSidebar,p=n.docsSidebars,m=n.version,d=u[s.path],f=Object(l.a)(),h=f.siteConfig,y=(h=void 0===h?{}:h).themeConfig,b=void 0===y?{}:y,g=f.isClient,v=b.sidebarCollapsible,k=void 0===v||v;return 0===Object.keys(s).length?r.a.createElement(te.default,e):r.a.createElement(c.a,{version:m,key:g},r.a.createElement("div",{className:re.a.docPage},d&&r.a.createElement("div",{className:re.a.docSidebarContainer,role:"complementary"},r.a.createElement(N,{docsSidebars:p,path:s.path,sidebar:d,sidebarCollapsible:k})),r.a.createElement("main",{className:re.a.docMainContainer},r.a.createElement(o.a,{components:ee},Object(i.a)(t.routes)))))}},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(f,i(i({ref:t},s),{},{components:n})):r.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(170);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},193:function(e,t,n){"use strict";var a=n(13),r=n(86)(!0);a(a.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(83)("includes")},194:function(e,t,n){"use strict";var a=n(13),r=n(171);a(a.P+a.F*n(172)("includes"),"String",{includes:function(e){return!!~r(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},223:function(e,t,n){"use strict";var a=n(13),r=n(27),o=n(171),l="".endsWith;a(a.P+a.F*n(172)("endsWith"),"String",{endsWith:function(e){var t=o(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,a=r(t.length),i=void 0===n?a:Math.min(r(n),a),c=String(e);return l?l.call(t,c,i):t.slice(i-c.length,i)===c}})},224:function(e,t,n){"use strict";var a=n(8),r=n(27),o=n(61),l=n(55);n(56)("match",1,(function(e,t,n,i){return[function(n){var a=e(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,a):new RegExp(n)[t](String(a))},function(e){var t=i(n,e,this);if(t.done)return t.value;var c=a(e),s=String(this);if(!c.global)return l(c,s);var u=c.unicode;c.lastIndex=0;for(var p,m=[],d=0;null!==(p=l(c,s));){var f=String(p[0]);m[d]=f,""===f&&(c.lastIndex=o(s,r(c.lastIndex),u)),d++}return 0===d?null:m}]}))},225:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(i){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),l};e.exports=a,e.exports.default=a},226:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],l=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=l);for(var i=n;i!=r;i+=l)o.push(i);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}}}]);