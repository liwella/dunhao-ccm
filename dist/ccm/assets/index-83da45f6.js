var w=(u,g,r)=>new Promise((c,o)=>{var f=s=>{try{l(r.next(s))}catch(e){o(e)}},i=s=>{try{l(r.throw(s))}catch(e){o(e)}},l=s=>s.done?c(s.value):Promise.resolve(s.value).then(f,i);l((r=r.apply(u,g)).next())});import{_ as R}from"./AppPage-2347a5b8.js";import{_ as $}from"./logo-034bb49d.js";import{s as S,i as B,p as N,q as v,t as h,v as q,o as A,j as D,w as y,x as K,l as a,n as t,k as m,m as x,y as L,z as T,A as V,B as z,_ as C}from"./index-967a368f.js";import{_ as P,a as U}from"./Checkbox-55f9ae12.js";import"./_plugin-vue_export-helper-b1890646.js";import"./Suffix-5fa70e3c.js";const j="/assets/login_banner-6e96327c.webp",M="/assets/login_bg-ed2739b3.webp",Y={login:u=>S.post("/user/login",u,{noNeedToken:!0})},E={style:{transform:"translateY(25px)"},class:"m-auto max-w-700 min-w-345 f-c-c rounded-10 bg-white bg-opacity-60 p-15 card-shadow","dark:bg-dark":""},F=t("div",{hidden:"","w-380":"","px-20":"","py-35":"","md:block":""},[t("img",{src:j,"w-full":"",alt:"login_banner"})],-1),G={"w-320":"","flex-col":"","px-20":"","py-35":""},H={"f-c-c":"","text-24":"","font-normal":"",color:"#6a6a6a"},J={"mt-30":""},O={"mt-30":""},Q={"mt-20":""},W={"mt-20":""},ae={__name:"index",setup(u){const g="Dunhao Admin",r=B(),{query:c}=N(),o=v({name:"",password:""});f();function f(){const e=h.get("loginInfo");e&&(o.value.name=e.name||"",o.value.password=e.password||"")}const i=q("isRemember",!1),l=v(!1);function s(){return w(this,null,function*(){const{name:e,password:n}=o.value;if(!e||!n){$message.warning("请输入用户名和密码");return}try{l.value=!0,$message.loading("正在验证...");const d=yield Y.login({username:e,password:n.toString()});if($message.success("登录成功"),V(d.data.token),i.value?h.set("loginInfo",{name:e,password:n}):h.remove("loginInfo"),yield z(),c.redirect){const _=c.redirect;Reflect.deleteProperty(c,"redirect"),r.push({path:_,query:c})}else r.push("/")}catch(d){console.error(d),$message.removeMessage()}l.value=!1})}return(e,n)=>{const d=$,_=P,b=U,k=C,I=R;return A(),D(I,{"show-footer":!0,"bg-cover":"",style:K({backgroundImage:`url(${a(M)})`})},{default:y(()=>[t("div",E,[F,t("div",G,[t("h5",H,[m(d,{"mr-10":"","text-50":"","color-primary":""}),x(" "+L(a(g)),1)]),t("div",J,[m(_,{value:a(o).name,"onUpdate:value":n[0]||(n[0]=p=>a(o).name=p),autofocus:"",class:"h-50 items-center pl-10 text-16",placeholder:"admin",maxlength:20},null,8,["value"])]),t("div",O,[m(_,{value:a(o).password,"onUpdate:value":n[1]||(n[1]=p=>a(o).password=p),class:"h-50 items-center pl-10 text-16",type:"password","show-password-on":"mousedown",placeholder:"123456",maxlength:20,onKeypress:T(s,["enter"])},null,8,["value","onKeypress"])]),t("div",Q,[m(b,{checked:a(i),label:"记住我","on-update:checked":p=>i.value=p},null,8,["checked","on-update:checked"])]),t("div",W,[m(k,{"h-50":"","w-full":"","rounded-5":"","text-16":"",type:"primary",loading:a(l),onClick:s},{default:y(()=>[x(" 登录 ")]),_:1},8,["loading"])])])])]),_:1},8,["style"])}}};export{ae as default};
