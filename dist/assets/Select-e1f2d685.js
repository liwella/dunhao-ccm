import{d as re,q as R,D as Nn,Z as Ee,K as Ye,h as s,aR as En,c3 as tn,aQ as un,a9 as cn,ai as He,ag as ye,N as Dn,a1 as fn,c as S,a as z,Q as q,M as Y,al as Je,X as hn,b as Ce,L as K,c4 as Ln,e as _,J as xe,bc as Vn,f as he,av as qe,a5 as on,g as en,aw as Wn,aZ as jn,ae as Kn,a2 as Un,c5 as Hn,ao as qn,c6 as Gn,ah as Qn,u as Zn,b8 as Jn,by as Xn,ay as Yn,az as et,bz as ln,c7 as nt,bB as tt,bA as ot,af as X}from"./index-e20992e7.js";import{u as rn}from"./use-merged-state-6f165b97.js";import{a as lt,c as it,d as rt,h as Ae,b as at}from"./create-f3bd0fbc.js";import{a as st,u as dt}from"./Suffix-e3f3f9a6.js";import{u as ut}from"./use-compitable-31c4a204.js";import{i as nn,d as ct,a as Ge,_ as ft,g as ht,u as Xe,V as vt,b as bt,c as gt}from"./Tag-363a9f4f.js";import{V as pt,N as mt}from"./Empty-fbbb158f.js";function Qe(e){const a=e.filter(l=>l!==void 0);if(a.length!==0)return a.length===1?a[0]:l=>{e.forEach(d=>{d&&d(l)})}}const fe="v-hidden",wt=lt("[v-hidden]",{display:"none!important"}),an=re({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:a}){const l=R(null),d=R(null);function f(){const{value:h}=l,{getCounter:i,getTail:T}=e;let F;if(i!==void 0?F=i():F=d.value,!h||!F)return;F.hasAttribute(fe)&&F.removeAttribute(fe);const{children:O}=h,B=h.offsetWidth,k=[],P=a.tail?T==null?void 0:T():null;let v=P?P.offsetWidth:0,M=!1;const E=h.children.length-(a.tail?1:0);for(let p=0;p<E-1;++p){if(p<0)continue;const N=O[p];if(M){N.hasAttribute(fe)||N.setAttribute(fe,"");continue}else N.hasAttribute(fe)&&N.removeAttribute(fe);const W=N.offsetWidth;if(v+=W,k[p]=W,v>B){const{updateCounter:j}=e;for(let I=p;I>=0;--I){const V=E-1-I;j!==void 0?j(V):F.textContent=`${V}`;const U=F.offsetWidth;if(v-=k[I],v+U<=B||I===0){M=!0,p=I-1,P&&(p===-1?(P.style.maxWidth=`${B-U}px`,P.style.boxSizing="border-box"):P.style.maxWidth="");break}}}}const{onUpdateOverflow:m}=e;M?m!==void 0&&m(!0):(m!==void 0&&m(!1),F.setAttribute(fe,""))}const g=Nn();return wt.mount({id:"vueuc/overflow",head:!0,anchorMetaName:it,ssr:g}),Ee(f),{selfRef:l,counterRef:d,sync:f}},render(){const{$slots:e}=this;return Ye(this.sync),s("div",{class:"v-overflow",ref:"selfRef"},[En(e,"default"),e.counter?e.counter():s("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function vn(e,a){a&&(Ee(()=>{const{value:l}=e;l&&tn.registerHandler(l,a)}),un(()=>{const{value:l}=e;l&&tn.unregisterHandler(l)}))}const yt=re({name:"Checkmark",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},s("g",{fill:"none"},s("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),xt=re({props:{onFocus:Function,onBlur:Function},setup(e){return()=>s("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Ct(e,a){return s(fn,{name:"fade-in-scale-up-transition"},{default:()=>e?s(Dn,{clsPrefix:a,class:`${a}-base-select-option__check`},{default:()=>s(yt)}):null})}const sn=re({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:a,pendingTmNodeRef:l,multipleRef:d,valueSetRef:f,renderLabelRef:g,renderOptionRef:h,labelFieldRef:i,valueFieldRef:T,showCheckmarkRef:F,nodePropsRef:O,handleOptionClick:B,handleOptionMouseEnter:k}=cn(nn),P=He(()=>{const{value:m}=l;return m?e.tmNode.key===m.key:!1});function v(m){const{tmNode:p}=e;p.disabled||B(m,p)}function M(m){const{tmNode:p}=e;p.disabled||k(m,p)}function E(m){const{tmNode:p}=e,{value:N}=P;p.disabled||N||k(m,p)}return{multiple:d,isGrouped:He(()=>{const{tmNode:m}=e,{parent:p}=m;return p&&p.rawNode.type==="group"}),showCheckmark:F,nodeProps:O,isPending:P,isSelected:He(()=>{const{value:m}=a,{value:p}=d;if(m===null)return!1;const N=e.tmNode.rawNode[T.value];if(p){const{value:W}=f;return W.has(N)}else return m===N}),labelField:i,renderLabel:g,renderOption:h,handleMouseMove:E,handleMouseEnter:M,handleClick:v}},render(){const{clsPrefix:e,tmNode:{rawNode:a},isSelected:l,isPending:d,isGrouped:f,showCheckmark:g,nodeProps:h,renderOption:i,renderLabel:T,handleClick:F,handleMouseEnter:O,handleMouseMove:B}=this,k=Ct(l,e),P=T?[T(a,l),g&&k]:[ye(a[this.labelField],a,l),g&&k],v=h==null?void 0:h(a),M=s("div",Object.assign({},v,{class:[`${e}-base-select-option`,a.class,v==null?void 0:v.class,{[`${e}-base-select-option--disabled`]:a.disabled,[`${e}-base-select-option--selected`]:l,[`${e}-base-select-option--grouped`]:f,[`${e}-base-select-option--pending`]:d,[`${e}-base-select-option--show-checkmark`]:g}],style:[(v==null?void 0:v.style)||"",a.style||""],onClick:Qe([F,v==null?void 0:v.onClick]),onMouseenter:Qe([O,v==null?void 0:v.onMouseenter]),onMousemove:Qe([B,v==null?void 0:v.onMousemove])}),s("div",{class:`${e}-base-select-option__content`},P));return a.render?a.render({node:M,option:a,selected:l}):i?i({node:M,option:a,selected:l}):M}}),dn=re({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:a,labelFieldRef:l,nodePropsRef:d}=cn(nn);return{labelField:l,nodeProps:d,renderLabel:e,renderOption:a}},render(){const{clsPrefix:e,renderLabel:a,renderOption:l,nodeProps:d,tmNode:{rawNode:f}}=this,g=d==null?void 0:d(f),h=a?a(f,!1):ye(f[this.labelField],f,!1),i=s("div",Object.assign({},g,{class:[`${e}-base-select-group-header`,g==null?void 0:g.class]}),h);return f.render?f.render({node:i,option:f}):l?l({node:i,option:f,selected:!1}):i}}),Ft=S("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[S("scrollbar",`
 max-height: var(--n-height);
 `),S("virtual-list",`
 max-height: var(--n-height);
 `),S("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[z("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),S("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),S("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),z("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),z("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),z("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),S("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),S("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[q("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),Y("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Y("&:active",`
 color: var(--n-option-text-color-pressed);
 `),q("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),q("pending",[Y("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),q("selected",`
 color: var(--n-option-text-color-active);
 `,[Y("&::before",`
 background-color: var(--n-option-color-active);
 `),q("pending",[Y("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),q("disabled",`
 cursor: not-allowed;
 `,[Je("selected",`
 color: var(--n-option-text-color-disabled);
 `),q("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),z("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[hn({enterScale:"0.5"})])])]),Ot=re({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Ce.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const a=Ce("InternalSelectMenu","-internal-select-menu",Ft,Ln,e,K(e,"clsPrefix")),l=R(null),d=R(null),f=R(null),g=_(()=>e.treeMate.getFlattenedNodes()),h=_(()=>rt(g.value)),i=R(null);function T(){const{treeMate:o}=e;let u=null;const{value:A}=e;A===null?u=o.getFirstAvailableNode():(e.multiple?u=o.getNode((A||[])[(A||[]).length-1]):u=o.getNode(A),(!u||u.disabled)&&(u=o.getFirstAvailableNode())),G(u||null)}function F(){const{value:o}=i;o&&!e.treeMate.getNode(o.key)&&(i.value=null)}let O;xe(()=>e.show,o=>{o?O=xe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?T():F(),Ye(D)):F()},{immediate:!0}):O==null||O()},{immediate:!0}),un(()=>{O==null||O()});const B=_(()=>Vn(a.value.self[he("optionHeight",e.size)])),k=_(()=>qe(a.value.self[he("padding",e.size)])),P=_(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),v=_(()=>{const o=g.value;return o&&o.length===0});function M(o){const{onToggle:u}=e;u&&u(o)}function E(o){const{onScroll:u}=e;u&&u(o)}function m(o){var u;(u=f.value)===null||u===void 0||u.sync(),E(o)}function p(){var o;(o=f.value)===null||o===void 0||o.sync()}function N(){const{value:o}=i;return o||null}function W(o,u){u.disabled||G(u,!1)}function j(o,u){u.disabled||M(u)}function I(o){var u;Ae(o,"action")||(u=e.onKeyup)===null||u===void 0||u.call(e,o)}function V(o){var u;Ae(o,"action")||(u=e.onKeydown)===null||u===void 0||u.call(e,o)}function U(o){var u;(u=e.onMousedown)===null||u===void 0||u.call(e,o),!e.focusable&&o.preventDefault()}function ae(){const{value:o}=i;o&&G(o.getNext({loop:!0}),!0)}function J(){const{value:o}=i;o&&G(o.getPrev({loop:!0}),!0)}function G(o,u=!1){i.value=o,u&&D()}function D(){var o,u;const A=i.value;if(!A)return;const ne=h.value(A.key);ne!==null&&(e.virtualScroll?(o=d.value)===null||o===void 0||o.scrollTo({index:ne}):(u=f.value)===null||u===void 0||u.scrollTo({index:ne,elSize:B.value}))}function se(o){var u,A;!((u=l.value)===null||u===void 0)&&u.contains(o.target)&&((A=e.onFocus)===null||A===void 0||A.call(e,o))}function ve(o){var u,A;!((u=l.value)===null||u===void 0)&&u.contains(o.relatedTarget)||(A=e.onBlur)===null||A===void 0||A.call(e,o)}on(nn,{handleOptionMouseEnter:W,handleOptionClick:j,valueSetRef:P,pendingTmNodeRef:i,nodePropsRef:K(e,"nodeProps"),showCheckmarkRef:K(e,"showCheckmark"),multipleRef:K(e,"multiple"),valueRef:K(e,"value"),renderLabelRef:K(e,"renderLabel"),renderOptionRef:K(e,"renderOption"),labelFieldRef:K(e,"labelField"),valueFieldRef:K(e,"valueField")}),on(ct,l),Ee(()=>{const{value:o}=f;o&&o.sync()});const de=_(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:u},self:{height:A,borderRadius:ne,color:Fe,groupHeaderTextColor:Oe,actionDividerColor:Se,optionTextColorPressed:be,optionTextColor:ge,optionTextColorDisabled:te,optionTextColorActive:H,optionOpacityDisabled:pe,optionCheckColor:le,actionTextColor:Re,optionColorPending:ue,optionColorActive:ce,loadingColor:Me,loadingSize:Te,optionColorActivePending:Pe,[he("optionFontSize",o)]:me,[he("optionHeight",o)]:we,[he("optionPadding",o)]:Q}}=a.value;return{"--n-height":A,"--n-action-divider-color":Se,"--n-action-text-color":Re,"--n-bezier":u,"--n-border-radius":ne,"--n-color":Fe,"--n-option-font-size":me,"--n-group-header-text-color":Oe,"--n-option-check-color":le,"--n-option-color-pending":ue,"--n-option-color-active":ce,"--n-option-color-active-pending":Pe,"--n-option-height":we,"--n-option-opacity-disabled":pe,"--n-option-text-color":ge,"--n-option-text-color-active":H,"--n-option-text-color-disabled":te,"--n-option-text-color-pressed":be,"--n-option-padding":Q,"--n-option-padding-left":qe(Q,"left"),"--n-option-padding-right":qe(Q,"right"),"--n-loading-color":Me,"--n-loading-size":Te}}),{inlineThemeDisabled:ee}=e,Z=ee?en("internal-select-menu",_(()=>e.size[0]),de,e):void 0,oe={selfRef:l,next:ae,prev:J,getPendingTmNode:N};return vn(l,e.onResize),Object.assign({mergedTheme:a,virtualListRef:d,scrollbarRef:f,itemSize:B,padding:k,flattenedNodes:g,empty:v,virtualListContainer(){const{value:o}=d;return o==null?void 0:o.listElRef},virtualListContent(){const{value:o}=d;return o==null?void 0:o.itemsElRef},doScroll:E,handleFocusin:se,handleFocusout:ve,handleKeyUp:I,handleKeyDown:V,handleMouseDown:U,handleVirtualListResize:p,handleVirtualListScroll:m,cssVars:ee?void 0:de,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender},oe)},render(){const{$slots:e,virtualScroll:a,clsPrefix:l,mergedTheme:d,themeClass:f,onRender:g}=this;return g==null||g(),s("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${l}-base-select-menu`,f,this.multiple&&`${l}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?s("div",{class:`${l}-base-select-menu__loading`},s(jn,{clsPrefix:l,strokeWidth:20})):this.empty?s("div",{class:`${l}-base-select-menu__empty`,"data-empty":!0},Un(e.empty,()=>[s(mt,{theme:d.peers.Empty,themeOverrides:d.peerOverrides.Empty})])):s(Kn,{ref:"scrollbarRef",theme:d.peers.Scrollbar,themeOverrides:d.peerOverrides.Scrollbar,scrollable:this.scrollable,container:a?this.virtualListContainer:void 0,content:a?this.virtualListContent:void 0,onScroll:a?void 0:this.doScroll},{default:()=>a?s(pt,{ref:"virtualListRef",class:`${l}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:h})=>h.isGroup?s(dn,{key:h.key,clsPrefix:l,tmNode:h}):h.ignored?null:s(sn,{clsPrefix:l,key:h.key,tmNode:h})}):s("div",{class:`${l}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(h=>h.isGroup?s(dn,{key:h.key,clsPrefix:l,tmNode:h}):s(sn,{clsPrefix:l,key:h.key,tmNode:h})))}),Wn(e.action,h=>h&&[s("div",{class:`${l}-base-select-menu__action`,"data-action":!0,key:"action"},h),s(xt,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),St=Y([S("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[S("base-loading",`
 color: var(--n-loading-color);
 `),S("base-selection-tags","min-height: var(--n-height);"),z("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),z("state-border",`
 z-index: 1;
 border-color: #0000;
 `),S("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[z("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),S("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[z("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),S("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[z("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),S("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),S("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[S("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[z("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),z("render-label",`
 color: var(--n-text-color);
 `)]),Je("disabled",[Y("&:hover",[z("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),q("focus",[z("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),q("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),S("base-selection-label","background-color: var(--n-color-active);"),S("base-selection-tags","background-color: var(--n-color-active);")])]),q("disabled","cursor: not-allowed;",[z("arrow",`
 color: var(--n-arrow-color-disabled);
 `),S("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[S("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),z("render-label",`
 color: var(--n-text-color-disabled);
 `)]),S("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),S("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),S("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[z("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),z("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>q(`${e}-status`,[z("state-border",`border: var(--n-border-${e});`),Je("disabled",[Y("&:hover",[z("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),q("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),S("base-selection-label",`background-color: var(--n-color-active-${e});`),S("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),q("focus",[z("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),S("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),S("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[Y("&:last-child","padding-right: 0;"),S("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[z("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Rt=re({name:"InternalSelection",props:Object.assign(Object.assign({},Ce.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const a=R(null),l=R(null),d=R(null),f=R(null),g=R(null),h=R(null),i=R(null),T=R(null),F=R(null),O=R(null),B=R(!1),k=R(!1),P=R(!1),v=Ce("InternalSelection","-internal-selection",St,Hn,e,K(e,"clsPrefix")),M=_(()=>e.clearable&&!e.disabled&&(P.value||e.active)),E=_(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ye(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),m=_(()=>{const t=e.selectedOption;if(t)return t[e.labelField]}),p=_(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function N(){var t;const{value:c}=a;if(c){const{value:$}=l;$&&($.style.width=`${c.offsetWidth}px`,e.maxTagCount!=="responsive"&&((t=F.value)===null||t===void 0||t.sync()))}}function W(){const{value:t}=O;t&&(t.style.display="none")}function j(){const{value:t}=O;t&&(t.style.display="inline-block")}xe(K(e,"active"),t=>{t||W()}),xe(K(e,"pattern"),()=>{e.multiple&&Ye(N)});function I(t){const{onFocus:c}=e;c&&c(t)}function V(t){const{onBlur:c}=e;c&&c(t)}function U(t){const{onDeleteOption:c}=e;c&&c(t)}function ae(t){const{onClear:c}=e;c&&c(t)}function J(t){const{onPatternInput:c}=e;c&&c(t)}function G(t){var c;(!t.relatedTarget||!(!((c=d.value)===null||c===void 0)&&c.contains(t.relatedTarget)))&&I(t)}function D(t){var c;!((c=d.value)===null||c===void 0)&&c.contains(t.relatedTarget)||V(t)}function se(t){ae(t)}function ve(){P.value=!0}function de(){P.value=!1}function ee(t){!e.active||!e.filterable||t.target!==l.value&&t.preventDefault()}function Z(t){U(t)}function oe(t){if(t.key==="Backspace"&&!o.value&&!e.pattern.length){const{selectedOptions:c}=e;c!=null&&c.length&&Z(c[c.length-1])}}const o=R(!1);let u=null;function A(t){const{value:c}=a;if(c){const $=t.target.value;c.textContent=$,N()}e.ignoreComposition&&o.value?u=t:J(t)}function ne(){o.value=!0}function Fe(){o.value=!1,e.ignoreComposition&&J(u),u=null}function Oe(t){var c;k.value=!0,(c=e.onPatternFocus)===null||c===void 0||c.call(e,t)}function Se(t){var c;k.value=!1,(c=e.onPatternBlur)===null||c===void 0||c.call(e,t)}function be(){var t,c;if(e.filterable)k.value=!1,(t=h.value)===null||t===void 0||t.blur(),(c=l.value)===null||c===void 0||c.blur();else if(e.multiple){const{value:$}=f;$==null||$.blur()}else{const{value:$}=g;$==null||$.blur()}}function ge(){var t,c,$;e.filterable?(k.value=!1,(t=h.value)===null||t===void 0||t.focus()):e.multiple?(c=f.value)===null||c===void 0||c.focus():($=g.value)===null||$===void 0||$.focus()}function te(){const{value:t}=l;t&&(j(),t.focus())}function H(){const{value:t}=l;t&&t.blur()}function pe(t){const{value:c}=i;c&&c.setTextContent(`+${t}`)}function le(){const{value:t}=T;return t}function Re(){return l.value}let ue=null;function ce(){ue!==null&&window.clearTimeout(ue)}function Me(){e.disabled||e.active||(ce(),ue=window.setTimeout(()=>{p.value&&(B.value=!0)},100))}function Te(){ce()}function Pe(t){t||(ce(),B.value=!1)}xe(p,t=>{t||(B.value=!1)}),Ee(()=>{qn(()=>{const t=h.value;t&&(t.tabIndex=e.disabled||k.value?-1:0)})}),vn(d,e.onResize);const{inlineThemeDisabled:me}=e,we=_(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:c},self:{borderRadius:$,color:ke,placeholderColor:De,textColor:Le,paddingSingle:Ve,paddingMultiple:We,caretColor:ze,colorDisabled:_e,textColorDisabled:Be,placeholderColorDisabled:je,colorActive:Ke,boxShadowFocus:Ie,boxShadowActive:ie,boxShadowHover:n,border:r,borderFocus:b,borderHover:C,borderActive:w,arrowColor:x,arrowColorDisabled:y,loadingColor:L,colorActiveWarning:$e,boxShadowFocusWarning:Ue,boxShadowActiveWarning:gn,boxShadowHoverWarning:pn,borderWarning:mn,borderFocusWarning:wn,borderHoverWarning:yn,borderActiveWarning:xn,colorActiveError:Cn,boxShadowFocusError:Fn,boxShadowActiveError:On,boxShadowHoverError:Sn,borderError:Rn,borderFocusError:Mn,borderHoverError:Tn,borderActiveError:Pn,clearColor:kn,clearColorHover:zn,clearColorPressed:_n,clearSize:Bn,arrowSize:In,[he("height",t)]:$n,[he("fontSize",t)]:An}}=v.value;return{"--n-bezier":c,"--n-border":r,"--n-border-active":w,"--n-border-focus":b,"--n-border-hover":C,"--n-border-radius":$,"--n-box-shadow-active":ie,"--n-box-shadow-focus":Ie,"--n-box-shadow-hover":n,"--n-caret-color":ze,"--n-color":ke,"--n-color-active":Ke,"--n-color-disabled":_e,"--n-font-size":An,"--n-height":$n,"--n-padding-single":Ve,"--n-padding-multiple":We,"--n-placeholder-color":De,"--n-placeholder-color-disabled":je,"--n-text-color":Le,"--n-text-color-disabled":Be,"--n-arrow-color":x,"--n-arrow-color-disabled":y,"--n-loading-color":L,"--n-color-active-warning":$e,"--n-box-shadow-focus-warning":Ue,"--n-box-shadow-active-warning":gn,"--n-box-shadow-hover-warning":pn,"--n-border-warning":mn,"--n-border-focus-warning":wn,"--n-border-hover-warning":yn,"--n-border-active-warning":xn,"--n-color-active-error":Cn,"--n-box-shadow-focus-error":Fn,"--n-box-shadow-active-error":On,"--n-box-shadow-hover-error":Sn,"--n-border-error":Rn,"--n-border-focus-error":Mn,"--n-border-hover-error":Tn,"--n-border-active-error":Pn,"--n-clear-size":Bn,"--n-clear-color":kn,"--n-clear-color-hover":zn,"--n-clear-color-pressed":_n,"--n-arrow-size":In}}),Q=me?en("internal-selection",_(()=>e.size[0]),we,e):void 0;return{mergedTheme:v,mergedClearable:M,patternInputFocused:k,filterablePlaceholder:E,label:m,selected:p,showTagsPanel:B,isComposing:o,counterRef:i,counterWrapperRef:T,patternInputMirrorRef:a,patternInputRef:l,selfRef:d,multipleElRef:f,singleElRef:g,patternInputWrapperRef:h,overflowRef:F,inputTagElRef:O,handleMouseDown:ee,handleFocusin:G,handleClear:se,handleMouseEnter:ve,handleMouseLeave:de,handleDeleteOption:Z,handlePatternKeyDown:oe,handlePatternInputInput:A,handlePatternInputBlur:Se,handlePatternInputFocus:Oe,handleMouseEnterCounter:Me,handleMouseLeaveCounter:Te,handleFocusout:D,handleCompositionEnd:Fe,handleCompositionStart:ne,onPopoverUpdateShow:Pe,focus:ge,focusInput:te,blur:be,blurInput:H,updateCounter:pe,getCounter:le,getTail:Re,renderLabel:e.renderLabel,cssVars:me?void 0:we,themeClass:Q==null?void 0:Q.themeClass,onRender:Q==null?void 0:Q.onRender}},render(){const{status:e,multiple:a,size:l,disabled:d,filterable:f,maxTagCount:g,bordered:h,clsPrefix:i,onRender:T,renderTag:F,renderLabel:O}=this;T==null||T();const B=g==="responsive",k=typeof g=="number",P=B||k,v=s(Gn,null,{default:()=>s(st,{clsPrefix:i,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var E,m;return(m=(E=this.$slots).arrow)===null||m===void 0?void 0:m.call(E)}})});let M;if(a){const{labelField:E}=this,m=D=>s("div",{class:`${i}-base-selection-tag-wrapper`,key:D.value},F?F({option:D,handleClose:()=>{this.handleDeleteOption(D)}}):s(Ge,{size:l,closable:!D.disabled,disabled:d,onClose:()=>{this.handleDeleteOption(D)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>O?O(D,!0):ye(D[E],D,!0)})),p=()=>(k?this.selectedOptions.slice(0,g):this.selectedOptions).map(m),N=f?s("div",{class:`${i}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:d,value:this.pattern,autofocus:this.autofocus,class:`${i}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),s("span",{ref:"patternInputMirrorRef",class:`${i}-base-selection-input-tag__mirror`},this.pattern)):null,W=B?()=>s("div",{class:`${i}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},s(Ge,{size:l,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:d})):void 0;let j;if(k){const D=this.selectedOptions.length-g;D>0&&(j=s("div",{class:`${i}-base-selection-tag-wrapper`,key:"__counter__"},s(Ge,{size:l,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:d},{default:()=>`+${D}`})))}const I=B?f?s(an,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:p,counter:W,tail:()=>N}):s(an,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:p,counter:W}):k?p().concat(j):p(),V=P?()=>s("div",{class:`${i}-base-selection-popover`},B?p():this.selectedOptions.map(m)):void 0,U=P?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,J=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?s("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`},s("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)):null,G=f?s("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-tags`},I,B?null:N,v):s("div",{ref:"multipleElRef",class:`${i}-base-selection-tags`,tabindex:d?void 0:0},I,v);M=s(Qn,null,P?s(ft,Object.assign({},U,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>G,default:V}):G,J)}else if(f){const E=this.pattern||this.isComposing,m=this.active?!E:!this.selected,p=this.active?!1:this.selected;M=s("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-label`},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${i}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:d,disabled:d,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),p?s("div",{class:`${i}-base-selection-label__render-label ${i}-base-selection-overlay`,key:"input"},s("div",{class:`${i}-base-selection-overlay__wrapper`},F?F({option:this.selectedOption,handleClose:()=>{}}):O?O(this.selectedOption,!0):ye(this.label,this.selectedOption,!0))):null,m?s("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${i}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,v)}else M=s("div",{ref:"singleElRef",class:`${i}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?s("div",{class:`${i}-base-selection-input`,title:ht(this.label),key:"input"},s("div",{class:`${i}-base-selection-input__content`},F?F({option:this.selectedOption,handleClose:()=>{}}):O?O(this.selectedOption,!0):ye(this.label,this.selectedOption,!0))):s("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)),v);return s("div",{ref:"selfRef",class:[`${i}-base-selection`,this.themeClass,e&&`${i}-base-selection--${e}-status`,{[`${i}-base-selection--active`]:this.active,[`${i}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${i}-base-selection--disabled`]:this.disabled,[`${i}-base-selection--multiple`]:this.multiple,[`${i}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},M,h?s("div",{class:`${i}-base-selection__border`}):null,h?s("div",{class:`${i}-base-selection__state-border`}):null)}});function Ne(e){return e.type==="group"}function bn(e){return e.type==="ignored"}function Ze(e,a){try{return!!(1+a.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch(l){return!1}}function Mt(e,a){return{getIsGroup:Ne,getIgnored:bn,getKey(d){return Ne(d)?d.name||d.key||"key-required":d[e]},getChildren(d){return d[a]}}}function Tt(e,a,l,d){if(!a)return e;function f(g){if(!Array.isArray(g))return[];const h=[];for(const i of g)if(Ne(i)){const T=f(i[d]);T.length&&h.push(Object.assign({},i,{[d]:T}))}else{if(bn(i))continue;a(l,i)&&h.push(i)}return h}return f(e)}function Pt(e,a,l){const d=new Map;return e.forEach(f=>{Ne(f)?f[l].forEach(g=>{d.set(g[a],g)}):d.set(f[a],f)}),d}const kt=Y([S("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),S("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[hn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),zt=Object.assign(Object.assign({},Ce.props),{to:Xe.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Dt=re({name:"Select",props:zt,setup(e){const{mergedClsPrefixRef:a,mergedBorderedRef:l,namespaceRef:d,inlineThemeDisabled:f}=Zn(e),g=Ce("Select","-select",kt,nt,e,a),h=R(e.defaultValue),i=K(e,"value"),T=rn(i,h),F=R(!1),O=R(""),B=_(()=>{const{valueField:n,childrenField:r}=e,b=Mt(n,r);return at(D.value,b)}),k=_(()=>Pt(J.value,e.valueField,e.childrenField)),P=R(!1),v=rn(K(e,"show"),P),M=R(null),E=R(null),m=R(null),{localeRef:p}=dt("Select"),N=_(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:p.value.placeholder}),W=ut(e,["items","options"]),j=[],I=R([]),V=R([]),U=R(new Map),ae=_(()=>{const{fallbackOption:n}=e;if(n===void 0){const{labelField:r,valueField:b}=e;return C=>({[r]:String(C),[b]:C})}return n===!1?!1:r=>Object.assign(n(r),{value:r})}),J=_(()=>V.value.concat(I.value).concat(W.value)),G=_(()=>{const{filter:n}=e;if(n)return n;const{labelField:r,valueField:b}=e;return(C,w)=>{if(!w)return!1;const x=w[r];if(typeof x=="string")return Ze(C,x);const y=w[b];return typeof y=="string"?Ze(C,y):typeof y=="number"?Ze(C,String(y)):!1}}),D=_(()=>{if(e.remote)return W.value;{const{value:n}=J,{value:r}=O;return!r.length||!e.filterable?n:Tt(n,G.value,r,e.childrenField)}});function se(n){const r=e.remote,{value:b}=U,{value:C}=k,{value:w}=ae,x=[];return n.forEach(y=>{if(C.has(y))x.push(C.get(y));else if(r&&b.has(y))x.push(b.get(y));else if(w){const L=w(y);L&&x.push(L)}}),x}const ve=_(()=>{if(e.multiple){const{value:n}=T;return Array.isArray(n)?se(n):[]}return null}),de=_(()=>{const{value:n}=T;return!e.multiple&&!Array.isArray(n)?n===null?null:se([n])[0]||null:null}),ee=Jn(e),{mergedSizeRef:Z,mergedDisabledRef:oe,mergedStatusRef:o}=ee;function u(n,r){const{onChange:b,"onUpdate:value":C,onUpdateValue:w}=e,{nTriggerFormChange:x,nTriggerFormInput:y}=ee;b&&X(b,n,r),w&&X(w,n,r),C&&X(C,n,r),h.value=n,x(),y()}function A(n){const{onBlur:r}=e,{nTriggerFormBlur:b}=ee;r&&X(r,n),b()}function ne(){const{onClear:n}=e;n&&X(n)}function Fe(n){const{onFocus:r,showOnFocus:b}=e,{nTriggerFormFocus:C}=ee;r&&X(r,n),C(),b&&te()}function Oe(n){const{onSearch:r}=e;r&&X(r,n)}function Se(n){const{onScroll:r}=e;r&&X(r,n)}function be(){var n;const{remote:r,multiple:b}=e;if(r){const{value:C}=U;if(b){const{valueField:w}=e;(n=ve.value)===null||n===void 0||n.forEach(x=>{C.set(x[w],x)})}else{const w=de.value;w&&C.set(w[e.valueField],w)}}}function ge(n){const{onUpdateShow:r,"onUpdate:show":b}=e;r&&X(r,n),b&&X(b,n),P.value=n}function te(){oe.value||(ge(!0),P.value=!0,e.filterable&&Be())}function H(){ge(!1)}function pe(){O.value="",V.value=j}const le=R(!1);function Re(){e.filterable&&(le.value=!0)}function ue(){e.filterable&&(le.value=!1,v.value||pe())}function ce(){oe.value||(v.value?e.filterable?Be():H():te())}function Me(n){var r,b;!((b=(r=m.value)===null||r===void 0?void 0:r.selfRef)===null||b===void 0)&&b.contains(n.relatedTarget)||(F.value=!1,A(n),H())}function Te(n){Fe(n),F.value=!0}function Pe(n){F.value=!0}function me(n){var r;!((r=M.value)===null||r===void 0)&&r.$el.contains(n.relatedTarget)||(F.value=!1,A(n),H())}function we(){var n;(n=M.value)===null||n===void 0||n.focus(),H()}function Q(n){var r;v.value&&(!((r=M.value)===null||r===void 0)&&r.$el.contains(tt(n))||H())}function t(n){if(!Array.isArray(n))return[];if(ae.value)return Array.from(n);{const{remote:r}=e,{value:b}=k;if(r){const{value:C}=U;return n.filter(w=>b.has(w)||C.has(w))}else return n.filter(C=>b.has(C))}}function c(n){$(n.rawNode)}function $(n){if(oe.value)return;const{tag:r,remote:b,clearFilterAfterSelect:C,valueField:w}=e;if(r&&!b){const{value:x}=V,y=x[0]||null;if(y){const L=I.value;L.length?L.push(y):I.value=[y],V.value=j}}if(b&&U.value.set(n[w],n),e.multiple){const x=t(T.value),y=x.findIndex(L=>L===n[w]);if(~y){if(x.splice(y,1),r&&!b){const L=ke(n[w]);~L&&(I.value.splice(L,1),C&&(O.value=""))}}else x.push(n[w]),C&&(O.value="");u(x,se(x))}else{if(r&&!b){const x=ke(n[w]);~x?I.value=[I.value[x]]:I.value=j}_e(),H(),u(n[w],n)}}function ke(n){return I.value.findIndex(b=>b[e.valueField]===n)}function De(n){v.value||te();const{value:r}=n.target;O.value=r;const{tag:b,remote:C}=e;if(Oe(r),b&&!C){if(!r){V.value=j;return}const{onCreate:w}=e,x=w?w(r):{[e.labelField]:r,[e.valueField]:r},{valueField:y}=e;W.value.some(L=>L[y]===x[y])||I.value.some(L=>L[y]===x[y])?V.value=j:V.value=[x]}}function Le(n){n.stopPropagation();const{multiple:r}=e;!r&&e.filterable&&H(),ne(),r?u([],[]):u(null,null)}function Ve(n){!Ae(n,"action")&&!Ae(n,"empty")&&n.preventDefault()}function We(n){Se(n)}function ze(n){var r,b,C,w,x;if(!e.keyboard){n.preventDefault();return}switch(n.key){case" ":if(e.filterable)break;n.preventDefault();case"Enter":if(!(!((r=M.value)===null||r===void 0)&&r.isComposing)){if(v.value){const y=(b=m.value)===null||b===void 0?void 0:b.getPendingTmNode();y?c(y):e.filterable||(H(),_e())}else if(te(),e.tag&&le.value){const y=V.value[0];if(y){const L=y[e.valueField],{value:$e}=T;e.multiple&&Array.isArray($e)&&$e.some(Ue=>Ue===L)||$(y)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;v.value&&((C=m.value)===null||C===void 0||C.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;v.value?(w=m.value)===null||w===void 0||w.next():te();break;case"Escape":v.value&&(ot(n),H()),(x=M.value)===null||x===void 0||x.focus();break}}function _e(){var n;(n=M.value)===null||n===void 0||n.focus()}function Be(){var n;(n=M.value)===null||n===void 0||n.focusInput()}function je(){var n;v.value&&((n=E.value)===null||n===void 0||n.syncPosition())}be(),xe(K(e,"options"),be);const Ke={focus:()=>{var n;(n=M.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=M.value)===null||n===void 0||n.blur()}},Ie=_(()=>{const{self:{menuBoxShadow:n}}=g.value;return{"--n-menu-box-shadow":n}}),ie=f?en("select",void 0,Ie,e):void 0;return Object.assign(Object.assign({},Ke),{mergedStatus:o,mergedClsPrefix:a,mergedBordered:l,namespace:d,treeMate:B,isMounted:Xn(),triggerRef:M,menuRef:m,pattern:O,uncontrolledShow:P,mergedShow:v,adjustedTo:Xe(e),uncontrolledValue:h,mergedValue:T,followerRef:E,localizedPlaceholder:N,selectedOption:de,selectedOptions:ve,mergedSize:Z,mergedDisabled:oe,focused:F,activeWithoutMenuOpen:le,inlineThemeDisabled:f,onTriggerInputFocus:Re,onTriggerInputBlur:ue,handleTriggerOrMenuResize:je,handleMenuFocus:Pe,handleMenuBlur:me,handleMenuTabOut:we,handleTriggerClick:ce,handleToggle:c,handleDeleteOption:$,handlePatternInput:De,handleClear:Le,handleTriggerBlur:Me,handleTriggerFocus:Te,handleKeydown:ze,handleMenuAfterLeave:pe,handleMenuClickOutside:Q,handleMenuScroll:We,handleMenuKeydown:ze,handleMenuMousedown:Ve,mergedTheme:g,cssVars:f?void 0:Ie,themeClass:ie==null?void 0:ie.themeClass,onRender:ie==null?void 0:ie.onRender})},render(){return s("div",{class:`${this.mergedClsPrefix}-select`},s(vt,null,{default:()=>[s(bt,null,{default:()=>s(Rt,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,a;return[(a=(e=this.$slots).arrow)===null||a===void 0?void 0:a.call(e)]}})}),s(gt,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Xe.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>s(fn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,a,l;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Yn(s(Ot,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(a=this.menuProps)===null||a===void 0?void 0:a.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(l=this.menuProps)===null||l===void 0?void 0:l.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var d,f;return[(f=(d=this.$slots).empty)===null||f===void 0?void 0:f.call(d)]},action:()=>{var d,f;return[(f=(d=this.$slots).action)===null||f===void 0?void 0:f.call(d)]}}),this.displayDirective==="show"?[[et,this.mergedShow],[ln,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[ln,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{xt as F,Ot as N,Dt as _,Mt as c,Qe as m};
