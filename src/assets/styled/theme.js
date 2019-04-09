// Theme colors
const colors = {
	primary: '#333',
	secondary: '#f4f4f4',

	/* Text Color */
	txtPrimary: '#4a4a4a',
	txtSecondary: '#7d7d7d',

	/*Basic Color */
	blk: '#222',
	wht: '#f3f3f3',

	/* Link Color */
	link: '#1e90ff'
};

// @media
const breakpoints = {
	xs: '20em', //320px — small mobile screen
	mobile: '37.5em', // 600px — Minimum mobile screen
	tablet: '47em', // 768px
	desktop: '62.5em', // 1000px — Minimun desktop screen
	lg: '80em' //1280px — full desktop screen
};

// import/export
const theme = {
	breakpoints,
	colors
};

export default theme;
