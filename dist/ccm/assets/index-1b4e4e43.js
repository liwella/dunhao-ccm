var N=(s,w,u)=>new Promise((d,k)=>{var m=r=>{try{_(u.next(r))}catch(v){k(v)}},x=r=>{try{_(u.throw(r))}catch(v){k(v)}},_=r=>r.done?d(r.value):Promise.resolve(r.value).then(m,x);_((u=u.apply(s,w)).next())});import{_ as L}from"./CommonPage-df3cba64.js";import{_ as P}from"./CrudDrawer-d53b1c79.js";import{_ as G}from"./CrudTable-2986cf73.js";import{_ as H}from"./TheIcon-2507ec8e.js";import{s as y,q as M,C as J,o as W,j as X,w as i,n as D,k as t,l as e,_ as c,m as S,D as $,h as b}from"./index-5837b170.js";import{u as Y,_ as Z,a as K}from"./useCRUD-f6f94421.js";import{r as h}from"./icon-17ab6bf1.js";import{_ as ee}from"./Select-a522e322.js";import{_ as le}from"./Input-de71e776.js";import"./AppPage-87197e9c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-merged-state-61c7490e.js";import"./Space-fc43479b.js";import"./Checkbox-df9fc212.js";import"./Popover-09c0b6af.js";import"./get-803e7bb1.js";import"./use-compitable-8b432e4c.js";import"./Suffix-562a013d.js";import"./Dropdown-5a734c78.js";import"./create-d1a5db2f.js";import"./Tooltip-aaf5ff4a.js";import"./Empty-8e6e6efa.js";import"./use-locale-4062cbc7.js";import"./Tag-cc294052.js";import"./Eye-0db273d2.js";const g={listMenu:()=>y.post("/menu/listMenu"),addMenu:(s={})=>y.post("/menu/addMenu",s),updateMenu:(s={})=>y.post("/menu/updateMenu",s),moveMenu:(s={})=>y.post("/menu/moveMenu",s),deleteMenu:(s={})=>y.post("/menu/deleteMenu",s)},te=D("div",null,null,-1),qe={__name:"index",setup(s){const w=[{label:"菜单",value:1},{label:"目录",value:2},{label:"权限",value:3}],u=M(null);J(()=>{u.value.handleSearch()});const d=M({});function k(){for(const a in d.value)d.value[a]=null}const m=M([]);function x(a){a.length?m.value=[...a]:m.value=[]}function _(){m.value.length?(U({ids:m.value}),m.value=[]):$message.error("未选中任何数据")}function r(){return N(this,arguments,function*(a={}){yield g.moveMenu(a),u.value.handleSearch()})}const v=[{type:"selection",fixed:"left"},{title:"菜单/权限名称",key:"menuName",width:120,ellipsis:{tooltip:!0}},{title:"访问路径",key:"url",width:120,ellipsis:{tooltip:!0}},{title:"权限编码",key:"permission",width:100,ellipsis:{tooltip:!0}},{title:"类型",key:"type.description",width:80},{title:"图标",key:"icon",width:120,ellipsis:{tooltip:!0}},{title:"操作",key:"actions",width:200,align:"center",fixed:"right",hideInExcel:!0,render(a){const l=[b(c,{size:"small",type:"primary",style:"margin-right: 15px;",text:!0,onClick:()=>{O(a,!1)}},{default:()=>"",icon:h("material-symbols:edit-outline",{size:20})}),b(c,{size:"small",type:"error",text:!0,onClick:()=>{U({ids:[a.id]})}},{default:()=>"",icon:h("material-symbols:delete-outline",{size:20})})];return a.level!==2&&l.unshift(b(c,{size:"small",type:"primary",style:"margin-right: 15px",text:!0,onClick:()=>{I({parentId:a.id})}},{default:()=>"",icon:h("material-symbols:add-notes-outline-rounded",{size:22})})),a.level!==3&&l.push([b(c,{size:"small",type:"primary",text:!0,style:"margin-left: 15px;",onClick:()=>{r({id:a.id,up:!0})}},{default:()=>"",icon:h("material-symbols:arrow-upward",{size:20})}),b(c,{size:"small",type:"primary",text:!0,onClick:()=>{r({id:a.id,up:!1})}},{default:()=>"",icon:h("material-symbols:arrow-downward",{size:20})})]),l}}],{modalVisible:C,modalTitle:R,modalLoading:B,modalAction:z,handleSave:F,handleAdd:I,handleDelete:U,handleEdit:O,modalForm:o,modalFormRef:T}=Y({name:"权限菜单",initForm:{type:{}},doCreate:g.addMenu,doDelete:g.deleteMenu,doUpdate:g.updateMenu,doSearch:null,refresh:()=>{var a;return(a=u.value)==null?void 0:a.handleSearch()}});return(a,l)=>{const q=H,V=G,f=le,p=Z,A=ee,E=K,Q=P,j=L;return W(),X(j,{"show-footer":"",title:"权限菜单管理"},{action:i(()=>[D("div",null,[t(e(c),{type:"primary",onClick:e(I)},{default:i(()=>[t(q,{icon:"material-symbols:add",size:18,class:"mr-5"}),S(" 新增 ")]),_:1},8,["onClick"]),t(e(c),{type:"error",class:"ml-16",onClick:_},{default:i(()=>[t(q,{icon:"material-symbols:delete-outline",size:18,class:"mr-5"}),S(" 批量删除 ")]),_:1})])]),default:i(()=>[t(V,{ref_key:"$table",ref:u,"query-items":e(d),"onUpdate:queryItems":l[0]||(l[0]=n=>$(d)?d.value=n:null),"row-key":"id","scroll-x":1200,columns:v,"is-pagination":!1,"get-data":e(g).listMenu,onOnChecked:x,onResetQueryItems:k},{queryBar:i(()=>[te]),_:1},8,["query-items","get-data"]),t(Q,{visible:e(C),"onUpdate:visible":l[8]||(l[8]=n=>$(C)?C.value=n:null),title:e(R),loading:e(B),"show-footer":e(z)!=="view",onOnSave:e(F)},{default:i(()=>[t(E,{ref_key:"modalFormRef",ref:T,model:e(o),"label-placement":"left","label-align":"left","label-width":80,disabled:e(z)==="view"},{default:i(()=>[t(p,{label:"菜单/权限id",path:"id","label-width":100},{default:i(()=>[t(f,{value:e(o).id,"onUpdate:value":l[1]||(l[1]=n=>e(o).id=n),disabled:""},null,8,["value"])]),_:1}),t(p,{label:"菜单/权限名称",path:"menuName","label-width":120,rule:{required:!0,message:"请输入菜单/权限名称",trigger:"blur"}},{default:i(()=>[t(f,{value:e(o).menuName,"onUpdate:value":l[2]||(l[2]=n=>e(o).menuName=n),placeholder:"请输入菜单/权限名称"},null,8,["value"])]),_:1}),t(p,{label:"访问路径",path:"url"},{default:i(()=>[t(f,{value:e(o).url,"onUpdate:value":l[3]||(l[3]=n=>e(o).url=n),placeholder:"请输入访问路径"},null,8,["value"])]),_:1}),t(p,{label:"权限编码",path:"permission"},{default:i(()=>[t(f,{value:e(o).permission,"onUpdate:value":l[4]||(l[4]=n=>e(o).permission=n),placeholder:"请输入权限编码"},null,8,["value"])]),_:1}),t(p,{label:"类型",path:"type.value",rule:{required:!0,message:"请选择类型",trigger:"change",type:"number"}},{default:i(()=>[t(A,{value:e(o).type.value,"onUpdate:value":l[5]||(l[5]=n=>e(o).type.value=n),options:w,placeholder:"请选择"},null,8,["value"])]),_:1}),t(p,{label:"图标",path:"icon"},{default:i(()=>[t(f,{value:e(o).icon,"onUpdate:value":l[6]||(l[6]=n=>e(o).icon=n),placeholder:"请输入图标路径"},null,8,["value"])]),_:1}),t(p,{label:"父菜单id",path:"parentId"},{default:i(()=>[t(f,{value:e(o).parentId,"onUpdate:value":l[7]||(l[7]=n=>e(o).parentId=n),disabled:""},null,8,["value"])]),_:1})]),_:1},8,["model","disabled"])]),_:1},8,["visible","title","loading","show-footer","onOnSave"])]),_:1})}}};export{qe as default};