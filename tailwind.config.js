export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f8fbff',
        surface: '#ffffff',
        surface2: '#eff5ff',
        brand: '#2563EB',
        accent: '#3B82F6',
        soft: '#93C5FD',
        text: '#0f172a',
        muted: '#64748B',
      },
      boxShadow: {
        glow: '0 30px 80px rgba(37, 99, 235, 0.12)',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
