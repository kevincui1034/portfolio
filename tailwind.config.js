/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
  	container: {
  		center: true,
  		padding: '2rem'

  	},
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px'
  	},
  	fontFamily: {
  		primary: 'var(--font-geist-sans)',
  		secondary: 'var(--font-geist-mono)'
  	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			primary:'#1c1c22',
			accent: {
				DEFAULT: '#00ff99',
				hover: '#00e187',
			},
  		},
  	},
  },
  plugins: [require("tailwindcss-animate")],
};

