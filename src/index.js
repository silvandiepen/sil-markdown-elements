// Import vue component
import MarkdownH1 from './markdown-h1.vue';
import MarkdownH2 from './markdown-h2.vue';
import MarkdownH3 from './markdown-h3.vue';
import MarkdownH4 from './markdown-h4.vue';
import MarkdownH5 from './markdown-h5.vue';
import MarkdownH6 from './markdown-h6.vue';
import MarkdownP from './markdown-p.vue';

// install function executed by Vue.use()
export function install(Vue) {
	if (install.installed) return;
	install.installed = true;

	
	Vue.component('Mh1', MarkdownH1);
	Vue.component('Mh2', MarkdownH2);
	Vue.component('Mh3', MarkdownH3);
	Vue.component('Mh4', MarkdownH4);
	Vue.component('Mh5', MarkdownH5);
	Vue.component('Mh6', MarkdownH6);
	Vue.component('p', MarkdownP);
	
}

// Create module definition for Vue.use()
const plugin = {
	install,
};

// To auto-install when vue is found
let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default { MarkdownH1, MarkdownH2, MarkdownH3, MarkdownH4, MarkdownH5, MarkdownH6, MarkdownP  };

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;