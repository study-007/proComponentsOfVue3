import { defineComponent as m, useSlots as f, resolveComponent as a, openBlock as s, createBlock as p, createSlots as g, withCtx as o, createElementBlock as k, Fragment as x, renderList as S, normalizeProps as b, guardReactiveProps as v, renderSlot as l, createTextVNode as r, toDisplayString as i, unref as y } from "vue";
import "./style/index.less";
const B = m({
  name: "pro-descriptions"
}), P = /* @__PURE__ */ m({
  ...B,
  props: {
    title: null,
    descModels: null
  },
  setup(u) {
    const e = u, c = f();
    return console.log({ ...c }, "---"), console.log(e.title, e, "=="), (n, C) => {
      const _ = a("el-descriptions-item"), d = a("el-descriptions");
      return s(), p(d, {
        title: e.title
      }, g({
        default: o(() => [
          (s(!0), k(x, null, S(e.descModels, (t) => (s(), p(_, b(v(t.props)), {
            label: o(() => [
              l(n.$slots, t.key + "-label", {}, () => [
                r(i(t.label), 1)
              ])
            ]),
            default: o(() => [
              l(n.$slots, t.key + "-content", {}, () => [
                r(i(t.content), 1)
              ])
            ]),
            _: 2
          }, 1040))), 256))
        ]),
        _: 2
      }, [
        y(c)["custom-extra"] ? {
          name: "extra",
          fn: o(() => [
            l(n.$slots, "custom-extra", {}, () => [
              r(i(e.extra), 1)
            ])
          ])
        } : void 0
      ]), 1032, ["title"]);
    };
  }
});
export {
  P as default
};
