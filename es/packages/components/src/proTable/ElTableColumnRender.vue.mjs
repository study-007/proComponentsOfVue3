import { defineComponent as m, resolveComponent as d, openBlock as e, createBlock as n, withCtx as p, createElementBlock as g, Fragment as c, renderList as s } from "vue";
const w = /* @__PURE__ */ m({
  name: "ElTableColumnRender",
  props: {
    data: null,
    align: null,
    headerAlign: null
  },
  setup(h) {
    const a = h;
    return (f, b) => {
      var r;
      const u = d("ElTableColumnRender", !0), t = d("el-table-column");
      return e(), n(t, {
        label: (r = a.data) == null ? void 0 : r.label,
        align: a.align,
        "header-align": a.headerAlign
      }, {
        default: p(() => {
          var o;
          return [
            (e(!0), g(c, null, s((o = a.data) == null ? void 0 : o.children, (l, i) => (e(), g(c, { key: i }, [
              l.children ? (e(), n(u, {
                key: i,
                data: l,
                align: a.align,
                "header-align": a.headerAlign
              }, null, 8, ["data", "align", "header-align"])) : (e(), n(t, {
                key: 1,
                prop: l.field,
                "show-overflow-tooltip": l.field != "action",
                align: a.align,
                "header-align": a.headerAlign,
                label: l.label,
                width: l.width,
                formatter: l == null ? void 0 : l.formatter
              }, null, 8, ["prop", "show-overflow-tooltip", "align", "header-align", "label", "width", "formatter"]))
            ], 64))), 128))
          ];
        }),
        _: 1
      }, 8, ["label", "align", "header-align"]);
    };
  }
});
export {
  w as default
};
