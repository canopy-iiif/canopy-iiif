(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[434],{8966:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/example",function(){return i(8839)}])},9539:function(e,t,i){"use strict";var s=i(5893),a=i(6868),n=i(7294),u=i(934),r=i(2049),l=i(7606),o=i(2404),d=i(3382);let c=e=>{let{content:t,navigation:i}=e,[c,m]=(0,n.useState)();return(0,n.useEffect)(()=>{let e=document.createElement("html");e.innerHTML=(0,o.uS)(t);let i=Object.values(e.getElementsByTagName("h2")).map(e=>{let{textContent:t}=e;return{path:"#".concat((0,d.getSlug)(t)),text:t||""}});m(i)},[t]),(0,s.jsx)(r.Z,{children:(0,s.jsx)(u.Z,{containerType:"wide",children:(0,s.jsxs)(a.vs,{aside:!0,children:[i&&(0,s.jsx)(a.CH,{children:(0,s.jsx)(a.AH,{children:(0,s.jsx)(l.Z,{items:{primary:[{path:"/works",text:"Works"},{path:"/metadata",text:"Metadata"},{path:"/about",text:"About"}],about:[{path:"/about",text:"About"},{path:"/about/documentation",text:"Documentation"},{path:"/about/example",text:"Markdown Example"},{path:"/about/history",text:"Project History"}]}[i],subNavigation:c,orientation:"vertical"})})}),(0,s.jsx)(a.S4,{children:t})]})})})};t.Z=c},6868:function(e,t,i){"use strict";i.d(t,{AH:function(){return n},CH:function(){return u},S4:function(){return r},vs:function(){return l}});var s=i(9332),a=i(2121);let n=(0,s.zo)("div",{position:"fixed",width:"275px",paddingTop:"calc($gr4 + $gr3)",marginTop:"-$gr4",maxHeight:"calc(100% - $gr5 - ".concat(a.J9,"px)"),overflow:"scroll","@xs":{position:"relative",width:"100%",maxHeight:"auto",paddingTop:"0",marginTop:"0"}}),u=(0,s.zo)("aside",{width:"275px","@xs":{position:"relative",width:"100%",marginTop:"0",paddingBottom:"$gr2",borderBottom:"1px solid $slate6"}}),r=(0,s.zo)("div",{flexShrink:1,width:"calc(100% - 275px)","@xs":{width:"100%"}}),l=(0,s.zo)("div",{position:"relative",width:"100%",padding:"$gr4 0",display:"flex",variants:{aside:{true:{"@xs":{flexDirection:"column"}}}},"@md":{padding:"$gr2 0"}})},1674:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var s=i(5893);i(7294);var a=i(9332);let n=(0,a.zo)("h2",{variants:{isHidden:{true:{position:"absolute",visibility:"hidden"}}},"&[data-level=h1]":{margin:"$gr4 0",color:"$slate12",fontSize:"$gr8",fontWeight:"800",fontFamily:"$bookTight","@sm":{fontSize:"$gr7"}},"&[data-level=h2]":{margin:"$gr5 0 $gr4",color:"$slate11",fontSize:"$gr7",fontWeight:"200",fontFamily:"$bookTight","@sm":{fontSize:"$gr5"}},"&[data-level=h3]":{margin:"$gr5 0 $gr3",color:"$slate12",fontSize:"$gr5",fontWeight:"800",fontFamily:"$bookTight","@sm":{fontSize:"$gr4"}},"&[data-level=h4]":{},"&[data-level=h5]":{},"&[data-level=h6]":{}}),u=e=>{let{as:t="h2",css:i={},id:a,isHidden:u=!1,children:r}=e;return(0,s.jsx)(n,{as:t,isHidden:u,"data-level":t,css:i,id:a,children:(0,s.jsx)(s.Fragment,{children:r})})};var r=u},2564:function(e,t,i){"use strict";var s=i(5893);i(7294);var a=i(5152),n=i.n(a);let u=n()(()=>Promise.all([i.e(318),i.e(645),i.e(806),i.e(975)]).then(i.bind(i,615)),{loadableGenerated:{webpack:()=>[615]},ssr:!1}),r={colors:{accent:"$indigo10",accentAlt:"$indigo11",accentMuted:"$indigo8",primary:"$slate12",primaryAlt:"$slate12",primaryMuted:"$slate10",secondary:"$slate1",secondaryAlt:"$slate3",secondaryMuted:"$slate2"},fonts:{sans:"$book",display:"$bookTight"}},l={canvasBackgroundColor:"$slate6",canvasHeight:"600px",openSeadragon:{gestureSettingsMouse:{scrollToZoom:!1}},renderAbout:!1,showTitle:!1,showIIIFBadge:!1,showInformationToggle:!1},o=e=>{let{id:t,options:i}=e;return(0,s.jsx)(u,{id:t,options:{...l,...i},customTheme:r})};t.Z=o},2094:function(e,t,i){"use strict";i.d(t,{a:function(){return q}});var s=i(5893);i(7294);var a=i(640),n=i.n(a),u=i(7795),r=i(2121);let l={plain:{color:"var(--colors-indigo12)",fontSize:.9*r.hO,fontFamily:"Menlo, monospace"},styles:[{types:["boolean","string"],style:{color:"var(--colors-indigo10)"}},{types:["operator"],style:{color:"var(--colors-indigo11)"}},{types:["punctuation"],style:{color:"var(--colors-indigo8)"}}]};var o=i(9332),d=i(2765);let c=(0,o.zo)("div",{position:"relative",button:{position:"absolute",marginTop:"-$gr2",right:"$gr3"}}),m=(0,o.zo)("pre",{backgroundColor:"$indigo3",padding:"$gr3",borderRadius:"5px",lineHeight:"1.382em",overflowX:"scroll",overflowY:"visible",boxShadow:"inset 1px 1px 2px  ".concat(d.Eh.indigoA3),zIndex:"0"}),p=(0,o.zo)("code",{backgroundColor:"$indigo3",padding:"3px $gr1",borderRadius:"5px",fontSize:"$gr3",color:"$indigo11",boxShadow:"1px 1px 1px  ".concat(d.Eh.indigoA6)});var h=i(2990),g=i(2469);let f=e=>{let{children:t,language:i}=e;return(0,s.jsx)(u.ZP,{...u.lG,theme:l,code:t,language:i,children:e=>{let{style:i,tokens:a,getLineProps:u,getTokenProps:r}=e;return(0,s.jsxs)(c,{children:[(0,s.jsxs)(h.O,{buttonSize:"tiny",buttonType:"primary","aria-label":"Copy Code",onClick:()=>{n()(t)},css:{display:"flex",alignItems:"center"},children:["Copy\xa0",(0,s.jsx)(g.TIy,{})]}),(0,s.jsx)(m,{style:i,children:a.map((e,t)=>(0,s.jsx)("div",{...u({line:e,key:t}),children:e.map((e,i)=>(0,s.jsx)("span",{...r({token:e,key:i})},t))},t))})]})}})};var b=i(1674),v=i(3382);let x=e=>{let{children:t}=e;return(0,s.jsx)(y,{children:t})},y=(0,o.zo)("blockquote",{fontWeight:"300",color:"$slate11",padding:"$gr1 0"});function q(e){return{h1:e=>{let{children:t}=e;return(0,s.jsx)(b.Z,{as:"h1",children:t})},h2:e=>{let{children:t}=e;return(0,s.jsx)(b.Z,{as:"h2",id:(0,v.getSlug)(t),children:t})},h3:e=>{let{children:t}=e;return(0,s.jsx)(b.Z,{as:"h3",children:t})},code:e=>{let{children:t}=e;return(0,s.jsx)(p,{children:t})},blockquote:e=>{let{children:t}=e;return(0,s.jsx)(x,{children:t})},pre:e=>{var t;let{children:i}=e,a=i.props.children,n=null===(t=i.props.className)||void 0===t?void 0:t.replace("language-","");return(0,s.jsx)(f,{language:n,children:a.trim()})},...e}}},5677:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let i=n.default,a={loading:e=>{let{error:t,isLoading:i,pastDelay:s}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=s({},a,e)),a=s({},a,t);let l=a.loader,o=()=>null!=l?l().then(u):Promise.resolve(u(()=>null));return(a.loadableGenerated&&delete(a=s({},a,a.loadableGenerated)).loadableGenerated,"boolean"!=typeof a.ssr||a.ssr)?i(s({},a,{loader:o})):(delete a.webpack,delete a.modules,r(i,a))},t.noSSR=r;var s=i(6495).Z,a=i(2648).Z,n=(a(i(7294)),a(i(8976)));function u(e){return{default:(null==e?void 0:e.default)||e}}function r(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var s=(0,i(2648).Z)(i(7294));let a=s.default.createContext(null);t.LoadableContext=a},8976:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(6495).Z,a=(0,i(2648).Z)(i(7294)),n=i(2254);let u=[],r=[],l=!1;function o(e){let t=e(),i={loading:!0,loaded:null,error:null};return i.promise=t.then(e=>(i.loading=!1,i.loaded=e,e)).catch(e=>{throw i.loading=!1,i.error=e,e}),i}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let i=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),s=null;function u(){if(!s){let t=new d(e,i);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()}if(!l){let e=i.webpack?i.webpack():i.modules;e&&r.push(t=>{for(let i of e)if(-1!==t.indexOf(i))return u()})}function o(e,t){!function(){u();let e=a.default.useContext(n.LoadableContext);e&&Array.isArray(i.modules)&&i.modules.forEach(t=>{e(t)})}();let r=a.default.useSyncExternalStore(s.subscribe,s.getCurrentValue,s.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:s.retry}),[]),a.default.useMemo(()=>{var t;return r.loading||r.error?a.default.createElement(i.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:s.retry}):r.loaded?a.default.createElement((t=r.loaded)&&t.default?t.default:t,e):null},[e,r])}return o.preload=()=>u(),o.displayName="LoadableComponent",a.default.forwardRef(o)}(o,e)}function m(e,t){let i=[];for(;e.length;){let s=e.pop();i.push(s(t))}return Promise.all(i).then(()=>{if(e.length)return m(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{m(u).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let i=()=>(l=!0,t());m(r,e).then(i,i)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},3382:function(e,t,i){"use strict";let s=i(1304),a={lower:!0,strict:!0,trim:!0};function n(e){return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.substring(0,t)}(s(e,a),100)}e.exports={getSlug:n,getUniqueSlug:function(e,t){var i;let s=n(e),a=(i=t[s])?i+1:1;return{slug:a>1?"".concat(s,"-").concat(a):s,allSlugs:{...t,[s]:a}}}}},8839:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var s=i(5893),a=i(2094),n=i(9539),u=i(2564);let r=e=>{let{id:t}=e;return(0,s.jsx)(u.Z,{id:t,options:{showTitle:!0,showIIIFBadge:!1,showInformationToggle:!1,renderAbout:!1}})},l=e=>{let{children:t}=e;return(0,s.jsx)(n.Z,{content:t,navigation:"about"})};function o(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote",pre:"pre",code:"code"},(0,a.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{children:"Markdown Example"}),"\n",(0,s.jsx)(t.p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in velit accumsan, pretium ante eget, tincidunt purus. Aenean eu tincidunt purus. Aliquam tristique, enim sed tincidunt auctor, ligula libero posuere metus, et cursus mi diam in urna. Donec eu justo vestibulum, viverra eros a, auctor metus. Integer mauris neque, laoreet vitae porta vel, egestas a ex. Phasellus congue ligula sed aliquam commodo. In id lacus lorem. Etiam vitae lectus sapien."}),"\n",(0,s.jsx)(t.h2,{children:"Subheading"}),"\n",(0,s.jsx)(t.p,{children:"Vivamus pellentesque est ac tellus feugiat ultrices. Nam dapibus hendrerit mattis. Vestibulum elementum nibh lacus, sit amet maximus lacus euismod dignissim. Nullam rutrum malesuada mauris sed imperdiet. Nam dolor massa, consectetur ut rutrum tempor, ultrices pellentesque mauris. Fusce ut mauris eu nibh interdum hendrerit et quis purus. Nam at arcu leo. Vivamus vel ex lectus. Sed ac leo consectetur, lobortis mi nec, tristique tellus. Maecenas lorem sem, mattis quis ultrices in, ornare et turpis. Donec interdum metus non rhoncus mollis. Pellentesque ac congue lacus."}),"\n",(0,s.jsx)(r,{id:"/api/facet/date/1909"}),"\n",(0,s.jsx)(t.h2,{children:"Another Subheading"}),"\n",(0,s.jsx)(t.p,{children:"Quisque at aliquam augue. Nam eu tincidunt nisl. Duis egestas libero magna, sit amet feugiat odio porttitor finibus. Quisque quis purus vel urna laoreet ornare eu a odio. Nunc malesuada sed leo ac finibus. Vivamus varius sed velit et suscipit. Ut viverra tristique maximus. Suspendisse dapibus semper enim sit amet hendrerit. Aenean quam leo, vehicula vitae feugiat laoreet, hendrerit vestibulum velit. Nunc dapibus et ipsum id suscipit. Duis gravida, mi a scelerisque blandit, quam leo consectetur sem, a sollicitudin nisl libero id enim. Maecenas ut feugiat libero, porttitor maximus felis. Sed mattis elit ut felis eleifend, elementum dignissim purus elementum. Sed faucibus, nulla nec consequat auctor, tortor ipsum finibus sem, non faucibus lectus ex sit amet mi. Proin eget iaculis nibh, sed pellentesque erat. Sed vel tristique ipsum."}),"\n",(0,s.jsx)(t.h3,{children:"Quisque ut ullamcorper arcu."}),"\n",(0,s.jsx)(t.p,{children:"Integer tristique tempor nunc non egestas. Suspendisse velit leo, ornare eleifend commodo sit amet, fermentum id ex. Ut aliquet suscipit mollis. Aliquam varius lacus cursus, iaculis leo in, sodales sem."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Donec viverra nibh id efficitur viverra."}),"\n",(0,s.jsx)(t.li,{children:"Nulla dui mauris, accumsan vel mollis at, pharetra a purus."}),"\n",(0,s.jsx)(t.li,{children:"Interdum et malesuada fames ac ante ipsum primis in faucibus."}),"\n",(0,s.jsx)(t.li,{children:"Donec feugiat nibh egestas massa hendrerit scelerisque."}),"\n"]}),"\n",(0,s.jsx)(r,{id:"https://api.dc.library.northwestern.edu/api/v2/works/15871197-1616-4c37-9257-b0ad0dc5ab30?as=iiif"}),"\n",(0,s.jsx)(t.h3,{children:"Subheading"}),"\n",(0,s.jsx)(t.p,{children:"Vivamus laoreet diam id urna porta ultricies. Donec imperdiet bibendum dui, eleifend auctor ex tempus ut. Sed vitae enim nulla. Cras non nulla luctus odio ullamcorper feugiat."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Aenean viverra quam sit amet sapien tempor, vel sagittis velit ultricies. In imperdiet posuere risus non sodales. Mauris posuere elit a lectus vehicula, nec ullamcorper metus aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Pellentesque et scelerisque tellus, nec vehicula nisi. Mauris auctor nisl non bibendum varius. Donec nec pretium leo. Sed ut sapien metus. Nullam elementum est leo, ac ornare ipsum accumsan id. Sed nec metus sed lacus fringilla feugiat. Nulla ut nunc sem. Ut efficitur tincidunt mi. Curabitur sed dapibus ex. Nunc non condimentum enim. Mauris scelerisque scelerisque nisi, eget auctor mauris tempus vitae. Fusce et turpis mauris. Vestibulum egestas condimentum euismod. Duis mauris dolor, tempor in cursus a, ultricies in arcu."}),"\n",(0,s.jsx)(t.h2,{children:"Example MDX"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'import Basic from "@/components/Layouts/Basic";\nimport Viewer from "@/components/Embed/Viewer";\n\n# Markdown Example\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in velit accumsan, pretium ante eget, tincidunt purus. Aenean eu tincidunt purus. Aliquam tristique, enim sed tincidunt auctor, ligula libero posuere metus, et cursus mi diam in urna. Donec eu justo vestibulum, viverra eros a, auctor metus. Integer mauris neque, laoreet vitae porta vel, egestas a ex. Phasellus congue ligula sed aliquam commodo. In id lacus lorem. Etiam vitae lectus sapien.\n\n## Subheading\n\nVivamus pellentesque est ac tellus feugiat ultrices. Nam dapibus hendrerit mattis. Vestibulum elementum nibh lacus, sit amet maximus lacus euismod dignissim. Nullam rutrum malesuada mauris sed imperdiet. Nam dolor massa, consectetur ut rutrum tempor, ultrices pellentesque mauris. Fusce ut mauris eu nibh interdum hendrerit et quis purus. Nam at arcu leo. Vivamus vel ex lectus. Sed ac leo consectetur, lobortis mi nec, tristique tellus. Maecenas lorem sem, mattis quis ultrices in, ornare et turpis. Donec interdum metus non rhoncus mollis. Pellentesque ac congue lacus.\n\n<Viewer id="/api/facet/date/1905" />\n\n## Another Subheading\n\nQuisque at aliquam augue. Nam eu tincidunt nisl. Duis egestas libero magna, sit amet feugiat odio porttitor finibus. Quisque quis purus vel urna laoreet ornare eu a odio. Nunc malesuada sed leo ac finibus. Vivamus varius sed velit et suscipit. Ut viverra tristique maximus. Suspendisse dapibus semper enim sit amet hendrerit. Aenean quam leo, vehicula vitae feugiat laoreet, hendrerit vestibulum velit. Nunc dapibus et ipsum id suscipit. Duis gravida, mi a scelerisque blandit, quam leo consectetur sem, a sollicitudin nisl libero id enim. Maecenas ut feugiat libero, porttitor maximus felis. Sed mattis elit ut felis eleifend, elementum dignissim purus elementum. Sed faucibus, nulla nec consequat auctor, tortor ipsum finibus sem, non faucibus lectus ex sit amet mi. Proin eget iaculis nibh, sed pellentesque erat. Sed vel tristique ipsum.\n\n### Quisque ut ullamcorper arcu.\n\nInteger tristique tempor nunc non egestas. Suspendisse velit leo, ornare eleifend commodo sit amet, fermentum id ex. Ut aliquet suscipit mollis. Aliquam varius lacus cursus, iaculis leo in, sodales sem.\n\n- Donec viverra nibh id efficitur viverra.\n- Nulla dui mauris, accumsan vel mollis at, pharetra a purus.\n- Interdum et malesuada fames ac ante ipsum primis in faucibus.\n- Donec feugiat nibh egestas massa hendrerit scelerisque.\n\n<Viewer id="https://api.dc.library.northwestern.edu/api/v2/works/15871197-1616-4c37-9257-b0ad0dc5ab30?as=iiif" />\n\n### Subheading\n\nVivamus laoreet diam id urna porta ultricies. Donec imperdiet bibendum dui, eleifend auctor ex tempus ut. Sed vitae enim nulla. Cras non nulla luctus odio ullamcorper feugiat.\n\n> Aenean viverra quam sit amet sapien tempor, vel sagittis velit ultricies. In imperdiet posuere risus non sodales. Mauris posuere elit a lectus vehicula, nec ullamcorper metus aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nPellentesque et scelerisque tellus, nec vehicula nisi. Mauris auctor nisl non bibendum varius. Donec nec pretium leo. Sed ut sapien metus. Nullam elementum est leo, ac ornare ipsum accumsan id. Sed nec metus sed lacus fringilla feugiat. Nulla ut nunc sem. Ut efficitur tincidunt mi. Curabitur sed dapibus ex. Nunc non condimentum enim. Mauris scelerisque scelerisque nisi, eget auctor mauris tempus vitae. Fusce et turpis mauris. Vestibulum egestas condimentum euismod. Duis mauris dolor, tempor in cursus a, ultricies in arcu.\n\nexport default ({ children }) => (\n  <Basic content={children} navigation="about" />\n);\n'})})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(l,Object.assign({},e,{children:(0,s.jsx)(o,e)}))}},5152:function(e,t,i){e.exports=i(5677)}},function(e){e.O(0,[774,27,409,448,118,870,888,179],function(){return e(e.s=8966)}),_N_E=e.O()}]);