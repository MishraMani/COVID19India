(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[4],{177:function(e,t,n){!function(e,t){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var i="Left",r="Right",c="Up",a="Down",o={delta:10,preventDefaultTouchmoveEvent:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0},l={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},s="mousemove",u="mouseup",d="touchend",h="touchmove",p="touchstart";function f(e,t,n,o){return e>t?n>0?r:i:o>0?a:c}function b(e,t){if(0===t)return e;var n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function j(e,t){var i=function(t){t&&"touches"in t&&t.touches.length>1||e((function(e,i){i.trackMouse&&(document.addEventListener(s,r),document.addEventListener(u,o));var c="touches"in t?t.touches[0]:t,a=b([c.clientX,c.clientY],i.rotationAngle);return n({},e,l,{initial:[].concat(a),xy:a,start:t.timeStamp||0})}))},r=function(t){e((function(e,i){if("touches"in t&&t.touches.length>1)return e;var r="touches"in t?t.touches[0]:t,c=b([r.clientX,r.clientY],i.rotationAngle),a=c[0],o=c[1],l=a-e.xy[0],s=o-e.xy[1],u=Math.abs(l),d=Math.abs(s),h=(t.timeStamp||0)-e.start,p=Math.sqrt(u*u+d*d)/(h||1),j=[l/(h||1),s/(h||1)];if(u<i.delta&&d<i.delta&&!e.swiping)return e;var O=f(u,d,l,s),v={absX:u,absY:d,deltaX:l,deltaY:s,dir:O,event:t,first:e.first,initial:e.initial,velocity:p,vxvy:j};i.onSwiping&&i.onSwiping(v);var m=!1;return(i.onSwiping||i.onSwiped||"onSwiped"+O in i)&&(m=!0),m&&i.preventDefaultTouchmoveEvent&&i.trackTouch&&t.cancelable&&t.preventDefault(),n({},e,{first:!1,eventData:v,swiping:!0})}))},c=function(t){e((function(e,i){var r;if(e.swiping&&e.eventData){r=n({},e.eventData,{event:t}),i.onSwiped&&i.onSwiped(r);var c="onSwiped"+r.dir;c in i&&i[c](r)}else i.onTap&&i.onTap({event:t});return n({},e,l,{eventData:r})}))},a=function(){document.removeEventListener(s,r),document.removeEventListener(u,o)},o=function(e){a(),c(e)},j=function(e,t){var n=function(){};if(e&&e.addEventListener){var a=[[p,i],[h,r],[d,c]];a.forEach((function(n){var i=n[0],r=n[1];return e.addEventListener(i,r,{passive:t})})),n=function(){return a.forEach((function(t){var n=t[0],i=t[1];return e.removeEventListener(n,i)}))}}return n},O={ref:function(t){null!==t&&e((function(e,i){if(e.el===t)return e;var r={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),r.cleanUpTouch=void 0),i.trackTouch&&t&&(r.cleanUpTouch=j(t,!i.preventDefaultTouchmoveEvent)),n({},e,{el:t},r)}))}};return t.trackMouse&&(O.onMouseDown=i),[O,j]}function O(e,t,i){var r={};return!t.trackTouch&&e.cleanUpTouch?(e.cleanUpTouch(),r.cleanUpTouch=void 0):t.trackTouch&&!e.cleanUpTouch&&e.el&&(r.cleanUpTouch=i(e.el,!t.preventDefaultTouchmoveEvent)),n({},e,r)}function v(e){var i=e.trackMouse,r=t.useRef(n({},l)),c=t.useRef(n({},o));c.current=n({},o,e);var a=t.useMemo((function(){return j((function(e){return r.current=e(r.current,c.current)}),{trackMouse:i})}),[i]),s=a[0],u=a[1];return r.current=O(r.current,c.current,u),s}e.DOWN=a,e.LEFT=i,e.RIGHT=r,e.UP=c,e.useSwipeable=v}(t,n(1))},273:function(e,t,n){"use strict";n.r(t);var i=n(20),r=n(33),c=n(25),a=n(82),o=n(6),l=n(97),s=function(e){var t=e.width,n=e.statistic,r=window.innerWidth;t||(t=r>769?480:r);var c=(r>769?.9:1)*t/.885,a=42+o.h+c;return Object(i.jsxs)(l.a,{viewBox:"0 0 ".concat(t," ").concat(a),height:a,width:t,speed:2,backgroundColor:o.u[n].color,children:[Object(i.jsx)("circle",{cx:.4*t,cy:a/2,r:"5"}),Object(i.jsx)("circle",{cx:.5*t,cy:a/2,r:"5"}),Object(i.jsx)("circle",{cx:.6*t,cy:a/2,r:"5"})]})},u=n(32),d=n(91),h=n(84),p=n.n(h),f=n(83),b=n.n(f),j=n(94),O=n(1),v=n(271),m=n(5),g=n(90),y=n(177),x=n(262),C=Object(O.lazy)((function(){return Promise.all([n.e(1),n.e(15),n.e(31)]).then(n.bind(null,275))}));function T(e){var t,n=this,l=e.stateCode,h=void 0===l?"TT":l,f=e.data,b=e.mapStatistic,T=e.setMapStatistic,w=e.regionHighlighted,E=e.setRegionHighlighted,k=e.anchor,S=(e.setAnchor,e.expandTable),N=Object(v.a)().t,U=Object(O.useRef)(),M=Object(x.a)().width,R=Object(O.useState)(o.k.DISTRICTS),L=Object(a.a)(R,2),B=L[0],I=L[1],D=Object(O.useState)(o.i[h].mapType===o.j.COUNTRY?o.l.BUBBLES:o.l.CHOROPLETH),H=Object(a.a)(D,2),P=H[0],A=H[1],Y=o.i[h],X=Y.mapType===o.j.COUNTRY?f:Object(c.a)({},h,f[h]),q=Object(O.useMemo)((function(){var e,t,n=(w.districtName?null===(e=f[w.stateCode])||void 0===e||null===(t=e.districts)||void 0===t?void 0:t[w.districtName]:f[w.stateCode])||{};return Object(j.a)(n,(function(e){e.name=w.districtName||o.t[w.stateCode]}))}),[f,w.stateCode,w.districtName]),W=Object(O.useCallback)((function(e){switch(e){case o.l.CHOROPLETH:A(o.l.CHOROPLETH);break;case o.l.BUBBLES:A(o.l.BUBBLES)}}),[A]),V=Object(O.useCallback)((function(){var e=B===o.k.DISTRICTS?o.k.STATES:o.k.DISTRICTS;e===o.k.STATES&&E({stateCode:w.stateCode,districtName:null}),I(e)}),[B,E,w.stateCode]),z=Object(O.useMemo)((function(){return Object(i.jsx)("svg",{width:"314",height:"314",viewBox:"0 0 314 314",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M78.2861 145.778C80.6671 155.387 84.6108 164.28 92.421 170.488C94.5409 174.766 93.7381 180.115 96.2412 184.535C99.7619 190.751 102.898 195.156 110.758 195.156C119.259 195.156 127.582 192.241 132.576 184.963C136.539 179.187 143.562 174.194 150.658 178.968C156.039 182.587 157.864 191.253 161.949 196.312C168.044 203.859 175.962 212.131 184.107 217.339C190.795 221.615 199.602 221.297 207.368 220.551C214.111 219.903 220.088 212.137 223.71 207.189C227.102 202.555 230.602 198.075 233.006 192.843C238.463 180.961 236.721 162.008 225.62 153.958C213.23 144.974 196.881 145.725 183.343 139.654C175.796 136.27 175.843 122.587 174.174 115.758C172.492 108.876 170.655 99.867 164.581 95.3733C155.36 88.5509 146.436 93.7458 137.075 96.444C133.325 97.525 131.816 100.817 129.095 103.424L129.093 103.426C126.105 106.29 121.531 110.674 117.974 112.632C113.709 114.979 111.262 119.456 105.834 119.612C104.487 119.651 98.6801 120.375 97.7693 119.227C94.2704 114.814 92.1979 113.445 86.6906 113.445C83.0636 113.445 77.14 118.241 77.14 122.31C77.14 130.086 76.4094 138.205 78.2861 145.778Z",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"})})}),[]),F=Object(O.useMemo)((function(){return Object(i.jsxs)("svg",{width:"22",height:"27",viewBox:"-1 -5 22 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(i.jsx)("circle",{cx:"5.5",cy:"5.5",r:"5.5",fillOpacity:"0.4"}),Object(i.jsx)("circle",{cx:"5.5",cy:"5.5",r:"5",strokeOpacity:"0.5"}),Object(i.jsx)("circle",{cx:"6.5",cy:"11.5",r:"3.5",fillOpacity:"0.4"}),Object(i.jsx)("circle",{cx:"6.5",cy:"11.5",r:"3",strokeOpacity:"0.5"}),Object(i.jsx)("circle",{cx:"13.5",cy:"9.5",r:"6.5",fillOpacity:"0.4"}),Object(i.jsx)("circle",{cx:"13.5",cy:"9.5",r:"6",strokeOpacity:"0.5"})]})}),[]),G=Object(m.g)(),J=Object(O.useRef)();Object(O.useEffect)((function(){"#MapExplorer"===G.location.hash&&J.current.scrollIntoView()}),[G]);var K=Object(O.useMemo)((function(){var e=[];return[0,0,0,0,0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),_=Object(g.c)({total:Object(u.h)(q,"total",b),config:Object(r.a)({tension:250},o.q)}),Z=Object(y.useSwipeable)({onSwipedRight:function(){var e=o.p.indexOf(b),t=e>0?e-1:o.p.length-1;T(o.p[t])},onSwipedLeft:function(){var e=o.p.indexOf(b),t=e<o.p.length-1?e+1:0;T(o.p[t])}}),Q=o.u[b];return Object(i.jsxs)("div",{className:p()("MapExplorer",{stickied:"mapexplorer"===k},{hidden:k&&(!S||M<769)&&"mapexplorer"!==k}),children:[Object(i.jsxs)("div",{className:"panel",ref:J,children:[Object(i.jsxs)("div",{className:"panel-left fadeInUp",style:K[0],children:[Object(i.jsxs)("h2",{className:p()(b),children:[N(q.name),q.name===o.D&&" [".concat(N(o.t[w.stateCode]),"]")]}),w.stateCode&&Object(i.jsxs)("h1",{className:p()("district",b),children:[Object(i.jsx)(g.a.div,{children:_.total.interpolate((function(e){return Object(u.e)(e,"short"!==Q.format?Q.format:"int",b)}))}),Object(i.jsx)("span",{children:N(Object(u.a)(Q.displayName))})]})]}),Object(i.jsxs)("div",{className:p()("panel-right","is-".concat(b)),children:[Object(i.jsxs)("div",{className:"switch-type",children:[Object(i.jsx)("div",{className:p()("choropleth fadeInUp",{"is-highlighted":P===o.l.CHOROPLETH}),onClick:W.bind(this,o.l.CHOROPLETH),style:K[1],children:z}),Object(i.jsx)("div",{className:p()("bubble fadeInUp",{"is-highlighted":P===o.l.BUBBLES}),onClick:W.bind(this,o.l.BUBBLES),style:K[2],children:F}),Y.mapType===o.j.COUNTRY&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"divider"}),Object(i.jsx)("div",{className:p()("boundary fadeInUp",{"is-highlighted":B===o.k.DISTRICTS}),onClick:V.bind(this),style:K[3],children:Object(i.jsx)(d.k,{})})]}),Y.mapType===o.j.STATE&&Object(i.jsx)("div",{className:"back fadeInUp",onClick:function(){G.push("/#MapExplorer")},style:K[4],children:Object(i.jsx)(d.b,{})})]}),(S||M<769)&&Object(i.jsx)("div",{className:"switch-statistic fadeInUp",style:K[5],children:o.p.map((function(e){return Object(i.jsx)("div",{className:p()("statistic-option","is-".concat(e),{"is-highlighted":b===e}),onClick:T.bind(n,e),children:Object(i.jsx)(d.d,{})},e)}))})]})]}),Object(i.jsx)("div",Object(r.a)(Object(r.a)({ref:U,className:"fadeInUp",style:K[3]},Z),{},{children:b&&Object(i.jsx)(O.Suspense,{fallback:Object(i.jsx)(s,Object(r.a)({className:"map-loader"},{width:null===(t=U.current)||void 0===t?void 0:t.clientWidth,statistic:b})),children:Object(i.jsx)(C,Object(r.a)(Object(r.a)(Object(r.a)({},{mapCode:h,mapView:B,mapViz:P}),{},{data:X},{regionHighlighted:w,setRegionHighlighted:E}),{},{statistic:b}))})}))]})}var w=function(e,t){var n,i,r,c,a,o,l,s,u,d;return!!b()(e.stateCode,t.stateCode)&&(!!b()(e.regionHighlighted,t.regionHighlighted)&&(!!b()(e.mapStatistic,t.mapStatistic)&&(!!b()(e.anchor,t.anchor)&&(!!b()(e.expandTable,t.expandTable)&&(!!b()(null===(n=e.data)||void 0===n||null===(i=n.TT)||void 0===i||null===(r=i.meta)||void 0===r?void 0:r.last_updated,null===(c=t.data)||void 0===c||null===(a=c.TT)||void 0===a||null===(o=a.meta)||void 0===o?void 0:o.last_updated)&&!!b()(null===(l=e.data)||void 0===l||null===(s=l.TT)||void 0===s?void 0:s.total,null===(u=t.data)||void 0===u||null===(d=u.TT)||void 0===d?void 0:d.total))))))};t.default=Object(O.memo)(T,w)},83:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var i,r,c;if(Array.isArray(t)){if((i=t.length)!=n.length)return!1;for(r=i;0!==r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((i=(c=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=i;0!==r--;)if(!Object.prototype.hasOwnProperty.call(n,c[r]))return!1;for(r=i;0!==r--;){var a=c[r];if(!e(t[a],n[a]))return!1}return!0}return t!==t&&n!==n}},97:function(e,t,n){"use strict";var i=n(1),r=function(){return(r=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var c=function(e){var t=e.animate,n=e.backgroundColor,c=e.backgroundOpacity,a=e.baseUrl,o=e.children,l=e.foregroundColor,s=e.foregroundOpacity,u=e.gradientRatio,d=e.uniqueKey,h=e.interval,p=e.rtl,f=e.speed,b=e.style,j=e.title,O=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),v=d||Math.random().toString(36).substring(6),m=v+"-diff",g=v+"-animated-diff",y=v+"-aria",x=p?{transform:"scaleX(-1)"}:null,C="0; "+h+"; 1",T=f+"s";return Object(i.createElement)("svg",r({"aria-labelledby":y,role:"img",style:r(r({},b),x)},O),j?Object(i.createElement)("title",{id:y},j):null,Object(i.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+a+"#"+m+")",style:{fill:"url("+a+"#"+g+")"}}),Object(i.createElement)("defs",{role:"presentation"},Object(i.createElement)("clipPath",{id:m},o),Object(i.createElement)("linearGradient",{id:g},Object(i.createElement)("stop",{offset:"0%",stopColor:n,stopOpacity:c},t&&Object(i.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:C,dur:T,repeatCount:"indefinite"})),Object(i.createElement)("stop",{offset:"50%",stopColor:l,stopOpacity:s},t&&Object(i.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:C,dur:T,repeatCount:"indefinite"})),Object(i.createElement)("stop",{offset:"100%",stopColor:n,stopOpacity:c},t&&Object(i.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:C,dur:T,repeatCount:"indefinite"})))))};c.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var a=function(e){return e.children?Object(i.createElement)(c,r({},e)):Object(i.createElement)(o,r({},e))},o=function(e){return Object(i.createElement)(a,r({viewBox:"0 0 476 124"},e),Object(i.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(i.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(i.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(i.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(i.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(i.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=a}}]);
//# sourceMappingURL=4.a0dcf844.chunk.js.map
