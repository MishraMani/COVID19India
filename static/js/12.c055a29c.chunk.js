(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[12],{122:function(e,t,n){"use strict";var a=n(1),r=n(93),i=function(){};t.a=function(e,t,n){if(!r.a)return[t,i,i];if(!e)throw new Error("useLocalStorage key may not be falsy");var c=n?n.raw?function(e){return e}:n.deserializer:JSON.parse,l=Object(a.useState)((function(){try{var a=n?n.raw?String:n.serializer:JSON.stringify,r=localStorage.getItem(e);return null!==r?c(r):(t&&localStorage.setItem(e,a(t)),t)}catch(l){return t}})),o=l[0],s=l[1],u=Object(a.useCallback)((function(t){try{var a="function"===typeof t?t(o):t;if("undefined"===typeof a)return;var r=void 0;r=n?n.raw?"string"===typeof a?a:JSON.stringify(a):n.serializer?n.serializer(a):JSON.stringify(a):JSON.stringify(a),localStorage.setItem(e,r),s(c(r))}catch(l){}}),[e,s]),d=Object(a.useCallback)((function(){try{localStorage.removeItem(e),s(void 0)}catch(l){}}),[e,s]);return[o,u,d]}},150:function(e,t,n){"use strict";var a=n(42),r=n(34),i=n(96),c=n(87),l=n.n(c),o=n(90),s=n.n(o),u=n(97),d=n(1),m=n.n(d),f=n(262),g=function(e){(function(e){return"touches"in e})(e)&&e.touches.length<2&&e.preventDefault&&e.preventDefault()},v=function(e,t){var n=void 0===t?{}:t,a=n.isPreventDefault,r=void 0===a||a,i=n.delay,c=void 0===i?300:i,l=Object(d.useRef)(),o=Object(d.useRef)(),s=Object(d.useCallback)((function(t){r&&t.target&&(t.target.addEventListener("touchend",g,{passive:!1}),o.current=t.target),l.current=setTimeout((function(){return e(t)}),c)}),[e,c]),u=Object(d.useCallback)((function(){l.current&&clearTimeout(l.current),r&&o.current&&o.current.removeEventListener("touchend",g)}),[]);return{onMouseDown:function(e){return s(e)},onTouchStart:function(e){return s(e)},onMouseUp:u,onMouseLeave:u,onTouchEnd:u}},b=function(e){return void 0===e&&(e={laptopL:1440,laptop:1024,tablet:768}),function(){var t=Object(d.useState)(0),n=t[0],a=t[1];Object(d.useEffect)((function(){var e=function(){a(window.innerWidth)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}));var r=Object(d.useMemo)((function(){return Object.entries(e).sort((function(e,t){return e[1]>=t[1]?1:-1}))}),[e]);return r.reduce((function(e,t){var a=t[0],r=t[1];return n>=r?a:e}),r[0][0])}}({S:768});t.a=m.a.memo((function(e){var t=e.handleSort,n=e.sortData,c=e.setSortData,o=e.statistic,s=b(),d=Object(f.a)().t,g=v((function(){c(Object(u.a)(n,(function(e){e.delta=!n.delta})))}),{isPreventDefault:!1});return m.a.createElement("div",Object.assign({className:"cell heading",onClick:t.bind(this,o)},g),n.sortColumn===o&&m.a.createElement("div",{className:l()("sort-icon",Object(a.a)({invert:n.isAscending},"is-".concat(o),n.delta))},m.a.createElement(i.d,{size:10})),m.a.createElement("div",{title:Object(r.a)(o)},"S"===s?Object(r.a)(o.slice(0,1)):d(Object(r.a)(o))))}),(function(e,t){return!!s()(e.sortData,t.sortData)}))},178:function(e,t,n){"use strict";var a=n(1),r=n.n(a),i=n(21),c=n.n(i);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,s=o(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="Info",t.a=s},179:function(e,t,n){var a=n(180),r=["getDistricts"];e.exports=function(){var e=new Worker(n.p+"b739c6d302c230a146f7.worker.js",{name:"[hash].worker.js"});return a(e,r),e}},180:function(e,t){e.exports=function(e,t){var n=0,a={};e.addEventListener("message",(function(t){var n=t.data;if("RPC"===n.type)if(n.id){var r=a[n.id];r&&(delete a[n.id],n.error?r[1](Object.assign(Error(n.error.message),n.error)):r[0](n.result))}else{var i=document.createEvent("Event");i.initEvent(n.method,!1,!1),i.data=n.params,e.dispatchEvent(i)}})),t.forEach((function(t){e[t]=function(){var r=arguments;return new Promise((function(i,c){var l=++n;a[l]=[i,c],e.postMessage({type:"RPC",id:l,method:t,params:[].slice.call(r)})}))}}))}},257:function(e,t,n){"use strict";n.r(t);var a=n(86),r=n(150),i=n(1),c=n.n(i),l=n(98),o=function(){var e=window.innerWidth,t=e>769?448:e;return c.a.createElement("div",{className:"TableLoader"},c.a.createElement(l.a,{viewBox:"0 0 ".concat(t," ").concat(135),height:135,width:t,speed:2,animate:!1},c.a.createElement("rect",{x:"0",y:"0",rx:"3",ry:"3",width:t,height:"40"}),c.a.createElement("rect",{x:"0",y:"45",rx:"3",ry:"3",width:t,height:"40"}),c.a.createElement("rect",{x:"0",y:"90",rx:"3",ry:"3",width:t,height:"40"})))},s=n(27),u=n(96),d=n(87),m=n.n(d),f=function(){var e=Object(i.useState)(0),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){var e=window.setTimeout((function(){r((function(e){return e===s.p.length-1?0:e+1})),window.clearTimeout(e)}),1e3)}),[n]),c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:m()("is-".concat(s.p[n]))},c.a.createElement(u.d,{size:14})),c.a.createElement("h9",null,"Sort by Delta [long press]"))},g=n(104),v=n(34),b=n(90),h=n.n(b),p=n(97),E=n(178),O=n(262),y=n(41),j=n(89),w=n(122),N=n(179),C=n.n(N),k=Object(i.lazy)((function(){return Promise.all([n.e(13),n.e(27)]).then(n.bind(null,258))}));t.default=c.a.memo((function(e){var t=this,n=e.data,l=e.regionHighlighted,d=e.setRegionHighlighted,b=Object(O.a)().t,h=Object(w.a)("sortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),N=Object(a.a)(h,2),S=N[0],x=N[1],T=Object(i.useCallback)((function(e){S.sortColumn!==e?x(Object(p.a)(S,(function(t){t.sortColumn=e}))):x(Object(p.a)(S,(function(e){e.isAscending=!S.isAscending})))}),[S,x]),D=Object(j.e)(3,{from:{transform:"translate3d(0, 10px, 0)",opacity:0},to:{transform:"translate3d(0, 0px, 0)",opacity:1},config:j.b.wobbly}),P=Object(i.useState)(),z=Object(a.a)(P,2),R=z[0],H=z[1],L=Object(i.useState)("States"),A=Object(a.a)(L,2),M=A[0],I=A[1],J=Object(i.useState)(!1),U=Object(a.a)(J,2),W=U[0],B=U[1],q=Object(i.useState)(!1),F=Object(a.a)(q,2),G=F[0],K=F[1],X=Object(i.useCallback)((function(e,t){if("regionName"!==S.sortColumn){var a=Object(v.j)((null===R||void 0===R?void 0:R[e])||n[e],S.delta?"delta":"total",S.sortColumn,W),r=Object(v.j)((null===R||void 0===R?void 0:R[t])||n[t],S.delta?"delta":"total",S.sortColumn,W);return S.isAscending?a-r:r-a}return S.isAscending?e.localeCompare(t):t.localeCompare(e)}),[R,W,S.delta,S.isAscending,S.sortColumn,n]),Q=Object(i.useCallback)((function(){I((function(e){return"States"===e?"Districts":"States"}))}),[]);Object(i.useEffect)((function(){var e=C()();e.getDistricts(n),e.addEventListener("message",(function(t){"RPC"!==t.data.type&&(H(t.data),e.terminate())}))}),[M,n]);var V=Object(j.f)(G,null,{from:g.h,enter:g.g,leave:g.h});return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"table-top"},c.a.createElement(j.a.div,{className:m()("option-toggle",{"is-highlighted":"Districts"===M}),onClick:Q,style:D[0]},c.a.createElement(u.i,{size:14})),c.a.createElement(j.a.div,{className:m()("million-toggle",{"is-highlighted":W}),onClick:B.bind(this,!W),style:D[0]},c.a.createElement("h9",null,"1M")),c.a.createElement(j.a.div,{className:m()("info-toggle",{"is-highlighted":G}),onClick:K.bind(this,!G),style:D[0]},c.a.createElement(u.k,{size:14})),c.a.createElement(j.a.div,{className:"scroll-right-helper",style:D[1]},c.a.createElement("h9",null,"Scroll Right \u279C"))),V.map((function(e){var t=e.item,n=e.key,a=e.props;return t?c.a.createElement(j.a.div,{key:n,className:"table-helper",style:a},c.a.createElement("div",{className:"helper-top"},c.a.createElement("div",{className:"helper-left"},c.a.createElement("div",{className:"info-item notes"},c.a.createElement(E.a,{size:15}),c.a.createElement("h9",null,"Extra notes")),c.a.createElement("div",{className:"info-item"},c.a.createElement("h5",null,"1M"),c.a.createElement("h9",null,"Per Million of Population")),c.a.createElement("div",{className:"info-item sort"},c.a.createElement(u.d,{size:14}),c.a.createElement("h9",null,"Sort by Descending")),c.a.createElement("div",{className:"info-item sort invert"},c.a.createElement(u.d,{size:14}),c.a.createElement("h9",null,"Sort by Ascending")),c.a.createElement("div",{className:"info-item sort"},c.a.createElement(f,null))),c.a.createElement("div",{className:"helper-right"},c.a.createElement("div",{className:"info-item"},c.a.createElement("h5",null,"C"),c.a.createElement("h9",null,"Confirmed")),c.a.createElement("div",{className:"info-item notes"},c.a.createElement("h5",null,"A"),c.a.createElement("h9",null,"Active")),c.a.createElement("div",{className:"info-item"},c.a.createElement("h5",null,"R"),c.a.createElement("h9",null,"Recovered")),c.a.createElement("div",{className:"info-item notes"},c.a.createElement("h5",null,"D"),c.a.createElement("h9",null,"Deceased")),c.a.createElement("div",{className:"info-item notes"},c.a.createElement("h5",null,"T"),c.a.createElement("h9",null,"Tested")))),c.a.createElement("h5",{className:"text"},b("Compiled from State Govt. numbers"),","," ",c.a.createElement(y.b,{to:"/about"}))):null})),c.a.createElement("div",{className:"table fadeInUp"},c.a.createElement("div",{className:"table-wrapper"},c.a.createElement("div",{className:"row heading"},c.a.createElement("div",{className:"cell heading",onClick:T.bind(this,"regionName")},c.a.createElement("div",null,b("States"===M?"State/UT":"District")),"regionName"===S.sortColumn&&c.a.createElement("div",{className:m()("sort-icon",{invert:!S.isAscending})},c.a.createElement(u.d,{size:10}))),s.p.map((function(e){return c.a.createElement(r.a,Object.assign({key:e},{statistic:e,sortData:S,setSortData:x},{handleSort:T.bind(t,e)}))}))),"States"===M&&Object.keys(n).filter((function(e){var t;return"TT"!==e&&(null===(t=n[e].total)||void 0===t?void 0:t.confirmed)&&!("UN"===e&&W)})).sort((function(e,t){return X(e,t)})).map((function(e){return c.a.createElement(k,Object.assign({key:e,data:n[e]},{stateCode:e,isPerMillion:W,regionHighlighted:l,setRegionHighlighted:d}))})),"Districts"===M&&!R&&c.a.createElement(o,null),"Districts"===M&&R&&Object.keys(R).sort((function(e,t){return X(e,t)})).slice(0,s.c).map((function(e){return c.a.createElement(k,Object.assign({key:e,data:R[e],districtName:R[e].districtName},{isPerMillion:W,regionHighlighted:l,setRegionHighlighted:d}))})),c.a.createElement(k,Object.assign({key:"TT",data:n.TT,stateCode:"TT"},{regionHighlighted:l,setRegionHighlighted:d})))))}),(function(e,t){var n,a,r,i;return!!h()(null===(n=e.regionHighlighted)||void 0===n?void 0:n.districtName,null===(a=t.regionHighlighted)||void 0===a?void 0:a.districtName)&&(!!h()(null===(r=e.regionHighlighted)||void 0===r?void 0:r.stateCode,null===(i=t.regionHighlighted)||void 0===i?void 0:i.stateCode)&&!!h()(e.data.TT.total.confirmed,t.data.TT.total.confirmed))}))},98:function(e,t,n){"use strict";var a=n(1),r=function(){return(r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,n=e.backgroundColor,i=e.backgroundOpacity,c=e.baseUrl,l=e.children,o=e.foregroundColor,s=e.foregroundOpacity,u=e.gradientRatio,d=e.uniqueKey,m=e.interval,f=e.rtl,g=e.speed,v=e.style,b=e.title,h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),p=d||Math.random().toString(36).substring(6),E=p+"-diff",O=p+"-animated-diff",y=p+"-aria",j=f?{transform:"scaleX(-1)"}:null,w="0; "+m+"; 1",N=g+"s";return Object(a.createElement)("svg",r({"aria-labelledby":y,role:"img",style:r(r({},v),j)},h),b?Object(a.createElement)("title",{id:y},b):null,Object(a.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+E+")",style:{fill:"url("+c+"#"+O+")"}}),Object(a.createElement)("defs",{role:"presentation"},Object(a.createElement)("clipPath",{id:E},l),Object(a.createElement)("linearGradient",{id:O},Object(a.createElement)("stop",{offset:"0%",stopColor:n,stopOpacity:i},t&&Object(a.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:w,dur:N,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:s},t&&Object(a.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:w,dur:N,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"100%",stopColor:n,stopOpacity:i},t&&Object(a.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:w,dur:N,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(a.createElement)(i,r({},e)):Object(a.createElement)(l,r({},e))},l=function(e){return Object(a.createElement)(c,r({viewBox:"0 0 476 124"},e),Object(a.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(a.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=c}}]);
//# sourceMappingURL=12.c055a29c.chunk.js.map
