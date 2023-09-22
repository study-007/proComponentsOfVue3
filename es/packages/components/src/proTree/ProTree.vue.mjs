import { defineComponent as c, ref as d, watch as h, resolveComponent as r, openBlock as b, createElementBlock as w, Fragment as L, createVNode as t, createElementVNode as o, withCtx as i, unref as x } from "vue";
import "./style/index.less";
import { ElTree as H } from "../../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.3.12_vue@3.2.36/node_modules/element-plus/es/components/tree/index.mjs";
const g = /* @__PURE__ */ o("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-ea893728": ""
}, [
  /* @__PURE__ */ o("path", {
    fill: "currentColor",
    d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z"
  })
], -1), V = /* @__PURE__ */ o("span", { style: { "margin-left": "5px" } }, "展开所有", -1), k = c({
  name: "pro-tree"
}), E = /* @__PURE__ */ c({
  ...k,
  setup(C) {
    const n = d(""), a = d(), s = {
      children: "children",
      label: "label"
    };
    h(n, (e) => {
      a.value.filter(e);
    });
    const u = (e, l) => e ? l.label.includes(e) : !0, p = [
      {
        id: 1,
        label: "Level one 1",
        children: [
          {
            id: 4,
            label: "Level two 1-1",
            children: [
              {
                id: 9,
                label: "Level three 1-1-1"
              },
              {
                id: 10,
                label: "Level three 1-1-2"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        label: "Level one 2",
        children: [
          {
            id: 5,
            label: "Level two 2-1"
          },
          {
            id: 6,
            label: "Level two 2-2"
          }
        ]
      },
      {
        id: 3,
        label: "Level one 3",
        children: [
          {
            id: 7,
            label: "Level two 3-1"
          },
          {
            id: 8,
            label: "Level two 3-2"
          }
        ]
      }
    ];
    return (e, l) => {
      const m = r("el-input"), f = r("el-icon"), v = r("el-button");
      return b(), w(L, null, [
        t(m, {
          modelValue: n.value,
          "onUpdate:modelValue": l[0] || (l[0] = (_) => n.value = _),
          placeholder: "筛选组织树",
          style: { "margin-bottom": "20px" }
        }, null, 8, ["modelValue"]),
        o("div", null, [
          t(v, { link: "" }, {
            default: i(() => [
              t(f, null, {
                default: i(() => [
                  g
                ]),
                _: 1
              }),
              V
            ]),
            _: 1
          })
        ]),
        t(x(H), {
          ref_key: "treeRef",
          ref: a,
          class: "filter-tree",
          data: p,
          props: s,
          "default-expand-all": "",
          "filter-node-method": u
        }, null, 512)
      ], 64);
    };
  }
});
export {
  E as default
};
