(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{155:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var o=r(2),n=r(10),a=(r(0),r(162)),i=r(163),c={id:"arc-for-kubernetes",title:"Arc for Kubernetes"},s={id:"kubernetes-devops/arc-for-kubernetes",isDocsHomePage:!1,title:"Arc for Kubernetes",description:"Arc for Kubernetes Demo Scenarios",source:"@site/docs/kubernetes-devops/arc-for-kubernetes.mdx",permalink:"/demokit/docs/kubernetes-devops/arc-for-kubernetes",editUrl:"https://github.com/azure/demokit/edit/master/docs/kubernetes-devops/arc-for-kubernetes.mdx",sidebar:"sidebar",previous:{title:"Kubernetes DevOps Introduction",permalink:"/demokit/docs/kubernetes-devops/index"},next:{title:"Github Actions",permalink:"/demokit/docs/kubernetes-devops/github"}},l=[{value:"Arc for Kubernetes Demo Scenarios",id:"arc-for-kubernetes-demo-scenarios",children:[]},{value:"GitOps Demo",id:"gitops-demo",children:[]},{value:"Arc Enabled Cluster Monitoring Demo",id:"arc-enabled-cluster-monitoring-demo",children:[]},{value:"Arc Enabled Cluster Policy Demo",id:"arc-enabled-cluster-policy-demo",children:[]}],b={rightToc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"arc-for-kubernetes-demo-scenarios"},"Arc for Kubernetes Demo Scenarios"),Object(a.b)("p",null,"Arc for Kubernetes contains below demos"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"GitOps demo, by leveraging github and Arc for Kubernetes shows how to deploy your packages to AKS cluster."),Object(a.b)("li",{parentName:"ul"},"Kubernetes cluster monitoring demo, shows how to monitor Kubernetes cluster from on-premises or from other cloud provider."),Object(a.b)("li",{parentName:"ul"},"Azure Kubernetes policy demo, shows how to apply policy controls on Arc managed Kubernetes cluster.")),Object(a.b)("h2",{id:"gitops-demo"},"GitOps Demo"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click this ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://ms.portal.azure.com/?feature.azureArc=true&Microsoft_Azure_ContainerService=flight4&feature.enablearck8smonitoring=true&feature.azureAroV4=true#@microsoft.onmicrosoft.com/resource/subscriptions/513df66c-64b0-4c0b-a13a-7f37bb384aff/resourceGroups/AzureArc/providers/Microsoft.Kubernetes/connectedClusters/K8SARC/overview",target:"_blank",rel:"nofollow noopener noreferrer"}),"URL"),', it is an "Arc for Kubernetes" environment shows in Azure portal, you can click each blade and shows how it looks like.'),Object(a.b)("img",{alt:"arc-1",src:Object(i.a)("img/kubernetes-devops/arc-1.png")})),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"From browser, open URL ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://vote-arc.k8s.devsecops.ink",target:"_blank",rel:"nofollow noopener noreferrer"}),"http://vote-arc.k8s.devsecops.ink"),", this is an application deployed into Arc managed Kubernetes cluster, we will demo how to apply GitOps on this application, currently the application has version v1, highlight the version to your customer at this moment."),Object(a.b)("img",{alt:"arc-2",src:Object(i.a)("img/kubernetes-devops/arc-2.png")})),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"From browser, open ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/devopsonazure/vote-arc/blob/master/manifests/deployment.yml",target:"_blank",rel:"nofollow noopener noreferrer"}),"https://github.com/devopsonazure/vote-arc/blob/master/manifests/deployment.yml")," this is the source project hosted in github, you should be able to edit this file with your own GitHub account. Explain to your customer it is already deployed to Arc managed Kubernetes cluster, you are going to simulate the a deployment by modifying the deployment source, step 1 is clicking the highlighted button, step 2 modifying image from huangyingting/azre-vote-front-arc:v1 to huangyingting/azure-vote-front-arc:v2, or v3, v4, v5."),Object(a.b)("img",{alt:"arc-3",src:Object(i.a)("img/kubernetes-devops/arc-3.png")})),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Click "Commit changes" button to commit the change.'),Object(a.b)("img",{alt:"arc-4",src:Object(i.a)("img/kubernetes-devops/arc-4.png")})),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'It should take 1 \u2013 2 minutes to apply the new change, right now, you could go to webpage opened in step 1, then go to Configurations->Add configuration, explain to your customer how to deploy an application from "Arc for Kubernetes", a sample configuration is provided in below screen shot, basically it is related with writing kubernete yaml files or creating helm deployment files, in this demo, we simply use a Kubernetes yaml files, all those yaml files are in ',Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/devopsonazure/vote-arc/tree/master/manifests",target:"_blank",rel:"nofollow noopener noreferrer"}),"https://github.com/devopsonazure/vote-arc/tree/master/manifests"),", so just explain to your customer how it looks like."),Object(a.b)("img",{alt:"arc-5",src:Object(i.a)("img/kubernetes-devops/arc-5.png")})),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Open URL ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://vote-arc.k8s.devsecops.ink",target:"_blank",rel:"nofollow noopener noreferrer"}),"http://vote-arc.k8s.devsecops.ink"),", refresh it, now it should change to corresponding version."),Object(a.b)("img",{alt:"arc-6",src:Object(i.a)("img/kubernetes-devops/arc-6.png")}))),Object(a.b)("h2",{id:"arc-enabled-cluster-monitoring-demo"},"Arc Enabled Cluster Monitoring Demo"),Object(a.b)("p",null,"Click this ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://ms.portal.azure.com/?feature.azureArc=true&Microsoft_Azure_ContainerService=flight4&feature.enablearck8smonitoring=true&feature.azureAroV4=true#@microsoft.onmicrosoft.com/resource/subscriptions/513df66c-64b0-4c0b-a13a-7f37bb384aff/resourceGroups/AzureArc/providers/Microsoft.Kubernetes/connectedClusters/K8SARC/overview",target:"_blank",rel:"nofollow noopener noreferrer"}),"URL"),", from opened Azure portal, go to Monitoring->Insights(preview), now you can demo how Arc for Kubernetes monitoring works, click Cluster, Health (Preview), Nodes, Controller and Containers, explain how monitoring looks like in Arc for Kubernetes.\nThe detailed reference document can be found at ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/azure-arc/kubernetes/deploy-azure-monitor-for-containers",target:"_blank",rel:"nofollow noopener noreferrer"}),"Enable monitoring of Azure Arc enabled Kubernetes cluster")),Object(a.b)("img",{alt:"arc-7",src:Object(i.a)("img/kubernetes-devops/arc-7.png")}),Object(a.b)("h2",{id:"arc-enabled-cluster-policy-demo"},"Arc Enabled Cluster Policy Demo"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Arc for Kubernetes leverages ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/open-policy-agent/gatekeeper",target:"_blank",rel:"nofollow noopener noreferrer"}),"gatekeeper")," to meet governance and legal requirements, the policy definition is integrated into Azure policy itself, to demo how it works, click this ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://ms.portal.azure.com/?feature.azureArc=true&Microsoft_Azure_ContainerService=flight4&feature.enablearck8smonitoring=true&feature.azureAroV4=true#@microsoft.onmicrosoft.com/resource/subscriptions/513df66c-64b0-4c0b-a13a-7f37bb384aff/resourceGroups/AzureArc/providers/Microsoft.Kubernetes/connectedClusters/K8SARC/overview",target:"_blank",rel:"nofollow noopener noreferrer"}),"URL"),", then go to Policies, "),Object(a.b)("img",{alt:"arc-8",src:Object(i.a)("img/kubernetes-devops/arc-8.png")})),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Click "',"[Preview]",': Ensure services listen only on allowed ports in Kubernetes cluster" policy, then "Edit assignment", from opened page, go to "Parameters", explain to customer current policy assignment only allows port 6379, 80, 11211 and 443, if a deployment tries to create other ports like port 8080, then it will get denied.'),Object(a.b)("img",{alt:"arc-9",src:Object(i.a)("img/kubernetes-devops/arc-9.png")})),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Close "Assignment Details", then go to "View definition", it will list policy definition in ARM template, go to constraintTemplate, open the URL, it will reveal how the real policy looks like, it is an OPA constraint template.'),Object(a.b)("img",{alt:"arc-10",src:Object(i.a)("img/kubernetes-devops/arc-10.png")})),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"To show how constraint template works, "))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Visit ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://shell.azure.com",target:"_blank",rel:"nofollow noopener noreferrer"}),"https://shell.azure.com"),", choose Bash"),Object(a.b)("li",{parentName:"ul"},"From cloud shell, run ",Object(a.b)("inlineCode",{parentName:"li"},"git clone https://github.com/devopsonazure/devopsonazure")),Object(a.b)("li",{parentName:"ul"},"Type ",Object(a.b)("inlineCode",{parentName:"li"},"cd devopsonazure")),Object(a.b)("li",{parentName:"ul"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"kubectl --kubeconfig arcpolicy apply -f https://raw.githubusercontent.com/devopsonazure/vote-arc/master/policy/service-port-not-allowed.yaml -n policy"),", this command basically tries to deploy a service at 8080, because our policy doesn\u2019t allow port 8080, so it will end with below error",Object(a.b)("img",{alt:"arc-11",src:Object(i.a)("img/kubernetes-devops/arc-11.png")})),Object(a.b)("li",{parentName:"ul"},"Open ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://raw.githubusercontent.com/devopsonazure/vote-arc/master/policy/service-port-not-allowed.yaml",target:"_blank",rel:"nofollow noopener noreferrer"}),"https://raw.githubusercontent.com/devopsonazure/vote-arc/master/policy/service-port-not-allowed.yaml")," to explain the service tries to bind to port 8080. ")))}p.isMDXComponent=!0},161:function(e,t,r){"use strict";var o=r(0),n=r(53);t.a=function(){return Object(o.useContext)(n.a)}},162:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(r),m=o,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return r?n.a.createElement(d,c(c({ref:t},l),{},{components:r})):n.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},163:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(76);var o=r(161),n=r(164);function a(e,t){var r=void 0===t?{}:t,a=r.forcePrependBaseUrl,i=void 0!==a&&a,c=r.absolute,s=void 0!==c&&c,l=Object(o.a)().siteConfig,b=(l=void 0===l?{}:l).baseUrl,p=void 0===b?"/":b,u=l.url;if(!e)return e;if(i)return p+e;if(!Object(n.a)(e))return e;var m=p+e.replace(/^\//,"");return s?u+m:m}},164:function(e,t,r){"use strict";function o(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return o}))}}]);