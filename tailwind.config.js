module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'th-indigo': { DEFAULT: '#3a1d9c' },
				'th-green': { DEFAULT: '#cae663' },
			},
			fontFamily: {
				roboto: ['Roboto Mono'],
				Comfortaa: ['"Comfortaa", cursive'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
