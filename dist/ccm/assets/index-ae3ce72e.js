var b=(o,v,_)=>new Promise((s,y)=>{var S=u=>{try{c(_.next(u))}catch(g){y(g)}},T=u=>{try{c(_.throw(u))}catch(g){y(g)}},c=u=>u.done?s(u.value):Promise.resolve(u.value).then(S,T);c((_=_.apply(o,v)).next())});import{_ as K}from"./CommonPage-5693a2f8.js";import{_ as ee}from"./CrudDrawer-343eb8ff.js";import{_ as te}from"./CrudTable-1a5213e2.js";import{_ as ae}from"./QueryBarItem-2725e0b4.js";import{_ as le}from"./TheIcon-ef78c118.js";import{s as m,q as p,C as ne,o as D,j as O,w as i,n as se,k as n,l as a,_ as w,m as oe,D as I,F as ie,h as d}from"./index-a05ebb11.js";import{r as U}from"./icon-ff0c09b3.js";import{u as re,_ as ue,a as de}from"./useCRUD-3b029c3f.js";import{N as me}from"./Progress-fc37d1a1.js";import{_ as ce}from"./DatePicker-65987433.js";import{_ as pe}from"./Select-924e31d5.js";import{_ as fe}from"./Switch-605c8738.js";import{_ as _e}from"./InputNumber-7789d8cb.js";import"./AppPage-d038b9ad.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-merged-state-ff5e0511.js";import"./Space-5f0be7ca.js";import"./Checkbox-c0ec2f7e.js";import"./Popover-89938a61.js";import"./get-f8141a7b.js";import"./use-compitable-cbdc2722.js";import"./Suffix-b467bef6.js";import"./Dropdown-40c84ca6.js";import"./create-d1a5db2f.js";import"./Tooltip-1768249a.js";import"./Empty-12035f64.js";import"./use-locale-cb2f3061.js";import"./Input-aa8ec768.js";import"./Eye-c02532aa.js";import"./Tag-5efc3a3f.js";import"./Add-e1659917.js";const f={pageCollectTask:(o={})=>m.post("/collectTask/pageCollectTask",o),addCollectTask:(o={})=>m.post("/collectTask/addCollectTask",o),startCollectTask:(o={})=>m.post("/collectTask/startCollectTask",o),pauseTask:(o={})=>m.post("/collectTask/pauseCollectTask",o),stopTask:(o={})=>m.post("/collectTask/stopCollectTask",o),listCollectTaskState:()=>m.post("/collectTask/listCollectTaskState"),getTaskProcess:(o={})=>m.post("/collectTask/getTaskProcess",o),listSimpleSc:()=>m.post("/sourceConfig/listSimpleSc")},Je=Object.assign({name:"Crud"},{__name:"index",setup(o){const v=p(null),_=p([]),s=p({});function y(){for(const e in s.value)s.value[e]=null}const S=p({}),T=p(!0);ne(()=>{var e;(e=v.value)==null||e.handleSearch(),u(),V()});const c=p([]);function u(){return b(this,null,function*(){const e=yield f.listSimpleSc();e==null||e.data.forEach(t=>{const r={label:t.sourceName,value:t.id};c.value.push(r)})})}const g=p([]);function V(){return b(this,null,function*(){const e=yield f.listCollectTaskState();e==null||e.data.forEach(t=>{const r={label:t.description,value:t.value};g.value.push(r)})})}function q(){let e=s.value;const t={};e.startTimeRange&&e.startTimeRange.length?(t.startTime=e.startTimeRange[0],t.endTime=e.startTimeRange[1],e.startTime=t):delete e.startTime;const r={};e.endTimeRange&&e.endTimeRange.length?(r.startTime=e.endTimeRange[0],r.endTime=e.endTimeRange[1],e.endTime=r):delete e.endTime}function P(e){return b(this,null,function*(){(yield f.startCollectTask({id:e.id})).code===200&&($message.success("已开始~"),x())})}function B(e){return b(this,null,function*(){(yield f.pauseTask({id:e.id})).code===200&&($message.success("已暂停~"),x())})}function F(e){return b(this,null,function*(){(yield f.stopTask({id:e.id})).code===200&&($message.success("已停止~"),x())})}const j=[{title:"采集id",key:"id",width:80,ellipsis:{tooltip:!0}},{title:"采集源名称",key:"sourceName",width:100,ellipsis:{tooltip:!0}},{title:"采集时间段",key:"duration",width:100,render(e){return e.duration?`过去 ${e.duration} 天`:"全部"}},{title:"采集进度",key:"process",width:150,render(e){return d(me,{type:"line",status:function(){switch(e.state.value){case 2:return"warning";case 3:return"error";case 4:return"success";default:return"info"}}(),percentage:e.process,processing:function(){switch(e.state.value){case 2:case 3:case 4:return!1;default:return!0}}(),borderRadius:2})}},{title:"任务状态",key:"state.description",width:80},{title:"创建时间",key:"createTime",width:180,render(e){return d("span",e.createTime)}},{title:"开始时间",key:"startTime",width:180,render(e){return d("span",e.startTime)}},{title:"暂停时间",key:"pauseTime",width:180,render(e){return d("span",e.pauseTime)}},{title:"停止时间",key:"stopTime",width:180,render(e){return d("span",e.stopTime)}},{title:"完成时间",key:"finishTime",width:180,render(e){return d("span",e.finishTime)}},{title:"操作",key:"actions",width:180,align:"center",fixed:"right",hideInExcel:!0,render(e){var t,r,k;return[d(w,{size:"small",type:"primary",text:!0,onClick:()=>{P(e)},disabled:[0,1,3,4].includes((t=e.state)==null?void 0:t.value)},{default:()=>"",icon:U("bi:play-btn-fill",{size:25})}),d(w,{size:"small",type:"primary",text:!0,style:"margin-left: 15px;",onClick:()=>{B(e)},disabled:[2,3,4].includes((r=e.state)==null?void 0:r.value)},{default:()=>"",icon:U("bi:pause-btn-fill",{size:25})}),d(w,{size:"small",type:"error",text:!0,style:"margin-left: 15px;",onClick:()=>{F(e)},disabled:[3,4].includes((k=e.state)==null?void 0:k.value)},{default:()=>"",icon:U("bi:stop-btn-fill",{size:25})})]}}];function E(e){e.length&&$message.info(`选中${e.join(" ")}`)}const{modalVisible:R,modalAction:N,modalTitle:Q,modalLoading:A,handleAdd:L,handleSave:M,refresh:x,modalForm:h,modalFormRef:G}=re({name:"采集任务",initForm:{},doCreate:f.addCollectTask,doDelete:null,doUpdate:null,doSearch:null,refresh:()=>{var e;return(e=v.value)==null?void 0:e.handleSearch()}});return(e,t)=>{const r=le,k=pe,C=ae,z=ce,H=te,J=fe,$=ue,W=_e,X=de,Y=ee,Z=K;return D(),O(Z,{"show-footer":"",title:"采集管理"},{action:i(()=>[se("div",null,[n(a(w),{type:"primary",class:"ml-16",onClick:a(L)},{default:i(()=>[n(r,{icon:"material-symbols:add",size:18,class:"mr-5"}),oe(" 新增任务 ")]),_:1},8,["onClick"])])]),default:i(()=>[n(H,{ref_key:"$table",ref:v,"query-items":a(s),"onUpdate:queryItems":t[4]||(t[4]=l=>I(s)?s.value=l:null),"extra-params":a(S),"scroll-x":1200,columns:j,"get-data":a(f).pageCollectTask,onOnChecked:E,onOnDataChange:t[5]||(t[5]=l=>_.value=l),onResetQueryItems:y},{queryBar:i(()=>[n(C,{label:"采集源","label-width":50},{default:i(()=>[n(k,{value:a(s).sourceId,"onUpdate:value":t[0]||(t[0]=l=>a(s).sourceId=l),placeholder:"请选择采集源",clearable:"",options:a(c)},null,8,["value","options"])]),_:1}),n(C,{label:"任务状态","label-width":60,"content-width":150},{default:i(()=>[n(k,{value:a(s).state,"onUpdate:value":t[1]||(t[1]=l=>a(s).state=l),placeholder:"请选择任务状态",clearable:"",options:a(g)},null,8,["value","options"])]),_:1}),n(C,{label:"创建时间","label-width":65,"content-width":300},{default:i(()=>[n(z,{"formatted-value":a(s).startTimeRange,"onUpdate:formattedValue":[t[2]||(t[2]=l=>a(s).startTimeRange=l),q],type:"datetimerange",placeholder:"请选择范围",clearable:""},null,8,["formatted-value"])]),_:1}),n(C,{label:"结束时间","label-width":65,"content-width":300},{default:i(()=>[n(z,{"formatted-value":a(s).endTimeRange,"onUpdate:formattedValue":[t[3]||(t[3]=l=>a(s).endTimeRange=l),q],type:"datetimerange",placeholder:"请选择范围",clearable:""},null,8,["formatted-value"])]),_:1})]),_:1},8,["query-items","extra-params","get-data"]),n(Y,{visible:a(R),"onUpdate:visible":t[9]||(t[9]=l=>I(R)?R.value=l:null),title:a(Q),loading:a(A),"show-footer":a(N)!=="view",onOnSave:a(M)},{default:i(()=>[n(X,{ref_key:"modalFormRef",ref:G,model:a(h),"label-placement":"left","label-align":"left","label-width":80,disabled:a(N)==="view"},{default:i(()=>[n($,{label:"是否采集全部","label-width":120},{default:i(()=>[n(J,{value:a(T),"onUpdate:value":t[6]||(t[6]=l=>I(T)?T.value=l:null)},null,8,["value"])]),_:1}),a(T)?ie("",!0):(D(),O($,{key:0,label:"采集时间段",path:"duration","label-width":110,rule:{required:!0,message:"请输入采集时间段",trigger:"blur",type:"number"}},{default:i(()=>[n(W,{value:a(h).duration,"onUpdate:value":t[7]||(t[7]=l=>a(h).duration=l),min:1,placeholder:"采集过去xx天数据",clearable:"","w-full":"","button-placement":"both"},null,8,["value"])]),_:1})),n($,{label:"采集源",path:"sourceIds",rule:{required:!0,message:"请选择采集源",trigger:"blur",type:"array"}},{default:i(()=>[n(k,{value:a(h).sourceIds,"onUpdate:value":t[8]||(t[8]=l=>a(h).sourceIds=l),placeholder:"请选择采集源",clearable:"",options:a(c),multiple:""},null,8,["value","options"])]),_:1})]),_:1},8,["model","disabled"])]),_:1},8,["visible","title","loading","show-footer","onOnSave"])]),_:1})}}});export{Je as default};
