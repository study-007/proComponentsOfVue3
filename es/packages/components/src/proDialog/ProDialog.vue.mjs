import { defineComponent as w, useSlots as z, useAttrs as F, ref as T, computed as D, resolveComponent as r, resolveDirective as N, openBlock as n, createElementBlock as i, createVNode as a, mergeProps as S, unref as s, withCtx as l, createElementVNode as o, toDisplayString as d, createBlock as L, createCommentVNode as E, createTextVNode as h, renderSlot as g, withDirectives as M } from "vue";
import "./style/index.less";
const $ = { class: "pro-dialog-wrapper" }, A = { class: "dialog-title" }, H = { class: "btns" }, P = /* @__PURE__ */ o("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-ea893728": ""
}, [
  /* @__PURE__ */ o("path", {
    fill: "currentColor",
    d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
  })
], -1), R = /* @__PURE__ */ o("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-ea893728": ""
}, [
  /* @__PURE__ */ o("path", {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  })
], -1), j = { class: "content" }, q = {
  key: 0,
  class: "dialog-footer"
}, G = w({
  name: "pro-dialog"
}), O = /* @__PURE__ */ w({
  ...G,
  props: {
    title: { default: "" },
    width: null,
    isDraggable: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: !1 },
    hiddenFullBtn: { type: Boolean, default: !1 },
    confirmText: { default: "确认" },
    cancelText: { default: "关闭" },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "close", "confirm"],
  setup(V, { emit: f }) {
    const t = V, B = z(), e = F(), c = T(!1), C = D(() => !(t.hiddenFullBtn || e != null && e.fullscreen)), y = () => {
      e != null && e.fullscreen || (c.value = !c.value);
    }, u = () => {
      Reflect.has(e, "before-close") && typeof e["before-close"] == "function" && e["before-close"](), f("close");
    }, k = () => {
      f("confirm");
    };
    return (_, I) => {
      var v;
      const p = r("el-icon"), m = r("el-button"), x = r("el-dialog"), b = N("loading");
      return n(), i("div", $, [
        a(x, S(s(e), {
          "model-value": t.modelValue,
          "show-close": !1,
          fullscreen: ((v = s(e)) == null ? void 0 : v.fullscreen) ?? c.value
        }), {
          header: l(() => [
            o("div", null, [
              o("span", A, d(t.title), 1)
            ]),
            o("div", H, [
              s(C) ? (n(), L(p, {
                key: 0,
                onClick: y
              }, {
                default: l(() => [
                  P
                ]),
                _: 1
              })) : E("", !0),
              a(p, { onClick: u }, {
                default: l(() => [
                  R
                ]),
                _: 1
              })
            ])
          ]),
          footer: l(() => [
            s(B).footer ? g(_.$slots, "footer", { key: 1 }) : (n(), i("span", q, [
              a(m, {
                type: "primary",
                onClick: k
              }, {
                default: l(() => [
                  h(d(t.confirmText), 1)
                ]),
                _: 1
              }),
              a(m, { onClick: u }, {
                default: l(() => [
                  h(d(t.cancelText), 1)
                ]),
                _: 1
              })
            ]))
          ]),
          default: l(() => [
            M((n(), i("div", j, [
              g(_.$slots, "default")
            ])), [
              [b, t.loading]
            ])
          ]),
          _: 3
        }, 16, ["model-value", "fullscreen"])
      ]);
    };
  }
});
export {
  O as default
};
