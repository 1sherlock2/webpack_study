const path = require('path')

const config = {
  mode: 'development',
  entry: './server/server.js',
  output: {
    filename: 'server.[chunkhash].js',
    path: path.resolve(__dirname, 'serverPublic'),
    
  }
}