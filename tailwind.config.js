/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}", // adjust depending on your setup
  ],
  theme: {
    extend: {
      colors: {
        // Base colors (existing palette)
        'alice-blue': '#e9f5fb',
        'columbia-blue': '#cedee6',
        'columbia-blue-2': '#b2c6d0',
        'cadet-gray': '#7b96a5',
        'paynes-gray': '#44667a',
        'prussian-blue': '#0d364e',
        'rich-black': '#071d29',
        'rich-black-2': '#061720',
        'rich-black-3': '#041017',
        'black': '#010304',

        // Added warm palette (from issue)
        'seashell': '#fbf0e9ff',
        'champagne-pink': '#f7dfd1ff',
        'buff': '#ebac87ff',
        'cocoa-brown': '#da6725ff',
        'russet': '#743714ff',
        'licorice': '#271307ff',
        'smoky-black': '#0d0602ff',

        // Optional shades (HSL equivalents, if you want HSL utility variants)
        hsl: {
          'alice-blue': '200 69% 95%',
          'columbia-blue': '200 32% 85%',
          'columbia-blue-2': '200 24% 76%',
          'cadet-gray': '201 19% 56%',
          'paynes-gray': '202 28% 37%',
          'prussian-blue': '202 71% 18%',
          'rich-black': '201 71% 9%',
          'rich-black-2': '201 68% 7%',
          'rich-black-3': '202 70% 5%',
          'black': '200 60% 1%',

          // Warm palette HSL (alpha omitted to match existing style)
          'seashell': '23 69% 95%',
          'champagne-pink': '22 70% 89%',
          'buff': '22 71% 73%',
          'cocoa-brown': '22 71% 50%',
          'russet': '22 71% 27%',
          'licorice': '23 70% 9%',
          'smoky-black': '22 73% 3%',
        },
      },
      backgroundImage: {
        // Existing palette gradients
        'gradient-top':
          'linear-gradient(0deg, #e9f5fb, #cedee6, #b2c6d0, #7b96a5, #44667a, #0d364e, #071d29, #061720, #041017, #010304)',
        'gradient-right':
          'linear-gradient(90deg, #e9f5fb, #cedee6, #b2c6d0, #7b96a5, #44667a, #0d364e, #071d29, #061720, #041017, #010304)',
        'gradient-bottom':
          'linear-gradient(180deg, #e9f5fb, #cedee6, #b2c6d0, #7b96a5, #44667a, #0d364e, #071d29, #061720, #041017, #010304)',
        'gradient-left':
          'linear-gradient(270deg, #e9f5fb, #cedee6, #b2c6d0, #7b96a5, #44667a, #0d364e, #071d29, #061720, #041017, #010304)',
        'gradient-top-right':
          'linear-gradient(45deg, #e9f5fb, #cedee6, #b2c6d0, #7b96a5, #44667a, #0d364e, #071d29, #061720, #041017, #010304)',
        'gradient-bottom-right':
          'linear-gradient(135deg, #e9f5fb, #cedee6, #b2c6d0, #7b96a5, #44667a, #0d364e, #071d29, #061720, #041017, #010304)',
        'gradient-top-left':
          'linear-gradient(225deg, #e9f5fb, #cedee6, #b2c6d0, #7b96a5, #44667a, #0d364e, #071d29, #061720, #041017, #010304)',
        'gradient-bottom-left':
          'linear-gradient(315deg, #e9f5fb, #cedee6, #b2c6d0, #7b96a5, #44667a, #0d364e, #071d29, #061720, #041017, #010304)',
        'gradient-radial':
          'radial-gradient(#e9f5fb, #cedee6, #b2c6d0, #7b96a5, #44667a, #0d364e, #071d29, #061720, #041017, #010304)',

        // Warm palette gradients (added)
        'warm-gradient-top':
          'linear-gradient(0deg, #fbf0e9ff, #f7dfd1ff, #ebac87ff, #da6725ff, #743714ff, #271307ff, #0d0602ff)',
        'warm-gradient-right':
          'linear-gradient(90deg, #fbf0e9ff, #f7dfd1ff, #ebac87ff, #da6725ff, #743714ff, #271307ff, #0d0602ff)',
        'warm-gradient-bottom':
          'linear-gradient(180deg, #fbf0e9ff, #f7dfd1ff, #ebac87ff, #da6725ff, #743714ff, #271307ff, #0d0602ff)',
        'warm-gradient-left':
          'linear-gradient(270deg, #fbf0e9ff, #f7dfd1ff, #ebac87ff, #da6725ff, #743714ff, #271307ff, #0d0602ff)',
        'warm-gradient-top-right':
          'linear-gradient(45deg, #fbf0e9ff, #f7dfd1ff, #ebac87ff, #da6725ff, #743714ff, #271307ff, #0d0602ff)',
        'warm-gradient-bottom-right':
          'linear-gradient(135deg, #fbf0e9ff, #f7dfd1ff, #ebac87ff, #da6725ff, #743714ff, #271307ff, #0d0602ff)',
        'warm-gradient-top-left':
          'linear-gradient(225deg, #fbf0e9ff, #f7dfd1ff, #ebac87ff, #da6725ff, #743714ff, #271307ff, #0d0602ff)',
        'warm-gradient-bottom-left':
          'linear-gradient(315deg, #fbf0e9ff, #f7dfd1ff, #ebac87ff, #da6725ff, #743714ff, #271307ff, #0d0602ff)',
        'warm-gradient-radial':
          'radial-gradient(#fbf0e9ff, #f7dfd1ff, #ebac87ff, #da6725ff, #743714ff, #271307ff, #0d0602ff)',
      },
    },
  },
  plugins: [],
};
