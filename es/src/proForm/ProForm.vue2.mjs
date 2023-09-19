import { defineComponent as Q, reactive as J, onMounted as ke, computed as _e, useSlots as he, ref as Ve, resolveComponent as u, openBlock as t, createBlock as s, TransitionGroup as Fe, withCtx as i, createVNode as b, unref as K, normalizeClass as m, createElementBlock as d, Fragment as r, renderList as o, mergeProps as v, normalizeStyle as me, renderSlot as B, createTextVNode as w, toDisplayString as S, createCommentVNode as k, createElementVNode as _, pushScopeId as ve, popScopeId as we } from "vue";
import "./style/index.less";
const X = (p) => (ve("data-v-644088e2"), p = p(), we(), p), Ue = /* @__PURE__ */ X(() => /* @__PURE__ */ _("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-ea893728": ""
}, [
  /* @__PURE__ */ _("path", {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  })
], -1)), ge = /* @__PURE__ */ X(() => /* @__PURE__ */ _("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-ea893728": ""
}, [
  /* @__PURE__ */ _("path", {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  })
], -1)), xe = /* @__PURE__ */ w("重置"), Be = ["src"], Se = Q({
  name: "pro-form"
}), ze = /* @__PURE__ */ Q({
  ...Se,
  props: {
    formModels: null,
    ruleForm: null,
    showSubmitBtn: { type: Boolean, default: !0 },
    submitText: { default: "提交" },
    showResetBtn: { type: Boolean, default: !0 },
    tableStyle: { type: Boolean, default: !1 },
    showHandleBar: { type: Boolean, default: !0 },
    labelWidth: { default: "120px" }
  },
  emits: ["submitForm"],
  setup(p, { expose: Y, emit: Z }) {
    const a = p, f = (n, c) => n === "input" ? "请输入" + c : n === "upload" ? "请上传" + c : "请选择" + c, U = J({});
    (() => {
      a.formModels.forEach((n) => {
        n.placeholder || (n.placeholder = f(n.type, n.label));
      });
    })(), ke(() => {
    });
    const M = _e(() => (a.formModels.forEach((n) => {
      n.rule && (typeof n.rule == "boolean" ? U[n.key] = [
        {
          required: !0,
          message: n.placeholder,
          trigger: "blur"
        }
      ] : U[n.key] = n.rule);
    }), setTimeout(() => {
      V();
    }, 30), U)), ee = he(), h = Ve(), R = () => {
      var n;
      return (n = h.value) == null ? void 0 : n.validate();
    }, V = () => {
      var n;
      (n = h.value) == null || n.clearValidate();
    }, C = () => {
      var n;
      (n = h.value) == null || n.resetFields();
    }, le = async () => {
      await R(), Z("submitForm", a.ruleForm);
    };
    Y({
      validate: R,
      clearValidate: V,
      resetForm: C,
      setRuleForm: (n) => {
        Object.assign(a.ruleForm, n), setTimeout(() => {
          V();
        }, 30);
      },
      resetRuleForm: () => {
        const n = Object.assign({}, a.ruleForm);
        for (const c in n)
          delete a.ruleForm[c];
        setTimeout(() => {
          V();
        }, 30);
      }
    });
    const y = J({
      visible: !1,
      imageUrl: ""
    }), P = (n) => {
      y.imageUrl = n.url, y.visible = !0;
    };
    return (n, c) => {
      const g = u("el-input"), ae = u("el-input-number"), te = u("el-radio"), ne = u("el-radio-group"), se = u("el-checkbox"), ue = u("el-checkbox-group"), T = u("el-option"), ie = u("el-option-group"), pe = u("el-select"), ce = u("el-cascader"), de = u("el-switch"), H = u("el-time-picker"), F = u("el-date-picker"), z = u("el-icon"), I = u("el-upload"), E = u("el-form-item"), re = u("el-col"), oe = u("el-row"), N = u("el-button"), ye = u("el-dialog"), be = u("el-form");
      return t(), s(Fe, {
        class: "content",
        tag: "form",
        name: "fade-list"
      }, {
        default: i(() => [
          b(be, {
            model: a.ruleForm,
            rules: K(M),
            ref_key: "ruleFormRef",
            ref: h,
            "label-width": p.labelWidth
          }, {
            default: i(() => [
              b(oe, {
                class: m(p.tableStyle ? "dataForm" : "")
              }, {
                default: i(() => [
                  (t(!0), d(r, null, o(a.formModels, (e) => (t(), s(re, v({
                    span: e.span
                  }, e.col), {
                    default: i(() => [
                      e.hidden ? k("", !0) : (t(), s(E, {
                        label: e.label,
                        prop: e.key,
                        key: e.key,
                        class: m(p.tableStyle ? "formItemDuty " + e.class : "" + e.class),
                        style: me(e.style),
                        "label-width": e.labelWidth
                      }, {
                        default: i(() => {
                          var W, $, j, D, G, O, q, L, A;
                          return [
                            K(ee)[e.key] ? B(n.$slots, e.key, { key: 0 }, void 0, !0) : e.type === "input" ? (t(), s(g, v({
                              key: 1,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              placeholder: e.placeholder,
                              disabled: e.disabled,
                              type: ((W = e.props) == null ? void 0 : W.type) ?? "text"
                            }, e.props, { clearable: "" }), null, 16, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled", "type"])) : e.type === "password" ? (t(), s(g, {
                              key: 2,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              type: "password",
                              placeholder: e.placeholder,
                              disabled: e.disabled,
                              "show-password": "",
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : e.type === "textarea" ? (t(), s(g, {
                              key: 3,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              autosize: { minRows: 4, maxRows: 6 },
                              type: "textarea",
                              placeholder: e.placeholder,
                              disabled: e.disabled,
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : e.type === "number" ? (t(), s(ae, {
                              key: 4,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              disabled: e.disabled,
                              precision: (($ = e.props) == null ? void 0 : $.precision) ?? 2
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "precision"])) : e.type === "radio" ? (t(), s(ne, {
                              key: 5,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              disabled: e.disabled
                            }, {
                              default: i(() => [
                                (t(!0), d(r, null, o(e == null ? void 0 : e.options, (l) => (t(), s(te, {
                                  key: l.key,
                                  label: l.value
                                }, {
                                  default: i(() => [
                                    w(S(l.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["label"]))), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])) : e.type === "checkbox" ? (t(), s(ue, {
                              key: 6,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l
                            }, {
                              default: i(() => [
                                (t(!0), d(r, null, o(e == null ? void 0 : e.options, (l) => (t(), s(se, {
                                  key: l.key,
                                  label: l.value
                                }, {
                                  default: i(() => [
                                    w(S(l.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["label"]))), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])) : e.type === "select" ? (t(), s(pe, v({
                              key: 7,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              placeholder: e.placeholder,
                              disabled: e.disabled
                            }, e.props), {
                              default: i(() => [
                                e.hasGroup ? (t(!0), d(r, { key: 0 }, o(e == null ? void 0 : e.options, (l) => (t(), s(ie, {
                                  key: l.label,
                                  label: l.label
                                }, {
                                  default: i(() => [
                                    (t(!0), d(r, null, o(l.options, (x) => (t(), s(T, {
                                      key: x.value,
                                      label: x.label,
                                      value: x.value
                                    }, null, 8, ["label", "value"]))), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["label"]))), 128)) : (t(!0), d(r, { key: 1 }, o(e == null ? void 0 : e.options, (l) => (t(), s(T, {
                                  key: l.key,
                                  label: l.label,
                                  value: l.value
                                }, null, 8, ["label", "value"]))), 128))
                              ]),
                              _: 2
                            }, 1040, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : e.type === "cascader" ? (t(), s(ce, {
                              key: 8,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              options: e == null ? void 0 : e.options,
                              props: e == null ? void 0 : e.props,
                              placeholder: e.placeholder,
                              disabled: e.disabled
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "props", "placeholder", "disabled"])) : e.type === "switch" ? (t(), s(de, {
                              key: 9,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              disabled: e.disabled
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])) : e.type === "time" ? (t(), s(H, {
                              key: 10,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              placeholder: e.placeholder,
                              disabled: e.disabled
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : e.type === "time-to-time" ? (t(), s(H, {
                              key: 11,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              "is-range": "",
                              "range-separator": "至",
                              "start-placeholder": "开始日期",
                              "end-placeholder": "结束日期",
                              disabled: e.disabled
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])) : e.type === "date" ? (t(), s(F, {
                              key: 12,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              type: ((j = e.props) == null ? void 0 : j.type) ?? "date",
                              placeholder: e.placeholder,
                              disabled: e.disabled
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder", "disabled"])) : e.type === "date-to-date" ? (t(), s(F, {
                              key: 13,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              placeholder: e.placeholder,
                              type: "daterange",
                              "range-separator": "至",
                              "start-placeholder": "开始日期",
                              "end-placeholder": "结束日期",
                              disabled: e.disabled
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : e.type === "datetime" ? (t(), s(F, {
                              key: 14,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              type: "datetime",
                              placeholder: e.placeholder,
                              disabled: e.disabled
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : e.type === "datetime-to-datetime" ? (t(), s(F, {
                              key: 15,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              type: "datetimerange",
                              "range-separator": "至",
                              "start-placeholder": "开始日期",
                              "end-placeholder": "结束日期",
                              disabled: e.disabled
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])) : e.type === "upload" ? (t(), s(I, {
                              key: 16,
                              "file-list": a.ruleForm[e.key],
                              "onUpdate:file-list": (l) => a.ruleForm[e.key] = l,
                              action: (D = e == null ? void 0 : e.props) == null ? void 0 : D.action,
                              limit: ((G = e == null ? void 0 : e.props) == null ? void 0 : G.limit) || 1,
                              "list-type": "picture-card",
                              "on-preview": P,
                              disabled: e.disabled,
                              class: m({ "el-upload--none": a.ruleForm[e.key].length === ((O = e == null ? void 0 : e.props) == null ? void 0 : O.limit) })
                            }, {
                              default: i(() => [
                                b(z, null, {
                                  default: i(() => [
                                    Ue
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1032, ["file-list", "onUpdate:file-list", "action", "limit", "disabled", "class"])) : e.type === "upload-mini" ? (t(), s(I, v({
                              key: 17,
                              "file-list": a.ruleForm[e.key],
                              "onUpdate:file-list": (l) => a.ruleForm[e.key] = l,
                              action: (q = e == null ? void 0 : e.props) == null ? void 0 : q.action,
                              limit: ((L = e == null ? void 0 : e.props) == null ? void 0 : L.limit) || 1,
                              "list-type": "picture-card",
                              "on-preview": P,
                              disabled: e.disabled,
                              class: ["upload-mini", { "el-upload--none": a.ruleForm[e.key].length === ((A = e == null ? void 0 : e.props) == null ? void 0 : A.limit) }]
                            }, e.props), {
                              default: i(() => [
                                B(n.$slots, "upload-mini-" + e.key, {}, () => [
                                  b(z, null, {
                                    default: i(() => [
                                      ge
                                    ]),
                                    _: 1
                                  })
                                ], !0)
                              ]),
                              _: 2
                            }, 1040, ["file-list", "onUpdate:file-list", "action", "limit", "disabled", "class"])) : k("", !0)
                          ];
                        }),
                        _: 2
                      }, 1032, ["label", "prop", "class", "style", "label-width"]))
                    ]),
                    _: 2
                  }, 1040, ["span"]))), 256))
                ]),
                _: 3
              }, 8, ["class"]),
              p.showHandleBar ? (t(), s(E, {
                key: 0,
                class: m(["form-operations", p.tableStyle ? "btnForm" : ""])
              }, {
                default: i(() => [
                  B(n.$slots, "operations", {}, void 0, !0),
                  p.showSubmitBtn ? (t(), s(N, {
                    key: 0,
                    type: "primary",
                    onClick: le
                  }, {
                    default: i(() => [
                      w(S(p.submitText), 1)
                    ]),
                    _: 1
                  })) : k("", !0),
                  p.showResetBtn ? (t(), s(N, {
                    key: 1,
                    onClick: C
                  }, {
                    default: i(() => [
                      xe
                    ]),
                    _: 1
                  })) : k("", !0)
                ]),
                _: 3
              }, 8, ["class"])) : k("", !0),
              b(ye, {
                modelValue: y.visible,
                "onUpdate:modelValue": c[0] || (c[0] = (e) => y.visible = e)
              }, {
                default: i(() => [
                  _("img", {
                    "w-full": "",
                    src: y.imageUrl,
                    alt: "Preview Image"
                  }, null, 8, Be)
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 3
          }, 8, ["model", "rules", "label-width"])
        ]),
        _: 3
      });
    };
  }
});
export {
  ze as default
};
