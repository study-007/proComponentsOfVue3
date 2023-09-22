import { defineComponent as S, reactive as E, ref as h, onMounted as H, unref as v, computed as L, watch as d, resolveComponent as n, resolveDirective as M, openBlock as o, createElementBlock as c, Fragment as b, createElementVNode as g, createVNode as a, withCtx as r, renderSlot as x, withDirectives as O, createBlock as w, createCommentVNode as k, renderList as T, normalizeProps as F, mergeProps as q } from "vue";
import G from "./ElTableColumnRender.vue.mjs";
import "./style/index.less";
const I = { class: "pro-table-wrapper" }, J = /* @__PURE__ */ g("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-ea893728": ""
}, [
  /* @__PURE__ */ g("path", {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
  })
], -1), K = /* @__PURE__ */ g("span", { style: { "margin-left": "10px" } }, "查找", -1), Q = S({
  name: "pro-table"
}), Z = /* @__PURE__ */ S({
  ...Q,
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
  emits: [
    "update:current-page",
    "update:page-size",
    "register",
    "search"
  ],
  setup(C, { emit: s }) {
    const t = C, f = E({
      name: ""
    }), m = h();
    H(() => {
      const l = v(m);
      s("register", l.$parent, m);
    });
    const u = h(t.pageSize), p = h(t.currentPage), z = L(() => Object.assign(
      {
        small: !1,
        background: !1,
        pagerCount: 7,
        layout: "sizes, prev, pager, next, jumper, ->, total",
        pageSizes: [10, 20, 30, 40, 50, 100],
        disabled: !1,
        hideOnSinglePage: !1
      },
      t.pagination
    ));
    d(
      () => t.currentPage,
      (l) => {
        p.value = l;
      }
    ), d(
      () => t.pageSize,
      (l) => {
        u.value = l;
      }
    ), d(
      () => u.value,
      (l) => {
        s("update:page-size", l);
      }
    ), d(
      () => p.value,
      (l) => {
        s("update:current-page", l);
      }
    );
    const P = () => {
      s("search", f);
    };
    return (l, i) => {
      const B = n("el-input"), y = n("el-form-item"), V = n("el-icon"), R = n("el-button"), $ = n("el-form"), _ = n("el-table-column"), A = n("el-table"), N = n("el-pagination"), U = M("loading");
      return o(), c(b, null, [
        g("div", I, [
          a($, {
            inline: !0,
            class: "search-box"
          }, {
            default: r(() => [
              x(l.$slots, "table-form-item", {}, () => [
                a(y, null, {
                  default: r(() => [
                    a(B, {
                      modelValue: f.name,
                      "onUpdate:modelValue": i[0] || (i[0] = (e) => f.name = e),
                      placeholder: "请输入关键字"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                a(y, null, {
                  default: r(() => [
                    a(R, {
                      type: "primary",
                      onClick: P
                    }, {
                      default: r(() => [
                        a(V, null, {
                          default: r(() => [
                            J
                          ]),
                          _: 1
                        }),
                        K
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 3
          })
        ]),
        O((o(), c("div", null, [
          a(A, {
            ref_key: "elTableRef",
            ref: m,
            data: t.data,
            border: "",
            "max-height": t.maxHeight,
            height: t.height
          }, {
            default: r(() => [
              t.selection ? (o(), w(_, {
                key: 0,
                type: "selection",
                width: "55"
              })) : k("", !0),
              a(_, {
                type: "index",
                label: "序号",
                width: "65",
                align: "center",
                fixed: "left"
              }),
              (o(!0), c(b, null, T(t.columns, (e, j) => (o(), c(b, null, [
                e.children ? (o(), w(G, {
                  key: j,
                  data: e,
                  align: t.align,
                  "header-align": t.headerAlign
                }, null, 8, ["data", "align", "header-align"])) : (o(), w(_, {
                  key: e.field,
                  prop: e.field,
                  "show-overflow-tooltip": e.field != "action",
                  label: e.label,
                  align: t.align,
                  "header-align": t.headerAlign,
                  width: e.width,
                  formatter: e == null ? void 0 : e.formatter
                }, {
                  default: r((D) => [
                    e.field == "action" ? x(l.$slots, "action", F(q({ key: 0 }, D))) : k("", !0)
                  ]),
                  _: 2
                }, 1032, ["prop", "show-overflow-tooltip", "label", "align", "header-align", "width", "formatter"]))
              ], 64))), 256))
            ]),
            _: 3
          }, 8, ["data", "max-height", "height"]),
          a(N, {
            "current-page": p.value,
            "onUpdate:current-page": i[1] || (i[1] = (e) => p.value = e),
            "page-size": u.value,
            "onUpdate:page-size": i[2] || (i[2] = (e) => u.value = e),
            "page-sizes": v(z).pageSizes,
            layout: v(z).layout,
            total: t.total
          }, null, 8, ["current-page", "page-size", "page-sizes", "layout", "total"])
        ])), [
          [U, t.loading]
        ])
      ], 64);
    };
  }
});
export {
  Z as default
};
