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
        spin: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'scroll': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}
