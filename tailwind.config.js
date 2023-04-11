/* eslint-disable import/no-extraneous-dependencies */

const Form = require('@tailwindcss/forms');
const daisyui = require('daisyui');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        95: '95%',
        90: '90%',
        85: '85%',
        80: '80%',
        70: '70%',
        60: '60%',
        40: '40%',
      },
      maxWidth: {
        95: '95%',
        90: '90%',
        85: '85%',
        80: '80%',
        70: '70%',
        60: '60%',
        40: '40%',
      },
      minHeight: {
        95: '95%',
        90: '90%',
        85: '85%',
        80: '80%',
        70: '70%',
        60: '60%',
        40: '40%',
        '95v': '95vh',
        '90v': '90vh',
        '50v': '50vh',
      },
    },
  },
  daisyui: {
    themes: [
      {
        remoStart: {
          warn: '##ECE8DD',
          info: '#183847',
          primary: '#ECE8DD',
          secondary: '#13D1FF',
          accent: '#4e4e4c',
          error: '#ffffff',
          neutral: '#212121',
          'base-100': '#ffffff',
          'base-200': '#ECE8DD',
        },
      },
      // {
      //     dark: {
      //         info: '#ECE8DD',
      //         primary: '#183847',
      //         secondary: '#13D1FF',
      //         accent: '#ddd',
      //         error: '#215066',
      //         neutral: '#212121',
      //         'base-100': '#000000',
      //         'base-200': '#215066',
      //     },
      // },
    ],
  },
  plugins: [daisyui, Form],
};
