(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{8266:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return t(7780)}])},7780:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return eO}});var n=t(5893),o=t(7294),i=t(934),l=t(9332),r=t(1528);let s=(0,l.zo)(r.fC,{});var d=t(5177),u=t(2765),c=t(9182);let g=(0,l.zo)(r.VY,{width:"calc(100% - $gr5 * 2)",maxWidth:c.G.default,maxHeight:"calc(100% - $gr5 * 2)",background:"$slate2",position:"fixed",top:"$gr5",left:"50%",overflowY:"auto",zIndex:"10",borderRadius:"3px",boxShadow:"5px 5px 13px ".concat(u.VS.slateA7),borderTop:"1px solid $slateA1",borderBottom:"1px solid $slateA4",transform:"translateX(-50%)",overflow:"clip",display:"flex","@lg":{width:"calc(100% - $gr4 * 2)",maxHeight:"calc(100% - $gr4 * 2)",top:"$gr4"},"@sm":{width:"calc(100% - $gr3 * 2)",maxHeight:"calc(100% - $gr3 * 2)",top:"$gr3"}}),m=(0,l.zo)("div",{display:"flex",flexDirection:"column",flexWrap:"nowrap",width:"100%",overflow:"scroll"}),h=(0,l.zo)("header",{display:"flex",flexGrow:"0",justifyContent:"space-between",padding:"$gr3 $gr4",color:"$slate9",fontSize:"$gr3",fontFamily:"$bookTight",fontWeight:"300",alignItems:"center","@sm":{padding:"$gr2 $gr3"}}),p=(0,l.zo)("footer",{display:"flex",flexGrow:"0",justifyContent:"space-between",padding:"$gr3 $gr4","@sm":{padding:"$gr2 $gr3"}}),f=(0,l.zo)("div",{display:"flex",flexDirection:"column",flexGrow:"1",borderTop:"1px solid $slate4",borderBottom:"1px solid $slate4",overflowY:"scroll !important",padding:"$gr3 $gr4","@sm":{padding:"$gr2 $gr3"}}),v=(0,l.zo)(r.Dx,{}),b=(0,l.zo)(r.x8,{display:"flex",justifyContent:"center",alignItems:"center",border:"none",borderRadius:"50%",color:"$slate10",background:"transparent",cursor:"pointer",width:"$gr4",height:"$gr4",transition:"$canopyAll"}),C=(0,l.zo)(r.aV,{backgroundColor:"$slateA8",position:"fixed",top:0,left:0,right:0,bottom:0,display:"grid",placeItems:"center",overflowY:"auto",zIndex:"10",transition:"$canopyAll","&:hover":{backgroundColor:"$slateA9"},"&::after":{position:"fixed",zIndex:"11",background:"linear-gradient(180deg, $slate2, #0000)",width:"100%",height:"$gr9",left:"0",top:"0",content:""}}),y=(0,l.zo)(r.h_,{}),M={facetsActive:[]},S=(0,o.createContext)(void 0);function x(e,a){if("updateFacetsActive"===a.type)return{...e,facetsActive:a.facetsActive}}function k(e){let{initialState:a=M,children:t}=e,[i,l]=(0,o.useReducer)(x,a);return(0,n.jsx)(S.Provider,{value:{facetsDispatch:l,facetsState:i},children:t})}function T(){let e=(0,o.useContext)(S);if(void 0===e)throw Error("useFacetsState must be used within a FacetsProvider");return e}var A=t(2469);let w=(0,l.zo)(d.xz,{display:"flex",justifyContent:"space-between",width:"100%",padding:"$gr2 0",backgroundColor:"transparent",border:"none",fontFamily:"$bookTight",fontSize:"$gr4",cursor:"pointer",borderTop:"1px solid $slate4","&:hover, &:focus":{color:"$indigo11"},svg:{transition:"$canopyAll",transform:"rotate(-90deg)",color:"$slate10"},"&[aria-expanded='true']":{color:"$slate12 !important",fontWeight:"800",svg:{color:"$slate12 !important",transform:"rotate(0deg)"}}}),N=(0,l.zo)(d.VY,{padding:"$gr1 0 $gr4"}),G=(0,l.zo)(d.h4,{}),$=(0,l.zo)(d.ck,{"&:first-child":{["".concat(w)]:{border:"none"}}});var R=t(6093);let j=(0,l.zo)("label",{transition:"$canopyAll",cursor:"pointer",fontWeight:"500",variants:{isChecked:{true:{color:"$slate12 !important",fontWeight:"800"}}},"&:hover, &:focus":{color:"$indigo11"},span:{color:"$slate11 !important",fontSize:"$gr2"}}),L=(0,l.zo)(R.fC,{position:"relative",zIndex:"0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"$gr3",height:"$gr3",margin:"0 $gr1 0 0",background:"$slate4",boxShadow:"inset 1px 1px 2px #0002",border:"none",borderRadius:"50%",cursor:"pointer",transition:"$canopyAll",flexShrink:"0","&::before":{position:"absolute",width:"100%",height:"100%",content:"",background:"linear-gradient(-45deg, $indigo11, $indigo8)",opacity:"0",borderRadius:"50%",transition:"$canopyAll",zIndex:"0"},"&[aria-checked='true']":{boxShadow:"1px 1px 2px ${indigoA.indigoA4}","&::before":{opacity:"1"}}}),B=(0,l.zo)(R.z$,{position:"absolute",zIndex:"1",color:"$indigo1",textShadow:"1px 1px 2px ".concat(u.Eh.indigoA12)}),_=(0,l.zo)("span",{display:"flex",margin:"0 0 $gr1",fontSize:"$gr3",color:"$slate11","&:last-child":{margin:"0"}}),z=e=>{let{active:a,facet:t,identifier:o,option:i}=e,{facetsDispatch:l,facetsState:r}=T(),{facetsActive:s}=r,d=e=>{s.delete(t),e&&s.append(t,i.slug),l({type:"updateFacetsActive",facetsActive:s})};return(0,n.jsxs)(_,{children:[(0,n.jsx)(L,{value:i.value,id:o,checked:a,onCheckedChange:d,children:(0,n.jsx)(B,{asChild:!0,children:(0,n.jsx)(A.nQG,{})})}),(0,n.jsxs)(j,{htmlFor:o,isChecked:a,children:[i.value," ",(0,n.jsxs)("span",{children:["(",i.doc_count,")"]})]})]})};var P=t(8474);let F=e=>{let{label:a,slug:t,values:i}=e,{facetsState:l}=T(),{facetsActive:r}=l,s=null==r?void 0:r.toString(),d={slug:"",value:(0,P.EK)("searchFilterAny")},[u,c]=(0,o.useState)({slug:"",value:(0,P.EK)("searchFilterAny")});return(0,o.useEffect)(()=>{var e;let a=null==r?void 0:r.get(t);c(a?{slug:a,value:null===(e=i.find(e=>e.slug===a))||void 0===e?void 0:e.value}:d)},[r,s,t,i]),(0,n.jsxs)($,{value:t,children:[(0,n.jsx)(G,{asChild:!0,children:(0,n.jsxs)(w,{children:[(0,n.jsxs)("span",{children:[a," ",(0,n.jsx)(A.v4q,{})]}),(0,n.jsx)("span",{children:u.value})]})}),(0,n.jsx)(N,{children:i.map((e,a)=>{let o="".concat(t,"-").concat(e.slug,"-").concat(a);return(0,n.jsx)(z,{active:u.slug===e.slug,facet:t,identifier:o,option:e},o)})})]})};var E=t(7058),H=t(2990),D=t(1163);let I=e=>{let{handleSubmit:a}=e,{facetsState:t,facetsDispatch:i}=T(),{facetsActive:l}=t,r=(0,D.useRouter)(),s=()=>{E.forEach(e=>l.delete(e.slug)),i({type:"updateFacetsActive",facetsActive:l})},u=()=>{r.push({pathname:"/search",query:l.toString()}),a()};return(0,n.jsxs)(y,{children:[(0,n.jsx)(C,{}),(0,n.jsx)(g,{children:(0,n.jsxs)(m,{children:[(0,n.jsxs)(h,{children:[(0,n.jsx)(v,{asChild:!0,children:(0,n.jsx)("span",{children:(0,P.EK)("searchFilter")})}),(0,n.jsx)(b,{"aria-label":(0,P.EK)("searchFilterClose"),children:(0,n.jsx)(A.Pxu,{})})]}),(0,n.jsx)(f,{children:(0,n.jsx)(d.fC,{type:"single",collapsible:!0,children:E.map(e=>(0,o.createElement)(F,{...e,key:e.slug}))})}),(0,n.jsxs)(p,{children:[(0,n.jsx)(H.O,{buttonType:"transparent",onClick:s,children:(0,P.EK)("searchFilterClear")}),(0,n.jsx)(H.O,{buttonType:"primary",onClick:u,children:(0,P.EK)("searchFilterSubmit")})]})]})})]})},W=(0,l.zo)("span",{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",top:"-$gr1",right:"$gr2",width:"$gr3",height:"$gr3",fontSize:"$gr1",color:"$indigo1",backgroundColor:"$indigo12",borderRadius:"50%"}),O=(0,l.zo)(r.xz,{position:"relative",right:"0",transition:"$canopySlideIn",boxShadow:"none"}),V=()=>{let{facetsState:e}=T(),{facetsActive:a}=e,{length:t}=Array.from(a.keys()).filter(e=>"q"!==e);return(0,n.jsx)(O,{asChild:!0,children:(0,n.jsxs)(H.O,{buttonType:"primary",children:[(0,P.EK)("searchFilter")," ",(0,n.jsx)(A.hsZ,{}),t>0&&(0,n.jsx)(W,{children:t})]})})};var K=t(1165);let U=()=>{let{asPath:e}=(0,D.useRouter)(),[a,t]=(0,o.useState)(!1),{facetsDispatch:i}=T(),{canopyDispatch:l,canopyState:r}=(0,K.MQ)(),{headerVisible:d,searchParams:u}=r;(0,o.useEffect)(()=>{i({type:"updateFacetsActive",facetsActive:u})},[u,i]);let c=()=>{t(!a),l({type:"updateHeaderVisible",headerVisible:!d})};return(0,o.useEffect)(()=>{t(!1),l({type:"updateHeaderVisible",headerVisible:!0})},[e,l]),(0,n.jsxs)(s,{open:a,onOpenChange:c,children:[(0,n.jsx)(V,{}),(0,n.jsx)(I,{handleSubmit:c})]})},Y=()=>(0,n.jsx)(k,{children:(0,n.jsx)(U,{})});var q=t(2049);let Z=(0,l.zo)("div",{display:"flex",position:"fixed",left:"0",zIndex:"5",width:"100%",["> ".concat(i.N)]:{display:"flex",justifyContent:"space-between",alignItems:"center"}}),J=(0,l.zo)("div",{height:"$gr5",padding:"$gr4 0 $gr3","@sm":{height:"$gr5",padding:"$gr3 0 $gr2"},"#canopy-search-summary":{opacity:"1",transition:"$canopyOpacity",fontSize:"$gr4",color:"$slate11",fontWeight:"300","@sm":{fontSize:"$gr3"}},variants:{isFixed:{true:{["> ".concat(Z)]:{"#canopy-search-summary":{opacity:"0"},["".concat(O)]:{right:"50%",transform:"translate(50%)",backfaceVisibility:"hidden",webkitFontSmoothing:"subpixel-antialiased",boxShadow:"2px 2px 5px #0003"}}}}}}),Q=(0,l.zo)("div",{padding:"$gr3 0 0",h4:{margin:"0",fontWeight:"400",fontSize:"$gr4",fontFamily:"$bookTight",textDecoration:"none !important"},span:{display:"block",margin:"0.25rem 0 0",fontWeight:"300",fontSize:"0.8333rem",color:"$slate10"}}),X=(0,l.zo)("div",{backgroundColor:"$slate6",width:"100%",height:"100%",overflowY:"hidden",borderRadius:"3px",transition:"$canopyAll"}),ee=(0,l.zo)("div",{display:"flex",width:"100%",maxWidth:"240px",position:"relative",a:{display:"flex",flexDirection:"column",width:"100%",color:"$slate12",textDecoration:"none !important",transition:"$canopyAll","&:hover, &:focus":{color:"$indigo10",["".concat(X)]:{transform:"scale3d(1.02, 1.02, 1.02)",boxShadow:"3px 3px 8px #0002"}}}});var ea=t(1664),et=t.n(ea);let en=(0,l.zo)("img",{position:"relative",zIndex:"1",width:"100%",height:"100%",objectFit:"contain",transition:"$canopyAll",opacity:0,"&.loaded":{opacity:1}}),eo=(0,l.zo)("figure",{backgroundColor:"$slate6",display:"flex",width:"100%",height:"100%",padding:"0",margin:"0",position:"relative",overflow:"hidden",zIndex:"0",borderRadius:"3px",boxShadow:"2px 2px 5px #0001",transition:"$canopyAll"});var ei=t(6010);let el=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"600,",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full";if(Array.isArray(e)&&(e=e[0]),!e.service)return e.id;if(!Array.isArray(e.service)){if(e.service["@id"])return"".concat(e.service["@id"],"/").concat(t,"/").concat(a,"/0/default.jpg");if(e.service.id)return"".concat(e.service.id,"/").concat(t,"/").concat(a,"/0/default.jpg")}return e.service[0]["@id"]?"".concat(e.service[0]["@id"],"/").concat(t,"/").concat(a,"/0/default.jpg"):"".concat(e.service[0].id,"/").concat(t,"/").concat(a,"/0/default.jpg")},er=e=>{let{resource:a,region:t="full",size:i="400,",isCover:l=!1}=e,[r,s]=(0,o.useState)(),[d,u]=(0,o.useState)(!1),c=(0,o.useRef)(null);return(0,o.useEffect)(()=>{var e;s(el(a,i,t)),(null==c?void 0:c.current)&&(null==c?void 0:null===(e=c.current)||void 0===e?void 0:e.complete)&&u(!0)},[]),(0,n.jsx)(eo,{children:(0,n.jsx)(en,{alt:"",src:r,ref:c,style:l?{objectFit:"cover",objectPosition:"50% 50%",width:"100%",height:"100%"}:{},onLoad:()=>u(!0),className:(0,ei.Z)("source",d&&"loaded")})})};var es=t(7229);let ed=e=>fetch(e).then(e=>e.json());var eu=t(3396),ec=t(7650),eg=t(3093),em=t(8522),eh=t(2573),ep=t(8989),ef=t(9771);let ev=e=>{let{resource:a}=e,[t,i]=(0,o.useState)(),{label:l,homepage:r,thumbnail:s}=a;(0,o.useEffect)(()=>{ed(a.id).then(e=>{let a=(0,eu.Z)(e),{width:t,height:n}=a.items?a.items[0].items[0].items[0].body:void 0;i(t/n)})},[s]);let{ref:d,inView:u}=(0,ec.YD)();return t?(0,n.jsx)(ee,{ref:d,children:(0,n.jsxs)(et(),{href:r[0].id,children:[(0,n.jsx)(es.f,{ratio:t,children:(0,n.jsx)(X,{children:(0,n.jsx)(eg.A,{transition:{duration:1},children:u&&a&&(0,n.jsx)(em.X,{features:eh.H,children:(0,n.jsx)(ep.m.div,{initial:{opacity:0},animate:{opacity:1},children:(0,n.jsx)(er,{resource:s})})})})})}),(0,n.jsx)(Q,{children:(0,n.jsx)(ef.__,{label:l,as:"h4"})})]})}):(0,n.jsx)(n.Fragment,{})};var eb=t(827);let eC=(0,l.zo)("div",{paddingBottom:"$gr5",zIndex:"1","@xxs":{paddingBottom:"$gr3"},"@xs":{paddingBottom:"$gr3"},"@sm":{paddingBottom:"$gr4"},"@md":{paddingBottom:"$gr4"}}),ey=(0,l.zo)(eb.Z,{display:"flex",width:"auto",position:"relative",padding:"$gr2 0",zIndex:"1",".canopy-grid-column":{marginLeft:"$gr5","@xxs":{marginLeft:"$gr3"},"@xs":{marginLeft:"$gr3"},"@sm":{marginLeft:"$gr4"},"@md":{marginLeft:"$gr4"},"&:first-child":{marginLeft:"0"}}}),eM=e=>{let{item:a}=e;return a?(0,n.jsx)(eC,{children:(0,n.jsx)(ev,{resource:a},a.id)}):(0,n.jsx)(n.Fragment,{})};var eS=t(8002);let ex=e=>{let{children:a}=e,t={default:6,[eS.b.xl]:5,[eS.b.lg]:4,[eS.b.md]:4,[eS.b.sm]:3,[eS.b.xs]:2};return(0,n.jsx)(ey,{breakpointCols:t,className:"canopy-grid",columnClassName:"canopy-grid-column",children:a})};ex.Item=eM;let ek=e=>E.map(e=>e.slug).filter(a=>e.has(a)).map(a=>{let t=e.get(a);return{label:a,value:t}});var eT=t(3981),eA=t(633),ew=t(6304);let eN=(e,a)=>{let t=new ew.Document(a);eT.forEach(e=>t.add(e));let n=t.search(e).reduce((e,a)=>[...new Set([...e,...a.result])],[]);return n.length>0?n:[]},eG=(e,a,t)=>{let n=a.find(e=>e.page===t);return n.items.map(a=>e.find(e=>e.id===a))},e$=(e,a)=>{let t=Math.ceil(e.length/a),n=Array.from(Array(t).keys());return n.map(t=>{let n=e.slice(a*t,a*(t+1)).map(e=>e.id);return{page:t+1,items:n}})},eR=e=>{let a=new URL(e);return a.searchParams.delete("page"),[{id:a,type:"Collection"}]},ej=(e,a)=>e.map(e=>{let t=new URL(a);return t.searchParams.append("page",e.page),{id:t.toString(),type:"Collection",label:{none:["Page ".concat(e.page," (").concat(e.items.length," Total)")]}}}),eL=(e,a)=>({id:e.id,type:"Manifest",label:e.label,thumbnail:e.thumbnail,homepage:[{id:"".concat(a,"/works/").concat(e.slug),type:"Text",label:e.label}]});var eB=t(6486),e_=t.n(eB);let ez=(e,a,t,n)=>{let o=a?eN(a,n):eT.map(e=>e.id),i=0===t.length?eA:(e=>{let a=e.map(e=>{let a=E.find(a=>a.slug===e.label).values.find(a=>a.slug===e.value);return null==a?void 0:a.docs});return eA.filter(e=>e_().intersection(...a).includes(e.index))})(t);return o.filter(e=>i.some(a=>a.index===e)).map(a=>{let t=i.find(e=>e.index===a);return eL(t,e)})},eP=e=>{let{params:a,url:t,flexSearch:n}=e,o=ek(a),i=null==a?void 0:a.get("q"),l=null==a?void 0:a.get("page"),r=new URL("".concat(t,"/search"));r.search=null==a?void 0:a.toString();let s=ez(t,i,o,n),d=e$(s,10),u=l?eG(s,d,parseInt(l)):ej(d,r);return{"@context":"https://iiif.io/api/presentation/3/context.json",id:r.toString(),type:"Collection",label:{none:[i||"All Results"]},items:u,...l?{summary:{none:["".concat(s.length,"}")]}}:{summary:{none:["".concat(s.length)]}},...l&&{partOf:eR(r)}}},eF=(e,a,t)=>{let[n,i]=(0,o.useState)([]),[l,r]=(0,o.useState)(!1),[s,d]=(0,o.useState)(!0),[u,c]=(0,o.useState)(!1),{canopyState:{config:g}}=(0,K.MQ)(),m=()=>{i([]),r(!1),d(!0),c(!1)};return(0,o.useEffect)(()=>m(),[t]),(0,o.useEffect)(()=>{if(d(!0),r(!1),(null==e?void 0:e.length)>0&&e[a]){var t;let n=new URL(e[a]).searchParams,o=null==g?void 0:null===(t=g.search)||void 0===t?void 0:t.flexSearch,l=null==g?void 0:g.url,{items:r}=eP({params:n,url:l,flexSearch:o});i(e=>[...e,...r]),c(e.length>a),d(!1)}},[g,e,a]),{data:n,error:l,loading:s,more:u}},eE=e=>{let{pages:a,query:t}=e,[i,l]=(0,o.useState)(0),{data:r,loading:s,more:d}=eF(a,i,t);(0,o.useEffect)(()=>l(0),[t]);let u=(0,o.useRef)(),c=(0,o.useCallback)(e=>{!s&&(u.current&&u.current.disconnect(),u.current=new IntersectionObserver(e=>{e[0].isIntersecting&&d&&l(e=>e+1)}),e&&u.current.observe(e))},[s,d]);return(0,n.jsx)(ex,{children:r.map((e,a)=>r.length===a+1?(0,n.jsx)("span",{ref:r.length===a+1?c:void 0,children:(0,n.jsx)(ex.Item,{item:e})},e.id):(0,n.jsx)("span",{children:(0,n.jsx)(ex.Item,{item:e})},e.id))})};var eH=t(7379);let eD=e=>{let[a,t]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let a=()=>{t(window.pageYOffset),e.current&&t(window.pageYOffset-e.current.offsetTop)};return window.addEventListener("scroll",a),a(),()=>window.removeEventListener("scroll",a)},[e]),a};var eI=t(2121);let eW=()=>{let e=(0,eH.useSearchParams)(),[a,t]=(0,o.useState)([]),[l,r]=(0,o.useState)(),s=(0,o.useRef)(null),d=eD(s),{canopyDispatch:u,canopyState:{config:c,searchHeaderFixed:g,searchSummary:m}}=(0,K.MQ)();return(0,o.useEffect)(()=>{t([]),r(new URLSearchParams(e.toString()))},[e]),(0,o.useEffect)(()=>u({searchHeaderFixed:d>-eI.J9,type:"updateSearchHeaderFixed"}),[u,d]),(0,o.useEffect)(()=>{if(void 0!==l){var e;u({searchParams:l,type:"updateSearchParams"});let a=null==c?void 0:null===(e=c.search)||void 0===e?void 0:e.flexSearch,n=null==c?void 0:c.url,{items:o,summary:i}=eP({params:l,url:n,flexSearch:a});t(o.map(e=>e.id)),i&&u({type:"updateSearchSummary",searchSummary:i})}},[c,l,u]),(0,n.jsxs)(q.Z,{children:[(0,n.jsx)(J,{ref:s,isFixed:g,children:(0,n.jsx)(Z,{children:(0,n.jsxs)(i.Z,{containerType:"wide",children:[m&&(0,n.jsxs)("span",{id:"canopy-search-summary",children:[(0,n.jsx)(ef.ER,{as:"span",summary:m})," ",(0,P.EK)("searchResults")]}),(0,n.jsx)(Y,{})]})})}),(0,n.jsx)(i.Z,{containerType:"wide",children:(0,n.jsx)(eE,{pages:a,query:l})})]})};var eO=eW},3396:function(e,a,t){let{convertPresentation2:n}=t(265);contextAsArray=e=>{let a=Array.isArray(e["@context"])?e["@context"]:[e["@context"]];return a.map(e=>e.replace("http://","https://"))},a.Z=e=>{let a=contextAsArray(e),t=["https://iiif.io/api/presentation/2/context.json","https://iiif.io/api/presentation/3/context.json"];try{if(a.includes(t[0]))return n(e);if(a.includes(t[1]))return e;throw TypeError("Collection is not of @context: ".concat(t.join(", "),"."))}catch(e){console.error(e)}}},7058:function(e){"use strict";e.exports=JSON.parse('[{"label":"Subject","slug":"subject","values":[{"value":"Bodies of water","slug":"bodies-of-water","doc_count":19,"docs":[3,4,19,21,22,24,28,33,35,48,53,54,67,68,70,74,85,86,87]},{"value":"Log cabins","slug":"log-cabins","doc_count":12,"docs":[5,9,12,16,31,52,54,56,57,63,74,76]},{"value":"Trails","slug":"trails","doc_count":7,"docs":[0,3,7,8,53,66,87]},{"value":"Hotels","slug":"hotels","doc_count":4,"docs":[0,72,80,88]},{"value":"Pine","slug":"pine","doc_count":4,"docs":[2,10,45,84]},{"value":"Roads","slug":"roads","doc_count":4,"docs":[22,28,34,70]},{"value":"Sawmills","slug":"sawmills","doc_count":4,"docs":[42,51,60,85]},{"value":"Oak","slug":"oak","doc_count":3,"docs":[2,45,84]},{"value":"Transportation","slug":"transportation","doc_count":2,"docs":[47,50]},{"value":"Barns","slug":"barns","doc_count":1,"docs":[16]},{"value":"Buildings","slug":"buildings","doc_count":1,"docs":[65]},{"value":"College campuses","slug":"college-campuses","doc_count":1,"docs":[89]},{"value":"Dams","slug":"dams","doc_count":1,"docs":[85]},{"value":"Farms","slug":"farms","doc_count":1,"docs":[69]},{"value":"Food","slug":"food","doc_count":1,"docs":[52]},{"value":"Handicraft","slug":"handicraft","doc_count":1,"docs":[18]},{"value":"Housing","slug":"housing","doc_count":1,"docs":[25]},{"value":"Rye","slug":"rye","doc_count":1,"docs":[41]}]},{"label":"Date","slug":"date","values":[{"value":"Aug 13, 1886","slug":"aug-13-1886","doc_count":12,"docs":[0,12,18,26,40,55,57,66,73,80,81,88]},{"value":"Aug 19, 1886","slug":"aug-19-1886","doc_count":12,"docs":[2,15,16,19,21,39,47,51,58,68,84,86]},{"value":"Aug 14, 1886","slug":"aug-14-1886","doc_count":10,"docs":[4,8,11,17,23,35,44,48,54,83]},{"value":"Aug 16, 1886","slug":"aug-16-1886","doc_count":9,"docs":[5,7,9,24,33,34,43,56,67]},{"value":"Aug 25, 1886","slug":"aug-25-1886","doc_count":7,"docs":[25,30,42,62,63,69,78]},{"value":"Aug 12, 1886","slug":"aug-12-1886","doc_count":6,"docs":[1,6,32,59,72,77]},{"value":"Aug 18, 1886","slug":"aug-18-1886","doc_count":6,"docs":[3,22,28,53,76,87]},{"value":"Aug 22, 1886","slug":"aug-22-1886","doc_count":5,"docs":[38,61,71,79,82]},{"value":"Aug 28, 1886","slug":"aug-28-1886","doc_count":4,"docs":[10,20,37,60]},{"value":"Aug 30, 1886","slug":"aug-30-1886","doc_count":4,"docs":[14,29,46,64]},{"value":"Aug 17, 1886","slug":"aug-17-1886","doc_count":3,"docs":[36,50,52]},{"value":"Aug 20, 1886","slug":"aug-20-1886","doc_count":3,"docs":[31,74,85]},{"value":"Aug 27, 1886","slug":"aug-27-1886","doc_count":3,"docs":[27,41,45]},{"value":"Aug 11, 1886","slug":"aug-11-1886","doc_count":2,"docs":[65,89]},{"value":"Aug 24, 1886","slug":"aug-24-1886","doc_count":2,"docs":[13,75]},{"value":"Aug 21, 1886","slug":"aug-21-1886","doc_count":1,"docs":[70]},{"value":"Sep 1, 1886","slug":"sep-1-1886","doc_count":1,"docs":[49]}]},{"label":"Place","slug":"place","values":[{"value":"Great Smoky Mountains (N.C. and Tenn.)","slug":"great-smoky-mountains-nc-and-tenn","doc_count":87,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88]},{"value":"Little River","slug":"little-river","doc_count":19,"docs":[4,19,21,23,24,33,35,39,46,47,48,54,60,64,67,74,76,85,86]},{"value":"Mount Nebo","slug":"mount-nebo","doc_count":14,"docs":[1,5,12,18,26,31,40,44,55,57,72,73,77,81]},{"value":"Pine Mountain","slug":"pine-mountain","doc_count":9,"docs":[6,8,9,13,32,44,59,75,83]},{"value":"Blount County (Tenn.)","slug":"blount-county-tenn","doc_count":8,"docs":[0,2,25,26,40,50,84,88]},{"value":"Millers Cove","slug":"millers-cove","doc_count":8,"docs":[35,39,48,54,56,63,68,69]},{"value":"Tuckaleechee Cove","slug":"tuckaleechee-cove","doc_count":5,"docs":[16,42,51,68,78]},{"value":"Scott Mountain","slug":"scott-mountain","doc_count":4,"docs":[15,15,58,58]},{"value":"Gregory Bald","slug":"gregory-bald","doc_count":3,"docs":[27,41,45]},{"value":"Knoxville (Tenn.)","slug":"knoxville-tenn","doc_count":3,"docs":[49,65,89]},{"value":"Laurel Creek","slug":"laurel-creek","doc_count":3,"docs":[22,28,50]},{"value":"Cades Cove","slug":"cades-cove","doc_count":2,"docs":[20,37]},{"value":"Blockhouse Mountain","slug":"blockhouse-mountain","doc_count":1,"docs":[27]},{"value":"Tennessee River","slug":"tennessee-river","doc_count":1,"docs":[89]},{"value":"Thunderhead Mountain","slug":"thunderhead-mountain","doc_count":1,"docs":[27]}]}]')},3981:function(e){"use strict";e.exports=JSON.parse('[{"id":0,"label":"Path from Melrose Spring - to Hotel. Blount Co. Tenn","metadata":"Aug 13, 1886 Trails Hotels Blount County (Tenn.) Great Smoky Mountains (N.C. and Tenn.)"},{"id":1,"label":"The aqueduct Mt. Nebo from Spring house","metadata":"Aug 12, 1886 Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":2,"label":"Giant pines on Scott Mt.","metadata":"Aug 19, 1886 Pine Oak Blount County (Tenn.) Great Smoky Mountains (N.C. and Tenn.)"},{"id":3,"label":"Bridle path to Robt. Spence\'s (cascades)","metadata":"Aug 18, 1886 Trails Bodies of water Great Smoky Mountains (N.C. and Tenn.)"},{"id":4,"label":"Saddle Mt. Little River Gap from near Sammie Walker\'s Miller\'s Cove","metadata":"Aug 14, 1886 Bodies of water Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":5,"label":"Mt. Nebo - Chilhowee R. - from Miller\'s Cove","metadata":"Aug 16, 1886 Log cabins Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":6,"label":"Summit of Pine Mt. (looking west)Chilhowee Range Blount Co. Tenn.","metadata":"Aug 12, 1886 Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":7,"label":"View from road over Scott Mt. (Great Smoky Mts. in distance lost by over exposure)","metadata":"Aug 16, 1886 Trails Great Smoky Mountains (N.C. and Tenn.)"},{"id":8,"label":"Looking toward Dammit from Pine Mt. Trail","metadata":"Aug 14, 1886 Trails Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":9,"label":"Pine Mt. - Chilhowee R. - from Miller\'s Cove","metadata":"Aug 16, 1886 Log cabins Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":10,"label":"Crossed pines on road from Cade\'s Cove to Tuckaleechee","metadata":"Aug 28, 1886 Pine Great Smoky Mountains (N.C. and Tenn.)"},{"id":11,"label":"View in Miller\'s Cove - Walker\'s boys \\"totin\' cha\'coal\\"","metadata":"Aug 14, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":12,"label":"Bly\'s cabin Mt. Nebo Blount Co. Tenn.","metadata":"Aug 13, 1886 Log cabins Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":13,"label":"Slope of Pine Mt. from Sunset Hill. Mt. Nebo","metadata":"Aug 24, 1886 Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":14,"label":"Sea of cloud, 6 A.M. from Sunset Hill, Mt. Nebo","metadata":"Aug 30, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":15,"label":"Little, or Fox Mt. from road over Scott Mt.","metadata":"Aug 19, 1886 Scott Mountain Scott Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":16,"label":"Com. Caughron\'s house Tuckaleechee Cove Tenn.","metadata":"Aug 19, 1886 Log cabins Barns Tuckaleechee Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":17,"label":"Miller\'s Cove (looking North) from slope of Pine Mt.","metadata":"Aug 14, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":18,"label":"Auntie Bly - spinning","metadata":"Aug 13, 1886 Handicraft Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":19,"label":"Double bend in Little River below Tuckaleechee Cove","metadata":"Aug 19, 1886 Bodies of water Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":20,"label":"Cade\'s Cove Mt. From road to Tuckaleechee","metadata":"Aug 28, 1886 Cades Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":21,"label":"Up Little River from ford at Tuckaleechee","metadata":"Aug 19, 1886 Bodies of water Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":22,"label":"Laurel Creek road Blount Co. Tenn. (laurels)","metadata":"Aug 18, 1886 Bodies of water Roads Laurel Creek Great Smoky Mountains (N.C. and Tenn.)"},{"id":23,"label":"Saddle Mt. -Chilhowee R. - from Sam Walker\'s backyard","metadata":"Aug 14, 1886 Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":24,"label":"Little River above Vance Walker\'s","metadata":"Aug 16, 1886 Bodies of water Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":25,"label":"Squire D. B. Lawson\'s house. Cade\'s Cove - Blount Co. Tenn.","metadata":"Aug 25, 1886 Housing Blount County (Tenn.) Great Smoky Mountains (N.C. and Tenn.)"},{"id":26,"label":"Spring and rocks at Mt. Nebo. Blount Co. Tenn.","metadata":"Aug 13, 1886 Mount Nebo Blount County (Tenn.) Great Smoky Mountains (N.C. and Tenn.)"},{"id":27,"label":"Thunderhead and Blockhouse from summit of Big Bald","metadata":"Aug 27, 1886 Blockhouse Mountain Gregory Bald Thunderhead Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":28,"label":"Laurel Creek road near A.J. Dorsey\'s","metadata":"Aug 18, 1886 Bodies of water Roads Laurel Creek Great Smoky Mountains (N.C. and Tenn.)"},{"id":29,"label":"Sea of cloud, 6 A.M. from Sunset Hill, Mt. Nebo","metadata":"Aug 30, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":30,"label":"Avert\'s clearing. Miller\'s Cove","metadata":"Aug 25, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":31,"label":"King\'s cabin. Mt. Nebo","metadata":"Aug 20, 1886 Log cabins Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":32,"label":"Summit of Pine Mt. Chilhowee Range Blount Co. Tenn.","metadata":"Aug 12, 1886 Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":33,"label":"Up Little River from below Tuckaleechee Cove","metadata":"Aug 16, 1886 Bodies of water Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":34,"label":"Great Smoky Mts. From road over Scott Mt.","metadata":"Aug 16, 1886 Roads Great Smoky Mountains (N.C. and Tenn.)"},{"id":35,"label":"Down Little River from point in front of Sammie Walker\'s-Miller\'s Cove","metadata":"Aug 14, 1886 Bodies of water Millers Cove Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":36,"label":"Great Smoky Mts. From E. slope of Defeat Mt.","metadata":"Aug 17, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":37,"label":"Early morning in Cade\'s Cove - Cloud on Cade\'s Cove Mt.","metadata":"Aug 28, 1886 Cades Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":38,"label":"Knob on Chilhowee R","metadata":"Aug 22, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":39,"label":"Brewer\'s Clearing on Little River (Upper end of Miller\'s Cove)","metadata":"Aug 19, 1886 Little River Millers Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":40,"label":"View from verandah of Mt. Nebo house - Blount Co.","metadata":"Aug 13, 1886 Mount Nebo Blount County (Tenn.) Great Smoky Mountains (N.C. and Tenn.)"},{"id":41,"label":"Rye field and \\"Twenty Mile Range\\" from summit of Big Bald","metadata":"Aug 27, 1886 Rye Gregory Bald Great Smoky Mountains (N.C. and Tenn.)"},{"id":42,"label":"Spring and rocks at McCampbell\'s Mill. Tuckaleechee, noon recess of school","metadata":"Aug 25, 1886 Sawmills Tuckaleechee Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":43,"label":"Miller\'s Cove (looking S.E. from Hatcher\'s) Dr. C.S. Evans in foreground","metadata":"Aug 16, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":44,"label":"Flank of Mt. Nebo from slope of Pine Mt.","metadata":"Aug 14, 1886 Mount Nebo Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":45,"label":"Oak forest around summit of Big Bald Mt.","metadata":"Aug 27, 1886 Pine Oak Gregory Bald Great Smoky Mountains (N.C. and Tenn.)"},{"id":46,"label":"Little River Valley from point of rocks N. of Mt. Nebo House","metadata":"Aug 30, 1886 Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":47,"label":"Cliff on Little River below Tuckaleechee Cove","metadata":"Aug 19, 1886 Transportation Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":48,"label":"Little River opposite Uncle Sammy Walker\'s house-Miller\'s Cove (A.P. Holt wading)","metadata":"Aug 14, 1886 Bodies of water Millers Cove Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":49,"label":"University of E. Tennessee - Knoxville","metadata":"Sep 1, 1886 Knoxville (Tenn.)"},{"id":50,"label":"Laurel Creek Road Blount Co. Tenn.","metadata":"Aug 17, 1886 Transportation Laurel Creek Blount County (Tenn.) Great Smoky Mountains (N.C. and Tenn.)"},{"id":51,"label":"Yearout\'s Mill Tuckaleechee Cove Blount Co. Tenn.","metadata":"Aug 19, 1886 Sawmills Tuckaleechee Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":52,"label":"A.J. Dorsey\'s cabin. Family at breakfast","metadata":"Aug 17, 1886 Log cabins Food Great Smoky Mountains (N.C. and Tenn.)"},{"id":53,"label":"Bridle path to Robt. Spence\'s (looking down)","metadata":"Aug 18, 1886 Trails Bodies of water Great Smoky Mountains (N.C. and Tenn.)"},{"id":54,"label":"Ferry House near Little River Gap. Miller\'s Cove","metadata":"Aug 14, 1886 Bodies of water Log cabins Millers Cove Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":55,"label":"Miss Lizzie Nourse posing as one of the natives Mt. Nebo","metadata":"Aug 13, 1886 Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":56,"label":"Sam Walker\'s cabin and garden. Miller\'s Cove, Tenn.","metadata":"Aug 16, 1886 Log cabins Millers Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":57,"label":"Bly\'s cabin Mt. Nebo Blount Co. Tenn.","metadata":"Aug 13, 1886 Log cabins Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":58,"label":"Little, or Fox Mt. from mud road at foot of Scott Mt.","metadata":"Aug 19, 1886 Scott Mountain Scott Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":59,"label":"Summit of Pine Mt. (looking north)Chilhowee Range Blount Co. Tenn.","metadata":"Aug 12, 1886 Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":60,"label":"Group of children at Cider Mill - below Little River Gap","metadata":"Aug 28, 1886 Sawmills Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":61,"label":"Chilhowee Range (looking South) near road from Maryville to Cade\'s Cove","metadata":"Aug 22, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":62,"label":"Tipton\'s Sugar Cove Mt. from rear of Squire D.B. Lawson\'s, Cade\'s Cove","metadata":"Aug 25, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":63,"label":"Alvin Walker\'s house on Flat Branch. Little River Miller\'s Cove","metadata":"Aug 25, 1886 Log cabins Millers Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":64,"label":"Little River Valley from verandah of Mt. Nebo House","metadata":"Aug 30, 1886 Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":65,"label":"Knoxville E. Tenn. University taken August 11/86","metadata":"Aug 11, 1886 Buildings Knoxville (Tenn.)"},{"id":66,"label":"Woodland trail near Melrose Spring","metadata":"Aug 13, 1886 Trails Great Smoky Mountains (N.C. and Tenn.)"},{"id":67,"label":"Down Little River below Tuckaleechee Cove","metadata":"Aug 16, 1886 Bodies of water Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":68,"label":"View from high road in pass bet. Miller\'s Cove and Tuckaleechee","metadata":"Aug 19, 1886 Bodies of water Tuckaleechee Cove Millers Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":69,"label":"Little River Gap from road near Vance Walker\'s house, Miller\'s Cove","metadata":"Aug 25, 1886 Farms Millers Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":70,"label":"View on Maryville Road in front of W. L. Calter\'s","metadata":"Aug 21, 1886 Roads Bodies of water Great Smoky Mountains (N.C. and Tenn.)"},{"id":71,"label":"\\"Tower Rocks\\" (from above) John Walker on right","metadata":"Aug 22, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":72,"label":"Mt. Nebo house Chilhowee R. Blount Co. Tenn.","metadata":"Aug 12, 1886 Hotels Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":73,"label":"Mt. Nebo. Chilhowee R. from Melrose Spring","metadata":"Aug 13, 1886 Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":74,"label":"Neubern\'s Mill pond below Little River Gap.","metadata":"Aug 20, 1886 Bodies of water Log cabins Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":75,"label":"Slope of Pine Mt. from point of rocks N. of Mt Nebo House","metadata":"Aug 24, 1886 Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":76,"label":"Dorsey\'s cabin in Middle Fork of Little River","metadata":"Aug 18, 1886 Log cabins Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":77,"label":"Gorge below Spring house Mt. Nebo","metadata":"Aug 12, 1886 Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":78,"label":"Mountain clearing in pocket on road from Tuckaleechee to Cade\'s Cove","metadata":"Aug 25, 1886 Tuckaleechee Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":79,"label":"Chilhowee Range (looking North) from Tower Rocks","metadata":"Aug 22, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":80,"label":"Distant view of Chilhowee R. from Melrose","metadata":"Aug 13, 1886 Hotels Great Smoky Mountains (N.C. and Tenn.)"},{"id":81,"label":"Mt. Nebo - Chilhowee R. from ridge near Melrose","metadata":"Aug 13, 1886 Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":82,"label":"\\"Tower Rocks\\" on Flat Branch Little River from opp. Slope of ravine","metadata":"Aug 22, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":83,"label":"Fernbank in Pine Mt. Chilhowee R. Blount Co. Tenn.","metadata":"Aug 14, 1886 Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":84,"label":"Pine forest on slope of Scott Mt. Blount Co. Tenn.","metadata":"Aug 19, 1886 Pine Oak Blount County (Tenn.) Great Smoky Mountains (N.C. and Tenn.)"},{"id":85,"label":"Neubern\'s Mills and Dam Little River below Gap.","metadata":"Aug 20, 1886 Sawmills Dams Bodies of water Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":86,"label":"Cliff on Little River above Sam Walker\'s","metadata":"Aug 19, 1886 Bodies of water Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":87,"label":"Bridle path to Robt. Spence\'s (Island)","metadata":"Aug 18, 1886 Trails Bodies of water Great Smoky Mountains (N.C. and Tenn.)"},{"id":88,"label":"Guests at Melrose Spring Hotel. Blount Co. Tenn. -taken by request","metadata":"Aug 13, 1886 Hotels Blount County (Tenn.) Great Smoky Mountains (N.C. and Tenn.)"},{"id":89,"label":"View from the Old College cupola (Knoxville Campus) looking South toward the Tennessee River","metadata":"Aug 11, 1886 College campuses Tennessee River Knoxville (Tenn.)"}]')}},function(e){e.O(0,[27,409,662,448,806,760,870,774,888,179],function(){return e(e.s=8266)}),_N_E=e.O()}]);