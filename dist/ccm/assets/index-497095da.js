var f=(t,h,c)=>new Promise((C,d)=>{var I=o=>{try{l(c.next(o))}catch(_){d(_)}},r=o=>{try{l(c.throw(o))}catch(_){d(_)}},l=o=>o.done?C(o.value):Promise.resolve(o.value).then(I,r);l((c=c.apply(t,h)).next())});import{_ as z}from"./AppPage-87197e9c.js";import{s as p,C as T,q as y,o as m,j as M,w as i,k as v,ae as k,aB as $,aN as j,F as b,an as x,L as q}from"./index-5837b170.js";import{_ as F}from"./Empty-8e6e6efa.js";import{_ as V}from"./Select-a522e322.js";import{_ as A}from"./Spin-9fd0c67a.js";import{_ as P}from"./Space-fc43479b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-merged-state-61c7490e.js";import"./get-803e7bb1.js";import"./use-locale-4062cbc7.js";import"./create-d1a5db2f.js";import"./use-compitable-8b432e4c.js";import"./Suffix-562a013d.js";import"./Tag-cc294052.js";import"./Popover-09c0b6af.js";const u={listCategory:()=>p.post("/category/listCategory"),listSourceCategory:(t={})=>p.post("/source/listSourceCategory",t),listCategoryMapping:(t={})=>p.post("/categoryMapping/listCategoryMapping",t),listSimpleSc:()=>p.post("/sourceConfig/listSimpleSc"),addOrUpdate:(t={})=>p.post("/categoryMapping/addOrUpdate",t),deleteMapping:(t={})=>p.post("/categoryMapping/delete",t)},R={key:0,flex:"","flex-wrap":"","justify-between":""},re={__name:"index",setup(t){T(()=>{I(),c()});const h=y([]);function c(){return f(this,null,function*(){const e=yield u.listCategory();C(e==null?void 0:e.data)})}function C(e=[]){e.forEach(a=>{const n={label:a.name,value:a.id};h.value.push(n),a.children&&a.children.length&&C(a.children)})}const d=y([]);function I(){return f(this,null,function*(){const e=yield u.listSimpleSc();e==null||e.data.forEach(a=>{const n={label:a.sourceName,value:a.id};d.value.push(n)})})}const r=y(null),l=y(!1),o=y([]);function _(e){return f(this,null,function*(){if(x(e))return;o.value&&(o.value=[]),l.value=!0;const a=yield u.listSourceCategory({id:e}),n=yield u.listCategoryMapping({sourceId:e});n==null||n.data.forEach(g=>{const w=a==null?void 0:a.data.find(S=>S.type_id===g.sourceTypeId);x(w)||(w.categoryId=g.categoryId)}),o.value=a==null?void 0:a.data,l.value=!1})}function O(e){return f(this,null,function*(){if(e.loading=!0,x(e.categoryId)){yield u.deleteMapping({sourceId:r.value,sourceTypeId:e.type_id}),e.loading=!1;return}const a={sourceId:r.value,sourceTypeId:e.type_id,categoryId:e.categoryId};yield u.addOrUpdate(a),e.loading=!1})}return(e,a)=>{const n=V,g=q,w=A,S=F,N=P,B=z;return m(),M(B,{"show-footer":!1},{default:i(()=>[v(g,{title:"映射管理",size:"small",segmented:!0,"mt-15":"","rounded-10":""},{"header-extra":i(()=>[v(n,{value:r.value,"onUpdate:value":[a[0]||(a[0]=s=>r.value=s),_],placeholder:"请选择采集源",options:d.value,clearable:"","w-3xl":""},null,8,["value","options"])]),default:i(()=>[v(N,{vertical:""},{default:i(()=>[v(w,{show:l.value},{default:i(()=>[r.value?(m(),k("div",R,[(m(!0),k($,null,j(o.value,(s,E)=>(m(),M(g,{key:E,class:"mb-10 mr-10 w-200 flex-shrink-0 cursor-pointer","hover:card-shadow":"",title:s.type_name,size:"small"},{default:i(()=>[v(n,{value:s.categoryId,"onUpdate:value":[U=>s.categoryId=U,U=>O(s)],options:h.value,loading:s.loading,filterable:"",clearable:"",placeholder:"请选择分类"},null,8,["value","onUpdate:value","options","loading"])]),_:2},1032,["title"]))),128))])):b("",!0)]),_:1},8,["show"]),!r.value||l.value?(m(),M(S,{key:0,size:"large",description:"无数据"})):b("",!0)]),_:1})]),_:1})]),_:1})}}};export{re as default};