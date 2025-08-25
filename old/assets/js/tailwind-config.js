// Loaded before Tailwind CDN in index.html
tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          heading: ['Montserrat', 'sans-serif'],
          body: ['Open Sans', 'sans-serif'],
        },
        colors: {
          brand: {
            50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc', 300: '#67e8f9',
            400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490',
            800: '#155e75', 900: '#164e63'
          },
          primary: '#06b6d4',
          secondary: '#0e7490',
          accent: '#22d3ee',
          neutral: '#1e293b'
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'float-delayed': 'float 6s ease-in-out infinite 2s',
          'float-slow': 'float 8s ease-in-out infinite 1s',
          'pulse-slow': 'pulse 4s ease-in-out infinite',
          'slide-in': 'slideIn 0.5s ease-out',
          'fade-in': 'fadeIn 0.8s ease-out',
          'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
          'spin-slow': 'spin 3s linear infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' }
          },
          slideIn: {
            '0%': { transform: 'translateX(-100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' }
          },
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' }
          },
          bounceGentle: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' }
          }
        }
      }
    }
  };
  