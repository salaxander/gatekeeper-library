"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5696],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>g});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,d=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return a?t.createElement(d,l(l({ref:n},m),{},{components:a})):t.createElement(d,l({ref:n},m))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7509:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const o={id:"allowedrepos",title:"Allowed Repositories"},l="Allowed Repositories",i={unversionedId:"allowedrepos",id:"allowedrepos",title:"Allowed Repositories",description:"Description",source:"@site/docs/allowedrepos.md",sourceDirName:".",slug:"/allowedrepos",permalink:"/gatekeeper-library/website/allowedrepos",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/allowedrepos.md",tags:[],version:"current",frontMatter:{id:"allowedrepos",title:"Allowed Repositories"},sidebar:"docs",previous:{title:"Introduction",permalink:"/gatekeeper-library/website/"},next:{title:"Automount Service Account Token for Pod",permalink:"/gatekeeper-library/website/automount-serviceaccount-token"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:2}],m={toc:p};function c(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"allowed-repositories"},"Allowed Repositories"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Requires container images to begin with a string from the specified list."),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8sallowedrepos\n  annotations:\n    metadata.gatekeeper.sh/title: "Allowed Repositories"\n    description: >-\n      Requires container images to begin with a string from the specified list.\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sAllowedRepos\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          properties:\n            repos:\n              description: The list of prefixes a container image is allowed to have.\n              type: array\n              items:\n                type: string\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8sallowedrepos\n\n        violation[{"msg": msg}] {\n          container := input.review.object.spec.containers[_]\n          satisfied := [good | repo = input.parameters.repos[_] ; good = startswith(container.image, repo)]\n          not any(satisfied)\n          msg := sprintf("container <%v> has an invalid image repo <%v>, allowed repos are %v", [container.name, container.image, input.parameters.repos])\n        }\n\n        violation[{"msg": msg}] {\n          container := input.review.object.spec.initContainers[_]\n          satisfied := [good | repo = input.parameters.repos[_] ; good = startswith(container.image, repo)]\n          not any(satisfied)\n          msg := sprintf("initContainer <%v> has an invalid image repo <%v>, allowed repos are %v", [container.name, container.image, input.parameters.repos])\n        }\n\n        violation[{"msg": msg}] {\n          container := input.review.object.spec.ephemeralContainers[_]\n          satisfied := [good | repo = input.parameters.repos[_] ; good = startswith(container.image, repo)]\n          not any(satisfied)\n          msg := sprintf("ephemeralContainer <%v> has an invalid image repo <%v>, allowed repos are %v", [container.name, container.image, input.parameters.repos])\n        }\n\n')),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/allowedrepos/template.yaml\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"allowed-repos"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sAllowedRepos\nmetadata:\n  name: repo-is-openpolicyagent\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n    namespaces:\n      - "default"\n  parameters:\n    repos:\n      - "openpolicyagent/"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/allowedrepos/samples/repo-must-be-openpolicyagent/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: opa-allowed\nspec:\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "30Mi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/allowedrepos/samples/repo-must-be-openpolicyagent/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"container-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-disallowed\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "30Mi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/allowedrepos/samples/repo-must-be-openpolicyagent/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"initcontainer-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-disallowed\nspec:\n  initContainers:\n    - name: nginxinit\n      image: nginx\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "30Mi"\n  containers:\n    - name: opa\n      image: openpolicyagent/opa:0.9.2\n      args:\n        - "run"\n        - "--server"\n        - "--addr=localhost:8080"\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "30Mi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/allowedrepos/samples/repo-must-be-openpolicyagent/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"both-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-disallowed\nspec:\n  initContainers:\n  - name: nginxinit\n    image: nginx\n    resources:\n      limits:\n        cpu: "100m"\n        memory: "30Mi"\n  containers:\n    - name: nginx\n      image: nginx\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "30Mi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/allowedrepos/samples/repo-must-be-openpolicyagent/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"all-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-disallowed\nspec:\n  initContainers:\n  - name: nginx\n    image: nginx\n    resources:\n      limits:\n        cpu: "100m"\n        memory: "30Mi"\n  containers:\n    - name: nginx\n      image: nginx\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "30Mi"\n  ephemeralContainers:\n    - name: nginx\n      image: nginx\n      resources:\n        limits:\n          cpu: "100m"\n          memory: "30Mi"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/allowedrepos/samples/repo-must-be-openpolicyagent/constraint.yaml\n"))))))}c.isMDXComponent=!0}}]);