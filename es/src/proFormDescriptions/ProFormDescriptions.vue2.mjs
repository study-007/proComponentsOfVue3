import { defineComponent as R, useSlots as W, resolveComponent as o, openBlock as t, createBlock as p, withCtx as r, renderSlot as k, createElementBlock as i, Fragment as u, renderList as m, mergeProps as b, unref as X, createTextVNode as z, toDisplayString as D, normalizeClass as Y, createVNode as _, createCommentVNode as Z } from "vue";
import "./style/index.less";
const c = R({
  name: "pro-form-descriptions"
}), le = /* @__PURE__ */ R({
  ...c,
  props: {
    title: null,
    descModels: null,
    desForm: null
  },
  setup(E) {
    const l = E, h = W();
    return console.log({ ...h }, "---"), console.log(l.title, l, "=="), (n, M) => {
      const s = o("el-input"), G = o("el-input-number"), L = o("el-radio"), T = o("el-radio-group"), j = o("el-checkbox"), q = o("el-checkbox-group"), F = o("el-option"), A = o("el-option-group"), H = o("el-select"), I = o("el-cascader"), J = o("el-switch"), U = o("el-time-picker"), y = o("el-date-picker"), f = o("Plus"), d = o("el-icon"), g = o("el-upload"), K = o("el-form-item"), O = o("el-descriptions-item"), Q = o("el-descriptions");
      return t(), p(Q, {
        title: l.title,
        class: "pro-form-Descriptions-wrapper"
      }, {
        extra: r(() => [
          k(n.$slots, "custom-extra", {}, void 0, !0)
        ]),
        default: r(() => [
          (t(!0), i(u, null, m(l.descModels, (e) => (t(), p(O, b(e.props, {
            "label-align": "center",
            label: e.label
          }), {
            default: r(() => [
              k(n.$slots, e.key + "-content", {}, () => [
                (t(), p(K, {
                  prop: e.key,
                  key: e.key
                }, {
                  default: r(() => {
                    var v, w, x, C, P, $, B, N, S;
                    return [
                      X(h)[e.key] ? k(n.$slots, e.key, { key: 0 }, void 0, !0) : e.type === "input" ? (t(), p(s, b({
                        key: 1,
                        modelValue: l.desForm[e.key],
                        "onUpdate:modelValue": (a) => l.desForm[e.key] = a,
                        placeholder: e.placeholder,
                        disabled: e.disabled,
                        type: ((v = e.props) == null ? void 0 : v.type) ?? "text"
                      }, e.props, { clearable: "" }), null, 16, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled", "type"])) : e.type === "password" ? (t(), p(s, {
                        key: 2,
                        modelValue: l.desForm[e.key],
                        "onUpdate:modelValue": (a) => l.desForm[e.key] = a,
                        type: "password",
                        placeholder: e.placeholder,
                        disabled: e.disabled,
                        "show-password": "",
                        clearable: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : e.type === "textarea" ? (t(), p(s, {
                        key: 3,
                        modelValue: l.desForm[e.key],
                        "onUpdate:modelValue": (a) => l.desForm[e.key] = a,
                        autosize: { minRows: 4, maxRows: 6 },
                        type: "textarea",
                        placeholder: e.placeholder,
                        disabled: e.disabled,
                        clearable: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : e.type === "number" ? (t(), p(G, {
                        key: 4,
                        modelValue: l.desForm[e.key],
                        "onUpdate:modelValue": (a) => l.desForm[e.key] = a,
                        disabled: e.disabled,
                        precision: ((w = e.props) == null ? void 0 : w.precision) ?? 2
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "precision"])) : e.type === "radio" ? (t(), p(T, {
                        key: 5,
                        modelValue: l.desForm[e.key],
                        "onUpdate:modelValue": (a) => l.desForm[e.key] = a,
                        disabled: e.disabled
                      }, {
                        default: r(() => [
                          (t(!0), i(u, null, m(e == null ? void 0 : e.options, (a) => (t(), p(L, {
                            key: a.key,
                            label: a.value
                          }, {
                            default: r(() => [
                              z(D(a.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["label"]))), 128))
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])) : e.type === "checkbox" ? (t(), p(q, {
                        key: 6,
                        modelValue: l.desForm[e.key],
                        "onUpdate:modelValue": (a) => l.desForm[e.key] = a
                      }, {
                        default: r(() => [
                          (t(!0), i(u, null, m(e == null ? void 0 : e.options, (a) => (t(), p(j, {
                            key: a.key,
                            label: a.value
                          }, {
                            default: r(() => [
                              z(D(a.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["label"]))), 128))
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue"])) : e.type === "select" ? (t(), p(H, b({
                        key: 7,
                        modelValue: l.desForm[e.key],
                        "onUpdate:modelValue": (a) => l.desForm[e.key] = a,
                        placeholder: e.placeholder,
                        disabled: e.disabled
                      }, e.props), {
                        default: r(() => [
                          e.hasGroup ? (t(!0), i(u, { key: 0 }, m(e == null ? void 0 : e.options, (a) => (t(), p(A, {
                            key: a.label,
                            label: a.label
                          }, {
                            default: r(() => [
                              (t(!0), i(u, null, m(a.options, (V) => (t(), p(F, {
                                key: V.value,
                                label: V.label,
                                value: V.value
                              }, null, 8, ["label", "value"]))), 128))
                            ]),
                            _: 2
                          }, 1032, ["label"]))), 128)) : (t(!0), i(u, { key: 1 }, m(e == null ? void 0 : e.options, (a) => (t(), p(F, {
                            key: a.key,
                            label: a.label,
                            value: a.value
                          }, null, 8, ["label", "value"]))), 128))
                        ]),
                        _: 2
                      }, 1040, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : e.type === "cascader" ? (t(), p(I, {
                        key: 8,
                        modelValue: l.desForm[e.key],
                        "onUpdate:modelValue": (a) => l.desForm[e.key] = a,
                        options: e == null ? void 0 : e.options,
                        props: e == null ? void 0 : e.props,
                        placeholder: e.placeholder,
                        disabled: e.disabled
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "props", "placeholder", "disabled"])) : e.type === "switch" ? (t(), p(J, {
                        key: 9,
                        modelValue: l.desForm[e.key],
                        "onUpdate:modelValue": (a) => l.desForm[e.key] = a,
                        disabled: e.disabled
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])) : e.type === "time" ? (t(), p(U, {
                        key: 10,
                        modelValue: l.desForm[e.key],
                        "onUpdate:modelValue": (a) => l.desForm[e.key] = a,
                        placeholder: e.placeholder,
                        disabled: e.disabled
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : e.type === "time-to-time" ? (t(), p(U, {
                        key: 11,
                        modelValue: l.desForm[e.key],
                        "onUpdate:modelValue": (a) => l.desForm[e.key] = a,
                        "is-range": "",
                        "range-separator": "至",
                        "start-placeholder": "开始日期",
                        "end-placeholder": "结束日期",
                        disabled: e.disabled
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])) : e.type === "date" ? (t(), p(y, {
                        key: 12,
                        modelValue: l.desForm[e.key],
                        "onUpdate:modelValue": (a) => l.desForm[e.key] = a,
                        type: ((x = e.props) == null ? void 0 : x.type) ?? "date",
                        placeholder: e.placeholder,
                        disabled: e.disabled
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder", "disabled"])) : e.type === "date-to-date" ? (t(), p(y, {
                        key: 13,
                        modelValue: l.desForm[e.key],
                        "onUpdate:modelValue": (a) => l.desForm[e.key] = a,
                        placeholder: e.placeholder,
                        type: "daterange",
                        "range-separator": "至",
                        "start-placeholder": "开始日期",
                        "end-placeholder": "结束日期",
                        disabled: e.disabled
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : e.type === "datetime" ? (t(), p(y, {
                        key: 14,
                        modelValue: l.desForm[e.key],
                        "onUpdate:modelValue": (a) => l.desForm[e.key] = a,
                        type: "datetime",
                        placeholder: e.placeholder,
                        disabled: e.disabled
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : e.type === "datetime-to-datetime" ? (t(), p(y, {
                        key: 15,
                        modelValue: l.desForm[e.key],
                        "onUpdate:modelValue": (a) => l.desForm[e.key] = a,
                        type: "datetimerange",
                        "range-separator": "至",
                        "start-placeholder": "开始日期",
                        "end-placeholder": "结束日期",
                        disabled: e.disabled
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])) : e.type === "upload" ? (t(), p(g, {
                        key: 16,
                        "file-list": l.desForm[e.key],
                        "onUpdate:file-list": (a) => l.desForm[e.key] = a,
                        action: (C = e == null ? void 0 : e.props) == null ? void 0 : C.action,
                        limit: ((P = e == null ? void 0 : e.props) == null ? void 0 : P.limit) || 1,
                        "list-type": "picture-card",
                        "on-preview": n.handlePictureCardPreview,
                        disabled: e.disabled,
                        class: Y({ "el-upload--none": l.desForm[e.key].length === (($ = e == null ? void 0 : e.props) == null ? void 0 : $.limit) })
                      }, {
                        default: r(() => [
                          _(d, null, {
                            default: r(() => [
                              _(f)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["file-list", "onUpdate:file-list", "action", "limit", "on-preview", "disabled", "class"])) : e.type === "upload-mini" ? (t(), p(g, b({
                        key: 17,
                        "file-list": l.desForm[e.key],
                        "onUpdate:file-list": (a) => l.desForm[e.key] = a,
                        action: (B = e == null ? void 0 : e.props) == null ? void 0 : B.action,
                        limit: ((N = e == null ? void 0 : e.props) == null ? void 0 : N.limit) || 1,
                        "list-type": "picture-card",
                        "on-preview": n.handlePictureCardPreview,
                        disabled: e.disabled,
                        class: ["upload-mini", { "el-upload--none": l.desForm[e.key].length === ((S = e == null ? void 0 : e.props) == null ? void 0 : S.limit) }]
                      }, e.props), {
                        default: r(() => [
                          k(n.$slots, "upload-mini-" + e.key, {}, () => [
                            _(d, null, {
                              default: r(() => [
                                _(f)
                              ]),
                              _: 1
                            })
                          ], !0)
                        ]),
                        _: 2
                      }, 1040, ["file-list", "onUpdate:file-list", "action", "limit", "on-preview", "disabled", "class"])) : Z("", !0)
                    ];
                  }),
                  _: 2
                }, 1032, ["prop"]))
              ], !0)
            ]),
            _: 2
          }, 1040, ["label"]))), 256))
        ]),
        _: 3
      }, 8, ["title"]);
    };
  }
});
export {
  le as default
};
