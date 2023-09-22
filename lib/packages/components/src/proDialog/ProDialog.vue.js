"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("./style/index.less");const v={class:"pro-dialog-wrapper"},g={class:"dialog-title"},V={class:"btns"},w=e.createElementVNode("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-ea893728":""},[e.createElementVNode("path",{fill:"currentColor",d:"m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"})],-1),C=e.createElementVNode("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-ea893728":""},[e.createElementVNode("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})],-1),B={class:"content"},x={key:0,class:"dialog-footer"},k=e.defineComponent({name:"pro-dialog"}),y=e.defineComponent({...k,props:{title:{default:""},width:null,isDraggable:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1},hiddenFullBtn:{type:Boolean,default:!1},confirmText:{default:"确认"},cancelText:{default:"关闭"},loading:{type:Boolean,default:!1}},emits:["update:modelValue","close","confirm"],setup(d,{emit:n}){const o=d,u=e.useSlots(),t=e.useAttrs(),l=e.ref(!1),f=e.computed(()=>!(o.hiddenFullBtn||t!=null&&t.fullscreen)),m=()=>{t!=null&&t.fullscreen||(l.value=!l.value)},a=()=>{Reflect.has(t,"before-close")&&typeof t["before-close"]=="function"&&t["before-close"](),n("close")},p=()=>{n("confirm")};return(s,N)=>{var i;const r=e.resolveComponent("el-icon"),c=e.resolveComponent("el-button"),_=e.resolveComponent("el-dialog"),h=e.resolveDirective("loading");return e.openBlock(),e.createElementBlock("div",v,[e.createVNode(_,e.mergeProps(e.unref(t),{"model-value":o.modelValue,"show-close":!1,fullscreen:((i=e.unref(t))==null?void 0:i.fullscreen)??l.value}),{header:e.withCtx(()=>[e.createElementVNode("div",null,[e.createElementVNode("span",g,e.toDisplayString(o.title),1)]),e.createElementVNode("div",V,[e.unref(f)?(e.openBlock(),e.createBlock(r,{key:0,onClick:m},{default:e.withCtx(()=>[w]),_:1})):e.createCommentVNode("",!0),e.createVNode(r,{onClick:a},{default:e.withCtx(()=>[C]),_:1})])]),footer:e.withCtx(()=>[e.unref(u).footer?e.renderSlot(s.$slots,"footer",{key:1}):(e.openBlock(),e.createElementBlock("span",x,[e.createVNode(c,{type:"primary",onClick:p},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(o.confirmText),1)]),_:1}),e.createVNode(c,{onClick:a},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(o.cancelText),1)]),_:1})]))]),default:e.withCtx(()=>[e.withDirectives((e.openBlock(),e.createElementBlock("div",B,[e.renderSlot(s.$slots,"default")])),[[h,o.loading]])]),_:3},16,["model-value","fullscreen"])])}}});exports.default=y;