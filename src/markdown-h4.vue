<script>
import Markdown from '~@sil/markdown';
export default {
	components: {
		Markdown
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
</script>
