"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[148],{7397:function(t,e,r){r.r(e),r.d(e,{default:function(){return C}});var n=r(5893);r(585),r(5419),r(9047);var a=r(5715),o=r(9635),i=r(2013),s=r(5996),p=r(577),c=r(2604),l=r(9771),h=r(7294),u=r(5045),m=r(5243),g=r.n(m),d=r(1664),f=r.n(d),b=r(3193);let y=(0,b.zo)("div",{height:"100vh",position:"relative",zIndex:"0",".map-container":{height:"100%",width:"100%",figure:{width:"100%",margin:"0",padding:"0"}},figure:{img:{width:"100%",maxHeight:"200px"},video:{display:"none"}}});r(5732);var x=r(8806);let w=(0,x.Au)((t,e)=>{let{...r}=t,n={},a={};Object.entries(r).forEach(t=>{let[e,r]=t;return e.startsWith("on")?a[e]=r:n[e]=r});let o=g().markerClusterGroup(n);return Object.entries(a).forEach(t=>{let[e,r]=t,n="cluster".concat(e.substring(2).toLowerCase());o.on(n,r)}),{instance:o,context:{...e,layerContainer:o}}});var j=r(2111);let O=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";if(!t)return["Untitled"];if("string"==typeof t)return[t];if(!t[e]){let e=Object.getOwnPropertyNames(t);if(e.length>0)return t[e[0]]}return t[e]},v=g().icon({iconUrl:"/images/marker-icon.png",iconSize:[24,36],iconAnchor:[12,36]});var C=t=>{let{manifests:e}=t,r=(0,h.useRef)(null),[m,g]=(0,h.useState)([[51.505,-.09]]);return(0,h.useEffect)(()=>{let t=(0,j.z)(e);t.length>0&&g(t)},[e]),(0,h.useEffect)(()=>{r.current&&m&&r.current.fitBounds(m)},[r,m]),(0,n.jsx)(y,{children:(0,n.jsxs)(a.h,{className:"map-container",bounds:m,scrollWheelZoom:!1,ref:r,children:[(0,n.jsx)(o.et,{position:"topright",children:[{name:"OpenStreetMap",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},{name:"OpenTopoMap",url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},{name:"CartoDB Lite",url:"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href= "https://carto.com/about-carto/">CARTO</a>'},{name:"CartoDB Dark",url:"http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href= "https://carto.com/about-carto/">CARTO</a>'},{name:"Stamen",url:"https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'}].map((t,e)=>0===e?(0,n.jsx)(o.et.BaseLayer,{name:t.name,checked:!0,children:(0,n.jsx)(i.I,{url:t.url,attribution:t.attribution})},e):(0,n.jsx)(o.et.BaseLayer,{name:t.name,children:(0,n.jsx)(i.I,{url:t.url,attribution:t.attribution})},e))}),(0,n.jsx)(w,{children:(0,n.jsx)(s.$,{children:e.map(t=>t.features.map((e,r)=>(0,n.jsx)(p.J,{position:[e.geometry.coordinates[1],e.geometry.coordinates[0]],icon:v,children:(0,n.jsx)(c.G,{children:(0,n.jsx)("figure",{children:(0,n.jsxs)(f(),{href:t.slug,children:[(0,n.jsx)(l.pl,{thumbnail:t.thumbnail}),(0,n.jsx)("figcaption",{children:(0,n.jsx)(u.Z,{className:"slide-inner",isFlex:!0,children:(0,n.jsx)(l.__,{label:O(e.properties.label),as:"span",className:"slide-label"})})})]})})})},r)))})})]})})}}}]);