(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[17],{118:function(t,e,n){"use strict";var r=n(2),i=n(95),a=i.a?r.useLayoutEffect:r.useEffect,u={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};e.a=i.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(r.useState)(null),e=t[0],n=t[1],i=Object(r.useState)(u),o=i[0],c=i[1],l=Object(r.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,n=e.x,r=e.y,i=e.width,a=e.height,u=e.top,o=e.left,l=e.bottom,s=e.right;c({x:n,y:r,width:i,height:a,top:u,left:o,bottom:l,right:s})}}))}),[]);return a((function(){if(e)return l.observe(e),function(){l.disconnect()}}),[e]),[n,o]}:function(){return[i.b,u]}},123:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(25);function i(t,e){var n;if(void 0===e){var i,a=Object(r.a)(t);try{for(a.s();!(i=a.n()).done;){var u=i.value;null!=u&&(n<u||void 0===n&&u>=u)&&(n=u)}}catch(f){a.e(f)}finally{a.f()}}else{var o,c=-1,l=Object(r.a)(t);try{for(l.s();!(o=l.n()).done;){var s=o.value;null!=(s=e(s,++c,t))&&(n<s||void 0===n&&s>=s)&&(n=s)}}catch(f){l.e(f)}finally{l.f()}}return n}},128:function(t,e,n){"use strict";e.a=function(t){for(var e;e=t.sourceEvent;)t=e;return t}},148:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return h}));var r=function(t){return t},i=1e-6;function a(t){return"translate("+t+",0)"}function u(t){return"translate(0,"+t+")"}function o(t){return function(e){return+t(e)}}function c(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),function(n){return+t(n)+e}}function l(){return!this.__axis}function s(t,e){var n=[],s=null,f=null,h=6,d=6,v=3,y="undefined"!==typeof window&&window.devicePixelRatio>1?0:.5,p=1===t||4===t?-1:1,b=4===t||2===t?"x":"y",m=1===t||3===t?a:u;function g(a){var u=null==s?e.ticks?e.ticks.apply(e,n):e.domain():s,g=null==f?e.tickFormat?e.tickFormat.apply(e,n):r:f,w=Math.max(h,0)+v,O=e.range(),j=+O[0]+y,x=+O[O.length-1]+y,k=(e.bandwidth?c:o)(e.copy(),y),_=a.selection?a.selection():a,A=_.selectAll(".domain").data([null]),z=_.selectAll(".tick").data(u,e).order(),S=z.exit(),M=z.enter().append("g").attr("class","tick"),E=z.select("line"),V=z.select("text");A=A.merge(A.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),z=z.merge(M),E=E.merge(M.append("line").attr("stroke","currentColor").attr(b+"2",p*h)),V=V.merge(M.append("text").attr("fill","currentColor").attr(b,p*w).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),a!==_&&(A=A.transition(a),z=z.transition(a),E=E.transition(a),V=V.transition(a),S=S.transition(a).attr("opacity",i).attr("transform",(function(t){return isFinite(t=k(t))?m(t+y):this.getAttribute("transform")})),M.attr("opacity",i).attr("transform",(function(t){var e=this.parentNode.__axis;return m((e&&isFinite(e=e(t))?e:k(t))+y)}))),S.remove(),A.attr("d",4===t||2===t?d?"M"+p*d+","+j+"H"+y+"V"+x+"H"+p*d:"M"+y+","+j+"V"+x:d?"M"+j+","+p*d+"V"+y+"H"+x+"V"+p*d:"M"+j+","+y+"H"+x),z.attr("opacity",1).attr("transform",(function(t){return m(k(t)+y)})),E.attr(b+"2",p*h),V.attr(b,p*w).text(g),_.filter(l).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),_.each((function(){this.__axis=k}))}return g.scale=function(t){return arguments.length?(e=t,g):e},g.ticks=function(){return n=Array.from(arguments),g},g.tickArguments=function(t){return arguments.length?(n=null==t?[]:Array.from(t),g):n.slice()},g.tickValues=function(t){return arguments.length?(s=null==t?null:Array.from(t),g):s&&s.slice()},g.tickFormat=function(t){return arguments.length?(f=t,g):f},g.tickSize=function(t){return arguments.length?(h=d=+t,g):h},g.tickSizeInner=function(t){return arguments.length?(h=+t,g):h},g.tickSizeOuter=function(t){return arguments.length?(d=+t,g):d},g.tickPadding=function(t){return arguments.length?(v=+t,g):v},g.offset=function(t){return arguments.length?(y=+t,g):y},g}function f(t){return s(2,t)}function h(t){return s(3,t)}},175:function(t,e,n){"use strict";var r=n(128);e.a=function(t,e){if(t=Object(r.a)(t),void 0===e&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,[(i=i.matrixTransform(e.getScreenCTM().inverse())).x,i.y]}if(e.getBoundingClientRect){var a=e.getBoundingClientRect();return[t.clientX-a.left-e.clientLeft,t.clientY-a.top-e.clientTop]}}return[t.pageX,t.pageY]}},222:function(t,e,n){"use strict";var r=n(260),i=n(127),a=n(126),u=n(143),o=n(169),c=n(144);e.a=function(t,e,n){var l=null,s=Object(a.a)(!0),f=null,h=u.a,d=null;function v(a){var u,o,c,v,y,p=(a=Object(i.a)(a)).length,b=!1,m=new Array(p),g=new Array(p);for(null==f&&(d=h(y=Object(r.a)())),u=0;u<=p;++u){if(!(u<p&&s(v=a[u],u,a))===b)if(b=!b)o=u,d.areaStart(),d.lineStart();else{for(d.lineEnd(),d.lineStart(),c=u-1;c>=o;--c)d.point(m[c],g[c]);d.lineEnd(),d.areaEnd()}b&&(m[u]=+t(v,u,a),g[u]=+e(v,u,a),d.point(l?+l(v,u,a):m[u],n?+n(v,u,a):g[u]))}if(y)return d=null,y+""||null}function y(){return Object(o.a)().defined(s).curve(h).context(f)}return t="function"===typeof t?t:void 0===t?c.a:Object(a.a)(+t),e="function"===typeof e?e:void 0===e?Object(a.a)(0):Object(a.a)(+e),n="function"===typeof n?n:void 0===n?c.b:Object(a.a)(+n),v.x=function(e){return arguments.length?(t="function"===typeof e?e:Object(a.a)(+e),l=null,v):t},v.x0=function(e){return arguments.length?(t="function"===typeof e?e:Object(a.a)(+e),v):t},v.x1=function(t){return arguments.length?(l=null==t?null:"function"===typeof t?t:Object(a.a)(+t),v):l},v.y=function(t){return arguments.length?(e="function"===typeof t?t:Object(a.a)(+t),n=null,v):e},v.y0=function(t){return arguments.length?(e="function"===typeof t?t:Object(a.a)(+t),v):e},v.y1=function(t){return arguments.length?(n=null==t?null:"function"===typeof t?t:Object(a.a)(+t),v):n},v.lineX0=v.lineY0=function(){return y().x(t).y(e)},v.lineY1=function(){return y().x(t).y(n)},v.lineX1=function(){return y().x(l).y(e)},v.defined=function(t){return arguments.length?(s="function"===typeof t?t:Object(a.a)(!!t),v):s},v.curve=function(t){return arguments.length?(h=t,null!=f&&(d=h(f)),v):h},v.context=function(t){return arguments.length?(null==t?f=d=null:d=h(f=t),v):f},v}},227:function(t,e,n){"use strict";n.d(e,"b",(function(){return B})),n.d(e,"a",(function(){return Y}));var r=n(25),i=n(256),a=n(259),u={capture:!0,passive:!1};var o=function(t){t.preventDefault(),t.stopImmediatePropagation()},c=function(t){var e=t.document.documentElement,n=Object(a.a)(t).on("dragstart.drag",o,u);"onselectstart"in e?n.on("selectstart.drag",o,u):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")};function l(t,e){var n=t.document.documentElement,r=Object(a.a)(t).on("dragstart.drag",null);e&&(r.on("click.drag",o,u),setTimeout((function(){r.on("click.drag",null)}),0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var s=n(285),f=n(175),h=n(104),d=function(t){return function(){return t}};function v(t,e){var n=e.sourceEvent,r=e.target,i=e.selection,a=e.mode,u=e.dispatch;Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},selection:{value:i,enumerable:!0,configurable:!0},mode:{value:a,enumerable:!0,configurable:!0},_:{value:u}})}function y(t){t.stopImmediatePropagation()}var p=function(t){t.preventDefault(),t.stopImmediatePropagation()},b={name:"drag"},m={name:"space"},g={name:"handle"},w={name:"center"},O=Math.abs,j=Math.max,x=Math.min;function k(t){return[+t[0],+t[1]]}function _(t){return[k(t[0]),k(t[1])]}var A={name:"x",handles:["w","e"].map(P),input:function(t,e){return null==t?null:[[+t[0],e[0][1]],[+t[1],e[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},z={name:"y",handles:["n","s"].map(P),input:function(t,e){return null==t?null:[[e[0][0],+t[0]],[e[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},S=(["n","w","e","s","nw","ne","sw","se"].map(P),{overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"}),M={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},E={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},V={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},T={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1};function P(t){return{type:t}}function C(t){return!t.ctrlKey&&!t.button}function R(){var t=this.ownerSVGElement||this;return t.hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function F(){return navigator.maxTouchPoints||"ontouchstart"in this}function K(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function X(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function Y(t){var e=t.__brush;return e?e.dim.output(e.selection):null}function B(){return G(A)}function G(t){var e,n=R,u=C,o=F,k=!0,Y=Object(i.a)("start","brush","end"),B=6;function G(e){var n=e.property("__brush",L).selectAll(".overlay").data([P("overlay")]);n.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",S.overlay).merge(n).each((function(){var t=K(this).extent;Object(a.a)(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])})),e.selectAll(".selection").data([P("selection")]).enter().append("rect").attr("class","selection").attr("cursor",S.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var r=e.selectAll(".handle").data(t.handles,(function(t){return t.type}));r.exit().remove(),r.enter().append("rect").attr("class",(function(t){return"handle handle--"+t.type})).attr("cursor",(function(t){return S[t.type]})),e.each(H).attr("fill","none").attr("pointer-events","all").on("mousedown.brush",U).filter(o).on("touchstart.brush",U).on("touchmove.brush",D).on("touchend.brush touchcancel.brush",J).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function H(){var t=Object(a.a)(this),e=K(this).selection;e?(t.selectAll(".selection").style("display",null).attr("x",e[0][0]).attr("y",e[0][1]).attr("width",e[1][0]-e[0][0]).attr("height",e[1][1]-e[0][1]),t.selectAll(".handle").style("display",null).attr("x",(function(t){return"e"===t.type[t.type.length-1]?e[1][0]-B/2:e[0][0]-B/2})).attr("y",(function(t){return"s"===t.type[0]?e[1][1]-B/2:e[0][1]-B/2})).attr("width",(function(t){return"n"===t.type||"s"===t.type?e[1][0]-e[0][0]+B:B})).attr("height",(function(t){return"e"===t.type||"w"===t.type?e[1][1]-e[0][1]+B:B}))):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function I(t,e,n){var r=t.__brush.emitter;return!r||n&&r.clean?new N(t,e,n):r}function N(t,e,n){this.that=t,this.args=e,this.state=t.__brush,this.active=0,this.clean=n}function U(n){if((!e||n.touches)&&u.apply(this,arguments)){var i,o,s,d,v,_,P,C,R,F,Y,B=this,G=n.target.__data__.type,N="selection"===(k&&n.metaKey?G="overlay":G)?b:k&&n.altKey?w:g,U=t===z?null:V[G],D=t===A?null:T[G],J=K(B),L=J.extent,q=J.selection,Q=L[0][0],W=L[0][1],Z=L[1][0],$=L[1][1],tt=0,et=0,nt=U&&D&&k&&n.shiftKey,rt=Array.from(n.touches||[n],(function(t){var e=t.identifier;return(t=Object(f.a)(t,B)).point0=t.slice(),t.identifier=e,t}));Object(h.a)(B);var it=I(B,arguments,!0).beforestart();if("overlay"===G){q&&(R=!0);var at=[rt[0],rt[1]||rt[0]];J.selection=q=[[i=t===z?Q:x(at[0][0],at[1][0]),s=t===A?W:x(at[0][1],at[1][1])],[v=t===z?Z:j(at[0][0],at[1][0]),P=t===A?$:j(at[0][1],at[1][1])]],rt.length>1&&st(n)}else i=q[0][0],s=q[0][1],v=q[1][0],P=q[1][1];o=i,d=s,_=v,C=P;var ut=Object(a.a)(B).attr("pointer-events","none"),ot=ut.selectAll(".overlay").attr("cursor",S[G]);if(n.touches)it.moved=lt,it.ended=ft;else{var ct=Object(a.a)(n.view).on("mousemove.brush",lt,!0).on("mouseup.brush",ft,!0);k&&ct.on("keydown.brush",ht,!0).on("keyup.brush",dt,!0),c(n.view)}H.call(B),it.start(n,N.name)}function lt(t){var e,n=Object(r.a)(t.changedTouches||[t]);try{for(n.s();!(e=n.n()).done;){var i,a=e.value,u=Object(r.a)(rt);try{for(u.s();!(i=u.n()).done;){var o=i.value;o.identifier===a.identifier&&(o.cur=Object(f.a)(a,B))}}catch(d){u.e(d)}finally{u.f()}}}catch(d){n.e(d)}finally{n.f()}if(nt&&!F&&!Y&&1===rt.length){var c=rt[0];O(c.cur[0]-c[0])>O(c.cur[1]-c[1])?Y=!0:F=!0}var l,s=Object(r.a)(rt);try{for(s.s();!(l=s.n()).done;){var h=l.value;h.cur&&(h[0]=h.cur[0],h[1]=h.cur[1])}}catch(d){s.e(d)}finally{s.f()}R=!0,p(t),st(t)}function st(t){var e,n=rt[0],r=n.point0;switch(tt=n[0]-r[0],et=n[1]-r[1],N){case m:case b:U&&(tt=j(Q-i,x(Z-v,tt)),o=i+tt,_=v+tt),D&&(et=j(W-s,x($-P,et)),d=s+et,C=P+et);break;case g:rt[1]?(U&&(o=j(Q,x(Z,rt[0][0])),_=j(Q,x(Z,rt[1][0])),U=1),D&&(d=j(W,x($,rt[0][1])),C=j(W,x($,rt[1][1])),D=1)):(U<0?(tt=j(Q-i,x(Z-i,tt)),o=i+tt,_=v):U>0&&(tt=j(Q-v,x(Z-v,tt)),o=i,_=v+tt),D<0?(et=j(W-s,x($-s,et)),d=s+et,C=P):D>0&&(et=j(W-P,x($-P,et)),d=s,C=P+et));break;case w:U&&(o=j(Q,x(Z,i-tt*U)),_=j(Q,x(Z,v+tt*U))),D&&(d=j(W,x($,s-et*D)),C=j(W,x($,P+et*D)))}_<o&&(U*=-1,e=i,i=v,v=e,e=o,o=_,_=e,G in M&&ot.attr("cursor",S[G=M[G]])),C<d&&(D*=-1,e=s,s=P,P=e,e=d,d=C,C=e,G in E&&ot.attr("cursor",S[G=E[G]])),J.selection&&(q=J.selection),F&&(o=q[0][0],_=q[1][0]),Y&&(d=q[0][1],C=q[1][1]),q[0][0]===o&&q[0][1]===d&&q[1][0]===_&&q[1][1]===C||(J.selection=[[o,d],[_,C]],H.call(B),it.brush(t,N.name))}function ft(t){if(y(t),t.touches){if(t.touches.length)return;e&&clearTimeout(e),e=setTimeout((function(){e=null}),500)}else l(t.view,R),ct.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);ut.attr("pointer-events","all"),ot.attr("cursor",S.overlay),J.selection&&(q=J.selection),X(q)&&(J.selection=null,H.call(B)),it.end(t,N.name)}function ht(t){switch(t.keyCode){case 16:nt=U&&D;break;case 18:N===g&&(U&&(v=_-tt*U,i=o+tt*U),D&&(P=C-et*D,s=d+et*D),N=w,st(t));break;case 32:N!==g&&N!==w||(U<0?v=_-tt:U>0&&(i=o-tt),D<0?P=C-et:D>0&&(s=d-et),N=m,ot.attr("cursor",S.selection),st(t));break;default:return}p(t)}function dt(t){switch(t.keyCode){case 16:nt&&(F=Y=nt=!1,st(t));break;case 18:N===w&&(U<0?v=_:U>0&&(i=o),D<0?P=C:D>0&&(s=d),N=g,st(t));break;case 32:N===m&&(t.altKey?(U&&(v=_-tt*U,i=o+tt*U),D&&(P=C-et*D,s=d+et*D),N=w):(U<0?v=_:U>0&&(i=o),D<0?P=C:D>0&&(s=d),N=g),ot.attr("cursor",S[G]),st(t));break;default:return}p(t)}}function D(t){I(this,arguments).moved(t)}function J(t){I(this,arguments).ended(t)}function L(){var e=this.__brush||{selection:null};return e.extent=_(n.apply(this,arguments)),e.dim=t,e}return G.move=function(e,n,r){e.tween?e.on("start.brush",(function(t){I(this,arguments).beforestart().start(t)})).on("interrupt.brush end.brush",(function(t){I(this,arguments).end(t)})).tween("brush",(function(){var e=this,r=e.__brush,i=I(e,arguments),a=r.selection,u=t.input("function"===typeof n?n.apply(this,arguments):n,r.extent),o=Object(s.a)(a,u);function c(t){r.selection=1===t&&null===u?null:o(t),H.call(e),i.brush()}return null!==a&&null!==u?c:c(1)})):e.each((function(){var e=this,i=arguments,a=e.__brush,u=t.input("function"===typeof n?n.apply(e,i):n,a.extent),o=I(e,i).beforestart();Object(h.a)(e),a.selection=null===u?null:u,H.call(e),o.start(r).brush(r).end(r)}))},G.clear=function(t,e){G.move(t,null,e)},N.prototype={beforestart:function(){return 1===++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(t,e){return this.starting?(this.starting=!1,this.emit("start",t,e)):this.emit("brush",t),this},brush:function(t,e){return this.emit("brush",t,e),this},end:function(t,e){return 0===--this.active&&(delete this.state.emitter,this.emit("end",t,e)),this},emit:function(e,n,r){var i=Object(a.a)(this.that).datum();Y.call(e,this.that,new v(e,{sourceEvent:n,target:G,selection:t.output(this.state.selection),mode:r,dispatch:Y}),i)}},G.extent=function(t){return arguments.length?(n="function"===typeof t?t:d(_(t)),G):n},G.filter=function(t){return arguments.length?(u="function"===typeof t?t:d(!!t),G):u},G.touchable=function(t){return arguments.length?(o="function"===typeof t?t:d(!!t),G):o},G.handleSize=function(t){return arguments.length?(B=+t,G):B},G.keyModifiers=function(t){return arguments.length?(k=!!t,G):k},G.on=function(){var t=Y.on.apply(Y,arguments);return t===Y?G:t},G}},274:function(t,e,n){"use strict";var r=n(175),i=n(128);e.a=function(t,e){return t.target&&(t=Object(i.a)(t),void 0===e&&(e=t.currentTarget),t=t.touches||[t]),Array.from(t,(function(t){return Object(r.a)(t,e)}))}},291:function(t,e,n){"use strict";var r=n(25),i=n(127),a=n(126),u=function(t,e){if((i=t.length)>1)for(var n,r,i,a=1,u=t[e[0]],o=u.length;a<i;++a)for(r=u,u=t[e[a]],n=0;n<o;++n)u[n][1]+=u[n][0]=isNaN(r[n][1])?r[n][0]:r[n][1]},o=function(t){for(var e=t.length,n=new Array(e);--e>=0;)n[e]=e;return n};function c(t,e){return t[e]}function l(t){var e=[];return e.key=t,e}e.a=function(){var t=Object(a.a)([]),e=o,n=u,s=c;function f(a){var u,o,c,f=Array.from(t.apply(this,arguments),l),h=f.length,d=-1,v=Object(r.a)(a);try{for(v.s();!(c=v.n()).done;){var y=c.value;for(u=0,++d;u<h;++u)(f[u][d]=[0,+s(y,f[u].key,d,a)]).data=y}}catch(p){v.e(p)}finally{v.f()}for(u=0,o=Object(i.a)(e(f));u<h;++u)f[o[u]].index=u;return n(f,o),f}return f.keys=function(e){return arguments.length?(t="function"===typeof e?e:Object(a.a)(Array.from(e)),f):t},f.value=function(t){return arguments.length?(s="function"===typeof t?t:Object(a.a)(+t),f):s},f.order=function(t){return arguments.length?(e=null==t?o:"function"===typeof t?t:Object(a.a)(Array.from(t)),f):e},f.offset=function(t){return arguments.length?(n=null==t?u:t,f):n},f}}}]);
//# sourceMappingURL=17.3763a619.chunk.js.map
