import { ref as s, openBlock as _, createElementBlock as a, toDisplayString as r } from "vue";
const l = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, c] of e)
    n[o] = c;
  return n;
}, p = {
  class: "buttonclass",
  "hover-class": "button-hover"
}, u = {
  name: "BdButton"
}, d = /* @__PURE__ */ Object.assign(u, {
  props: {
    btnname: String
  },
  setup(t) {
    return s(0), (e, n) => (_(), a("button", p, r(t.btnname), 1));
  }
}), i = /* @__PURE__ */ l(d, [["__scopeId", "data-v-ee594c27"]]), m = [i], v = {
  install(t) {
    m.forEach((e) => {
      t.component(e.name, e);
    });
  }
};
export {
  i as Button,
  v as default
};
