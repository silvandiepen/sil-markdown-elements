import Markdown from '~@sil/markdown';

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
var MarkdownH1 = {
	components: {
		Markdown: Markdown
	},
	template: '<Markdown :source="raw" element="h1" :unp="true"></Markdown>',
	props: {
		source: {
			type: String,
			default: undefined
		}
	},
	bind: function(el, binding) {
		// Here your code for the component
	}
};

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
var MarkdownH2 = {
	components: {
		Markdown: Markdown
	},
	template: '<Markdown :source="raw" element="h2" :unp="true"></Markdown>',
	props: {
		source: {
			type: String,
			default: undefined
		}
	},
	bind: function(el, binding) {
		// Here your code for the component
	}
};

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
var MarkdownH3 = {
	components: {
		Markdown: Markdown
	},
	template: '<Markdown :source="raw" element="h3" :unp="true"></Markdown>',
	props: {
		source: {
			type: String,
			default: undefined
		}
	},
	bind: function(el, binding) {
		// Here your code for the component
	}
};

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
var MarkdownH4 = {
	components: {
		Markdown: Markdown
	},
	template: '<Markdown :source="raw" element="h4" :unp="true"></Markdown>',
	props: {
		source: {
			type: String,
			default: undefined
		}
	},
	bind: function(el, binding) {
		// Here your code for the component
	}
};

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
var MarkdownH5 = {
	components: {
		Markdown: Markdown
	},
	template: '<Markdown :source="raw" element="h5" :unp="true"></Markdown>',
	props: {
		source: {
			type: String,
			default: undefined
		}
	},
	bind: function(el, binding) {
		// Here your code for the component
	}
};

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
var MarkdownH6 = {
	components: {
		Markdown: Markdown
	},
	template: '<Markdown :source="raw" element="h6" :unp="true"></Markdown>',
	props: {
		source: {
			type: String,
			default: undefined
		}
	},
	bind: function(el, binding) {
		// Here your code for the component
	}
};

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
var MarkdownP = {
	components: {
		Markdown: Markdown
	},
	template: '<Markdown :source="raw" element="p" :unp="true"></Markdown>',
	props: {
		source: {
			type: String,
			default: undefined
		}
	},
	bind: function(el, binding) {
		// Here your code for the component
	}
};

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
	if (install.installed) { return; }
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
var plugin = {
	install: install,
};

// To auto-install when vue is found
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
var index = { MarkdownH1: MarkdownH1, MarkdownH2: MarkdownH2, MarkdownH3: MarkdownH3, MarkdownH4: MarkdownH4, MarkdownH5: MarkdownH5, MarkdownH6: MarkdownH6, MarkdownP: MarkdownP  };

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default index;
export { install };
