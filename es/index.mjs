import * as n from "./src/index.mjs";
const t = {
  install: (o) => {
    for (const s in n)
      o.use(n[s]);
  }
};
export {
  t as default
};
