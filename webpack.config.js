const {
  configureWebpack
} = require('@baaz/buildpack'); 
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require('webpack');


module.exports = async (env, argv = {}) => {

  const { clientConfig, serviceWorkerConfig } = await configureWebpack({
    context: __dirname,
    vendor: [
      'informed',
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-actions',
      'redux-thunk'
    ],
    special: {
      'buikit': {
        cssModules: true,
        esModules: true,
      },
      '@baaz/adapter': {
        esModules: true,
        cssModules: true
      }
    },
    env,
    argv
  });


  clientConfig.plugins = [
    ...clientConfig.plugins,
    new DefinePlugin({
      /**
       * Make sure to add the same constants to
       * the globals object in jest.config.js.
       */
      PWA_NAME: JSON.stringify('BAAZ PWA')
    }),
    new HtmlWebPackPlugin({
      template: "./template.html",
      filename: "./index.html"
    })
  ];

  return [clientConfig, serviceWorkerConfig];
};
