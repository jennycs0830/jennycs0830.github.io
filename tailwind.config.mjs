/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: { extend: { colors: { ink: '#18251f', moss: '#58745e', paper: '#f5f4ee', clay: '#bb674b' }, fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'], serif: ['Georgia', 'serif'] } } },
  plugins: [],
};
