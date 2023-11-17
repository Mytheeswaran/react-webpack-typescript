const webpackCommon = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = (envVars) => {
  const { env } = envVars // This env value comes from webpack cli command with flag --env env=dev (dev should match the file name webpack.dev.js)
  const webpackEnv = require(`./webpack.${env}.js`)
  const finalWebpack = merge(webpackCommon, webpackEnv)
  return finalWebpack
}
