import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ProDescriptions: typeof components.ProDescriptions;
    ProFormDescriptions: typeof components.ProFormDescriptions;
    ProDialog: typeof components.ProDialog;
    ProForm: typeof components.ProForm;
    ProTable: typeof components.ProTable;
    ProTree: typeof components.ProTree;
  }
}
export {};