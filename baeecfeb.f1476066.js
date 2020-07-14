(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(10),i=(n(0),n(163)),a=n(162),l={id:"github",title:"Github Actions"},s={id:"kubernetes-devops/github",isDocsHomePage:!1,title:"Github Actions",description:"Github Actions Demo Scenarios",source:"@site/docs/kubernetes-devops/github.mdx",permalink:"/demokit/docs/kubernetes-devops/github",editUrl:"https://github.com/azure/demokit/edit/master/docs/kubernetes-devops/github.mdx",sidebar:"sidebar",previous:{title:"Arc for Kubernetes",permalink:"/demokit/docs/kubernetes-devops/arc-for-kubernetes"},next:{title:"Azure DevOps",permalink:"/demokit/docs/kubernetes-devops/devops"}},c=[{value:"Github Actions Demo Scenarios",id:"github-actions-demo-scenarios",children:[]},{value:"Demo Steps",id:"demo-steps",children:[{value:"Github Actions Pipeline",id:"github-actions-pipeline",children:[]},{value:"Canary Deployment on AKS",id:"canary-deployment-on-aks",children:[]},{value:"Rollback on Error",id:"rollback-on-error",children:[]}]}],b={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"github-actions-demo-scenarios"},"Github Actions Demo Scenarios"),Object(i.b)("p",null,"Github devops demo leverages github actions to build application, generate docker image, push image to azure container registry, and deploy image to AKS. This demo supports below scenarios"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Github actions pipeline \u2013 build & deploy"),Object(i.b)("li",{parentName:"ul"},"Canary deployment on AKS"),Object(i.b)("li",{parentName:"ul"},"Roll back on error to previous successful deployment")),Object(i.b)("p",null,'To use this demo, follow "Demo Steps" in below section'),Object(i.b)("h2",{id:"demo-steps"},"Demo Steps"),Object(i.b)("h3",{id:"github-actions-pipeline"},"Github Actions Pipeline"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open URL ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/devopsonazure/vote-github/blob/master/azure-vote/config_file.cfg",target:"_blank",rel:"nofollow noopener noreferrer"}),"https://github.com/devopsonazure/vote-github/blob/master/azure-vote/config_file.cfg"),", click edit icon and change TITLE from ",Object(i.b)("inlineCode",{parentName:"li"},"Azure Voting App - Github Actions(v1)")," to ",Object(i.b)("inlineCode",{parentName:"li"}," Azure Voting App - Github Actions(v2)"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-txt",metastring:"{2}","{2}":!0}),"# UI Configurations\nTITLE = 'Azure Voting App - Github Actions(v1)'\nVOTE1VALUE = 'Cats'\nVOTE2VALUE = 'Dogs'\nSHOWHOST = 'false'\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"Commit changes")," button to commit the change.",Object(i.b)("img",{alt:"github-2",src:Object(a.a)("img/kubernetes-devops/github-2.png")})),Object(i.b)("li",{parentName:"ol"},"Open URL ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/devopsonazure/vote-github/actions",target:"_blank",rel:"nofollow noopener noreferrer"}),"https://github.com/devopsonazure/vote-github/actions"),", refresh the page (might be multiple times), it should display github actions pipeline is started eventually. Two actions should be running, one is code scanning, another is build and deploy. ",Object(i.b)("img",{alt:"github-3",src:Object(a.a)("img/kubernetes-devops/github-3.png")})),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"Build and deploy")," action, it has two stages, one is build and another is deploy, explain to your customer what activities github action is doing right now, basically, ",Object(i.b)("inlineCode",{parentName:"li"},"Build and deploy")," action will build code, push image to azure container registry, and deploy image to AKS.",Object(i.b)("img",{alt:"github-4",src:Object(a.a)("img/kubernetes-devops/github-4.png")})),Object(i.b)("li",{parentName:"ol"},"Once build & deploy is completed, open URL ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://vote-github.k8s.devsecops.ink/",target:"_blank",rel:"nofollow noopener noreferrer"}),"http://vote-github.k8s.devsecops.ink/"),", application's version should be changed to ",Object(i.b)("inlineCode",{parentName:"li"},"Azure Voting App \u2013 Github Actions(v2)"),Object(i.b)("img",{alt:"github-5",src:Object(a.a)("img/kubernetes-devops/github-5.png")}))),Object(i.b)("h3",{id:"canary-deployment-on-aks"},"Canary Deployment on AKS"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open URL ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/devopsonazure/vote-github/edit/master/.github/workflows/build-deploy.yaml",target:"_blank",rel:"nofollow noopener noreferrer"}),"https://github.com/devopsonazure/vote-github/edit/master/.github/workflows/build-deploy.yaml"),", uncomment highlighted lines in below then commit the change to github.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml",metastring:"{14-15}","{14-15}":!0}),'    - name: "Deploy azure vote front"\n      uses: Azure/k8s-deploy@v1\n      timeout-minutes: 5\n      with:\n        namespace: ${{env.NAMESPACE}}\n        manifests: |\n          manifests/front.yml\n          manifests/service.yml\n          manifests/ingress.yml\n        images: |\n          ${{secrets.REGISTRY_URL}}/${{env.IMAGE_NAME}}:${{ github.sha }}\n        imagepullsecrets: |\n          acr-secret\n        #strategy: canary\n        #percentage: 100\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Open URL ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/devopsonazure/vote-github/blob/master/azure-vote/config_file.cfg",target:"_blank",rel:"nofollow noopener noreferrer"}),"https://github.com/devopsonazure/vote-github/blob/master/azure-vote/config_file.cfg"),", modify highlighted line to ",Object(i.b)("inlineCode",{parentName:"li"},"'Azure Voting App - Github Actions(v3)'"),", then commit change\u3002")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-txt",metastring:"{2}","{2}":!0}),"# UI Configurations\nTITLE = 'Azure Voting App - Github Actions(v1)'\nVOTE1VALUE = 'Cats'\nVOTE2VALUE = 'Dogs'\nSHOWHOST = 'false'\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Open URL ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://vote-github.k8s.devsecops.ink/",target:"_blank",rel:"nofollow noopener noreferrer"}),"http://vote-github.k8s.devsecops.ink/"),", application's version should be changed to v3.",Object(i.b)("img",{alt:"github-8",src:Object(a.a)("img/kubernetes-devops/github-8.png")})),Object(i.b)("li",{parentName:"ol"},"Now, open a new browser and use in-private mode, go to URL ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://vote-github.k8s.devsecops.ink/",target:"_blank",rel:"nofollow noopener noreferrer"}),"http://vote-github.k8s.devsecops.ink/"),", you will find application's version remains at v2.",Object(i.b)("img",{alt:"github-9",src:Object(a.a)("img/kubernetes-devops/github-9.png")})),Object(i.b)("li",{parentName:"ol"},"This is because we have enabled canary deployment, version v2 and v3 are both exist in same cluster, AKS will handle the requests and distribute them to different version of services.  From AKS backend, it has two deploys, refer to highlighted lines in below")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh",metastring:"{4,6}","{4,6}":!0}),"kubectl get deploy -n github \nNAME                        READY   UP-TO-DATE   AVAILABLE   AGE\nazure-vote-back             1/1     1            1           3d23h\nazure-vote-front            1/1     1            1           3d19h\nazure-vote-front-baseline   1/1     1            1           22m\nazure-vote-front-canary     1/1     1            1           22m\n")),Object(i.b)("h3",{id:"rollback-on-error"},"Rollback on Error"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open URL ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/devopsonazure/vote-github/edit/master/.github/workflows/build-deploy.yaml",target:"_blank",rel:"nofollow noopener noreferrer"}),"https://github.com/devopsonazure/vote-github/edit/master/.github/workflows/build-deploy.yaml"),', append "_failed" into below highlighted line, change it to ',Object(i.b)("inlineCode",{parentName:"li"},"${{secrets.REGISTRY_URL}}/${{env.IMAGE_NAME}}:${{ github.sha }}_failed"),", then commit change to github, it will trigger a failed deployment")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml",metastring:"{11}","{11}":!0}),'    - name: "Deploy azure vote front"\n      uses: Azure/k8s-deploy@v1\n      timeout-minutes: 5\n      with:\n        namespace: ${{env.NAMESPACE}}\n        manifests: |\n          manifests/front.yml\n          manifests/service.yml\n          manifests/ingress.yml\n        images: |\n          ${{secrets.REGISTRY_URL}}/${{env.IMAGE_NAME}}:${{ github.sha }}\n        imagepullsecrets: |\n          acr-secret\n        #strategy: canary\n        #percentage: 100\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Open URL ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/devopsonazure/vote-github/actions",target:"_blank",rel:"nofollow noopener noreferrer"}),"https://github.com/devopsonazure/vote-github/actions"),", click the newest ",Object(i.b)("inlineCode",{parentName:"li"},"Build and deploy")," pipeline, wait for a while until the deployment get failed, show below screen to your customer, github actions pipeline will roll back on error to previous successful deployment.",Object(i.b)("img",{alt:"github-11",src:Object(a.a)("img/kubernetes-devops/github-11.png")})),Object(i.b)("li",{parentName:"ol"},"Open URL ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://vote-github.k8s.devsecops.ink/",target:"_blank",rel:"nofollow noopener noreferrer"}),"http://vote-github.k8s.devsecops.ink/"),", the application is still running, it proves the service is not affected by failed deployment.")))}u.isMDXComponent=!0},161:function(e,t,n){"use strict";var o=n(0),r=n(52);t.a=function(){return Object(o.useContext)(r.a)}},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(76);var o=n(161),r=n(164);function i(e,t){var n=void 0===t?{}:t,i=n.forcePrependBaseUrl,a=void 0!==i&&i,l=n.absolute,s=void 0!==l&&l,c=Object(o.a)().siteConfig,b=(c=void 0===c?{}:c).baseUrl,u=void 0===b?"/":b,p=c.url;if(!e)return e;if(a)return u+e;if(!Object(r.a)(e))return e;var m=u+e.replace(/^\//,"");return s?p+m:m}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=o,d=u["".concat(a,".").concat(m)]||u[m]||p[m]||i;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},164:function(e,t,n){"use strict";function o(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return o}))}}]);