import type { Plugin } from 'vue';
declare type SFCWithInstall<T> = T & Plugin;
declare const withInstall: <T>(comp: T) => SFCWithInstall<T>;
export { withInstall };
