(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{8266:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return r(6071)}])},9590:function(e,t,r){let{convertPresentation2:i}=r(265);contextAsArray=e=>{let t=Array.isArray(e["@context"])?e["@context"]:[e["@context"]];return t.map(e=>e.replace("http://","https://"))},t.Z=e=>{let t=contextAsArray(e),r=["https://iiif.io/api/presentation/2/context.json","https://iiif.io/api/presentation/3/context.json"];try{if(t.includes(r[0]))return i(e);if(t.includes(r[1]))return e;throw TypeError("Collection is not of @context: ".concat(r.join(", "),"."))}catch(e){console.error(e)}}},6071:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return eY}});var i=r(5893),n=r(7294),a=r(5045),o=r(2854),l=r(301);let s=(0,l.zo)("span",{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",top:"-$gr1",right:"$gr2",width:"$gr3",height:"$gr3",fontSize:"$gr1",color:"$indigo1",backgroundColor:"$indigo12",borderRadius:"50%"}),c=(0,l.zo)(o.xz,{position:"relative",right:"0",transition:"$canopySlideIn",boxShadow:"none"}),d=(0,l.zo)("div",{display:"flex",position:"fixed",left:"0",zIndex:"5",width:"100%",["> ".concat(a.N)]:{display:"flex",justifyContent:"space-between",alignItems:"center"}}),u=(0,l.zo)("div",{height:"$gr5",padding:"$gr4 0 $gr3","@sm":{height:"$gr5",padding:"$gr3 0 $gr2"},"#canopy-search-summary":{opacity:"1",transition:"$canopyOpacity",fontSize:"$gr4",color:"$slate11",fontWeight:"300","@sm":{fontSize:"$gr3"}},variants:{isFixed:{true:{["> ".concat(d)]:{"#canopy-search-summary":{opacity:"0"},["".concat(c)]:{right:"50%",transform:"translate(50%)",backfaceVisibility:"hidden",webkitFontSmoothing:"subpixel-antialiased",boxShadow:"2px 2px 5px #0003"}}}}}}),p=(0,l.zo)(o.fC,{});var g=r(9802),h=r(8168),f=r(2765);let x=(0,l.zo)(o.VY,{width:"calc(100% - $gr5 * 2)",maxWidth:h.G.default,maxHeight:"calc(100% - $gr5 * 2)",background:"$slate2",position:"fixed",top:"$gr5",left:"50%",overflowY:"auto",zIndex:"10",borderRadius:"3px",boxShadow:"5px 5px 13px ".concat(f.VS.slateA7),borderTop:"1px solid $slateA1",borderBottom:"1px solid $slateA4",transform:"translateX(-50%)",overflow:"clip",display:"flex","@lg":{width:"calc(100% - $gr4 * 2)",maxHeight:"calc(100% - $gr4 * 2)",top:"$gr4"},"@sm":{width:"calc(100% - $gr3 * 2)",maxHeight:"calc(100% - $gr3 * 2)",top:"$gr3"}}),m=(0,l.zo)("div",{display:"flex",flexDirection:"column",flexWrap:"nowrap",width:"100%",overflow:"scroll"}),v=(0,l.zo)("header",{display:"flex",flexGrow:"0",justifyContent:"space-between",padding:"$gr3 $gr4",color:"$slate9",fontSize:"$gr3",fontFamily:"$display",fontWeight:"300",alignItems:"center","@sm":{padding:"$gr2 $gr3"}}),y=(0,l.zo)("footer",{display:"flex",flexGrow:"0",justifyContent:"space-between",padding:"$gr3 $gr4","@sm":{padding:"$gr2 $gr3"}}),$=(0,l.zo)("div",{display:"flex",flexDirection:"column",flexGrow:"1",borderTop:"1px solid $slate4",borderBottom:"1px solid $slate4",overflowY:"scroll !important",padding:"$gr3 $gr4","@sm":{padding:"$gr2 $gr3"}}),b=(0,l.zo)(o.Dx,{}),j=(0,l.zo)(o.x8,{display:"flex",justifyContent:"center",alignItems:"center",border:"none",borderRadius:"50%",color:"$slate10",background:"transparent",cursor:"pointer",width:"$gr4",height:"$gr4",transition:"$canopyAll"}),w=(0,l.zo)(o.aV,{backgroundColor:"$slateA8",position:"fixed",top:0,left:0,right:0,bottom:0,display:"grid",placeItems:"center",overflowY:"auto",zIndex:"10",transition:"$canopyAll","&:hover":{backgroundColor:"$slateA9"},"&::after":{position:"fixed",zIndex:"11",background:"linear-gradient(180deg, $slate2, #0000)",width:"100%",height:"$gr9",left:"0",top:"0",content:""}}),S=(0,l.zo)(o.h_,{}),z={facetsActive:[]},A=(0,n.createContext)(void 0);function C(e,t){if("updateFacetsActive"===t.type)return{...e,facetsActive:t.facetsActive}}function k(e){let{initialState:t=z,children:r}=e,[a,o]=(0,n.useReducer)(C,t);return(0,i.jsx)(A.Provider,{value:{facetsDispatch:o,facetsState:a},children:r})}function E(){let e=(0,n.useContext)(A);if(void 0===e)throw Error("useFacetsState must be used within a FacetsProvider");return e}var F=r(2469);let I=(0,l.zo)(g.xz,{display:"flex",justifyContent:"space-between",width:"100%",padding:"$gr2 0",backgroundColor:"transparent",border:"none",fontFamily:"$display",fontSize:"$gr4",cursor:"pointer",borderTop:"1px solid $slate4","&:hover, &:focus":{color:"$indigo11"},svg:{transition:"$canopyAll",transform:"rotate(-90deg)",color:"$slate10"},"&[aria-expanded='true']":{color:"$slate12 !important",fontWeight:"800",svg:{color:"$slate12 !important",transform:"rotate(0deg)"}}}),R=(0,l.zo)(g.VY,{padding:"$gr1 0 $gr4"}),L=(0,l.zo)(g.h4,{}),P=(0,l.zo)(g.ck,{"&:first-child":{["".concat(I)]:{border:"none"}}});var T=r(6069);let _=(0,l.zo)("label",{transition:"$canopyAll",cursor:"pointer",fontWeight:"500",variants:{isChecked:{true:{color:"$slate12 !important",fontWeight:"800"}}},"&:hover, &:focus":{color:"$indigo11"},span:{color:"$slate11 !important",fontSize:"$gr2"}}),O=(0,l.zo)(T.fC,{position:"relative",zIndex:"0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"$gr3",height:"$gr3",margin:"0 $gr1 0 0",background:"$slate4",boxShadow:"inset 1px 1px 2px #0002",border:"none",borderRadius:"50%",cursor:"pointer",transition:"$canopyAll",flexShrink:"0","&::before":{position:"absolute",width:"100%",height:"100%",content:"",background:"linear-gradient(-45deg, $indigo11, $indigo8)",opacity:"0",borderRadius:"50%",transition:"$canopyAll",zIndex:"0"},"&[aria-checked='true']":{boxShadow:"1px 1px 2px ${indigoA.indigoA4}","&::before":{opacity:"1"}}}),D=(0,l.zo)(T.z$,{position:"absolute",zIndex:"1",color:"$indigo1",textShadow:"1px 1px 2px ".concat(f.Eh.indigoA12)}),W=(0,l.zo)("span",{display:"flex",margin:"0 0 $gr1",fontSize:"$gr3",color:"$slate11","&:last-child":{margin:"0"}});var N=e=>{let{active:t,facet:r,identifier:n,option:a}=e,{facetsDispatch:o,facetsState:l}=E(),{facetsActive:s}=l;return(0,i.jsxs)(W,{children:[(0,i.jsx)(O,{value:a.value,id:n,checked:t,onCheckedChange:e=>{s.delete(r),e&&s.append(r,a.slug),o({type:"updateFacetsActive",facetsActive:s})},children:(0,i.jsx)(D,{asChild:!0,children:(0,i.jsx)(F.nQG,{})})}),(0,i.jsxs)(_,{htmlFor:n,isChecked:t,children:[a.value," ",(0,i.jsxs)("span",{children:["(",a.doc_count,")"]})]})]})},V=r(9153),Y=e=>{let{label:t,slug:r,values:a}=e,{facetsState:o}=E(),{facetsActive:l}=o,s=null==l?void 0:l.toString(),c={slug:"",value:(0,V.EK)("searchFilterAny")},[d,u]=(0,n.useState)({slug:"",value:(0,V.EK)("searchFilterAny")});return(0,n.useEffect)(()=>{var e;let t=null==l?void 0:l.get(r);u(t?{slug:t,value:null===(e=a.find(e=>e.slug===t))||void 0===e?void 0:e.value}:c)},[l,s,r,a]),(0,i.jsxs)(P,{value:r,children:[(0,i.jsx)(L,{asChild:!0,children:(0,i.jsxs)(I,{children:[(0,i.jsxs)("span",{children:[t," ",(0,i.jsx)(F.v4q,{})]}),(0,i.jsx)("span",{children:d.value})]})}),(0,i.jsx)(R,{children:a.map((e,t)=>{let n="".concat(r,"-").concat(e.slug,"-").concat(t);return(0,i.jsx)(N,{active:d.slug===e.slug,facet:r,identifier:n,option:e},n)})})]})},H=r(7058),K=r(2190),Z=r(1163),B=e=>{let{handleSubmit:t}=e,{facetsState:r,facetsDispatch:a}=E(),{facetsActive:o}=r,l=(0,Z.useRouter)();return(0,i.jsxs)(S,{children:[(0,i.jsx)(w,{}),(0,i.jsx)(x,{children:(0,i.jsxs)(m,{children:[(0,i.jsxs)(v,{children:[(0,i.jsx)(b,{asChild:!0,children:(0,i.jsx)("span",{children:(0,V.EK)("searchFilter")})}),(0,i.jsx)(j,{"aria-label":(0,V.EK)("searchFilterClose"),children:(0,i.jsx)(F.Pxu,{})})]}),(0,i.jsx)($,{children:(0,i.jsx)(g.fC,{type:"single",collapsible:!0,children:H.map(e=>(0,n.createElement)(Y,{...e,key:e.slug}))})}),(0,i.jsxs)(y,{children:[(0,i.jsx)(K.O,{buttonType:"transparent",onClick:()=>{H.forEach(e=>o.delete(e.slug)),a({type:"updateFacetsActive",facetsActive:o})},children:(0,V.EK)("searchFilterClear")}),(0,i.jsx)(K.O,{buttonType:"primary",onClick:()=>{l.push({pathname:"/search",query:o.toString()}),t()},children:(0,V.EK)("searchFilterSubmit")})]})]})})]})},U=()=>{let{facetsState:e}=E(),{facetsActive:t}=e,{length:r}=Array.from(t.keys()).filter(e=>"q"!==e);return(0,i.jsx)(c,{asChild:!0,children:(0,i.jsxs)(K.O,{buttonType:"primary",children:[(0,V.EK)("searchFilter")," ",(0,i.jsx)(F.hsZ,{}),r>0&&(0,i.jsx)(s,{children:r})]})})},q=r(3888);let G=()=>{let{asPath:e}=(0,Z.useRouter)(),[t,r]=(0,n.useState)(!1),{facetsDispatch:a}=E(),{canopyDispatch:o,canopyState:l}=(0,q.MQ)(),{headerVisible:s,searchParams:c}=l;(0,n.useEffect)(()=>{a({type:"updateFacetsActive",facetsActive:c})},[c,a]);let d=()=>{r(!t),o({type:"updateHeaderVisible",headerVisible:!s})};return(0,n.useEffect)(()=>{r(!1),o({type:"updateHeaderVisible",headerVisible:!0})},[e,o]),(0,i.jsxs)(p,{open:t,onOpenChange:d,children:[(0,i.jsx)(U,{}),(0,i.jsx)(B,{handleSubmit:d})]})};var M=()=>(0,i.jsx)(k,{children:(0,i.jsx)(G,{})}),Q=r(2213),X=r(7178);let J=(0,l.zo)("div",{padding:"$gr3 0 0",h4:{margin:"0",fontWeight:"400",fontSize:"$gr4",fontFamily:"$sans",textDecoration:"none !important"},span:{display:"block",margin:"0.25rem 0 0",fontWeight:"300",fontSize:"0.8333rem",color:"$slate10"}}),ee=(0,l.zo)("div",{backgroundColor:"$slate6",width:"100%",height:"100%",overflowY:"hidden",borderRadius:"3px",transition:"$canopyAll"}),et=(0,l.zo)("div",{display:"flex",width:"100%",maxWidth:"240px",position:"relative",a:{display:"flex",flexDirection:"column",width:"100%",color:"$slate12",textDecoration:"none !important",transition:"$canopyAll","&:hover, &:focus":{color:"$indigo10",["".concat(ee)]:{transform:"scale3d(1.02, 1.02, 1.02)",boxShadow:"3px 3px 8px #0002"}}}});var er=r(3093),ei=r(8522),en=r(6225),ea=r(3817);let eo=(0,l.zo)("img",{position:"relative",zIndex:"1",width:"100%",height:"100%",objectFit:"contain",transition:"$canopyAll",opacity:0,"&.loaded":{opacity:1}}),el=(0,l.zo)("figure",{backgroundColor:"$slate6",display:"flex",width:"100%",height:"100%",padding:"0",margin:"0",position:"relative",overflow:"hidden",zIndex:"0",borderRadius:"3px",boxShadow:"2px 2px 5px #0001",transition:"$canopyAll"});var es=r(6010);let ec=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"600,",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full";if(Array.isArray(e)&&(e=e[0]),!e.service)return e.id;if(!Array.isArray(e.service)){if(e.service["@id"])return"".concat(e.service["@id"],"/").concat(r,"/").concat(t,"/0/default.jpg");if(e.service.id)return"".concat(e.service.id,"/").concat(r,"/").concat(t,"/0/default.jpg")}return e.service[0]["@id"]?"".concat(e.service[0]["@id"],"/").concat(r,"/").concat(t,"/0/default.jpg"):"".concat(e.service[0].id,"/").concat(r,"/").concat(t,"/0/default.jpg")};var ed=e=>{let{resource:t,region:r="full",size:a="400,",isCover:o=!1}=e,[l,s]=(0,n.useState)(),[c,d]=(0,n.useState)(!1),u=(0,n.useRef)(null);return(0,n.useEffect)(()=>{var e;s(ec(t,a,r)),(null==u?void 0:u.current)&&(null==u?void 0:null===(e=u.current)||void 0===e?void 0:e.complete)&&d(!0)},[]),(0,i.jsx)(el,{children:(0,i.jsx)(eo,{alt:"",src:l,ref:u,style:o?{objectFit:"cover",objectPosition:"50% 50%",width:"100%",height:"100%"}:{},onLoad:()=>d(!0),className:(0,es.Z)("source",c&&"loaded")})})},eu=r(1830),ep=r(1664),eg=r.n(ep),eh=r(119),ef=r(9590),ex=r(2708),em=e=>{let{resource:t}=e,[r,a]=(0,n.useState)(),{label:o,homepage:l,thumbnail:s}=t;(0,n.useEffect)(()=>{(0,eh.Q)(t.id).then(e=>{let t=(0,ef.Z)(e),{width:r,height:i}=t.items?t.items[0].items[0].items[0].body:void 0;a(r/i)})},[s]);let{ref:c,inView:d}=(0,ex.YD)();return r?(0,i.jsx)(et,{ref:c,children:(0,i.jsxs)(eg(),{href:l[0].id,children:[(0,i.jsx)(X.f,{ratio:r,children:(0,i.jsx)(ee,{children:(0,i.jsx)(er.A,{transition:{duration:1},children:d&&t&&(0,i.jsx)(ei.X,{features:en.H,children:(0,i.jsx)(ea.m.div,{initial:{opacity:0},animate:{opacity:1},children:(0,i.jsx)(ed,{resource:s})})})})})}),(0,i.jsx)(J,{children:(0,i.jsx)(eu.Label,{label:o,as:"h4"})})]})}):(0,i.jsx)(i.Fragment,{})},ev=r(827);let ey=(0,l.zo)("div",{paddingBottom:"$gr5",zIndex:"1","@xxs":{paddingBottom:"$gr3"},"@xs":{paddingBottom:"$gr3"},"@sm":{paddingBottom:"$gr4"},"@md":{paddingBottom:"$gr4"}}),e$=(0,l.zo)(ev.Z,{display:"flex",width:"auto",position:"relative",padding:"$gr2 0",zIndex:"1",".canopy-grid-column":{marginLeft:"$gr5","@xxs":{marginLeft:"$gr3"},"@xs":{marginLeft:"$gr3"},"@sm":{marginLeft:"$gr4"},"@md":{marginLeft:"$gr4"},"&:first-child":{marginLeft:"0"}}});var eb=r(3885);let ej=e=>{let{children:t}=e,r={default:6,[eb.b.xl]:5,[eb.b.lg]:4,[eb.b.md]:4,[eb.b.sm]:3,[eb.b.xs]:2};return(0,i.jsx)(e$,{breakpointCols:r,className:"canopy-grid",columnClassName:"canopy-grid-column",children:t})};ej.Item=e=>{let{item:t}=e;return t?(0,i.jsx)(ey,{children:(0,i.jsx)(em,{resource:t},t.id)}):(0,i.jsx)(i.Fragment,{})};let ew=(e,t,r)=>{let i=t.find(e=>e.page===r);return i.items.map(t=>e.find(e=>e.id===t))},eS=(e,t)=>{let r=Math.ceil(e.length/t),i=Array.from(Array(r).keys());return i.map(r=>{let i=e.slice(t*r,t*(r+1)).map(e=>e.id);return{page:r+1,items:i}})},ez=e=>{let t=new URL(e);return t.searchParams.delete("page"),[{id:t,type:"Collection"}]},eA=(e,t)=>e.map(e=>{let r=new URL(t);return r.searchParams.append("page",e.page),{id:r.toString(),type:"Collection",label:{none:["Page ".concat(e.page," (").concat(e.items.length," Total)")]}}}),eC=(e,t)=>({id:e.id,type:"Manifest",label:e.label,thumbnail:e.thumbnail,homepage:[{id:"".concat(t,"/works/").concat(e.slug),type:"Text",label:e.label}]}),ek=e=>H.map(e=>e.slug).filter(t=>e.has(t)).map(t=>{let r=e.get(t);return{label:t,value:r}});var eE=r(3981),eF=r(633),eI=r(6486),eR=r.n(eI),eL=r(6304);let eP=(e,t)=>{let r=new eL.Document(t);eE.forEach(e=>r.add(e));let i=r.search(e).reduce((e,t)=>[...new Set([...e,...t.result])],[]);return i.length>0?i:[]},eT=(e,t,r,i)=>{let n=t?eP(t,i):eE.map(e=>e.id),a=0===r.length?eF:(e=>{let t=e.map(e=>{let t=H.find(t=>t.slug===e.label).values.find(t=>t.slug===e.value);return null==t?void 0:t.docs});return eF.filter(e=>eR().intersection(...t).includes(e.index))})(r);return n.filter(e=>a.some(t=>t.index===e)).map(t=>{let r=a.find(e=>e.index===t);return eC(r,e)})},e_=e=>{let{params:t,baseUrl:r,flexSearch:i}=e,n=ek(t),a=null==t?void 0:t.get("q"),o=null==t?void 0:t.get("page"),l=new URL("".concat(r,"/search"));l.search=null==t?void 0:t.toString();let s=eT(r,a,n,i),c=eS(s,10),d=o?ew(s,c,parseInt(o)):eA(c,l);return{"@context":"https://iiif.io/api/presentation/3/context.json",id:l.toString(),type:"Collection",label:{none:[a||"All Results"]},items:d,...o?{summary:{none:["".concat(s.length,"}")]}}:{summary:{none:["".concat(s.length)]}},...o&&{partOf:ez(l)}}};var eO=(e,t,r)=>{let[i,a]=(0,n.useState)([]),[o,l]=(0,n.useState)(!1),[s,c]=(0,n.useState)(!0),[d,u]=(0,n.useState)(!1),{canopyState:{config:p}}=(0,q.MQ)(),g=()=>{a([]),l(!1),c(!0),u(!1)};return(0,n.useEffect)(()=>g(),[r]),(0,n.useEffect)(()=>{var r;if(c(!0),l(!1),(null==e?void 0:e.length)>0&&e[t]){let i=new URL(e[t]).searchParams,n=null==p?void 0:p.baseUrl,o=null==p?void 0:null===(r=p.search)||void 0===r?void 0:r.flexSearch,{items:l}=e_({params:i,baseUrl:n,flexSearch:o});a(e=>[...e,...l]),u(e.length>t),c(!1)}},[p,e,t]),{data:i,error:o,loading:s,more:d}},eD=e=>{let{pages:t,query:r}=e,[a,o]=(0,n.useState)(0),{data:l,loading:s,more:c}=eO(t,a,r);(0,n.useEffect)(()=>o(0),[r]);let d=(0,n.useRef)(),u=(0,n.useCallback)(e=>{!s&&(d.current&&d.current.disconnect(),d.current=new IntersectionObserver(e=>{e[0].isIntersecting&&c&&o(e=>e+1)}),e&&d.current.observe(e))},[s,c]);return(0,i.jsx)(ej,{children:l.map((e,t)=>l.length===t+1?(0,i.jsx)("span",{ref:l.length===t+1?u:void 0,children:(0,i.jsx)(ej.Item,{item:e})},e.id):(0,i.jsx)("span",{children:(0,i.jsx)(ej.Item,{item:e})},e.id))})},eW=r(5986),eN=e=>{let[t,r]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let t=()=>{r(window.pageYOffset),e.current&&r(window.pageYOffset-e.current.offsetTop)};return window.addEventListener("scroll",t),t(),()=>window.removeEventListener("scroll",t)},[e]),t},eV=r(9332),eY=()=>{let e=(0,eV.useSearchParams)(),[t,r]=(0,n.useState)([]),[o,l]=(0,n.useState)(),s=(0,n.useRef)(null),c=eN(s),{canopyDispatch:p,canopyState:{config:g,searchHeaderFixed:h,searchSummary:f}}=(0,q.MQ)();return(0,n.useEffect)(()=>{r([]),l(new URLSearchParams(e.toString()))},[e]),(0,n.useEffect)(()=>p({searchHeaderFixed:c>-eW.J9,type:"updateSearchHeaderFixed"}),[p,c]),(0,n.useEffect)(()=>{if(void 0!==o){var e;p({searchParams:o,type:"updateSearchParams"});let t=null==g?void 0:null===(e=g.search)||void 0===e?void 0:e.flexSearch,i=null==g?void 0:g.baseUrl,{items:n,summary:a}=e_({params:o,baseUrl:i,flexSearch:t});r(n.map(e=>e.id)),a&&p({type:"updateSearchSummary",searchSummary:a})}},[g,o,p]),(0,i.jsxs)(Q.Z,{children:[(0,i.jsx)(u,{ref:s,isFixed:h,children:(0,i.jsx)(d,{children:(0,i.jsxs)(a.Z,{containerType:"wide",children:[f&&(0,i.jsxs)("span",{id:"canopy-search-summary",children:[(0,i.jsx)(eu.Summary,{as:"span",summary:f})," ",(0,V.EK)("searchResults")]}),(0,i.jsx)(M,{})]})})}),(0,i.jsx)(a.Z,{containerType:"wide",children:(0,i.jsx)(eD,{pages:t,query:o})})]})}}},function(e){e.O(0,[412,409,662,971,447,337,602,512,774,888,179],function(){return e(e.s=8266)}),_N_E=e.O()}]);