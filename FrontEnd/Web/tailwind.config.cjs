/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  
  /*O ocnteudo q ele vai ler */
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  /*Fazer rodar, minuto 48:50 Aula 4*/
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      sky: colors.sky},
    extend: {}
  },
  plugins: [],
}

/*https://tailwindcss.com/docs/installation/using-postcss ===> PRA INSTALAR*/
/*Tailwind CSS IntelliSense ==> Extensão */

// const colors = require('tailwindcss/colors')

// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
//   theme: {
//     colors: {
//       transparent: 'transparent',
//       current: 'currentColor',
//       black: colors.black,
//       white: colors.white,
//       gray: colors.gray,
//       emerald: colors.emerald,
//       indigo: colors.indigo,
//       yellow: colors.yellow,
//       blue: colors.blue,
//       sky: colors.sky,
//       AzureRadiant: {
//         100: '#00aeff'
//       },
//       CuriousBlue: {
//         100: '#3ea1db'
//       }
//     },
//     extend: {}
//   },
//   plugins: []
// }