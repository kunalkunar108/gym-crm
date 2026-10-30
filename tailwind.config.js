/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: { extend: { colors: { navy: { 950: '#0b1220', 900: '#111c2e', 800: '#1b2a41' }, electric: { 500: '#3978f6', 600: '#2865e8' } }, boxShadow: { soft: '0 12px 36px rgba(15, 23, 42, 0.08)' } } },
  plugins: [require('@tailwindcss/forms')],
}