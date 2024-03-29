import{aq as se,aT as de,aU as ce,c as O,a as t,a2 as A,Z as j,$ as l,a1 as H,d as ue,u as he,b as I,aJ as be,q as K,a6 as fe,e as z,f as w,X as M,aV as s,g as ge,aW as N,h as o,aR as m,P as ve,Q as we,a9 as U}from"./index-5837b170.js";import{u as me}from"./use-merged-state-61c7490e.js";const pe=e=>{const{primaryColor:d,opacityDisabled:f,borderRadius:i,textColor3:r}=e,p="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},de),{iconColor:r,textColor:"white",loadingColor:d,opacityDisabled:f,railColor:p,railColorActive:d,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:i,railBorderRadiusMedium:i,railBorderRadiusLarge:i,buttonBorderRadiusSmall:i,buttonBorderRadiusMedium:i,buttonBorderRadiusLarge:i,boxShadowFocus:`0 0 0 2px ${ce(d,{alpha:.2})}`})},ye={name:"Switch",common:se,self:pe},xe=ye,ke=O("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),O("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[A({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),j("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),l("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),H("disabled",[H("icon",[l("rubber-band",[l("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[j("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),l("active",[l("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[j("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),l("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[A()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),l("active",[t("rail","background-color: var(--n-rail-color-active);")]),l("loading",[t("rail",`
 cursor: wait;
 `)]),l("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Ce=Object.assign(Object.assign({},I.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let R;const $e=ue({name:"Switch",props:Ce,setup(e){R===void 0&&(typeof CSS!="undefined"?typeof CSS.supports!="undefined"?R=CSS.supports("width","max(1px)"):R=!1:R=!0);const{mergedClsPrefixRef:d,inlineThemeDisabled:f}=he(e),i=I("Switch","-switch",ke,xe,e,d),r=be(e),{mergedSizeRef:p,mergedDisabledRef:g}=r,k=K(e.defaultValue),$=fe(e,"value"),v=me($,k),C=z(()=>v.value===e.checkedValue),y=K(!1),n=K(!1),c=z(()=>{const{railStyle:a}=e;if(a)return a({focused:n.value,checked:C.value})});function u(a){const{"onUpdate:value":B,onChange:_,onUpdateValue:V}=e,{nTriggerFormInput:F,nTriggerFormChange:T}=r;B&&U(B,a),V&&U(V,a),_&&U(_,a),k.value=a,F(),T()}function E(){const{nTriggerFormFocus:a}=r;a()}function X(){const{nTriggerFormBlur:a}=r;a()}function q(){e.loading||g.value||(v.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue))}function Y(){n.value=!0,E()}function J(){n.value=!1,X(),y.value=!1}function Q(a){e.loading||g.value||a.key===" "&&(v.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue),y.value=!1)}function Z(a){e.loading||g.value||a.key===" "&&(a.preventDefault(),y.value=!0)}const L=z(()=>{const{value:a}=p,{self:{opacityDisabled:B,railColor:_,railColorActive:V,buttonBoxShadow:F,buttonColor:T,boxShadowFocus:G,loadingColor:ee,textColor:te,iconColor:ae,[w("buttonHeight",a)]:h,[w("buttonWidth",a)]:ne,[w("buttonWidthPressed",a)]:oe,[w("railHeight",a)]:b,[w("railWidth",a)]:S,[w("railBorderRadius",a)]:ie,[w("buttonBorderRadius",a)]:re},common:{cubicBezierEaseInOut:le}}=i.value;let W,D,P;return R?(W=`calc((${b} - ${h}) / 2)`,D=`max(${b}, ${h})`,P=`max(${S}, calc(${S} + ${h} - ${b}))`):(W=M((s(b)-s(h))/2),D=M(Math.max(s(b),s(h))),P=s(b)>s(h)?S:M(s(S)+s(h)-s(b))),{"--n-bezier":le,"--n-button-border-radius":re,"--n-button-box-shadow":F,"--n-button-color":T,"--n-button-width":ne,"--n-button-width-pressed":oe,"--n-button-height":h,"--n-height":D,"--n-offset":W,"--n-opacity-disabled":B,"--n-rail-border-radius":ie,"--n-rail-color":_,"--n-rail-color-active":V,"--n-rail-height":b,"--n-rail-width":S,"--n-width":P,"--n-box-shadow-focus":G,"--n-loading-color":ee,"--n-text-color":te,"--n-icon-color":ae}}),x=f?ge("switch",z(()=>p.value[0]),L,e):void 0;return{handleClick:q,handleBlur:J,handleFocus:Y,handleKeyup:Q,handleKeydown:Z,mergedRailStyle:c,pressed:y,mergedClsPrefix:d,mergedValue:v,checked:C,mergedDisabled:g,cssVars:f?void 0:L,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:d,checked:f,mergedRailStyle:i,onRender:r,$slots:p}=this;r==null||r();const{checked:g,unchecked:k,icon:$,"checked-icon":v,"unchecked-icon":C}=p,y=!(N($)&&N(v)&&N(C));return o("div",{role:"switch","aria-checked":f,class:[`${e}-switch`,this.themeClass,y&&`${e}-switch--icon`,f&&`${e}-switch--active`,d&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},o("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:i},m(g,n=>m(k,c=>n||c?o("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),n),o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),c)):null)),o("div",{class:`${e}-switch__button`},m($,n=>m(v,c=>m(C,u=>o(ve,null,{default:()=>this.loading?o(we,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(c||n)?o("div",{class:`${e}-switch__button-icon`,key:c?"checked-icon":"icon"},c||n):!this.checked&&(u||n)?o("div",{class:`${e}-switch__button-icon`,key:u?"unchecked-icon":"icon"},u||n):null})))),m(g,n=>n&&o("div",{key:"checked",class:`${e}-switch__checked`},n)),m(k,n=>n&&o("div",{key:"unchecked",class:`${e}-switch__unchecked`},n)))))}});export{$e as _};
