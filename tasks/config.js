const path = require('path');

exports.IS_PROD = process.env.ENV === 'production';

exports.watchInterval = 1000;

exports.cssPath = {
  dataDir: path.resolve(__dirname, '..', 'data'),
  sourceDir: path.resolve(__dirname, '..', 'src'),
  staticDir: path.resolve(__dirname, '..', 'static'),
};

exports.imagesPath = {
  sourceDir: path.resolve(__dirname, '..', 'src'),
  staticDir: path.resolve(__dirname, '..', 'static'),
};
