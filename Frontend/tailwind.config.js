/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
// export default {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}',
//   "./node_modules/flowbite/**/*.js",
//   './src/**/*.html', './node_modules/flowbite/**/*.js'
  
// ],
//   theme: {
//     extend: {},
//   },
  
//   plugins: [require('flowbite/plugin')],
// }
module.exports = {
    content: [
      flowbite.content(),
      './src/**/*.{js,jsx,ts,tsx}',
  "./node_modules/flowbite/**/*.js",
  './src/**/*.html', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
     
        backgroundImage: {
          'carousel1': "url('./src/assets/doctors1.png')",
          'carousel1': "url('./src/assets/doctors.jpg')",
          'carousel1': "url('./src/assets/doctors2.jpg')",
          
        },
        keyframes: {
          l2: {
            to: { transform: 'rotate(1turn)' },
          },
        },
        animation: {
          l2: 'l2 1s infinite linear',
        },
      
    },
  },
  
  plugins: [
    flowbite.plugin(),
    // require('flowbite/plugin'),
    
  ],
}

