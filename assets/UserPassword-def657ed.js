import{P as S}from"./PageContainer-d04b527c.js";import{E as V}from"./el-button-6b8e91f4.js";import{a as k,E as y}from"./el-col-0bcda2cd.js";import{E as U,a as x}from"./el-form-item-653e1bb3.js";import{E as C}from"./el-input-07d332e9.js";import{r as m,a as R,u as F,o as N,c as P,b as o,d as e,f as _,b_ as q,E as B}from"./index-6f47666e.js";/* empty css                   */import"./_baseClone-c5224b31.js";const H={__name:"UserPassword",setup($){const r=m({old_pwd:"",new_pwd:"",re_pwd:""}),i={old_pwd:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密码长度必须是6-15位的非空字符串",trigger:"blur"}],new_pwd:[{required:!0,message:"请输入新密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密码长度必须是6-15位的非空字符串",trigger:"blur"},{validator:(u,l,t)=>{l===r.value.old_pwd?t(new Error("原密码和新密码不能一样!")):t()},trigger:"blur"}],re_pwd:[{required:!0,message:"请再次确认新密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密码长度必须是6-15位的非空字符串",trigger:"blur"},{validator:(u,l,t)=>{l!==r.value.new_pwd?t(new Error("新密码和确认再次输入的新密码不一样!")):t()},trigger:"blur"}]},n=m(),w=R(),d=F(),c=async()=>{await n.value.validate()&&(await q(r.value),B({type:"success",message:"更换密码成功"}),d.setToken(""),d.setUser({}),w.push("/login"))},f=()=>{n.value.resetFields()};return(u,l)=>{const t=C,s=U,p=V,g=x,v=k,b=y,E=S;return N(),P(E,{title:"重置密码"},{default:o(()=>[e(b,null,{default:o(()=>[e(v,{span:12},{default:o(()=>[e(g,{model:r.value,rules:i,ref_key:"formRef",ref:n,"label-width":"100px",size:"large"},{default:o(()=>[e(s,{label:"原密码",prop:"old_pwd"},{default:o(()=>[e(t,{modelValue:r.value.old_pwd,"onUpdate:modelValue":l[0]||(l[0]=a=>r.value.old_pwd=a),type:"password"},null,8,["modelValue"])]),_:1}),e(s,{label:"新密码",prop:"new_pwd"},{default:o(()=>[e(t,{modelValue:r.value.new_pwd,"onUpdate:modelValue":l[1]||(l[1]=a=>r.value.new_pwd=a),type:"password"},null,8,["modelValue"])]),_:1}),e(s,{label:"确认新密码",prop:"re_pwd"},{default:o(()=>[e(t,{modelValue:r.value.re_pwd,"onUpdate:modelValue":l[2]||(l[2]=a=>r.value.re_pwd=a),type:"password"},null,8,["modelValue"])]),_:1}),e(s,null,{default:o(()=>[e(p,{onClick:c,type:"primary"},{default:o(()=>[_("修改密码")]),_:1}),e(p,{onClick:f},{default:o(()=>[_("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})}}};export{H as default};
