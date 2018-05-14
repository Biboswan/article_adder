const ManifestPlugin = require('webpack-manifest-plugin');

exports.manifest = new ManifestPlugin({
    fileName: 'asset-manifest.json',  
  });