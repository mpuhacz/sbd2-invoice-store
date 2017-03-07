var webpack = require('webpack');

module.exports = {
  entry: {
    index: './js/index.js',
    vendor: ['vue', 'axios']
  },
  output: {
    filename: '[name].js',
    path: './static'
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jquery': 'jquery',
        'datepicker': 'bootstrap-datepicker',
        'select2': 'select2',
        'Vue': 'vue'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity)
  ],
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules|query-builder(.*)\.min\.js/ },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    alias: {
      'jQuery.datepicker': 'bootstrap-datepicker',
      'select2': 'select2',
    }
  },
  node: {
    fs: "empty"
  }
};
