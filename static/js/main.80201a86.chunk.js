(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[5],{27:function(a,e,n){"use strict";n.d(e,"e",(function(){return t})),n.d(e,"l",(function(){return o})),n.d(e,"p",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"s",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"k",(function(){return l})),n.d(e,"t",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return p})),n.d(e,"q",(function(){return T})),n.d(e,"r",(function(){return h})),n.d(e,"j",(function(){return g})),n.d(e,"i",(function(){return f})),n.d(e,"h",(function(){return m})),n.d(e,"g",(function(){return j})),n.d(e,"f",(function(){return D})),n.d(e,"o",(function(){return y})),n.d(e,"m",(function(){return w})),n.d(e,"n",(function(){return E}));var t={english:"en-US",hindi:"hi",telugu:"te",kannada:"en-US",gujarati:"gu",marathi:"en-US",tamil:"ta",bengali:"bn",punjabi:"en-US",malayalam:"en-US",odiya:"en-US"},o=["confirmed","active","recovered","deceased"],i=[].concat(o,["tested"]),r=30,c=[].concat(o,["tested"]),d=300,l=20,u="Unknown",s="T00:00:00+05:30",p={confirmed:"#ff073a",active:"#007bff",recovered:"#28a745",deceased:"#6c757d",tested:"#4b1eaa"},T={total:"Cumulative",delta:"Daily"},h={BEGINNING:"Beginning",MONTH:"1 Month",TWO_WEEKS:"2 Weeks"},g={CHOROPLETH:0,BUBBLES:1},f={STATES:0,DISTRICTS:1},m={COUNTRY:0,STATE:1},v="https://www.covid19india.org/mini_maps",j={AP:{geoDataFile:"".concat(v,"/andhrapradesh.json"),mapType:m.STATE},AR:{geoDataFile:"".concat(v,"/arunachalpradesh.json"),mapType:m.STATE},AS:{geoDataFile:"".concat(v,"/assam.json"),mapType:m.STATE},BR:{geoDataFile:"".concat(v,"/bihar.json"),mapType:m.STATE},CT:{name:"Chhattisgarh",geoDataFile:"".concat(v,"/chhattisgarh.json"),mapType:m.STATE},GA:{geoDataFile:"".concat(v,"/goa.json"),mapType:m.STATE},GJ:{geoDataFile:"".concat(v,"/gujarat.json"),mapType:m.STATE},HR:{geoDataFile:"".concat(v,"/haryana.json"),mapType:m.STATE},HP:{geoDataFile:"".concat(v,"/himachalpradesh.json"),mapType:m.STATE},JK:{geoDataFile:"".concat(v,"/jammukashmir.json"),mapType:m.STATE},JH:{geoDataFile:"".concat(v,"/jharkhand.json"),mapType:m.STATE},KA:{geoDataFile:"".concat(v,"/karnataka.json"),mapType:m.STATE},KL:{geoDataFile:"".concat(v,"/kerala.json"),mapType:m.STATE},MP:{geoDataFile:"".concat(v,"/madhyapradesh.json"),mapType:m.STATE},MH:{geoDataFile:"".concat(v,"/maharashtra.json"),mapType:m.STATE},MN:{geoDataFile:"".concat(v,"/manipur.json"),mapType:m.STATE},ML:{geoDataFile:"".concat(v,"/meghalaya.json"),mapType:m.STATE},MZ:{geoDataFile:"".concat(v,"/mizoram.json"),mapType:m.STATE},NL:{geoDataFile:"".concat(v,"/nagaland.json"),mapType:m.STATE},OR:{geoDataFile:"".concat(v,"/odisha.json"),mapType:m.STATE},PB:{geoDataFile:"".concat(v,"/punjab.json"),mapType:m.STATE},RJ:{geoDataFile:"".concat(v,"/rajasthan.json"),mapType:m.STATE},SK:{geoDataFile:"".concat(v,"/sikkim.json"),mapType:m.STATE},TN:{geoDataFile:"".concat(v,"/tamilnadu.json"),mapType:m.STATE},TG:{geoDataFile:"".concat(v,"/telangana.json"),mapType:m.STATE},TR:{geoDataFile:"".concat(v,"/tripura.json"),mapType:m.STATE},UT:{geoDataFile:"".concat(v,"/uttarakhand.json"),mapType:m.STATE},UP:{geoDataFile:"".concat(v,"/uttarpradesh.json"),mapType:m.STATE},WB:{geoDataFile:"".concat(v,"/westbengal.json"),mapType:m.STATE},AN:{name:"Andaman and Nicobar Islands",geoDataFile:"".concat(v,"/andamannicobarislands.json"),mapType:m.STATE},CH:{geoDataFile:"".concat(v,"/chandigarh.json"),mapType:m.STATE},DN:{geoDataFile:"".concat(v,"/dnh-and-dd.json"),mapType:m.STATE},DL:{geoDataFile:"".concat(v,"/delhi.json"),mapType:m.STATE},LA:{geoDataFile:"".concat(v,"/ladakh.json"),mapType:m.STATE},LD:{geoDataFile:"".concat(v,"/lakshadweep.json"),mapType:m.STATE},PY:{geoDataFile:"".concat(v,"/puducherry.json"),mapType:m.STATE},TT:{geoDataFile:"".concat(v,"/india.json"),mapType:m.COUNTRY}},D=50,y={AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chhattisgarh",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UT:"Uttarakhand",UP:"Uttar Pradesh",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",DN:"Dadra and Nagar Haveli and Daman and Diu",DL:"Delhi",JK:"Jammu and Kashmir",LA:"Ladakh",LD:"Lakshadweep",PY:"Puducherry",TT:"India",UN:"Unassigned"},A=[],S={};Object.keys(y).map((function(a,e){return S[y[a]]=a,A.push({code:a,name:y[a]}),null}));var w=S,E=A;new Date(2020,0,1),new Date(2020,3,19),new Date(2020,3,20),new Date(2020,3,26),new Date(2020,3,27),new Date(2020,4,9),new Date(2020,4,10),new Date(2020,4,23),new Date(2020,4,24),new Date(2020,5,4),new Date(2020,5,5),new Date},34:function(a,e,n){"use strict";n.d(e,"k",(function(){return s})),n.d(e,"g",(function(){return p})),n.d(e,"h",(function(){return T})),n.d(e,"i",(function(){return h})),n.d(e,"e",(function(){return g})),n.d(e,"l",(function(){return f})),n.d(e,"d",(function(){return m})),n.d(e,"f",(function(){return j})),n.d(e,"a",(function(){return D})),n.d(e,"b",(function(){return y})),n.d(e,"j",(function(){return A})),n.d(e,"c",(function(){return S}));var t=n(27),o=n(65),i=n(68),r=n(79),c=n(80),d=n(66),l=n(25),u=null,s=function(){return!1},p=function(){return Object(d.a)(new Date,"Asia/Kolkata")},T=function(){return Object(o.a)(p(),{representation:"date"})},h=function(){return Object(o.a)(Object(i.a)(p(),1),{representation:"date"})},g=function(a){return n.e(38).then(n.bind(null,85)).then((function(a){u=a[t.e[l.a.language||window.localStorage.i18nextLng]]})),Object(r.a)(new Date(a),new Date,{locale:u})},f=function(a){return new Date(a+t.d)},m=function(a,e){"string"===typeof a&&a.match(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g)&&(a+=t.d);var n=Object(d.a)(new Date(a),"Asia/Kolkata");return Object(c.a)(n,e,{locale:u})};var v=function(a){return a<1e3?a:a>=1e3&&a<1e6?+(a/1e3).toFixed(1)+"K":a>=1e6&&a<1e9?+(a/1e6).toFixed(1)+"M":a>=1e9&&a<1e12?+(a/1e9).toFixed(1)+"B":a>=1e12?+(a/1e12).toFixed(1)+"T":void 0},j=function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"long";if(isNaN(a))return"-";var n=new Intl.NumberFormat("en-IN",{maximumFractionDigits:2});return"short"===e?v(a):n.format(a)},D=function(a){return"string"!==typeof a?"":a.charAt(0).toUpperCase()+a.slice(1)},y=function(a){if("string"!==typeof a)return"";for(var e=a.toLowerCase().split(" "),n=0;n<e.length;n++)e[n]=D(e[n]);return e.join(" ")},A=function(a,e,n){var t,o,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("active"===n){var r,c,d,l,u=(null===a||void 0===a||null===(r=a[e])||void 0===r?void 0:r.confirmed)||0,s=(null===a||void 0===a||null===(c=a[e])||void 0===c?void 0:c.deceased)||0,p=(null===a||void 0===a||null===(d=a[e])||void 0===d?void 0:d.recovered)||0,T=(null===a||void 0===a||null===(l=a[e])||void 0===l?void 0:l.migrated)||0;o=u-s-p-T}else{var h;o=(null===a||void 0===a||null===(h=a[e])||void 0===h?void 0:h[n])||0}return i?1e6*o/(null===a||void 0===a||null===(t=a.meta)||void 0===t?void 0:t.population)||0:o},S=function(a){return fetch(a).then((function(a){return a.json()}))}},69:function(a,e,n){a.exports=n(78)},78:function(a,e,n){"use strict";n.r(e);var t=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(a,e){navigator.serviceWorker.register(a).then((function(a){a.onupdatefound=function(){var n=a.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(a)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(a)))})}})).catch((function(a){console.error("Error during service worker registration:",a)}))}var i=n(34),r=n(25),c=n(58),d=n(59),l=n(84);r.a.use(d.a).use(c.a).use(l.e).init({debug:Object(i.k)()&&!1,keySeparator:!1,returnEmptyString:!1,fallbackLng:"english",load:"languageOnly",backend:{loadPath:"https://api.covid19india.org/locales/locale_{{lng}}.json",addPath:"http://localhost:9999/"},saveMissing:Object(i.k)()&&!1,interpolation:{escapeValue:!1}});r.a;var u=n(1),s=n.n(u),p=n(47),T=n(41),h=n(49),g=n.n(h),f=(n(67),Object(u.lazy)((function(){return Promise.all([n.e(9),n.e(14)]).then(n.bind(null,256))}))),m=document.getElementById("root");g.a.initializeApp({apiKey:"AIzaSyD-sPsY0Y5jZBGhS9uuLqOWrNVLWvHBPjg",authDomain:"neural-geode-744.firebaseapp.com",databaseURL:"https://neural-geode-744.firebaseio.com",projectId:"neural-geode-744",storageBucket:"neural-geode-744.appspot.com",messagingSenderId:"574497742376",appId:"1:574497742376:web:72264ce0294e3af83fdf1d",measurementId:"G-WG8EGFRMNR"});var v=function(){return Object(p.render)(s.a.createElement(u.Suspense,{fallback:s.a.createElement("div",null)},s.a.createElement(T.a,{basename:"https://corona-covid-19-india.blogspot.com"},s.a.createElement(f,null))),m)};window.requestIdleCallback&&window.IntersectionObserver?v():function(a,e){var n=document.createElement("script");n.src=a,n.onload=function(){e()},n.onerror=function(){e(new Error("Failed to load script "+a))},document.head.appendChild(n)}("https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=requestIdleCallback%2CIntersectionObserver",v),function(a){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){return setTimeout((function(){var e="".concat("https://corona-covid-19-india.blogspot.com","/service-worker.js");t?(!function(a,e){fetch(a,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(a){a.unregister().then((function(){window.location.reload()}))})):o(a,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,a),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(e,a)}),3e3)}))}}()}},[[69,6,7]]]);
//# sourceMappingURL=main.80201a86.chunk.js.map
