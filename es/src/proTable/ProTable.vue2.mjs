import { defineComponent as y, ref as d, onMounted as C, unref as s, computed as R, watch as i, resolveComponent as c, resolveDirective as A, withDirectives as $, openBlock as l, createElementBlock as f, createVNode as h, withCtx as v, createBlock as m, createCommentVNode as b, Fragment as z, renderList as j, renderSlot as D, normalizeProps as H, mergeProps as N } from "vue";
import O from "./ElTableColumnRender.vue.mjs";
import "./style/index.less";
const T = y({
  name: "pro-table"
}), F = /* @__PURE__ */ y({
  ...T,
  props: {
    pageSize: null,
    currentPage: null,
    total: null,
    data: { default: () => [] },
    columns: null,
    align: { default: () => "left" },
    headerAlign: { default: () => "left" },
    maxHeight: null,
    height: null,
    loading: { type: Boolean },
    pagination: { default: () => ({}) },
    selection: { type: Boolean, default: () => !1 }
  },
  emits: ["update:current-page", "update:page-size", "register"],
  setup(w, { emit: u }) {
    const e = w, g = d();
    C(() => {
      const t = s(g);
      u("register", t.$parent, g);
    });
    const n = d(e.pageSize), o = d(e.currentPage), _ = R(() => Object.assign(
      {
        small: !1,
        background: !1,
        pagerCount: 7,
        layout: "sizes, prev, pager, next, jumper, ->, total",
        pageSizes: [10, 20, 30, 40, 50, 100],
        disabled: !1,
        hideOnSinglePage: !1
      },
      e.pagination
    ));
    return i(
      () => e.currentPage,
      (t) => {
        o.value = t;
      }
    ), i(
      () => e.pageSize,
      (t) => {
        n.value = t;
      }
    ), i(
      () => n.value,
      (t) => {
        u("update:page-size", t);
      }
    ), i(
      () => o.value,
      (t) => {
        u("update:current-page", t);
      }
    ), (t, r) => {
      const p = c("el-table-column"), k = c("el-table"), x = c("el-pagination"), S = A("loading");
      return $((l(), f("div", null, [
        h(k, {
          ref_key: "elTableRef",
          ref: g,
          data: e.data,
          border: "",
          "max-height": e.maxHeight,
          height: e.height
        }, {
          default: v(() => [
            e.selection ? (l(), m(p, {
              key: 0,
              type: "selection",
              width: "55"
            })) : b("", !0),
            h(p, {
              type: "index",
              label: "序号",
              width: "65",
              align: "center",
              fixed: "left"
            }),
            (l(!0), f(z, null, j(e.columns, (a, P) => (l(), f(z, null, [
              a.children ? (l(), m(O, {
                key: P,
                data: a,
                align: e.align,
                "header-align": e.headerAlign
              }, null, 8, ["data", "align", "header-align"])) : (l(), m(p, {
                key: a.field,
                prop: a.field,
                "show-overflow-tooltip": a.field != "action",
                label: a.label,
                align: e.align,
                "header-align": e.headerAlign,
                width: a.width,
                formatter: a == null ? void 0 : a.formatter
              }, {
                default: v((B) => [
                  a.field == "action" ? D(t.$slots, "action", H(N({ key: 0 }, B)), void 0, !0) : b("", !0)
                ]),
                _: 2
              }, 1032, ["prop", "show-overflow-tooltip", "label", "align", "header-align", "width", "formatter"]))
            ], 64))), 256))
          ]),
          _: 3
        }, 8, ["data", "max-height", "height"]),
        h(x, {
          "current-page": o.value,
          "onUpdate:current-page": r[0] || (r[0] = (a) => o.value = a),
          "page-size": n.value,
          "onUpdate:page-size": r[1] || (r[1] = (a) => n.value = a),
          "page-sizes": s(_).pageSizes,
          layout: s(_).layout,
          total: e.total
        }, null, 8, ["current-page", "page-size", "page-sizes", "layout", "total"])
      ])), [
        [S, e.loading]
      ]);
    };
  }
});
export {
  F as default
};
