module.exports = {
  purge: [],

  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },    
    fontFamily: {
      'display': ['Manrope', 'sans-serif'],
      'body': ['Manrope', 'sans-serif'],
    },
    fontSize: {
      '2xs': '0.75rem',
      'xs': '0.875rem',
      'base': '1rem',
      'xl': '1.125rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.75rem',
      '6xl': '4.625rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#2A1846',
      white: '#FFFFFF',

      gray: {
        100: '#F8F8F6',        
        300: '#EEEEF0',        
        500: '#D1D1D7',        
        900: '#575372',
      },  
      green: {
        100: '#CFF6E8',        
        900: '#0FD08B',
      }, 
      blue: {
        100: '#DAE9FC',                
        500: '#6CA5F5',        
        900: '#478FF2',
      }, 
      purple: {
        900: '#442E83',
      }, 
      red: {
        100: '#FEE0D9',        
        900: '#F96440',
      }, 
      yellow: {
        100: '#FFF9DF',                
        500: '#FFEC9F',        
        900: '#FFE05F',
      },      
    },
    extend: {
      boxShadow: {
        newsletter: '0 20px 30px rgba(42, 24, 70, .35)',
        header: '0px 2px 6px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        'px-300': '300px',
      },
    },
  },

  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled']
  },

  plugins: [],
}
