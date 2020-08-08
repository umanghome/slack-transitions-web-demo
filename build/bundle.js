var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e){return e&&o(e.destroy)?e.destroy:t}function c(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function d(){return v(" ")}function h(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e,n){t.classList[n?"add":"remove"](e)}let m;function w(t){m=t}function E(){const t=function(){if(!m)throw new Error("Function called outside component initialization");return m}();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);i.slice().forEach(e=>{e.call(t,o)})}}}function $(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}const y=[],x=[],b=[],S=[],L=Promise.resolve();let k=!1;function C(t){b.push(t)}let _=!1;const M=new Set;function j(){if(!_){_=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];w(e),A(e.$$)}for(y.length=0;x.length;)x.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];M.has(e)||(M.add(e),e())}b.length=0}while(y.length);for(;S.length;)S.pop()();k=!1,_=!1,M.clear()}}function A(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const O=new Set;function T(t,e){t&&t.i&&(O.delete(t),t.i(e))}function X(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),(void 0).c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function z(t){t&&t.c()}function H(t,n,r){const{fragment:s,on_mount:c,on_destroy:a,after_update:l}=t.$$;s&&s.m(n,r),C(()=>{const n=c.map(e).filter(o);a?a.push(...n):i(n),t.$$.on_mount=[]}),l.forEach(C)}function P(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(t,e){-1===t.$$.dirty[0]&&(y.push(t),k||(k=!0,L.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,o,r,s,c,a,u=[-1]){const f=m;w(e);const v=o.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u};let h=!1;if(d.ctx=r?r(e,v,(t,n,...i)=>{const o=i.length?i[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&V(e,t)),n}):[],d.update(),h=!0,i(d.before_update),d.fragment=!!s&&s(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(l)}else d.fragment&&d.fragment.c();o.intro&&T(e.$$.fragment),H(e,o.target,o.anchor),j()}w(f)}class q{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}var N=function(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}((function(t){var e=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},n=function(t,n){if(t){"undefined"!=typeof window&&function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}"function"!=typeof window.CustomEvent&&(t.prototype=window.Event.prototype,window.CustomEvent=t)}(),n||(n={}),n=e({},{minHorizontal:10,minVertical:10,deltaHorizontal:3,deltaVertical:5,preventScroll:!1,lockAxis:!0,touch:!0,mouse:!0},n);var i=[],o=!1,r=function(){o=!0},s=function(t){o=!1,a(t)},c=function(t){o&&(t.changedTouches=[{clientX:t.clientX,clientY:t.clientY}],l(t))};n.mouse&&(t.addEventListener("mousedown",r),t.addEventListener("mouseup",s),t.addEventListener("mousemove",c));var a=function(o){var r=Math.abs,s=Math.max,c=Math.min;if(i.length){for(var a="function"==typeof TouchEvent&&o instanceof TouchEvent,l=[],u=[],f={top:!1,right:!1,bottom:!1,left:!1},v=0;v<i.length;v++)l.push(i[v].x),u.push(i[v].y);var d=l[0],h=l[l.length-1],p=u[0],g=u[u.length-1],m={x:[d,h],y:[p,g]};if(1<i.length){var w={detail:e({touch:a,target:o.target},m)},E=new CustomEvent("swiperelease",w);t.dispatchEvent(E)}var $=l[0]-l[l.length-1],y="none";y=0<$?"left":"right";var x=c.apply(Math,l),b=s.apply(Math,l);if(r($)>=n.minHorizontal&&("left"==y?r(x-l[l.length-1])<=n.deltaHorizontal&&(f.left=!0):"right"==y&&(r(b-l[l.length-1])<=n.deltaHorizontal&&(f.right=!0))),y="none",y=0<($=u[0]-u[u.length-1])?"top":"bottom",x=c.apply(Math,u),b=s.apply(Math,u),r($)>=n.minVertical&&("top"==y?r(x-u[u.length-1])<=n.deltaVertical&&(f.top=!0):"bottom"==y&&(r(b-u[u.length-1])<=n.deltaVertical&&(f.bottom=!0))),i=[],f.top||f.right||f.bottom||f.left){n.lockAxis&&((f.left||f.right)&&r(d-h)>r(p-g)?f.top=f.bottom=!1:(f.top||f.bottom)&&r(d-h)<r(p-g)&&(f.left=f.right=!1));var S={detail:e({directions:f,touch:a,target:o.target},m)},L=new CustomEvent("swipe",S);t.dispatchEvent(L)}else{var k=new CustomEvent("swipecancel",{detail:e({touch:a,target:o.target},m)});t.dispatchEvent(k)}}},l=function(e){n.preventScroll&&e.preventDefault();var o=e.changedTouches[0];if(i.push({x:o.clientX,y:o.clientY}),1<i.length){var r={detail:{x:[i[0].x,i[i.length-1].x],y:[i[0].y,i[i.length-1].y],touch:"function"==typeof TouchEvent&&e instanceof TouchEvent,target:e.target}},s=new CustomEvent("swiping",r);t.dispatchEvent(s)}},u=!1;try{var f=Object.defineProperty({},"passive",{get:function(){u={passive:!n.preventScroll}}});window.addEventListener("testPassive",null,f),window.removeEventListener("testPassive",null,f)}catch(t){}return n.touch&&(t.addEventListener("touchmove",l,u),t.addEventListener("touchend",a)),{off:function(){t.removeEventListener("touchmove",l,u),t.removeEventListener("touchend",a),t.removeEventListener("mousedown",r),t.removeEventListener("mouseup",s),t.removeEventListener("mousemove",c)}}}};t.exports=n,t.exports.default=n}));function Y([t,e]){const n=t.timeStamp,i=e.timeStamp-n,o=e.detail.x,[r,s]=o,c=Math.abs(r-s);return{velocity:c/i,percentageWidth:c/event.target.offsetWidth}}function D(t,e){const n=N(t);let i=[];const o={swipe:n=>{const o=i[0];i=[];if(!n.detail.directions[e.direction])return;const{velocity:r,percentageWidth:s}=Y([o,n]);if(r>.1||s>.5){const e=new CustomEvent("flick",{detail:{velocity:r,percentageWidth:s}});t.dispatchEvent(e)}},swiping:t=>{0===i.length&&(i=[t])},swipecancel:t=>{i=[]}};return Object.keys(o).forEach(e=>{t.addEventListener(e,o[e])}),{destroy(){n.off(),Object.keys(o).forEach(e=>{t.removeEventListener(e,o[e])})}}}function B(t,e,n){const i=t.slice();return i[13]=e[n],i}function F(t,e,n){const i=t.slice();return i[13]=e[n],i}function U(e){let n,i,o,r,s,u,g=e[13].name+"";return{c(){n=f("div"),i=v("#"),o=v(g),r=d(),p(n,"class","channel unread svelte-1ix1v76")},m(t,l){a(t,n,l),c(n,i),c(n,o),c(n,r),s||(u=h(n,"click",e[10]),s=!0)},p:t,d(t){t&&l(n),s=!1,u()}}}function G(e){let n,i,o,r,s,u,g=e[13].name+"";return{c(){n=f("div"),i=v("#"),o=v(g),r=d(),p(n,"class","channel svelte-1ix1v76")},m(t,l){a(t,n,l),c(n,i),c(n,o),c(n,r),s||(u=h(n,"click",e[11]),s=!0)},p:t,d(t){t&&l(n),s=!1,u()}}}function I(e){let n,o,r,v,m,w,E,$,y,x,b,S,L,k,C,_=e[4],M=[];for(let t=0;t<_.length;t+=1)M[t]=U(F(e,_,t));let j=e[3],A=[];for(let t=0;t<j.length;t+=1)A[t]=G(B(e,j,t));return{c(){n=f("div"),o=f("div"),r=f("h3"),r.textContent="Unread channels",v=d();for(let t=0;t<M.length;t+=1)M[t].c();m=d(),w=f("div"),E=f("h3"),E.textContent="All channels",$=d();for(let t=0;t<A.length;t+=1)A[t].c();y=d(),x=f("div"),p(r,"class","svelte-1ix1v76"),p(o,"class","channels svelte-1ix1v76"),p(E,"class","svelte-1ix1v76"),p(w,"class","channels svelte-1ix1v76"),p(x,"class","overlay svelte-1ix1v76"),p(x,"style",b=e[1].overlay),p(n,"class","screen svelte-1ix1v76"),p(n,"style",S=e[1].main),g(n,"inactive",!e[0])},m(t,i){a(t,n,i),c(n,o),c(o,r),c(o,v);for(let t=0;t<M.length;t+=1)M[t].m(o,null);c(n,m),c(n,w),c(w,E),c(w,$);for(let t=0;t<A.length;t+=1)A[t].m(w,null);c(n,y),c(n,x),k||(C=[s(L=D.call(null,n,{direction:"left"})),h(n,"flick",e[7]),h(n,"swiping",e[8]),h(n,"swiperelease",e[9])],k=!0)},p(t,[e]){if(20&e){let n;for(_=t[4],n=0;n<_.length;n+=1){const i=F(t,_,n);M[n]?M[n].p(i,e):(M[n]=U(i),M[n].c(),M[n].m(o,null))}for(;n<M.length;n+=1)M[n].d(1);M.length=_.length}if(12&e){let n;for(j=t[3],n=0;n<j.length;n+=1){const i=B(t,j,n);A[n]?A[n].p(i,e):(A[n]=G(i),A[n].c(),A[n].m(w,null))}for(;n<A.length;n+=1)A[n].d(1);A.length=j.length}2&e&&b!==(b=t[1].overlay)&&p(x,"style",b),2&e&&S!==(S=t[1].main)&&p(n,"style",S),1&e&&g(n,"inactive",!t[0])},i:t,o:t,d(t){t&&l(n),u(M,t),u(A,t),k=!1,i(C)}}}function J(t,e,n){const i=E(),o=Array(10).fill(0,0,10).map((t,e)=>({name:"channel_"+(e+1),unread:e<4})),r=o.filter(t=>t.unread);let{channelsSwipingEvent:s}=e,{messagesSwipingEvent:c}=e,{active:a=!1}=e;const l={main:"",overlay:""};let u=l;return t.$set=t=>{"channelsSwipingEvent"in t&&n(5,s=t.channelsSwipingEvent),"messagesSwipingEvent"in t&&n(6,c=t.messagesSwipingEvent),"active"in t&&n(0,a=t.active)},t.$$.update=()=>{96&t.$$.dirty&&n(1,u=function(t,e){if(t){const{detail:e}=t,{x:n}=e;if(!n)return;const i=n[0]-n[1];if(i<0)return;const o=20*i/window.screen.width;return{main:`transform: translateX(-${o}%); transition: none;`,overlay:`opacity: ${o/50}; transition: none;`}}if(e){const{detail:t}=e,{x:n}=t;if(!n)return;const i=n[1]-n[0];if(i<0)return;const o=20*i/window.screen.width;return{main:`transform: translateX(-${20-o}%); transition: none;`,overlay:`opacity: ${.5-o/50}; transition: none;`}}return{main:"",overlay:""}}(s,c)||l)},[a,u,i,o,r,s,c,function(e){$(t,e)},function(e){$(t,e)},function(e){$(t,e)},()=>i("selectchannel"),()=>i("selectchannel")]}class K extends q{constructor(t){super(),W(this,t,J,I,r,{channelsSwipingEvent:5,messagesSwipingEvent:6,active:0})}}function Q(e){let n,o,r,u,v;return{c(){n=f("div"),o=f("h3"),o.textContent="Messages",p(n,"class","screen svelte-16pirh4"),p(n,"style",e[1]),g(n,"inactive",!e[0])},m(t,i){a(t,n,i),c(n,o),u||(v=[s(r=D.call(null,n,{direction:"right"})),h(n,"flick",e[4]),h(n,"swiping",e[5]),h(n,"swiperelease",e[6])],u=!0)},p(t,[e]){2&e&&p(n,"style",t[1]),1&e&&g(n,"inactive",!t[0])},i:t,o:t,d(t){t&&l(n),u=!1,i(v)}}}function R(t,e,n){let{messagesSwipingEvent:i}=e,{channelsSwipingEvent:o}=e,{active:r=!1}=e,s="";return t.$set=t=>{"messagesSwipingEvent"in t&&n(2,i=t.messagesSwipingEvent),"channelsSwipingEvent"in t&&n(3,o=t.channelsSwipingEvent),"active"in t&&n(0,r=t.active)},t.$$.update=()=>{12&t.$$.dirty&&n(1,s=function(t,e){if(t){const{detail:e}=t,{x:n}=e;if(!n)return;const i=n[1]-n[0];if(i<0)return;return`transform: translateX(${100*i/window.screen.width}%); transition: none;`}if(e){const{detail:t}=e,{x:n}=t;if(!n)return;const i=n[0]-n[1];if(i<0)return;return`transform: translateX(${100-100*i/window.screen.width}%); transition: none;`}return""}(i,o)||"")},[r,s,i,o,function(e){$(t,e)},function(e){$(t,e)},function(e){$(t,e)}]}class Z extends q{constructor(t){super(),W(this,t,R,Q,r,{messagesSwipingEvent:2,channelsSwipingEvent:3,active:0})}}function tt(t){let e,n,i,o;return e=new K({props:{channelsSwipingEvent:t[1],messagesSwipingEvent:t[2],active:"channels"===t[0]}}),e.$on("selectchannel",t[5]),e.$on("swiperelease",t[6]),e.$on("swiping",t[7]),e.$on("flick",t[3]),i=new Z({props:{channelsSwipingEvent:t[1],messagesSwipingEvent:t[2],active:"messages"===t[0]}}),i.$on("swiperelease",t[8]),i.$on("swiping",t[9]),i.$on("flick",t[4]),{c(){z(e.$$.fragment),n=d(),z(i.$$.fragment)},m(t,r){H(e,t,r),a(t,n,r),H(i,t,r),o=!0},p(t,[n]){const o={};2&n&&(o.channelsSwipingEvent=t[1]),4&n&&(o.messagesSwipingEvent=t[2]),1&n&&(o.active="channels"===t[0]),e.$set(o);const r={};2&n&&(r.channelsSwipingEvent=t[1]),4&n&&(r.messagesSwipingEvent=t[2]),1&n&&(r.active="messages"===t[0]),i.$set(r)},i(t){o||(T(e.$$.fragment,t),T(i.$$.fragment,t),o=!0)},o(t){X(e.$$.fragment,t),X(i.$$.fragment,t),o=!1},d(t){P(e,t),t&&l(n),P(i,t)}}}function et(t,e,n){let i,o,r="channels";return[r,i,o,function(t){n(0,r="messages")},function(t){n(0,r="channels")},()=>n(0,r="messages"),()=>n(1,i=null),t=>n(1,i=t),()=>n(2,o=null),t=>n(2,o=t)]}return new class extends q{constructor(t){super(),W(this,t,et,tt,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map