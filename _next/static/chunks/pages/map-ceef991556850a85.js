(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{5078:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/map",function(){return t(972)}])},5677:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){let t=l.default,o={loading:e=>{let{error:a,isLoading:t,pastDelay:n}=e;return null}};e instanceof Promise?o.loader=()=>e:"function"==typeof e?o.loader=e:"object"==typeof e&&(o=n({},o,e)),o=n({},o,a);let d=o.loader,r=()=>null!=d?d().then(u):Promise.resolve(u(()=>null));return(o.loadableGenerated&&delete(o=n({},o,o.loadableGenerated)).loadableGenerated,"boolean"!=typeof o.ssr||o.ssr)?t(n({},o,{loader:r})):(delete o.webpack,delete o.modules,i(t,o))},a.noSSR=i;var n=t(6495).Z,o=t(2648).Z,l=(o(t(7294)),o(t(8976)));function u(e){return{default:(null==e?void 0:e.default)||e}}function i(e,a){return delete a.webpack,delete a.modules,e(a)}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},2254:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.LoadableContext=void 0;var n=(0,t(2648).Z)(t(7294));let o=n.default.createContext(null);a.LoadableContext=o},8976:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t(6495).Z,o=(0,t(2648).Z)(t(7294)),l=t(2254);let u=[],i=[],d=!1;function r(e){let a=e(),t={loading:!0,loaded:null,error:null};return t.promise=a.then(e=>(t.loading=!1,t.loaded=e,e)).catch(e=>{throw t.loading=!1,t.error=e,e}),t}class s{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:a}=this;e.loading&&("number"==typeof a.delay&&(0===a.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},a.delay)),"number"==typeof a.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},a.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=n({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,a){this._loadFn=e,this._opts=a,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,a){let t=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},a),n=null;function u(){if(!n){let a=new s(e,t);n={getCurrentValue:a.getCurrentValue.bind(a),subscribe:a.subscribe.bind(a),retry:a.retry.bind(a),promise:a.promise.bind(a)}}return n.promise()}if(!d){let e=t.webpack?t.webpack():t.modules;e&&i.push(a=>{for(let t of e)if(-1!==a.indexOf(t))return u()})}function r(e,a){!function(){u();let e=o.default.useContext(l.LoadableContext);e&&Array.isArray(t.modules)&&t.modules.forEach(a=>{e(a)})}();let i=o.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return o.default.useImperativeHandle(a,()=>({retry:n.retry}),[]),o.default.useMemo(()=>{var a;return i.loading||i.error?o.default.createElement(t.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?o.default.createElement((a=i.loaded)&&a.default?a.default:a,e):null},[e,i])}return r.preload=()=>u(),r.displayName="LoadableComponent",o.default.forwardRef(r)}(r,e)}function m(e,a){let t=[];for(;e.length;){let n=e.pop();t.push(n(a))}return Promise.all(t).then(()=>{if(e.length)return m(e,a)})}c.preloadAll=()=>new Promise((e,a)=>{m(u).then(e,a)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(a=>{let t=()=>(d=!0,a());m(i,e).then(t,t)})},window.__NEXT_PRELOADREADY=c.preloadReady,a.default=c},972:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return c}});var n=t(5893);t(585);var o=t(2049);t(7294),t(6803),t(7058),t(3981);var l=t(633);let u=()=>l;var i=t(5152),d=t.n(i),r=t(4923);let s=d()(()=>Promise.all([t.e(269),t.e(9)]).then(t.bind(t,5009)),{loadableGenerated:{webpack:()=>[5009]},ssr:!1});function c(){let e=u(),a=e.filter(e=>e.navPlace),t=(0,r.N)(a);return(0,n.jsx)(o.Z,{children:(0,n.jsx)("div",{children:(0,n.jsx)(s,{manifests:t})})})}},4923:function(e,a,t){"use strict";t.d(a,{N:function(){return o},z:function(){return n}});let n=e=>{let a=e.map(e=>{let a=e.features.filter(e=>"Point"===e.geometry.type),t=a.map(e=>[e.geometry.coordinates[1],e.geometry.coordinates[0]]);return[...t]});return[].concat(...a)},o=e=>e.map(e=>({id:e.id,thumbnail:e.thumbnail,label:e.label,slug:"works/".concat(e.slug),features:e.navPlace.features.filter(e=>"Point"===e.geometry.type)}))},585:function(){},5152:function(e,a,t){e.exports=t(5677)},7058:function(e){"use strict";e.exports=JSON.parse('[{"label":"Subject","slug":"subject","values":[{"value":"Bodies of water","slug":"bodies-of-water","doc_count":19,"docs":[3,4,19,21,22,24,28,33,35,48,53,54,67,68,70,74,85,86,87]},{"value":"Log cabins","slug":"log-cabins","doc_count":12,"docs":[5,9,12,16,31,52,54,56,57,63,74,76]},{"value":"Trails","slug":"trails","doc_count":7,"docs":[0,3,7,8,53,66,87]},{"value":"Hotels","slug":"hotels","doc_count":4,"docs":[0,72,80,88]},{"value":"Pine","slug":"pine","doc_count":4,"docs":[2,10,45,84]},{"value":"Roads","slug":"roads","doc_count":4,"docs":[22,28,34,70]},{"value":"Sawmills","slug":"sawmills","doc_count":4,"docs":[42,51,60,85]},{"value":"Oak","slug":"oak","doc_count":3,"docs":[2,45,84]},{"value":"Transportation","slug":"transportation","doc_count":2,"docs":[47,50]},{"value":"Barns","slug":"barns","doc_count":1,"docs":[16]},{"value":"Buildings","slug":"buildings","doc_count":1,"docs":[65]},{"value":"College campuses","slug":"college-campuses","doc_count":1,"docs":[89]},{"value":"Dams","slug":"dams","doc_count":1,"docs":[85]},{"value":"Farms","slug":"farms","doc_count":1,"docs":[69]},{"value":"Food","slug":"food","doc_count":1,"docs":[52]},{"value":"Handicraft","slug":"handicraft","doc_count":1,"docs":[18]},{"value":"Housing","slug":"housing","doc_count":1,"docs":[25]},{"value":"Rye","slug":"rye","doc_count":1,"docs":[41]}]},{"label":"Date","slug":"date","values":[{"value":"Aug 13, 1886","slug":"aug-13-1886","doc_count":12,"docs":[0,12,18,26,40,55,57,66,73,80,81,88]},{"value":"Aug 19, 1886","slug":"aug-19-1886","doc_count":12,"docs":[2,15,16,19,21,39,47,51,58,68,84,86]},{"value":"Aug 14, 1886","slug":"aug-14-1886","doc_count":10,"docs":[4,8,11,17,23,35,44,48,54,83]},{"value":"Aug 16, 1886","slug":"aug-16-1886","doc_count":9,"docs":[5,7,9,24,33,34,43,56,67]},{"value":"Aug 25, 1886","slug":"aug-25-1886","doc_count":7,"docs":[25,30,42,62,63,69,78]},{"value":"Aug 12, 1886","slug":"aug-12-1886","doc_count":6,"docs":[1,6,32,59,72,77]},{"value":"Aug 18, 1886","slug":"aug-18-1886","doc_count":6,"docs":[3,22,28,53,76,87]},{"value":"Aug 22, 1886","slug":"aug-22-1886","doc_count":5,"docs":[38,61,71,79,82]},{"value":"Aug 28, 1886","slug":"aug-28-1886","doc_count":4,"docs":[10,20,37,60]},{"value":"Aug 30, 1886","slug":"aug-30-1886","doc_count":4,"docs":[14,29,46,64]},{"value":"Aug 17, 1886","slug":"aug-17-1886","doc_count":3,"docs":[36,50,52]},{"value":"Aug 20, 1886","slug":"aug-20-1886","doc_count":3,"docs":[31,74,85]},{"value":"Aug 27, 1886","slug":"aug-27-1886","doc_count":3,"docs":[27,41,45]},{"value":"Aug 11, 1886","slug":"aug-11-1886","doc_count":2,"docs":[65,89]},{"value":"Aug 24, 1886","slug":"aug-24-1886","doc_count":2,"docs":[13,75]},{"value":"Aug 21, 1886","slug":"aug-21-1886","doc_count":1,"docs":[70]},{"value":"Sep 1, 1886","slug":"sep-1-1886","doc_count":1,"docs":[49]}]},{"label":"Place","slug":"place","values":[{"value":"Great Smoky Mountains (N.C. and Tenn.)","slug":"great-smoky-mountains-nc-and-tenn","doc_count":87,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88]},{"value":"Little River","slug":"little-river","doc_count":19,"docs":[4,19,21,23,24,33,35,39,46,47,48,54,60,64,67,74,76,85,86]},{"value":"Mount Nebo","slug":"mount-nebo","doc_count":14,"docs":[1,5,12,18,26,31,40,44,55,57,72,73,77,81]},{"value":"Pine Mountain","slug":"pine-mountain","doc_count":9,"docs":[6,8,9,13,32,44,59,75,83]},{"value":"Blount County (Tenn.)","slug":"blount-county-tenn","doc_count":8,"docs":[0,2,25,26,40,50,84,88]},{"value":"Millers Cove","slug":"millers-cove","doc_count":8,"docs":[35,39,48,54,56,63,68,69]},{"value":"Tuckaleechee Cove","slug":"tuckaleechee-cove","doc_count":5,"docs":[16,42,51,68,78]},{"value":"Scott Mountain","slug":"scott-mountain","doc_count":4,"docs":[15,15,58,58]},{"value":"Gregory Bald","slug":"gregory-bald","doc_count":3,"docs":[27,41,45]},{"value":"Knoxville (Tenn.)","slug":"knoxville-tenn","doc_count":3,"docs":[49,65,89]},{"value":"Laurel Creek","slug":"laurel-creek","doc_count":3,"docs":[22,28,50]},{"value":"Cades Cove","slug":"cades-cove","doc_count":2,"docs":[20,37]},{"value":"Blockhouse Mountain","slug":"blockhouse-mountain","doc_count":1,"docs":[27]},{"value":"Tennessee River","slug":"tennessee-river","doc_count":1,"docs":[89]},{"value":"Thunderhead Mountain","slug":"thunderhead-mountain","doc_count":1,"docs":[27]}]}]')},3981:function(e){"use strict";e.exports=JSON.parse('[{"id":0,"label":"Path from Melrose Spring - to Hotel. Blount Co. Tenn","metadata":"Aug 13, 1886 Trails Hotels Blount County (Tenn.) Great Smoky Mountains (N.C. and Tenn.)"},{"id":1,"label":"The aqueduct Mt. Nebo from Spring house","metadata":"Aug 12, 1886 Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":2,"label":"Giant pines on Scott Mt.","metadata":"Aug 19, 1886 Pine Oak Blount County (Tenn.) Great Smoky Mountains (N.C. and Tenn.)"},{"id":3,"label":"Bridle path to Robt. Spence\'s (cascades)","metadata":"Aug 18, 1886 Trails Bodies of water Great Smoky Mountains (N.C. and Tenn.)"},{"id":4,"label":"Saddle Mt. Little River Gap from near Sammie Walker\'s Miller\'s Cove","metadata":"Aug 14, 1886 Bodies of water Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":5,"label":"Mt. Nebo - Chilhowee R. - from Miller\'s Cove","metadata":"Aug 16, 1886 Log cabins Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":6,"label":"Summit of Pine Mt. (looking west)Chilhowee Range Blount Co. Tenn.","metadata":"Aug 12, 1886 Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":7,"label":"View from road over Scott Mt. (Great Smoky Mts. in distance lost by over exposure)","metadata":"Aug 16, 1886 Trails Great Smoky Mountains (N.C. and Tenn.)"},{"id":8,"label":"Looking toward Dammit from Pine Mt. Trail","metadata":"Aug 14, 1886 Trails Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":9,"label":"Pine Mt. - Chilhowee R. - from Miller\'s Cove","metadata":"Aug 16, 1886 Log cabins Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":10,"label":"Crossed pines on road from Cade\'s Cove to Tuckaleechee","metadata":"Aug 28, 1886 Pine Great Smoky Mountains (N.C. and Tenn.)"},{"id":11,"label":"View in Miller\'s Cove - Walker\'s boys \\"totin\' cha\'coal\\"","metadata":"Aug 14, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":12,"label":"Bly\'s cabin Mt. Nebo Blount Co. Tenn.","metadata":"Aug 13, 1886 Log cabins Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":13,"label":"Slope of Pine Mt. from Sunset Hill. Mt. Nebo","metadata":"Aug 24, 1886 Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":14,"label":"Sea of cloud, 6 A.M. from Sunset Hill, Mt. Nebo","metadata":"Aug 30, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":15,"label":"Little, or Fox Mt. from road over Scott Mt.","metadata":"Aug 19, 1886 Scott Mountain Scott Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":16,"label":"Com. Caughron\'s house Tuckaleechee Cove Tenn.","metadata":"Aug 19, 1886 Log cabins Barns Tuckaleechee Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":17,"label":"Miller\'s Cove (looking North) from slope of Pine Mt.","metadata":"Aug 14, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":18,"label":"Auntie Bly - spinning","metadata":"Aug 13, 1886 Handicraft Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":19,"label":"Double bend in Little River below Tuckaleechee Cove","metadata":"Aug 19, 1886 Bodies of water Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":20,"label":"Cade\'s Cove Mt. From road to Tuckaleechee","metadata":"Aug 28, 1886 Cades Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":21,"label":"Up Little River from ford at Tuckaleechee","metadata":"Aug 19, 1886 Bodies of water Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":22,"label":"Laurel Creek road Blount Co. Tenn. (laurels)","metadata":"Aug 18, 1886 Bodies of water Roads Laurel Creek Great Smoky Mountains (N.C. and Tenn.)"},{"id":23,"label":"Saddle Mt. -Chilhowee R. - from Sam Walker\'s backyard","metadata":"Aug 14, 1886 Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":24,"label":"Little River above Vance Walker\'s","metadata":"Aug 16, 1886 Bodies of water Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":25,"label":"Squire D. B. Lawson\'s house. Cade\'s Cove - Blount Co. Tenn.","metadata":"Aug 25, 1886 Housing Blount County (Tenn.) Great Smoky Mountains (N.C. and Tenn.)"},{"id":26,"label":"Spring and rocks at Mt. Nebo. Blount Co. Tenn.","metadata":"Aug 13, 1886 Mount Nebo Blount County (Tenn.) Great Smoky Mountains (N.C. and Tenn.)"},{"id":27,"label":"Thunderhead and Blockhouse from summit of Big Bald","metadata":"Aug 27, 1886 Blockhouse Mountain Gregory Bald Thunderhead Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":28,"label":"Laurel Creek road near A.J. Dorsey\'s","metadata":"Aug 18, 1886 Bodies of water Roads Laurel Creek Great Smoky Mountains (N.C. and Tenn.)"},{"id":29,"label":"Sea of cloud, 6 A.M. from Sunset Hill, Mt. Nebo","metadata":"Aug 30, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":30,"label":"Avert\'s clearing. Miller\'s Cove","metadata":"Aug 25, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":31,"label":"King\'s cabin. Mt. Nebo","metadata":"Aug 20, 1886 Log cabins Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":32,"label":"Summit of Pine Mt. Chilhowee Range Blount Co. Tenn.","metadata":"Aug 12, 1886 Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":33,"label":"Up Little River from below Tuckaleechee Cove","metadata":"Aug 16, 1886 Bodies of water Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":34,"label":"Great Smoky Mts. From road over Scott Mt.","metadata":"Aug 16, 1886 Roads Great Smoky Mountains (N.C. and Tenn.)"},{"id":35,"label":"Down Little River from point in front of Sammie Walker\'s-Miller\'s Cove","metadata":"Aug 14, 1886 Bodies of water Millers Cove Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":36,"label":"Great Smoky Mts. From E. slope of Defeat Mt.","metadata":"Aug 17, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":37,"label":"Early morning in Cade\'s Cove - Cloud on Cade\'s Cove Mt.","metadata":"Aug 28, 1886 Cades Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":38,"label":"Knob on Chilhowee R","metadata":"Aug 22, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":39,"label":"Brewer\'s Clearing on Little River (Upper end of Miller\'s Cove)","metadata":"Aug 19, 1886 Little River Millers Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":40,"label":"View from verandah of Mt. Nebo house - Blount Co.","metadata":"Aug 13, 1886 Mount Nebo Blount County (Tenn.) Great Smoky Mountains (N.C. and Tenn.)"},{"id":41,"label":"Rye field and \\"Twenty Mile Range\\" from summit of Big Bald","metadata":"Aug 27, 1886 Rye Gregory Bald Great Smoky Mountains (N.C. and Tenn.)"},{"id":42,"label":"Spring and rocks at McCampbell\'s Mill. Tuckaleechee, noon recess of school","metadata":"Aug 25, 1886 Sawmills Tuckaleechee Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":43,"label":"Miller\'s Cove (looking S.E. from Hatcher\'s) Dr. C.S. Evans in foreground","metadata":"Aug 16, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":44,"label":"Flank of Mt. Nebo from slope of Pine Mt.","metadata":"Aug 14, 1886 Mount Nebo Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":45,"label":"Oak forest around summit of Big Bald Mt.","metadata":"Aug 27, 1886 Pine Oak Gregory Bald Great Smoky Mountains (N.C. and Tenn.)"},{"id":46,"label":"Little River Valley from point of rocks N. of Mt. Nebo House","metadata":"Aug 30, 1886 Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":47,"label":"Cliff on Little River below Tuckaleechee Cove","metadata":"Aug 19, 1886 Transportation Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":48,"label":"Little River opposite Uncle Sammy Walker\'s house-Miller\'s Cove (A.P. Holt wading)","metadata":"Aug 14, 1886 Bodies of water Millers Cove Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":49,"label":"University of E. Tennessee - Knoxville","metadata":"Sep 1, 1886 Knoxville (Tenn.)"},{"id":50,"label":"Laurel Creek Road Blount Co. Tenn.","metadata":"Aug 17, 1886 Transportation Laurel Creek Blount County (Tenn.) Great Smoky Mountains (N.C. and Tenn.)"},{"id":51,"label":"Yearout\'s Mill Tuckaleechee Cove Blount Co. Tenn.","metadata":"Aug 19, 1886 Sawmills Tuckaleechee Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":52,"label":"A.J. Dorsey\'s cabin. Family at breakfast","metadata":"Aug 17, 1886 Log cabins Food Great Smoky Mountains (N.C. and Tenn.)"},{"id":53,"label":"Bridle path to Robt. Spence\'s (looking down)","metadata":"Aug 18, 1886 Trails Bodies of water Great Smoky Mountains (N.C. and Tenn.)"},{"id":54,"label":"Ferry House near Little River Gap. Miller\'s Cove","metadata":"Aug 14, 1886 Bodies of water Log cabins Millers Cove Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":55,"label":"Miss Lizzie Nourse posing as one of the natives Mt. Nebo","metadata":"Aug 13, 1886 Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":56,"label":"Sam Walker\'s cabin and garden. Miller\'s Cove, Tenn.","metadata":"Aug 16, 1886 Log cabins Millers Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":57,"label":"Bly\'s cabin Mt. Nebo Blount Co. Tenn.","metadata":"Aug 13, 1886 Log cabins Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":58,"label":"Little, or Fox Mt. from mud road at foot of Scott Mt.","metadata":"Aug 19, 1886 Scott Mountain Scott Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":59,"label":"Summit of Pine Mt. (looking north)Chilhowee Range Blount Co. Tenn.","metadata":"Aug 12, 1886 Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":60,"label":"Group of children at Cider Mill - below Little River Gap","metadata":"Aug 28, 1886 Sawmills Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":61,"label":"Chilhowee Range (looking South) near road from Maryville to Cade\'s Cove","metadata":"Aug 22, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":62,"label":"Tipton\'s Sugar Cove Mt. from rear of Squire D.B. Lawson\'s, Cade\'s Cove","metadata":"Aug 25, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":63,"label":"Alvin Walker\'s house on Flat Branch. Little River Miller\'s Cove","metadata":"Aug 25, 1886 Log cabins Millers Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":64,"label":"Little River Valley from verandah of Mt. Nebo House","metadata":"Aug 30, 1886 Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":65,"label":"Knoxville E. Tenn. University taken August 11/86","metadata":"Aug 11, 1886 Buildings Knoxville (Tenn.)"},{"id":66,"label":"Woodland trail near Melrose Spring","metadata":"Aug 13, 1886 Trails Great Smoky Mountains (N.C. and Tenn.)"},{"id":67,"label":"Down Little River below Tuckaleechee Cove","metadata":"Aug 16, 1886 Bodies of water Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":68,"label":"View from high road in pass bet. Miller\'s Cove and Tuckaleechee","metadata":"Aug 19, 1886 Bodies of water Tuckaleechee Cove Millers Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":69,"label":"Little River Gap from road near Vance Walker\'s house, Miller\'s Cove","metadata":"Aug 25, 1886 Farms Millers Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":70,"label":"View on Maryville Road in front of W. L. Calter\'s","metadata":"Aug 21, 1886 Roads Bodies of water Great Smoky Mountains (N.C. and Tenn.)"},{"id":71,"label":"\\"Tower Rocks\\" (from above) John Walker on right","metadata":"Aug 22, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":72,"label":"Mt. Nebo house Chilhowee R. Blount Co. Tenn.","metadata":"Aug 12, 1886 Hotels Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":73,"label":"Mt. Nebo. Chilhowee R. from Melrose Spring","metadata":"Aug 13, 1886 Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":74,"label":"Neubern\'s Mill pond below Little River Gap.","metadata":"Aug 20, 1886 Bodies of water Log cabins Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":75,"label":"Slope of Pine Mt. from point of rocks N. of Mt Nebo House","metadata":"Aug 24, 1886 Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":76,"label":"Dorsey\'s cabin in Middle Fork of Little River","metadata":"Aug 18, 1886 Log cabins Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":77,"label":"Gorge below Spring house Mt. Nebo","metadata":"Aug 12, 1886 Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":78,"label":"Mountain clearing in pocket on road from Tuckaleechee to Cade\'s Cove","metadata":"Aug 25, 1886 Tuckaleechee Cove Great Smoky Mountains (N.C. and Tenn.)"},{"id":79,"label":"Chilhowee Range (looking North) from Tower Rocks","metadata":"Aug 22, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":80,"label":"Distant view of Chilhowee R. from Melrose","metadata":"Aug 13, 1886 Hotels Great Smoky Mountains (N.C. and Tenn.)"},{"id":81,"label":"Mt. Nebo - Chilhowee R. from ridge near Melrose","metadata":"Aug 13, 1886 Mount Nebo Great Smoky Mountains (N.C. and Tenn.)"},{"id":82,"label":"\\"Tower Rocks\\" on Flat Branch Little River from opp. Slope of ravine","metadata":"Aug 22, 1886 Great Smoky Mountains (N.C. and Tenn.)"},{"id":83,"label":"Fernbank in Pine Mt. Chilhowee R. Blount Co. Tenn.","metadata":"Aug 14, 1886 Pine Mountain Great Smoky Mountains (N.C. and Tenn.)"},{"id":84,"label":"Pine forest on slope of Scott Mt. Blount Co. Tenn.","metadata":"Aug 19, 1886 Pine Oak Blount County (Tenn.) Great Smoky Mountains (N.C. and Tenn.)"},{"id":85,"label":"Neubern\'s Mills and Dam Little River below Gap.","metadata":"Aug 20, 1886 Sawmills Dams Bodies of water Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":86,"label":"Cliff on Little River above Sam Walker\'s","metadata":"Aug 19, 1886 Bodies of water Little River Great Smoky Mountains (N.C. and Tenn.)"},{"id":87,"label":"Bridle path to Robt. Spence\'s (Island)","metadata":"Aug 18, 1886 Trails Bodies of water Great Smoky Mountains (N.C. and Tenn.)"},{"id":88,"label":"Guests at Melrose Spring Hotel. Blount Co. Tenn. -taken by request","metadata":"Aug 13, 1886 Hotels Blount County (Tenn.) Great Smoky Mountains (N.C. and Tenn.)"},{"id":89,"label":"View from the Old College cupola (Knoxville Campus) looking South toward the Tennessee River","metadata":"Aug 11, 1886 College campuses Tennessee River Knoxville (Tenn.)"}]')}},function(e){e.O(0,[27,409,448,870,774,888,179],function(){return e(e.s=5078)}),_N_E=e.O()}]);