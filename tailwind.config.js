/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0a0a0f',
        'cyber-navy': '#1a1a2e',
        'cyber-deep': '#16213e',
        'cyber-mid': '#0f3460',
        'neon-pink': '#ff006e',
        'neon-cyan': '#00f5ff',
        'neon-purple': '#b565f0',
        'neon-yellow': '#f0f000',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'neon-flicker': 'neon-flicker 1.5s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 0, 110, 0.5), 0 0 40px rgba(255, 0, 110, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 0, 110, 0.8), 0 0 80px rgba(255, 0, 110, 0.5)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'neon-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
          '75%': { opacity: '0.9' },
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        'neon-gradient': 'linear-gradient(90deg, #ff006e, #b565f0, #00f5ff, #ff006e)',
        'card-gradient': 'linear-gradient(180deg, rgba(255,0,110,0.1) 0%, rgba(181,101,240,0.1) 50%, rgba(0,245,255,0.1) 100%)',
      },
    },
  },
  plugins: [],
};
