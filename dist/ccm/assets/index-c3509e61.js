import{_ as $}from"./AppPage-87197e9c.js";import{c as _,a as f,d as k,u as y,b,bY as B,a3 as T,e as E,g as F,h as r,aR as v,bZ as P,o as h,j,w as a,n as e,k as c,l as p,y as A,m as x,ae as L,aB as O,aN as W,L as D,_ as H}from"./index-5837b170.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-merged-state-61c7490e.js";const I=_("statistic",[f("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),_("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[f("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[_("icon",{verticalAlign:"-0.125em"})]),f("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),f("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[_("icon",{verticalAlign:"-0.125em"})])])]),U=Object.assign(Object.assign({},b.props),{tabularNums:Boolean,label:String,value:[String,Number]}),Y=k({name:"Statistic",props:U,setup(n){const{mergedClsPrefixRef:t,inlineThemeDisabled:u,mergedRtlRef:d}=y(n),i=b("Statistic","-statistic",I,B,n,t),l=T("Statistic",d,t),s=E(()=>{const{self:{labelFontWeight:m,valueFontSize:g,valueFontWeight:z,valuePrefixTextColor:w,labelTextColor:S,valueSuffixTextColor:C,valueTextColor:R,labelFontSize:N},common:{cubicBezierEaseInOut:V}}=i.value;return{"--n-bezier":V,"--n-label-font-size":N,"--n-label-font-weight":m,"--n-label-text-color":S,"--n-value-font-weight":z,"--n-value-font-size":g,"--n-value-prefix-text-color":w,"--n-value-suffix-text-color":C,"--n-value-text-color":R}}),o=u?F("statistic",void 0,s,n):void 0;return{rtlEnabled:l,mergedClsPrefix:t,cssVars:u?void 0:s,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var n;const{mergedClsPrefix:t,$slots:{default:u,label:d,prefix:i,suffix:l}}=this;return(n=this.onRender)===null||n===void 0||n.call(this),r("div",{class:[`${t}-statistic`,this.themeClass,this.rtlEnabled&&`${t}-statistic--rtl`],style:this.cssVars},v(d,s=>r("div",{class:`${t}-statistic__label`},this.label||s)),r("div",{class:`${t}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},v(i,s=>s&&r("span",{class:`${t}-statistic-value__prefix`},s)),this.value!==void 0?r("span",{class:`${t}-statistic-value__content`},this.value):v(u,s=>s&&r("span",{class:`${t}-statistic-value__content`},s)),v(l,s=>s&&r("span",{class:`${t}-statistic-value__suffix`},s))))}}),Z={"flex-1":""},q={flex:"","items-center":""},G=["src"],J={"ml-20":""},K={"text-16":""},M=e("p",{"mt-5":"","text-12":"","op-60":""},"今天又是元气满满的一天",-1),Q={"ml-auto":"",flex:"","items-center":""},X=e("a",{href:"https://github.com/zclzone/vue-naive-admin"},[e("img",{alt:"stars",src:"https://badgen.net/github/stars/zclzone/vue-naive-admin"})],-1),ee=e("a",{href:"https://github.com/zclzone/vue-naive-admin"},[e("img",{alt:"forks",src:"https://badgen.net/github/forks/zclzone/vue-naive-admin"})],-1),te={flex:"","flex-wrap":"","justify-between":""},se=e("p",{"op-60":""},"一个基于 Vue3.0、Vite、Naive UI 的轻量级后台管理模板",-1),ae=e("div",{"h-0":"","w-300":""},null,-1),ne=e("div",{"h-0":"","w-300":""},null,-1),oe=e("div",{"h-0":"","w-300":""},null,-1),ie=e("div",{"h-0":"","w-300":""},null,-1),de={__name:"index",setup(n){const t=P();return(u,d)=>{const i=Y,l=D,s=H,o=$;return h(),j(o,{"show-footer":!0},{default:a(()=>[e("div",Z,[c(l,{"rounded-10":""},{default:a(()=>[e("div",q,[e("img",{"rounded-full":"",width:"60",src:p(t).avatar},null,8,G),e("div",J,[e("p",K,"Hello, "+A(p(t).name),1),M]),e("div",Q,[c(i,{label:"待办",value:4},{suffix:a(()=>[x("/ 10")]),_:1}),c(i,{label:"Stars","ml-80":"","w-100":""},{default:a(()=>[X]),_:1}),c(i,{label:"Forks","ml-80":"","w-100":""},{default:a(()=>[ee]),_:1})])])]),_:1}),c(l,{title:"项目",size:"small",segmented:!0,"mt-15":"","rounded-10":""},{"header-extra":a(()=>[c(s,{text:"",type:"primary"},{default:a(()=>[x("更多")]),_:1})]),default:a(()=>[e("div",te,[(h(),L(O,null,W(10,m=>c(l,{key:m,class:"mb-10 mt-10 w-300 flex-shrink-0 cursor-pointer","hover:card-shadow":"",title:"Vue Naive Admin",size:"small"},{default:a(()=>[se]),_:2},1024)),64)),ae,ne,oe,ie])]),_:1})])]),_:1})}}};export{de as default};
