import{cZ as m,cD as o,bY as f,cH as p,c_ as l}from"./index-382a7f36.js";let i=[];const h=new WeakMap;function d(){i.forEach(e=>e(...h.get(e))),i=[]}function F(e,...r){h.set(e,r),!i.includes(e)&&i.push(e)===1&&requestAnimationFrame(d)}const{c:R}=m(),$="vueuc-style";var y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,g=/^\w*$/;function C(e,r){if(o(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||f(e)?!0:g.test(e)||!y.test(e)||r!=null&&e in Object(r)}var E="Expected a function";function c(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(E);var n=function(){var t=arguments,s=r?r.apply(this,t):t[0],a=n.cache;if(a.has(s))return a.get(s);var u=e.apply(this,t);return n.cache=a.set(s,u)||a,u};return n.cache=new(c.Cache||p),n}c.Cache=p;var I=500;function M(e){var r=c(e,function(t){return n.size===I&&n.clear(),t}),n=r.cache;return r}var P=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,w=/\\(\\)?/g,N=M(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(P,function(n,t,s,a){r.push(s?a.replace(w,"$1"):t||n)}),r});const T=N;function A(e,r){return o(e)?e:C(e,r)?[e]:T(l(e))}var O=1/0;function _(e){if(typeof e=="string"||f(e))return e;var r=e+"";return r=="0"&&1/e==-O?"-0":r}function x(e,r){r=A(r,e);for(var n=0,t=r.length;e!=null&&n<t;)e=e[_(r[n++])];return n&&n==t?e:void 0}function k(e,r,n){var t=e==null?void 0:x(e,r);return t===void 0?n:t}export{R as a,F as b,$ as c,A as d,x as e,k as g,C as i,_ as t};