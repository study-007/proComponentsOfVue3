"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("./style/index.less");const P=o=>(e.pushScopeId("data-v-644088e2"),o=o(),e.popScopeId(),o),f=P(()=>e.createElementVNode("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-ea893728":""},[e.createElementVNode("path",{fill:"currentColor",d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"})],-1)),M=P(()=>e.createElementVNode("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-ea893728":""},[e.createElementVNode("path",{fill:"currentColor",d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"})],-1)),ee=e.createTextVNode("重置"),le=["src"],te=e.defineComponent({name:"pro-form"}),ae=e.defineComponent({...te,props:{formModels:null,ruleForm:null,showSubmitBtn:{type:Boolean,default:!0},submitText:{default:"提交"},showResetBtn:{type:Boolean,default:!0},tableStyle:{type:Boolean,default:!1},showHandleBar:{type:Boolean,default:!0},labelWidth:{default:"120px"}},emits:["submitForm"],setup(o,{expose:T,emit:z}){const a=o,H=(n,s)=>n==="input"?"请输入"+s:n==="upload"?"请上传"+s:"请选择"+s,i=e.reactive({});(()=>{a.formModels.forEach(n=>{n.placeholder||(n.placeholder=H(n.type,n.label))})})(),e.onMounted(()=>{});const L=e.computed(()=>(a.formModels.forEach(n=>{n.rule&&(typeof n.rule=="boolean"?i[n.key]=[{required:!0,message:n.placeholder,trigger:"blur"}]:i[n.key]=n.rule)}),setTimeout(()=>{u()},30),i)),I=e.useSlots(),p=e.ref(),y=()=>{var n;return(n=p.value)==null?void 0:n.validate()},u=()=>{var n;(n=p.value)==null||n.clearValidate()},b=()=>{var n;(n=p.value)==null||n.resetFields()},D=async()=>{await y(),z("submitForm",a.ruleForm)};T({validate:y,clearValidate:u,resetForm:b,setRuleForm:n=>{Object.assign(a.ruleForm,n),setTimeout(()=>{u()},30)},resetRuleForm:()=>{const n=Object.assign({},a.ruleForm);for(const s in n)delete a.ruleForm[s];setTimeout(()=>{u()},30)}});const c=e.reactive({visible:!1,imageUrl:""}),h=n=>{c.imageUrl=n.url,c.visible=!0};return(n,s)=>{const d=e.resolveComponent("el-input"),j=e.resolveComponent("el-input-number"),q=e.resolveComponent("el-radio"),O=e.resolveComponent("el-radio-group"),W=e.resolveComponent("el-checkbox"),$=e.resolveComponent("el-checkbox-group"),m=e.resolveComponent("el-option"),G=e.resolveComponent("el-option-group"),A=e.resolveComponent("el-select"),J=e.resolveComponent("el-cascader"),K=e.resolveComponent("el-switch"),V=e.resolveComponent("el-time-picker"),r=e.resolveComponent("el-date-picker"),_=e.resolveComponent("el-icon"),B=e.resolveComponent("el-upload"),v=e.resolveComponent("el-form-item"),Q=e.resolveComponent("el-col"),X=e.resolveComponent("el-row"),F=e.resolveComponent("el-button"),Y=e.resolveComponent("el-dialog"),Z=e.resolveComponent("el-form");return e.openBlock(),e.createBlock(e.TransitionGroup,{class:"content",tag:"form",name:"fade-list"},{default:e.withCtx(()=>[e.createVNode(Z,{model:a.ruleForm,rules:e.unref(L),ref_key:"ruleFormRef",ref:p,"label-width":o.labelWidth},{default:e.withCtx(()=>[e.createVNode(X,{class:e.normalizeClass(o.tableStyle?"dataForm":"")},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.formModels,l=>(e.openBlock(),e.createBlock(Q,e.mergeProps({span:l.span},l.col),{default:e.withCtx(()=>[l.hidden?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(v,{label:l.label,prop:l.key,key:l.key,class:e.normalizeClass(o.tableStyle?"formItemDuty "+l.class:""+l.class),style:e.normalizeStyle(l.style),"label-width":l.labelWidth},{default:e.withCtx(()=>{var w,C,g,U,x,N,S,E,R;return[e.unref(I)[l.key]?e.renderSlot(n.$slots,l.key,{key:0},void 0,!0):l.type==="input"?(e.openBlock(),e.createBlock(d,e.mergeProps({key:1,modelValue:a.ruleForm[l.key],"onUpdate:modelValue":t=>a.ruleForm[l.key]=t,placeholder:l.placeholder,disabled:l.disabled,type:((w=l.props)==null?void 0:w.type)??"text"},l.props,{clearable:""}),null,16,["modelValue","onUpdate:modelValue","placeholder","disabled","type"])):l.type==="password"?(e.openBlock(),e.createBlock(d,{key:2,modelValue:a.ruleForm[l.key],"onUpdate:modelValue":t=>a.ruleForm[l.key]=t,type:"password",placeholder:l.placeholder,disabled:l.disabled,"show-password":"",clearable:""},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):l.type==="textarea"?(e.openBlock(),e.createBlock(d,{key:3,modelValue:a.ruleForm[l.key],"onUpdate:modelValue":t=>a.ruleForm[l.key]=t,autosize:{minRows:4,maxRows:6},type:"textarea",placeholder:l.placeholder,disabled:l.disabled,clearable:""},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):l.type==="number"?(e.openBlock(),e.createBlock(j,{key:4,modelValue:a.ruleForm[l.key],"onUpdate:modelValue":t=>a.ruleForm[l.key]=t,disabled:l.disabled,precision:((C=l.props)==null?void 0:C.precision)??2},null,8,["modelValue","onUpdate:modelValue","disabled","precision"])):l.type==="radio"?(e.openBlock(),e.createBlock(O,{key:5,modelValue:a.ruleForm[l.key],"onUpdate:modelValue":t=>a.ruleForm[l.key]=t,disabled:l.disabled},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l==null?void 0:l.options,t=>(e.openBlock(),e.createBlock(q,{key:t.key,label:t.value},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(t.label),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])):l.type==="checkbox"?(e.openBlock(),e.createBlock($,{key:6,modelValue:a.ruleForm[l.key],"onUpdate:modelValue":t=>a.ruleForm[l.key]=t},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l==null?void 0:l.options,t=>(e.openBlock(),e.createBlock(W,{key:t.key,label:t.value},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(t.label),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):l.type==="select"?(e.openBlock(),e.createBlock(A,e.mergeProps({key:7,modelValue:a.ruleForm[l.key],"onUpdate:modelValue":t=>a.ruleForm[l.key]=t,placeholder:l.placeholder,disabled:l.disabled},l.props),{default:e.withCtx(()=>[l.hasGroup?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(l==null?void 0:l.options,t=>(e.openBlock(),e.createBlock(G,{key:t.label,label:t.label},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.options,k=>(e.openBlock(),e.createBlock(m,{key:k.value,label:k.label,value:k.value},null,8,["label","value"]))),128))]),_:2},1032,["label"]))),128)):(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:1},e.renderList(l==null?void 0:l.options,t=>(e.openBlock(),e.createBlock(m,{key:t.key,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:2},1040,["modelValue","onUpdate:modelValue","placeholder","disabled"])):l.type==="cascader"?(e.openBlock(),e.createBlock(J,{key:8,modelValue:a.ruleForm[l.key],"onUpdate:modelValue":t=>a.ruleForm[l.key]=t,options:l==null?void 0:l.options,props:l==null?void 0:l.props,placeholder:l.placeholder,disabled:l.disabled},null,8,["modelValue","onUpdate:modelValue","options","props","placeholder","disabled"])):l.type==="switch"?(e.openBlock(),e.createBlock(K,{key:9,modelValue:a.ruleForm[l.key],"onUpdate:modelValue":t=>a.ruleForm[l.key]=t,disabled:l.disabled},null,8,["modelValue","onUpdate:modelValue","disabled"])):l.type==="time"?(e.openBlock(),e.createBlock(V,{key:10,modelValue:a.ruleForm[l.key],"onUpdate:modelValue":t=>a.ruleForm[l.key]=t,placeholder:l.placeholder,disabled:l.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):l.type==="time-to-time"?(e.openBlock(),e.createBlock(V,{key:11,modelValue:a.ruleForm[l.key],"onUpdate:modelValue":t=>a.ruleForm[l.key]=t,"is-range":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",disabled:l.disabled},null,8,["modelValue","onUpdate:modelValue","disabled"])):l.type==="date"?(e.openBlock(),e.createBlock(r,{key:12,modelValue:a.ruleForm[l.key],"onUpdate:modelValue":t=>a.ruleForm[l.key]=t,type:((g=l.props)==null?void 0:g.type)??"date",placeholder:l.placeholder,disabled:l.disabled},null,8,["modelValue","onUpdate:modelValue","type","placeholder","disabled"])):l.type==="date-to-date"?(e.openBlock(),e.createBlock(r,{key:13,modelValue:a.ruleForm[l.key],"onUpdate:modelValue":t=>a.ruleForm[l.key]=t,placeholder:l.placeholder,type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",disabled:l.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):l.type==="datetime"?(e.openBlock(),e.createBlock(r,{key:14,modelValue:a.ruleForm[l.key],"onUpdate:modelValue":t=>a.ruleForm[l.key]=t,type:"datetime",placeholder:l.placeholder,disabled:l.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):l.type==="datetime-to-datetime"?(e.openBlock(),e.createBlock(r,{key:15,modelValue:a.ruleForm[l.key],"onUpdate:modelValue":t=>a.ruleForm[l.key]=t,type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",disabled:l.disabled},null,8,["modelValue","onUpdate:modelValue","disabled"])):l.type==="upload"?(e.openBlock(),e.createBlock(B,{key:16,"file-list":a.ruleForm[l.key],"onUpdate:file-list":t=>a.ruleForm[l.key]=t,action:(U=l==null?void 0:l.props)==null?void 0:U.action,limit:((x=l==null?void 0:l.props)==null?void 0:x.limit)||1,"list-type":"picture-card","on-preview":h,disabled:l.disabled,class:e.normalizeClass({"el-upload--none":a.ruleForm[l.key].length===((N=l==null?void 0:l.props)==null?void 0:N.limit)})},{default:e.withCtx(()=>[e.createVNode(_,null,{default:e.withCtx(()=>[f]),_:1})]),_:2},1032,["file-list","onUpdate:file-list","action","limit","disabled","class"])):l.type==="upload-mini"?(e.openBlock(),e.createBlock(B,e.mergeProps({key:17,"file-list":a.ruleForm[l.key],"onUpdate:file-list":t=>a.ruleForm[l.key]=t,action:(S=l==null?void 0:l.props)==null?void 0:S.action,limit:((E=l==null?void 0:l.props)==null?void 0:E.limit)||1,"list-type":"picture-card","on-preview":h,disabled:l.disabled,class:["upload-mini",{"el-upload--none":a.ruleForm[l.key].length===((R=l==null?void 0:l.props)==null?void 0:R.limit)}]},l.props),{default:e.withCtx(()=>[e.renderSlot(n.$slots,"upload-mini-"+l.key,{},()=>[e.createVNode(_,null,{default:e.withCtx(()=>[M]),_:1})],!0)]),_:2},1040,["file-list","onUpdate:file-list","action","limit","disabled","class"])):e.createCommentVNode("",!0)]}),_:2},1032,["label","prop","class","style","label-width"]))]),_:2},1040,["span"]))),256))]),_:3},8,["class"]),o.showHandleBar?(e.openBlock(),e.createBlock(v,{key:0,class:e.normalizeClass(["form-operations",o.tableStyle?"btnForm":""])},{default:e.withCtx(()=>[e.renderSlot(n.$slots,"operations",{},void 0,!0),o.showSubmitBtn?(e.openBlock(),e.createBlock(F,{key:0,type:"primary",onClick:D},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(o.submitText),1)]),_:1})):e.createCommentVNode("",!0),o.showResetBtn?(e.openBlock(),e.createBlock(F,{key:1,onClick:b},{default:e.withCtx(()=>[ee]),_:1})):e.createCommentVNode("",!0)]),_:3},8,["class"])):e.createCommentVNode("",!0),e.createVNode(Y,{modelValue:c.visible,"onUpdate:modelValue":s[0]||(s[0]=l=>c.visible=l)},{default:e.withCtx(()=>[e.createElementVNode("img",{"w-full":"",src:c.imageUrl,alt:"Preview Image"},null,8,le)]),_:1},8,["modelValue"])]),_:3},8,["model","rules","label-width"])]),_:3})}}});exports.default=ae;