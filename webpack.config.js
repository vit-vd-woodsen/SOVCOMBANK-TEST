const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
   entry: './assets/css/main.scss',
   module: {
      rules: [{
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
      }]
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
   ]
};