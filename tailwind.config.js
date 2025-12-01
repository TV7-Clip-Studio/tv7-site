/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        tv7: {
          // Midnight blue-tinted backgrounds (brighter)
          bg: '#0F1419',
          bgSecondary: '#161B22',
          surface: '#1F2937',

          // Brand colors (strategic use only)
          cyan: '#00E5FF',
          cyanSoft: '#4DD4F4',
          violet: '#7A5CFF',
          violetSoft: '#9B82FF',

          // Brighter borders for better visibility
          border: '#374151',
          borderStrong: '#4B5563',

          // Brighter text colors (better contrast)
          text: {
            primary: '#F3F4F6',
            secondary: '#D1D5DB',
            tertiary: '#9CA3AF',
          },

          // Warm accent (timeline markers)
          amber: '#F59E0B',
          amberSoft: '#FCD34D',

          // Legacy colors (updated to match new palette)
          panel: '#1F2937',
          deep: '#161B22',
          ink: '#1F2937',
          muted: '#1F2937',
        },
      },
      fontFamily: {
        display: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Professional depth (not glows)
        panel: '0 2px 8px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',

        // Minimal accent glow (CTA buttons ONLY)
        'accent-subtle': '0 4px 12px rgba(0, 229, 255, 0.15)',
        'accent-hover': '0 6px 16px rgba(0, 229, 255, 0.25)',

        // Legacy shadows (for gradual migration)
        glow: '0 2px 8px rgba(0, 0, 0, 0.6)',
        'violet-glow': '0 2px 8px rgba(0, 0, 0, 0.6)',
        'cyan-strong': '0 4px 12px rgba(0, 229, 255, 0.15)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 20% 20%, rgba(0,229,255,0.12), transparent 25%), radial-gradient(circle at 80% 30%, rgba(122,92,255,0.14), transparent 30%)',
      },
    },
  },
  plugins: [],
};
