(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[37,38],{100:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var a,c,r;if(Array.isArray(t)){if((a=t.length)!=n.length)return!1;for(c=a;0!==c--;)if(!e(t[c],n[c]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((a=(r=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(c=a;0!==c--;)if(!Object.prototype.hasOwnProperty.call(n,r[c]))return!1;for(c=a;0!==c--;){var s=r[c];if(!e(t[s],n[s]))return!1}return!0}return t!==t&&n!==n}},166:function(e,t,n){"use strict";n.r(t);var a=n(51),c=n(10),r=n(25),s=n(104),i=n(102),o=n.n(i),d=n(100),l=n.n(d),u=n(2),j=n(294),b=n(106),h=n(20);function f(e){var t=e.dose1,n=e.dose2,c=Object(j.a)().t,s=Object(u.useState)(2),i=Object(a.a)(s,2),d=i[0],l=i[1],f=Object(u.useRef)(!1),O=Object(b.useSpring)({dose1:t,dose2:n,from:{dose1:0,dose2:0},delay:f.current?0:2e3});return Object(u.useEffect)((function(){f.current=!0}),[]),Object(h.jsxs)("div",{className:"progress-bar-wrapper fadeInUp",style:{animationDelay:"".concat(2e3,"ms")},children:[Object(h.jsxs)("div",{className:o()("legend",{highlighted:1===d}),children:[Object(h.jsxs)("div",{className:"label-wrapper",children:[Object(h.jsx)(b.animated.div,{style:{width:O.dose1.to((function(e){return"calc(".concat(e,"% - 3rem)")}))}}),Object(h.jsx)("div",{className:"label",onMouseEnter:l.bind(this,1),onMouseLeave:l.bind(this,2),children:c("At least one dose")})]}),Object(h.jsx)(b.animated.div,{className:"arrow",style:{marginLeft:O.dose1.to((function(e){return"calc(".concat(e,"% - 0.3ch)")}))},children:"|"})]}),Object(h.jsxs)("div",{className:"progress-bar",children:[Object(h.jsx)(b.animated.div,{className:o()("progress-bar","value",{highlighted:1===d}),style:{width:O.dose1.to((function(e){return"".concat(e,"%")}))},onMouseEnter:l.bind(this,1),onMouseLeave:l.bind(this,2),children:Object(h.jsx)(b.animated.span,{children:O.dose1.to((function(e){return Object(r.e)(e,"%")}))})}),Object(h.jsx)(b.animated.div,{className:o()("progress-bar","value","opaque",{highlighted:2===d}),style:{width:O.dose2.to((function(e){return"".concat(e,"%")}))}})]}),n>0&&Object(h.jsxs)("div",{className:o()("legend",{highlighted:2===d}),children:[Object(h.jsx)(b.animated.div,{className:"arrow",style:{marginLeft:O.dose2.to((function(e){return"calc(".concat(e,"% - 0.3ch)")}))},children:"|"}),Object(h.jsxs)("div",{className:"label-wrapper",children:[Object(h.jsx)(b.animated.div,{style:{width:O.dose2.to((function(e){return"calc(".concat(e,"% - 4rem)")}))}}),Object(h.jsx)(b.animated.div,{className:"label",children:O.dose2.to((function(e){return"".concat(c("Fully vaccinated")," (").concat(Object(r.e)(e,"%"),")")}))})]})]})]})}function O(e){var t=e.data,n=Object(j.a)().t,a=Object(b.useSpring)({total:Object(r.h)(t,"total","vaccinated"),config:c.t}),i=c.x.vaccinated;return Object(h.jsxs)("div",{className:"level-vaccinated fadeInUp",style:{animationDelay:"".concat(1750,"ms")},children:[Object(h.jsx)(s.v,{}),Object(h.jsx)(b.animated.div,{children:a.total.to((function(e){return Object(r.e)(e,"long")}))}),Object(h.jsx)("div",{children:n(i.displayName)})]})}function v(e){var t=e.data,n=Object(r.h)(t,"total","vaccinated1",{normalizedByPopulationPer:"hundred"}),a=Object(r.h)(t,"total","vaccinated2",{normalizedByPopulationPer:"hundred"});return Object(h.jsxs)("div",{className:"VaccinationHeader",children:[Object(h.jsx)(O,{data:t}),Object(h.jsx)(f,{dose1:n,dose2:a})]})}b.Globals.assign({colors:null});var m=function(e,t){return!!l()(e.data,t.data)};t.default=Object(u.memo)(v,m)}}]);
//# sourceMappingURL=37.b39e9662.chunk.js.map
