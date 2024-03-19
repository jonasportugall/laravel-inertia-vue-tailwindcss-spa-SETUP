import './bootstrap';
import { createApp, h } from 'vue';
//import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
 
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: name => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
  setup({ el, app, props, plugin }) {
      return createApp({ render: () => h(app, props) })
          .use(plugin)
          .component('InertiaHead', Head)
          .component('InertiaLink', Link)
          .mixin({ methods: { route } })
          .mount(el);
  },
});

