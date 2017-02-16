module.exports = {
  // webpack folder’s entry js
  entry: './docsCode/docs.js',
  output: {
    path: 'assets/js/',
    filename: 'bundle.js'
  },
  module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }
    ]
  }
};
