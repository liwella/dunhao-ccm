var M=(s,c,y)=>new Promise((u,C)=>{var x=p=>{try{v(y.next(p))}catch(_){C(_)}},A=p=>{try{v(y.throw(p))}catch(_){C(_)}},v=p=>p.done?u(p.value):Promise.resolve(p.value).then(x,A);v((y=y.apply(s,c)).next())});import{_ as re,a as ne,b as ie}from"./QueryBarItem-a8873b6f.js";import{u as ue,_ as se,a as de,b as pe}from"./useCRUD-696e992d.js";import{a as me}from"./TheIcon-6da507ef.js";import{s as g,q as m,Z as ve,i as fe,o as N,j as $,w as n,n as V,k as a,m as R,l as e,_ as w,z as ce,aJ as S,aP as P,h as U,b3 as ye}from"./index-adb153df.js";import{a as z}from"./icon-b50f946c.js";import{_ as _e}from"./Checkbox-43e39531.js";import{_ as be}from"./Select-51821a7f.js";import{_ as ge}from"./DatePicker-ab8bb13e.js";import"./AppPage-5effcef2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-merged-state-3f4a4d46.js";import"./Space-b491b664.js";import"./Tag-fcdb943f.js";import"./create-07525ab7.js";import"./use-compitable-af5b82dd.js";import"./Suffix-0139f59d.js";import"./Empty-5bda7331.js";const f={pageMovie:(s={})=>g.post("/movie/pageMovie",s),detail:(s={})=>g.post("/movie/detail",s),addOrUpdate:(s={})=>g.post("/movie/addOrUpdate",s),deleteMovie:(s={})=>g.post("/movie/deleteMovie",s),listCategory:()=>g.post("/category/listCategory"),listArea:()=>g.post("/movie/listArea")},he=["src"],Se=Object.assign({name:"Crud"},{__name:"index",setup(s){const c=m(null),y=m([]),u=m({});function C(){for(const r in u.value)u.value[r]=null}const x=m({});ve(()=>{var r;(r=c.value)==null||r.handleSearch(),p(),Y()});const A=m([{label:"有效",value:1},{label:"无效",value:0}]),v=m([]);function p(){return M(this,null,function*(){const r=yield f.listCategory();_(r==null?void 0:r.data)})}function _(r=[]){r.forEach(t=>{const b={label:t.name,value:t.id};v.value.push(b),t.children&&t.children.length&&_(t.children)})}const q=m([]);function Y(){return M(this,null,function*(){const r=yield f.listArea();r==null||r.data.forEach(t=>{const b={label:t.description,value:t.value};q.value.push(b)})})}const B=[{type:"selection",fixed:"left"},{title:"影片名称",key:"mvName",width:150,ellipsis:{tooltip:!0}},{title:"分类",key:"categoryName",width:80,ellipsis:{tooltip:!0}},{title:"地区",key:"mvArea.description",width:80},{title:"出厂年份",key:"mvYear",width:80},{title:"创建日期",key:"createDate",width:180,render(r){return U("span",r.createDate)}},{title:"最后更新日期",key:"updateDate",width:180,render(r){return U("span",r.updateDate)}},{title:"最新集数",key:"updateInfo",width:120},{title:"演员列表",key:"actorList",width:150,ellipsis:{tooltip:!0}},{title:"导演列表",key:"directorList",width:150,ellipsis:{tooltip:!0}},{title:"状态",key:"state.description",width:80},{title:"影片主图",key:"picture",width:150,ellipsis:{tooltip:!0}},{title:"评分",key:"score",width:80},{title:"操作",key:"actions",width:280,align:"center",fixed:"right",hideInExcel:!0,render(r){return[U(w,{size:"small",type:"primary",secondary:!0,onClick:()=>{Q(r.movieId)}},{default:()=>"观看",icon:z("majesticons:eye-line",{size:14})}),U(w,{size:"small",type:"primary",style:"margin-left: 15px;",onClick:()=>{Z(r)}},{default:()=>"编辑",icon:z("material-symbols:edit-outline",{size:14})}),U(w,{size:"small",type:"error",style:"margin-left: 15px;",onClick:()=>T(r.movieId)},{default:()=>"删除",icon:z("material-symbols:delete-outline",{size:14})})]}}],h=m([]);function E(r){r.length?h.value=[...r]:h.value=[]}function F(){h.value.length?(T(h.value),h.value=[]):$message.error("未选中任何数据")}const j=fe();function Q(r){j.push({name:"detail",params:{id:r}})}const{modalVisible:O,modalAction:L,modalTitle:K,modalLoading:J,handleAdd:W,handleDelete:T,handleEdit:Z,handleSave:G,modalForm:o,modalFormRef:H}=ue({name:"影片",initForm:{state:{value:1,description:"有效"},mvArea:{value:-1,description:"未知"}},doCreate:f.addOrUpdate,doDelete:f.deleteMovie,doUpdate:f.addOrUpdate,doSearch:f.detail,refresh:()=>{var r;return(r=c.value)==null?void 0:r.handleSearch()}});return(r,t)=>{const b=me,d=_e,I=ne,k=be,D=ge,X=ie,i=se,ee=ye,te=de,ae=pe,le=re;return N(),$(le,{"show-footer":"",title:"影片管理"},{action:n(()=>[V("div",null,[a(e(w),{type:"primary",onClick:e(W)},{default:n(()=>[a(b,{icon:"material-symbols:add",size:18,class:"mr-5"}),R(" 新建影片 ")]),_:1},8,["onClick"]),a(e(w),{type:"error",class:"ml-16",onClick:F},{default:n(()=>[a(b,{icon:"material-symbols:delete-outline",size:18,class:"mr-5"}),R(" 批量删除 ")]),_:1})])]),default:n(()=>[a(X,{ref_key:"$table",ref:c,"query-items":e(u),"onUpdate:queryItems":t[4]||(t[4]=l=>S(u)?u.value=l:null),"row-key":"movieId","extra-params":e(x),"scroll-x":1200,columns:B,"get-data":e(f).pageMovie,onOnChecked:E,onOnDataChange:t[5]||(t[5]=l=>y.value=l),onResetQueryItems:C},{queryBar:n(()=>[a(I,{label:"片名","label-width":35},{default:n(()=>{var l;return[a(d,{value:e(u).mvName,"onUpdate:value":t[0]||(t[0]=oe=>e(u).mvName=oe),type:"text",placeholder:"请输入片名",onKeypress:ce((l=e(c))==null?void 0:l.handleSearch,["enter"])},null,8,["value","onKeypress"])]}),_:1}),a(I,{label:"类型","label-width":35,"content-width":130},{default:n(()=>[a(k,{value:e(u).mvType,"onUpdate:value":t[1]||(t[1]=l=>e(u).mvType=l),placeholder:"请选择类型",clearable:"",options:e(v)},null,8,["value","options"])]),_:1}),a(I,{label:"出厂地区","label-width":60,"content-width":120},{default:n(()=>[a(k,{value:e(u).mvArea,"onUpdate:value":t[2]||(t[2]=l=>e(u).mvArea=l),placeholder:"请选择地区",clearable:"",options:e(q)},null,8,["value","options"])]),_:1}),a(I,{label:"出厂年份","label-width":60,"content-width":120},{default:n(()=>[a(D,{"formatted-value":e(u).mvYear,"onUpdate:formattedValue":t[3]||(t[3]=l=>e(u).mvYear=l),"value-format":"yyyy",type:"year",clearable:""},null,8,["formatted-value"])]),_:1})]),_:1},8,["query-items","extra-params","get-data"]),a(ae,{visible:e(O),"onUpdate:visible":t[21]||(t[21]=l=>S(O)?O.value=l:null),title:e(K),loading:e(J),"show-footer":e(L)!=="view",onOnSave:e(G)},{default:n(()=>[a(te,{ref_key:"modalFormRef",ref:H,model:e(o),"label-placement":"left","label-align":"left","label-width":80,disabled:e(L)==="view"},{default:n(()=>[a(i,{label:"影片id",path:"movieId"},{default:n(()=>[a(d,{value:e(o).movieId,"onUpdate:value":t[6]||(t[6]=l=>e(o).movieId=l),disabled:""},null,8,["value"])]),_:1}),a(i,{label:"影片名称",path:"mvName",rule:{required:!0,message:"请输入影片名称",trigger:"blur"}},{default:n(()=>[a(d,{value:e(o).mvName,"onUpdate:value":t[7]||(t[7]=l=>e(o).mvName=l)},null,8,["value"])]),_:1}),a(i,{label:"影片分类",path:"mvType",rule:{required:!0,message:"请选择分类",trigger:"blur",type:"number"}},{default:n(()=>[a(k,{value:e(o).mvType,"onUpdate:value":t[8]||(t[8]=l=>e(o).mvType=l),placeholder:"请选择分类",filterable:"",options:e(v)},null,8,["value","options"])]),_:1}),e(o).mvArea?(N(),$(i,{key:0,label:"地区",path:"mvArea.value",rule:{required:!0,message:r.请选择地区,trigger:"change",type:"number"}},{default:n(()=>[a(k,{value:e(o).mvArea.value,"onUpdate:value":t[9]||(t[9]=l=>e(o).mvArea.value=l),placeholder:"请选择地区",filterable:"",options:e(q)},null,8,["value","options"])]),_:1},8,["rule"])):P("",!0),a(i,{label:"出场年份",path:"mvYear"},{default:n(()=>[a(D,{"formatted-value":e(o).mvYear,"onUpdate:formattedValue":t[10]||(t[10]=l=>e(o).mvYear=l),"value-format":"yyyy",type:"year",clearable:""},null,8,["formatted-value"])]),_:1}),a(i,{label:"创建时间",path:"createDate"},{default:n(()=>[a(D,{"formatted-value":e(o).createDate,"onUpdate:formattedValue":t[11]||(t[11]=l=>e(o).createDate=l),"value-format":"yyyy-MM-dd",type:"date",clearable:""},null,8,["formatted-value"])]),_:1}),a(i,{label:"最后更新时间",path:"updateDate"},{default:n(()=>[a(D,{"formatted-value":e(o).updateDate,"onUpdate:formattedValue":t[12]||(t[12]=l=>e(o).updateDate=l),"value-format":"yyyy-MM-dd",type:"date",clearable:""},null,8,["formatted-value"])]),_:1}),a(i,{label:"最新集数",path:"updateInfo",rule:{required:!0,message:"请输入最新集数",trigger:"blur"}},{default:n(()=>[a(d,{value:e(o).updateInfo,"onUpdate:value":t[13]||(t[13]=l=>e(o).updateInfo=l),placeholder:"请输入最新集数"},null,8,["value"])]),_:1}),a(i,{label:"详情",path:"description"},{default:n(()=>[a(d,{value:e(o).description,"onUpdate:value":t[14]||(t[14]=l=>e(o).description=l),placeholder:"请输入详情",type:"textarea"},null,8,["value"])]),_:1}),a(i,{label:"演员列表",path:"actorList"},{default:n(()=>[a(d,{value:e(o).actorList,"onUpdate:value":t[15]||(t[15]=l=>e(o).actorList=l),placeholder:"请输入演员列表"},null,8,["value"])]),_:1}),a(i,{label:"导演列表",path:"directorList"},{default:n(()=>[a(d,{value:e(o).directorList,"onUpdate:value":t[16]||(t[16]=l=>e(o).directorList=l),placeholder:"请输入导演列表"},null,8,["value"])]),_:1}),e(o).state?(N(),$(i,{key:1,label:"状态",path:"state.value",rule:{required:!0,message:"请选择影片状态",trigger:"change",type:"number"}},{default:n(()=>[a(k,{value:e(o).state.value,"onUpdate:value":t[17]||(t[17]=l=>e(o).state.value=l),options:e(A)},null,8,["value","options"])]),_:1})):P("",!0),a(i,{label:"影片主图",path:"picture"},{default:n(()=>[a(d,{value:e(o).picture,"onUpdate:value":t[18]||(t[18]=l=>e(o).picture=l),placeholder:"请输入主图地址"},null,8,["value"])]),_:1}),a(i,null,{default:n(()=>[a(ee,{"w-3xl":""},{cover:n(()=>[V("img",{src:e(o).picture},null,8,he)]),_:1})]),_:1}),a(i,{label:"轮播图",path:"screenPicture"},{default:n(()=>[a(d,{value:e(o).screenPicture,"onUpdate:value":t[19]||(t[19]=l=>e(o).screenPicture=l)},null,8,["value"])]),_:1}),a(i,{label:"评分",path:"score"},{default:n(()=>[a(d,{value:e(o).score,"onUpdate:value":t[20]||(t[20]=l=>e(o).score=l),placeholder:"请输入评分"},null,8,["value"])]),_:1})]),_:1},8,["model","disabled"])]),_:1},8,["visible","title","loading","show-footer","onOnSave"])]),_:1})}}});export{Se as default};
