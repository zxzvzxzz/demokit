(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{156:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return p})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return c}));var n=o(2),r=o(10),i=(o(0),o(162)),a={id:"devops",title:"Azure DevOps"},p={id:"kubernetes-devops/devops",isDocsHomePage:!1,title:"Azure DevOps",description:"Azure DevOps Demo Scenarios",source:"@site/docs/kubernetes-devops/devops.md",permalink:"/demokit/docs/kubernetes-devops/devops",editUrl:"https://github.com/azure/demokit/edit/master/docs/kubernetes-devops/devops.md",sidebar:"sidebar",previous:{title:"Github Actions",permalink:"/demokit/docs/kubernetes-devops/github"},next:{title:"ArgoCD",permalink:"/demokit/docs/kubernetes-devops/argocd"}},s=[{value:"Azure DevOps Demo Scenarios",id:"azure-devops-demo-scenarios",children:[]},{value:"Demo Steps",id:"demo-steps",children:[]}],l={rightToc:s};function c(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"azure-devops-demo-scenarios"},"Azure DevOps Demo Scenarios"),Object(i.b)("p",null,"Azure devops demo will use"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Github repository to store the source code"),Object(i.b)("li",{parentName:"ul"},'Azure devops to implement a "build & deployment" pipeline, a docker image will be created from demo application, then it gets pushed to azure container registry, eventually gets deployed to AKS')),Object(i.b)("p",null,"To use this demo, follow below steps to open 3 webpages,"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://vote-devops.k8s.devsecops.ink/"}),"webpage 1"),", this is sample vote demo application which is deployed to AKS already, currently, its version is ",Object(i.b)("inlineCode",{parentName:"li"},"Azure Voting App - Azure Devops Pipeline(v1)"),", highlight application version to your customer, lately the version will get changed to ",Object(i.b)("inlineCode",{parentName:"li"},"Azure Voting App - Azure Devops Pipeline(v2)")),Object(i.b)("li",{parentName:"ol"},"Open ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/devopsonazure/vote-devops/blob/master/azure-vote/config_file.cfg"}),"webpage 2"),", this is sample application configuration file, we are going to change the configuration, rebuild and deploy it to AKS."),Object(i.b)("li",{parentName:"ol"},"Open ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://dev.azure.com/pipelineonazure/vote-devops/_build"}),"webpage 3"),", this is Azure devops pipeline, we use this page to show how build & deploy works here.")),Object(i.b)("h2",{id:"demo-steps"},"Demo Steps"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Go to webpage 2, click edit icon and change TITLE from ",Object(i.b)("inlineCode",{parentName:"li"},"Azure Voting App - Azure Devops Pipeline(v1)")," to ",Object(i.b)("inlineCode",{parentName:"li"},"Azure Voting App - Azure Devops Pipeline(v2)"),Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"../../img/kubernetes-devops/devops-1.png",alt:"devops-1"}))),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"Commit changes")," button to commit the change\n",Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"../../img/kubernetes-devops/devops-2.png",alt:"devops-2"}))),Object(i.b)("li",{parentName:"ol"},"Switch to webpage 3, refresh the page (might be multiple times), it will display Azure devops pipeline is started eventually.\n",Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"../../img/kubernetes-devops/devops-3.png",alt:"devops-3"}))),Object(i.b)("li",{parentName:"ol"},"This is a multi-stages pipeline, it contains ",Object(i.b)("inlineCode",{parentName:"li"},"Build stage")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Deploy stage"),Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"../../img/kubernetes-devops/devops-4.png",alt:"devops-4"}))),Object(i.b)("li",{parentName:"ol"},"Click build and deploy stage, show it to your customer how  build & deploy stages look like\n",Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"../../img/kubernetes-devops/devops-5.png",alt:"devops-5"})),Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"../../img/kubernetes-devops/devops-6.png",alt:"devops-6"}))),Object(i.b)("li",{parentName:"ol"},"Once build & deploy are done (everything is green), switch to webpage 1, refresh the page, it should change the title to 'Azure Voting App - Azure Devops Pipeline(v2)'\n",Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"../../img/kubernetes-devops/devops-7.png",alt:"devops-7"}))),Object(i.b)("li",{parentName:"ol"},"If your customer is interested in how 'Azure Devops Pipeline' looks like, you could open this ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/devopsonazure/vote-devops/blob/master/azure-pipelines.yml"}),"link")," to show pipeline definitions.")))}c.isMDXComponent=!0},162:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return m}));var n=o(0),r=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},b=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=c(o),d=n,m=b["".concat(a,".").concat(d)]||b[d]||u[d]||i;return o?r.a.createElement(m,p(p({ref:t},l),{},{components:o})):r.a.createElement(m,p({ref:t},l))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var l=2;l<i;l++)a[l]=o[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);