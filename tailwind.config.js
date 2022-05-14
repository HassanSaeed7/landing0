module.exports = {
  content: ["./src/*.html"],
  mode: 'jit',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "dark": "#222228",
      "mid": "#6f7a7b",
      "light": "#91b9ac",
      "accent": "#f8c3cb",
      "white": "#ffffff",
      "black": "#000000"
    },
    minHeight: {
      '1/3': '33vh',
      '1/2': '50vh',
      'screen': '100vh'
    },
    extend: {
      keyframes: {
        scrolling: {
          '0%': { left: '0' },
          '100%': { left: '-200%' },
        }
      },
      animation: {
        'scroll': 'scrolling 30s linear infinite',
      },
      width: {
        '300%': '300%',
        '798': '798px',
        '1440': '1440px'
      }
    },
  },
  plugins: [],
}
