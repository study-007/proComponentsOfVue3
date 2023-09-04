import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ProDescriptions: typeof components.ProDescriptions;
    ProFormDescriptions: typeof components.ProFormDescriptions;
  }
}
export {};