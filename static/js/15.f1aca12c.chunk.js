(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[15],{100:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var i,r,c;if(Array.isArray(t)){if((i=t.length)!=n.length)return!1;for(r=i;0!==r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((i=(c=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=i;0!==r--;)if(!Object.prototype.hasOwnProperty.call(n,c[r]))return!1;for(r=i;0!==r--;){var s=c[r];if(!e(t[s],n[s]))return!1}return!0}return t!==t&&n!==n}},108:function(e,t,n){"use strict";var i=n(107),r=n(135),c=n(2),s=(n(125),n(126),n(20));t.a=function(e){var t=e.children,n=e.message,a=e.hold,o=void 0!==a&&a,l=e.childProps,d=void 0===l?{}:l,u=Object(c.useCallback)((function(e){return e.stopPropagation()}),[]);return Object(s.jsx)(r.a,{className:"Tooltip",content:"string"===typeof n?Object(s.jsx)("p",{className:"message",dangerouslySetInnerHTML:{__html:n.split("\n").map((function(e){return"<div>".concat(e,"</div>")})).join("")}}):n,arrow:!1,animation:"shift-away",touch:!o||["hold",300],children:Object(s.jsx)("div",Object(i.a)(Object(i.a)({onClick:u},d),{},{children:t}))})}},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return a}));var i=n(104),r=n(20),c=function(){return Object(r.jsxs)("div",{className:"Icons",children:[Object(r.jsx)(i.s,{size:16}),Object(r.jsx)("span",{children:"7D"})]})},s=function(){return Object(r.jsxs)("div",{className:"Icons",children:[Object(r.jsx)(i.q,{size:16}),Object(r.jsx)("span",{children:"1L"})]})},a=function(){return Object(r.jsx)("div",{className:"Icons",children:Object(r.jsx)(i.p,{size:16})})}},182:function(e,t,n){"use strict";var i=n(2),r=n(101),c=r.a?window:null,s=function(e){return!!e.addEventListener},a=function(e){return!!e.on},o=function(e,t,n,o){void 0===n&&(n=c),Object(i.useEffect)((function(){if(t&&n)return s(n)?Object(r.d)(n,e,t,o):a(n)&&n.on(e,t,o),function(){s(n)?Object(r.c)(n,e,t,o):a(n)&&n.off(e,t,o)}}),[e,t,n,JSON.stringify(o)])},l=function(e,t,n,c){void 0===t&&(t=r.b),void 0===n&&(n={}),void 0===c&&(c=[e]);var s=n.event,a=void 0===s?"keydown":s,l=n.target,d=n.options,u=Object(i.useMemo)((function(){var n,i="function"===typeof(n=e)?n:"string"===typeof n?function(e){return e.key===n}:n?function(){return!0}:function(){return!1};return function(e){if(i(e))return t(e)}}),c);o(a,u,l,d)},d=function(e){var t=Object(i.useState)([!1,null]),n=t[0],r=t[1];return l(e,(function(e){return r([!0,e])}),{event:"keydown"},[n]),l(e,(function(e){return r([!1,e])}),{event:"keyup"},[n]),n},u=n(152);t.a=function(e,t,n,i){void 0===i&&(i=d);var r=i(e),c=r[0],s=r[1];Object(u.a)((function(){!c&&n?n(s):c&&t&&t(s)}),[c])}},184:function(e,t,n){"use strict";var i=n(107),r=n(54),c=n(108),s=n(10),a=n(25),o=n(104),l=n(102),d=n.n(l),u=n(100),j=n.n(u),b=n(113),f=n(2),h=n(294),O=n(101),v=function(e){(function(e){return"touches"in e})(e)&&e.touches.length<2&&e.preventDefault&&e.preventDefault()},g=function(e,t){var n=void 0===t?{}:t,i=n.isPreventDefault,r=void 0===i||i,c=n.delay,s=void 0===c?300:c,a=Object(f.useRef)(),o=Object(f.useRef)(),l=Object(f.useCallback)((function(t){r&&t.target&&(Object(O.d)(t.target,"touchend",v,{passive:!1}),o.current=t.target),a.current=setTimeout((function(){return e(t)}),s)}),[e,s,r]),d=Object(f.useCallback)((function(){a.current&&clearTimeout(a.current),r&&o.current&&Object(O.c)(o.current,"touchend",v)}),[r]);return{onMouseDown:function(e){return l(e)},onTouchStart:function(e){return l(e)},onMouseUp:d,onMouseLeave:d,onTouchEnd:d}},p=n(20);function m(e){var t,n,l=e.handleSort,u=e.sortData,j=e.setSortData,O=e.statistic,v=Object(h.a)().t,m=Object(f.useRef)(!1),x=g((function(){u.sortColumn===O&&(m.current=!0,j(Object(b.a)(u,(function(e){e.delta=!u.delta}))))}),{isPreventDefault:!1}),y=Object(f.useCallback)((function(e){m.current?m.current=!1:l(e)}),[l]),w=s.y[O];return Object(p.jsxs)("div",Object(i.a)(Object(i.a)({className:d()("cell","heading"),onClick:y.bind(this,O)},x),{},{children:[u.sortColumn===O&&Object(p.jsx)("div",{className:d()("sort-icon",Object(r.a)({},"is-".concat(O),u.delta)),children:u.isAscending?Object(p.jsx)(o.x,{size:12}):Object(p.jsx)(o.y,{size:12})}),(null===w||void 0===w||null===(t=w.tableConfig)||void 0===t?void 0:t.notes)&&Object(p.jsx)(c.a,{message:v(w.tableConfig.notes),children:Object(p.jsx)(o.o,{size:14})}),Object(p.jsx)("div",{children:v(Object(a.m)((null===w||void 0===w||null===(n=w.tableConfig)||void 0===n?void 0:n.displayName)||w.displayName))})]}))}var x=function(e,t){return!!j()(e.sortData,t.sortData)};t.a=Object(f.memo)(m,x)},211:function(e,t,n){var i=n(212),r=["getDistricts"];e.exports=function(){var e=new Worker(n.p+"ece08537062c28a2a7c1.worker.js",{name:"[hash].worker.js"});return i(e,r),e}},212:function(e,t){e.exports=function(e,t){var n=0,i={};e.addEventListener("message",(function(t){var n=t.data;if("RPC"===n.type)if(n.id){var r=i[n.id];r&&(delete i[n.id],n.error?r[1](Object.assign(Error(n.error.message),n.error)):r[0](n.result))}else{var c=document.createEvent("Event");c.initEvent(n.method,!1,!1),c.data=n.params,e.dispatchEvent(c)}})),t.forEach((function(t){e[t]=function(){var r=arguments;return new Promise((function(c,s){var a=++n;i[a]=[c,s],e.postMessage({type:"RPC",id:a,method:t,params:[].slice.call(r)})}))}}))}},213:function(e,t,n){"use strict";var i=n(2),r=n.n(i),c=n(24),s=n.n(c);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(i.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,c=e.size,s=void 0===c?24:c,l=o(e,["color","size"]);return r.a.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("polyline",{points:"11 17 6 12 11 7"}),r.a.createElement("polyline",{points:"18 17 13 12 18 7"}))}));l.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},l.displayName="ChevronsLeft",t.a=l},214:function(e,t,n){"use strict";var i=n(2),r=n.n(i),c=n(24),s=n.n(c);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(i.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,c=e.size,s=void 0===c?24:c,l=o(e,["color","size"]);return r.a.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("polyline",{points:"15 18 9 12 15 6"}))}));l.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},l.displayName="ChevronLeft",t.a=l},215:function(e,t,n){"use strict";var i=n(2),r=n.n(i),c=n(24),s=n.n(c);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(i.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,c=e.size,s=void 0===c?24:c,l=o(e,["color","size"]);return r.a.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("polyline",{points:"9 18 15 12 9 6"}))}));l.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},l.displayName="ChevronRight",t.a=l},216:function(e,t,n){"use strict";var i=n(2),r=n.n(i),c=n(24),s=n.n(c);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(i.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,c=e.size,s=void 0===c?24:c,l=o(e,["color","size"]);return r.a.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("polyline",{points:"13 17 18 12 13 7"}),r.a.createElement("polyline",{points:"6 17 11 12 6 7"}))}));l.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},l.displayName="ChevronsRight",t.a=l},296:function(e,t,n){"use strict";n.r(t);var i=n(51),r=n(184),c=n(163),s=n(142),a=n(10),o=n(104),l=n(102),d=n.n(l),u=n(2),j=n(20),b=function(){var e=Object(u.useState)(0),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(u.useEffect)((function(){var e=window.setTimeout((function(){r((function(e){return e===a.z.length-1?0:e+1})),window.clearTimeout(e)}),1e3)}),[n]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:d()("is-".concat(a.z[n])),children:Object(j.jsx)(o.y,{size:14})}),Object(j.jsx)("p",{children:"Sorted by Delta [Long press]"})]})},f=n(108),h=n(139),O=n(25),v=n(100),g=n.n(v),p=n(113),m=n(213),x=n(214),y=n(215),w=n(216),k=n(294),N=n(52),C=n(106),D=n(204),T=n(124),S=n(182),z=n(211),E=n.n(z),P=Object(u.lazy)((function(){return Object(O.k)((function(){return n.e(44).then(n.bind(null,292))}))}));function L(e){var t=this,n=e.data,l=(e.date,e.regionHighlighted),v=e.setRegionHighlighted,g=e.expandTable,z=e.setExpandTable,L=e.hideDistrictData,R=e.hideDistrictTestData,A=e.hideVaccinated,H=e.lastDataDate,M=e.noDistrictDataStates,I=Object(k.a)().t,W=Object(D.a)("sortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),B=Object(i.a)(W,2),U=B[0],J=B[1],V=Object(u.useState)(0),q=Object(i.a)(V,2),F=q[0],_=q[1],G=Object(u.useState)(!1),K=Object(i.a)(G,2),Q=K[0],X=K[1],Y=Object(T.a)(),Z=Object(i.a)(Y,2),$=Z[0],ee=Z[1].width,te=Object(u.useCallback)((function(e){U.sortColumn!==e?J(Object(p.a)(U,(function(t){"regionName"!==U.sortColumn&&"regionName"!==e||(t.isAscending=!U.isAscending),t.sortColumn=e}))):J(Object(p.a)(U,(function(e){e.isAscending=!U.isAscending})))}),[U,J]),ne=Object(C.useTrail)(5,{from:{transform:"translate3d(0, 10px, 0)",opacity:0},to:{transform:"translate3d(0, 0px, 0)",opacity:1},config:C.config.wobbly}),ie=Object(u.useState)(),re=Object(i.a)(ie,2),ce=re[0],se=re[1],ae=Object(u.useState)("States"),oe=Object(i.a)(ae,2),le=oe[0],de=oe[1],ue=Object(u.useState)(!1),je=Object(i.a)(ue,2),be=je[0],fe=je[1],he=Object(u.useState)(!1),Oe=Object(i.a)(he,2),ve=Oe[0],ge=Oe[1],pe=Object(u.useCallback)((function(e,t,n){var i=a.y[t];return"total"==n&&(null===i||void 0===i?void 0:i.onlyDelta7)&&(n="delta7"),(null===i||void 0===i?void 0:i.showDelta)&&"total"===n&&Q&&(n="delta7"),Object(O.h)(e,n,t,{expiredDate:H,normalizedByPopulationPer:be?"lakh":null})}),[be,H,Q]),me=Object(u.useMemo)((function(){return be?Object.keys(ce||{}).filter((function(e){return Object(O.h)(ce[e],"total","population")>0})).reduce((function(e,t){return e[t]=ce[t],e}),{}):ce}),[be,ce]),xe=Math.ceil(Object.keys(me||{}).length/a.f),ye=Object(u.useCallback)((function(e,t){if("regionName"!==U.sortColumn){var i=a.y[U.sortColumn],r=U.delta&&(null===i||void 0===i?void 0:i.showDelta)?"delta":"total",c=pe((null===me||void 0===me?void 0:me[e])||n[e],U.sortColumn,r),s=pe((null===me||void 0===me?void 0:me[t])||n[t],U.sortColumn,r);return U.isAscending?c-s:s-c}var o,l,d=(null===me||void 0===me||null===(o=me[e])||void 0===o?void 0:o.districtName)||a.x[e],u=(null===me||void 0===me||null===(l=me[t])||void 0===l?void 0:l.districtName)||a.x[t];return U.isAscending?d.localeCompare(u):u.localeCompare(d)}),[me,pe,U.delta,U.isAscending,U.sortColumn,n]),we=Object(u.useCallback)((function(){de((function(e){return"States"===e?"Districts":"States"}))}),[]);Object(u.useEffect)((function(){var e=E()();e.getDistricts(n),e.addEventListener("message",(function(t){"RPC"!==t.data.type&&(se(t.data),e.terminate())}))}),[le,n]),Object(u.useEffect)((function(){_((function(e){return Math.max(0,Math.min(e,xe-1))}))}),[xe]);var ke=function(e){1===Math.abs(e)?_(Math.min(Math.max(0,F+e),xe-1)):e<0?_(0):e>0&&_(xe-1)},Ne=Object(C.useTransition)(ve,{from:h.h,enter:h.g,leave:h.h}),Ce=(g?a.A:a.z).filter((function(e){var t,n;return("States"===le||"tested"!==(null===(t=a.y[e])||void 0===t?void 0:t.category)||!R)&&("vaccinated"!==(null===(n=a.y[e])||void 0===n?void 0:n.category)||!A)})),De="Districts"===le&&!L;return Object(u.useEffect)((function(){De||_(0)}),[De]),Object(S.a)("?",(function(){ge(!ve)})),Object(j.jsxs)("div",{className:"Table",children:[Object(j.jsxs)("div",{className:"table-top",children:[Object(j.jsxs)("div",{className:"table-top-left",children:[Object(j.jsx)(f.a,{message:"Toggle between States/Districts",hold:!0,children:Object(j.jsx)(C.animated.div,{className:d()("toggle","option-toggle",{"is-highlighted":De,disabled:L}),onClick:we,style:ne[0],children:Object(j.jsx)(s.b,{})})}),Object(j.jsx)(f.a,{message:"Per lakh people",hold:!0,children:Object(j.jsx)(C.animated.div,{className:d()("toggle","lakh-toggle",{"is-highlighted":be}),onClick:fe.bind(this,!be),style:ne[1],children:Object(j.jsx)(s.c,{})})}),Object(j.jsx)(f.a,{message:"Last 7 Day values",hold:!0,children:Object(j.jsx)(C.animated.div,{className:d()("toggle","delta-toggle",{"is-highlighted":Q}),style:ne[2],onClick:X.bind(this,!Q),children:Object(j.jsx)(s.a,{})})}),Object(j.jsx)(C.animated.div,{className:d()("toggle","info-toggle",{"is-highlighted":ve}),onClick:ge.bind(this,!ve),style:ne[3],children:Object(j.jsx)(o.t,{size:14})})]}),Object(j.jsx)(f.a,{message:"".concat(g?"Collapse":"Expand"," table"),hold:!0,children:Object(j.jsx)(C.animated.div,{className:d()("toggle","expand-table-toggle",{"is-highlighted":g}),style:ne[4],onClick:z.bind(this,!g),children:Object(j.jsx)(o.j,{size:16})})})]}),Ne((function(e,t){return t&&Object(j.jsxs)(C.animated.div,{className:"table-helper",style:e,children:[Object(j.jsxs)("div",{className:"helper-top",children:[Object(j.jsxs)("div",{className:"helper-left",children:[Object(j.jsxs)("div",{className:"info-item",children:[Object(j.jsx)("div",{children:Object(j.jsx)(o.p,{size:14})}),Object(j.jsx)("p",{children:I("Toggle between States/Districts")})]}),Object(j.jsxs)("div",{className:"info-item",children:[Object(j.jsx)("div",{children:Object(j.jsx)(o.q,{size:16})}),Object(j.jsx)("p",{children:I("Per Lakh People")})]}),Object(j.jsxs)("div",{className:"info-item",children:[Object(j.jsx)("div",{children:Object(j.jsx)(o.s,{size:16})}),Object(j.jsx)("p",{children:I("Last 7 Day values")})]}),Object(j.jsxs)("div",{className:"info-item sort",children:[Object(j.jsx)("div",{children:Object(j.jsx)(o.y,{size:14})}),Object(j.jsx)("p",{children:I("Sorted by Descending")})]}),Object(j.jsxs)("div",{className:"info-item sort",children:[Object(j.jsx)("div",{children:Object(j.jsx)(o.x,{size:14})}),Object(j.jsx)("p",{children:I("Sorted by Ascending")})]}),Object(j.jsx)("div",{className:"info-item sort",children:Object(j.jsx)(b,{})}),Object(j.jsxs)("div",{className:"info-item notes",children:[Object(j.jsx)("div",{children:Object(j.jsx)(o.o,{size:15})}),Object(j.jsx)("p",{children:I("Notes")})]})]}),Object(j.jsxs)("div",{className:"helper-right",children:[Object(j.jsx)("div",{className:"info-item",children:Object(j.jsx)("p",{children:I("Units")})}),Object.entries({"1K":3,"1L":5,"1Cr":7}).map((function(e){var t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{className:"info-item abbr",children:[Object(j.jsx)("h5",{children:n}),Object(j.jsxs)("p",{children:["10",Object(j.jsx)("sup",{children:r})]})]},n)}))]})]}),Object(j.jsxs)("h5",{className:"text",children:[I("Compiled from State Government numbers"),","," ",Object(j.jsxs)(N.b,{to:"/about",children:[I(""),]})]})]})})),Object(j.jsx)("div",{className:"table-container",ref:$,children:Object(j.jsxs)("div",{className:"table fadeInUp",style:{gridTemplateColumns:"repeat(".concat(Ce.length+1,", auto)")},children:[Object(j.jsxs)("div",{className:"row heading",children:[Object(j.jsxs)("div",{className:"cell heading",onClick:te.bind(this,"regionName"),children:[Object(j.jsx)("div",{children:I(De?"District":"State/UT")}),"regionName"===U.sortColumn&&Object(j.jsx)("div",{className:"sort-icon",children:U.isAscending?Object(j.jsx)(o.x,{size:12}):Object(j.jsx)(o.y,{size:12})})]}),Ce.map((function(e){return Object(j.jsx)(r.a,{statistic:e,sortData:U,setSortData:J,handleSort:te.bind(t,e)},e)}))]}),!De&&Object.keys(n).filter((function(e){return"TT"!==e&&!(e===a.F&&be)})).sort((function(e,t){return ye(e,t)})).map((function(e){return Object(j.jsx)(P,{data:n[e],noDistrictData:M[e],stateCode:e,regionHighlighted:l,setRegionHighlighted:v,expandTable:g,tableStatistics:Ce,getTableStatistic:pe,tableWidth:ee},e)})),De&&!me&&Object(j.jsx)(c.a,{}),De&&me&&Object.keys(me).sort((function(e,t){return ye(e,t)})).slice(F*a.f,(F+1)*a.f).map((function(e){var t=M[me[e].stateCode];return Object(j.jsx)(P,{data:me[e],districtName:me[e].districtName,regionHighlighted:l,setRegionHighlighted:v,expandTable:g,tableStatistics:Ce,getTableStatistic:pe,noDistrictData:t},e)})),Object(j.jsx)(P,{data:n.TT,stateCode:"TT",regionHighlighted:l,setRegionHighlighted:v,expandTable:g,tableStatistics:Ce,getTableStatistic:pe},"TT")]})}),De&&Object(j.jsxs)("div",{className:"paginate",children:[Object(j.jsx)("div",{className:d()("left",{disabled:0===F}),onClick:ke.bind(this,-2),children:Object(j.jsx)(m.a,{size:16})}),Object(j.jsx)("div",{className:d()("left",{disabled:0===F}),onClick:ke.bind(this,-1),children:Object(j.jsx)(x.a,{size:16})}),Object(j.jsx)("h5",{children:"".concat(F+1," / ").concat(xe)}),Object(j.jsx)("div",{className:d()("right",{disabled:F===xe-1}),onClick:ke.bind(this,1),children:Object(j.jsx)(y.a,{size:16})}),Object(j.jsx)("div",{className:d()("right",{disabled:F===xe-1}),onClick:ke.bind(this,2),children:Object(j.jsx)(w.a,{size:16})})]})]})}var R=function(e,t){var n,i,r,c;return!!g()(null===(n=e.regionHighlighted)||void 0===n?void 0:n.districtName,null===(i=t.regionHighlighted)||void 0===i?void 0:i.districtName)&&(!!g()(null===(r=e.regionHighlighted)||void 0===r?void 0:r.stateCode,null===(c=t.regionHighlighted)||void 0===c?void 0:c.stateCode)&&(!!g()(e.date,t.date)&&(!!g()(e.hideDistrictData,t.hideDistrictData)&&(!!g()(e.hideDistrictTestData,t.hideDistrictTestData)&&(!!g()(e.hideVaccinated,t.hideVaccinated)&&(!!g()(e.expandTable,t.expandTable)&&(!!g()(e.lastDataDate,t.lastDataDate)&&(!!g()(e.data.TT.total.confirmed,t.data.TT.total.confirmed)&&!!g()(e.noDistrictDataStates,t.noDistrictDataStates)))))))))};t.default=Object(u.memo)(L,R)}}]);
//# sourceMappingURL=15.f1aca12c.chunk.js.map
