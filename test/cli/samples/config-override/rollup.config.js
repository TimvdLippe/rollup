import replace from 'rollup-plugin-replace';

export default {
	input: 'nope.js',
	format: 'amd',
	plugins: [
		replace({ 'ANSWER': 42 })
	]
};
