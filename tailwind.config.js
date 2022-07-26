module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/layouts/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				'dark-green': '#414841',
				'bg': '#E4E1DE',
				'body-light': '#DBDBDB',
				'body-dark': '#767676',
				'xdark': '#4A4A4A',
				'gray-1': '#7F7F7F',
				'light-1': '#FBF8F5',

			},
			fontFamily: {
				'serif': ['Libre Baskerville', 'Georgia'],
				'sans': ['Libre Franklin', "system-ui"],
			}
		}
	},

	plugins: []
}
