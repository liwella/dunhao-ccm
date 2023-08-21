import{cK as q,cg as R,F as D,ck as z,cL as W}from"./index-e20992e7.js";let A=[];const $=new WeakMap;function X(){A.forEach(e=>e(...$.get(e))),A=[]}function Ge(e,...t){$.set(e,t),!A.includes(e)&&A.push(e)===1&&requestAnimationFrame(X)}function Te(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}const{c:Ie}=q(),Oe="vueuc-style";var V=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Y=/^\w*$/;function B(e,t){if(R(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||D(e)?!0:Y.test(e)||!V.test(e)||t!=null&&e in Object(t)}var H="Expected a function";function I(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(H);var n=function(){var r=arguments,s=t?t.apply(this,r):r[0],o=n.cache;if(o.has(s))return o.get(s);var i=e.apply(this,r);return n.cache=o.set(s,i)||o,i};return n.cache=new(I.Cache||z),n}I.Cache=z;var J=500;function Q(e){var t=I(e,function(r){return n.size===J&&n.clear(),r}),n=t.cache;return t}var j=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/\\(\\)?/g,te=Q(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(j,function(n,r,s,o){t.push(s?o.replace(ee,"$1"):r||n)}),t});const ne=te;function re(e,t){return R(e)?e:B(e,t)?[e]:ne(W(e))}var ie=1/0;function se(e){if(typeof e=="string"||D(e))return e;var t=e+"";return t=="0"&&1/e==-ie?"-0":t}function ae(e,t){t=re(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[se(t[n++])];return n&&n==r?e:void 0}function Me(e,t,n){var r=e==null?void 0:ae(e,t);return r===void 0?n:r}function _(e){return Array.isArray(e)?e:[e]}const T={STOP:"STOP"};function U(e,t){const n=t(e);e.children!==void 0&&n!==T.STOP&&e.children.forEach(r=>U(r,t))}function ue(e,t={}){const{preserveGroup:n=!1}=t,r=[],s=n?i=>{i.isLeaf||(r.push(i.key),o(i.children))}:i=>{i.isLeaf||(i.isGroup||r.push(i.key),o(i.children))};function o(i){i.forEach(s)}return o(e),r}function oe(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function ce(e){return e.children}function le(e){return e.key}function fe(){return!1}function de(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function he(e){return e.disabled===!0}function ye(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function x(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function L(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function ge(e,t){const n=new Set(e);return t.forEach(r=>{n.has(r)||n.add(r)}),Array.from(n)}function pe(e,t){const n=new Set(e);return t.forEach(r=>{n.has(r)&&n.delete(r)}),Array.from(n)}function me(e){return(e==null?void 0:e.type)==="group"}function _e(e){const t=new Map;return e.forEach((n,r)=>{t.set(n.key,r)}),n=>{var r;return(r=t.get(n))!==null&&r!==void 0?r:null}}class ke extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function ve(e,t,n,r){return b(t.concat(e),n,r,!1)}function Ce(e,t){const n=new Set;return e.forEach(r=>{const s=t.treeNodeMap.get(r);if(s!==void 0){let o=s.parent;for(;o!==null&&!(o.disabled||n.has(o.key));)n.add(o.key),o=o.parent}}),n}function Ke(e,t,n,r){const s=b(t,n,r,!1),o=b(e,n,r,!0),i=Ce(e,n),f=[];return s.forEach(d=>{(o.has(d)||i.has(d))&&f.push(d)}),f.forEach(d=>s.delete(d)),s}function G(e,t){const{checkedKeys:n,keysToCheck:r,keysToUncheck:s,indeterminateKeys:o,cascade:i,leafOnly:f,checkStrategy:d,allowNotLoaded:c}=e;if(!i)return r!==void 0?{checkedKeys:ge(n,r),indeterminateKeys:Array.from(o)}:s!==void 0?{checkedKeys:pe(n,s),indeterminateKeys:Array.from(o)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(o)};const{levelTreeNodeMap:h}=t;let l;s!==void 0?l=Ke(s,n,t,c):r!==void 0?l=ve(r,n,t,c):l=b(n,t,c,!1);const k=d==="parent",w=d==="child"||f,g=l,S=new Set,E=Math.max.apply(null,Array.from(h.keys()));for(let N=E;N>=0;N-=1){const P=N===0,K=h.get(N);for(const a of K){if(a.isLeaf)continue;const{key:u,shallowLoaded:p}=a;if(w&&p&&a.children.forEach(y=>{!y.disabled&&!y.isLeaf&&y.shallowLoaded&&g.has(y.key)&&g.delete(y.key)}),a.disabled||!p)continue;let v=!0,m=!1,C=!0;for(const y of a.children){const M=y.key;if(!y.disabled){if(C&&(C=!1),g.has(M))m=!0;else if(S.has(M)){m=!0,v=!1;break}else if(v=!1,m)break}}v&&!C?(k&&a.children.forEach(y=>{!y.disabled&&g.has(y.key)&&g.delete(y.key)}),g.add(u)):m&&S.add(u),P&&w&&g.has(u)&&g.delete(u)}}return{checkedKeys:Array.from(g),indeterminateKeys:Array.from(S)}}function b(e,t,n,r){const{treeNodeMap:s,getChildren:o}=t,i=new Set,f=new Set(e);return e.forEach(d=>{const c=s.get(d);c!==void 0&&U(c,h=>{if(h.disabled)return T.STOP;const{key:l}=h;if(!i.has(l)&&(i.add(l),f.add(l),ye(h.rawNode,o))){if(r)return T.STOP;if(!n)throw new ke}})}),f}function Ne(e,{includeGroup:t=!1,includeSelf:n=!0},r){var s;const o=r.treeNodeMap;let i=e==null?null:(s=o.get(e))!==null&&s!==void 0?s:null;const f={keyPath:[],treeNodePath:[],treeNode:i};if(i!=null&&i.ignored)return f.treeNode=null,f;for(;i;)!i.ignored&&(t||!i.isGroup)&&f.treeNodePath.push(i),i=i.parent;return f.treeNodePath.reverse(),n||f.treeNodePath.pop(),f.keyPath=f.treeNodePath.map(d=>d.key),f}function Se(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function we(e,t){const n=e.siblings,r=n.length,{index:s}=e;return t?n[(s+1)%r]:s===n.length-1?null:n[s+1]}function F(e,t,{loop:n=!1,includeDisabled:r=!1}={}){const s=t==="prev"?Ae:we,o={reverse:t==="prev"};let i=!1,f=null;function d(c){if(c!==null){if(c===e){if(!i)i=!0;else if(!e.disabled&&!e.isGroup){f=e;return}}else if((!c.disabled||r)&&!c.ignored&&!c.isGroup){f=c;return}if(c.isGroup){const h=O(c,o);h!==null?f=h:d(s(c,n))}else{const h=s(c,!1);if(h!==null)d(h);else{const l=be(c);l!=null&&l.isGroup?d(s(l,n)):n&&d(s(c,!0))}}}}return d(e),f}function Ae(e,t){const n=e.siblings,r=n.length,{index:s}=e;return t?n[(s-1+r)%r]:s===0?null:n[s-1]}function be(e){return e.parent}function O(e,t={}){const{reverse:n=!1}=t,{children:r}=e;if(r){const{length:s}=r,o=n?s-1:0,i=n?-1:s,f=n?-1:1;for(let d=o;d!==i;d+=f){const c=r[d];if(!c.disabled&&!c.ignored)if(c.isGroup){const h=O(c,t);if(h!==null)return h}else return c}}return null}const Ee={getChild(){return this.ignored?null:O(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return F(this,"next",e)},getPrev(e={}){return F(this,"prev",e)}};function Pe(e,t){const n=t?new Set(t):void 0,r=[];function s(o){o.forEach(i=>{r.push(i),!(i.isLeaf||!i.children||i.ignored)&&(i.isGroup||n===void 0||n.has(i.key))&&s(i.children)})}return s(e),r}function xe(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function Z(e,t,n,r,s,o=null,i=0){const f=[];return e.forEach((d,c)=>{var h;const l=Object.create(r);if(l.rawNode=d,l.siblings=f,l.level=i,l.index=c,l.isFirstChild=c===0,l.isLastChild=c+1===e.length,l.parent=o,!l.ignored){const k=s(d);Array.isArray(k)&&(l.children=Z(k,t,n,r,s,l,i+1))}f.push(l),t.set(l.key,l),n.has(i)||n.set(i,[]),(h=n.get(i))===null||h===void 0||h.push(l)}),f}function Fe(e,t={}){var n;const r=new Map,s=new Map,{getDisabled:o=he,getIgnored:i=fe,getIsGroup:f=me,getKey:d=le}=t,c=(n=t.getChildren)!==null&&n!==void 0?n:ce,h=t.ignoreEmptyChildren?a=>{const u=c(a);return Array.isArray(u)?u.length?u:null:u}:c,l=Object.assign({get key(){return d(this.rawNode)},get disabled(){return o(this.rawNode)},get isGroup(){return f(this.rawNode)},get isLeaf(){return oe(this.rawNode,h)},get shallowLoaded(){return de(this.rawNode,h)},get ignored(){return i(this.rawNode)},contains(a){return xe(this,a)}},Ee),k=Z(e,r,s,l,h);function w(a){if(a==null)return null;const u=r.get(a);return u&&!u.isGroup&&!u.ignored?u:null}function g(a){if(a==null)return null;const u=r.get(a);return u&&!u.ignored?u:null}function S(a,u){const p=g(a);return p?p.getPrev(u):null}function E(a,u){const p=g(a);return p?p.getNext(u):null}function N(a){const u=g(a);return u?u.getParent():null}function P(a){const u=g(a);return u?u.getChild():null}const K={treeNodes:k,treeNodeMap:r,levelTreeNodeMap:s,maxLevel:Math.max(...s.keys()),getChildren:h,getFlattenedNodes(a){return Pe(k,a)},getNode:w,getPrev:S,getNext:E,getParent:N,getChild:P,getFirstAvailableNode(){return Se(k)},getPath(a,u={}){return Ne(a,u,K)},getCheckedKeys(a,u={}){const{cascade:p=!0,leafOnly:v=!1,checkStrategy:m="all",allowNotLoaded:C=!1}=u;return G({checkedKeys:x(a),indeterminateKeys:L(a),cascade:p,leafOnly:v,checkStrategy:m,allowNotLoaded:C},K)},check(a,u,p={}){const{cascade:v=!0,leafOnly:m=!1,checkStrategy:C="all",allowNotLoaded:y=!1}=p;return G({checkedKeys:x(u),indeterminateKeys:L(u),keysToCheck:a==null?[]:_(a),cascade:v,leafOnly:m,checkStrategy:C,allowNotLoaded:y},K)},uncheck(a,u,p={}){const{cascade:v=!0,leafOnly:m=!1,checkStrategy:C="all",allowNotLoaded:y=!1}=p;return G({checkedKeys:x(u),indeterminateKeys:L(u),keysToUncheck:a==null?[]:_(a),cascade:v,leafOnly:m,checkStrategy:C,allowNotLoaded:y},K)},getNonLeafKeys(a={}){return ue(k,a)}};return K}export{Ie as a,Fe as b,Oe as c,_e as d,Ge as e,Pe as f,Me as g,Te as h,re as i,B as j,ae as k,se as t};