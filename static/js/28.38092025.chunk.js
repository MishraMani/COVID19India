(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[28],{155:function(e,t,n){"use strict";var i=n(2),a=n(92),c=["mousedown","touchstart"];t.a=function(e,t,n){void 0===n&&(n=c);var r=Object(i.useRef)(t);Object(i.useEffect)((function(){r.current=t}),[t]),Object(i.useEffect)((function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&r.current(t)},i=0,c=n;i<c.length;i++){var s=c[i];Object(a.d)(document,s,t)}return function(){for(var e=0,i=n;e<i.length;e++){var c=i[e];Object(a.c)(document,c,t)}}}),[n,e])}},248:function(e,t,n){"use strict";n.r(t);var i=n(130),a=n(147),c=n(95),r=n(93),s=n.n(r),o=n(2),u=n(284),l=n(97),f=n(155),d=n(19);function g(e){var t,n=this,r=e.showLanguageSwitcher,g=e.setShowLanguageSwitcher,v=Object(u.a)(),b=v.t,h=v.i18n,j=Object.keys(a).includes(null===h||void 0===h?void 0:h.language)?null===h||void 0===h?void 0:h.language:null===h||void 0===h||null===(t=h.options)||void 0===t?void 0:t.fallbackLng[0],p=Object(l.useTransition)(r,{from:i.b,enter:i.a,leave:i.b,config:{mass:1,tension:100,friction:15}}),O=Object(o.useRef)();Object(f.a)(O,(function(e){"navbar-left"!==e.target.className&&g(!1)}));var m=Object(o.useCallback)((function(e){h&&h.changeLanguage(e)}),[h]);return p((function(e,t){return t&&Object(d.jsxs)(l.animated.div,{className:"LanguageSwitcher",ref:O,style:e,children:[Object(d.jsx)("h3",{children:b("We speak the following languages")}),Object(d.jsx)("div",{className:"languages",children:Object.keys(a).map((function(e){return Object(d.jsx)("div",{className:s()("language",{"is-highlighted":j===e}),onClick:m.bind(n,e),children:Object(d.jsx)("span",{children:a[e]})},e)}))}),Object(d.jsx)("div",{className:"close-button",onClick:g.bind(n,!1),children:Object(d.jsx)(c.c,{size:16})})]})}))}t.default=Object(o.memo)(g)},93:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var c=typeof i;if("string"===c||"number"===c)e.push(i);else if(Array.isArray(i)){if(i.length){var r=a.apply(null,i);r&&e.push(r)}}else if("object"===c)if(i.toString===Object.prototype.toString)for(var s in i)n.call(i,s)&&i[s]&&e.push(s);else e.push(i.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(i=function(){return a}.apply(t,[]))||(e.exports=i)}()}}]);
//# sourceMappingURL=28.38092025.chunk.js.map
