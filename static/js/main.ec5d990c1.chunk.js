(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[12],{32:function(e,a,n){"use strict";n.d(a,"j",(function(){return f})),n.d(a,"f",(function(){return T})),n.d(a,"g",(function(){return y})),n.d(a,"d",(function(){return v})),n.d(a,"k",(function(){return g})),n.d(a,"c",(function(){return j})),n.d(a,"e",(function(){return b})),n.d(a,"a",(function(){return A})),n.d(a,"l",(function(){return D})),n.d(a,"h",(function(){return S})),n.d(a,"i",(function(){return k})),n.d(a,"b",(function(){return F}));var t=n(33),o=n(6),i=n(59),r=n(76),c=n(73),l=n(74),d=n(75),s=n(38),u=n(23),p=null,m=new Intl.NumberFormat("en-IN",{maximumFractionDigits:1}),f=function(){return!1},h=function(){return Object(s.a)(new Date,"Asia/Kolkata")},T=function(){return Object(i.a)(h(),{representation:"date"})},y=function(){return Object(i.a)(Object(r.a)(h(),1),{representation:"date"})},v=function(e){return n.e(41).then(n.bind(null,81)).then((function(e){p=e[o.g[u.a.language||window.localStorage.i18nextLng]]})),Object(c.a)(new Date(e),new Date,{locale:p})},g=function(e){return e?(e.match(o.f)&&(e+=o.e),Object(s.a)(new Date(e),"Asia/Kolkata")):h()},j=function(e,a){if(!e)return"";"string"===typeof e&&e.match(o.f)&&(e+=o.e);var n=Object(s.a)(new Date(e),"Asia/Kolkata");return Object(l.a)(n,a,{locale:p})},b=function(e,a,n){return n&&o.n.includes(n)&&0===e&&(e=NaN),isNaN(e)?"-":"short"===a?(t=e,Math.abs(t)<1e3?m.format(t):Math.abs(t)>=1e3&&Math.abs(t)<1e5?m.format(t/1e3)+"K":Math.abs(t)>=1e5&&Math.abs(t)<1e7?m.format(t/1e5)+"L":Math.abs(t)>=1e7&&Math.abs(t)<1e10?m.format(t/1e7)+"Cr":Math.abs(t)>=1e10&&Math.abs(t)<1e14?m.format(t/1e10)+"K Cr":Math.abs(t)>=1e14?m.format(t/1e14)+"L Cr":void 0):("int"===a&&(e=Math.floor(e)),m.format(e)+("%"===a?"%":""));var t},A=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},D=function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},S=function e(a,n,i){var r,c,l,d,s,u,p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},m=p.perMillion,f=void 0!==m&&m,h=p.movingAverage,T=void 0!==h&&h,y=Object(t.a)(Object(t.a)({},o.v[i]),f&&!(null===(r=o.v[i])||void 0===r?void 0:r.normalizeByKey)&&o.o),v=y.key,g=y.normalizeByKey,j=(null===(c=o.v[i])||void 0===c?void 0:c.multiplyFactor)||1;(j*=!(null===(l=o.v[i])||void 0===l?void 0:l.normalizeByKey)&&f&&(null===o.o||void 0===o.o?void 0:o.o.multiplyFactor)||1,"delta"===n&&T)&&(n="delta7",j*=(null===(d=o.v[i])||void 0===d?void 0:d.normalizeByKey)?1:1/7);if("population"===v)s="total"===n?null===a||void 0===a||null===(u=a.meta)||void 0===u?void 0:u.population:0;else if("tested"===v){var b;s=null===a||void 0===a||null===(b=a[n])||void 0===b?void 0:b.tested}else if("active"===v){var A,D,S,k,F=(null===a||void 0===a||null===(A=a[n])||void 0===A?void 0:A.confirmed)||0,E=(null===a||void 0===a||null===(D=a[n])||void 0===D?void 0:D.deceased)||0,w=(null===a||void 0===a||null===(S=a[n])||void 0===S?void 0:S.recovered)||0,N=(null===a||void 0===a||null===(k=a[n])||void 0===k?void 0:k.other)||0;s=F-E-w-N}else{var O;s=null===a||void 0===a||null===(O=a[n])||void 0===O?void 0:O[v]}return g&&(s/=e(a,"population"===g?"total":n,g)),j*(isFinite(s)&&s||0)},k=function(e,a,n,t){var i,r,c=("tested"===o.v[a].key||"tested"===o.v[a].normalizeByKey)&&Object(d.a)(t,g(null===(i=e.meta)||void 0===i||null===(r=i.tested)||void 0===r?void 0:r.last_updated))>o.y;return{total:c?0:S(e,"total",a,n),delta:c?0:S(e,"delta",a,n)}},F=function(e){return fetch(e).then((function(e){return e.json()}))}},6:function(e,a,n){"use strict";n.d(a,"a",(function(){return i})),n.d(a,"g",(function(){return r})),n.d(a,"u",(function(){return d})),n.d(a,"v",(function(){return s})),n.d(a,"o",(function(){return u})),n.d(a,"n",(function(){return p})),n.d(a,"p",(function(){return m})),n.d(a,"b",(function(){return f})),n.d(a,"w",(function(){return h})),n.d(a,"x",(function(){return T})),n.d(a,"B",(function(){return y})),n.d(a,"E",(function(){return v})),n.d(a,"d",(function(){return g})),n.d(a,"c",(function(){return j})),n.d(a,"m",(function(){return b})),n.d(a,"y",(function(){return A})),n.d(a,"C",(function(){return D})),n.d(a,"D",(function(){return S})),n.d(a,"f",(function(){return k})),n.d(a,"e",(function(){return F})),n.d(a,"q",(function(){return E})),n.d(a,"z",(function(){return w})),n.d(a,"A",(function(){return N})),n.d(a,"l",(function(){return O})),n.d(a,"k",(function(){return M})),n.d(a,"j",(function(){return K})),n.d(a,"i",(function(){return P})),n.d(a,"h",(function(){return B})),n.d(a,"t",(function(){return L})),n.d(a,"r",(function(){return H})),n.d(a,"s",(function(){return z}));var t=n(25),o=n(50),i="https://api.covid19india.org/v4/min",r={english:"en-US",hindi:"hi",telugu:"te",kannada:"en-US",gujarati:"gu",marathi:"en-US",tamil:"ta",bengali:"bn",punjabi:"en-US",malayalam:"en-US",odiya:"en-US"},c={confirmed:{displayName:"confirmed",color:"#ff073a",format:"int",options:{key:"confirmed"}},active:{displayName:"active",color:"#007bff",format:"int",options:{key:"active"},hideDelta:!0},recovered:{displayName:"recovered",color:"#28a745",format:"int",options:{key:"recovered"}},deceased:{displayName:"deceased",color:"#6c757d",format:"int",options:{key:"deceased"}},other:{displayName:"other",format:"int",options:{key:"other"}},tested:{displayName:"tested",color:"#4b1eaa",format:"short",options:{key:"tested"}},vaccinated:{options:{displayName:"",,format:"short",key:"vaccinated"}},activeRatio:{displayName:"active ratio",format:"%",options:{key:"active",normalizeByKey:"confirmed",multiplyFactor:100},hideDelta:!0},recoveryRatio:{displayName:"recovery ratio",format:"%",options:{key:"recovered",normalizeByKey:"confirmed",multiplyFactor:100},hideDelta:!0},cfr:{displayName:"case fatality ratio",format:"%",options:{key:"deceased",normalizeByKey:"confirmed",multiplyFactor:100},hideDelta:!0},tpr:{displayName:"test positivity ratio",format:"%",options:{key:"confirmed",normalizeByKey:"tested",multiplyFactor:100},hideDelta:!0},population:{displayName:"population",format:"short",options:{key:"population"},hideDelta:!0}},l=Object.keys(c).reduce((function(e,a){var n=c[a],t=n.options,i=Object(o.a)(n,["options"]);return e.options[a]=t,e.configs[a]=i,e}),{options:{},configs:{}}),d=l.configs,s=l.options,u={normalizeByKey:"population",multiplyFactor:1e6},p=["tested","vaccinated","tpr","population"],m=["confirmed","active","recovered","deceased"],f=["other","deceased","recovered","active"],h=[].concat(m,["tested","vaccinated"]),T=Object.keys(c),y=[].concat(m,["tested","vaccinated"]),v=5,g=40,j=300,b=20,A=7,D="UN",S="Unknown",k=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g,F="T00:00:00+05:30",E={clamp:!0,precision:1},w={total:"Cumulative",delta:"Daily"},N=[null,90,30],O={CHOROPLETH:0,BUBBLES:1},M={STATES:0,DISTRICTS:1},K={COUNTRY:0,STATE:1},C="https://www.covid19india.org/mini_maps",P={AP:{geoDataFile:"".concat(C,"/andhrapradesh.json"),mapType:K.STATE},AR:{geoDataFile:"".concat(C,"/arunachalpradesh.json"),mapType:K.STATE},AS:{geoDataFile:"".concat(C,"/assam.json"),mapType:K.STATE},BR:{geoDataFile:"".concat(C,"/bihar.json"),mapType:K.STATE},CT:{geoDataFile:"".concat(C,"/chhattisgarh.json"),mapType:K.STATE},GA:{geoDataFile:"".concat(C,"/goa.json"),mapType:K.STATE},GJ:{geoDataFile:"".concat(C,"/gujarat.json"),mapType:K.STATE},HR:{geoDataFile:"".concat(C,"/haryana.json"),mapType:K.STATE},HP:{geoDataFile:"".concat(C,"/himachalpradesh.json"),mapType:K.STATE},JK:{geoDataFile:"".concat(C,"/jammukashmir.json"),mapType:K.STATE},JH:{geoDataFile:"".concat(C,"/jharkhand.json"),mapType:K.STATE},KA:{geoDataFile:"".concat(C,"/karnataka.json"),mapType:K.STATE},KL:{geoDataFile:"".concat(C,"/kerala.json"),mapType:K.STATE},MP:{geoDataFile:"".concat(C,"/madhyapradesh.json"),mapType:K.STATE},MH:{geoDataFile:"".concat(C,"/maharashtra.json"),mapType:K.STATE},MN:{geoDataFile:"".concat(C,"/manipur.json"),mapType:K.STATE},ML:{geoDataFile:"".concat(C,"/meghalaya.json"),mapType:K.STATE},MZ:{geoDataFile:"".concat(C,"/mizoram.json"),mapType:K.STATE},NL:{geoDataFile:"".concat(C,"/nagaland.json"),mapType:K.STATE},OR:{geoDataFile:"".concat(C,"/odisha.json"),mapType:K.STATE},PB:{geoDataFile:"".concat(C,"/punjab.json"),mapType:K.STATE},RJ:{geoDataFile:"".concat(C,"/rajasthan.json"),mapType:K.STATE},SK:{geoDataFile:"".concat(C,"/sikkim.json"),mapType:K.STATE},TN:{geoDataFile:"".concat(C,"/tamilnadu.json"),mapType:K.STATE},TG:{geoDataFile:"".concat(C,"/telangana.json"),mapType:K.STATE},TR:{geoDataFile:"".concat(C,"/tripura.json"),mapType:K.STATE},UT:{geoDataFile:"".concat(C,"/uttarakhand.json"),mapType:K.STATE},UP:{geoDataFile:"".concat(C,"/uttarpradesh.json"),mapType:K.STATE},WB:{geoDataFile:"".concat(C,"/westbengal.json"),mapType:K.STATE},AN:{geoDataFile:"".concat(C,"/andamannicobarislands.json"),mapType:K.STATE},CH:{geoDataFile:"".concat(C,"/chandigarh.json"),mapType:K.STATE},DN:{geoDataFile:"".concat(C,"/dnh-and-dd.json"),mapType:K.STATE},DL:{geoDataFile:"".concat(C,"/delhi.json"),mapType:K.STATE},LA:{geoDataFile:"".concat(C,"/ladakh.json"),mapType:K.STATE},LD:{geoDataFile:"".concat(C,"/lakshadweep.json"),mapType:K.STATE},PY:{geoDataFile:"".concat(C,"/puducherry.json"),mapType:K.STATE},TT:{geoDataFile:"".concat(C,"/india.json"),mapType:K.COUNTRY}},B=50,L=Object(t.a)({AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chhattisgarh",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UT:"Uttarakhand",UP:"Uttar Pradesh",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",DN:"Dadra and Nagar Haveli and Daman and Diu",DL:"Delhi",JK:"Jammu and Kashmir",LA:"Ladakh",LD:"Lakshadweep",PY:"Puducherry",TT:"India"},D,"Unassigned"),U=[],R={};Object.keys(L).map((function(e,a){return R[L[e]]=e,U.push({code:e,name:L[e]}),null}));var H=R,z=U},72:function(e,a,n){"use strict";n.r(a);var t=n(20),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var r=n(32),c=n(23),l=n(53),d=n(54),s=n(80);c.a.use(d.a).use(l.a).use(s.e).init({debug:Object(r.j)()&&false,keySeparator:!1,returnEmptyString:!1,fallbackLng:"english",load:"languageOnly",backend:{loadPath:"https://api.covid19india.org/locales/locale_{{lng}}.json",addPath:"http://localhost:9999/"},saveMissing:Object(r.j)()&&false,interpolation:{escapeValue:!1}});c.a;var u=n(1),p=n(46),m=n(40),f=Object(u.lazy)((function(){return Promise.all([n.e(16),n.e(22)]).then(n.bind(null,264))})),h=document.getElementById("root"),T=function(){return Object(p.render)(Object(t.jsx)(u.Suspense,{fallback:Object(t.jsx)("div",{}),children:Object(t.jsx)(m.a,{children:Object(t.jsx)(f,{})})}),h)};window.requestIdleCallback&&window.IntersectionObserver?T():function(e,a){var n=document.createElement("script");n.src=e,n.onload=function(){a()},n.onerror=function(){a(new Error("Failed to load script "+e))},document.head.appendChild(n)}("https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=requestIdleCallback%2CIntersectionObserver",T),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){return setTimeout((function(){var a="".concat("","/service-worker.js");o?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):i(a,e)}),3e3)}))}}()}},[[72,13,14]]]);
//# sourceMappingURL=main.ec5d990c1.chunk.js.map
