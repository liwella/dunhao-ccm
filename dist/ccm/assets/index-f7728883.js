var f=(t,h,c)=>new Promise((C,d)=>{var I=o=>{try{l(c.next(o))}catch(_){d(_)}},r=o=>{try{l(c.throw(o))}catch(_){d(_)}},l=o=>o.done?C(o.value):Promise.resolve(o.value).then(I,r);l((c=c.apply(t,h)).next())});import{_ as B}from"./AppPage-d038b9ad.js";import{s as p,C as T,q as y,o as m,j as M,w as i,k as v,aa as U,ay as $,aK as j,F as b,ak as k,G as q}from"./index-a05ebb11.js";import{_ as F}from"./Empty-12035f64.js";import{_ as V}from"./Select-924e31d5.js";import{_ as A}from"./Spin-1c5bc334.js";import{_ as G}from"./Space-5f0be7ca.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-merged-state-ff5e0511.js";import"./get-f8141a7b.js";import"./use-locale-cb2f3061.js";import"./create-d1a5db2f.js";import"./use-compitable-cbdc2722.js";import"./Suffix-b467bef6.js";import"./Tag-5efc3a3f.js";import"./Popover-89938a61.js";const u={listCategory:()=>p.post("/category/listCategory"),listSourceCategory:(t={})=>p.post("/source/listSourceCategory",t),listCategoryMapping:(t={})=>p.post("/categoryMapping/listCategoryMapping",t),listSimpleSc:()=>p.post("/sourceConfig/listSimpleSc"),addOrUpdate:(t={})=>p.post("/categoryMapping/addOrUpdate",t),deleteMapping:(t={})=>p.post("/categoryMapping/delete",t)},K={key:0,flex:"","flex-wrap":"","justify-between":""},re={__name:"index",setup(t){T(()=>{I(),c()});const h=y([]);function c(){return f(this,null,function*(){const e=yield u.listCategory();C(e==null?void 0:e.data)})}function C(e=[]){e.forEach(a=>{const n={label:a.name,value:a.id};h.value.push(n),a.children&&a.children.length&&C(a.children)})}const d=y([]);function I(){return f(this,null,function*(){const e=yield u.listSimpleSc();e==null||e.data.forEach(a=>{const n={label:a.sourceName,value:a.id};d.value.push(n)})})}const r=y(null),l=y(!1),o=y([]);function _(e){return f(this,null,function*(){if(k(e))return;o.value&&(o.value=[]),l.value=!0;const a=yield u.listSourceCategory({id:e}),n=yield u.listCategoryMapping({sourceId:e});n==null||n.data.forEach(g=>{const w=a==null?void 0:a.data.find(S=>S.type_id===g.sourceTypeId);k(w)||(w.categoryId=g.categoryId)}),o.value=a==null?void 0:a.data,l.value=!1})}function O(e){return f(this,null,function*(){if(e.loading=!0,k(e.categoryId)){yield u.deleteMapping({sourceId:r.value,sourceTypeId:e.type_id}),e.loading=!1;return}const a={sourceId:r.value,sourceTypeId:e.type_id,categoryId:e.categoryId};yield u.addOrUpdate(a),e.loading=!1})}return(e,a)=>{const n=V,g=q,w=A,S=F,E=G,N=B;return m(),M(N,{"show-footer":!1},{default:i(()=>[v(g,{title:"映射管理",size:"small",segmented:!0,"mt-15":"","rounded-10":""},{"header-extra":i(()=>[v(n,{value:r.value,"onUpdate:value":[a[0]||(a[0]=s=>r.value=s),_],placeholder:"请选择采集源",options:d.value,clearable:"","w-3xl":""},null,8,["value","options"])]),default:i(()=>[v(E,{vertical:""},{default:i(()=>[v(w,{show:l.value},{default:i(()=>[r.value?(m(),U("div",K,[(m(!0),U($,null,j(o.value,(s,z)=>(m(),M(g,{key:z,class:"mb-10 mr-10 w-200 flex-shrink-0 cursor-pointer","hover:card-shadow":"",title:s.type_name,size:"small"},{default:i(()=>[v(n,{value:s.categoryId,"onUpdate:value":[x=>s.categoryId=x,x=>O(s)],options:h.value,loading:s.loading,filterable:"",clearable:"",placeholder:"请选择分类"},null,8,["value","onUpdate:value","options","loading"])]),_:2},1032,["title"]))),128))])):b("",!0)]),_:1},8,["show"]),!r.value||l.value?(m(),M(S,{key:0,size:"large",description:"无数据"})):b("",!0)]),_:1})]),_:1})]),_:1})}}};export{re as default};