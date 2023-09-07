var Ho=Object.defineProperty,Mo=Object.defineProperties;var Oo=Object.getOwnPropertyDescriptors;var ft=Object.getOwnPropertySymbols;var Fo=Object.prototype.hasOwnProperty,jo=Object.prototype.propertyIsEnumerable;var mt=(e,t,o)=>t in e?Ho(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,ht=(e,t)=>{for(var o in t||(t={}))Fo.call(t,o)&&mt(e,o,t[o]);if(ft)for(var o of ft(t))jo.call(t,o)&&mt(e,o,t[o]);return e},vt=(e,t)=>Mo(e,Oo(t));var ze=(e,t,o)=>new Promise((r,a)=>{var n=u=>{try{d(o.next(u))}catch(v){a(v)}},i=u=>{try{d(o.throw(u))}catch(v){a(v)}},d=u=>u.done?r(u.value):Promise.resolve(u.value).then(n,i);d((o=o.apply(e,t)).next())});import{d as X,q as N,bF as Wo,h as m,bY as Do,bZ as Re,b_ as Vo,e as T,a3 as re,a4 as se,a2 as q,U as w,bg as Ko,c as l,b$ as Yo,V as x,a as S,bE as Uo,T as Lt,c0 as Bt,an as Nt,aq as bt,u as be,b as J,aT as Xo,C as Xe,$ as qo,f as ee,g as pe,c1 as Go,ax as Zo,a9 as Et,c2 as Jo,c3 as Qo,a6 as ae,H as ue,ad as en,O as tn,J as te,am as on,c4 as nn,c5 as pt,c6 as Ht,b2 as Mt,N as qe,a5 as G,M as de,ay as ie,P as De,bo as He,bn as Ge,Y as ge,X as rn,c7 as an,a1 as Ve,aD as ln,bf as sn,bk as cn,bp as dn,c8 as un,bt as Me,a7 as Se,aO as gt,bv as xt,ab as Ot,ac as Ft,c9 as fn,i as Ze,p as Pe,o as I,j as W,w as Y,aa as U,aK as ke,l as O,ca as jt,m as Wt,y as ve,n as D,cb as Ae,cc as mn,bV as hn,k as V,cd as vn,ce as bn,D as pn,x as Te,bT as Dt,cf as gn,cg as _t,ch as Je,ci as xn,F as Le,at as _n,ah as yn,cj as Cn,ck as Ke,aJ as wn,ag as zn,cl as Sn,cm as yt}from"./index-382a7f36.js";import{a as Vt,r as le,N as xe}from"./icon-8555249b.js";import{C as $n,_ as Qe}from"./Dropdown-a478282e.js";import{f as ne,u as Ct,d as wt}from"./common-2c1c86b2.js";import{g as Rn,_ as kn}from"./Tag-7f23ddcd.js";import{A as Tn}from"./Add-276e6141.js";import{u as Ye}from"./use-compitable-35473b4d.js";import{f as Oe,u as Ie}from"./use-merged-state-ad7e8082.js";import{o as In,_ as Pn}from"./Popover-1137b60b.js";import{c as An,a as zt}from"./get-0f2e694c.js";import{_ as Ln}from"./logo-97732fe7.js";import{N as Bn}from"./Tooltip-19baa656.js";import{c as Nn}from"./create-d1a5db2f.js";import{_ as En}from"./TheIcon-6dac71d9.js";import{_ as Hn}from"./_plugin-vue_export-helper-c27b6911.js";const Mn=zt(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[zt("&::-webkit-scrollbar",{width:0,height:0})]),On=X({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=N(null);function t(a){!(a.currentTarget.offsetWidth<a.currentTarget.scrollWidth)||a.deltaY===0||(a.currentTarget.scrollLeft+=a.deltaY+a.deltaX,a.preventDefault())}const o=Wo();return Mn.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:An,ssr:o}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...a){var n;(n=e.value)===null||n===void 0||n.scrollTo(...a)}})},render(){return m("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Fn=/\s/;function jn(e){for(var t=e.length;t--&&Fn.test(e.charAt(t)););return t}var Wn=/^\s+/;function Dn(e){return e&&e.slice(0,jn(e)+1).replace(Wn,"")}var St=0/0,Vn=/^[-+]0x[0-9a-f]+$/i,Kn=/^0b[01]+$/i,Yn=/^0o[0-7]+$/i,Un=parseInt;function $t(e){if(typeof e=="number")return e;if(Do(e))return St;if(Re(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Re(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Dn(e);var o=Kn.test(e);return o||Yn.test(e)?Un(e.slice(2),o?2:8):Vn.test(e)?St:+e}var Xn=function(){return Vo.Date.now()};const Fe=Xn;var qn="Expected a function",Gn=Math.max,Zn=Math.min;function Jn(e,t,o){var r,a,n,i,d,u,v=0,_=!1,s=!1,c=!0;if(typeof e!="function")throw new TypeError(qn);t=$t(t)||0,Re(o)&&(_=!!o.leading,s="maxWait"in o,n=s?Gn($t(o.maxWait)||0,t):n,c="trailing"in o?!!o.trailing:c);function f($){var B=r,A=a;return r=a=void 0,v=$,i=e.apply(A,B),i}function b($){return v=$,d=setTimeout(R,t),_?f($):i}function y($){var B=$-u,A=$-v,E=t-B;return s?Zn(E,n-A):E}function C($){var B=$-u,A=$-v;return u===void 0||B>=t||B<0||s&&A>=n}function R(){var $=Fe();if(C($))return M($);d=setTimeout(R,y($))}function M($){return d=void 0,c&&r?f($):(r=a=void 0,i)}function F(){d!==void 0&&clearTimeout(d),v=0,r=u=a=d=void 0}function j(){return d===void 0?i:M(Fe())}function k(){var $=Fe(),B=C($);if(r=arguments,a=this,u=$,B){if(d===void 0)return b(u);if(s)return clearTimeout(d),d=setTimeout(R,t),f(u)}return d===void 0&&(d=setTimeout(R,t)),i}return k.cancel=F,k.flush=j,k}var Qn="Expected a function";function je(e,t,o){var r=!0,a=!0;if(typeof e!="function")throw new TypeError(Qn);return Re(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),Jn(e,t,{leading:r,maxWait:t,trailing:a})}const er=X({name:"ChevronDownFilled",render(){return m("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Rt=X({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const t=N(null),o=N(e.value),r=N(e.value),a=N("up"),n=N(!1),i=T(()=>n.value?`${e.clsPrefix}-base-slot-machine-current-number--${a.value}-scroll`:null),d=T(()=>n.value?`${e.clsPrefix}-base-slot-machine-old-number--${a.value}-scroll`:null);re(q(e,"value"),(_,s)=>{o.value=s,r.value=_,se(u)});function u(){const _=e.newOriginalNumber,s=e.oldOriginalNumber;s===void 0||_===void 0||(_>s?v("up"):s>_&&v("down"))}function v(_){a.value=_,n.value=!1,se(()=>{var s;(s=t.value)===null||s===void 0||s.offsetWidth,n.value=!0})}return()=>{const{clsPrefix:_}=e;return m("span",{ref:t,class:`${_}-base-slot-machine-number`},o.value!==null?m("span",{class:[`${_}-base-slot-machine-old-number ${_}-base-slot-machine-old-number--top`,d.value]},o.value):null,m("span",{class:[`${_}-base-slot-machine-current-number`,i.value]},m("span",{ref:"numberWrapper",class:[`${_}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${_}-base-slot-machine-current-number__inner--not-number`]},r.value)),o.value!==null?m("span",{class:[`${_}-base-slot-machine-old-number ${_}-base-slot-machine-old-number--bottom`,d.value]},o.value):null)}}}),{cubicBezierEaseOut:he}=Ko;function tr({duration:e=".2s"}={}){return[w("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${he},
 max-width ${e} ${he},
 transform ${e} ${he}
 `}),w("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${he},
 max-width ${e} ${he},
 transform ${e} ${he}
 `}),w("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),w("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),w("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),w("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const or=w([w("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),w("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),w("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),w("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),l("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[l("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[tr({duration:".2s"}),Yo({duration:".2s",delay:"0s"}),l("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[x("top",{transform:"translateY(-100%)"}),x("bottom",{transform:"translateY(100%)"}),x("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),x("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),l("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[x("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),x("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),S("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[x("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),nr=X({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){Uo("-base-slot-machine",or,q(e,"clsPrefix"));const t=N(),o=N(),r=T(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const a=[];let n=e.value;for(e.max!==void 0&&(n=Math.min(e.max,n));n>=1;)a.push(n%10),n/=10,n=Math.floor(n);return a.reverse(),a});return re(q(e,"value"),(a,n)=>{typeof a=="string"?(o.value=void 0,t.value=void 0):typeof n=="string"?(o.value=a,t.value=void 0):(o.value=a,t.value=n)}),()=>{const{value:a,clsPrefix:n}=e;return typeof a=="number"?m("span",{class:`${n}-base-slot-machine`},m(Bt,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>r.value.map((i,d)=>m(Rt,{clsPrefix:n,key:r.value.length-d-1,oldOriginalNumber:t.value,newOriginalNumber:o.value,value:i}))}),m(Lt,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<a?m(Rt,{clsPrefix:n,value:"+"}):null})):m("span",{class:`${n}-base-slot-machine`},a)}}}),rr=e=>{const{errorColor:t,infoColor:o,successColor:r,warningColor:a,fontFamily:n}=e;return{color:t,colorInfo:o,colorSuccess:r,colorError:t,colorWarning:a,fontSize:"12px",fontFamily:n}},ar={name:"Badge",common:Nt,self:rr},ir=ar,lr=w([w("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),l("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[x("as-is",[l("badge-sup",{position:"static",transform:"translateX(0)"},[bt({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),x("dot",[l("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[w("::before","border-radius: 4px;")])]),l("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 display: flex;
 align-items: center;
 `,[bt({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),l("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),w("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),sr=Object.assign(Object.assign({},J.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),cr=X({name:"Badge",props:sr,setup(e,{slots:t}){const{mergedClsPrefixRef:o,inlineThemeDisabled:r,mergedRtlRef:a}=be(e),n=J("Badge","-badge",lr,ir,e,o),i=N(!1),d=()=>{i.value=!0},u=()=>{i.value=!1},v=T(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&Number(e.value)<=0)||!Xo(t.value)));Xe(()=>{v.value&&(i.value=!0)});const _=qo("Badge",a,o),s=T(()=>{const{type:b,color:y}=e,{common:{cubicBezierEaseInOut:C,cubicBezierEaseOut:R},self:{[ee("color",b)]:M,fontFamily:F,fontSize:j}}=n.value;return{"--n-font-size":j,"--n-font-family":F,"--n-color":y||M,"--n-ripple-color":y||M,"--n-bezier":C,"--n-ripple-bezier":R}}),c=r?pe("badge",T(()=>{let b="";const{type:y,color:C}=e;return y&&(b+=y[0]),C&&(b+=Go(C)),b}),s,e):void 0,f=T(()=>{const{offset:b}=e;if(!b)return;const[y,C]=b,R=typeof y=="number"?`${y}px`:y,M=typeof C=="number"?`${C}px`:C;return{transform:`translate(calc(${_!=null&&_.value?"50%":"-50%"} + ${R}), ${M})`}});return{rtlEnabled:_,mergedClsPrefix:o,appeared:i,showBadge:v,handleAfterEnter:d,handleAfterLeave:u,cssVars:r?void 0:s,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender,offsetStyle:f}},render(){var e;const{mergedClsPrefix:t,onRender:o,themeClass:r,$slots:a}=this;o==null||o();const n=(e=a.default)===null||e===void 0?void 0:e.call(a);return m("div",{class:[`${t}-badge`,this.rtlEnabled&&`${t}-badge--rtl`,r,{[`${t}-badge--dot`]:this.dot,[`${t}-badge--as-is`]:!n}],style:this.cssVars},n,m(Zo,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?m("sup",{class:`${t}-badge-sup`,title:Rn(this.value),style:this.offsetStyle},Et(a.value,()=>[this.dot?null:m(nr,{clsPrefix:t,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?m(Jo,{clsPrefix:t}):null):null}))}}),dr=l("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[w("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),w("a",`
 color: inherit;
 text-decoration: inherit;
 `),l("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[l("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),w("&:not(:last-child)",[x("clickable",[S("link",`
 cursor: pointer;
 `,[w("&:hover",`
 background-color: var(--n-item-color-hover);
 `),w("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),S("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[w("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[l("icon",`
 color: var(--n-item-text-color-hover);
 `)]),w("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[l("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),S("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),w("&:last-child",[S("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[l("icon",`
 color: var(--n-item-text-color-active);
 `)]),S("separator",`
 display: none;
 `)])])]),Kt=ue("n-breadcrumb"),ur=Object.assign(Object.assign({},J.props),{separator:{type:String,default:"/"}}),fr=X({name:"Breadcrumb",props:ur,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=be(e),r=J("Breadcrumb","-breadcrumb",dr,Qo,e,t);ae(Kt,{separatorRef:q(e,"separator"),mergedClsPrefixRef:t});const a=T(()=>{const{common:{cubicBezierEaseInOut:i},self:{separatorColor:d,itemTextColor:u,itemTextColorHover:v,itemTextColorPressed:_,itemTextColorActive:s,fontSize:c,fontWeightActive:f,itemBorderRadius:b,itemColorHover:y,itemColorPressed:C,itemLineHeight:R}}=r.value;return{"--n-font-size":c,"--n-bezier":i,"--n-item-text-color":u,"--n-item-text-color-hover":v,"--n-item-text-color-pressed":_,"--n-item-text-color-active":s,"--n-separator-color":d,"--n-item-color-hover":y,"--n-item-color-pressed":C,"--n-item-border-radius":b,"--n-font-weight-active":f,"--n-item-line-height":R}}),n=o?pe("breadcrumb",void 0,a,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:a,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),m("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},m("ul",null,this.$slots))}}),mr=(e=tn?window:null)=>{const t=()=>{const{hash:a,host:n,hostname:i,href:d,origin:u,pathname:v,port:_,protocol:s,search:c}=(e==null?void 0:e.location)||{};return{hash:a,host:n,hostname:i,href:d,origin:u,pathname:v,port:_,protocol:s,search:c}},o=()=>{r.value=t()},r=N(t());return Xe(()=>{e&&(e.addEventListener("popstate",o),e.addEventListener("hashchange",o))}),en(()=>{e&&(e.removeEventListener("popstate",o),e.removeEventListener("hashchange",o))}),r},hr={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},vr=X({name:"BreadcrumbItem",props:hr,setup(e,{slots:t}){const o=te(Kt,null);if(!o)return()=>null;const{separatorRef:r,mergedClsPrefixRef:a}=o,n=mr(),i=T(()=>e.href?"a":"span"),d=T(()=>n.value.href===e.href?"location":null);return()=>{const{value:u}=a;return m("li",{class:[`${u}-breadcrumb-item`,e.clickable&&`${u}-breadcrumb-item--clickable`]},m(i.value,{class:`${u}-breadcrumb-item__link`,"aria-current":d.value,href:e.href,onClick:e.onClick},t),m("span",{class:`${u}-breadcrumb-item__separator`,"aria-hidden":"true"},Et(t.separator,()=>{var v;return[(v=e.separator)!==null&&v!==void 0?v:r.value]})))}}}),br=e=>{const{baseColor:t,textColor2:o,bodyColor:r,cardColor:a,dividerColor:n,actionColor:i,scrollbarColor:d,scrollbarColorHover:u,invertedColor:v}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:i,headerColor:a,headerColorInverted:v,footerColor:i,footerColorInverted:v,headerBorderColor:n,headerBorderColorInverted:v,footerBorderColor:n,footerBorderColorInverted:v,siderBorderColor:n,siderBorderColorInverted:v,siderColor:a,siderColorInverted:v,siderToggleButtonBorder:`1px solid ${n}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:pt(r,d),siderToggleBarColorHover:pt(r,u),__invertScrollbar:"true"}},pr=on({name:"Layout",common:Nt,peers:{Scrollbar:nn},self:br}),Yt=pr,Ut=ue("n-layout-sider"),Xt={type:String,default:"static"},gr=l("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[l("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),x("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),xr={embedded:Boolean,position:Xt,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},qt=ue("n-layout");function _r(e){return X({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},J.props),xr),setup(t){const o=N(null),r=N(null),{mergedClsPrefixRef:a,inlineThemeDisabled:n}=be(t),i=J("Layout","-layout",gr,Yt,t,a);function d(y,C){if(t.nativeScrollbar){const{value:R}=o;R&&(C===void 0?R.scrollTo(y):R.scrollTo(y,C))}else{const{value:R}=r;R&&R.scrollTo(y,C)}}ae(qt,t);let u=0,v=0;const _=y=>{var C;const R=y.target;u=R.scrollLeft,v=R.scrollTop,(C=t.onScroll)===null||C===void 0||C.call(t,y)};Ht(()=>{if(t.nativeScrollbar){const y=o.value;y&&(y.scrollTop=v,y.scrollLeft=u)}});const s={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},c={scrollTo:d},f=T(()=>{const{common:{cubicBezierEaseInOut:y},self:C}=i.value;return{"--n-bezier":y,"--n-color":t.embedded?C.colorEmbedded:C.color,"--n-text-color":C.textColor}}),b=n?pe("layout",T(()=>t.embedded?"e":""),f,t):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:s,mergedTheme:i,handleNativeElScroll:_,cssVars:n?void 0:f,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender},c)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const a=r?this.hasSiderStyle:void 0,n=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return m("div",{class:n,style:this.cssVars},this.nativeScrollbar?m("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):m(Mt,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const yr=_r(!1),Cr=l("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[x("bordered",[S("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),S("left-placement",[x("bordered",[S("border",`
 right: 0;
 `)])]),x("right-placement",`
 justify-content: flex-start;
 `,[x("bordered",[S("border",`
 left: 0;
 `)]),x("collapsed",[l("layout-toggle-button",[l("base-icon",`
 transform: rotate(180deg);
 `)]),l("layout-toggle-bar",[w("&:hover",[S("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),S("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),l("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[l("base-icon",`
 transform: rotate(0);
 `)]),l("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[w("&:hover",[S("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),S("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),x("collapsed",[l("layout-toggle-bar",[w("&:hover",[S("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),S("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),l("layout-toggle-button",[l("base-icon",`
 transform: rotate(0);
 `)])]),l("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[l("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),l("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[S("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),S("bottom",`
 position: absolute;
 top: 34px;
 `),w("&:hover",[S("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),S("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),S("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),w("&:hover",[S("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),S("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),l("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),x("show-content",[l("layout-sider-scroll-container",{opacity:1})]),x("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),wr=X({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return m("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},m(qe,{clsPrefix:e},{default:()=>m($n,null)}))}}),zr=X({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return m("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},m("div",{class:`${e}-layout-toggle-bar__top`}),m("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Sr={position:Xt,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},$r=X({name:"LayoutSider",props:Object.assign(Object.assign({},J.props),Sr),setup(e){const t=te(qt),o=N(null),r=N(null),a=T(()=>Oe(u.value?e.collapsedWidth:e.width)),n=T(()=>e.collapseMode!=="transform"?{}:{minWidth:Oe(e.width)}),i=T(()=>t?t.siderPlacement:"left"),d=N(e.defaultCollapsed),u=Ie(q(e,"collapsed"),d);function v(k,$){if(e.nativeScrollbar){const{value:B}=o;B&&($===void 0?B.scrollTo(k):B.scrollTo(k,$))}else{const{value:B}=r;B&&B.scrollTo(k,$)}}function _(){const{"onUpdate:collapsed":k,onUpdateCollapsed:$,onExpand:B,onCollapse:A}=e,{value:E}=u;$&&G($,!E),k&&G(k,!E),d.value=!E,E?B&&G(B):A&&G(A)}let s=0,c=0;const f=k=>{var $;const B=k.target;s=B.scrollLeft,c=B.scrollTop,($=e.onScroll)===null||$===void 0||$.call(e,k)};Ht(()=>{if(e.nativeScrollbar){const k=o.value;k&&(k.scrollTop=c,k.scrollLeft=s)}}),ae(Ut,{collapsedRef:u,collapseModeRef:q(e,"collapseMode")});const{mergedClsPrefixRef:b,inlineThemeDisabled:y}=be(e),C=J("Layout","-layout-sider",Cr,Yt,e,b);function R(k){var $,B;k.propertyName==="max-width"&&(u.value?($=e.onAfterLeave)===null||$===void 0||$.call(e):(B=e.onAfterEnter)===null||B===void 0||B.call(e))}const M={scrollTo:v},F=T(()=>{const{common:{cubicBezierEaseInOut:k},self:$}=C.value,{siderToggleButtonColor:B,siderToggleButtonBorder:A,siderToggleBarColor:E,siderToggleBarColorHover:h}=$,P={"--n-bezier":k,"--n-toggle-button-color":B,"--n-toggle-button-border":A,"--n-toggle-bar-color":E,"--n-toggle-bar-color-hover":h};return e.inverted?(P["--n-color"]=$.siderColorInverted,P["--n-text-color"]=$.textColorInverted,P["--n-border-color"]=$.siderBorderColorInverted,P["--n-toggle-button-icon-color"]=$.siderToggleButtonIconColorInverted,P.__invertScrollbar=$.__invertScrollbar):(P["--n-color"]=$.siderColor,P["--n-text-color"]=$.textColor,P["--n-border-color"]=$.siderBorderColor,P["--n-toggle-button-icon-color"]=$.siderToggleButtonIconColor),P}),j=y?pe("layout-sider",T(()=>e.inverted?"a":"b"),F,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:b,mergedTheme:C,styleMaxWidth:a,mergedCollapsed:u,scrollContainerStyle:n,siderPlacement:i,handleNativeElScroll:f,handleTransitionend:R,handleTriggerClick:_,inlineThemeDisabled:y,cssVars:F,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender},M)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),m("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:Oe(this.width)}]},this.nativeScrollbar?m("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):m(Mt,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?m(zr,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):m(wr,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?m("div",{class:`${t}-layout-sider__border`}):null)}}),_e=ue("n-menu"),et=ue("n-submenu"),tt=ue("n-menu-item-group"),$e=8;function ot(e){const t=te(_e),{props:o,mergedCollapsedRef:r}=t,a=te(et,null),n=te(tt,null),i=T(()=>o.mode==="horizontal"),d=T(()=>i.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),u=T(()=>{var c;return Math.max((c=o.collapsedIconSize)!==null&&c!==void 0?c:o.iconSize,o.iconSize)}),v=T(()=>{var c;return!i.value&&e.root&&r.value&&(c=o.collapsedIconSize)!==null&&c!==void 0?c:o.iconSize}),_=T(()=>{if(i.value)return;const{collapsedWidth:c,indent:f,rootIndent:b}=o,{root:y,isGroup:C}=e,R=b===void 0?f:b;if(y)return r.value?c/2-u.value/2:R;if(n)return f/2+n.paddingLeftRef.value;if(a)return(C?f/2:f)+a.paddingLeftRef.value}),s=T(()=>{const{collapsedWidth:c,indent:f,rootIndent:b}=o,{value:y}=u,{root:C}=e;return i.value||!C||!r.value?$e:(b===void 0?f:b)+y+$e-(c+y)/2});return{dropdownPlacement:d,activeIconSize:v,maxIconSize:u,paddingLeft:_,iconMarginRight:s,NMenu:t,NSubmenu:a}}const nt={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Gt=Object.assign(Object.assign({},nt),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Rr=X({name:"MenuOptionGroup",props:Gt,setup(e){ae(et,null);const t=ot(e);ae(tt,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:r}=te(_e);return function(){const{value:a}=o,n=t.paddingLeft.value,{nodeProps:i}=r,d=i==null?void 0:i(e.tmNode.rawNode);return m("div",{class:`${a}-menu-item-group`,role:"group"},m("div",Object.assign({},d,{class:[`${a}-menu-item-group-title`,d==null?void 0:d.class],style:[(d==null?void 0:d.style)||"",n!==void 0?`padding-left: ${n}px;`:""]}),de(e.title),e.extra?m(ie,null," ",de(e.extra)):null),m("div",null,e.tmNodes.map(u=>rt(u,r))))}}}),Zt=X({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=te(_e);return{menuProps:t,style:T(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:T(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:a}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:r,renderExtra:a,expandIcon:n}}=this,i=o?o(t.rawNode):de(this.icon);return m("div",{onClick:d=>{var u;(u=this.onClick)===null||u===void 0||u.call(this,d)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},i&&m("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[i]),m("div",{class:`${e}-menu-item-content-header`,role:"none"},r?r(t.rawNode):de(this.title),this.extra||a?m("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(t.rawNode):de(this.extra)):null),this.showArrow?m(qe,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>n?n(t.rawNode):m(er,null)}):null)}}),Jt=Object.assign(Object.assign({},nt),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),kr=X({name:"Submenu",props:Jt,setup(e){const t=ot(e),{NMenu:o,NSubmenu:r}=t,{props:a,mergedCollapsedRef:n,mergedThemeRef:i}=o,d=T(()=>{const{disabled:c}=e;return r!=null&&r.mergedDisabledRef.value||a.disabled?!0:c}),u=N(!1);ae(et,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:d}),ae(tt,null);function v(){const{onClick:c}=e;c&&c()}function _(){d.value||(n.value||o.toggleExpand(e.internalKey),v())}function s(c){u.value=c}return{menuProps:a,mergedTheme:i,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:u,paddingLeft:t.paddingLeft,mergedDisabled:d,mergedValue:o.mergedValueRef,childActive:De(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:T(()=>a.mode==="horizontal"?!1:n.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:T(()=>!d.value&&(a.mode==="horizontal"||n.value)),handlePopoverShowChange:s,handleClick:_}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:r}}=this,a=()=>{const{isHorizontal:i,paddingLeft:d,collapsed:u,mergedDisabled:v,maxIconSize:_,activeIconSize:s,title:c,childActive:f,icon:b,handleClick:y,menuProps:{nodeProps:C},dropdownShow:R,iconMarginRight:M,tmNode:F,mergedClsPrefix:j}=this,k=C==null?void 0:C(F.rawNode);return m("div",Object.assign({},k,{class:[`${j}-menu-item`,k==null?void 0:k.class],role:"menuitem"}),m(Zt,{tmNode:F,paddingLeft:d,collapsed:u,disabled:v,iconMarginRight:M,maxIconSize:_,activeIconSize:s,title:c,extra:this.extra,showArrow:!i,childActive:f,clsPrefix:j,icon:b,hover:R,onClick:y}))},n=()=>m(Lt,null,{default:()=>{const{tmNodes:i,collapsed:d}=this;return d?null:m("div",{class:`${t}-submenu-children`,role:"menu"},i.map(u=>rt(u,this.menuProps)))}});return this.root?m(Qe,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>m("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:n())}):m("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),n())}}),Qt=Object.assign(Object.assign({},nt),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Tr=X({name:"MenuOption",props:Qt,setup(e){const t=ot(e),{NSubmenu:o,NMenu:r}=t,{props:a,mergedClsPrefixRef:n,mergedCollapsedRef:i}=r,d=o?o.mergedDisabledRef:{value:!1},u=T(()=>d.value||e.disabled);function v(s){const{onClick:c}=e;c&&c(s)}function _(s){u.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),v(s))}return{mergedClsPrefix:n,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:a,dropdownEnabled:De(()=>e.root&&i.value&&a.mode!=="horizontal"&&!u.value),selected:De(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:u,handleClick:_}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:r,nodeProps:a}}=this,n=a==null?void 0:a(o.rawNode);return m("div",Object.assign({},n,{role:"menuitem",class:[`${e}-menu-item`,n==null?void 0:n.class]}),m(Bn,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):de(this.title),trigger:()=>m(Zt,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Ir=X({name:"MenuDivider",setup(){const e=te(_e),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:m("div",{class:`${t.value}-menu-divider`})}}),Pr=Ge(Gt),Ar=Ge(Qt),Lr=Ge(Jt);function eo(e){return e.type==="divider"||e.type==="render"}function Br(e){return e.type==="divider"}function rt(e,t){const{rawNode:o}=e,{show:r}=o;if(r===!1)return null;if(eo(o))return Br(o)?m(Ir,Object.assign({key:e.key},o.props)):null;const{labelField:a}=t,{key:n,level:i,isGroup:d}=e,u=Object.assign(Object.assign({},o),{title:o.title||o[a],extra:o.titleExtra||o.extra,key:n,internalKey:n,level:i,root:i===0,isGroup:d});return e.children?e.isGroup?m(Rr,He(u,Pr,{tmNode:e,tmNodes:e.children,key:n})):m(kr,He(u,Lr,{key:n,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):m(Tr,He(u,Ar,{key:n,tmNode:e}))}const kt=[w("&::before","background-color: var(--n-item-color-hover);"),S("arrow",`
 color: var(--n-arrow-color-hover);
 `),S("icon",`
 color: var(--n-item-icon-color-hover);
 `),l("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[w("a",`
 color: var(--n-item-text-color-hover);
 `),S("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Tt=[S("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),l("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[w("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),S("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Nr=w([l("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[x("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[l("submenu","margin: 0;"),l("menu-item","margin: 0;"),l("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[w("&::before","display: none;"),x("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),l("menu-item-content",[x("selected",[S("icon","color: var(--n-item-icon-color-active-horizontal);"),l("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[w("a","color: var(--n-item-text-color-active-horizontal);"),S("extra","color: var(--n-item-text-color-active-horizontal);")])]),x("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[l("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[w("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),S("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),S("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ge("disabled",[ge("selected, child-active",[w("&:focus-within",Tt)]),x("selected",[ce(null,[S("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),l("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[w("a","color: var(--n-item-text-color-active-hover-horizontal);"),S("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),x("child-active",[ce(null,[S("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),l("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[w("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),S("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),ce("border-bottom: 2px solid var(--n-border-color-horizontal);",Tt)]),l("menu-item-content-header",[w("a","color: var(--n-item-text-color-horizontal);")])])]),x("collapsed",[l("menu-item-content",[x("selected",[w("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),l("menu-item-content-header","opacity: 0;"),S("arrow","opacity: 0;"),S("icon","color: var(--n-item-icon-color-collapsed);")])]),l("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),l("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[w("> *","z-index: 1;"),w("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),x("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),x("collapsed",[S("arrow","transform: rotate(0);")]),x("selected",[w("&::before","background-color: var(--n-item-color-active);"),S("arrow","color: var(--n-arrow-color-active);"),S("icon","color: var(--n-item-icon-color-active);"),l("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[w("a","color: var(--n-item-text-color-active);"),S("extra","color: var(--n-item-text-color-active);")])]),x("child-active",[l("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[w("a",`
 color: var(--n-item-text-color-child-active);
 `),S("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),S("arrow",`
 color: var(--n-arrow-color-child-active);
 `),S("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ge("disabled",[ge("selected, child-active",[w("&:focus-within",kt)]),x("selected",[ce(null,[S("arrow","color: var(--n-arrow-color-active-hover);"),S("icon","color: var(--n-item-icon-color-active-hover);"),l("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[w("a","color: var(--n-item-text-color-active-hover);"),S("extra","color: var(--n-item-text-color-active-hover);")])])]),x("child-active",[ce(null,[S("arrow","color: var(--n-arrow-color-child-active-hover);"),S("icon","color: var(--n-item-icon-color-child-active-hover);"),l("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[w("a","color: var(--n-item-text-color-child-active-hover);"),S("extra","color: var(--n-item-text-color-child-active-hover);")])])]),x("selected",[ce(null,[w("&::before","background-color: var(--n-item-color-active-hover);")])]),ce(null,kt)]),S("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),S("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),l("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[w("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[w("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),S("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),l("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[l("menu-item-content",`
 height: var(--n-item-height);
 `),l("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[rn({duration:".2s"})])]),l("menu-item-group",[l("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),l("menu-tooltip",[w("a",`
 color: inherit;
 text-decoration: none;
 `)]),l("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function ce(e,t){return[x("hover",e,t),w("&:hover",e,t)]}const Er=Object.assign(Object.assign({},J.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),Hr=X({name:"Menu",props:Er,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=be(e),r=J("Menu","-menu",Nr,an,e,t),a=te(Ut,null),n=T(()=>{var A;const{collapsed:E}=e;if(E!==void 0)return E;if(a){const{collapseModeRef:h,collapsedRef:P}=a;if(h.value==="width")return(A=P.value)!==null&&A!==void 0?A:!1}return!1}),i=T(()=>{const{keyField:A,childrenField:E,disabledField:h}=e;return Nn(e.items||e.options,{getIgnored(P){return eo(P)},getChildren(P){return P[E]},getDisabled(P){return P[h]},getKey(P){var K;return(K=P[A])!==null&&K!==void 0?K:P.name}})}),d=T(()=>new Set(i.value.treeNodes.map(A=>A.key))),{watchProps:u}=e,v=N(null);u!=null&&u.includes("defaultValue")?Ve(()=>{v.value=e.defaultValue}):v.value=e.defaultValue;const _=q(e,"value"),s=Ie(_,v),c=N([]),f=()=>{c.value=e.defaultExpandAll?i.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||i.value.getPath(s.value,{includeSelf:!1}).keyPath};u!=null&&u.includes("defaultExpandedKeys")?Ve(f):f();const b=Ye(e,["expandedNames","expandedKeys"]),y=Ie(b,c),C=T(()=>i.value.treeNodes),R=T(()=>i.value.getPath(s.value).keyPath);ae(_e,{props:e,mergedCollapsedRef:n,mergedThemeRef:r,mergedValueRef:s,mergedExpandedKeysRef:y,activePathRef:R,mergedClsPrefixRef:t,isHorizontalRef:T(()=>e.mode==="horizontal"),invertedRef:q(e,"inverted"),doSelect:M,toggleExpand:j});function M(A,E){const{"onUpdate:value":h,onUpdateValue:P,onSelect:K}=e;P&&G(P,A,E),h&&G(h,A,E),K&&G(K,A,E),v.value=A}function F(A){const{"onUpdate:expandedKeys":E,onUpdateExpandedKeys:h,onExpandedNamesChange:P,onOpenNamesChange:K}=e;E&&G(E,A),h&&G(h,A),P&&G(P,A),K&&G(K,A),c.value=A}function j(A){const E=Array.from(y.value),h=E.findIndex(P=>P===A);if(~h)E.splice(h,1);else{if(e.accordion&&d.value.has(A)){const P=E.findIndex(K=>d.value.has(K));P>-1&&E.splice(P,1)}E.push(A)}F(E)}const k=A=>{const E=i.value.getPath(A!=null?A:s.value,{includeSelf:!1}).keyPath;if(!E.length)return;const h=Array.from(y.value),P=new Set([...h,...E]);e.accordion&&d.value.forEach(K=>{P.has(K)&&!E.includes(K)&&P.delete(K)}),F(Array.from(P))},$=T(()=>{const{inverted:A}=e,{common:{cubicBezierEaseInOut:E},self:h}=r.value,{borderRadius:P,borderColorHorizontal:K,fontSize:oe,itemHeight:Be,dividerColor:Ne}=h,g={"--n-divider-color":Ne,"--n-bezier":E,"--n-font-size":oe,"--n-border-color-horizontal":K,"--n-border-radius":P,"--n-item-height":Be};return A?(g["--n-group-text-color"]=h.groupTextColorInverted,g["--n-color"]=h.colorInverted,g["--n-item-text-color"]=h.itemTextColorInverted,g["--n-item-text-color-hover"]=h.itemTextColorHoverInverted,g["--n-item-text-color-active"]=h.itemTextColorActiveInverted,g["--n-item-text-color-child-active"]=h.itemTextColorChildActiveInverted,g["--n-item-text-color-child-active-hover"]=h.itemTextColorChildActiveInverted,g["--n-item-text-color-active-hover"]=h.itemTextColorActiveHoverInverted,g["--n-item-icon-color"]=h.itemIconColorInverted,g["--n-item-icon-color-hover"]=h.itemIconColorHoverInverted,g["--n-item-icon-color-active"]=h.itemIconColorActiveInverted,g["--n-item-icon-color-active-hover"]=h.itemIconColorActiveHoverInverted,g["--n-item-icon-color-child-active"]=h.itemIconColorChildActiveInverted,g["--n-item-icon-color-child-active-hover"]=h.itemIconColorChildActiveHoverInverted,g["--n-item-icon-color-collapsed"]=h.itemIconColorCollapsedInverted,g["--n-item-text-color-horizontal"]=h.itemTextColorHorizontalInverted,g["--n-item-text-color-hover-horizontal"]=h.itemTextColorHoverHorizontalInverted,g["--n-item-text-color-active-horizontal"]=h.itemTextColorActiveHorizontalInverted,g["--n-item-text-color-child-active-horizontal"]=h.itemTextColorChildActiveHorizontalInverted,g["--n-item-text-color-child-active-hover-horizontal"]=h.itemTextColorChildActiveHoverHorizontalInverted,g["--n-item-text-color-active-hover-horizontal"]=h.itemTextColorActiveHoverHorizontalInverted,g["--n-item-icon-color-horizontal"]=h.itemIconColorHorizontalInverted,g["--n-item-icon-color-hover-horizontal"]=h.itemIconColorHoverHorizontalInverted,g["--n-item-icon-color-active-horizontal"]=h.itemIconColorActiveHorizontalInverted,g["--n-item-icon-color-active-hover-horizontal"]=h.itemIconColorActiveHoverHorizontalInverted,g["--n-item-icon-color-child-active-horizontal"]=h.itemIconColorChildActiveHorizontalInverted,g["--n-item-icon-color-child-active-hover-horizontal"]=h.itemIconColorChildActiveHoverHorizontalInverted,g["--n-arrow-color"]=h.arrowColorInverted,g["--n-arrow-color-hover"]=h.arrowColorHoverInverted,g["--n-arrow-color-active"]=h.arrowColorActiveInverted,g["--n-arrow-color-active-hover"]=h.arrowColorActiveHoverInverted,g["--n-arrow-color-child-active"]=h.arrowColorChildActiveInverted,g["--n-arrow-color-child-active-hover"]=h.arrowColorChildActiveHoverInverted,g["--n-item-color-hover"]=h.itemColorHoverInverted,g["--n-item-color-active"]=h.itemColorActiveInverted,g["--n-item-color-active-hover"]=h.itemColorActiveHoverInverted,g["--n-item-color-active-collapsed"]=h.itemColorActiveCollapsedInverted):(g["--n-group-text-color"]=h.groupTextColor,g["--n-color"]=h.color,g["--n-item-text-color"]=h.itemTextColor,g["--n-item-text-color-hover"]=h.itemTextColorHover,g["--n-item-text-color-active"]=h.itemTextColorActive,g["--n-item-text-color-child-active"]=h.itemTextColorChildActive,g["--n-item-text-color-child-active-hover"]=h.itemTextColorChildActiveHover,g["--n-item-text-color-active-hover"]=h.itemTextColorActiveHover,g["--n-item-icon-color"]=h.itemIconColor,g["--n-item-icon-color-hover"]=h.itemIconColorHover,g["--n-item-icon-color-active"]=h.itemIconColorActive,g["--n-item-icon-color-active-hover"]=h.itemIconColorActiveHover,g["--n-item-icon-color-child-active"]=h.itemIconColorChildActive,g["--n-item-icon-color-child-active-hover"]=h.itemIconColorChildActiveHover,g["--n-item-icon-color-collapsed"]=h.itemIconColorCollapsed,g["--n-item-text-color-horizontal"]=h.itemTextColorHorizontal,g["--n-item-text-color-hover-horizontal"]=h.itemTextColorHoverHorizontal,g["--n-item-text-color-active-horizontal"]=h.itemTextColorActiveHorizontal,g["--n-item-text-color-child-active-horizontal"]=h.itemTextColorChildActiveHorizontal,g["--n-item-text-color-child-active-hover-horizontal"]=h.itemTextColorChildActiveHoverHorizontal,g["--n-item-text-color-active-hover-horizontal"]=h.itemTextColorActiveHoverHorizontal,g["--n-item-icon-color-horizontal"]=h.itemIconColorHorizontal,g["--n-item-icon-color-hover-horizontal"]=h.itemIconColorHoverHorizontal,g["--n-item-icon-color-active-horizontal"]=h.itemIconColorActiveHorizontal,g["--n-item-icon-color-active-hover-horizontal"]=h.itemIconColorActiveHoverHorizontal,g["--n-item-icon-color-child-active-horizontal"]=h.itemIconColorChildActiveHorizontal,g["--n-item-icon-color-child-active-hover-horizontal"]=h.itemIconColorChildActiveHoverHorizontal,g["--n-arrow-color"]=h.arrowColor,g["--n-arrow-color-hover"]=h.arrowColorHover,g["--n-arrow-color-active"]=h.arrowColorActive,g["--n-arrow-color-active-hover"]=h.arrowColorActiveHover,g["--n-arrow-color-child-active"]=h.arrowColorChildActive,g["--n-arrow-color-child-active-hover"]=h.arrowColorChildActiveHover,g["--n-item-color-hover"]=h.itemColorHover,g["--n-item-color-active"]=h.itemColorActive,g["--n-item-color-active-hover"]=h.itemColorActiveHover,g["--n-item-color-active-collapsed"]=h.itemColorActiveCollapsed),g}),B=o?pe("menu",T(()=>e.inverted?"a":"b"),$,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:b,uncontrolledExpanededKeys:c,mergedExpandedKeys:y,uncontrolledValue:v,mergedValue:s,activePath:R,tmNodes:C,mergedTheme:r,mergedCollapsed:n,cssVars:o?void 0:$,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender,showOption:k}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:r}=this;return r==null||r(),m("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>rt(a,this.$props)))}}),at=ue("n-tabs"),to={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Mr=X({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:to,setup(e){const t=te(at,null);return t||ln("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return m("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Or=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},dn(to,["displayDirective"])),Ue=X({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Or,setup(e){const{mergedClsPrefixRef:t,valueRef:o,typeRef:r,closableRef:a,tabStyleRef:n,tabChangeIdRef:i,onBeforeLeaveRef:d,triggerRef:u,handleAdd:v,activateTab:_,handleClose:s}=te(at);return{trigger:u,mergedClosable:T(()=>{if(e.internalAddable)return!1;const{closable:c}=e;return c===void 0?a.value:c}),style:n,clsPrefix:t,value:o,type:r,handleClose(c){c.stopPropagation(),!e.disabled&&s(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){v();return}const{name:c}=e,f=++i.id;if(c!==o.value){const{value:b}=d;b?Promise.resolve(b(e.name,o.value)).then(y=>{y&&i.id===f&&_(c)}):_(c)}}}},render(){const{internalAddable:e,clsPrefix:t,name:o,disabled:r,label:a,tab:n,value:i,mergedClosable:d,style:u,trigger:v,$slots:{default:_}}=this,s=a!=null?a:n;return m("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?m("div",{class:`${t}-tabs-tab-pad`}):null,m("div",Object.assign({key:o,"data-name":o,"data-disabled":r?!0:void 0},sn({class:[`${t}-tabs-tab`,i===o&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,d&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:v==="click"?this.activateTab:void 0,onMouseenter:v==="hover"?this.activateTab:void 0,style:e?void 0:u},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),m("span",{class:`${t}-tabs-tab__label`},e?m(ie,null,m("div",{class:`${t}-tabs-tab__height-placeholder`}," "),m(qe,{clsPrefix:t},{default:()=>m(Tn,null)})):_?_():typeof s=="object"?s:de(s!=null?s:o)),d&&this.type==="card"?m(cn,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),Fr=l("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[x("segment-type",[l("tabs-rail",[w("&.transition-disabled","color: red;",[l("tabs-tab",`
 transition: none;
 `)])])]),x("top",[l("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),x("left",[l("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),x("left, right",`
 flex-direction: row;
 `,[l("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),l("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),x("right",`
 flex-direction: row-reverse;
 `,[l("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),l("tabs-bar",`
 left: 0;
 `)]),x("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[l("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),l("tabs-bar",`
 top: 0;
 `)]),l("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[l("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[l("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[x("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),w("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),x("flex",[l("tabs-nav",{width:"100%"},[l("tabs-wrapper",{width:"100%"},[l("tabs-tab",{marginRight:0})])])]),l("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[S("prefix, suffix",`
 display: flex;
 align-items: center;
 `),S("prefix","padding-right: 16px;"),S("suffix","padding-left: 16px;")]),x("top, bottom",[l("tabs-nav-scroll-wrapper",[w("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),w("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),x("shadow-start",[w("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),x("shadow-end",[w("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),x("left, right",[l("tabs-nav-scroll-wrapper",[w("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),w("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),x("shadow-start",[w("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),x("shadow-end",[w("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),l("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[l("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[w("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),w("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),l("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),l("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),l("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),l("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("disabled",{cursor:"not-allowed"}),S("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),S("label",`
 display: flex;
 align-items: center;
 `)]),l("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[w("&.transition-disabled",`
 transition: none;
 `),x("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),l("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),l("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[w("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),w("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),w("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),w("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),w("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),l("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),x("line-type, bar-type",[l("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[w("&:hover",{color:"var(--n-tab-text-color-hover)"}),x("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),x("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),l("tabs-nav",[x("line-type",[x("top",[S("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-bar",`
 bottom: -1px;
 `)]),x("left",[S("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),l("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),l("tabs-bar",`
 right: -1px;
 `)]),x("right",[S("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),l("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),l("tabs-bar",`
 left: -1px;
 `)]),x("bottom",[S("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),l("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),l("tabs-bar",`
 top: -1px;
 `)]),S("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),l("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),l("tabs-bar",`
 border-radius: 0;
 `)]),x("card-type",[S("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),l("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[x("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[S("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ge("disabled",[w("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),x("closable","padding-right: 8px;"),x("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),x("disabled","color: var(--n-tab-text-color-disabled);")]),l("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),x("left, right",[l("tabs-wrapper",`
 flex-direction: column;
 `,[l("tabs-tab-wrapper",`
 flex-direction: column;
 `,[l("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),x("top",[x("card-type",[l("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[x("active",`
 border-bottom: 1px solid #0000;
 `)]),l("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),x("left",[x("card-type",[l("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[x("active",`
 border-right: 1px solid #0000;
 `)]),l("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),x("right",[x("card-type",[l("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[x("active",`
 border-left: 1px solid #0000;
 `)]),l("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),x("bottom",[x("card-type",[l("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[x("active",`
 border-top: 1px solid #0000;
 `)]),l("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),jr=Object.assign(Object.assign({},J.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Wr=X({name:"Tabs",props:jr,setup(e,{slots:t}){var o,r,a,n;const{mergedClsPrefixRef:i,inlineThemeDisabled:d}=be(e),u=J("Tabs","-tabs",Fr,un,e,i),v=N(null),_=N(null),s=N(null),c=N(null),f=N(null),b=N(!0),y=N(!0),C=Ye(e,["labelSize","size"]),R=Ye(e,["activeName","value"]),M=N((r=(o=R.value)!==null&&o!==void 0?o:e.defaultValue)!==null&&r!==void 0?r:t.default?(n=(a=Me(t.default())[0])===null||a===void 0?void 0:a.props)===null||n===void 0?void 0:n.name:null),F=Ie(R,M),j={id:0},k=T(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});re(F,()=>{j.id=0,E(),h()});function $(){var p;const{value:z}=F;return z===null?null:(p=v.value)===null||p===void 0?void 0:p.querySelector(`[data-name="${z}"]`)}function B(p){if(e.type==="card")return;const{value:z}=_;if(z&&p){const L=`${i.value}-tabs-bar--disabled`,{barWidth:H,placement:Z}=e;if(p.dataset.disabled==="true"?z.classList.add(L):z.classList.remove(L),["top","bottom"].includes(Z)){if(A(["top","maxHeight","height"]),typeof H=="number"&&p.offsetWidth>=H){const Q=Math.floor((p.offsetWidth-H)/2)+p.offsetLeft;z.style.left=`${Q}px`,z.style.maxWidth=`${H}px`}else z.style.left=`${p.offsetLeft}px`,z.style.maxWidth=`${p.offsetWidth}px`;z.style.width="8192px",z.offsetWidth}else{if(A(["left","maxWidth","width"]),typeof H=="number"&&p.offsetHeight>=H){const Q=Math.floor((p.offsetHeight-H)/2)+p.offsetTop;z.style.top=`${Q}px`,z.style.maxHeight=`${H}px`}else z.style.top=`${p.offsetTop}px`,z.style.maxHeight=`${p.offsetHeight}px`;z.style.height="8192px",z.offsetHeight}}}function A(p){const{value:z}=_;if(z)for(const L of p)z.style[L]=""}function E(){if(e.type==="card")return;const p=$();p&&B(p)}function h(p){var z;const L=(z=f.value)===null||z===void 0?void 0:z.$el;if(!L)return;const H=$();if(!H)return;const{scrollLeft:Z,offsetWidth:Q}=L,{offsetLeft:me,offsetWidth:Ce}=H;Z>me?L.scrollTo({top:0,left:me,behavior:"smooth"}):me+Ce>Z+Q&&L.scrollTo({top:0,left:me+Ce-Q,behavior:"smooth"})}const P=N(null);let K=0,oe=null;function Be(p){const z=P.value;if(z){K=p.getBoundingClientRect().height;const L=`${K}px`,H=()=>{z.style.height=L,z.style.maxHeight=L};oe?(H(),oe(),oe=null):oe=H}}function Ne(p){const z=P.value;if(z){const L=p.getBoundingClientRect().height,H=()=>{document.body.offsetHeight,z.style.maxHeight=`${L}px`,z.style.height=`${Math.max(K,L)}px`};oe?(oe(),oe=null,H()):oe=H}}function g(){const p=P.value;p&&(p.style.maxHeight="",p.style.height="")}const it={value:[]},lt=N("next");function oo(p){const z=F.value;let L="next";for(const H of it.value){if(H===z)break;if(H===p){L="prev";break}}lt.value=L,no(p)}function no(p){const{onActiveNameChange:z,onUpdateValue:L,"onUpdate:value":H}=e;z&&G(z,p),L&&G(L,p),H&&G(H,p),M.value=p}function ro(p){const{onClose:z}=e;z&&G(z,p)}function st(){const{value:p}=_;if(!p)return;const z="transition-disabled";p.classList.add(z),E(),p.classList.remove(z)}let ct=0;function ao(p){var z;if(p.contentRect.width===0&&p.contentRect.height===0||ct===p.contentRect.width)return;ct=p.contentRect.width;const{type:L}=e;(L==="line"||L==="bar")&&st(),L!=="segment"&&Ee((z=f.value)===null||z===void 0?void 0:z.$el)}const io=je(ao,64);re([()=>e.justifyContent,()=>e.size],()=>{se(()=>{const{type:p}=e;(p==="line"||p==="bar")&&st()})});const ye=N(!1);function lo(p){var z;const{target:L,contentRect:{width:H}}=p,Z=L.parentElement.offsetWidth;if(!ye.value)Z<H&&(ye.value=!0);else{const{value:Q}=c;if(!Q)return;Z-H>Q.$el.offsetWidth&&(ye.value=!1)}Ee((z=f.value)===null||z===void 0?void 0:z.$el)}const so=je(lo,64);function co(){const{onAdd:p}=e;p&&p(),se(()=>{const z=$(),{value:L}=f;!z||!L||L.scrollTo({left:z.offsetLeft,top:0,behavior:"smooth"})})}function Ee(p){if(!p)return;const{placement:z}=e;if(z==="top"||z==="bottom"){const{scrollLeft:L,scrollWidth:H,offsetWidth:Z}=p;b.value=L<=0,y.value=L+Z>=H}else{const{scrollTop:L,scrollHeight:H,offsetHeight:Z}=p;b.value=L<=0,y.value=L+Z>=H}}const uo=je(p=>{Ee(p.target)},64);ae(at,{triggerRef:q(e,"trigger"),tabStyleRef:q(e,"tabStyle"),paneClassRef:q(e,"paneClass"),paneStyleRef:q(e,"paneStyle"),mergedClsPrefixRef:i,typeRef:q(e,"type"),closableRef:q(e,"closable"),valueRef:F,tabChangeIdRef:j,onBeforeLeaveRef:q(e,"onBeforeLeave"),activateTab:oo,handleClose:ro,handleAdd:co}),In(()=>{E(),h()}),Ve(()=>{const{value:p}=s;if(!p)return;const{value:z}=i,L=`${z}-tabs-nav-scroll-wrapper--shadow-start`,H=`${z}-tabs-nav-scroll-wrapper--shadow-end`;b.value?p.classList.remove(L):p.classList.add(L),y.value?p.classList.remove(H):p.classList.add(H)});const dt=N(null);re(F,()=>{if(e.type==="segment"){const p=dt.value;p&&se(()=>{p.classList.add("transition-disabled"),p.offsetWidth,p.classList.remove("transition-disabled")})}});const fo={syncBarPosition:()=>{E()}},ut=T(()=>{const{value:p}=C,{type:z}=e,L={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[z],H=`${p}${L}`,{self:{barColor:Z,closeIconColor:Q,closeIconColorHover:me,closeIconColorPressed:Ce,tabColor:mo,tabBorderColor:ho,paneTextColor:vo,tabFontWeight:bo,tabBorderRadius:po,tabFontWeightActive:go,colorSegment:xo,fontWeightStrong:_o,tabColorSegment:yo,closeSize:Co,closeIconSize:wo,closeColorHover:zo,closeColorPressed:So,closeBorderRadius:$o,[ee("panePadding",p)]:we,[ee("tabPadding",H)]:Ro,[ee("tabPaddingVertical",H)]:ko,[ee("tabGap",H)]:To,[ee("tabGap",`${H}Vertical`)]:Io,[ee("tabTextColor",z)]:Po,[ee("tabTextColorActive",z)]:Ao,[ee("tabTextColorHover",z)]:Lo,[ee("tabTextColorDisabled",z)]:Bo,[ee("tabFontSize",p)]:No},common:{cubicBezierEaseInOut:Eo}}=u.value;return{"--n-bezier":Eo,"--n-color-segment":xo,"--n-bar-color":Z,"--n-tab-font-size":No,"--n-tab-text-color":Po,"--n-tab-text-color-active":Ao,"--n-tab-text-color-disabled":Bo,"--n-tab-text-color-hover":Lo,"--n-pane-text-color":vo,"--n-tab-border-color":ho,"--n-tab-border-radius":po,"--n-close-size":Co,"--n-close-icon-size":wo,"--n-close-color-hover":zo,"--n-close-color-pressed":So,"--n-close-border-radius":$o,"--n-close-icon-color":Q,"--n-close-icon-color-hover":me,"--n-close-icon-color-pressed":Ce,"--n-tab-color":mo,"--n-tab-font-weight":bo,"--n-tab-font-weight-active":go,"--n-tab-padding":Ro,"--n-tab-padding-vertical":ko,"--n-tab-gap":To,"--n-tab-gap-vertical":Io,"--n-pane-padding-left":Se(we,"left"),"--n-pane-padding-right":Se(we,"right"),"--n-pane-padding-top":Se(we,"top"),"--n-pane-padding-bottom":Se(we,"bottom"),"--n-font-weight-strong":_o,"--n-tab-color-segment":yo}}),fe=d?pe("tabs",T(()=>`${C.value[0]}${e.type[0]}`),ut,e):void 0;return Object.assign({mergedClsPrefix:i,mergedValue:F,renderedNames:new Set,tabsRailElRef:dt,tabsPaneWrapperRef:P,tabsElRef:v,barElRef:_,addTabInstRef:c,xScrollInstRef:f,scrollWrapperElRef:s,addTabFixed:ye,tabWrapperStyle:k,handleNavResize:io,mergedSize:C,handleScroll:uo,handleTabsResize:so,cssVars:d?void 0:ut,themeClass:fe==null?void 0:fe.themeClass,animationDirection:lt,renderNameListRef:it,onAnimationBeforeLeave:Be,onAnimationEnter:Ne,onAnimationAfterEnter:g,onRender:fe==null?void 0:fe.onRender},fo)},render(){const{mergedClsPrefix:e,type:t,placement:o,addTabFixed:r,addable:a,mergedSize:n,renderNameListRef:i,onRender:d,paneWrapperClass:u,paneWrapperStyle:v,$slots:{default:_,prefix:s,suffix:c}}=this;d==null||d();const f=_?Me(_()).filter(k=>k.type.__TAB_PANE__===!0):[],b=_?Me(_()).filter(k=>k.type.__TAB__===!0):[],y=!b.length,C=t==="card",R=t==="segment",M=!C&&!R&&this.justifyContent;i.value=[];const F=()=>{const k=m("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},M?null:m("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),y?f.map(($,B)=>(i.value.push($.props.name),We(m(Ue,Object.assign({},$.props,{internalCreatedByPane:!0,internalLeftPadded:B!==0&&(!M||M==="center"||M==="start"||M==="end")}),$.children?{default:$.children.tab}:void 0)))):b.map(($,B)=>(i.value.push($.props.name),We(B!==0&&!M?At($):$))),!r&&a&&C?Pt(a,(y?f.length:b.length)!==0):null,M?null:m("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return m("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},C&&a?m(xt,{onResize:this.handleTabsResize},{default:()=>k}):k,C?m("div",{class:`${e}-tabs-pad`}):null,C?null:m("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},j=R?"top":o;return m("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${n}-size`,M&&`${e}-tabs--flex`,`${e}-tabs--${j}`],style:this.cssVars},m("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${j}`,`${e}-tabs-nav`]},gt(s,k=>k&&m("div",{class:`${e}-tabs-nav__prefix`},k)),R?m("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},y?f.map((k,$)=>(i.value.push(k.props.name),m(Ue,Object.assign({},k.props,{internalCreatedByPane:!0,internalLeftPadded:$!==0}),k.children?{default:k.children.tab}:void 0))):b.map((k,$)=>(i.value.push(k.props.name),$===0?k:At(k)))):m(xt,{onResize:this.handleNavResize},{default:()=>m("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(j)?m(On,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:F}):m("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll},F()))}),r&&a&&C?Pt(a,!0):null,gt(c,k=>k&&m("div",{class:`${e}-tabs-nav__suffix`},k))),y&&(this.animated&&(j==="top"||j==="bottom")?m("div",{ref:"tabsPaneWrapperRef",style:v,class:[`${e}-tabs-pane-wrapper`,u]},It(f,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):It(f,this.mergedValue,this.renderedNames)))}});function It(e,t,o,r,a,n,i){const d=[];return e.forEach(u=>{const{name:v,displayDirective:_,"display-directive":s}=u.props,c=b=>_===b||s===b,f=t===v;if(u.key!==void 0&&(u.key=v),f||c("show")||c("show:lazy")&&o.has(v)){o.has(v)||o.add(v);const b=!c("if");d.push(b?Ot(u,[[Ft,f]]):u)}}),i?m(Bt,{name:`${i}-transition`,onBeforeLeave:r,onEnter:a,onAfterEnter:n},{default:()=>d}):d}function Pt(e,t){return m(Ue,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function At(e){const t=fn(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function We(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const Dr={__name:"BreadCrumb",setup(e){const t=Ze(),o=Pe();function r(n){n!==o.path&&t.push(n)}function a(n){return n!=null&&n.customIcon?Vt(n.customIcon,{size:18}):n!=null&&n.icon?le(n.icon,{size:18}):null}return(n,i)=>{const d=vr,u=fr;return I(),W(u,null,{default:Y(()=>[(I(!0),U(ie,null,ke(O(o).matched.filter(v=>{var _;return!!((_=v.meta)!=null&&_.title)}),v=>(I(),W(d,{key:v.path,onClick:_=>r(v.path)},{default:Y(()=>[(I(),W(jt(a(v.meta)))),Wt(" "+ve(v.meta.title),1)]),_:2},1032,["onClick"]))),128))]),_:1})}}},Vr={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Kr=D("path",{fill:"currentColor",d:"M11 13h10v-2H11m0-2h10V7H11M3 3v2h18V3M3 21h18v-2H3m0-7l4 4V8m4 9h10v-2H11v2Z"},null,-1),Yr=[Kr];function Ur(e,t){return I(),U("svg",Vr,Yr)}const Xr={name:"mdi-format-indent-decrease",render:Ur},qr={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Gr=D("path",{fill:"currentColor",d:"M11 13h10v-2H11m0-2h10V7H11M3 3v2h18V3M11 17h10v-2H11M3 8v8l4-4m-4 9h18v-2H3v2Z"},null,-1),Zr=[Gr];function Jr(e,t){return I(),U("svg",qr,Zr)}const Qr={name:"mdi-format-indent-increase",render:Jr},ea={__name:"MenuCollapse",setup(e){const t=Ae();return(o,r)=>{const a=Qr,n=Xr,i=xe;return I(),W(i,{size:"20","cursor-pointer":"",onClick:O(t).switchCollapsed},{default:Y(()=>[O(t).collapsed?(I(),W(a,{key:0})):(I(),W(n,{key:1}))]),_:1},8,["onClick"])}}},ta={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},oa=D("path",{fill:"currentColor",d:"m290 236.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6l43.7 43.7a8.01 8.01 0 0 0 13.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 0 0 0 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 0 0-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6L423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"},null,-1),na=[oa];function ra(e,t){return I(),U("svg",ta,na)}const aa={name:"ant-design-fullscreen-outlined",render:ra},ia={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},la=D("path",{fill:"currentColor",d:"M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 0 0 0 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 0 0 391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6L877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 0 0-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"},null,-1),sa=[la];function ca(e,t){return I(),U("svg",ia,sa)}const da={name:"ant-design-fullscreen-exit-outlined",render:ca},ua={__name:"FullScreen",setup(e){const{isFullscreen:t,toggle:o}=mn();return(r,a)=>{const n=da,i=aa,d=xe;return I(),W(d,{mr20:"",size:"18",style:{cursor:"pointer"},onClick:O(o)},{default:Y(()=>[O(t)?(I(),W(n,{key:0})):(I(),W(i,{key:1}))]),_:1},8,["onClick"])}}},fa={flex:"","cursor-pointer":"","items-center":""},ma=["src"],ha={__name:"UserAvatar",setup(e){const t=hn(),o=[{label:"退出登录",key:"logout",icon:le("mdi:exit-to-app",{size:"14px"})}];function r(a){a==="logout"&&$dialog.confirm({title:"提示",type:"info",content:"确认退出？",confirm(){t.logout(),$message.success("已退出登录")}})}return(a,n)=>{const i=Qe;return I(),W(i,{options:o,onSelect:r},{default:Y(()=>[D("div",fa,[D("img",{src:O(t).avatar,mr10:"","h-35":"","w-35":"","rounded-full":""},null,8,ma),D("span",null,ve(O(t).name),1)])]),_:1})}}},va={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ba=D("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"},null,-1),pa=[ba];function ga(e,t){return I(),U("svg",va,pa)}const xa={name:"mdi-github",render:ga},_a={__name:"GithubSite",setup(e){function t(){window.open("https://github.com/zclzone/vue-naive-admin")}return(o,r)=>{const a=xa,n=xe;return I(),W(n,{"mr-20":"",size:"18",style:{cursor:"pointer"},onClick:t},{default:Y(()=>[V(a)]),_:1})}}},ya={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ca=D("path",{fill:"currentColor",d:"m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81l1.42-1.42M1 13h3v-2H1m12 9h-2v3h2"},null,-1),wa=[Ca];function za(e,t){return I(),U("svg",ya,wa)}const Sa={name:"mdi-white-balance-sunny",render:za},$a={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ra=D("path",{fill:"currentColor",d:"M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12Z"},null,-1),ka=[Ra];function Ta(e,t){return I(),U("svg",$a,ka)}const Ia={name:"mdi-moon-waning-crescent",render:Ta},Pa={__name:"ThemeMode",setup(e){const t=Ae(),o=vn(),r=()=>{t.toggleDark(),bn(o)()};return(a,n)=>{const i=Ia,d=Sa,u=xe;return I(),W(u,{"mr-20":"","cursor-pointer":"",size:"18",onClick:r},{default:Y(()=>[O(o)?(I(),W(i,{key:0})):(I(),W(d,{key:1}))]),_:1})}}},Aa={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},La=D("path",{fill:"currentColor",d:"M4 19v-2h2v-7q0-2.075 1.25-3.688T10.5 4.2v-.7q0-.625.438-1.063T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2H4Zm8-7.5ZM12 22q-.825 0-1.413-.588T10 20h4q0 .825-.588 1.413T12 22Zm-4-5h8v-7q0-1.65-1.175-2.825T12 6q-1.65 0-2.825 1.175T8 10v7Z"},null,-1),Ba=[La];function Na(e,t){return I(),U("svg",Aa,Ba)}const Ea={name:"material-symbols-notifications-outline",render:Na},Ha={class:"cus-scroll-y max-h-200 w-220"},Ma={"mb-4":"","text-ellipsis":""},Oa={"text-hex-bbb":""},Fa={__name:"MessageNotification",setup(e){const t=N(""),o=[{name:"zan",title:"点赞",messages:[{content:"你的文章《XX》收到一条点赞",time:ne()},{content:"你的文章《YY》收到一条点赞",time:ne()},{content:"你的文章《AA》收到一条点赞",time:ne()},{content:"你的文章《BB》收到一条点赞",time:ne()},{content:"你的文章《CC》收到一条点赞",time:ne()},{content:"你的文章《DD》收到一条点赞",time:ne()}]},{name:"star",title:"关注",messages:[{content:"张三 关注了你",time:ne()},{content:"王五 关注了你",time:ne()}]},{name:"comment",title:"评论",messages:[{content:'张三 评论了你的文章《XX》"学到了"',time:ne()},{content:'李四 评论了你的文章《YY》"不如Vue"',time:ne()}]}],r=N(o.map(n=>n.messages).flat().length);re(t,n=>{if(r===0)return;const i=o.findIndex(d=>d.name===n);r.value-=o[i].messages.length,r.value<0&&(r.value=0)});function a(n){var i;n&&!t.value&&(t.value=(i=o[0])==null?void 0:i.name)}return(n,i)=>{const d=Ea,u=xe,v=cr,_=Mr,s=Wr,c=Pn;return I(),W(c,{trigger:"click",placement:"bottom","onUpdate:show":a},{trigger:Y(()=>[V(v,{value:O(r),"mr-20":"","cursor-pointer":""},{default:Y(()=>[V(u,{size:"18","color-black":"",dark:"color-hex-fff"},{default:Y(()=>[V(d)]),_:1})]),_:1},8,["value"])]),default:Y(()=>[V(s,{value:O(t),"onUpdate:value":i[0]||(i[0]=f=>pn(t)?t.value=f:null),type:"line","justify-content":"space-around",animated:""},{default:Y(()=>[(I(),U(ie,null,ke(o,f=>V(_,{key:f.name,name:f.name,tab:f.title+`(${f.messages.length})`},{default:Y(()=>[D("ul",Ha,[(I(!0),U(ie,null,ke(f.messages,(b,y)=>(I(),U("li",{key:y,class:"flex-col py-12","border-t":"1 solid gray-200",style:Te(y>0?"":"border: none;")},[D("span",Ma,ve(b.content),1),D("span",Oa,ve(b.time),1)],4))),128))])]),_:2},1032,["name","tab"])),64))]),_:1},8,["value"])]),_:1})}}},ja={flex:"","items-center":""},Wa={"ml-auto":"",flex:"","items-center":""},Da={__name:"index",setup(e){return(t,o)=>(I(),U(ie,null,[D("div",ja,[V(ea),V(Dr,{"ml-15":"",hidden:"","sm:block":""})]),D("div",Wa,[V(Fa),V(Pa),V(_a),V(ua),V(ha)])],64))}},Va={__name:"SideLogo",setup(e){const t="Dunhao Admin",o=Ae();return(r,a)=>{const n=Ln,i=Dt("router-link");return I(),W(i,{"h-60":"","f-c-c":"",to:"/"},{default:Y(()=>[V(n,{"text-36":"","color-primary":""}),Ot(D("h2",{"ml-10":"","max-w-140":"","flex-shrink-0":"","text-16":"","font-bold":"","color-primary":""},ve(O(t)),513),[[Ft,!O(o).collapsed]])]),_:1})}}};const Ka={__name:"SideMenu",setup(e){const t=Ze(),o=Pe(),r=gn(),a=T(()=>{var s;return((s=o.meta)==null?void 0:s.activeMenu)||o.name}),n=T(()=>r.menus.map(s=>u(s)).sort((s,c)=>s.order-c.order)),i=N(null);re(o,()=>ze(this,null,function*(){var s;yield se(),(s=i.value)==null||s.showOption()}));function d(s,c){return _t(c)?c:"/"+[s,c].filter(f=>!!f&&f!=="/").map(f=>f.replace(/(^\/)|(\/$)/g,"")).join("/")}function u(s,c=""){var y,C;let f={label:s.meta&&s.meta.title||s.name,key:s.name,path:d(c,s.path),icon:v(s.meta),order:((y=s.meta)==null?void 0:y.order)||0};const b=s.children?s.children.filter(R=>R.name&&!R.isHidden):[];if(!b.length)return f;if(b.length===1){const R=b[0];f=vt(ht({},f),{label:((C=R.meta)==null?void 0:C.title)||R.name,key:R.name,path:d(f.path,R.path),icon:v(R.meta)});const M=R.children?R.children.filter(F=>F.name&&!F.isHidden):[];M.length===1?f=u(M[0],f.path):M.length>1&&(f.children=M.map(F=>u(F,f.path)).sort((F,j)=>F.order-j.order))}else f.children=b.map(R=>u(R,f.path)).sort((R,M)=>R.order-M.order);return f}function v(s){return s!=null&&s.customIcon?Vt(s.customIcon,{size:18}):s!=null&&s.icon?le(s.icon,{size:18}):null}function _(s,c){_t(c.path)?window.open(c.path):t.push(c.path)}return(s,c)=>{const f=Hr;return I(),W(f,{ref_key:"menu",ref:i,class:"side-menu",accordion:"",indent:18,"collapsed-icon-size":22,"collapsed-width":64,options:O(n),value:O(a),"onUpdate:value":_},null,8,["options","value"])}}},Ya={__name:"index",setup(e){return(t,o)=>(I(),U(ie,null,[V(Va),V(Ka)],64))}},Ua={__name:"AppMain",setup(e){const t=Je(),o=T(()=>t.tags.filter(r=>r.keepAlive).map(r=>r.name));return(r,a)=>{const n=Dt("router-view");return I(),W(n,null,{default:Y(({Component:i,route:d})=>[(I(),W(xn,{include:O(o)},[O(t).reloading?Le("",!0):(I(),W(jt(i),{key:d.fullPath}))],1032,["include"]))]),_:1})}}},Xa={__name:"ContextMenu",props:{show:{type:Boolean,default:!1},currentPath:{type:String,default:""},x:{type:Number,default:0},y:{type:Number,default:0}},emits:["update:show"],setup(e,{emit:t}){const o=e,r=Je(),a=T(()=>[{label:"重新加载",key:"reload",disabled:o.currentPath!==r.activeTag,icon:le("mdi:refresh",{size:"14px"})},{label:"关闭",key:"close",disabled:r.tags.length<=1,icon:le("mdi:close",{size:"14px"})},{label:"关闭其他",key:"close-other",disabled:r.tags.length<=1,icon:le("mdi:arrow-expand-horizontal",{size:"14px"})},{label:"关闭左侧",key:"close-left",disabled:r.tags.length<=1||o.currentPath===r.tags[0].path,icon:le("mdi:arrow-expand-left",{size:"14px"})},{label:"关闭右侧",key:"close-right",disabled:r.tags.length<=1||o.currentPath===r.tags[r.tags.length-1].path,icon:le("mdi:arrow-expand-right",{size:"14px"})}]),n=Pe(),i=new Map([["reload",()=>{var v;r.reloadTag(n.path,(v=n.meta)==null?void 0:v.keepAlive)}],["close",()=>{r.removeTag(o.currentPath)}],["close-other",()=>{r.removeOther(o.currentPath)}],["close-left",()=>{r.removeLeft(o.currentPath)}],["close-right",()=>{r.removeRight(o.currentPath)}]]);function d(){t("update:show",!1)}function u(v){const _=i.get(v);_&&_(),d()}return(v,_)=>{const s=Qe;return I(),W(s,{show:e.show,options:O(a),x:e.x,y:e.y,placement:"bottom-start",onClickoutside:d,onSelect:u},null,8,["show","options","x","y"])}}},qa={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ga=D("path",{fill:"currentColor",d:"M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"},null,-1),Za=[Ga];function Ja(e,t){return I(),U("svg",qa,Za)}const Qa={name:"ic-baseline-keyboard-arrow-right",render:Ja},ei={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ti=D("path",{fill:"currentColor",d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"},null,-1),oi=[ti];function ni(e,t){return I(),U("svg",ei,oi)}const ri={name:"ic-baseline-keyboard-arrow-left",render:ni};const ai=["onMousewheel"],ii={__name:"ScrollX",props:{showArrow:{type:Boolean,default:!0}},setup(e,{expose:t}){const o=N(0),r=N(null),a=N(null),n=N(!1),i=wt(()=>{var f,b;const s=(f=a.value)==null?void 0:f.offsetWidth,c=(b=r.value)==null?void 0:b.offsetWidth;n.value=c>s,u(s,c)},200);function d(s){var y,C;const{wheelDelta:c}=s,f=(y=a.value)==null?void 0:y.offsetWidth,b=(C=r.value)==null?void 0:C.offsetWidth;c<0&&(f>b&&o.value<-10||f<=b&&b+o.value-f<-10)||c>0&&o.value>10||(o.value+=c,u(f,b))}const u=wt(function(s,c){n.value?-o.value>c-s?o.value=s-c:o.value>0&&(o.value=0):o.value=0},200),v=N([]);Xe(()=>{i(),v.value.push(Ct(document.body,i)),v.value.push(Ct(r.value,i))}),_n(()=>{v.value.forEach(s=>{s==null||s.disconnect()})});function _(s,c){var y,C;const f=(y=a.value)==null?void 0:y.offsetWidth,b=(C=r.value)==null?void 0:C.offsetWidth;b<=f||(s<-o.value+150&&(o.value=-(s-150),u(f,b)),s+c>-o.value+f&&(o.value=f-(s+c),u(f,b)))}return t({handleScroll:_}),(s,c)=>{const f=ri,b=Qa;return I(),U("div",{ref_key:"wrapper",ref:a,class:"wrapper",onMousewheel:Ke(d,["prevent"])},[e.showArrow&&O(n)?(I(),U(ie,{key:0},[D("div",{class:"left dark:bg-dark!",onClick:c[0]||(c[0]=y=>d({wheelDelta:120}))},[V(f)]),D("div",{class:"right dark:bg-dark!",onClick:c[1]||(c[1]=y=>d({wheelDelta:-120}))},[V(b)])],64)):Le("",!0),D("div",{ref_key:"content",ref:r,class:Cn(["content",{overflow:O(n)&&e.showArrow}]),style:Te({transform:`translateX(${O(o)}px)`})},[yn(s.$slots,"default",{},void 0,!0)],6)],40,ai)}}},li=Hn(ii,[["__scopeId","data-v-7e986ec4"]]);const si={__name:"index",setup(e){const t=Pe(),o=Ze(),r=Je(),a=N([]),n=N(null),i=wn({show:!1,x:0,y:0,currentPath:""});re(()=>t.path,()=>{var R,M,F;const{name:c,fullPath:f}=t,b=(R=t.meta)==null?void 0:R.title,y=(M=t.meta)==null?void 0:M.icon,C=(F=t.meta)==null?void 0:F.keepAlive;r.addTag({name:c,path:f,title:b,icon:y,keepAlive:C})},{immediate:!0}),re(()=>r.activeIndex,c=>ze(this,null,function*(){var C,R;yield se();const f=(C=a.value[c])==null?void 0:C.$el;if(!f)return;const{offsetLeft:b,offsetWidth:y}=f;(R=n.value)==null||R.handleScroll(b+y,y)}),{immediate:!0});const d=c=>{r.setActiveTag(c),o.push(c)};function u(){i.show=!0}function v(){i.show=!1}function _(c,f,b){Object.assign(i,{x:c,y:f,currentPath:b})}function s(c,f){return ze(this,null,function*(){const{clientX:b,clientY:y}=c;v(),_(b,y,f.path),yield se(),u()})}return(c,f)=>{const b=En,y=kn;return I(),W(li,{ref_key:"scrollXRef",ref:n,class:"bg-white dark:bg-dark!"},{default:Y(()=>[(I(!0),U(ie,null,ke(O(r).tags,C=>(I(),W(y,{ref_for:!0,ref_key:"tabRefs",ref:a,key:C.path,class:"mx-5 cursor-pointer rounded-4 px-15 hover:color-primary",type:O(r).activeTag===C.path?"primary":"default",closable:O(r).tags.length>1,onClick:R=>d(C.path),onClose:Ke(R=>O(r).removeTag(C.path),["stop"]),onContextmenu:Ke(R=>s(R,C),["prevent"])},zn({default:Y(()=>[Wt(" "+ve(C.title),1)]),_:2},[C.icon?{name:"icon",fn:Y(()=>[V(b,{icon:C.icon,class:"mr-4"},null,8,["icon"])]),key:"0"}:void 0]),1032,["type","closable","onClick","onClose","onContextmenu"]))),128)),O(i).show?(I(),W(Xa,{key:0,show:O(i).show,"onUpdate:show":f[0]||(f[0]=C=>O(i).show=C),"current-path":O(i).currentPath,x:O(i).x,y:O(i).y},null,8,["show","current-path","x","y"])):Le("",!0)]),_:1},512)}}},ci={"flex-col":"","flex-1":"","overflow-hidden":""},di={key:0,hidden:"","border-b":"","bc-eee":"","sm:block":"","dark:border-0":""},ui={"flex-1":"","overflow-hidden":"","bg-hex-f5f6fb":"","dark:bg-hex-101014":""},ki={__name:"index",setup(e){const t=Ae();return(o,r)=>{const a=$r,n=yr;return I(),W(n,{"has-sider":"","wh-full":""},{default:Y(()=>[V(a,{bordered:"","collapse-mode":"width","collapsed-width":64,width:220,"native-scrollbar":!1,collapsed:O(t).collapsed},{default:Y(()=>[V(Ya)]),_:1},8,["collapsed"]),D("article",ci,[D("header",{"border-b":"1 solid #eee",class:"flex items-center bg-white px-15",dark:"bg-dark border-0",style:Te(`height: ${O(Sn).height}px`)},[V(Da)],4),O(yt).visible?(I(),U("section",di,[V(si,{style:Te({height:`${O(yt).height}px`})},null,8,["style"])])):Le("",!0),D("section",ui,[V(Ua)])])]),_:1})}}};export{ki as default};
