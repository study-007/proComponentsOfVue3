import { defineComponent as Q, reactive as J, onMounted as be, computed as ke, useSlots as _e, ref as he, resolveComponent as u, openBlock as t, createBlock as s, TransitionGroup as Ve, withCtx as i, createVNode as b, unref as K, normalizeClass as m, createElementBlock as d, Fragment as r, renderList as o, mergeProps as w, normalizeStyle as Fe, renderSlot as B, createTextVNode as U, toDisplayString as R, createCommentVNode as k, createElementVNode as _ } from "vue";
import "./style/index.less";
const me = /* @__PURE__ */ _("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-ea893728": ""
}, [
  /* @__PURE__ */ _("path", {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  })
], -1), we = /* @__PURE__ */ _("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-ea893728": ""
}, [
  /* @__PURE__ */ _("path", {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  })
], -1), Ue = /* @__PURE__ */ U("重置"), ge = ["src"], ve = Q({
  name: "pro-form"
}), Pe = /* @__PURE__ */ Q({
  ...ve,
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
  setup(p, { expose: X, emit: Y }) {
    const a = p, Z = (n, c) => n === "input" ? "请输入" + c : n === "upload" ? "请上传" + c : "请选择" + c, g = J({});
    (() => {
      a.formModels.forEach((n) => {
        n.placeholder || (n.placeholder = Z(n.type, n.label));
      });
    })(), be(() => {
    });
    const f = ke(() => (a.formModels.forEach((n) => {
      n.rule && (typeof n.rule == "boolean" ? g[n.key] = [
        {
          required: !0,
          message: n.placeholder,
          trigger: "blur"
        }
      ] : g[n.key] = n.rule);
    }), setTimeout(() => {
      V();
    }, 30), g)), M = _e(), h = he(), C = () => {
      var n;
      return (n = h.value) == null ? void 0 : n.validate();
    }, V = () => {
      var n;
      (n = h.value) == null || n.clearValidate();
    }, S = () => {
      var n;
      (n = h.value) == null || n.resetFields();
    }, ee = async () => {
      await C(), Y("submitForm", a.ruleForm);
    };
    X({
      validate: C,
      clearValidate: V,
      resetForm: S,
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
      const v = u("el-input"), le = u("el-input-number"), ae = u("el-radio"), te = u("el-radio-group"), ne = u("el-checkbox"), se = u("el-checkbox-group"), T = u("el-option"), ue = u("el-option-group"), ie = u("el-select"), pe = u("el-cascader"), ce = u("el-switch"), H = u("el-time-picker"), F = u("el-date-picker"), z = u("el-icon"), E = u("el-upload"), N = u("el-form-item"), de = u("el-col"), re = u("el-row"), W = u("el-button"), oe = u("el-dialog"), ye = u("el-form");
      return t(), s(Ve, {
        class: "pro-form-wrapper",
        tag: "form",
        name: "fade-list"
      }, {
        default: i(() => [
          b(ye, {
            model: a.ruleForm,
            rules: K(f),
            ref_key: "ruleFormRef",
            ref: h,
            "label-width": p.labelWidth
          }, {
            default: i(() => [
              b(re, {
                class: m(p.tableStyle ? "dataForm" : "")
              }, {
                default: i(() => [
                  (t(!0), d(r, null, o(a.formModels, (e) => (t(), s(de, w({
                    span: e.span
                  }, e.col), {
                    default: i(() => [
                      e.hidden ? k("", !0) : (t(), s(N, {
                        label: e.label,
                        prop: e.key,
                        key: e.key,
                        class: m(p.tableStyle ? "formItemDuty " + e.class : "" + e.class),
                        style: Fe(e.style),
                        "label-width": e.labelWidth
                      }, {
                        default: i(() => {
                          var $, j, D, G, I, O, q, L, A;
                          return [
                            K(M)[e.key] ? B(n.$slots, e.key, { key: 0 }) : e.type === "input" ? (t(), s(v, w({
                              key: 1,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              placeholder: e.placeholder,
                              disabled: e.disabled,
                              type: (($ = e.props) == null ? void 0 : $.type) ?? "text"
                            }, e.props, { clearable: "" }), null, 16, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled", "type"])) : e.type === "password" ? (t(), s(v, {
                              key: 2,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              type: "password",
                              placeholder: e.placeholder,
                              disabled: e.disabled,
                              "show-password": "",
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : e.type === "textarea" ? (t(), s(v, {
                              key: 3,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              autosize: { minRows: 4, maxRows: 6 },
                              type: "textarea",
                              placeholder: e.placeholder,
                              disabled: e.disabled,
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : e.type === "number" ? (t(), s(le, {
                              key: 4,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              disabled: e.disabled,
                              precision: ((j = e.props) == null ? void 0 : j.precision) ?? 2
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "precision"])) : e.type === "radio" ? (t(), s(te, {
                              key: 5,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              disabled: e.disabled
                            }, {
                              default: i(() => [
                                (t(!0), d(r, null, o(e == null ? void 0 : e.options, (l) => (t(), s(ae, {
                                  key: l.key,
                                  label: l.value
                                }, {
                                  default: i(() => [
                                    U(R(l.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["label"]))), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])) : e.type === "checkbox" ? (t(), s(se, {
                              key: 6,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l
                            }, {
                              default: i(() => [
                                (t(!0), d(r, null, o(e == null ? void 0 : e.options, (l) => (t(), s(ne, {
                                  key: l.key,
                                  label: l.value
                                }, {
                                  default: i(() => [
                                    U(R(l.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["label"]))), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])) : e.type === "select" ? (t(), s(ie, w({
                              key: 7,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              placeholder: e.placeholder,
                              disabled: e.disabled
                            }, e.props), {
                              default: i(() => [
                                e.hasGroup ? (t(!0), d(r, { key: 0 }, o(e == null ? void 0 : e.options, (l) => (t(), s(ue, {
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
                            }, 1040, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : e.type === "cascader" ? (t(), s(pe, {
                              key: 8,
                              modelValue: a.ruleForm[e.key],
                              "onUpdate:modelValue": (l) => a.ruleForm[e.key] = l,
                              options: e == null ? void 0 : e.options,
                              props: e == null ? void 0 : e.props,
                              placeholder: e.placeholder,
                              disabled: e.disabled
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "props", "placeholder", "disabled"])) : e.type === "switch" ? (t(), s(ce, {
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
                              type: ((D = e.props) == null ? void 0 : D.type) ?? "date",
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
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])) : e.type === "upload" ? (t(), s(E, {
                              key: 16,
                              "file-list": a.ruleForm[e.key],
                              "onUpdate:file-list": (l) => a.ruleForm[e.key] = l,
                              action: (G = e == null ? void 0 : e.props) == null ? void 0 : G.action,
                              limit: ((I = e == null ? void 0 : e.props) == null ? void 0 : I.limit) || 1,
                              "list-type": "picture-card",
                              "on-preview": P,
                              disabled: e.disabled,
                              class: m({ "el-upload--none": a.ruleForm[e.key].length === ((O = e == null ? void 0 : e.props) == null ? void 0 : O.limit) })
                            }, {
                              default: i(() => [
                                b(z, null, {
                                  default: i(() => [
                                    me
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1032, ["file-list", "onUpdate:file-list", "action", "limit", "disabled", "class"])) : e.type === "upload-mini" ? (t(), s(E, w({
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
                                      we
                                    ]),
                                    _: 1
                                  })
                                ])
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
              p.showHandleBar ? (t(), s(N, {
                key: 0,
                class: m(["form-operations", p.tableStyle ? "btnForm" : ""])
              }, {
                default: i(() => [
                  B(n.$slots, "operations"),
                  p.showSubmitBtn ? (t(), s(W, {
                    key: 0,
                    type: "primary",
                    onClick: ee
                  }, {
                    default: i(() => [
                      U(R(p.submitText), 1)
                    ]),
                    _: 1
                  })) : k("", !0),
                  p.showResetBtn ? (t(), s(W, {
                    key: 1,
                    onClick: S
                  }, {
                    default: i(() => [
                      Ue
                    ]),
                    _: 1
                  })) : k("", !0)
                ]),
                _: 3
              }, 8, ["class"])) : k("", !0),
              b(oe, {
                modelValue: y.visible,
                "onUpdate:modelValue": c[0] || (c[0] = (e) => y.visible = e)
              }, {
                default: i(() => [
                  _("img", {
                    "w-full": "",
                    src: y.imageUrl,
                    alt: "Preview Image"
                  }, null, 8, ge)
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
  Pe as default
};
