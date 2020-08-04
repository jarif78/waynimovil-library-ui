module.exports = {
  purge: [],

  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },    
    fontFamily: {
      'display': ['Manrope', 'sans-serif'],
      'body': ['Manrope', 'sans-serif'],
    },
    fontSize: {
      '2xs': '0.75rem',   //12px
      'xs': '0.875rem',   //14px
      'base': '1rem',     //16px
      'xl': '1.125rem',   //18px
      '2xl': '1.25rem',   //20px
      '3xl': '1.5rem',    //24px 
      '4xl': '2rem',      //32px
      '5xl': '2.75rem',   //44px
      '6xl': '3rem',      //48px
      '7xl': '4.625rem',  //74px
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
        800: '#0FD08B',        
        900: '#00A067',
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
        800: '#FFE05F',
        900: '#FFCC3E',
      },      
    },
    extend: {
      boxShadow: {
        newsletter: '0 20px 30px rgba(42, 24, 70, .35)',
        header: '0px 2px 6px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        '1neg':	'-0.25rem', //-> 4px	
        '2neg':	'-0.5rem',  //-> 8px	
        '3neg':	'-0.75rem', //-> 12px	
        '4neg':	'-1rem',    //-> 16px	
        '5neg':	'-1.25rem', //-> 20px	
        '6neg':	'-1.5rem',  //-> 24px	
        '7neg':	'-1.75rem', //-> 28px	
        '8neg':	'-2rem',    //-> 32px	
        '54neg': '-13.5rem',//-> 216px	
        '64neg': '-16rem',      //-> 256px
        '66neg': '-16.5rem',    //-> 264px
        '70neg': '-17.5rem',    //-> 280px
        '72neg': '-18rem',      //-> 288px
        '76neg':	'-19rem',      //-> 304px
        '80neg':	'-20rem',      //-> 320px
        px: '1px',
        '2px': '2px',
        '4px': '4px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '8px': '8px',
        '11px': '11px',
        '12px': '12px',
        '13px': '13px',
        '21px': '21px',
        '22px': '22px',
        '23px': '23px',
        '24px': '24px',
        '30px': '30px',
        '31px': '31px',
        '32px': '32px',        
        '34px': '34px',
        '36px': '36px',
        '0':  '0',
        '05':	'0.125rem',   //-> 2px	
        '1':	'0.25rem',    //-> 4px	
        '2':	'0.5rem',     //-> 8px	
        '3':	'0.75rem',	  //-> 12px	
        '4':	'1rem',       //-> 16px	
        '5':	'1.25rem',    //-> 20px	
        '6':	'1.5rem',     //-> 24px
        '7':	'1.75rem',    //-> 28px	
        '8':	'2rem',       //-> 32px	
        '9':	'2.25rem',    //-> 36px	
        '10':	'2.5rem',     //-> 40px	
        '11':	'2.75rem',    //-> 44px	
        '12':	'3rem',       //-> 48px	
        '13':	'3.25rem',    //-> 52px
        '14':	'3.5rem',     //-> 56px
        '15':	'3.75rem',    //-> 60px
        '16':	'4rem',       //-> 64px	
        '18':	'4.5rem',     //-> 72px
        '19':	'4.75rem',    //-> 76px	
        '20':	'5rem',       //-> 80px	
        '22':	'5.5rem',     //-> 88px
        '23':	'5.75rem',    //-> 92px	
        '24':	'6rem',       //-> 96px	
        '26':	'6.5rem',     //-> 104px
        '30':	'7.5rem',     //-> 120px  
        '32':	'8rem',       //-> 128px                                                                                                                                                                                                                                                                                                                                                                                                  
        '35':	'8.75rem',    //-> 140px
        '38':	'9.5rem',     //-> 152px	
        '40':	'10rem',      //-> 160px	
        '43':	'10.75rem',   //-> 172px	
        '46':	'11.5rem',    //-> 184px	
        '48':	'12rem',      //-> 192px
        '54': '13.5rem',    //-> 216px	
        '56':	'14rem',      //-> 224px	
        '57':	'14.25rem',   //-> 228px
        '64':	'16rem',      //-> 256px
        '66':	'16.5rem',    //-> 264px
        '70': '17.5rem',    //-> 280px
        '72': '18rem',      //-> 288px
        '73': '18.25rem',   //-> 292px
        '74':	'18.5rem',    //-> 296px
        '75':	'18.75rem',   //-> 300px
        '76':	'19rem',      //-> 304px
        '80':	'20rem',      //-> 320px
        '83': '20.75rem',   //-> 332px
        '84':	'21rem',      //-> 336px  
        '86':	'21.5rem',    //-> 344px  
        '90': '22.5rem',    //-> 360px                                                                                                                                                                                                       '
        '95':	'23.75rem',   //-> 380px
        '96': '24rem',      //-> 384px
        '100': '25rem',     //-> 400px
        '113': '28.25rem',  //-> 452px
        '120': '30rem',     //-> 480px
        '122': '30.5rem',   //-> 488px
        '123': '30.75rem',  //-> 492px
        '125': '31.25rem',  //-> 500px
        '132': '33rem',     //-> 528px
        '200': '50rem',     //800px
      },
      borderRadius: {        
        '2xl': '38px',
      },
    },
  },

  variants: {
    opacity: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    outline: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    borderRadius: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    fontSize: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    cursor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
  },

  plugins: [
    require('@tailwindcss/ui'),
  ],
}
