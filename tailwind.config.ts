import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink: '#07111f', line: '#1c3045', mist: '#eaf0f5', signal: '#b7f170' }, fontFamily: { sans: ['var(--font-inter)', 'Arial', 'sans-serif'] } } }, plugins: [] };
export default config;
