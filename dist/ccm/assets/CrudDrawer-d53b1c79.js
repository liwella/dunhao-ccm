import{d as H,q as x,O as K,bd as L,e as y,u as G,a3 as ve,a5 as pe,a7 as we,aw as ye,b8 as $e,be as ze,aa as T,bf as Se,bg as Be,bh as Ce,K as U,af as N,h as s,bi as ke,aA as Z,bj as xe,b6 as J,Z as n,bk as F,c as b,$ as w,a as k,as as Ee,ax as Re,b as Q,bl as Te,a6 as W,bm as Fe,g as _e,az as Oe,ay as Me,a9 as B,bn as Pe,aG as je,bo as De,o as Ie,j as Ae,w as R,k as A,aj as Ue,ak as X,n as He,m as Y,l as Le,D as Ne,x as We,_ as Xe}from"./index-5837b170.js";import{u as V,f as q}from"./use-merged-state-61c7490e.js";const Ye=H({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=x(!!e.show),r=x(null),c=K(L);let l=0,d="",u=null;const m=x(!1),h=x(!1),f=y(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:g,mergedRtlRef:_}=G(e),O=ve("Drawer",_,g),M=o=>{h.value=!0,l=f.value?o.clientY:o.clientX,d=document.body.style.cursor,document.body.style.cursor=f.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",C),document.body.addEventListener("mouseleave",p),document.body.addEventListener("mouseup",$)},P=()=>{u!==null&&(window.clearTimeout(u),u=null),h.value?m.value=!0:u=window.setTimeout(()=>{m.value=!0},300)},j=()=>{u!==null&&(window.clearTimeout(u),u=null),m.value=!1},{doUpdateHeight:D,doUpdateWidth:I}=c,C=o=>{var v,E;if(h.value)if(f.value){let z=((v=r.value)===null||v===void 0?void 0:v.offsetHeight)||0;const S=l-o.clientY;z+=e.placement==="bottom"?S:-S,D(z),l=o.clientY}else{let z=((E=r.value)===null||E===void 0?void 0:E.offsetWidth)||0;const S=l-o.clientX;z+=e.placement==="right"?S:-S,I(z),l=o.clientX}},$=()=>{h.value&&(l=0,h.value=!1,document.body.style.cursor=d,document.body.removeEventListener("mousemove",C),document.body.removeEventListener("mouseup",$),document.body.removeEventListener("mouseleave",p))},p=$;pe(()=>{e.show&&(t.value=!0)}),we(()=>e.show,o=>{o||$()}),ye(()=>{$()});const i=y(()=>{const{show:o}=e,v=[[N,o]];return e.showMask||v.push([$e,e.onClickoutside,void 0,{capture:!0}]),v});function a(){var o;t.value=!1,(o=e.onAfterLeave)===null||o===void 0||o.call(e)}return ze(y(()=>e.blockScroll&&t.value)),T(Se,r),T(Be,null),T(Ce,null),{bodyRef:r,rtlEnabled:O,mergedClsPrefix:c.mergedClsPrefixRef,isMounted:c.isMountedRef,mergedTheme:c.mergedThemeRef,displayed:t,transitionName:y(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:a,bodyDirectives:i,handleMousedownResizeTrigger:M,handleMouseenterResizeTrigger:P,handleMouseleaveResizeTrigger:j,isDragging:h,isHoverOnResizeTrigger:m}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?U(s("div",{role:"none"},s(ke,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>s(Z,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>U(s("div",xe(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?s("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?s("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):s(J,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[N,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Ve,cubicBezierEaseOut:qe}=F;function Ke({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-right"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ve}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${qe}`}),n(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateX(100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Ge,cubicBezierEaseOut:Ze}=F;function Je({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-left"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ge}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Ze}`}),n(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateX(-100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:Qe,cubicBezierEaseOut:et}=F;function tt({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-top"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Qe}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${et}`}),n(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateY(-100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:rt,cubicBezierEaseOut:ot}=F;function nt({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-bottom"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${rt}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${ot}`}),n(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateY(100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateY(100%)"})]}const it=n([b("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Ke(),Je(),tt(),nt(),w("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),w("native-scrollbar",[b("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),k("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[w("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),b("drawer-content-wrapper",`
 box-sizing: border-box;
 `),b("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[w("native-scrollbar",[b("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),b("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),b("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),b("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[k("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),b("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),w("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[k("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),w("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[k("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),w("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[k("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),w("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[k("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),n("body",[n(">",[b("drawer-container",{position:"fixed"})])]),b("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[n("> *",{pointerEvents:"all"})]),b("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[w("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Ee({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),st=Object.assign(Object.assign({},Q.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),at=H({name:"Drawer",inheritAttrs:!1,props:st,setup(e){const{mergedClsPrefixRef:t,namespaceRef:r,inlineThemeDisabled:c}=G(e),l=Re(),d=Q("Drawer","-drawer",it,Te,e,t),u=x(e.defaultWidth),m=x(e.defaultHeight),h=V(W(e,"width"),u),f=V(W(e,"height"),m),g=y(()=>{const{placement:i}=e;return i==="top"||i==="bottom"?"":q(h.value)}),_=y(()=>{const{placement:i}=e;return i==="left"||i==="right"?"":q(f.value)}),O=i=>{const{onUpdateWidth:a,"onUpdate:width":o}=e;a&&B(a,i),o&&B(o,i),u.value=i},M=i=>{const{onUpdateHeight:a,"onUpdate:width":o}=e;a&&B(a,i),o&&B(o,i),m.value=i},P=y(()=>[{width:g.value,height:_.value},e.drawerStyle||""]);function j(i){const{onMaskClick:a,maskClosable:o}=e;o&&C(!1),a&&a(i)}const D=Fe();function I(i){var a;(a=e.onEsc)===null||a===void 0||a.call(e),e.show&&e.closeOnEsc&&Pe(i)&&!D.value&&C(!1)}function C(i){const{onHide:a,onUpdateShow:o,"onUpdate:show":v}=e;o&&B(o,i),v&&B(v,i),a&&!i&&B(a,i)}T(L,{isMountedRef:l,mergedThemeRef:d,mergedClsPrefixRef:t,doUpdateShow:C,doUpdateHeight:M,doUpdateWidth:O});const $=y(()=>{const{common:{cubicBezierEaseInOut:i,cubicBezierEaseIn:a,cubicBezierEaseOut:o},self:{color:v,textColor:E,boxShadow:z,lineHeight:S,headerPadding:ee,footerPadding:te,bodyPadding:re,titleFontSize:oe,titleTextColor:ne,titleFontWeight:ie,headerBorderBottom:se,footerBorderTop:ae,closeIconColor:le,closeIconColorHover:de,closeIconColorPressed:ce,closeColorHover:ue,closeColorPressed:he,closeIconSize:fe,closeSize:be,closeBorderRadius:me,resizableTriggerColorHover:ge}}=d.value;return{"--n-line-height":S,"--n-color":v,"--n-text-color":E,"--n-box-shadow":z,"--n-bezier":i,"--n-bezier-out":o,"--n-bezier-in":a,"--n-header-padding":ee,"--n-body-padding":re,"--n-footer-padding":te,"--n-title-text-color":ne,"--n-title-font-size":oe,"--n-title-font-weight":ie,"--n-header-border-bottom":se,"--n-footer-border-top":ae,"--n-close-icon-color":le,"--n-close-icon-color-hover":de,"--n-close-icon-color-pressed":ce,"--n-close-size":be,"--n-close-color-hover":ue,"--n-close-color-pressed":he,"--n-close-icon-size":fe,"--n-close-border-radius":me,"--n-resize-trigger-color-hover":ge}}),p=c?_e("drawer",void 0,$,e):void 0;return{mergedClsPrefix:t,namespace:r,mergedBodyStyle:P,handleMaskClick:j,handleEsc:I,mergedTheme:d,cssVars:c?void 0:$,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender,isMounted:l}},render(){const{mergedClsPrefix:e}=this;return s(Me,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),U(s("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?s(Z,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?s("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,s(Ye,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[Oe,{zIndex:this.zIndex,enabled:this.show}]])}})}}),lt={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},dt=H({name:"DrawerContent",props:lt,setup(){const e=K(L,null);e||je("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function r(){t(!1)}return{handleCloseClick:r,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:r,mergedTheme:c,bodyStyle:l,bodyContentStyle:d,headerStyle:u,footerStyle:m,scrollbarProps:h,closable:f,$slots:g}=this;return s("div",{role:"none",class:[`${t}-drawer-content`,r&&`${t}-drawer-content--native-scrollbar`]},g.header||e||f?s("div",{class:`${t}-drawer-header`,style:u,role:"none"},s("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},g.header!==void 0?g.header():e),f&&s(De,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,r?s("div",{class:`${t}-drawer-body`,style:l,role:"none"},s("div",{class:`${t}-drawer-body-content-wrapper`,style:d,role:"none"},g)):s(J,Object.assign({themeOverrides:c.peerOverrides.Scrollbar,theme:c.peers.Scrollbar},h,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:d}),g),g.footer?s("div",{class:`${t}-drawer-footer`,style:m,role:"none"},g.footer()):null)}}),ct={flex:"","justify-end":""},ft={__name:"CrudDrawer",props:{width:{type:String,default:"600px"},title:{type:String,default:""},showFooter:{type:Boolean,default:!0},visible:{type:Boolean,required:!0},loading:{type:Boolean,default:!1}},emits:["update:visible","onSave"],setup(e,{emit:t}){const r=e,c=y({get(){return r.visible},set(l){t("update:visible",l)}});return(l,d)=>{const u=Xe,m=dt,h=at;return Ie(),Ae(h,{show:Le(c),"onUpdate:show":d[2]||(d[2]=f=>Ne(c)?c.value=f:null),style:We({width:e.width}),placement:"right"},{default:R(()=>[A(m,{title:e.title},Ue({default:R(()=>[X(l.$slots,"default")]),_:2},[e.showFooter?{name:"footer",fn:R(()=>[He("footer",ct,[X(l.$slots,"footer",{},()=>[A(u,{onClick:d[0]||(d[0]=f=>c.value=!1)},{default:R(()=>[Y("取消")]),_:1}),A(u,{loading:e.loading,"ml-20":"",type:"primary",onClick:d[1]||(d[1]=f=>t("onSave"))},{default:R(()=>[Y(" 保存 ")]),_:1},8,["loading"])])])]),key:"0"}:void 0]),1032,["title"])]),_:3},8,["show","style"])}}};export{ft as _};
