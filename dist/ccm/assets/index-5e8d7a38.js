var $=(u,c,y)=>new Promise((s,I)=>{var q=p=>{try{v(y.next(p))}catch(_){I(_)}},O=p=>{try{v(y.throw(p))}catch(_){I(_)}},v=p=>p.done?s(p.value):Promise.resolve(p.value).then(q,O);v((y=y.apply(u,c)).next())});import{_ as ue}from"./CommonPage-df3cba64.js";import{_ as de}from"./CrudDrawer-d53b1c79.js";import{_ as pe}from"./CrudTable-2986cf73.js";import{_ as me}from"./QueryBarItem-fca409cf.js";import{_ as ve}from"./TheIcon-2507ec8e.js";import{s as g,q as m,C as fe,J as Y,i as ce,o as w,j as U,w as i,n as B,K as A,l as e,_ as C,k as l,m as F,D as P,z as ye,F as E,h as D,L as _e}from"./index-5837b170.js";import{r as z}from"./icon-17ab6bf1.js";import{u as be,_ as ge,a as he}from"./useCRUD-f6f94421.js";import{_ as ke}from"./Input-de71e776.js";import{_ as we}from"./Select-a522e322.js";import{_ as Ue}from"./DatePicker-e94b59e3.js";import"./AppPage-87197e9c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-merged-state-61c7490e.js";import"./Space-fc43479b.js";import"./Checkbox-df9fc212.js";import"./Popover-09c0b6af.js";import"./get-803e7bb1.js";import"./use-compitable-8b432e4c.js";import"./Suffix-562a013d.js";import"./Dropdown-5a734c78.js";import"./create-d1a5db2f.js";import"./Tooltip-aaf5ff4a.js";import"./Empty-8e6e6efa.js";import"./use-locale-4062cbc7.js";import"./Eye-0db273d2.js";import"./Tag-cc294052.js";const f={pageMovie:(u={})=>g.post("/movie/pageMovie",u),detail:(u={})=>g.post("/movie/detail",u),addOrUpdate:(u={})=>g.post("/movie/addOrUpdate",u),deleteMovie:(u={})=>g.post("/movie/deleteMovie",u),listUserCategory:()=>g.post("/category/listUserCategory"),listArea:()=>g.post("/movie/listArea")},Ce=["src"],Ze=Object.assign({name:"Crud"},{__name:"index",setup(u){const c=m(null),y=m([]),s=m({});function I(){for(const r in s.value)s.value[r]=null}const q=m({});fe(()=>{var r;(r=c.value)==null||r.handleSearch(),p(),j()});const O=m([{label:"有效",value:1},{label:"无效",value:0}]),v=m([]);function p(){return $(this,null,function*(){const r=yield f.listUserCategory();_(r==null?void 0:r.data)})}function _(r=[]){r.forEach(t=>{const b={label:t.name,value:t.id};v.value.push(b),t.children&&t.children.length&&_(t.children)})}const N=m([]);function j(){return $(this,null,function*(){const r=yield f.listArea();r==null||r.data.forEach(t=>{const b={label:t.description,value:t.value};N.value.push(b)})})}const T=Y("permission"),K=[{type:"selection",fixed:"left"},{title:"影片名称",key:"mvName",width:150,ellipsis:{tooltip:!0}},{title:"分类",key:"categoryName",width:80,ellipsis:{tooltip:!0}},{title:"地区",key:"mvArea.description",width:80},{title:"出厂年份",key:"mvYear",width:80},{title:"创建日期",key:"createDate",width:120,render(r){return D("span",r.createDate)}},{title:"最后更新日期",key:"updateDate",width:120,render(r){return D("span",r.updateDate)}},{title:"最新集数",key:"updateInfo",width:120},{title:"演员列表",key:"actorList",width:150,ellipsis:{tooltip:!0}},{title:"导演列表",key:"directorList",width:150,ellipsis:{tooltip:!0}},{title:"状态",key:"state.description",width:80},{title:"影片主图",key:"picture",width:150,ellipsis:{tooltip:!0}},{title:"评分",key:"score",width:80},{title:"操作",key:"actions",width:280,align:"center",fixed:"right",hideInExcel:!0,render(r){return[D(C,{size:"small",type:"primary",secondary:!0,onClick:()=>{G(r.movieId)}},{default:()=>"观看",icon:z("majesticons:eye-line",{size:14})}),A(D(C,{size:"small",type:"primary",style:"margin-left: 15px;",onClick:()=>{ee({id:r.movieId})}},{default:()=>"编辑",icon:z("material-symbols:edit-outline",{size:14})}),[[T,"updateMovie"]]),A(D(C,{size:"small",type:"error",style:"margin-left: 15px;",onClick:()=>R({id:r.movieId})},{default:()=>"删除",icon:z("material-symbols:delete-outline",{size:14})}),[[T,"deleteMovie"]])]}}],h=m([]);function Q(r){r.length?h.value=[...r]:h.value=[]}function J(){h.value.length?(R({ids:h.value}),h.value=[]):$message.error("未选中任何数据")}const W=ce();function G(r){W.push({name:"detail",params:{id:r}})}const{modalVisible:L,modalAction:V,modalTitle:H,modalLoading:X,handleAdd:Z,handleDelete:R,handleEdit:ee,handleSave:te,modalForm:o,modalFormRef:ae}=be({name:"影片",initForm:{state:{value:1,description:"有效"},mvArea:{value:-1,description:"未知"}},doCreate:f.addOrUpdate,doDelete:f.deleteMovie,doUpdate:f.addOrUpdate,doSearch:f.detail,refresh:()=>{var r;return(r=c.value)==null?void 0:r.handleSearch()}});return(r,t)=>{const b=ve,d=ke,x=me,k=we,M=Ue,le=pe,n=ge,oe=_e,re=he,ie=de,ne=ue,S=Y("permission");return w(),U(ne,{"show-footer":"",title:"影片管理"},{action:i(()=>[B("div",null,[A((w(),U(e(C),{type:"primary",onClick:e(Z)},{default:i(()=>[l(b,{icon:"material-symbols:add",size:18,class:"mr-5"}),F(" 新建影片 ")]),_:1},8,["onClick"])),[[S,"addMovie"]]),A((w(),U(e(C),{type:"error",class:"ml-16",onClick:J},{default:i(()=>[l(b,{icon:"material-symbols:delete-outline",size:18,class:"mr-5"}),F(" 批量删除 ")]),_:1})),[[S,"deleteMovie"]])])]),default:i(()=>[l(le,{ref_key:"$table",ref:c,"query-items":e(s),"onUpdate:queryItems":t[4]||(t[4]=a=>P(s)?s.value=a:null),"row-key":"movieId","extra-params":e(q),"scroll-x":1200,columns:K,"get-data":e(f).pageMovie,onOnChecked:Q,onOnDataChange:t[5]||(t[5]=a=>y.value=a),onResetQueryItems:I},{queryBar:i(()=>[l(x,{label:"片名","label-width":35},{default:i(()=>{var a;return[l(d,{value:e(s).mvName,"onUpdate:value":t[0]||(t[0]=se=>e(s).mvName=se),type:"text",placeholder:"请输入片名",onKeypress:ye((a=e(c))==null?void 0:a.handleSearch,["enter"])},null,8,["value","onKeypress"])]}),_:1}),l(x,{label:"类型","label-width":35,"content-width":130},{default:i(()=>[l(k,{value:e(s).mvType,"onUpdate:value":t[1]||(t[1]=a=>e(s).mvType=a),placeholder:"请选择类型",clearable:"",options:e(v)},null,8,["value","options"])]),_:1}),l(x,{label:"出厂地区","label-width":60,"content-width":120},{default:i(()=>[l(k,{value:e(s).mvArea,"onUpdate:value":t[2]||(t[2]=a=>e(s).mvArea=a),placeholder:"请选择地区",clearable:"",options:e(N)},null,8,["value","options"])]),_:1}),l(x,{label:"出厂年份","label-width":60,"content-width":120},{default:i(()=>[l(M,{"formatted-value":e(s).mvYear,"onUpdate:formattedValue":t[3]||(t[3]=a=>e(s).mvYear=a),"value-format":"yyyy",type:"year",clearable:""},null,8,["formatted-value"])]),_:1})]),_:1},8,["query-items","extra-params","get-data"]),l(ie,{visible:e(L),"onUpdate:visible":t[21]||(t[21]=a=>P(L)?L.value=a:null),title:e(H),loading:e(X),"show-footer":e(V)!=="view",onOnSave:e(te)},{default:i(()=>[l(re,{ref_key:"modalFormRef",ref:ae,model:e(o),"label-placement":"left","label-align":"left","label-width":80,disabled:e(V)==="view"},{default:i(()=>[l(n,{label:"影片id",path:"movieId"},{default:i(()=>[l(d,{value:e(o).movieId,"onUpdate:value":t[6]||(t[6]=a=>e(o).movieId=a),disabled:""},null,8,["value"])]),_:1}),l(n,{label:"影片名称",path:"mvName",rule:{required:!0,message:"请输入影片名称",trigger:"blur"}},{default:i(()=>[l(d,{value:e(o).mvName,"onUpdate:value":t[7]||(t[7]=a=>e(o).mvName=a)},null,8,["value"])]),_:1}),l(n,{label:"影片分类",path:"mvType",rule:{required:!0,message:"请选择分类",trigger:"blur",type:"number"}},{default:i(()=>[l(k,{value:e(o).mvType,"onUpdate:value":t[8]||(t[8]=a=>e(o).mvType=a),placeholder:"请选择分类",filterable:"",options:e(v)},null,8,["value","options"])]),_:1}),e(o).mvArea?(w(),U(n,{key:0,label:"地区",path:"mvArea.value",rule:{required:!0,message:r.请选择地区,trigger:"change",type:"number"}},{default:i(()=>[l(k,{value:e(o).mvArea.value,"onUpdate:value":t[9]||(t[9]=a=>e(o).mvArea.value=a),placeholder:"请选择地区",filterable:"",options:e(N)},null,8,["value","options"])]),_:1},8,["rule"])):E("",!0),l(n,{label:"出场年份",path:"mvYear"},{default:i(()=>[l(M,{"formatted-value":e(o).mvYear,"onUpdate:formattedValue":t[10]||(t[10]=a=>e(o).mvYear=a),"value-format":"yyyy",type:"year",clearable:""},null,8,["formatted-value"])]),_:1}),l(n,{label:"创建时间",path:"createDate"},{default:i(()=>[l(M,{"formatted-value":e(o).createDate,"onUpdate:formattedValue":t[11]||(t[11]=a=>e(o).createDate=a),"value-format":"yyyy-MM-dd",type:"date",clearable:""},null,8,["formatted-value"])]),_:1}),l(n,{label:"最后更新时间",path:"updateDate"},{default:i(()=>[l(M,{"formatted-value":e(o).updateDate,"onUpdate:formattedValue":t[12]||(t[12]=a=>e(o).updateDate=a),"value-format":"yyyy-MM-dd",type:"date",clearable:""},null,8,["formatted-value"])]),_:1}),l(n,{label:"最新集数",path:"updateInfo",rule:{required:!0,message:"请输入最新集数",trigger:"blur"}},{default:i(()=>[l(d,{value:e(o).updateInfo,"onUpdate:value":t[13]||(t[13]=a=>e(o).updateInfo=a),placeholder:"请输入最新集数"},null,8,["value"])]),_:1}),l(n,{label:"详情",path:"description"},{default:i(()=>[l(d,{value:e(o).description,"onUpdate:value":t[14]||(t[14]=a=>e(o).description=a),placeholder:"请输入详情",type:"textarea"},null,8,["value"])]),_:1}),l(n,{label:"演员列表",path:"actorList"},{default:i(()=>[l(d,{value:e(o).actorList,"onUpdate:value":t[15]||(t[15]=a=>e(o).actorList=a),placeholder:"请输入演员列表"},null,8,["value"])]),_:1}),l(n,{label:"导演列表",path:"directorList"},{default:i(()=>[l(d,{value:e(o).directorList,"onUpdate:value":t[16]||(t[16]=a=>e(o).directorList=a),placeholder:"请输入导演列表"},null,8,["value"])]),_:1}),e(o).state?(w(),U(n,{key:1,label:"状态",path:"state.value",rule:{required:!0,message:"请选择影片状态",trigger:"change",type:"number"}},{default:i(()=>[l(k,{value:e(o).state.value,"onUpdate:value":t[17]||(t[17]=a=>e(o).state.value=a),options:e(O)},null,8,["value","options"])]),_:1})):E("",!0),l(n,{label:"影片主图",path:"picture"},{default:i(()=>[l(d,{value:e(o).picture,"onUpdate:value":t[18]||(t[18]=a=>e(o).picture=a),placeholder:"请输入主图地址"},null,8,["value"])]),_:1}),l(n,null,{default:i(()=>[l(oe,{"w-3xl":""},{cover:i(()=>[B("img",{src:e(o).picture},null,8,Ce)]),_:1})]),_:1}),l(n,{label:"轮播图",path:"screenPicture"},{default:i(()=>[l(d,{value:e(o).screenPicture,"onUpdate:value":t[19]||(t[19]=a=>e(o).screenPicture=a)},null,8,["value"])]),_:1}),l(n,{label:"评分",path:"score"},{default:i(()=>[l(d,{value:e(o).score,"onUpdate:value":t[20]||(t[20]=a=>e(o).score=a),placeholder:"请输入评分"},null,8,["value"])]),_:1})]),_:1},8,["model","disabled"])]),_:1},8,["visible","title","loading","show-footer","onOnSave"])]),_:1})}}});export{Ze as default};