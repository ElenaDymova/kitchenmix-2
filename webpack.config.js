const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/js/main.js', // Укажите ваш основной файл JS
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
