(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[11,28,33],{105:function(t,e,n){"use strict";var a=n(86),r=n(1),c={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};e.a=function(t){var e=Object(r.useState)(!1),n=Object(a.a)(e,2),i=n[0],o=n[1];return Object(r.useEffect)((function(){void 0!==t.current&&new IntersectionObserver((function(e,n){e.forEach((function(e){e.isIntersecting&&window.requestIdleCallback((function(){o(!0),n.unobserve(t.current)}))}))}),c).observe(t.current)}),[t]),i}},110:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f}));var a=Array.prototype.slice,r=function(t){return t};function c(t){return"translate("+(t+.5)+",0)"}function i(t){return"translate(0,"+(t+.5)+")"}function o(t){return function(e){return+t(e)}}function l(t){var e=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(e=Math.round(e)),function(n){return+t(n)+e}}function s(){return!this.__axis}function u(t,e){var n=[],u=null,d=null,f=6,m=6,v=3,b=1===t||4===t?-1:1,p=4===t||2===t?"x":"y",h=1===t||3===t?c:i;function j(a){var c=null==u?e.ticks?e.ticks.apply(e,n):e.domain():u,i=null==d?e.tickFormat?e.tickFormat.apply(e,n):r:d,j=Math.max(f,0)+v,O=e.range(),y=+O[0]+.5,g=+O[O.length-1]+.5,E=(e.bandwidth?l:o)(e.copy()),w=a.selection?a.selection():a,k=w.selectAll(".domain").data([null]),M=w.selectAll(".tick").data(c,e).order(),x=M.exit(),N=M.enter().append("g").attr("class","tick"),C=M.select("line"),S=M.select("text");k=k.merge(k.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),M=M.merge(N),C=C.merge(N.append("line").attr("stroke","currentColor").attr(p+"2",b*f)),S=S.merge(N.append("text").attr("fill","currentColor").attr(p,b*j).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),a!==w&&(k=k.transition(a),M=M.transition(a),C=C.transition(a),S=S.transition(a),x=x.transition(a).attr("opacity",1e-6).attr("transform",(function(t){return isFinite(t=E(t))?h(t):this.getAttribute("transform")})),N.attr("opacity",1e-6).attr("transform",(function(t){var e=this.parentNode.__axis;return h(e&&isFinite(e=e(t))?e:E(t))}))),x.remove(),k.attr("d",4===t||2==t?m?"M"+b*m+","+y+"H0.5V"+g+"H"+b*m:"M0.5,"+y+"V"+g:m?"M"+y+","+b*m+"V0.5H"+g+"V"+b*m:"M"+y+",0.5H"+g),M.attr("opacity",1).attr("transform",(function(t){return h(E(t))})),C.attr(p+"2",b*f),S.attr(p,b*j).text(i),w.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),w.each((function(){this.__axis=E}))}return j.scale=function(t){return arguments.length?(e=t,j):e},j.ticks=function(){return n=a.call(arguments),j},j.tickArguments=function(t){return arguments.length?(n=null==t?[]:a.call(t),j):n.slice()},j.tickValues=function(t){return arguments.length?(u=null==t?null:a.call(t),j):u&&u.slice()},j.tickFormat=function(t){return arguments.length?(d=t,j):d},j.tickSize=function(t){return arguments.length?(f=m=+t,j):f},j.tickSizeInner=function(t){return arguments.length?(f=+t,j):f},j.tickSizeOuter=function(t){return arguments.length?(m=+t,j):m},j.tickPadding=function(t){return arguments.length?(v=+t,j):v},j}function d(t){return u(2,t)}function f(t){return u(3,t)}},112:function(t,e,n){"use strict";var a=n(86),r=n(104),c=n(1),i=n.n(c),o=n(89);e.a=function(t){var e=t.data,n=t.children,l=Object(c.useState)(!1),s=Object(a.a)(l,2),u=s[0],d=s[1],f=Object(o.f)(u,null,{from:r.j,enter:r.i,leave:r.j,config:{mass:1,tension:210,friction:20}});return i.a.createElement("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:d.bind(void 0,!0),onMouseLeave:d.bind(void 0,!1)},n,f.map((function(t){var n=t.item,a=t.key,r=t.props;return n?i.a.createElement(o.a.div,{key:a,style:r},i.a.createElement("div",{className:"message"},i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.replace(/\n/g,"<br/>")}}))):i.a.createElement(o.a.div,{key:a})})))}},119:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(102),r=n(95),c=Symbol("implicit");function i(){var t=new Map,e=[],n=[],o=c;function l(a){var r=a+"",i=t.get(r);if(!i){if(o!==c)return o;t.set(r,i=e.push(a))}return n[(i-1)%n.length]}return l.domain=function(n){if(!arguments.length)return e.slice();e=[],t=new Map;var r,c=Object(a.a)(n);try{for(c.s();!(r=c.n()).done;){var i=r.value,o=i+"";t.has(o)||t.set(o,e.push(i))}}catch(s){c.e(s)}finally{c.f()}return l},l.range=function(t){return arguments.length?(n=Array.from(t),l):n.slice()},l.unknown=function(t){return arguments.length?(o=t,l):o},l.copy=function(){return i(e,n).unknown(o)},r.b.apply(l,arguments),l}},140:function(t,e,n){"use strict";n.r(e);var a=n(27),r=n(34),c=n(96),i=n(87),o=n.n(i),l=n(90),s=n.n(l),u=n(1),d=n.n(u),f=n(262),m=n(89);var v=d.a.memo((function(t){var e=t.statistic,n=t.total,a=t.delta,i=Object(f.a)().t,o=Object(m.c)({total:n,delta:a,from:{total:n,delta:a}},m.b.stiff);return d.a.createElement(d.a.Fragment,null,d.a.createElement("h5",null,i(Object(r.a)(e))),d.a.createElement(m.a.h4,null,"active"!==e?a>0?o.delta.interpolate((function(t){return"+".concat(Object(r.f)(Math.floor(t)))})):d.a.createElement(c.g,{size:9,verticalAlign:2}):"\xa0"),d.a.createElement(m.a.h1,null,o.total.interpolate((function(t){return Object(r.f)(Math.floor(t))}))))}));e.default=d.a.memo((function(t){var e=t.data,n=Object(u.useMemo)((function(){var t=[];return a.l.map((function(e,n){return t.push({animationDelay:"".concat(750+250*n,"ms")}),null})),t}),[]);return d.a.createElement("div",{className:"Level"},a.l.map((function(t,a){return d.a.createElement(m.a.div,{key:a,className:o()("level-item","is-".concat(t),"fadeInUp"),style:n[a]},d.a.createElement(v,Object.assign({statistic:t},{total:Object(r.j)(e,"total",t),delta:Object(r.j)(e,"delta",t)})))})))}),(function(t,e){return!!s()(Object(r.j)(t.data,"total","active"),Object(r.j)(e.data,"total","active"))}))},141:function(t,e,n){"use strict";n.r(e);var a=n(42),r=n(86),c=n(27),i=n(87),o=n.n(i),l=n(1),s=n.n(l),u=n(47),d=n.n(u),f=n(89),m=n(152);e.default=s.a.memo((function(t){var e=t.mapStatistic,n=t.setMapStatistic,i=Object(m.a)(),u=Object(r.a)(i,2),v=u[0],b=u[1].width,p=Object(l.useState)(!1),h=Object(r.a)(p,2),j=h[0],O=h[1],y=Object(l.useState)(0),g=Object(r.a)(y,2),E=g[0],w=g[1],k=Object(f.c)((function(){return{opacity:0,background:"".concat(c.a[e],"20"),transform:"translateX(".concat(b*c.l.indexOf(e)*.25,"px)"),config:f.b.gentle}})),M=Object(r.a)(k,2),x=M[0],N=M[1];Object(l.useEffect)((function(){b>0&&d.a.unstable_batchedUpdates((function(){N({transform:"translateX(".concat(b*c.l.indexOf(e)*.25,"px)"),opacity:1,background:"".concat(c.a[e],"20"),delay:0===E?1500:0,onStart:O.bind(void 0,!0),onRest:O.bind(void 0,!1)})}))}),[E,e,N,b]);var C=Object(l.useCallback)((function(t){w((function(t){return t+1})),n(t)}),[n]);return s.a.createElement("div",{className:"MapSwitcher",ref:v},s.a.createElement(f.a.div,{className:"highlight",style:x}),c.l.map((function(t,e){return s.a.createElement("div",{key:e,className:o()("clickable",Object(a.a)({},"is-".concat(t),!j)),onClick:C.bind(void 0,t)})})))}),(function(t,e){return t.mapStatistic===e.mapStatistic}))},142:function(t,e,n){"use strict";var a=n(1),r=n(93),c=["mousedown","touchstart"];e.a=function(t,e,n){void 0===n&&(n=c);var i=Object(a.useRef)(e);Object(a.useEffect)((function(){i.current=e}),[e]),Object(a.useEffect)((function(){for(var e=function(e){var n=t.current;n&&!n.contains(e.target)&&i.current(e)},a=0,c=n;a<c.length;a++){var o=c[a];Object(r.c)(document,o,e)}return function(){for(var t=0,a=n;t<a.length;t++){var c=a[t];Object(r.b)(document,c,e)}}}),[n,t])}},151:function(t,e,n){"use strict";n.r(e);var a=n(86),r=n(27),c=n(1),i=n.n(c),o=n(262),l=n(6),s=n(89),u=n(142),d=function(t){var e=t.stateCode,n=t.trail,d=Object(c.useState)(!1),f=Object(a.a)(d,2),m=f[0],v=f[1],b=Object(c.useRef)(),p=Object(l.g)(),h=Object(o.a)().t;Object(u.a)(b,(function(){v(!1)}));var j=Object(s.f)(m,null,{from:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},enter:{opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999},leave:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},config:{mass:1,tension:210,friction:20}}),O=Object(c.useCallback)((function(t){v(!1),p.push("/state/".concat(t))}),[p]);return i.a.createElement("div",{className:"StateDropdown",ref:b},i.a.createElement(s.a.h1,{className:"state-name fadeInUp",style:n,onClick:v.bind(void 0,!m)},h(r.o[e])),j.map((function(t){var n=t.item,a=t.key,c=t.props;return n?i.a.createElement(s.a.div,{className:"dropdown",style:c,key:a},Object.keys(r.g).filter((function(t){return"TT"!==t&&t!==e})).sort().map((function(t){return i.a.createElement("h1",{key:t,className:"item",onClick:O.bind(void 0,t)},h(r.o[t]))}))):i.a.createElement(s.a.div,{key:e,style:c})})),m&&i.a.createElement("div",{className:"backdrop"}))},f=n(34);e.default=i.a.memo((function(t){var e,n,a,r,l,u=t.data,m=t.stateCode,v=Object(o.a)().t,b=Object(c.useMemo)((function(){var t=[];return[0,0,0].map((function(e,n){return t.push({animationDelay:"".concat(250*n,"ms")}),null})),t}),[]),p=Object(s.c)({total:Object(f.j)(u,"total","tested"),config:s.b.gentle});return i.a.createElement("div",{className:"StateHeader"},i.a.createElement("div",{className:"header-left"},i.a.createElement(d,Object.assign({stateCode:m},{hyperlink:!1,trail:b[0]})),(null===u||void 0===u||null===(e=u.meta)||void 0===e?void 0:e.last_updated)&&i.a.createElement("h5",{className:"fadeInUp",style:b[1]},"Last Updated on ".concat(Object(f.d)(u.meta.last_updated,"dd MMM, p")," IST"))),i.a.createElement("div",{className:"header-right fadeInUp",style:b[2]},i.a.createElement("h5",null,v("Tested")),i.a.createElement(s.a.h2,null,p.total.interpolate((function(t){return Object(f.f)(Math.floor(t))}))),(null===u||void 0===u||null===(n=u.meta)||void 0===n||null===(a=n.tested)||void 0===a?void 0:a.last_updated)&&i.a.createElement("h5",{className:"timestamp"},"As of ".concat(Object(f.d)(u.meta.tested.last_updated,"dd MMMM"))),(null===u||void 0===u||null===(r=u.meta)||void 0===r||null===(l=r.tested)||void 0===l?void 0:l.source)&&i.a.createElement("h5",null,"per ",i.a.createElement("a",{href:u.meta.tested.source,target:"_noblank"},"source"))))}))},152:function(t,e,n){"use strict";var a=n(1),r="undefined"!==typeof window?a.useLayoutEffect:a.useEffect,c=n(93),i={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};e.a=c.a&&window.ResizeObserver?function(){var t=Object(a.useState)(null),e=t[0],n=t[1],c=Object(a.useState)(i),o=c[0],l=c[1],s=Object(a.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,n=e.x,a=e.y,r=e.width,c=e.height,i=e.top,o=e.left,s=e.bottom,u=e.right;l({x:n,y:a,width:r,height:c,top:i,left:o,bottom:s,right:u})}}))}),[]);return r((function(){if(e)return s.observe(e),function(){s.disconnect()}}),[e]),[n,o]}:function(){return[function(){},i]}},172:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(86),r=n(173),c=n(95),i=n(119);function o(){var t,e,n=Object(i.a)().unknown(void 0),l=n.domain,s=n.range,u=0,d=1,f=!1,m=0,v=0,b=.5;function p(){var n=l().length,a=d<u,c=a?d:u,i=a?u:d;t=(i-c)/Math.max(1,n-m+2*v),f&&(t=Math.floor(t)),c+=(i-c-t*(n-m))*b,e=t*(1-m),f&&(c=Math.round(c),e=Math.round(e));var o=Object(r.a)(n).map((function(e){return c+t*e}));return s(a?o.reverse():o)}return delete n.unknown,n.domain=function(t){return arguments.length?(l(t),p()):l()},n.range=function(t){var e,n;return arguments.length?(e=t,n=Object(a.a)(e,2),u=n[0],d=n[1],u=+u,d=+d,p()):[u,d]},n.rangeRound=function(t){var e,n;return e=t,n=Object(a.a)(e,2),u=n[0],d=n[1],u=+u,d=+d,f=!0,p()},n.bandwidth=function(){return e},n.step=function(){return t},n.round=function(t){return arguments.length?(f=!!t,p()):f},n.padding=function(t){return arguments.length?(m=Math.min(1,v=+t),p()):m},n.paddingInner=function(t){return arguments.length?(m=Math.min(1,t),p()):m},n.paddingOuter=function(t){return arguments.length?(v=+t,p()):v},n.align=function(t){return arguments.length?(b=Math.max(0,Math.min(1,t)),p()):b},n.copy=function(){return o(l(),[u,d]).round(f).paddingInner(m).paddingOuter(v).align(b)},c.b.apply(p(),arguments)}},173:function(t,e,n){"use strict";e.a=function(t,e,n){t=+t,e=+e,n=(r=arguments.length)<2?(e=t,t=0,1):r<3?1:+n;for(var a=-1,r=0|Math.max(0,Math.ceil((e-t)/n)),c=new Array(r);++a<r;)c[a]=t+a*n;return c}},178:function(t,e,n){"use strict";var a=n(1),r=n.n(a),c=n(21),i=n.n(c);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=Object(a.forwardRef)((function(t,e){var n=t.color,a=void 0===n?"currentColor":n,c=t.size,i=void 0===c?24:c,s=l(t,["color","size"]);return r.a.createElement("svg",o({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))}));s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="Info",e.a=s},208:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(68),r=n(5),c=n(3),i=n(2);function o(t,e){Object(i.a)(2,arguments);var n=Object(c.a)(t),a=Object(r.a)(e);if(isNaN(a))return new Date(NaN);if(!a)return n;var o=n.getDate(),l=new Date(n.getTime());l.setMonth(n.getMonth()+a+1,0);var s=l.getDate();return o>=s?l:(n.setFullYear(l.getFullYear(),l.getMonth(),o),n)}function l(t,e){Object(i.a)(2,arguments);var n=Object(r.a)(e);return o(t,-n)}function s(t,e){if(Object(i.a)(2,arguments),!e||"object"!==typeof e)return new Date(NaN);var n="years"in e?Object(r.a)(e.years):0,o="months"in e?Object(r.a)(e.months):0,s="weeks"in e?Object(r.a)(e.weeks):0,u="days"in e?Object(r.a)(e.days):0,d="hours"in e?Object(r.a)(e.hours):0,f="minutes"in e?Object(r.a)(e.minutes):0,m="seconds"in e?Object(r.a)(e.seconds):0,v=l(Object(c.a)(t),o+12*n),b=Object(a.a)(v,u+7*s),p=f+60*d,h=m+60*p,j=1e3*h,O=new Date(b.getTime()-j);return O}},248:function(t,e,n){"use strict";n.r(e);var a=n(133),r=n(86),c=n(27),i=n(34),o=n(176),l=n(177),s=n(110),u=n(172),d=n(126),f=n(225),m=(n(109),n(90)),v=n.n(m),b=n(1),p=n.n(b),h=n(152),j=function(t,e){return Object(i.j)(t,"delta",e)},O=50,y=0,g=50,E=0;var w=p.a.memo((function(t){var e=t.timeseries,n=t.statistic,a=t.lookback,m=Object(b.useRef)(),v=Object(h.a)(),w=Object(r.a)(v,2),M=w[0],x=w[1],N=x.width,C=x.height,S=Object.keys(e||{}).filter((function(t){return t<=Object(i.i)()})).slice(-a);return Object(b.useEffect)((function(){if(N){var t=Object(f.a)(m.current),a=N-y,r=C-g,v=Object(u.a)().domain(S).range([E,a]).paddingInner(N/1e3),b=Object(d.a)().domain([Math.min(0,Object(o.a)(S,(function(t){return j(e[t],n)}))),Math.max(1,Object(l.a)(S,(function(t){return j(e[t],n)})))]).range([r,O]),p=Object(s.a)(v).tickSize(0).tickFormat((function(t){return Object(i.d)(t,"dd MMM")})),h=t.transition().duration(c.b);t.select(".x-axis").transition(h).style("transform","translateY(".concat(b(0),"px)")).call(p).on("start",(function(){return t.select(".domain").remove()})).selectAll("text").attr("y",0).attr("dy",(function(t,a){return j(e[t],n)<0?"-1em":"1.5em"})).style("text-anchor","middle").attr("fill",c.a[n]),t.selectAll(".bar").data(S).join((function(t){return t.append("path").attr("class","bar").attr("d",(function(t){return k(v(t),b(0),v.bandwidth(),0,5)}))})).transition(h).attr("d",(function(t){return k(v(t),b(0),v.bandwidth(),b(0)-b(j(e[t],n)),5)})).attr("fill",(function(t,e){return e<S.length-1?c.a[n]+"90":c.a[n]}));var w=t.selectAll(".label").data(S).join("text").attr("class","label").attr("x",(function(t){return v(t)+v.bandwidth()/2})).text((function(t){return Object(i.f)(j(e[t],n))}));w.transition(h).attr("fill",c.a[n]).attr("y",(function(t){var a=j(e[t],n);return b(a)+(a<0?15:-6)})),w.append("tspan").attr("dy",(function(t){return"".concat(j(e[t],n)<0?1.2:-1.2,"em")})).attr("x",(function(t){return v(t)+v.bandwidth()/2})).text((function(t,a){if(0===a)return"";var r=j(e[S[a-1]],n);if(!r)return"";var c=j(e[t],n)-r;return"".concat(c>0?"+":"").concat(Object(i.f)(100*c/Math.abs(r)),"%")})).transition(h).attr("fill",c.a[n]+"90")}}),[S,C,n,e,N]),p.a.createElement("div",{className:"DeltaBarGraph",ref:M},p.a.createElement("svg",{ref:m,width:N,height:250,viewBox:"0 0 ".concat(N," ").concat(C),preserveAspectRatio:"xMidYMid meet"},p.a.createElement("g",{className:"x-axis"}),p.a.createElement("g",{className:"y-axis"})))}),(function(t,e){return!!v()(t.stateCode,e.stateCode)&&(!!v()(t.lookback,e.lookback)&&!!v()(t.statistic,e.statistic))}));function k(t,e,n,a,r){return r=Math.sign(a)*Math.min(Math.abs(a),r),["M ".concat(t," ").concat(e),"v ".concat(-a+r),"q 0 ".concat(-r," ").concat(Math.abs(r)," ").concat(-r),"h ".concat(n-2*Math.abs(r)),"q ".concat(Math.abs(r)," 0 ").concat(Math.abs(r)," ").concat(r),"v ".concat(a-r),"Z"].join(" ")}var M=n(140),x=n(141),N=n(151),C=n(112),S=n(178);var I=function(t){var e=t.title,n=t.statistic,a=t.total,r=t.formula,c=t.date,i=t.description,o=t.className;return p.a.createElement("div",{className:"meta-item ".concat(o)},p.a.createElement("div",{className:"meta-item-top"},p.a.createElement("h3",null,e),p.a.createElement(C.a,{data:r},p.a.createElement(S.a,null))),p.a.createElement("h1",null,n),p.a.createElement("h5",null,c),a&&p.a.createElement("h5",null,"India has ".concat(a," CPM")),p.a.createElement("p",null,i))},z=n(80),T=n(208),D=n(21),R=n.n(D);function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function F(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var P=Object(b.forwardRef)((function(t,e){var n=t.color,a=void 0===n?"currentColor":n,r=t.size,c=void 0===r?24:r,i=F(t,["color","size"]);return p.a.createElement("svg",_({ref:e,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),p.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),p.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));P.propTypes={color:R.a.string,size:R.a.oneOfType([R.a.string,R.a.number])},P.displayName="Compass";var A=P;var U=p.a.memo((function(t){var e,n,a,r,o,l,s=t.stateCode,u=t.data,d=t.timeseries,f=Object(i.j)(u[s],"total","confirmed"),m=Object(i.j)(u[s],"total","active"),v=Object(i.j)(u[s],"total","deceased"),b=Object(i.j)(u[s],"total","recovered"),h=Object(i.j)(u[s],"total","tested"),j=Object(z.a)(Object(i.g)(),"yyyy-MM-dd"),O=Object(z.a)(Object(T.a)(Object(i.g)(),{weeks:1}),"yyyy-MM-dd"),y=Object(i.j)(null===(e=d[s])||void 0===e?void 0:e[O],"total","confirmed"),g=Object(i.j)(u[s],"total","confirmed",!0),E=Object(i.j)(u[s],"total","tested",!0),w=Object(i.j)(u.TT,"total","confirmed",!0),k=b/f*100,M=m/f*100,x=v/f*100,N=(f-y)/y*100;return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"StateMeta population"},p.a.createElement("div",{className:"meta-item population"},p.a.createElement("h3",null,"Population"),p.a.createElement("h1",null,Object(i.f)(null===(n=u[s])||void 0===n||null===(a=n.meta)||void 0===a?void 0:a.population))),p.a.createElement("div",{className:"alert"},p.a.createElement(A,null),p.a.createElement("div",{className:"alert-right"},"Based on 2019 population projection by NCP"," ",p.a.createElement("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank"},"report")))),p.a.createElement("div",{className:"StateMeta"},p.a.createElement(I,{className:"confirmed",title:"Confirmed Per Million",statistic:Object(i.f)(g),total:Object(i.f)(w),formula:"(confirmed / state population) * 1 Million",description:"\n            ".concat(Object(i.f)(Math.round(g))," out of every 1 million people in ").concat(c.o[s]," have tested positive for the virus.\n            ")}),p.a.createElement(I,{className:"active",title:"Active",statistic:"".concat(Object(i.f)(M),"%"),formula:"(active / confirmed) * 100",description:M>0?"For every 100 confirmed cases, ".concat(Object(i.f)(Math.round(M))," are currently infected."):"Currently, there are no active cases in this state."}),p.a.createElement(I,{className:"recovery",title:"Recovery Rate",statistic:"".concat(Object(i.f)(k),"%"),formula:"(recovered / confirmed) * 100",description:k>0?"For every 100 confirmed cases, ".concat(Object(i.f)(Math.round(k))," have recovered from the virus."):"Unfortunately, there are no recoveries in this state yet."}),p.a.createElement(I,{className:"mortality",title:"Mortality Rate",statistic:"".concat(Object(i.f)(x),"%"),formula:"(deceased / confirmed) * 100",description:x>0?"For every 100 confirmed cases, ".concat(Object(i.f)(Math.round(x))," have unfortunately passed away from the virus."):"Fortunately, no one has passed away from the virus in this state."}),p.a.createElement(I,{className:"gr",title:"Avg. Growth Rate",statistic:N>0?"".concat(Object(i.f)(Math.round(N/7)),"%"):"-",formula:"(((previousDayData - sevenDayBeforeData) / sevenDayBeforeData) * 100)/7",date:"".concat(Object(i.d)(O,"dd MMM")," - ").concat(Object(i.d)(j,"dd MMM")),description:N>0?"In the last one week, the number of new infections has\n              grown by an average of ".concat(Object(i.f)(Math.round(N/7)),"%\n              every day."):"There has been no growth in the number of infections in last one week."}),p.a.createElement(I,{className:"tpm",title:"Tests Per Million",statistic:"\u2248 ".concat(Object(i.f)(Math.round(E))),formula:"(total tests in state / total population of state) * 1 Million",date:h?"As of ".concat(Object(i.e)(null===(r=u[s])||void 0===r||null===(o=r.meta)||void 0===o||null===(l=o.tested)||void 0===l?void 0:l.last_updated)," ago"):"",description:E>0?"For every 1 million people in ".concat(c.o[s],",\n                ").concat(Object(i.f)(Math.round(E))," people were tested."):"No tests have been conducted in this state yet."})))}),(function(t,e){return t.stateCode===e.stateCode})),H=n(105),L=n(87),V=n.n(L),B=n(97);function W(){return(W=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function Y(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var q=Object(b.forwardRef)((function(t,e){var n=t.color,a=void 0===n?"currentColor":n,r=t.size,c=void 0===r?24:r,i=Y(t,["color","size"]);return p.a.createElement("svg",W({ref:e,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),p.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),p.a.createElement("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),p.a.createElement("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),p.a.createElement("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"}))}));q.propTypes={color:R.a.string,size:R.a.oneOfType([R.a.string,R.a.number])},q.displayName="Smile";var G=q,J=n(117),X=n(262),Z=n(6),K=n(223),Q=n(114),$=Object(b.lazy)((function(){return n.e(23).then(n.bind(null,209))})),tt=Object(b.lazy)((function(){return n.e(25).then(n.bind(null,210))})),et=Object(b.lazy)((function(){return Promise.all([n.e(2),n.e(34)]).then(n.bind(null,181))}));e.default=p.a.memo((function(t){var e,n,o=Object(X.a)().t,l=Object(Z.i)().stateCode.toUpperCase(),s=Object(K.a)("mapStatistic","active"),u=Object(r.a)(s,2),d=u[0],f=u[1],m=Object(b.useState)(!1),v=Object(r.a)(m,2),h=v[0],j=v[1],O=Object(b.useState)({stateCode:l,districtName:null}),y=Object(r.a)(O,2),g=y[0],E=y[1];Object(b.useEffect)((function(){E(Object(B.a)(g,(function(t){t.stateCode=l})))}),[g,l]);var k=Object(Q.a)("https://api.covid19india.org/v3/min/timeseries.min.json",i.c,{suspense:!0,revalidateOnFocus:!1}).data,C=Object(Q.a)("https://api.covid19india.org/v3/min/data.min.json",i.c,{suspense:!0,revalidateOnMount:!0,refreshInterval:1e5,revalidateOnFocus:!1}).data,S=Object(b.useMemo)((function(){var t,e=window.innerWidth>=540?3:2,n=(null===(t=C[l])||void 0===t?void 0:t.districts)?Object.keys(C[l].districts).filter((function(t){return"Unknown"!==t})).length:0;return Math.ceil(n/e)}),[C,l]),I=Object(b.useRef)(),z=Object(H.a)(I,{once:!0}),T=Object(b.useMemo)((function(){var t=[];return[0,0,0,0].map((function(e,n){return t.push({animationDelay:"".concat(250*n,"ms")}),null})),t}),[]),D=h?10:6;return p.a.createElement(p.a.Fragment,null,p.a.createElement(J.a,null,p.a.createElement("title",null,"Coronavirus Outbreak in India ",c.o[l]," - covid19-live-update-tracker.blogspot.com"),p.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in India ".concat(c.o[l]," - covid19-live-update-tracker.blogspot.com")}),p.a.createElement("meta",{name:"description",content:"Track COVID-19 cases in ".concat(c.o[l]," and live COVID-19 cases in cities of ").concat(c.o[l],".")})),p.a.createElement("div",{style:{textAlign:"center"}},p.a.createElement("h2",null,c.o[l]," Covid19 cases"),p.a.createElement("p",null,"Check live Covid19 cases in cities of ",c.o[l],".")),p.a.createElement("div",{className:"State"},p.a.createElement("div",{className:"state-left"},p.a.createElement(N.default,{data:C[l],stateCode:l}),p.a.createElement("div",{style:{position:"relative"}},p.a.createElement(x.default,{mapStatistic:d,setMapStatistic:f}),p.a.createElement(M.default,{data:C[l]}),p.a.createElement(et,{timeseries:k[l]})),p.a.createElement(b.Suspense,{fallback:p.a.createElement("div",{style:{minHeight:"50rem"}})},p.a.createElement(tt,{stateCode:l,data:C,regionHighlighted:g,setRegionHighlighted:E,mapStatistic:d,setMapStatistic:f})),p.a.createElement("span",{ref:I}),C&&k&&z&&p.a.createElement(U,{stateCode:l,data:C,timeseries:k})),p.a.createElement("div",{className:"state-right"},p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"district-bar",style:h?{}:{display:"flex"}},p.a.createElement("div",{className:"district-bar-top"},p.a.createElement("div",{className:"district-bar-left"},p.a.createElement("h2",{className:V()(d,"fadeInUp"),style:T[0]},"Top districts"),p.a.createElement("div",{className:"districts fadeInUp ".concat(h?"is-grid":""),style:h?Object(a.a)({gridTemplateRows:"repeat(".concat(S,", 2rem)")},T[1]):T[1]},Object.keys((null===(e=C[l])||void 0===e?void 0:e.districts)||{}).filter((function(t){return"Unknown"!==t})).sort((function(t,e){return function(t,e){var n=C[l].districts[t],a=C[l].districts[e];return Object(i.j)(a,"total",d)-Object(i.j)(n,"total",d)}(t,e)})).slice(0,h?void 0:5).map((function(t){var e=Object(i.j)(C[l].districts[t],"total",d),n=Object(i.j)(C[l].districts[t],"delta",d);return p.a.createElement("div",{key:t,className:"district"},p.a.createElement("h2",null,Object(i.f)(e)),p.a.createElement("h5",null,o(t)),"active"!==d&&p.a.createElement("div",{className:"delta"},p.a.createElement("h6",{className:d},n>0?"\u2191"+Object(i.f)(n):"")))})))),p.a.createElement("div",{className:"district-bar-right fadeInUp",style:T[2]},("confirmed"===d||"deceased"===d)&&p.a.createElement("div",{className:"happy-sign"},Object.keys(k[l]||{}).slice(-D).every((function(t){return 0===Object(i.j)(k[l][t],"delta",d)}))&&p.a.createElement("div",{className:"alert ".concat("confirmed"===d?"is-green":"")},p.a.createElement(G,null),p.a.createElement("div",{className:"alert-right"},"No new ",d," cases in the past five days"))),p.a.createElement(w,Object.assign({timeseries:k[l]||{}},{stateCode:l,lookback:D},{statistic:d})))),p.a.createElement("div",{className:"district-bar-bottom"},Object.keys((null===(n=C[l])||void 0===n?void 0:n.districts)||{}).length>5?p.a.createElement("button",{className:"button fadeInUp",onClick:function(){j(!h)},style:T[3]},p.a.createElement("span",null,h?"View less":"View all")):p.a.createElement("div",{style:{height:"3.75rem",flexBasis:"15%"}}))),p.a.createElement(b.Suspense,{fallback:p.a.createElement("div",null)},p.a.createElement($,Object.assign({timeseries:k[l]},{regionHighlighted:g,setRegionHighlighted:E})))))))}))}}]);
//# sourceMappingURL=11.d04b96d8.chunk.js.map
