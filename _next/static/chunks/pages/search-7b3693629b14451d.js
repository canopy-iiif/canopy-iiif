(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{3235:function(e,t,r){"use strict";r.d(t,{Z:function(){return Card_Card}});var n=r(7178),a=r(9499),o=r(9288),i=(0,o.zo)("div",{padding:"$gr3 0 0",h4:{margin:"0",fontWeight:"400",fontSize:"$gr4",fontFamily:"$sans",textDecoration:"none !important"},span:{display:"block",margin:"0.25rem 0 0",fontWeight:"300",fontSize:"0.8333rem",color:"$slate10"}}),c=(0,o.zo)("div",{backgroundColor:"$slate6",width:"100%",height:"100%",overflowY:"hidden",borderRadius:"3px",transition:"$canopyAll"}),s=(0,o.zo)("div",{display:"flex",width:"100%",maxWidth:"240px",position:"relative",a:(0,a.Z)({display:"flex",flexDirection:"column",width:"100%",color:"$slate12",textDecoration:"none !important",transition:"$canopyAll"},"&:hover, &:focus",(0,a.Z)({color:"$indigo10"},"".concat(c),{transform:"scale3d(1.02, 1.02, 1.02)",boxShadow:"3px 3px 8px #0002"}))}),l=r(3093),u=r(8522),d=r(6225),p=r(3817),f=(0,o.zo)("img",(0,a.Z)({position:"relative",zIndex:"1",width:"100%",height:"100%",objectFit:"contain",transition:"$canopyAll",opacity:0},"&.loaded",{opacity:1})),g=(0,o.zo)("figure",{backgroundColor:"$slate6",display:"flex",width:"100%",height:"100%",padding:"0",margin:"0",position:"relative",overflow:"hidden",zIndex:"0",borderRadius:"3px",boxShadow:"2px 2px 5px #0001",transition:"$canopyAll"}),h=r(7294),m=r(6010),getResourceImage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"600,",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full";if(Array.isArray(e)&&(e=e[0]),!e.service)return e.id;if(!Array.isArray(e.service)){if(e.service["@id"])return"".concat(e.service["@id"],"/").concat(r,"/").concat(t,"/0/default.jpg");if(e.service.id)return"".concat(e.service.id,"/").concat(r,"/").concat(t,"/0/default.jpg")}return e.service[0]["@id"]?"".concat(e.service[0]["@id"],"/").concat(r,"/").concat(t,"/0/default.jpg"):"".concat(e.service[0].id,"/").concat(r,"/").concat(t,"/0/default.jpg")},x=r(5893),Figure_Figure=function(e){var t=e.alt,r=e.resource,n=e.region,a=void 0===n?"full":n,o=e.size,i=void 0===o?"400,":o,c=e.isCover,s=(0,h.useState)(),l=s[0],u=s[1],d=(0,h.useState)(!1),p=d[0],v=d[1],b=(0,h.useRef)(null);return(0,h.useEffect)(function(){var e;u(getResourceImage(r,i,a)),null!=b&&b.current&&null!=b&&null!==(e=b.current)&&void 0!==e&&e.complete&&v(!0)},[]),(0,x.jsx)(g,{children:(0,x.jsx)(f,{alt:t,src:l,ref:b,style:void 0!==c&&c?{objectFit:"cover",objectPosition:"50% 50%",width:"100%",height:"100%"}:{},onLoad:function(){return v(!0)},className:(0,m.Z)("source",p&&"loaded")})})},v=r(1830),b=r(1664),y=r.n(b),j=r(9769),$=r(8956),w=r(2708),Card_Card=function(e){var t=e.resource,r=1,a=t.label,o=t.homepage,f=t.thumbnail,g=(0,$.J)(f),h=g.width,m=g.height;h&&m&&(r=h/m);var b=(0,w.YD)(),S=b.ref,O=b.inView,C=(0,j.i)(a);return(0,x.jsx)(s,{ref:S,children:(0,x.jsxs)(y(),{href:o&&o[0].id?o[0].id:"",children:[(0,x.jsx)(n.f,{ratio:r,children:(0,x.jsx)(c,{children:(0,x.jsx)(l.A,{transition:{duration:1},children:O&&t&&(0,x.jsx)(u.X,{features:d.H,children:(0,x.jsx)(p.m.div,{initial:{opacity:0},animate:{opacity:1},children:(0,x.jsx)(Figure_Figure,{resource:f,alt:C})})})})})}),(0,x.jsx)(i,{children:(0,x.jsx)(v.Label,{label:a,as:"h4"})})]})})}},2929:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(9499),a=r(3235),o=r(827),i=r(9288),c=(0,i.zo)("div",{paddingBottom:"$gr5",zIndex:"1","@xxs":{paddingBottom:"$gr3"},"@xs":{paddingBottom:"$gr3"},"@sm":{paddingBottom:"$gr4"},"@md":{paddingBottom:"$gr4"}}),s=(0,i.zo)(o.Z,{display:"flex",width:"auto",position:"relative",padding:"$gr2 0",zIndex:"1",".canopy-grid-column":{marginLeft:"$gr5","@xxs":{marginLeft:"$gr3"},"@xs":{marginLeft:"$gr3"},"@sm":{marginLeft:"$gr4"},"@md":{marginLeft:"$gr4"},"&:first-child":{marginLeft:"0"}}});r(7294);var l=r(5893),u=r(7668),Grid=function(e){var t,r=e.children,a=(t={default:6},(0,n.Z)(t,u.b.xl,5),(0,n.Z)(t,u.b.lg,4),(0,n.Z)(t,u.b.md,4),(0,n.Z)(t,u.b.sm,3),(0,n.Z)(t,u.b.xs,2),t);return(0,l.jsx)(s,{breakpointCols:a,className:"canopy-grid",columnClassName:"canopy-grid-column",children:r})};Grid.Item=function(e){var t=e.item;return t?(0,l.jsx)(c,{children:(0,l.jsx)(a.Z,{resource:t},t.id)}):(0,l.jsx)(l.Fragment,{})};var d=Grid},9014:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return ee},default:function(){return search}});var n=r(7294),a=r(9499),o=r(4729),i=r(2854),c=r(9288),s=(0,c.zo)("span",{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",top:"-$gr1",right:"$gr2",width:"$gr3",height:"$gr3",fontSize:"$gr1",color:"$indigo1",backgroundColor:"$indigo12",borderRadius:"50%"}),l=(0,c.zo)(i.xz,{position:"relative",right:"0",transition:"$canopySlideIn",boxShadow:"none"}),u=(0,c.zo)("div",(0,a.Z)({display:"flex",position:"fixed",left:"0",zIndex:"5",width:"100%"},"> ".concat(o.N),{display:"flex",justifyContent:"space-between",alignItems:"center"})),d=(0,c.zo)("div",{height:"$gr5",padding:"$gr4 0 $gr3","@sm":{height:"$gr5",padding:"$gr3 0 $gr2"},"#canopy-search-summary":{opacity:"1",transition:"$canopyOpacity",fontSize:"$gr4",color:"$slate11",fontWeight:"300","@sm":{fontSize:"$gr3"}},variants:{isFixed:{true:(0,a.Z)({},"> ".concat(u),(0,a.Z)({"#canopy-search-summary":{opacity:"0"}},"".concat(l),{right:"50%",transform:"translate(50%)",backfaceVisibility:"hidden",webkitFontSmoothing:"subpixel-antialiased",boxShadow:"2px 2px 5px #0003"}))}}}),p=r(5893);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var f={facetsActive:[]},g=(0,n.createContext)(void 0);function facetsReducer(e,t){if("updateFacetsActive"===t.type)return _objectSpread(_objectSpread({},e),{},{facetsActive:t.facetsActive})}function FacetsProvider(e){var t=e.initialState,r=e.children,a=(0,n.useReducer)(facetsReducer,void 0===t?f:t),o=a[0],i=a[1];return(0,p.jsx)(g.Provider,{value:{facetsDispatch:i,facetsState:o},children:r})}function useFacetsState(){var e=(0,n.useContext)(g);if(void 0===e)throw Error("useFacetsState must be used within a FacetsProvider");return e}var h=r(5407),m=r(5014),x=r(2469),Activate=function(){var e=Array.from(useFacetsState().facetsState.facetsActive.keys()).filter(function(e){return"q"!==e}).length;return(0,p.jsx)(l,{asChild:!0,children:(0,p.jsxs)(h.O,{buttonType:"primary",children:[(0,m.EK)("searchFilter")," ",(0,p.jsx)(x.hsZ,{}),e>0&&(0,p.jsx)(s,{children:e})]})})},v=r(9802),b=r(3278),y=r(2765),j=(0,c.zo)(i.VY,{width:"calc(100% - $gr5 * 2)",maxWidth:b.G.default,maxHeight:"calc(100% - $gr5 * 2)",background:"$slate2",position:"fixed",top:"$gr5",left:"50%",overflowY:"auto",zIndex:"10",borderRadius:"3px",boxShadow:"5px 5px 13px ".concat(y.VS.slateA7),borderTop:"1px solid $slateA1",borderBottom:"1px solid $slateA4",transform:"translateX(-50%)",overflow:"clip",display:"flex","@lg":{width:"calc(100% - $gr4 * 2)",maxHeight:"calc(100% - $gr4 * 2)",top:"$gr4"},"@sm":{width:"calc(100% - $gr3 * 2)",maxHeight:"calc(100% - $gr3 * 2)",top:"$gr3"}}),$=(0,c.zo)("div",{display:"flex",flexDirection:"column",flexWrap:"nowrap",width:"100%",overflow:"scroll"}),w=(0,c.zo)("header",{display:"flex",flexGrow:"0",justifyContent:"space-between",padding:"$gr3 $gr4",color:"$slate9",fontSize:"$gr3",fontFamily:"$display",fontWeight:"300",alignItems:"center","@sm":{padding:"$gr2 $gr3"}}),S=(0,c.zo)("footer",{display:"flex",flexGrow:"0",justifyContent:"space-between",padding:"$gr3 $gr4","@sm":{padding:"$gr2 $gr3"}}),O=(0,c.zo)("div",{display:"flex",flexDirection:"column",flexGrow:"1",borderTop:"1px solid $slate4",borderBottom:"1px solid $slate4",overflowY:"scroll !important",padding:"$gr3 $gr4","@sm":{padding:"$gr2 $gr3"}}),C=(0,c.zo)(i.Dx,{}),_=(0,c.zo)(i.x8,{display:"flex",justifyContent:"center",alignItems:"center",border:"none",borderRadius:"50%",color:"$slate10",background:"transparent",cursor:"pointer",width:"$gr4",height:"$gr4",transition:"$canopyAll"}),A=(0,c.zo)(i.aV,{backgroundColor:"$slateA8",position:"fixed",top:0,left:0,right:0,bottom:0,display:"grid",placeItems:"center",overflowY:"auto",zIndex:"10",transition:"$canopyAll","&:hover":{backgroundColor:"$slateA9"},"&::after":{position:"fixed",zIndex:"11",background:"linear-gradient(180deg, $slate2, #0000)",width:"100%",height:"$gr9",left:"0",top:"0",content:""}}),F=(0,c.zo)(i.h_,{}),z=r(7058),P=(0,c.zo)(v.xz,{display:"flex",justifyContent:"space-between",width:"100%",padding:"$gr2 0",backgroundColor:"transparent",border:"none",fontFamily:"$display",fontSize:"$gr4",cursor:"pointer",borderTop:"1px solid $slate4","&:hover, &:focus":{color:"$indigo11"},svg:{transition:"$canopyAll",transform:"rotate(-90deg)",color:"$slate10"},"&[aria-expanded='true']":{color:"$slate12 !important",fontWeight:"800",svg:{color:"$slate12 !important",transform:"rotate(0deg)"}}}),k=(0,c.zo)(v.VY,{padding:"$gr1 0 $gr4"}),E=(0,c.zo)(v.h4,{}),D=(0,c.zo)(v.ck,{"&:first-child":(0,a.Z)({},"".concat(P),{border:"none"})}),R=r(6069),Z=(0,c.zo)("label",{transition:"$canopyAll",cursor:"pointer",fontWeight:"500",variants:{isChecked:{true:{color:"$slate12 !important",fontWeight:"800"}}},"&:hover, &:focus":{color:"$indigo11"},span:{color:"$slate11 !important",fontSize:"$gr2"}}),M=(0,c.zo)(R.fC,{position:"relative",zIndex:"0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"$gr3",height:"$gr3",margin:"0 $gr1 0 0",background:"$slate4",boxShadow:"inset 1px 1px 2px #0002",border:"none",borderRadius:"50%",cursor:"pointer",transition:"$canopyAll",flexShrink:"0","&::before":{position:"absolute",width:"100%",height:"100%",content:"",background:"linear-gradient(-45deg, $indigo11, $indigo8)",opacity:"0",borderRadius:"50%",transition:"$canopyAll",zIndex:"0"},"&[aria-checked='true']":{boxShadow:"1px 1px 2px ${indigoA.indigoA4}","&::before":{opacity:"1"}}}),I=(0,c.zo)(R.z$,{position:"absolute",zIndex:"1",color:"$indigo1",textShadow:"1px 1px 2px ".concat(y.EhR.indigoA12)}),K=(0,c.zo)("span",{display:"flex",margin:"0 0 $gr1",fontSize:"$gr3",color:"$slate11","&:last-child":{margin:"0"}}),Option=function(e){var t=e.active,r=e.facet,n=e.identifier,a=e.option,o=useFacetsState(),i=o.facetsDispatch,c=o.facetsState.facetsActive;return(0,p.jsxs)(K,{children:[(0,p.jsx)(M,{value:a.value,id:n,checked:t,onCheckedChange:function(e){c.delete(r),e&&c.append(r,a.slug),i({type:"updateFacetsActive",facetsActive:c})},children:(0,p.jsx)(I,{asChild:!0,children:(0,p.jsx)(x.nQG,{})})}),(0,p.jsxs)(Z,{htmlFor:n,isChecked:t,children:[a.value," ",(0,p.jsxs)("span",{children:["(",a.doc_count,")"]})]})]})},Facet=function(e){var t=e.label,r=e.slug,a=e.values,o=useFacetsState().facetsState.facetsActive,i=null==o?void 0:o.toString(),c={slug:"",value:(0,m.EK)("searchFilterAny")},s=(0,n.useState)({slug:"",value:(0,m.EK)("searchFilterAny")}),l=s[0],u=s[1];return(0,n.useEffect)(function(){var e,t=null==o?void 0:o.get(r);u(t?{slug:t,value:null===(e=a.find(function(e){return e.slug===t}))||void 0===e?void 0:e.value}:c)},[o,i,r,a]),(0,p.jsxs)(D,{value:r,children:[(0,p.jsx)(E,{asChild:!0,children:(0,p.jsxs)(P,{children:[(0,p.jsxs)("span",{children:[t," ",(0,p.jsx)(x.v4q,{})]}),(0,p.jsx)("span",{children:l.value})]})}),(0,p.jsx)(k,{children:a.map(function(e,t){var n="".concat(r,"-").concat(e.slug,"-").concat(t);return(0,p.jsx)(Option,{active:l.slug===e.slug,facet:r,identifier:n,option:e},n)})})]})},T=r(1163);function Modal_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Modal_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Modal_ownKeys(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Modal_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Modal=function(e){var t=e.handleSubmit,r=useFacetsState(),a=r.facetsState,o=r.facetsDispatch,i=a.facetsActive,c=(0,T.useRouter)();return(0,p.jsxs)(F,{children:[(0,p.jsx)(A,{}),(0,p.jsx)(j,{children:(0,p.jsxs)($,{children:[(0,p.jsxs)(w,{children:[(0,p.jsx)(C,{asChild:!0,children:(0,p.jsx)("span",{children:(0,m.EK)("searchFilter")})}),(0,p.jsx)(_,{"aria-label":(0,m.EK)("searchFilterClose"),children:(0,p.jsx)(x.Pxu,{})})]}),(0,p.jsx)(O,{children:(0,p.jsx)(v.fC,{type:"single",collapsible:!0,children:z.map(function(e){return(0,n.createElement)(Facet,Modal_objectSpread(Modal_objectSpread({},e),{},{key:e.slug}))})})}),(0,p.jsxs)(S,{children:[(0,p.jsx)(h.O,{buttonType:"transparent",onClick:function(){z.forEach(function(e){return i.delete(e.slug)}),o({type:"updateFacetsActive",facetsActive:i})},children:(0,m.EK)("searchFilterClear")}),(0,p.jsx)(h.O,{buttonType:"primary",onClick:function(){c.push({pathname:"/search",query:i.toString()}),t()},children:(0,m.EK)("searchFilterSubmit")})]})]})})]})},q=(0,c.zo)(i.fC,{}),L=r(7642),Facets=function(){var e=(0,T.useRouter)().asPath,t=(0,n.useState)(!1),r=t[0],a=t[1],o=useFacetsState().facetsDispatch,i=(0,L.MQ)(),c=i.canopyDispatch,s=i.canopyState,l=s.headerVisible,u=s.searchParams;(0,n.useEffect)(function(){o({type:"updateFacetsActive",facetsActive:u})},[u,o]);var handleDialogChange=function(){a(!r),c({type:"updateHeaderVisible",headerVisible:!l})};return(0,n.useEffect)(function(){a(!1),c({type:"updateHeaderVisible",headerVisible:!0})},[e,c]),(0,p.jsxs)(q,{open:r,onOpenChange:handleDialogChange,children:[(0,p.jsx)(Activate,{}),(0,p.jsx)(Modal,{handleSubmit:handleDialogChange})]})},Facets_Facets=function(){return(0,p.jsx)(FacetsProvider,{children:(0,p.jsx)(Facets,{})})},N=r(7843),U=r(2929),V=r(7812),getPartOf=function(e){var t=new URL(e);return t.searchParams.delete("page"),[{id:t,type:"Collection"}]},W=r(3981),B=r(633),G=r(6486),H=r.n(G),Y=r(6304),getDocuments=function(e,t){var r=new Y.Document(t);W.forEach(function(e){return r.add(e)});var n=r.search(e).reduce(function(e,t){return(0,V.Z)(new Set([].concat((0,V.Z)(e),(0,V.Z)(t.result))))},[]);return n.length>0?n:[]},getResults=function(e,t,r,n){var a,o=t?getDocuments(t,n):W.map(function(e){return e.id}),i=0===r.length?B:(a=r.map(function(e){var t=z.find(function(t){return t.slug===e.label}).values.find(function(t){return t.slug===e.value});return null==t?void 0:t.docs}),B.filter(function(e){return H().intersection.apply(H(),(0,V.Z)(a)).includes(e.index)}));return o.filter(function(e){return i.some(function(t){return t.index===e})}).map(function(t){var r;return{id:(r=i.find(function(e){return e.index===t})).id,type:"Manifest",label:r.label,thumbnail:r.thumbnail,homepage:[{id:"".concat(e,"/works/").concat(r.slug),type:"Text",label:r.label}]}})};function request_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function request_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?request_ownKeys(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):request_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var searchRequest=function(e){var t,r=e.params,n=e.baseUrl,a=e.flexSearch,o=z.map(function(e){return e.slug}).filter(function(e){return r.has(e)}).map(function(e){var t=r.get(e);return{label:e,value:t}}),i=null==r?void 0:r.get("q"),c=null==r?void 0:r.get("page"),s=new URL("".concat(n,"/search"));s.search=null==r?void 0:r.toString();var l=getResults(n,i,o,a),u=Array.from(Array(Math.ceil(l.length/10)).keys()).map(function(e){var t=l.slice(10*e,10*(e+1)).map(function(e){return e.id});return{page:e+1,items:t}}),d=c?(t=parseInt(c),u.find(function(e){return e.page===t}).items.map(function(e){return l.find(function(t){return t.id===e})})):u.map(function(e){var t=new URL(s);return t.searchParams.append("page",e.page),{id:t.toString(),type:"Collection",label:{none:["Page ".concat(e.page," (").concat(e.items.length," Total)")]}}});return request_objectSpread(request_objectSpread({"@context":"https://iiif.io/api/presentation/3/context.json",id:s.toString(),type:"Collection",label:{none:[i||"All Results"]},items:d},c?{summary:{none:["".concat(l.length,"}")]}}:{summary:{none:["".concat(l.length)]}}),c&&{partOf:getPartOf(s)})},hooks_usePageResults=function(e,t,r){var a=(0,n.useState)([]),o=a[0],i=a[1],c=(0,n.useState)(!1),s=c[0],l=c[1],u=(0,n.useState)(!0),d=u[0],p=u[1],f=(0,n.useState)(!1),g=f[0],h=f[1],m=(0,L.MQ)().canopyState.config,reset=function(){i([]),l(!1),p(!0),h(!1)};return(0,n.useEffect)(function(){return reset()},[r]),(0,n.useEffect)(function(){if(p(!0),l(!1),(null==e?void 0:e.length)>0&&e[t]){var r,n=searchRequest({params:new URL(e[t]).searchParams,baseUrl:null==m?void 0:m.baseUrl,flexSearch:null==m?void 0:null===(r=m.search)||void 0===r?void 0:r.flexSearch}).items;i(function(e){return[].concat((0,V.Z)(e),(0,V.Z)(n))}),h(e.length>t),p(!1)}},[m,e,t]),{data:o,error:s,loading:d,more:g}},Results=function(e){var t=e.pages,r=e.query,a=(0,n.useState)(0),o=a[0],i=a[1],c=hooks_usePageResults(t,o,r),s=c.data,l=c.loading,u=c.more;(0,n.useEffect)(function(){return i(0)},[r]);var d=(0,n.useRef)(),f=(0,n.useCallback)(function(e){!l&&(d.current&&d.current.disconnect(),d.current=new IntersectionObserver(function(e){e[0].isIntersecting&&u&&i(function(e){return e+1})}),e&&d.current.observe(e))},[l,u]);return(0,p.jsx)(U.Z,{children:s.map(function(e,t){return s.length===t+1?(0,p.jsx)("span",{ref:s.length===t+1?f:void 0,children:(0,p.jsx)(U.Z.Item,{item:e})},e.id):(0,p.jsx)("span",{children:(0,p.jsx)(U.Z.Item,{item:e})},e.id)})})},J=r(1830),Q=r(5049),hooks_useElementPosition=function(e){var t=(0,n.useState)(0),r=t[0],a=t[1];return(0,n.useEffect)(function(){var updatePosition=function(){a(window.pageYOffset),e.current&&a(window.pageYOffset-e.current.offsetTop)};return window.addEventListener("scroll",updatePosition),updatePosition(),function(){return window.removeEventListener("scroll",updatePosition)}},[e]),r},X=r(9332),ee=!0,search=function(){var e=(0,X.useSearchParams)(),t=(0,n.useState)([]),r=t[0],a=t[1],i=(0,n.useState)(),c=i[0],s=i[1],l=(0,n.useRef)(null),f=hooks_useElementPosition(l),g=(0,L.MQ)(),h=g.canopyDispatch,x=g.canopyState,v=x.config,b=x.searchHeaderFixed,y=x.searchSummary;return(0,n.useEffect)(function(){a([]),s(new URLSearchParams(e.toString()))},[e]),(0,n.useEffect)(function(){return h({searchHeaderFixed:f>-Q.J9,type:"updateSearchHeaderFixed"})},[h,f]),(0,n.useEffect)(function(){if(void 0!==c){h({searchParams:c,type:"updateSearchParams"});var e,t=null==v?void 0:null===(e=v.search)||void 0===e?void 0:e.flexSearch,r=searchRequest({params:c,baseUrl:null==v?void 0:v.baseUrl,flexSearch:t}),n=r.items,o=r.summary;a(n.map(function(e){return e.id})),o&&h({type:"updateSearchSummary",searchSummary:o})}},[v,c,h]),(0,p.jsxs)(N.Z,{children:[(0,p.jsx)(d,{ref:l,isFixed:b,children:(0,p.jsx)(u,{children:(0,p.jsxs)(o.Z,{containerType:"wide",children:[y&&(0,p.jsxs)("span",{id:"canopy-search-summary",children:[(0,p.jsx)(J.Summary,{as:"span",summary:y})," ",(0,m.EK)("searchResults")]}),(0,p.jsx)(Facets_Facets,{})]})})}),(0,p.jsx)(o.Z,{containerType:"wide",children:(0,p.jsx)(Results,{pages:r,query:c})})]})}},8266:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return r(9014)}])},7058:function(e){"use strict";e.exports=JSON.parse('[{"label":"Date","slug":"date","values":[{"value":"1935","slug":"1935","doc_count":5,"docs":[12,13,14,16,17]},{"value":"1837","slug":"1837","doc_count":1,"docs":[8]},{"value":"1856","slug":"1856","doc_count":1,"docs":[9]},{"value":"1906","slug":"1906","doc_count":1,"docs":[19]},{"value":"1921","slug":"1921","doc_count":1,"docs":[15]},{"value":"1937","slug":"1937","doc_count":1,"docs":[0]},{"value":"1938","slug":"1938","doc_count":1,"docs":[1]},{"value":"1943","slug":"1943","doc_count":1,"docs":[11]},{"value":"1951","slug":"1951","doc_count":1,"docs":[2]},{"value":"1952","slug":"1952","doc_count":1,"docs":[18]},{"value":"1969","slug":"1969","doc_count":1,"docs":[3]},{"value":"1980","slug":"1980","doc_count":1,"docs":[4]},{"value":"1989","slug":"1989","doc_count":1,"docs":[5]},{"value":"1997","slug":"1997","doc_count":1,"docs":[6]},{"value":"2007","slug":"2007","doc_count":1,"docs":[7]}]}]')},3981:function(e){"use strict";e.exports=JSON.parse('[{"id":0,"label":"1937 Monroe County highway map","metadata":"1937"},{"id":1,"label":"1938 Monroe County traffic flow map","metadata":"1938"},{"id":2,"label":"1951 Monroe County highway map","metadata":"1951"},{"id":3,"label":"1969 Monroe County highway map","metadata":"1969"},{"id":4,"label":"1980 Monroe County highway map","metadata":"1980"},{"id":5,"label":"1989 Monroe County highway map","metadata":"1989"},{"id":6,"label":"1997 Monroe County highway map","metadata":"1997"},{"id":7,"label":"2007 Monroe County highway map","metadata":"2007"},{"id":8,"label":"Sheet 20: Clarke, Conecuh, Dallas, Marengo, Monroe, and Wilcox Counties.","metadata":"1837"},{"id":9,"label":"Southwest section.","metadata":"1856"},{"id":10,"label":"\\"Map of Monroe County, Alabama.\\"","metadata":""},{"id":11,"label":"\\"The Town of Claiborne.\\"","metadata":"1943"},{"id":12,"label":"Fire insurance map of Beatrice, Alabama.","metadata":"1935"},{"id":13,"label":"Fire insurance map of Beatrice, Alabama.","metadata":"1935"},{"id":14,"label":"Fire insurance map of Frisco City, Alabama.","metadata":"1935"},{"id":15,"label":"Fire insurance map of Jones Mill, Alabama.","metadata":"1921"},{"id":16,"label":"Fire insurance map of Peterman, Alabama.","metadata":"1935"},{"id":17,"label":"Fire insurance map of Tunnel Springs, Alabama.","metadata":"1935"},{"id":18,"label":"Fire insurance map of Uriah, Alabama.","metadata":"1952"},{"id":19,"label":"Map of Claiborne, Alabama.","metadata":"1906"}]')}},function(e){e.O(0,[412,409,662,971,339,493,933,41,774,888,179],function(){return e(e.s=8266)}),_N_E=e.O()}]);