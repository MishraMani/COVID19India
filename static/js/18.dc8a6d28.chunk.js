(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[18],{113:function(e,t,n){"use strict";var i=n(47),r=n(2),a={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(r.useEffect)((function(){e.current&&new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&(s(!0),n.unobserve(e.current))}))}),a).observe(e.current)}),[e]),c}},143:function(e,t,n){"use strict";var i=n(2);t.a=function(e,t){var n=function(){var e=Object(i.useRef)(!0);return e.current?(e.current=!1,!0):e.current}();Object(i.useEffect)((function(){if(!n)return e()}),t)}},154:function(e,t,n){"use strict";var i=n(102),r=n(47),a=n(112),c=n(115),s=n(19);t.a=function(){var e=Object(c.a)(),t=Object(r.a)(e,2),n=t[0],l=t[1].width,o=window.innerWidth;l=l||(o>=769?528:o),o<769&&(l-=30);return Object(s.jsx)("div",{ref:n,className:"TableLoader",children:Object(s.jsx)(a.a,{viewBox:"0 0 ".concat(l," ").concat(900),height:900,width:l,speed:2,animate:!1,children:Object(i.a)(Array(20).keys()).map((function(e){return Object(s.jsx)("rect",{x:"0",y:45*e,rx:"3",ry:"3",width:l,height:40},e)}))})})}},194:function(e,t,n){"use strict";var i=n(2),r=n(92);t.a=function(e,t,n){if(!r.a)return[t,r.b,r.b];if(!e)throw new Error("useLocalStorage key may not be falsy");var a=n?n.raw?function(e){return e}:n.deserializer:JSON.parse,c=Object(i.useRef)((function(e){try{var i=n?n.raw?String:n.serializer:JSON.stringify,r=localStorage.getItem(e);return null!==r?a(r):(t&&localStorage.setItem(e,i(t)),t)}catch(s){return t}})),s=Object(i.useState)((function(){return c.current(e)})),l=s[0],o=s[1];Object(i.useLayoutEffect)((function(){return o(c.current(e))}),[e]);var u=Object(i.useCallback)((function(t){try{var i="function"===typeof t?t(l):t;if("undefined"===typeof i)return;var r=void 0;r=n?n.raw?"string"===typeof i?i:JSON.stringify(i):n.serializer?n.serializer(i):JSON.stringify(i):JSON.stringify(i),localStorage.setItem(e,r),o(a(r))}catch(s){}}),[e,o]),d=Object(i.useCallback)((function(){try{localStorage.removeItem(e),o(void 0)}catch(s){}}),[e,o]);return[l,u,d]}},195:function(e,t,n){"use strict";var i=n(2),r=n(92);t.a=function(e,t,n){if(!r.a)return[t,function(){}];var a=Object(i.useState)((function(){try{var i=sessionStorage.getItem(e);return"string"!==typeof i?(sessionStorage.setItem(e,n?String(t):JSON.stringify(t)),t):n?i:JSON.parse(i||"null")}catch(a){return t}})),c=a[0],s=a[1];return Object(i.useEffect)((function(){try{var t=n?String(c):JSON.stringify(c);sessionStorage.setItem(e,t)}catch(a){}})),[c,s]}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(1),r=n(0);function a(e){var t,n;if(Object(r.a)(1,arguments),e&&"function"===typeof e.forEach)t=e;else{if("object"!==typeof e||null===e)return new Date(NaN);t=Array.prototype.slice.call(e)}return t.forEach((function(e){var t=Object(i.a)(e);(void 0===n||n<t||isNaN(Number(t)))&&(n=t)})),n||new Date(NaN)}},278:function(e,t,n){"use strict";n.r(t);var i=n(47),r=n(154),a=n(10),c=n(113),s=n(98);function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=n(105),u=n(2),d=n(143),j=n(109),b=["data","isValidating","error"];var O=function(e,t,n){for(var r=Object(u.useState)(n),a=Object(i.a)(r,2),c=a[0],O=a[1],f=arguments.length,h=new Array(f>3?f-3:0),v=3;v<f;v++)h[v-3]=arguments[v];var p=j.a.apply(void 0,[e,t,c].concat(h)),g=p.data,m=p.isValidating,x=p.error,y=l(p,b);return Object(d.a)((function(){O(Object(o.a)(c,(function(e){e.initialData=g})))}),[g]),Object(s.a)(Object(s.a)({},y),{},{isValidating:m,error:x,data:g})},f=n(24),h=n(93),v=n.n(h),p=n(68),g=n(57),m=n(196),x=n(132),y=n(5),S=n(194),T=n(195),w=n(279),D=n(19),N=Object(u.lazy)((function(){return Object(f.l)((function(){return Promise.all([n.e(0),n.e(2),n.e(27)]).then(n.bind(null,285))}))})),k=Object(u.lazy)((function(){return Object(f.l)((function(){return n.e(9).then(n.bind(null,141))}))})),I=Object(u.lazy)((function(){return Object(f.l)((function(){return Promise.all([n.e(0),n.e(32)]).then(n.bind(null,156))}))})),z=Object(u.lazy)((function(){return Object(f.l)((function(){return Promise.all([n.e(0),n.e(37)]).then(n.bind(null,157))}))})),H=Object(u.lazy)((function(){return Object(f.l)((function(){return Promise.all([n.e(0),n.e(2),n.e(6)]).then(n.bind(null,225))}))})),C=Object(u.lazy)((function(){return Object(f.l)((function(){return n.e(40).then(n.bind(null,158))}))})),E=Object(u.lazy)((function(){return Object(f.l)((function(){return Promise.all([n.e(1),n.e(3),n.e(29)]).then(n.bind(null,159))}))})),J=Object(u.lazy)((function(){return Object(f.l)((function(){return n.e(35).then(n.bind(null,276))}))})),M=Object(u.lazy)((function(){return Object(f.l)((function(){return n.e(8).then(n.bind(null,227))}))})),P=Object(u.lazy)((function(){return Object(f.l)((function(){return Promise.all([n.e(0),n.e(2),n.e(15)]).then(n.bind(null,286))}))})),R=Object(u.lazy)((function(){return Object(f.l)((function(){return Promise.all([n.e(0),n.e(30)]).then(n.bind(null,174))}))}));t.default=function(){var e,t,n=Object(u.useState)({stateCode:"TT",districtName:null}),s=Object(i.a)(n,2),l=s[0],o=s[1],d=Object(S.a)("anchor",null),j=Object(i.a)(d,2),b=j[0],h=j[1],V=Object(S.a)("expandTable",!1),A=Object(i.a)(V,2),F=A[0],L=A[1],B=Object(T.a)("mapStatistic","active"),U=Object(i.a)(B,2),W=U[0],_=U[1],q=Object(S.a)("mapView",a.r.DISTRICTS),G=Object(i.a)(q,2),K=G[0],Q=G[1],X=Object(u.useState)(""),Y=Object(i.a)(X,2),Z=Y[0],$=Y[1],ee=Object(y.h)(),te=O("".concat(a.e,"https://data.covid19india.org/v4/min/timeseries.min.json"),f.b,{revalidateOnMount:!0,refreshInterval:a.b}).data,ne=O("".concat(a.e,"https://data.covid19india.org/v4/min/data").concat(Z?"-".concat(Z):"",".min.json"),f.b,{revalidateOnMount:!0,refreshInterval:a.b}).data,ie=Object(u.useRef)(),re=Object(c.a)(ie),ae=Object(w.a)().width,ce=""!==Z&&Z<a.f,se=""===Z||Z>Object(p.a)(Object(g.a)(Object(f.k)(a.h),a.C),{representation:"date"}),le=0===Object(f.i)(null===ne||void 0===ne?void 0:ne.TT,"total","vaccinated"),oe=Object(u.useMemo)((function(){var e,t,n,i,r,a,c,s,l=[null===ne||void 0===ne||null===(e=ne.TT)||void 0===e||null===(t=e.meta)||void 0===t?void 0:t.date,null===ne||void 0===ne||null===(n=ne.TT)||void 0===n||null===(i=n.meta)||void 0===i||null===(r=i.tested)||void 0===r?void 0:r.date,null===ne||void 0===ne||null===(a=ne.TT)||void 0===a||null===(c=a.meta)||void 0===c||null===(s=c.vaccinated)||void 0===s?void 0:s.date].filter((function(e){return e}));return l.length>0?Object(p.a)(Object(m.a)(l.map((function(e){return Object(f.k)(e)}))),{representation:"date"}):null}),[ne]),ue=Object(u.useMemo)((function(){var e=Object.keys(ne||{}).map((function(e){var t,n;return null===ne||void 0===ne||null===(t=ne[e])||void 0===t||null===(n=t.meta)||void 0===n?void 0:n.last_updated})).filter((function(e){return e}));return e.length>0?Object(f.d)(Object(m.a)(e.map((function(e){return Object(f.k)(e)})))):null}),[ne]),de=Object(u.useMemo)((function(){return Object.entries(ne||{}).reduce((function(e,t){var n,r=Object(i.a)(t,2),c=r[0],s=r[1];return e[c]=!!((null===s||void 0===s?void 0:s.districts)&&(null===(n=s.districts)||void 0===n?void 0:n[a.H])&&a.u.every((function(e){return Object(f.i)(s,"total",e)===Object(f.i)(s.districts[a.H],"total",e)}))),e}),{})}),[ne]),je=(null===l||void 0===l?void 0:l.stateCode)&&(null===l||void 0===l?void 0:l.districtName)&&l.districtName!==a.H&&de[l.stateCode];return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(x.a,{children:[Object(D.jsx)("title",{children:"Coronavirus Outbreak in India - covid19-live-update-tracker.blogspot.com"}),Object(D.jsx)("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})]}),Object(D.jsxs)("div",{className:"Home",children:[Object(D.jsxs)("div",{className:v()("home-left",{expanded:F}),children:[Object(D.jsxs)("div",{className:"header",children:[Object(D.jsx)(u.Suspense,{fallback:Object(D.jsx)("div",{}),children:Object(D.jsx)(J,{})}),!ne&&!te&&Object(D.jsx)("div",{style:{height:"60rem"}}),Object(D.jsxs)(D.Fragment,{children:[!te&&Object(D.jsx)("div",{style:{minHeight:"61px"}}),te&&Object(D.jsx)(u.Suspense,{fallback:Object(D.jsx)("div",{style:{minHeight:"61px"}}),children:Object(D.jsx)(N,{date:Z,setDate:$,dates:Object.keys(null===(e=te.TT)||void 0===e?void 0:e.dates),lastUpdatedDate:ue})})]})]}),Object(D.jsxs)("div",{style:{position:"relative",marginTop:"1rem"},children:[ne&&Object(D.jsxs)(u.Suspense,{fallback:Object(D.jsx)("div",{style:{height:"50rem"}}),children:[ae>=769&&!F&&Object(D.jsx)(C,{mapStatistic:W,setMapStatistic:_}),Object(D.jsx)(I,{data:ne.TT})]}),Object(D.jsxs)(D.Fragment,{children:[!te&&Object(D.jsx)("div",{style:{height:"123px"}}),te&&Object(D.jsx)(u.Suspense,{fallback:Object(D.jsx)("div",{style:{height:"123px"}}),children:Object(D.jsx)(E,{timeseries:null===(t=te.TT)||void 0===t?void 0:t.dates,date:Z})})]})]}),!le&&Object(D.jsx)(z,{data:ne.TT}),ne&&Object(D.jsx)(u.Suspense,{fallback:Object(D.jsx)(r.a,{}),children:Object(D.jsx)(P,{data:ne,regionHighlighted:l,setRegionHighlighted:o,expandTable:F,setExpandTable:L,hideDistrictData:ce,hideDistrictTestData:se,hideVaccinated:le,lastDataDate:oe,noDistrictDataStates:de})})]}),Object(D.jsx)("div",{className:v()("home-right",{expanded:F}),ref:ie,style:{minHeight:"4rem"},children:(re||ee.hash)&&Object(D.jsxs)(D.Fragment,{children:[ne&&Object(D.jsx)("div",{className:v()("map-container",{expanded:F,stickied:"mapexplorer"===b||F&&ae>=769}),children:Object(D.jsxs)(u.Suspense,{fallback:Object(D.jsx)("div",{style:{height:"50rem"}}),children:[Object(D.jsx)(M,{data:ne.TT,stateCode:"TT"}),Object(D.jsx)(H,{stateCode:"TT",data:ne,mapStatistic:W,setMapStatistic:_,mapView:K,setMapView:Q,regionHighlighted:l,setRegionHighlighted:o,anchor:b,setAnchor:h,expandTable:F,lastDataDate:oe,hideDistrictData:ce,hideDistrictTestData:se,hideVaccinated:le,noRegionHighlightedDistrictData:je})]})}),te&&Object(D.jsx)(u.Suspense,{fallback:Object(D.jsx)("div",{style:{height:"50rem"}}),children:Object(D.jsx)(R,{stateCode:"TT",timeseries:te,date:Z,regionHighlighted:l,setRegionHighlighted:o,anchor:b,setAnchor:h,expandTable:F,hideVaccinated:le,noRegionHighlightedDistrictData:je})})]})})]}),re&&Object(D.jsx)(u.Suspense,{fallback:Object(D.jsx)("div",{}),children:Object(D.jsx)(k,{})})]})}},93:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var a=typeof i;if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i)){if(i.length){var c=r.apply(null,i);c&&e.push(c)}}else if("object"===a)if(i.toString===Object.prototype.toString)for(var s in i)n.call(i,s)&&i[s]&&e.push(s);else e.push(i.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()}}]);
//# sourceMappingURL=18.dc8a6d28.chunk.js.map
