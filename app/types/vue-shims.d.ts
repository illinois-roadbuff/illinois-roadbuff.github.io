import type { Component } from 'vue';
import { RouterView } from 'vue-router';

declare module '@vue/runtime-core' {
  interface GlobalComponents extends Record<string, Component> {
    RouterView: typeof RouterView;
  }
}

// For importing `.vue` files as components
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
